import "./App.css";
import CardComImagem from "./components/CardComImagem.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Etapas from "./components/Etapas.jsx";

function App() {
  return (
    <>
      <Header />
      <main id="landing" className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <article className="flex min-h-screen justify-center items-center px-8 lg:px-16 pt-28 pb-12">
            <main className="conteudo flex w-full max-w-xl flex-col gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident labore nihil nostrum enim maxime corporis.
              </p>
              <a
                href="#dor"
                className="flex justify-center items-center py-4 px-8 text-lg font-semibold text-gray-900 bg-verde-agua hover:brightness-95 transition-all duration-200 shadow-md hover:shadow-lg w-fit rounded-2xl cursor-pointer"
              >
                Saber mais
              </a>
            </main>
          </article>
          <div className="flex items-center justify-center min-h-screen bg-emerald-50/60 dark:bg-emerald-950/20 p-8 text-2xl font-semibold text-emerald-800/40 dark:text-emerald-300/40 border-l border-emerald-100 dark:border-emerald-900/30">
            Imagem da direita
          </div>
        </div>
        <section id="dor" className="py-20 px-6 max-w-7xl mx-auto flex flex-col items-center gap-14">
          <article className="flex items-center flex-col gap-4 justify-center text-center px-4 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              Os Desafios do Saneamento
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Compreenda as principais barreiras enfrentadas diariamente pela população e o impacto direto na saúde e no meio ambiente.
            </p>
          </article>

          <div className="w-full flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:grid-rows-4 md:gap-x-12 md:gap-y-10">
            <div className="w-full flex justify-center md:justify-end md:col-start-1 md:row-start-1">
              <CardComImagem
                titulo="01. Esgoto a céu aberto"
                subtitulo="A falta de coleta e tratamento de esgoto contamina rios, solos e comunidades."
              />
            </div>

            <div className="w-full flex justify-center md:justify-start md:col-start-2 md:row-start-2">
              <CardComImagem
                titulo="02. Falta de água potável"
                subtitulo="Milhares de pessoas enfrentam dificuldades para ter acesso à água limpa e segura."
              />
            </div>

            <div className="w-full flex justify-center md:justify-end md:col-start-1 md:row-start-3">
              <CardComImagem
                titulo="03. Drenagem urbana precária"
                subtitulo="A ausência de sistemas adequados de drenagem favorece alagamentos e prejuízos à população."
              />
            </div>

            <div className="w-full flex justify-center md:justify-start md:col-start-2 md:row-start-4">
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
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">Nossa solução</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              Tecnologias sustentáveis e projetos integrados para transformar a realidade do saneamento básico e da saúde nas comunidades.
            </p>
          </article>
          <main className="w-11/12 max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            <div className="flex justify-center items-center w-full lg:col-span-3">
              b
            </div>
            <div id="selecao-solucao" className="flex justify-center items-center w-full lg:col-start-4 lg:col-span-2">
              <Etapas />
            </div>
          </main>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
