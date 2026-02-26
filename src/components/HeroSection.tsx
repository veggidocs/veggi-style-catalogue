import heroImage from "@/assets/hero-sleepwear.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Veggi Sleepwear"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-xl animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tight mb-8">
              Sleepwear
              <br />
              <span className="text-white/60">B2B</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 font-sans mb-10 max-w-md">
              45 anos · +1.000 PDVs · Licenciada Warner Bros
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground font-label text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/90 font-semibold">
                Quero revender
              </a>
              <a
                href="#cliente"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-label text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/10 font-semibold"
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
