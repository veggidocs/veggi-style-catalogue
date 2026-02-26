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
    <section className="py-4 md:py-8 bg-background">
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={catalog.image}
                alt={catalog.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white normal-case tracking-normal">
                  {catalog.name}
                </h3>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="px-6 py-3 bg-white text-foreground font-label text-xs tracking-[0.15em] uppercase font-semibold">
                  Ver coleção
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogsSection;
