import { useRef } from "react";
import CardComImagem from "./CardComImagem.jsx";

const Carrossel = ({ itens }) => {
  const trilhoRef = useRef(null);

  const mover = (direcao) => {
    const trilho = trilhoRef.current;
    if (!trilho) return;

    trilho.scrollBy({
      left: direcao * trilho.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl px-12">
      <div
        ref={trilhoRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2 md:gap-6"
        role="region"
        aria-label="Cards sobre problemas de saneamento"
      >
        {itens.map(({ titulo, subtitulo }, index) => (
          <div
            key={titulo}
            className="w-[85%] shrink-0 snap-start sm:w-[65%] md:w-[calc((100%-1.5rem)/2)]"
            role="group"
            aria-label={`Card ${index + 1} de ${itens.length}`}
          >
            <CardComImagem titulo={titulo} subtitulo={subtitulo} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => mover(-1)}
        aria-label="Cards anteriores"
        className="absolute left-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
          <path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => mover(1)}
        aria-label="Proximos cards"
        className="absolute right-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
          <path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default Carrossel;
