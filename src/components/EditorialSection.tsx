import editorial1 from "@/assets/editorial-sleepwear-new.png";
import editorial2 from "@/assets/editorial-sonho-new.jpg";
import editorial3 from "@/assets/editorial-licenciados-new.png";

const EditorialSection = () => {
  return (
    <section className="bg-background">
      {/* 1. Linha Sleepwear — Full Width */}
      <div className="relative h-screen">
        <img
          src={editorial1}
          alt="Sleepwear Collection"
           className="w-full h-full object-cover object-center"
           loading="lazy"
         />
         <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/40 to-transparent" />
        
        <div className="absolute top-1/2 right-8 md:right-16 lg:right-24 -translate-y-1/2 text-right">
          <p className="font-label text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Linha Sleepwear
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
            Elegância
            <br />
            para o dia a dia
          </h2>
        </div>
      </div>

      {/* 2. Sonho e Fantasia — Image Right, Text Left */}
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={editorial2}
            alt="Mãe e filha em pijamas"
            className="w-full h-full object-cover object-[center_25%]"
            loading="lazy"
          />
        </div>
        
        <div className="flex items-center justify-center bg-secondary p-12 md:p-20">
          <div className="max-w-md">
            <p className="font-label text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Sonho e Fantasia
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-8">
              Momentos que
              <br />
              viram memória
            </h2>
            <a href="#contato" className="btn-primary rounded">
              Ver coleção
            </a>
          </div>
        </div>
      </div>

      {/* 3. Licenciados Warner Bros — Text Left, Image Right (espelhado) */}
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center justify-center bg-secondary p-12 md:p-20 order-2 lg:order-1">
          <div className="max-w-md">
            <p className="font-label text-[12px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Licenciados Warner Bros
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-8">
              Personagens que
              <br />
              vendem sozinhos
            </h2>
            <a href="#contato" className="btn-primary rounded">
              Ver coleção
            </a>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden order-1 lg:order-2">
          <img
            src={editorial3}
            alt="Criança com pijama de personagem"
            className="w-full h-full object-cover object-[center_55%]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
