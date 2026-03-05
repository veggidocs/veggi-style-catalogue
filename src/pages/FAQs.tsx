import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Curadoria e Mix de Produtos",
    questions: [
      {
        q: "Quais são as opções de produtos disponíveis para compor o mix da minha loja?",
        a: "O portfólio da Veggi é estruturado em quatro linhas principais. Oferecemos produtos Licenciados oficiais (como Harry Potter e Looney Tunes), a linha Sleepwear para toda a família, a linha clássica Turma da Bia, e a linha Sonho e Fantasia, focada no universo infantil lúdico. Essa diversidade permite que você atenda desde a compra por impulso até a busca por presentes, viabilizando a venda casada e o aumento do seu ticket médio.",
      },
      {
        q: "Sou obrigado a comprar grades fechadas ou posso escolher os tamanhos que mais vendem?",
        a: "A Veggi trabalha com Grade Aberta, permitindo que você escolha exatamente os tamanhos que deseja adquirir e até mesmo misture diferentes linhas em um único pedido. Ter total controle sobre a grade significa investir o seu capital apenas nos tamanhos que realmente giram no seu PDV, eliminando o risco de estoque parado.",
      },
      {
        q: "Com qual frequência a marca lança novidades para a vitrine?",
        a: "Trabalhamos com duas Coleções Principais ao ano (Primavera Verão e Outono Inverno), que são estrategicamente intercaladas por Coleções Cápsula. Lançamentos contínuos mantêm a sua vitrine sempre atrativa e atualizada com o mercado, garantindo novidades constantes.",
      },
    ],
  },
  {
    title: "Condições Comerciais e Logística",
    questions: [
      {
        q: "Qual é o pedido mínimo e quem está apto a comprar no atacado?",
        a: "A venda é exclusiva para Pessoas Jurídicas (CNPJ) com operação no varejo de moda ou vestuário. O pedido mínimo de referência gira em torno de R$ 3.500,00 (valor que deve ser confirmado no fechamento, pois pode variar conforme a região). Esse formato proporciona uma experimentação segura das nossas coleções, garantindo um rápido retorno financeiro para o seu caixa.",
      },
      {
        q: "Como funcionam as condições de pagamento?",
        a: "Aceitamos pagamentos à vista, cartão de crédito ou faturados a prazo via boleto bancário (mediante análise financeira do sistema).",
      },
      {
        q: "Quem é o responsável pelo custo do frete e qual o prazo de entrega?",
        a: "Na grande maioria das negociações, o envio é feito via Frete CIF (pago pela Veggi). Exceções de cobrança ocorrem apenas em pedidos abaixo do volume mínimo ou em regiões de logística complexa. Como trabalhamos com faturamento rápido para pronta entrega, a redução do seu custo com o frete subsidiado permite que o produto chegue à sua prateleira com um preço final mais competitivo.",
      },
    ],
  },
  {
    title: "Marketing e Apoio de Vendas",
    questions: [
      {
        q: "A Veggi fornece material fotográfico e de vídeo para as redes sociais da minha loja?",
        a: "Sim. Oferecemos um Drive de Marketing completo aos nossos lojistas. O material inclui fotos de campanha, imagens técnicas (lookbook) para o seu e-commerce, vídeos dos produtos e artes com posts prontos para o Instagram. Isso agrega valor à sua loja e acelera as suas vendas sem que você precise arcar com custos de produção audiovisual.",
      },
      {
        q: "Eu tenho autorização para utilizar livremente essas imagens da marca?",
        a: "Sim. Todo o material oficial disponibilizado no Drive é de uso livre e fortemente incentivado para que nossos revendedores autorizados divulguem os produtos. Ao utilizar a força visual de uma indústria com mais de 45 anos de atuação, você transmite ainda mais segurança e exclusividade para o seu consumidor final.",
      },
    ],
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <span className="label-upper text-accent mb-4 inline-block">
            Suporte ao Lojista
          </span>
          <h1 className="headline-hero text-foreground mb-4">
            Perguntas Frequentes
          </h1>
          <p className="body-large text-muted-foreground max-w-xl mx-auto">
            Tudo que você precisa saber para revender Veggi
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-12 last:mb-0">
              <h2 className="font-label text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-6">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`cat${catIdx}-q${qIdx}`}
                    className="border border-border rounded px-5 data-[state=open]:shadow-soft"
                  >
                    <AccordionTrigger className="text-left text-[15px] font-medium text-foreground hover:no-underline py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="headline-card text-foreground mb-3">
            Não encontrou o que procurava?
          </h2>
          <p className="body-large text-muted-foreground mb-10">
            Fale com nosso time comercial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quero-revender" className="btn-primary rounded">
              Quero Revender
            </a>
            <a href="/ja-sou-cliente" className="btn-secondary rounded">
              Já sou Cliente
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
