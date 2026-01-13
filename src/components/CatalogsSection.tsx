import catalogSleepwear from "@/assets/catalog-sleepwear.jpg";
import catalogSonhoFantasia from "@/assets/catalog-sonho-fantasia.jpg";
import catalogTurmaBia from "@/assets/catalog-turma-bia.jpg";
import catalogLicenciados from "@/assets/catalog-licenciados.jpg";

const catalogs = [
  {
    id: 1,
    name: "Sleepwear",
    description: "Elegância adulta. Ticket médio premium.",
    image: catalogSleepwear,
  },
  {
    id: 2,
    name: "Sonho e Fantasia",
    description: "Infantil com apelo emocional e encanto.",
    image: catalogSonhoFantasia,
  },
  {
    id: 3,
    name: "Turma da Bia",
    description: "Giro garantido. Reposição constante.",
    image: catalogTurmaBia,
  },
  {
    id: 4,
    name: "Licenciados",
    description: "Warner Bros. Venda por impulso.",
    image: catalogLicenciados,
  },
];

const CatalogsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="caption text-veggi-stone mb-4">Coleções</p>
          <h2 className="headline-section text-foreground">
            Nossos Catálogos
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {catalogs.map((catalog, index) => (
            <div
              key={catalog.id}
              className="catalog-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={catalog.image}
                alt={catalog.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="catalog-card-overlay" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                <h3 className="headline-card text-primary-foreground mb-2">
                  {catalog.name}
                </h3>
                <p className="body-small text-primary-foreground/80 mb-4 hidden sm:block">
                  {catalog.description}
                </p>
                <button className="inline-flex items-center text-primary-foreground text-sm font-medium tracking-wide uppercase group-hover:translate-x-2 transition-transform duration-300">
                  Ver catálogo
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogsSection;
