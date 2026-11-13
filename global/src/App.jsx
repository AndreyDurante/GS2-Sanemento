import "./App.css";
import CardComImagem from "./components/CardComImagem.jsx";
import Footer from "./components/Footer";
import Etapas from "./components/Etapas.jsx";
import IntroBueiro from "./components/IntroBueiro.jsx";

function App() {
  return (
    <>
      <IntroBueiro/>
      <main id="landing" className="bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
          <article className="flex min-h-[75vh] items-center justify-center px-5 pb-12 pt-28 sm:px-8 lg:min-h-screen lg:px-16">
            <div className="conteudo flex w-full max-w-xl flex-col gap-6">
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
            </div>
          </article>
          <div className="flex min-h-64 items-center justify-center border-t border-emerald-100 bg-emerald-50/60 p-6 text-xl font-semibold text-emerald-800/40 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-300/40 sm:min-h-80 sm:p-8 lg:min-h-screen lg:border-l lg:border-t-0 lg:text-2xl">
            Imagem da direita
          </div>
        </div>
        <section id="dor" className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:gap-14 sm:px-6 sm:py-20">
          <article className="flex max-w-3xl flex-col items-center justify-center gap-4 px-2 text-center sm:px-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Os Desafios do Saneamento
            </h2>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg lg:text-xl">
              Compreenda as principais barreiras enfrentadas diariamente pela população e o impacto direto na saúde e no meio ambiente.
            </p>
          </article>

          <div className="relative flex w-full flex-col items-center gap-5 sm:gap-8 md:grid md:grid-cols-2 md:grid-rows-4 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[3px] -translate-x-1/2 rounded-full bg-blue-500/80" />
            
            <div className="relative z-10 w-full flex justify-center md:justify-end md:col-start-1 md:row-start-1">
              <span aria-hidden="true" className="absolute top-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-blue-500 bg-gray-50 dark:bg-gray-950 md:left-[calc(100%_+_1rem)] md:block lg:left-[calc(100%_+_1.5rem)]" />
              <CardComImagem
                titulo="01. Esgoto a céu aberto"
                subtitulo="A falta de coleta e tratamento de esgoto contamina rios, solos e comunidades."
              />
            </div>

            <div className="relative z-10 w-full flex justify-center md:justify-start md:col-start-2 md:row-start-2">
              <span aria-hidden="true" className="absolute right-[calc(100%_+_1rem)] top-1/2 z-20 hidden h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-blue-500 bg-gray-50 dark:bg-gray-950 md:block lg:right-[calc(100%_+_1.5rem)]" />
              <CardComImagem
                titulo="02. Falta de água potável"
                subtitulo="Milhares de pessoas enfrentam dificuldades para ter acesso à água limpa e segura."
              />
            </div>

            <div className="relative z-10 w-full flex justify-center md:justify-end md:col-start-1 md:row-start-3">
              <span aria-hidden="true" className="absolute top-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-blue-500 bg-gray-50 dark:bg-gray-950 md:left-[calc(100%_+_1rem)] md:block lg:left-[calc(100%_+_1.5rem)]" />
              <CardComImagem
                titulo="03. Drenagem urbana precária"
                subtitulo="A ausência de sistemas adequados de drenagem favorece alagamentos e prejuízos à população."
              />
            </div>

            <div className="relative z-10 w-full flex justify-center md:justify-start md:col-start-2 md:row-start-4">
              <span aria-hidden="true" className="absolute right-[calc(100%_+_1rem)] top-1/2 z-20 hidden h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-blue-500 bg-gray-50 dark:bg-gray-950 md:block lg:right-[calc(100%_+_1.5rem)]" />
              <CardComImagem
                titulo="04. Doenças relacionadas à falta de saneamento"
                subtitulo="A falta de saneamento aumenta a exposição a doenças e coloca a saúde pública em risco."
              />
            </div>
          </div>
        </section>
        <section
          id="solucao"
          className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-16 sm:px-6 sm:py-20"
        >
          <article className="flex items-center flex-col gap-4 justify-center text-center px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Nossa solução</h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg lg:text-xl">
              Tecnologias sustentáveis e projetos integrados para transformar a realidade do saneamento básico e da saúde nas comunidades.
            </p>
          </article>
          <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-6 lg:grid-cols-5 lg:gap-8">
            <div className="flex min-h-64 w-full items-center justify-center sm:min-h-80 lg:col-span-3">
              b
            </div>
            <div id="selecao-solucao" className="flex w-full items-center justify-center lg:col-start-4 lg:col-span-2">
              <Etapas />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
