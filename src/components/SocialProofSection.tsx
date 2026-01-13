const stats = [
  {
    number: "45",
    label: "Anos",
    description: "de expertise no mercado brasileiro",
  },
  {
    number: "+400k",
    label: "Peças/ano",
    description: "capacidade produtiva escalável",
  },
  {
    number: "+1.000",
    label: "PDVs",
    description: "pontos de venda ativos",
  },
  {
    number: "Warner",
    label: "Bros",
    description: "licenciamento oficial",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center lg:text-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2">
                <span className="stat-number">{stat.number}</span>
                <span className="text-xl md:text-2xl font-serif opacity-70">
                  {stat.label}
                </span>
              </div>
              <p className="body-small text-primary-foreground/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
