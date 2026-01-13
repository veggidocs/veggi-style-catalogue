import heroImage from "@/assets/hero-sleepwear.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Veggi Sleepwear"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
      </div>

      {/* Minimal Content - Fashion Campaign Style */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-xl animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-primary-foreground leading-[0.9] tracking-tight mb-8">
              Sleepwear
              <br />
              <span className="text-accent">B2B</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/70 font-light mb-10 max-w-md">
              45 anos · +1.000 PDVs · Licenciada Warner Bros
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-accent">
                Quero revender
              </a>
              <a
                href="#cliente"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary-foreground/10"
              >
                Já sou cliente
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 w-px bg-gradient-to-b from-transparent to-primary-foreground/40" />
    </section>
  );
};

export default HeroSection;
