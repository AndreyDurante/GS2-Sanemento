import "./App.css";
import CardComImagem from "./components/CardComImagem.jsx";
import Footer from "./components/Footer";
import Etapas from "./components/Etapas.jsx";
import IntroBueiro from "./components/IntroBueiro.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";

function App() {
  const [introConcluida, setIntroConcluida] = useState(false);

  return (
    <>
      <IntroBueiro onConcluida={setIntroConcluida} />
      <Header visivel={introConcluida} />
      <main id="landing" className="bg-black text-white">
        <article className="flex justify-center items-center flex-col gap-5  h-screen md:text-5xl font-bold text-center">
          <h2>Toda cidade precisa de{" "}<span className="text-green-300"> saneamento digno.</span></h2>
          
          <h2>Estamos aqui para identificar onde ele <span className="text-green-800">faz falta.</span></h2>
          

        </article>
        <section id="dor" className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:gap-14 sm:px-6 sm:py-20">
          <article className="flex max-w-3xl flex-col items-center justify-center gap-4 px-2 text-center sm:px-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              O saneamento precário deixa marcas na cidade.
            </h2>
          </article>

          <div className="relative flex w-full flex-col items-center gap-5 sm:gap-8 md:grid md:grid-cols-2 md:grid-rows-4 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[3px] -translate-x-1/2 rounded-full bg-green-800" />
            
            <div className="relative z-10 w-full flex justify-center md:justify-end md:col-start-1 md:row-start-1">
              <span aria-hidden="true" className="absolute top-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-green-800 bg-black md:left-[calc(100%_+_1rem)] md:block lg:left-[calc(100%_+_1.5rem)]" />
              <CardComImagem
                titulo="01. Esgoto a céu aberto"
                subtitulo="A falta de coleta e tratamento de esgoto contamina rios, solos e comunidades."
              />
            </div>

            <div className="relative z-10 w-full flex justify-center md:justify-start md:col-start-2 md:row-start-2">
              <span aria-hidden="true" className="absolute right-[calc(100%_+_1rem)] top-1/2 z-20 hidden h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-green-800 bg-black md:block lg:right-[calc(100%_+_1.5rem)]" />
              <CardComImagem
                titulo="02. Falta de água potável"
                subtitulo="Milhares de pessoas enfrentam dificuldades para ter acesso à água limpa e segura."
              />
            </div>

            <div className="relative z-10 w-full flex justify-center md:justify-end md:col-start-1 md:row-start-3">
              <span aria-hidden="true" className="absolute top-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-green-800 bg-black md:left-[calc(100%_+_1rem)] md:block lg:left-[calc(100%_+_1.5rem)]" />
              <CardComImagem
                titulo="03. Drenagem urbana precária"
                subtitulo="A ausência de sistemas adequados de drenagem favorece alagamentos e prejuízos à população."
              />
            </div>

            <div className="relative z-10 w-full flex justify-center md:justify-start md:col-start-2 md:row-start-4">
              <span aria-hidden="true" className="absolute right-[calc(100%_+_1rem)] top-1/2 z-20 hidden h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-green-800 bg-black md:block lg:right-[calc(100%_+_1.5rem)]" />
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl pb-10">Nossa solução</h2>
          </article>
          <div className="w-10/12">
            <Etapas />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
