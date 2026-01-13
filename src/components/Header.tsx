import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-10">
            <span
              className={`font-serif text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              Veggi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#catalogos"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              Catálogos
            </a>
            <a
              href="#linhas"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              Linhas
            </a>
            <a
              href="#sobre"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              Sobre
            </a>
            <a
              href="#contato"
              className={`ml-4 px-6 py-2.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                isScrolled
                  ? "bg-neutral-900 text-white hover:bg-neutral-800"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2 bg-neutral-900"
                    : isScrolled
                    ? "bg-neutral-900"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : isScrolled
                    ? "bg-neutral-900"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-neutral-900"
                    : isScrolled
                    ? "bg-neutral-900"
                    : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <a
              href="#catalogos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-neutral-900"
            >
              Catálogos
            </a>
            <a
              href="#linhas"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-neutral-900"
            >
              Linhas
            </a>
            <a
              href="#sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-neutral-900"
            >
              Sobre
            </a>
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary mt-4"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
