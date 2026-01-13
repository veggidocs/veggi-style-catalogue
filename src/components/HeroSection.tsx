import heroImage from "@/assets/hero-sleepwear.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Veggi Sleepwear - Elegância e conforto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl animate-fade-up">
          <p className="caption text-veggi-sand mb-6">
            Há 45 anos no mercado
          </p>
          
          <h1 className="headline-hero text-primary-foreground mb-6">
            Gestão inteligente de sleepwear para lojistas multimarcas
          </h1>
          
          <p className="body-large text-veggi-sand/90 mb-10">
            +1.000 PDVs ativos · Licenciada Warner Bros · Especialistas em mix, giro e ticket médio
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="btn-accent"
            >
              Quero revender em minha loja
            </a>
            <a
              href="#cliente"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-medium tracking-wide uppercase text-sm transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Já sou cliente e quero comprar
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
