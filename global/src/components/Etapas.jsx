import { useState } from "react";

const etapas = [
  {
    titulo: "Detecção inicial",
    resumo: "Moradores e sensores sinalizam possíveis ocorrências.",
    descricao:
      "O mapa começa a partir de um relato da comunidade ou de uma leitura ambiental em um ponto estratégico. Cada registro indica um possível problema e ajuda a orientar a próxima verificação.",
    detalhes: [
      "Moradores podem enviar foto, localização e descrição de sinais como odor forte, água escura, lixo acumulado ou esgoto aparente.",
      "Sensores instalados em postes podem monitorar gases associados à decomposição de matéria orgânica, como H₂S e NH₃.",
    ],
    destaque: "Uma leitura isolada é registrada como indício, não como confirmação de esgoto.",
  },
  {
    titulo: "Triagem e validação",
    resumo: "Sinais diferentes são cruzados para estimar a suspeita.",
    descricao:
      "Antes de avançar, o sistema verifica se as informações são consistentes. A triagem ajuda a reduzir falsos alarmes e a priorizar os locais que precisam de atenção.",
    detalhes: [
      "Confere falhas, picos isolados e leituras persistentes dos sensores, além de buscar relatos próximos e, quando possível, confirmação da comunidade.",
      "Fotos podem receber uma classificação inicial. Dados territoriais ajudam a considerar fontes alternativas, como ETEs, granjas e áreas naturalmente alagadas.",
      "A combinação dos sinais classifica o local como suspeita alta, média ou baixa prioridade. Só os casos com pontuação suficiente avançam.",
    ],
    destaque: "A classificação indica prioridade de investigação; não é um laudo de contaminação.",
  },
  {
    titulo: "Análise por satélite",
    resumo: "Imagens acrescentam contexto aos locais prioritários.",
    descricao:
      "Para pontos com maior pontuação de suspeita, imagens de satélite ajudam a compreender o ambiente ao redor e a observar possíveis mudanças ao longo do tempo.",
    detalhes: [
      "A análise considera áreas alagadas, córregos e outros corpos d’água próximos.",
      "Também observa padrões visuais associados a áreas degradadas ou a mudanças no entorno.",
      "Os resultados são combinados com os relatos e as leituras reunidos nas etapas anteriores.",
    ],
    destaque: "Imagens de satélite não identificam esgoto diretamente; elas podem fortalecer ou reduzir uma suspeita.",
  },
  {
    titulo: "Alerta às ONGs parceiras",
    resumo: "Casos de suspeita alta são encaminhados para avaliação.",
    descricao:
      "Quando os indícios são consistentes e a classificação é alta, ONGs e organizações cadastradas recebem um alerta para avaliar uma possível atuação no local.",
    detalhes: [
      "O alerta pode reunir localização aproximada, datas, fotos, leituras dos sensores e resultados das análises disponíveis.",
      "As informações e o nível de prioridade ajudam a orientar vistorias, campanhas de conscientização ou ações de apoio.",
    ],
    destaque: "A confirmação definitiva depende de vistoria em campo e, quando necessário, análise da água ou exames laboratoriais.",
  },
];

const CardEtapa = ({ etapa, indice, ativo, onClick }) => (
  <button
    type="button"
    aria-pressed={ativo}
    onClick={onClick}
    className="w-full cursor-pointer rounded-xl border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:rounded-2xl sm:p-5"
    style={{
      backgroundColor: ativo ? "#6ee7b7" : "#050505",
      color: ativo ? "#000000" : "#ffffff",
      borderColor: ativo ? "#6ee7b7" : "rgba(255,255,255,0.12)",
    }}
  >
    <span className="flex items-start gap-2 sm:gap-3">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-black/10 text-xs font-bold sm:size-8 sm:text-sm">
        {indice + 1}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold sm:text-lg">{etapa.titulo}</span>
        <span className="mt-2 block text-sm leading-relaxed opacity-75">
          {etapa.resumo}
        </span>
      </span>
    </span>
  </button>
);

const ConteudoEtapa = ({ etapa, indice }) => (
  <article aria-live="polite" className="flex flex-col justify-center py-2 sm:py-6">
    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
      Etapa {indice + 1} de {etapas.length}
    </p>
    <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{etapa.titulo}</h3>
    <p className="mt-4 text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">
      {etapa.descricao}
    </p>
    <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
      {etapa.detalhes.map((detalhe) => (
        <li key={detalhe} className="flex gap-3 text-sm leading-relaxed text-white/75 sm:text-base">
          <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-emerald-300" />
          {detalhe}
        </li>
      ))}
    </ul>
    <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-emerald-100/85 sm:mt-7 sm:pt-5">
      {etapa.destaque}
    </p>
  </article>
);

const Etapas = () => {
  const [etapaAtiva, setEtapaAtiva] = useState(0);
  const etapa = etapas[etapaAtiva];

  return (
    <section
      id="selecao-solucao"
      aria-label="Etapas da solução"
      className="solution-steps-layout w-full items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-3 sm:gap-8 sm:p-8 lg:min-h-[36rem] lg:gap-12 lg:p-10"
    >
      <div className="solution-steps-mobile">
        <h3 className="mb-4 text-center text-xl font-bold text-white">Etapas</h3>
        <div className="grid grid-cols-4 gap-2 sm:gap-3" role="group" aria-label="Escolha uma etapa">
          {etapas.map((item, index) => {
            const ativo = etapaAtiva === index;
            return (
              <button
                key={item.titulo}
                type="button"
                aria-label={`${item.titulo}, etapa ${index + 1}`}
                aria-pressed={ativo}
                onClick={() => setEtapaAtiva(index)}
                className="aspect-square rounded-lg border text-2xl font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:rounded-xl sm:text-3xl"
                style={{
                  backgroundColor: ativo ? "#6ee7b7" : "#050505",
                  color: ativo ? "#000000" : "#ffffff",
                  borderColor: ativo ? "#6ee7b7" : "rgba(255,255,255,0.12)",
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <div className="mt-3 rounded-xl bg-black p-4 sm:mt-4 sm:p-6">
          <ConteudoEtapa etapa={etapa} indice={etapaAtiva} />
        </div>
      </div>

      <div className="solution-steps-desktop">
        <ConteudoEtapa etapa={etapa} indice={etapaAtiva} />
        <aside className="min-w-0">
          <h3 className="mb-4 px-2 text-xl font-bold text-white sm:text-2xl">Etapas da solução</h3>
          <div className="flex flex-col gap-3" role="group" aria-label="Escolha uma etapa">
            {etapas.map((item, index) => (
              <CardEtapa
                key={item.titulo}
                etapa={item}
                indice={index}
                ativo={etapaAtiva === index}
                onClick={() => setEtapaAtiva(index)}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Etapas;
