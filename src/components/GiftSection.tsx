import flatlayCollection from "@/assets/flatlay-collection.jpg";

const GiftSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Full Width Background Image */}
      <div className="absolute inset-0">
        <img
          src={flatlayCollection}
          alt="Coleção presenteável"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-veggi-sand mb-6">
              Presenteabilidade
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-8">
              Cada peça,
              <br />
              uma experiência
            </h2>
            <p className="text-lg text-primary-foreground/70 font-light mb-10">
              Embalagens premium que elevam o ticket médio
            </p>
            <a href="#contato" className="btn-accent">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
