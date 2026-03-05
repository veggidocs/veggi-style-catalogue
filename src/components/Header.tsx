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

  const navLinks: { href: string; label: string; external?: boolean }[] = [
    { href: "#roi", label: "Calculadora" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "/ja-sou-cliente", label: "Já sou cliente" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background py-4 ${
        isScrolled ? "shadow-[0_1px_3px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-10">
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight lowercase text-primary">
              veggi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-label text-[13px] tracking-[0.05em] text-foreground transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/quero-revender"
              className="ml-3 px-6 py-2.5 bg-primary text-primary-foreground font-label text-[13px] font-semibold tracking-[0.05em] uppercase rounded transition-all duration-300 hover:opacity-90"
            >
              Quero revender
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
                    ? "rotate-45 translate-y-2 bg-foreground"
                    : "bg-foreground"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-foreground ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-foreground"
                    : "bg-foreground"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-background transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-label font-medium text-foreground tracking-[0.05em]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/quero-revender"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary rounded mt-4"
            >
              Quero revender
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
