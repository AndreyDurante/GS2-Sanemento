import "./App.css";
import CardComImagem from "./components/CardComImagem.jsx";
import Carrossel from "./components/Carrossel.jsx";
import Header from "./components/Header";

function App() {

  const solucoes = [
    {
      titulo: "01. Tratamento e Coleta Inteligente",
      subtitulo:
        "Implementação de redes coletoras eficientes e estações descentralizadas para tratamento ecológico de efluentes.",
    },
    {
      titulo: "02. Acesso Universal à Água Potável",
      subtitulo:
        "Soluções de filtragem avançada e monitoramento em tempo real para garantir água limpa e segura a todos.",
    },
    {
      titulo: "03. Drenagem Urbana Sustentável",
      subtitulo:
        "Infraestrutura verde com jardins filtrantes e bacias de contenção para prevenir enchentes e recargas hídricas.",
    },
    {
      titulo: "04. Monitoramento e Saúde Comunitária",
      subtitulo:
        "Sistemas integrados de vigilância sanitária e dados em tempo real para prevenção ativa de doenças.",
    },
  ];

  return (
    <>
      <Header />
      <main id="landing" className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <article className="flex min-h-screen justify-center items-center px-8 lg:px-16 pt-28 pb-12">
            <main className="conteudo flex w-full max-w-xl flex-col gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident labore nihil nostrum enim maxime corporis.
              </p>
              <button className="flex justify-center items-center py-4 px-8 text-lg font-semibold text-gray-900 bg-verde-agua hover:brightness-95 transition-all duration-200 shadow-md hover:shadow-lg w-fit rounded-2xl cursor-pointer">
                Saber mais
              </button>
            </main>
          </article>
          <div className="flex items-center justify-center min-h-screen bg-emerald-50/60 p-8 text-2xl font-semibold text-emerald-800/40 border-l border-emerald-100">
            Imagem da direita
          </div>
        </div>
        <section id="dor" className="py-12">
          <div className="grid grid-cols-2 grid-rows-4 gap-6">
            <div className="col-start-1 row-start-1 flex justify-end">
              <CardComImagem
                titulo="01. Esgoto a céu aberto"
                subtitulo="A falta de coleta e tratamento de esgoto contamina rios, solos e comunidades."
              />
            </div>

            <div className="col-start-2 row-start-2 ">
              <CardComImagem
                titulo="02. Falta de água potável"
                subtitulo="Milhares de pessoas enfrentam dificuldades para ter acesso à água limpa e segura."
              />
            </div>

            <div className="col-start-1 row-start-3 flex justify-end">
              <CardComImagem
                titulo="03. Drenagem urbana precária"
                subtitulo="A ausência de sistemas adequados de drenagem favorece alagamentos e prejuízos à população."
              />
            </div>

            <div className="col-start-2 row-start-4 ">
              <CardComImagem
                titulo="04. Doenças relacionadas à falta de saneamento"
                subtitulo="A falta de saneamento aumenta a exposição a doenças e coloca a saúde pública em risco."
              />
            </div>
          </div>
        </section>
        <section
          id="solucao"
          className="min-h-screen flex justify-center flex-col items-center gap-8 py-16"
        >
          <article className="flex items-center flex-col gap-4 justify-center text-center px-4">
            <h2 className="text-5xl font-bold">Nossa solução</h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              Tecnologias sustentáveis e projetos integrados para transformar a realidade do saneamento básico e da saúde nas comunidades.
            </p>
          </article>
          <div className="w-full">
            <Carrossel itens={solucoes} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
