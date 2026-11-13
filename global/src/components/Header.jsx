import logo1 from "../assets/logo1.png"
import { GoArrowUp } from "react-icons/go";

const Header = ({ visivel }) => {
  return (
    <header className={`fixed left-1/2 top-3 z-50 flex w-[calc(100%-1.5rem)] md:w-8/12 max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl bg-black/90 px-3 py-3 shadow-sm ring-1 ring-white/10 backdrop-blur-md transition-opacity duration-300 sm:top-5 sm:px-6 sm:py-3.5 ${visivel ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <div id="logo" className="hidden object-contain w-2/12 bg-green-400 rounded-xl shrink-0 text-base font-bold tracking-tight text-white sm:block sm:text-lg"><img src={logo1} alt="" /></div>
      <article className="flex flex-1 items-center justify-center sm:flex-none">
        <nav className="flex items-center gap-3 whitespace-nowrap font-medium text-xs text-white/80 sm:gap-6 sm:text-sm lg:gap-10 lg:text-base">
          <a href="#landing" className="transition-colors hover:text-white">In&iacute;cio</a>
          <a href="#dor" className="transition-colors hover:text-white">Dor</a>
          <a href="#solucao" className="transition-colors hover:text-white">Solu&ccedil;&atilde;o</a>
        </nav>
      </article>
      <div className="text-black bg-green-400 px-6 py-4 rounded-xl flex flex-row justify-center items-center gap-1">
        <a href="" className="">Enviar Relato </a>
        <div ><GoArrowUp /></div>
      </div>
    </header>
  );
};

export default Header;