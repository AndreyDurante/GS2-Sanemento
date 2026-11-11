import { useRef, useState } from "react";
import CardCarrossel from "./CardCarrossel.jsx";

const Carrossel = ({ itens }) => {
  const trilhoRef = useRef(null);
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  const irPara = (indice) => {
    const trilho = trilhoRef.current;
    if (!trilho) return;

    trilho.scrollTo({
      left: indice * trilho.clientWidth,
      behavior: "smooth",
    });
    setIndiceAtivo(indice);
  };

  const mover = (direcao) => {
    const novoIndice = Math.max(0, Math.min(itens.length - 1, indiceAtivo + direcao));
    irPara(novoIndice);
  };

  const handleScroll = () => {
    const trilho = trilhoRef.current;
    if (!trilho || trilho.clientWidth === 0) return;
    const indice = Math.round(trilho.scrollLeft / trilho.clientWidth);
    if (indice !== indiceAtivo && indice >= 0 && indice < itens.length) {
      setIndiceAtivo(indice);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl px-14">
      <div
        ref={trilhoRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Cards de soluções"
      >
        {itens.map(({ titulo, subtitulo, imagem, altImagem }, index) => (
          <div
            key={titulo}
            className="w-full shrink-0 snap-center px-1 flex items-center justify-center"
            role="group"
            aria-label={`Slide ${index + 1} de ${itens.length}`}
          >
            <CardCarrossel
              titulo={titulo}
              subtitulo={subtitulo}
              imagem={imagem}
              altImagem={altImagem}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => mover(-1)}
        disabled={indiceAtivo === 0}
        aria-label="Card anterior"
        className="absolute left-0 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-gray-800 shadow-md ring-1 ring-black/5 transition hover:bg-gray-100 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
          <path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => mover(1)}
        disabled={indiceAtivo === itens.length - 1}
        aria-label="Próximo card"
        className="absolute right-0 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white text-gray-800 shadow-md ring-1 ring-black/5 transition hover:bg-gray-100 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
          <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      {/* Indicadores de slide (bolinhas/dots) */}
      <div className="mt-6 flex justify-center items-center gap-2">
        {itens.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => irPara(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              indiceAtivo === index
                ? "w-8 h-2.5 bg-verde-agua"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
