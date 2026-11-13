import { useState } from "react";

const CardEtapa = ({ titulo, subtitulo, ativo, onClick }) => (
  <button
    type="button"
    aria-pressed={ativo}
    onClick={onClick}
    className={`w-full cursor-pointer rounded-2xl p-5 text-left shadow-sm ring-1 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
      ativo
        ? "bg-black ring-emerald-400 shadow-md"
        : "bg-black ring-white/10 hover:ring-emerald-300/40"
    }`}
  >
    <h3 className="text-lg font-bold text-white">
      {titulo}
    </h3>
    <p className="mt-2 text-sm leading-relaxed text-white/70">
      {subtitulo}
    </p>
  </button>
);

const Etapas = () => {
  const [etapaAtiva, setEtapaAtiva] = useState(1);

  return (
  <section aria-label="Etapas da solução" className="w-full rounded-3xl border border-white/10 bg-black p-4 shadow-inner sm:p-5">
    <h2 className="mb-4 text-left text-3xl font-bold tracking-tight text-white sm:text-3xl ps-2">
      Etapas
    </h2>
    <div className="flex flex-col gap-3">
    <CardEtapa
      titulo="1. Identificação do problema"
      subtitulo="Mapeamos as necessidades de saneamento e os principais desafios enfrentados pela comunidade."
      ativo={etapaAtiva === 1}
      onClick={() => setEtapaAtiva(1)}
    />
    <CardEtapa
      titulo="2. Planejamento das ações"
      subtitulo="Definimos soluções sustentáveis em conjunto com moradores, especialistas e parceiros locais."
      ativo={etapaAtiva === 2}
      onClick={() => setEtapaAtiva(2)}
    />
    <CardEtapa
      titulo="3. Implementação"
      subtitulo="Colocamos os projetos em prática com tecnologias adequadas à realidade de cada região."
      ativo={etapaAtiva === 3}
      onClick={() => setEtapaAtiva(3)}
    />
    <CardEtapa
      titulo="4. Acompanhamento"
      subtitulo="Monitoramos os resultados para avaliar o impacto e aprimorar as ações ao longo do tempo."
      ativo={etapaAtiva === 4}
      onClick={() => setEtapaAtiva(4)}
    />
    </div>
  </section>
  );
};

export default Etapas;
