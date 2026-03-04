import giftPackaging from "@/assets/packaging-new.jpg";

const PackagingSection = () => {
  return (
    <section className="bg-secondary">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image */}
        <div className="relative aspect-square lg:aspect-auto overflow-hidden">
          <img
            src={giftPackaging}
            alt="Embalagem premium Veggi"
            className="w-full h-full object-cover object-[center_60%]"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex items-center justify-center p-12 md:p-20">
          <div className="max-w-md">
            <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
              Presenteabilidade
            </p>
            <h2 className="text-[40px] font-heading font-bold text-foreground leading-tight mb-6">
              Embalagem que valoriza
            </h2>
            <p className="text-base text-muted-foreground font-sans leading-relaxed mb-10">
              Embalagens premium que transformam cada peça em um presente. Aumento garantido de ticket médio em datas especiais.
            </p>

            {/* Stat */}
            <div className="mb-10">
              <span className="block text-[64px] font-heading font-bold text-primary leading-none">
                +35%
              </span>
              <span className="font-label text-sm font-medium text-muted-foreground">
                ticket médio
              </span>
            </div>

            {/* Link CTA */}
            <a
              href="#contato"
              className="inline-flex items-center gap-2 font-label text-sm font-medium text-primary tracking-[0.05em] hover:text-accent transition-colors duration-300"
            >
              Conhecer embalagens
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;
