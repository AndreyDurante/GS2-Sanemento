import "./App.css";
import CardComImagem from "./components/CardComImagem.jsx";
import Carrossel from "./components/Carrossel.jsx";
import Header from "./components/Header";

function App() {
  const problemas = [
    {
      titulo: "01. Esgoto a céu aberto",
      subtitulo:
        "A falta de coleta e tratamento de esgoto contamina rios, solos e comunidades.",
    },
    {
      titulo: "02. Falta de água potável",
      subtitulo:
        "Milhares de pessoas enfrentam dificuldades para ter acesso à água limpa e segura.",
    },
    {
      titulo: "03. Drenagem urbana precária",
      subtitulo:
        "A ausência de sistemas adequados de drenagem favorece alagamentos e prejuízos à população.",
    },
    {
      titulo: "04. Doenças relacionadas à falta de saneamento",
      subtitulo:
        "A falta de saneamento aumenta a exposição a doenÃ§as e coloca a saúde pÃºblica em risco.",
    },
  ];

  return (
    <>
      <Header />
      <main id="landing" className="h-screen bg-gray-400">
        <div className="grid grid-cols-2">
          <article className="grid-cols-6 flex h-screen justify-center items-center ">
            <main className="conteudo flex  w-2/3 flex-col gap-5 mt-10 ">
              <h6 className="text-6xl w-full">
                Lorem ipsum dolor sit amet consectetur.
              </h6>
              <p className="w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident labore nihil nostrum enim maxime corporis.
              </p>
              <button className="flex justify-center py-3 text-xl bg-verde-agua w-2/5 rounded-2xl">
                Saber mais
              </button>
            </main>
          </article>
          <div className="grid-cols-6 flex text-center h-screen bg-gray-100 justify-end">
            Imagem da direita
          </div>
        </div>
        <section id="dor" className="py-12">
            <div className="grid grid-cols-2 grid-rows-4 gap-6">
    <div className="col-start-1 row-start-1">
      <CardComImagem titulo="01. Esgoto a céu aberto" subtitulo="A falta de coleta e tratamento de esgoto contamina rios, solos e comunidades." />
    </div>

    <div className="col-start-2 row-start-2">
      <CardComImagem titulo="02. Falta de água potável" subtitulo="Milhares de pessoas enfrentam dificuldades para ter acesso à água limpa e segura." />
    </div>

    <div className="col-start-1 row-start-3">
      <CardComImagem titulo="03. Drenagem urbana precária" subtitulo="A ausência de sistemas adequados de drenagem favorece alagamentos e prejuízos à população." />
    </div>

    <div className="col-start-2 row-start-4">
      <CardComImagem titulo="04. Doenças relacionadas à falta de saneamento" subtitulo="A falta de saneamento aumenta a exposição a doenças e coloca a saúde pública em risco." />
    </div>
    </div>
        </section>
        <section id="solucao" className="h-screen flex justify-center flex-col items-center gap-6">
          <article className="flex items-center flex-col gap-6 justify-center">
            <h2 className="text-5xl">Nossa solução</h2>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque magni possimus labore! Totam.</p>
          </article>
          <main>
              <Carrossel itens={problemas} />
          </main>  
        </section>
      </main>
    </>
  );
}

export default App;

