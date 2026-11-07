import './App.css'
import Header from './components/Header'
import rioInicioReto from './assets/rio_inicioReto.png'

function App() {
  

  return (
    <>
    <Header />
    <main id='landing' className='h-screen bg-gray-400'>
    <div className='grid grid-cols-2'>
      <article className='grid-cols-6 flex h-screen justify-center items-center '>
        <main className='conteudo flex  w-2/3 flex-col gap-5 mt-10 '>
          <h6 className='text-6xl w-full'>Lorem ipsum dolor sit amet consectetur.</h6>
          <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore nihil nostrum enim maxime corporis.</p>
          <button className='flex justify-center py-3 text-xl bg-verde-agua w-2/5 rounded-2xl'>Saber mais</button>
        </main>
      </article>
      <div className='grid-cols-6 flex text-center h-screen bg-gray-100 justify-end'>b</div>
    </div>
    </main>
    <section id='dor' className='h-screen'>
    </section>
    <section id='solucao' className='h-screen'></section>
    <section id='solucao2' className='h-screen'></section>
    </>
  )
}

export default App
