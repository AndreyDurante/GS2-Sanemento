const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sanemento
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            Inovação e sustentabilidade para a universalização do saneamento básico.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="#landing" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Início
          </a>
          <a href="#dor" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Dor
          </a>
          <a href="#solucao" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Solução
          </a>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-100 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 dark:text-gray-500 gap-4">
        <span>© {new Date().getFullYear()} Sanemento. Todos os direitos reservados.</span>
        <span>Tecnologia & Sustentabilidade • ODS 6</span>
      </div>
    </footer>
  );
};

export default Footer;
