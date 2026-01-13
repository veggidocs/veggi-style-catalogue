import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";

const EditorialSection = () => {
  return (
    <section className="bg-background">
      {/* First Editorial Block - Full Width Image with Floating Text */}
      <div className="relative h-screen">
        <img
          src={editorial1}
          alt="Sleepwear Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-transparent to-transparent" />
        
        <div className="absolute top-1/2 right-8 md:right-16 lg:right-24 -translate-y-1/2 text-right">
          <p className="text-xs uppercase tracking-[0.3em] text-veggi-stone mb-4">
            Linha Sleepwear
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            Elegância
            <br />
            para o dia a dia
          </h2>
        </div>
      </div>

      {/* Second Editorial Block - Split Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="relative aspect-square lg:aspect-auto">
          <img
            src={editorial2}
            alt="Mãe e filha em pijamas"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex items-center justify-center bg-secondary p-12 md:p-20">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.3em] text-veggi-stone mb-6">
              Sonho e Fantasia
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-8">
              Momentos que
              <br />
              viram memória
            </h2>
            <a href="#contato" className="btn-primary">
              Ver coleção
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
