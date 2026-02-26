import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const categories = [
  { label: "Adulto", cost: 60, markup: 130 },
  { label: "Infantil", cost: 45, markup: 150 },
  { label: "Licenciados", cost: 65, markup: 130 },
];

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0, maximumFractionDigits: 0 });

const ROISection = () => {
  const [catIdx, setCatIdx] = useState(0);
  const [qty, setQty] = useState(100);

  const cat = categories[catIdx];
  const price = Math.round(cat.cost * (1 + cat.markup / 100));
  const investment = cat.cost * qty;
  const revenue = price * qty;
  const profit = revenue - investment;

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F3F0" }}>
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
            Rentabilidade clara
          </p>
          <h2 className="font-heading text-[40px] font-bold text-foreground leading-tight mb-4">
            Simule seu investimento
          </h2>
          <p className="text-base text-muted-foreground font-sans max-w-xl mx-auto">
            Veja o potencial de lucro com a Veggi. Markup saudável para sua operação crescer.
          </p>
        </div>

        {/* Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {/* Left */}
          <div>
            <h3 className="font-label text-xl font-semibold text-foreground normal-case tracking-normal mb-8">
              Simule seu investimento
            </h3>

            {/* Category selector */}
            <p className="text-sm text-muted-foreground font-sans mb-3">Categoria de produto</p>
            <div className="flex gap-2 mb-8">
              {categories.map((c, i) => (
                <button
                  key={c.label}
                  onClick={() => setCatIdx(i)}
                  className={`px-5 py-2 rounded-full text-sm font-label font-medium transition-all duration-200 ${
                    i === catIdx
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-muted-foreground border border-border hover:border-primary/30"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-muted-foreground font-sans">Quantidade de peças</p>
                <span className="font-heading text-xl font-bold text-foreground">{qty}</span>
              </div>
              <Slider
                value={[qty]}
                onValueChange={(v) => setQty(v[0])}
                min={50}
                max={500}
                step={10}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>50</span>
                <span>500</span>
              </div>
            </div>

            {/* Unit data */}
            <div className="space-y-2">
              <p className="text-base text-foreground font-sans">
                Custo unitário: <strong>{fmt(cat.cost)}</strong>
              </p>
              <p className="text-base text-foreground font-sans">
                Preço sugerido: <strong>{fmt(price)}</strong>
              </p>
            </div>
          </div>

          {/* Right — Results card */}
          <div className="bg-foreground rounded-xl p-8 flex flex-col justify-center text-white">
            <h4 className="font-label text-lg font-semibold normal-case tracking-normal mb-6 text-white/90">
              Resultado estimado
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60 font-sans">Investimento total</span>
                <span className="font-label text-2xl font-semibold normal-case tracking-normal">{fmt(investment)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60 font-sans">Faturamento potencial</span>
                <span className="font-label text-2xl font-semibold normal-case tracking-normal">{fmt(revenue)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60 font-sans">Markup</span>
                <span className="font-heading text-[28px] font-bold text-accent">{cat.markup}%</span>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60 font-sans">Lucro bruto estimado</span>
                <span className="font-heading text-4xl font-bold">{fmt(profit)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground font-sans italic mb-8">
          *Valores de referência. Consulte condições comerciais para sua região.
        </p>

        {/* CTA */}
        <div className="text-center">
          <a href="#contato" className="btn-primary">
            Falar com consultor comercial
          </a>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
