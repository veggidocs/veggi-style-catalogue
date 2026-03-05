import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Store, MessageCircle, Phone, Mail, Package, Shield, TrendingUp, Heart, Loader2, ChevronDown, Headset, PhoneCall, CheckCircle, PackageCheck, Award, ShieldCheck, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-veggi.png";
import { sendToRDStation } from "@/services/rdstation";
import { formatPhone } from "@/utils/formatPhone";
import { useToast } from "@/hooks/use-toast";

const tipoLojaOptions = [
  "Moda Feminina",
  "Moda Infantil",
  "Moda Íntima",
  "Presentes",
  "Outros",
];

const tipoRevendaOptions = [
  "Loja física",
  "Loja virtual / E-commerce",
  "Venda Informal (redes sociais, etc)",
  "Quero começar a revender",
];



const valorCards = [
  { icon: TrendingUp, iconColor: "#C1D88F", number: "2.5x", label: "MARKUP MÉDIO", desc: "Margem real para lucro consistente.\nBaixo investimento para testar." },
  { icon: PackageCheck, iconColor: "#B9CFEF", number: "100%", label: "SUPORTE DE VENDA", desc: "Fotos profissionais, vídeos 360°, guia de exposição e material de PDV inclusos." },
  { icon: Award, iconColor: "#BA565E", number: "Warner", label: "LICENCIADA OFICIAL", desc: "Looney Tunes, Harry Potter, Tom & Jerry. Personagens que vendem sozinhos quando bem expostos." },
  { icon: ShieldCheck, iconColor: "#471418", number: "45", label: "ANOS DE HISTÓRIA", desc: "Mais de 1.000 lojistas parceiros em todo o Brasil. Qualidade que se sente no toque." },
];

const inputClass =
  "w-full px-4 py-3 bg-white border border-[hsl(35,10%,90%)] rounded-lg font-sans text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(186,86,94,0.1)] transition-all";

const labelClass = "block font-label font-medium text-[13px] text-foreground mb-1.5 normal-case tracking-normal";

