import { Crown, Zap, RefreshCw } from "lucide-react";

const cards = [
  {
    Icon: Crown,
    title: "Luxo e Sofisticação",
    subtitle: "VEGGI ADULTO",
    text: "Para clientes que buscam qualidade premium com preço justo. Margens saudáveis e diferenciação no PDV.",
  },
  {
    Icon: Zap,
    title: "Atração de Fluxo",
    subtitle: "LICENCIADOS WARNER BROS",
    text: "Personagens que trazem clientes para sua loja. Venda por impulso com alta conversão.",
  },
  {
    Icon: RefreshCw,
    title: "Giro e Recorrência",
    subtitle: "LINHA INFANTIL E TURMA DA BIA",
    text: "Peças essenciais que garantem fluxo constante de vendas. Reposição previsível e margem garantida.",
  },
];

const MixSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
            Estratégia de mix
          </p>
          <h2 className="font-heading text-[40px] font-bold text-foreground leading-tight mb-4">
            Monte seu mix ideal
          </h2>
          <p className="text-base text-muted-foreground font-sans max-w-lg mx-auto">
            Cada linha resolve um problema diferente da sua loja.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-xl p-8 flex flex-col"
            >
              <card.Icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <h4 className="font-label text-lg font-semibold text-foreground normal-case tracking-normal mb-1">
                {card.title}
              </h4>
              <p className="font-label text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-4">
                {card.subtitle}
              </p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6 flex-1">
                {card.text}
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 font-label text-sm font-medium text-accent hover:text-primary transition-colors duration-300"
              >
                Saiba mais <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MixSection;
