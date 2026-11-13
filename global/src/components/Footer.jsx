const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            Sanemento
          </span>
          <p className="text-sm text-white/70 text-center md:text-left">
            Inovação e sustentabilidade para a universalização do saneamento básico.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/70">
          <a href="#landing" className="hover:text-white transition-colors">
            Início
          </a>
          <a href="#dor" className="hover:text-white transition-colors">
            Dor
          </a>
          <a href="#solucao" className="hover:text-white transition-colors">
            Solução
          </a>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
        <span>© {new Date().getFullYear()} Sanemento. Todos os direitos reservados.</span>
        <span>Tecnologia & Sustentabilidade • ODS 6</span>
      </div>
    </footer>
  );
};

export default Footer;
