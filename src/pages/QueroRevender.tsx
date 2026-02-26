import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Store, MessageCircle, Phone, Mail, Package, Shield, TrendingUp, Heart, Loader2, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sleepwear.jpg";
import { sendToRDStation } from "@/services/rdstation";
import { formatPhone } from "@/utils/formatPhone";
import { useToast } from "@/hooks/use-toast";

const tipoLojaOptions = [
  "Multimarcas",
  "Moda infantil",
  "Moda feminina",
  "Lingerie e sleepwear",
  "Presentes e enxoval",
  "Outra",
];

const comoConheceuOptions = [
  "Representante comercial",
  "Instagram",
  "Google / Busca",
  "Indicação de outra lojista",
  "Feira / Evento",
  "Outro",
];

const canais = [
  { id: "whatsapp", icon: MessageCircle, title: "WhatsApp", desc: "Resposta em até 2h" },
  { id: "telefone", icon: Phone, title: "Telefone", desc: "(32) 3729-0909" },
  { id: "email", icon: Mail, title: "E-mail", desc: "faleconosco@veggi.com.br" },
];

const blocos = [
  { icon: Package, title: "Pedido mínimo acessível", desc: "Comece com um mix estratégico sem precisar de grande investimento inicial." },
  { icon: Shield, title: "Marca consolidada", desc: "45 anos de tradição e qualidade reconhecida em todo o Brasil." },
  { icon: TrendingUp, title: "Alta giro de estoque", desc: "Sleepwear é recompra garantida — seus clientes voltam sempre." },
  { icon: Heart, title: "Suporte dedicado", desc: "Representante comercial exclusivo e materiais de sell-out inclusos." },
];

const inputClass =
  "w-full px-4 py-3 bg-white border border-[hsl(35,10%,90%)] rounded-lg font-sans text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(186,86,94,0.1)] transition-all";

const labelClass = "block font-label font-medium text-[13px] text-foreground mb-1.5 normal-case tracking-normal";

const QueroRevender = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [canalEscolhido, setCanalEscolhido] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    tipoLoja: "",
    comoConheceu: "",
  });

  const isFormValid =
    formData.nome.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.telefone.trim() !== "" &&
    formData.cidade.trim() !== "" &&
    formData.tipoLoja !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "telefone") {
      setFormData((prev) => ({ ...prev, telefone: formatPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await sendToRDStation(formData);
      if (success) {
        // Scroll to channel section
        document.getElementById("canais")?.scrollIntoView({ behavior: "smooth" });
      } else {
        toast({
          variant: "destructive",
          title: "Ocorreu um erro",
          description: "Tente novamente ou entre em contato pelo WhatsApp.",
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center pt-20 pb-16 md:pt-20 md:pb-16 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Loja multimarcas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(45,45,45,0.7)]" />
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
            <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-5">
              Novo lojista
            </p>
            <h1 className="font-heading text-[28px] md:text-[42px] font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
              Comece a revender a marca que mais{" "}
              <span className="italic text-accent">cresce</span>{" "}
              em sleepwear premium
            </h1>
            <p className="text-base md:text-lg font-sans text-white/85 max-w-[600px] mx-auto">
              Preencha seus dados e escolha como quer ser atendido. Em minutos,
              você estará conectado ao nosso time comercial.
            </p>
          </div>

          {/* Chevron animado */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <ChevronDown
              className="text-white/60 animate-bounce"
              size={28}
              strokeWidth={1.5}
            />
          </div>
        </section>

        {/* Formulário de Cadastro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="max-w-[560px] mx-auto bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 md:p-12">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <Store className="text-primary" size={32} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h2 className="font-heading text-[28px] font-bold text-foreground text-center mb-2">
                Seus dados
              </h2>
              <p className="text-center font-sans text-[15px] text-muted-foreground mb-8">
                Preencha para personalizarmos seu atendimento
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <div>
                  <label className={labelClass}>Nome completo</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label className={labelClass}>Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Cidade / Estado */}
                <div>
                  <label className={labelClass}>Cidade / Estado</label>
                  <input
                    type="text"
                    name="cidade"
                    required
                    value={formData.cidade}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Ex: Uberaba - MG"
                  />
                </div>

                {/* Tipo de loja */}
                <div>
                  <label className={labelClass}>Tipo de loja</label>
                  <select
                    name="tipoLoja"
                    required
                    value={formData.tipoLoja}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecione...</option>
                    {tipoLojaOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Como conheceu */}
                <div>
                  <label className={labelClass}>Como conheceu a Veggi?</label>
                  <select
                    name="comoConheceu"
                    value={formData.comoConheceu}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecione...</option>
                    {comoConheceuOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className="w-full mt-2 py-3.5 bg-primary text-primary-foreground font-label font-semibold text-[14px] tracking-[0.1em] uppercase rounded-lg transition-all duration-300 hover:bg-[#5a1e22] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      ENVIANDO...
                    </>
                  ) : (
                    "CONTINUAR"
                  )}
                </button>

                {/* Privacy */}
                <p className="text-center text-[12px] font-sans text-muted-foreground pt-1">
                  Seus dados estão seguros. Não compartilhamos com terceiros.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Escolha do Canal */}
        <section id="canais" className="py-20 md:py-28" style={{ backgroundColor: "hsl(var(--veggi-section))" }}>
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
        <section className="py-20 md:py-28 bg-background">
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
