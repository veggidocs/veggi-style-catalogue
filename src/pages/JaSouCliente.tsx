import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Store, TrendingUp, PackageCheck, Award, ShieldCheck, ChevronDown, CheckCircle, Loader2 } from "lucide-react";
import heroImage from "@/assets/hero-veggi.png";
import { sendClienteToRDStation } from "@/services/rdstation";
import { formatPhone } from "@/utils/formatPhone";
import { useToast } from "@/hooks/use-toast";

const valorCards = [
  { icon: TrendingUp, iconColor: "#C1D88F", number: "2.5x", label: "MARKUP MÉDIO", desc: "Margem real para lucro consistente.\nBaixo investimento para testar." },
  { icon: PackageCheck, iconColor: "#B9CFEF", number: "100%", label: "SUPORTE DE VENDA", desc: "Fotos profissionais, vídeos 360°, guia de exposição e material de PDV inclusos." },
  { icon: Award, iconColor: "#BA565E", number: "Warner", label: "LICENCIADA OFICIAL", desc: "Looney Tunes, Harry Potter, Tom & Jerry. Personagens que vendem sozinhos quando bem expostos." },
  { icon: ShieldCheck, iconColor: "#471418", number: "45", label: "ANOS DE HISTÓRIA", desc: "Mais de 1.000 lojistas parceiros em todo o Brasil. Qualidade que se sente no toque." },
];

const inputClass =
  "w-full px-4 py-3 bg-white border border-[hsl(35,10%,90%)] rounded-lg font-sans text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(186,86,94,0.1)] transition-all";

const labelClass = "block font-label font-medium text-[13px] text-foreground mb-1.5 normal-case tracking-normal";

const formatCNPJ = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

const JaSouCliente = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cnpj: "",
  });

const isPhoneValid = formData.telefone.replace(/\D/g, "").length >= 10;
const isCNPJValid = formData.cnpj.replace(/\D/g, "").length === 14;

const isFormValid =
  formData.nome.trim() !== "" &&
  isPhoneValid &&
  formData.email.trim() !== "" &&
  isCNPJValid;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "telefone") {
      setFormData((prev) => ({ ...prev, telefone: formatPhone(value) }));
    } else if (name === "cnpj") {
      setFormData((prev) => ({ ...prev, cnpj: formatCNPJ(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await sendClienteToRDStation(formData);
      if (success) {
        setFormSubmitted(true);
        toast({
          title: "Dados enviados!",
          description: "Nosso time entrará em contato em breve.",
        });
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
              Cliente Veggi
            </p>
            <h1 className="font-heading text-[28px] md:text-[42px] font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
              Área exclusiva para quem já{" "}
              <span className="italic text-accent">revende</span>{" "}
              Veggi
            </h1>
            <p className="text-base md:text-lg font-sans text-white/85 max-w-[600px] mx-auto">
              Acesse seu atendimento prioritário. Fale direto com seu representante ou solicite suporte comercial.
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <ChevronDown
              className="text-white/60 animate-bounce"
              size={28}
              strokeWidth={1.5}
            />
          </div>
        </section>

        {/* Formulário */}
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
              <p className="text-center font-sans text-[15px] text-muted-foreground mb-6">
                Preencha para agilizar seu atendimento
              </p>

              {/* Badge exclusivo */}
              <div className="mb-8 bg-accent/10 border border-accent/20 rounded-lg px-4 py-3 text-center">
                <p className="font-label font-semibold text-[13px] text-accent tracking-[0.05em]">
                  Área exclusiva para lojistas que já possuem cadastro Veggi.
                </p>
              </div>

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

                {/* WhatsApp */}
                <div>
                  <label className={labelClass}>WhatsApp</label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    minLength={14}
                    value={formData.telefone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="(00) 00000-0000"
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

                {/* CNPJ */}
                <div>
                  <label className={labelClass}>CNPJ</label>
                  <input
                    type="text"
                    name="cnpj"
                    required
                    minLength={18}
                    value={formData.cnpj}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="00.000.000/0000-00"
                  />
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
                    "ENVIAR"
                  )}
                </button>

                <p className="text-center text-[12px] font-sans text-muted-foreground pt-1">
                  Seus dados estão seguros. Não compartilhamos com terceiros.
                </p>
              </form>
            </div>
          </div>
        </section>

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

export default JaSouCliente;
