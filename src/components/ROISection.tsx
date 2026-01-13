const ROISection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-veggi-stone mb-6">
            Seu negócio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-16">
            Margem saudável,
            <br />
            giro garantido
          </h2>
          
          <div className="grid grid-cols-3 gap-8 md:gap-16 mb-16">
            <div>
              <span className="block text-5xl md:text-6xl font-serif text-accent">2.5x</span>
              <span className="text-sm text-muted-foreground">markup médio</span>
            </div>
            <div>
              <span className="block text-5xl md:text-6xl font-serif text-accent">30</span>
              <span className="text-sm text-muted-foreground">dias de giro</span>
            </div>
            <div>
              <span className="block text-5xl md:text-6xl font-serif text-accent">85%</span>
              <span className="text-sm text-muted-foreground">recompra</span>
            </div>
          </div>

          <a href="#contato" className="btn-primary">
            Calcular meu potencial
          </a>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
