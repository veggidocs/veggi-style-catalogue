import giftPackaging from "@/assets/gift-packaging.jpg";

const benefits = [
  {
    title: "Alto poder de presente",
    description: "Embalagens premium que agregam valor percebido",
  },
  {
    title: "Aumento de ticket médio",
    description: "Kits e combos prontos para presentear",
  },
  {
    title: "Diferencial no PDV",
    description: "Destaque visual que atrai e converte",
  },
];

const GiftSection = () => {
  return (
    <section className="section-padding bg-veggi-blush">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[16/10] overflow-hidden shadow-dramatic">
              <img
                src={giftPackaging}
                alt="Embalagens de presente Veggi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 -z-10" />
          </div>

          <div>
            <p className="caption text-accent mb-4">Presenteabilidade</p>
            <h2 className="headline-section text-foreground mb-6">
              Embalagens que vendem mais
            </h2>
            <p className="body-large text-muted-foreground mb-10">
              Nossas embalagens premium transformam cada peça em uma experiência
              de presente. Valor percebido que eleva o ticket médio e
              diferencia sua loja no mercado.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-serif text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="body-small text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