const QueroRevender = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    tipoLoja: "",
    tipoRevenda: "",
    instagram: "",
  });

  const isFormValid =
    formData.nome.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.telefone.trim() !== "" &&
    formData.cidade.trim() !== "" &&
    formData.tipoLoja !== "" &&
    formData.tipoRevenda !== "";

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
        setFormSubmitted(true);
        setTimeout(() => {
          document.getElementById("canais")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
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
              className="w-full h-full object-cover object-center"
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
                  <label className={labelClass}>Principal segmento da loja</label>
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

                {/* Tipo de revenda */}
                <div>
                  <label className={labelClass}>Tipo de revenda</label>
                  <select
                    name="tipoRevenda"
                    required
                    value={formData.tipoRevenda}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecione...</option>
                    {tipoRevendaOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Instagram */}
                <div>
                  <label className={labelClass}>Instagram da loja</label>
                  <div className="relative">
                    <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} strokeWidth={1.5} />
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                      placeholder="@sualoja"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading || formSubmitted}
                  className={`w-full mt-2 py-3.5 font-label font-semibold text-[14px] tracking-[0.1em] uppercase rounded-lg transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                    formSubmitted
                      ? "bg-green-600 text-white disabled:opacity-100"
                      : "bg-primary text-primary-foreground hover:bg-[#5a1e22] disabled:opacity-50"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      ENVIANDO...
                    </>
                  ) : formSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      ENVIADO
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

        {/* Escolha do Canal — aparece após envio */}
        {formSubmitted && (
          <section
            id="canais"
            className="py-20 animate-fade-in"
            style={{ backgroundColor: "#F5F3F0" }}
          >
            <div className="container mx-auto px-6 lg:px-16">
              {/* Header */}
              <div className="text-center mb-14">
                <h2 className="font-heading text-[32px] font-bold text-foreground mb-4">
                  Como prefere ser atendido?
                </h2>
                <p className="font-sans text-base text-muted-foreground flex items-center justify-center gap-2">
                  <CheckCircle className="text-green-500 shrink-0" size={18} strokeWidth={2} />
                  <span>
                    <strong className="text-green-600">Dados recebidos!</strong> Agora escolha o canal mais conveniente para você.
                  </span>
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Card 1 — IA de Voz */}
                <div className="relative flex flex-col bg-white rounded-xl p-8 border border-[#E8E6E3] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                   <span className="absolute top-4 right-4 bg-accent text-white text-[10px] font-label font-semibold uppercase px-2 py-0.5 rounded">
                     NOVO
                   </span>
                   <Headset className="text-primary mb-5 min-h-[48px]" size={40} strokeWidth={1.5} />
                  <h3 className="font-heading text-[20px] font-bold text-foreground mb-1 normal-case min-h-[64px] flex items-start">
                    Atendente Virtual
                  </h3>
                  <p className="font-label font-medium text-[13px] text-accent tracking-[0.1em] uppercase mb-3 min-h-[48px]">
                    Fale agora por voz com nossa IA
                  </p>
                  <p className="font-sans text-[14px] text-muted-foreground leading-relaxed mb-6 flex-grow">
                    Tire dúvidas sobre linhas, investimento e condições comerciais. Atendimento imediato, 24h.
                  </p>
                   <button
                     onClick={() => alert("Em breve! Nosso atendente virtual está sendo preparado.")}
                     className="mt-auto block w-full text-center py-3 bg-primary text-primary-foreground font-label font-semibold text-[14px] tracking-[0.05em] uppercase rounded-lg transition-all duration-300 hover:bg-[#5a1e22]"
                   >
                     FALAR AGORA
                   </button>
                </div>

                {/* Card 2 — WhatsApp */}
                <div className="relative flex flex-col bg-white rounded-xl p-8 border border-[#E8E6E3] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                   <MessageCircle className="text-[#25D366] mb-5 min-h-[48px]" size={40} strokeWidth={1.5} />
                   <h3 className="font-heading text-[20px] font-bold text-foreground mb-1 normal-case min-h-[64px] flex items-start">
                     Atendimento por WhatsApp
                   </h3>
                   <p className="font-label font-medium text-[13px] text-accent tracking-[0.1em] uppercase mb-3 min-h-[48px]">
                     Atendimento inicial por IA — 24h, 7 dias por semana
                   </p>
                   <p className="font-sans text-[14px] text-muted-foreground leading-relaxed mb-6 flex-grow">
                     Tire dúvidas sobre linhas, investimento e condições comerciais a qualquer hora pelo WhatsApp.
                   </p>
                   <a
                     href="https://wa.me/553237290909?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20revender%20Veggi"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="mt-auto block w-full text-center py-3 bg-[#25D366] text-white font-label font-semibold text-[14px] tracking-[0.05em] uppercase rounded-lg transition-all duration-300 hover:bg-[#1fb855]"
                   >
                     CHAMAR NO WHATSAPP
                   </a>
                 </div>

                {/* Card 3 — Aguardar Contato */}
                <div className="relative flex flex-col bg-white rounded-xl p-8 border border-[#E8E6E3] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                   <PhoneCall className="text-muted-foreground mb-5 min-h-[48px]" size={40} strokeWidth={1.5} />
                   <h3 className="font-heading text-[20px] font-bold text-foreground mb-1 normal-case min-h-[64px] flex items-start">
                     Contato Comercial
                   </h3>
                   <p className="font-label font-medium text-[13px] text-accent tracking-[0.1em] uppercase mb-3 min-h-[48px]">
                     Nosso time comercial entra em contato com você
                   </p>
                   <p className="font-sans text-[14px] text-muted-foreground leading-relaxed mb-6 flex-grow">
                     Encaminhamos seus dados ao time comercial, que fará o atendimento ou agendará uma conversa com o representante da sua região. Este é o canal mais personalizado — retorno em até 48h úteis.
                   </p>
                   <button
                     onClick={() => toast({ title: "Pronto!", description: "Nosso representante entrará em contato em até 48h úteis." })}
                     className="mt-auto block w-full text-center py-3 bg-white border border-primary text-primary font-label font-semibold text-[14px] tracking-[0.05em] uppercase rounded-lg transition-all duration-300 hover:bg-primary/5"
                   >
                     AGUARDAR CONTATO
                   </button>
                 </div>
              </div>
            </div>
          </section>
        )}

        {/* Blocos de Valor */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center mb-14">
              <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
                Por que revender Veggi
              </p>
              <h2 className="font-heading text-[32px] font-bold text-foreground">
                O que você ganha como parceiro
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {valorCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 border border-border text-center"
                >
                  <card.icon
                    className="mx-auto mb-4"
                    size={28}
                    strokeWidth={1.5}
                    style={{ color: card.iconColor }}
                  />
                  <span className="block font-heading text-[48px] font-bold text-foreground leading-none mb-1">
                    {card.number}
                  </span>
                  <span className="block font-label font-medium text-[12px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    {card.label}
                  </span>
                  <p className="font-sans text-[14px] text-muted-foreground leading-relaxed whitespace-pre-line">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Compacto */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-6 lg:px-16 max-w-[800px]">
            <h2 className="font-heading text-[28px] font-bold text-white text-center mb-10">
              Quem revende, recomenda
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "Veggi transformou minha seção de pijamas. Hoje é a categoria que mais gira.", name: "Carla M. — Loja Encanto Kids, SP" },
                { quote: "O suporte de material fez toda a diferença. As fotos vendem sozinhas no Instagram.", name: "Patrícia S. — Boutique Petit, MG" },
                { quote: "Licenciados Warner são imbatíveis. Os pais pedem pelo nome.", name: "Juliana C. — Loja Estação Infantil, PR" },
              ].map((dep, i) => (
                <div key={i} className="relative pl-4">
                  <span className="absolute -top-3 -left-1 text-[60px] leading-none text-white/15 font-heading font-bold select-none">
                    "
                  </span>
                  <p className="font-sans text-[15px] text-white/90 italic leading-relaxed">
                    {dep.quote}
                  </p>
                  <p className="font-label font-medium text-[12px] text-white/60 mt-3">
                    {dep.name}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center font-sans text-[12px] text-white/40 mt-8">
              Venda exclusiva para lojistas multimarcas com CNPJ ativo.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QueroRevender;
