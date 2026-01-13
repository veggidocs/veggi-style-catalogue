const ROISection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="caption text-veggi-stone mb-4">Retorno sobre Investimento</p>
          <h2 className="headline-section text-foreground mb-8">
            Margem saudável, giro garantido
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-secondary">
              <div className="stat-number text-accent mb-2">2.5x</div>
              <p className="font-medium text-foreground mb-1">Markup médio</p>
              <p className="body-small text-muted-foreground">
                Margem que sustenta seu negócio
              </p>
            </div>
            
            <div className="p-8 bg-secondary">
              <div className="stat-number text-accent mb-2">30</div>
              <p className="font-medium text-foreground mb-1">Dias</p>
              <p className="body-small text-muted-foreground">
                Giro médio de estoque
              </p>
            </div>
            
            <div className="p-8 bg-secondary">
              <div className="stat-number text-accent mb-2">85%</div>
              <p className="font-medium text-foreground mb-1">Recompra</p>
              <p className="body-small text-muted-foreground">
                Taxa de reposição dos clientes
              </p>
            </div>
          </div>

          <p className="body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa consultoria de mix ajuda você a montar o estoque ideal para
            seu perfil de cliente e capacidade de investimento.
          </p>

          <a href="#contato" className="btn-primary">
            Calcular meu potencial de lucro
          </a>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
