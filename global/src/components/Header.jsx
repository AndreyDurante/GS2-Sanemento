import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [escuro, alternarTema] = useTheme();

  return (
    <>
      <header className="fixed left-1/2 top-3 z-50 flex w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl bg-white/90 px-3 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur-md transition-all dark:bg-gray-900/90 dark:ring-white/10 sm:top-5 sm:px-6 sm:py-3.5">
        <div id="logo" className="hidden shrink-0 text-base font-bold tracking-tight text-gray-900 dark:text-white sm:block sm:text-lg">Logo</div>
        <article className="flex flex-1 items-center justify-center sm:flex-none">
          <nav className="flex items-center gap-3 whitespace-nowrap font-medium text-xs text-gray-600 dark:text-gray-300 sm:gap-6 sm:text-sm lg:gap-10 lg:text-base">
            <a href="#landing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Início</a>
            <a href="#dor" className="hover:text-gray-900 dark:hover:text-white transition-colors">Dor</a>
            <a href="#solucao" className="hover:text-gray-900 dark:hover:text-white transition-colors">Solução</a>
          </nav>  
        </article>

        {/* Botão de alternar tema (claro / escuro) */}
        <button
          type="button"
          onClick={alternarTema}
          aria-label="Alternar tema claro e escuro"
          className={`relative hidden h-8 w-16 shrink-0 cursor-pointer items-center justify-between rounded-full p-1 transition-colors duration-300 ring-1 ring-black/10 dark:ring-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 sm:flex ${
            escuro ? "bg-gray-800" : "bg-gray-200/90"
          }`}
        >
          {/* Círculo indicador deslizante */}
          <span
            className={`absolute top-1 left-1 size-6 rounded-full bg-white dark:bg-gray-700 shadow-md transition-transform duration-300 ease-in-out ${
              escuro ? "translate-x-8" : "translate-x-0"
            }`}
          />

          {/* Ícone Sol (esquerda) */}
          <span className="z-10 flex size-6 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`size-3.5 transition-colors duration-300 ${
                escuro ? "text-gray-400" : "text-amber-500"
              }`}
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </span>

          {/* Ícone Lua (direita) */}
          <span className="z-10 flex size-6 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`size-3.5 transition-colors duration-300 ${
                escuro ? "text-indigo-400" : "text-gray-400"
              }`}
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </span>
        </button>
      </header>
    </>
  );
};

export default Header;
