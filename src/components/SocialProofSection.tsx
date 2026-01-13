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
              <span className="block text-6xl md:text-7xl lg:text-8xl font-serif text-primary-foreground">
                {stat.number}
              </span>
              <span className="text-sm uppercase tracking-[0.3em] text-primary-foreground/60">
                {stat.label}
              </span>
            </div>
          ))}
          
          <div className="text-center md:text-right">
            <span className="block text-2xl md:text-3xl font-serif text-accent mb-2">
              Warner Bros
            </span>
            <span className="text-sm uppercase tracking-[0.3em] text-primary-foreground/60">
              Licenciada oficial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
