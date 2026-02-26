import catalogSleepwear from "@/assets/catalog-sleepwear.jpg";
import catalogSonhoFantasia from "@/assets/catalog-sonho-fantasia.jpg";
import catalogTurmaBia from "@/assets/catalog-turma-bia.jpg";
import catalogLicenciados from "@/assets/catalog-licenciados.jpg";

const catalogs = [
  { id: 1, name: "Sleepwear", image: catalogSleepwear },
  { id: 2, name: "Sonho e Fantasia", image: catalogSonhoFantasia },
  { id: 3, name: "Turma da Bia", image: catalogTurmaBia },
  { id: 4, name: "Licenciados", image: catalogLicenciados },
];

const CatalogsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
            Últimas Coleções
          </p>
          <h2 className="font-heading text-4xl md:text-[48px] font-bold text-foreground leading-tight">
            Catálogos
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={catalog.image}
                alt={catalog.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white normal-case tracking-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                  {catalog.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Download Link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-label text-sm font-medium text-primary tracking-[0.05em] hover:text-accent transition-colors duration-300"
          >
            Baixar todos os catálogos
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogsSection;
