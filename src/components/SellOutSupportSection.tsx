import { Camera, Video, FileText, Truck } from "lucide-react";

const cards = [
  {
    icon: Camera,
    title: "Fotos profissionais",
    text: "Imagens em alta resolução de todos os produtos para suas redes e materiais.",
  },
  {
    icon: Video,
    title: "Vídeos 360° de caimento",
    text: "Visualize como cada peça veste e se movimenta. Reduz trocas e aumenta conversão.",
  },
  {
    icon: FileText,
    title: "Guia de exposição",
    text: "Dicas de como montar o cantinho Veggi na sua loja. Produto bem exposto vende sozinho.",
  },
  {
    icon: Truck,
    title: "Logística ágil",
    text: "Reposição rápida com entrega em todo Brasil. Estoque sempre atualizado para você.",
  },
];

const SellOutSupportSection = () => {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
            Parceria completa
          </p>
          <h2 className="font-heading text-[36px] font-bold text-foreground leading-tight mb-4">
            Não vendemos só produto. Vendemos resultado.
          </h2>
          <p className="text-base text-muted-foreground font-sans max-w-xl mx-auto">
            Ferramentas e suporte para suas peças não ficarem paradas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-border rounded-xl p-6 text-center"
            >
              <card.icon
                className="mx-auto mb-4 text-primary"
                size={32}
                strokeWidth={1.5}
              />
              <h3 className="font-label text-base font-semibold text-foreground normal-case tracking-normal mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellOutSupportSection;
