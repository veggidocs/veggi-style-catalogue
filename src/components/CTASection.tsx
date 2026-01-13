import { useState } from "react";

const CTASection = () => {
  const [formType, setFormType] = useState<"new" | "existing">("new");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    storeName: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Text */}
          <div>
            <p className="caption text-veggi-sand mb-4">Vamos conversar</p>
            <h2 className="headline-section mb-6">
              Pronto para transformar seu mix de sleepwear?
            </h2>
            <p className="body-large text-primary-foreground/80 mb-8">
              Há 45 anos ajudamos lojistas a construir estoques rentáveis com
              produtos que vendem e fidelizam. Vamos encontrar o mix ideal para
              sua loja.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-primary-foreground/90">
                  Consultoria personalizada de mix
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-primary-foreground/90">
                  Condições especiais para primeira compra
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-primary-foreground/90">
                  Suporte contínuo de reposição
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(11) 9999-9999</span>
              <span>•</span>
              <span>comercial@veggi.com.br</span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div id="cliente" className="bg-background/5 backdrop-blur-sm p-8 md:p-10">
            {/* Form Type Toggle */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setFormType("new")}
                className={`flex-1 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  formType === "new"
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }`}
              >
                Quero revender
              </button>
              <button
                onClick={() => setFormType("existing")}
                className={`flex-1 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  formType === "existing"
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }`}
              >
                Já sou cliente
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone/WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Nome da loja"
                    value={formData.storeName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="Cidade/Estado"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder={
                    formType === "new"
                      ? "Conte um pouco sobre sua loja e interesse..."
                      : "Qual seu código de cliente ou necessidade?"
                  }
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-accent">
                {formType === "new" ? "Solicitar contato comercial" : "Acessar área do cliente"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
