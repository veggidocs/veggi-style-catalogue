import { useState } from "react";
import catalogSleepwear from "@/assets/catalog-sleepwear.jpg";
import catalogSonhoFantasia from "@/assets/catalog-sonho-fantasia.jpg";
import catalogTurmaBia from "@/assets/catalog-turma-bia.jpg";
import catalogLicenciados from "@/assets/catalog-licenciados.jpg";

const lines = [
  {
    id: "sleepwear",
    name: "Sleepwear",
    tagline: "Sofisticação para o dia a dia",
    description:
      "Linha adulta feminina com foco em elegância e conforto. Produtos que geram ticket médio saudável e fidelização natural das clientes.",
    features: ["Ticket médio alto", "Alta fidelização", "Mix versátil"],
    image: catalogSleepwear,
  },
  {
    id: "sonho-fantasia",
    name: "Sonho e Fantasia",
    tagline: "O encanto que vende sozinho",
    description:
      "Linha infantil com apelo emocional forte. Peças que encantam pais e crianças, gerando compra por desejo e reposição frequente.",
    features: ["Apelo emocional", "Design exclusivo", "Margem premium"],
    image: catalogSonhoFantasia,
  },
  {
    id: "turma-bia",
    name: "Turma da Bia",
    tagline: "Giro certo, lucro garantido",
    description:
      "Linha de entrada com alto giro e reposição constante. Ideal para manter o fluxo de caixa saudável com peças de fácil venda.",
    features: ["Alto giro", "Reposição fácil", "Preço acessível"],
    image: catalogTurmaBia,
  },
  {
    id: "licenciados",
    name: "Licenciados",
    tagline: "Warner Bros no seu estoque",
    description:
      "Personagens icônicos que vendem por impulso. Batman, Mulher Maravilha, Looney Tunes e mais. Exclusividade que diferencia sua loja.",
    features: ["Venda por impulso", "Exclusividade", "Marca forte"],
    image: catalogLicenciados,
  },
];

const ProductLinesSection = () => {
  const [activeLine, setActiveLine] = useState(lines[0]);

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="caption text-veggi-stone mb-4">Linhas de Produto</p>
          <h2 className="headline-section text-foreground">
            Mix estratégico para seu negócio
          </h2>
        </div>

        {/* Line Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {lines.map((line) => (
            <button
              key={line.id}
              onClick={() => setActiveLine(line)}
              className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                activeLine.id === line.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {line.name}
            </button>
          ))}
        </div>

        {/* Active Line Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="caption text-accent mb-4">{activeLine.tagline}</p>
            <h3 className="headline-card text-foreground mb-6">
              {activeLine.name}
            </h3>
            <p className="body-large text-muted-foreground mb-8">
              {activeLine.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {activeLine.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background text-foreground text-sm font-medium border border-border"
                >
                  {feature}
                </span>
              ))}
            </div>

            <a href="#contato" className="btn-primary">
              Solicitar amostras
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={activeLine.image}
                alt={activeLine.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLinesSection;
