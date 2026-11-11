const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex w-[70%] max-w-5xl items-center justify-between px-8 py-3.5 mt-5 rounded-2xl bg-white/75 backdrop-blur-md shadow-sm ring-1 ring-black/5 transition-all">
        <div id="logo" className="text-lg font-bold tracking-tight text-gray-900">Logo</div>
        <article className="flex items-center">
          <nav className="flex items-center gap-10 lg:gap-14 font-medium text-sm lg:text-base text-gray-600">
            <a href="#landing" className="hover:text-gray-900 transition-colors">Início</a>
            <a href="#dor" className="hover:text-gray-900 transition-colors">Dor</a>
            <a href="#solucao" className="hover:text-gray-900 transition-colors">Solução</a>
            <a href="#objetivos" className="hover:text-gray-900 transition-colors">Objetivos</a>
            <a href="#quem-somos" className="hover:text-gray-900 transition-colors">Quem Somos</a>
          </nav>  
        </article>
        <div id="botao-tema" className="text-sm font-medium text-gray-700 bg-gray-100/80 hover:bg-gray-200/80 px-4 py-1.5 rounded-xl transition cursor-pointer">
          botao
        </div>
      </header>
    </>
  );
};

export default Header;
