const Header = () => {
  return (
    <>
      <main className="flex w-9/12 gap-6 bg-amber-300 text-center justify-around items-center m-6 py-3 rounded-2xl absolute left-1/2 -translate-x-1/2">
        <div id="logo">Logo</div>
        <article className="gap-2 bg-blue-800 ">
          <nav className="flex gap-12">
            <a href="" className="">Início</a>
            <a href="">Dor</a>
            <a href="">Solução</a>
            <a href="">Objetivos</a>
            <a href="">Quem Somos</a>
          </nav>  
        </article>
        <div id="botao-tema">botao</div>
      </main>
    </>
  );
};

export default Header;
