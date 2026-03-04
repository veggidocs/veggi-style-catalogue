import heroImage from "@/assets/hero-veggi.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Veggi Sleepwear"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-xl animate-fade-up">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 border border-white/50 rounded-sm font-label text-[12px] tracking-[0.2em] uppercase text-white mb-8">
              Exclusivo B2B para lojistas
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tight mb-6">
              Sleepwear
              <br />
              que <span className="text-accent">vende</span>
            </h1>
            
            <p className="text-lg text-white/90 font-sans mb-10 max-w-md">
              45 anos vestindo o Brasil. Mais de 1.000 lojistas parceiros.
            </p>

            {/* Credential Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-3 py-1 border border-white/30 font-label text-[10px] tracking-[0.15em] uppercase text-white/70">
                45 anos
              </span>
              <span className="px-3 py-1 border border-white/30 font-label text-[10px] tracking-[0.15em] uppercase text-white/70">
                +1.000 PDVs
              </span>
              <span className="px-3 py-1 border border-white/30 font-label text-[10px] tracking-[0.15em] uppercase text-white/70">
                Licenciada Warner Bros
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/quero-revender" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-label text-[13px] tracking-[0.05em] uppercase font-semibold rounded transition-all duration-300 hover:bg-white/90">
                Quero revender
              </a>
              <a
                href="/ja-sou-cliente"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/50 text-white font-label text-[13px] tracking-[0.05em] uppercase font-semibold rounded transition-all duration-300 hover:bg-white/10"
              >
                Já sou cliente
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 w-px bg-gradient-to-b from-transparent to-white/40" />
    </section>
  );
};

export default HeroSection;
