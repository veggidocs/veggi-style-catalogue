import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2D2D2D' }} className="py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Coluna 1 — Marca */}
          <div className="space-y-6">
            <span className="font-heading text-3xl font-bold text-white lowercase">
              veggi
            </span>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              45 anos vestindo o conforto de milhares de lares brasileiros. Sleepwear de qualidade para toda a família.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Para Lojistas */}
          <div className="space-y-4">
            <h4 className="font-label font-semibold text-sm text-white tracking-normal normal-case">
              Para Lojistas
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Quero revender", href: "/quero-revender" },
                { label: "Portal do cliente", href: "#" },
                { label: "Catálogos digitais", href: "#" },
                { label: "Política comercial", href: "#" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Nossas Linhas */}
          <div className="space-y-4">
            <h4 className="font-label font-semibold text-sm text-white tracking-normal normal-case">
              Nossas Linhas
            </h4>
            <nav className="flex flex-col gap-3">
              {["Sleepwear Adulto", "Sonho e Fantasia", "Turma da Bia", "Licenciados Warner"].map((link) => (
                <a key={link} href="#" className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 4 — Contato Comercial */}
          <div className="space-y-4">
            <h4 className="font-label font-semibold text-sm text-white tracking-normal normal-case">
              Contato Comercial
            </h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:faleconosco@veggi.com.br" className="flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={16} className="shrink-0" />
                faleconosco@veggi.com.br
              </a>
              <a href="tel:+553237290909" className="flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="shrink-0" />
                (32) 3729 - 0909
              </a>
              <span className="flex items-center gap-3 font-sans text-sm text-white/70">
                <MapPin size={16} className="shrink-0" />
                Minas Gerais - Brasil
              </span>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-sans text-xs text-white/50">
            © 2026 Confecções Veggi Ltda. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-white/50">
            Venda exclusiva para lojistas multimarcas com CNPJ ativo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
