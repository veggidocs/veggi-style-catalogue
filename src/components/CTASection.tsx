import { useState } from "react";

const CTASection = () => {
  const [formType, setFormType] = useState<"new" | "existing">("new");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    storeName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="min-h-screen grid lg:grid-cols-2">
      {/* Left - Visual */}
      <div className="bg-primary flex items-center justify-center p-12 md:p-20">
        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-8">
            Vamos
            <br />
            conversar
          </h2>
          <p className="text-lg text-primary-foreground/70 font-light">
            45 anos ajudando lojistas a construir estoques rentáveis
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div id="cliente" className="bg-background flex items-center justify-center p-8 md:p-12 lg:p-20">
        <div className="w-full max-w-md">
          {/* Toggle */}
          <div className="flex gap-2 mb-10">
            <button
              onClick={() => setFormType("new")}
              className={`flex-1 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                formType === "new"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Quero revender
            </button>
            <button
              onClick={() => setFormType("existing")}
              className={`flex-1 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                formType === "existing"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Já sou cliente
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="text"
              name="storeName"
              placeholder="Nome da loja"
              value={formData.storeName}
              onChange={handleChange}
              required
              className="w-full px-0 py-4 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />

            <button type="submit" className="w-full btn-accent mt-8">
              {formType === "new" ? "Solicitar contato" : "Acessar área do cliente"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
