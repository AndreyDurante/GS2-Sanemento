import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  Loader,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ *
 *  CONFIGURAÇÃO — ajuste aqui sem mexer no resto
 * ------------------------------------------------------------------ */

// Arquivos dentro de /public
const STREET_SRC = "/rua-sem-bueiro.png"; // imagem da rua (sem bueiro)
const MODEL_SRC = "/water_manhole_cover.glb"; // modelo 3D da tampa

// Proporção da imagem da rua (largura / altura). A sua é 1672x941.
const STREET_ASPECT = 1672 / 941;

// Onde o bueiro fica DENTRO da imagem (0 a 1; y conta de cima para baixo)
// e quanto da largura da imagem ele ocupa. Valores medidos na foto original.
const MANHOLE_UV = { x: 0.5, y: 0.49 };
const MANHOLE_WIDTH_RATIO = 0.114;

// Câmera olhando de cima para baixo
const FOV = 35;
const CAM_HEIGHT = 10;

// Quanto de scroll a intro ocupa (em alturas de tela)
const SCROLL_LENGTH_VH = 400;

// Fases da animação (0 a 1 = progresso do scroll)
const PHASE = {
  unscrew: [0.0, 0.3], // tampa gira e sobe (rosqueando)
  slide: [0.3, 0.48], // tampa sai de cima do buraco
  zoom: [0.25, 0.82], // câmera mergulha no buraco
  fade: [0.82, 0.97], // tela escurece e libera o site
};

/* ------------------------------------------------------------------ *
 *  Utilitários
 * ------------------------------------------------------------------ */

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (p, [a, b]) => clamp01((p - a) / (b - a));
const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Textura circular com degradê (usada no buraco e na sombra da tampa)
function makeRadialTexture(stops) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  stops.forEach(([offset, color]) => g.addColorStop(offset, color));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ------------------------------------------------------------------ *
 *  Cena 3D
 * ------------------------------------------------------------------ */

