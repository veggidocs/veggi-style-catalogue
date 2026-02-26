import { Store, Package, Check } from "lucide-react";
import heroImage from "@/assets/hero-sleepwear.jpg";

const newClientChecks = [
  "Cadastro rápido e sem burocracia",
  "Condições especiais para primeira compra",
  "Suporte comercial dedicado",
];

const existingClientChecks = [
  "Acesso direto ao catálogo completo",
  "Histórico de pedidos e favoritos",
  "Entrega expressa para reposição",
];

const CTASection = () => {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
            Próximo passo
          </p>
          <h2 className="font-heading text-[36px] md:text-[44px] font-bold text-white leading-tight mb-4">
            Pronto para <span className="italic text-accent">crescer</span> com a Veggi?
          </h2>
          <p className="text-lg font-sans text-white/85 max-w-xl mx-auto">
            Junte-se a mais de 1.000 lojistas parceiros. Venda exclusiva B2B.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Card — Novo lojista */}
          <div className="rounded-xl p-8 border border-white/20 bg-white/10 backdrop-blur-md">
            <Store className="text-white mb-4" size={32} strokeWidth={1.5} />
            <h3 className="font-label text-xl font-semibold text-white normal-case tracking-normal mb-1">
              Novo lojista
            </h3>
            <p className="text-sm font-sans text-white/80 mb-6">
              Quero revender Veggi
            </p>
            <ul className="space-y-3">
              {newClientChecks.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="text-accent mt-0.5 shrink-0" size={16} strokeWidth={2.5} />
                  <span className="text-sm font-sans text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card — Já sou cliente */}
          <div className="rounded-xl p-8 border border-white/20 bg-white/10 backdrop-blur-md">
            <Package className="text-white mb-4" size={32} strokeWidth={1.5} />
            <h3 className="font-label text-xl font-semibold text-white normal-case tracking-normal mb-1">
              Já sou cliente
            </h3>
            <p className="text-sm font-sans text-white/80 mb-6">
              Quero fazer reposição
            </p>
            <ul className="space-y-3">
              {existingClientChecks.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="text-accent mt-0.5 shrink-0" size={16} strokeWidth={2.5} />
                  <span className="text-sm font-sans text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs font-sans text-white/60">
          Venda exclusiva para lojistas multimarcas com CNPJ ativo
        </p>
      </div>
    </section>
  );
};

export default CTASection;
