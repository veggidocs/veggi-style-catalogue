import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, MessageCircle, Phone, Mail, Package, Shield, TrendingUp, Heart } from "lucide-react";

const QueroRevender = () => {
  const [formData, setFormData] = useState({
    nome: "",
    loja: "",
    cnpj: "",
    cidade: "",
    estado: "",
    whatsapp: "",
    email: "",
  });

  const [canalEscolhido, setCanalEscolhido] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: send to backend
    console.log("Form submitted:", formData, "Canal:", canalEscolhido);
  };

  const estados = [
    "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
    "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
  ];

  const canais = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp",
      desc: "Resposta em até 2h",
    },
    {
      id: "telefone",
      icon: Phone,
      title: "Telefone",
      desc: "(32) 3729-0909",
    },
    {
      id: "email",
      icon: Mail,
      title: "E-mail",
      desc: "faleconosco@veggi.com.br",
    },
  ];

  const blocos = [
    {
      icon: Package,
      title: "Pedido mínimo acessível",
      desc: "Comece com um mix estratégico sem precisar de grande investimento inicial.",
    },
    {
      icon: Shield,
      title: "Marca consolidada",
      desc: "45 anos de tradição e qualidade reconhecida em todo o Brasil.",
    },
    {
      icon: TrendingUp,
      title: "Alta giro de estoque",
      desc: "Sleepwear é recompra garantida — seus clientes voltam sempre.",
    },
    {
      icon: Heart,
      title: "Suporte dedicado",
      desc: "Representante comercial exclusivo e materiais de sell-out inclusos.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero de Boas-Vindas */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
          <div className="container mx-auto px-6 lg:px-16 text-center">
            <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
              Seja um lojista parceiro
            </p>
            <h1 className="font-heading text-[40px] md:text-[56px] font-bold text-foreground leading-tight mb-6">
              Comece a revender{" "}
              <span className="italic text-accent">Veggi</span>
            </h1>
            <p className="text-lg font-sans text-muted-foreground max-w-xl mx-auto">
              Cadastro rápido, sem burocracia. Junte-se a mais de 1.000 lojistas
              que confiam na marca há 45 anos.
            </p>
          </div>
        </section>

        {/* Formulário de Cadastro */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--veggi-section))" }}>
          <div className="container mx-auto px-6 lg:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-foreground text-center mb-3">
                Preencha seus dados
              </h2>
              <p className="text-center font-sans text-muted-foreground mb-12">
                Nosso time comercial entrará em contato em até 24h úteis.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label text-[12px] tracking-[0.1em] uppercase text-foreground mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block font-label text-[12px] tracking-[0.1em] uppercase text-foreground mb-2">
                      Nome da loja *
                    </label>
                    <input
                      type="text"
                      name="loja"
                      required
                      value={formData.loja}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="Nome fantasia"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label text-[12px] tracking-[0.1em] uppercase text-foreground mb-2">
                    CNPJ *
                  </label>
                  <input
                    type="text"
                    name="cnpj"
                    required
                    value={formData.cnpj}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    placeholder="00.000.000/0000-00"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label text-[12px] tracking-[0.1em] uppercase text-foreground mb-2">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      name="cidade"
                      required
                      value={formData.cidade}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="Sua cidade"
                    />
                  </div>
                  <div>
                    <label className="block font-label text-[12px] tracking-[0.1em] uppercase text-foreground mb-2">
                      Estado *
                    </label>
                    <select
                      name="estado"
                      required
                      value={formData.estado}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    >
                      <option value="">Selecione</option>
                      {estados.map((uf) => (
                        <option key={uf} value={uf}>{uf}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label text-[12px] tracking-[0.1em] uppercase text-foreground mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block font-label text-[12px] tracking-[0.1em] uppercase text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 bg-primary text-primary-foreground font-label font-semibold text-sm tracking-[0.1em] uppercase rounded transition-all duration-300 hover:opacity-90"
                >
                  Enviar cadastro
                </button>

                <p className="text-center text-xs font-sans text-muted-foreground">
                  Venda exclusiva para lojistas multimarcas com CNPJ ativo
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Escolha do Canal */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 lg:px-16 text-center">
            <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
              Prefere outro canal?
            </p>
            <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-foreground mb-14">
              Fale com nosso time comercial
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {canais.map((canal) => (
                <button
                  key={canal.id}
                  onClick={() => setCanalEscolhido(canal.id)}
                  className={`p-8 rounded-lg border transition-all duration-300 text-center group ${
                    canalEscolhido === canal.id
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/40"
                  }`}
                >
                  <canal.icon
                    className={`mx-auto mb-4 transition-colors ${
                      canalEscolhido === canal.id ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                    }`}
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-label text-base font-semibold text-foreground normal-case tracking-normal mb-1">
                    {canal.title}
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground">{canal.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blocos de Valor */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--veggi-section))" }}>
          <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center mb-14">
              <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
                Por que revender Veggi
              </p>
              <h2 className="font-heading text-[28px] md:text-[36px] font-bold text-foreground">
                Vantagens para seu negócio
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {blocos.map((bloco, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center">
                    <bloco.icon className="text-primary" size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-label text-sm font-semibold text-foreground normal-case tracking-normal mb-2">
                    {bloco.title}
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                    {bloco.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Compacto */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              <div className="text-center">
                <span className="block text-5xl md:text-6xl font-heading font-bold text-primary-foreground">45</span>
                <span className="font-label text-[11px] tracking-[0.15em] uppercase text-white/70">anos</span>
              </div>
              <div className="text-center">
                <span className="block text-5xl md:text-6xl font-heading font-bold text-primary-foreground">+1.000</span>
                <span className="font-label text-[11px] tracking-[0.15em] uppercase text-white/70">PDVs parceiros</span>
              </div>
              <div className="text-center">
                <span className="block text-5xl md:text-6xl font-heading font-bold text-primary-foreground">+400k</span>
                <span className="font-label text-[11px] tracking-[0.15em] uppercase text-white/70">peças/ano</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QueroRevender;
