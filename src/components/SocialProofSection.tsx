const stats = [
  { number: "45", label: "anos" },
  { number: "+400k", label: "peças/ano" },
  { number: "+1.000", label: "PDVs" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground">
                {stat.number}
              </span>
              <span className="font-label text-xs tracking-[0.15em] uppercase text-primary-foreground/50">
                {stat.label}
              </span>
            </div>
          ))}
          
          <div className="text-center md:text-right">
            <span className="block text-2xl md:text-3xl font-heading font-bold text-primary-foreground/80 mb-2">
              Warner Bros
            </span>
            <span className="font-label text-xs tracking-[0.15em] uppercase text-primary-foreground/50">
              Licenciada oficial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