function Scene({ progress }) {
  const size = useThree((s) => s.size);
  const street = useTexture(STREET_SRC);
  const { scene } = useGLTF(MODEL_SRC);

  const coverRef = useRef();
  const shadowRef = useRef();
  const smooth = useRef(0);

  useLayoutEffect(() => {
    street.colorSpace = THREE.SRGBColorSpace;
    street.anisotropy = 8;
  }, [street]);

  // Medidas do modelo (diâmetro, espessura, centro)
  const model = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    return {
      size: box.getSize(new THREE.Vector3()),
      center: box.getCenter(new THREE.Vector3()),
    };
  }, [scene]);

  // Texturas procedurais
  const holeTex = useMemo(
    () =>
      makeRadialTexture([
        [0, "rgba(0,0,0,1)"],
        [0.86, "rgba(0,0,0,1)"],
        [1, "rgba(0,0,0,0)"],
      ]),
    [],
  );
  const shadowTex = useMemo(
    () =>
      makeRadialTexture([
        [0, "rgba(0,0,0,0.6)"],
        [0.55, "rgba(0,0,0,0.35)"],
        [1, "rgba(0,0,0,0)"],
      ]),
    [],
  );

  // Layout: a rua "cobre" a tela (como background-size: cover),
  // e o bueiro acompanha a rua em qualquer tamanho de tela.
  const layout = useMemo(() => {
    const aspect = size.width / size.height;
    const tanHalf = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
    const visH = 2 * CAM_HEIGHT * tanHalf;
    const visW = visH * aspect;

    const planeW = aspect > STREET_ASPECT ? visW : visH * STREET_ASPECT;
    const planeH = planeW / STREET_ASPECT;

    const diameter = MANHOLE_WIDTH_RATIO * planeW;
    const radius = diameter / 2;
    const cx = (MANHOLE_UV.x - 0.5) * planeW;
    const cz = (MANHOLE_UV.y - 0.5) * planeH;

    // Altura final da câmera: o buraco preenche a tela inteira
    const endHeight = (0.5 * radius * 1.0) / (tanHalf * Math.min(1, aspect));

    return {
      planeW,
      planeH,
      diameter,
      radius,
      cx,
      cz,
      endHeight,
      modelScale: diameter / model.size.x,
    };
  }, [size.width, size.height, model.size.x]);

  const { planeW, planeH, diameter, radius, cx, cz, endHeight, modelScale } =
    layout;
  const restY = (model.size.y * modelScale) / 2 + 0.003; // tampa apoiada na rua

  useFrame((state, delta) => {
    // Suaviza o scroll para a animação não ficar "tremida"
    smooth.current = THREE.MathUtils.damp(
      smooth.current,
      progress.current,
      6,
      delta,
    );
    const p = smooth.current;

    const unscrew = easeInOut(range(p, PHASE.unscrew));
    const slide = easeInOut(range(p, PHASE.slide));
    const zoom = easeInOut(range(p, PHASE.zoom));

    // Tampa: gira + sobe, depois desliza para fora (direita)
    const cover = coverRef.current;
    const lift = unscrew * diameter * 0.55;
    cover.position.set(
      cx + slide * (planeW * 0.5 + diameter),
      restY + lift,
      cz,
    );
    cover.rotation.y = -unscrew * Math.PI * 5; // 2,5 voltas

    // Sombra falsa no chão: some conforme a tampa sobe e sai
    const shadow = shadowRef.current;
    shadow.position.set(
      cx + slide * (planeW * 0.5 + diameter) + lift * 0.25,
      0.002,
      cz + lift * 0.25,
    );
    const shadowSize = diameter * (1.15 + unscrew * 0.35);
    shadow.scale.set(shadowSize, shadowSize, 1);
    shadow.material.opacity = (1 - unscrew * 0.55) * (1 - slide);

    // Câmera: mergulha no buraco (zoom exponencial = sensação constante)
    const h = CAM_HEIGHT * Math.pow(endHeight / CAM_HEIGHT, zoom);
    const camX = cx * zoom;
    const camZ = cz * zoom;
    state.camera.position.set(camX, h, camZ);
    state.camera.up.set(0, 0, -1);
    state.camera.lookAt(camX, 0, camZ);
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 8, 2]} intensity={2.2} />
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={4}
          position={[0, 6, 0]}
          rotation-x={-Math.PI / 2}
          scale={[12, 12, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.5}
          position={[-6, 3, 3]}
          rotation-y={Math.PI / 2}
          scale={[6, 4, 1]}
        />
      </Environment>

      {/* Rua */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[planeW, planeH]} />
        <meshBasicMaterial map={street} toneMapped={false} />
      </mesh>

      {/* Buraco escuro */}
      <mesh
        position={[cx, 0.001, cz]}
        rotation={[-Math.PI / 2, 0, 0]}
        renderOrder={1}
      >
        <planeGeometry args={[radius * 2.2, radius * 2.2]} />
        <meshBasicMaterial
          map={holeTex}
          transparent
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Sombra da tampa */}
      <mesh ref={shadowRef} rotation={[-Math.PI / 2, 0, 0]} renderOrder={2}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={shadowTex}
          transparent
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Tampa do bueiro.
          O modelo vem com a face decorada virada para baixo,
          então o grupo interno gira 180° em X para ela ficar para cima. */}
      <group ref={coverRef} scale={modelScale}>
        <group rotation={[0, 0, 0]}>
          <primitive
            object={scene}
            position={[-model.center.x, -model.center.y, -model.center.z]}
          />
        </group>
      </group>
    </>
  );
}

/* ------------------------------------------------------------------ *
 *  Componente da seção
 * ------------------------------------------------------------------ */

export default function IntroBueiro({ onConcluida }) {
  const wrapperRef = useRef(null);
  const overlayRef = useRef(null);
  const hintRef = useRef(null);
  const progress = useRef(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const p = self.progress;
        progress.current = p;
        onConcluida?.(p >= 1);
        // DOM direto (sem useState) para não re-renderizar a cada scroll
        overlayRef.current.style.opacity = range(p, PHASE.fade);
        hintRef.current.style.opacity = 1 - range(p, [0, 0.06]);
      },
    });
    onConcluida?.(trigger.progress >= 1);
    return () => trigger.kill();
  }, [onConcluida]);

  return (
    <section
      ref={wrapperRef}
      className="relative bg-black"
      style={{ height: `${SCROLL_LENGTH_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: true }}
          camera={{
            fov: FOV,
            near: 0.05,
            far: 100,
            position: [0, CAM_HEIGHT, 0],
          }}
        >
          <Suspense fallback={null}>
            <Scene progress={progress} />
          </Suspense>
        </Canvas>

        {/* Preto que cobre a tela no final e emenda com a próxima seção */}
        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-0 bg-black"
          style={{ opacity: 0 }}
        />

        <p
          ref={hintRef}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/80"
        >
          Role para baixo
        </p>

        <Loader />
      </div>
    </section>
  );
}

useGLTF.preload(MODEL_SRC);
useTexture.preload(STREET_SRC);
