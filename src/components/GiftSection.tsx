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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">
              Presenteabilidade
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
              Cada peça,
              <br />
              uma experiência
            </h2>
            <p className="text-lg text-white/60 font-light mb-10">
              Embalagens premium que elevam o ticket médio
            </p>
            <a href="#contato" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/90">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
