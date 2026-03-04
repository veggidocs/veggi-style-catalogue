import { useState } from "react";
import poster1 from "@/assets/poster-depoimento-1.png";
import poster2 from "@/assets/poster-depoimento-2.png";
import poster3 from "@/assets/poster-depoimento-3.png";

const videoTestimonials = [
  {
    id: 1,
    name: "Chryssia",
    store: "Boneca de Cheiro",
    location: "Vicentinópolis, GO",
    quote: "A Veggi virou referência de presente na minha loja. O que começou com um teste hoje é a principal marca.",
    videoSrc: "https://veggi.com.br/videos/depoimento_veggi_1.mp4",
    poster: poster1,
  },
  {
    id: 2,
    name: "Rafaela",
    store: "Pra Você",
    location: "Orleans, SC",
    quote: "Minha aposta principal com a Veggi são os produtos para toda a família, que garantem venda casada e giro rápido.",
    videoSrc: "https://veggi.com.br/videos/depoimento_veggi_2.mp4",
    poster: poster2,
  },
  {
    id: 3,
    name: "Eliane",
    store: "Led's Íntima",
    location: "Goianésia, GO",
    quote: "Estou a 14 anos trabalhando com a Veggi e nesse tempo nós vimos o nosso crescimento acontecer. Hoje somos a loja que mais vende pijama em todo o grupo Led's.",
    videoSrc: "https://veggi.com.br/videos/depoimento_veggi_3.mp4",
    poster: poster3,
  },
];

const textTestimonials = [
  {
    id: 1,
    quote: "São 12 anos de parceria. A Veggi entende o que é construir junto. Não é só vender, é crescer lado a lado.",
    name: "Fernanda Oliveira",
    store: "Encanto Lingerie",
    location: "Campinas, SP",
    years: "12 anos de parceria",
  },
  {
    id: 2,
    quote: "O suporte comercial faz diferença. Material de PDV, fotos para redes sociais, tudo na mão. É parceiro de verdade.",
    name: "Renata Almeida",
    store: "Sonhos de Bebê",
    location: "Porto Alegre, RS",
    years: "8 anos de parceria",
  },
  {
    id: 3,
    quote: "Nunca vi pijama girar tão rápido. A cliente vem, experimenta, leva. Não fica encalhado nunca.",
    name: "Mariana Torres",
    store: "Villa Donna",
    location: "Ribeirão Preto, SP",
    years: "5 anos de parceria",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-4">
            Quem revende
          </p>
          <h2 className="font-heading text-[40px] font-bold text-foreground leading-tight">
            Histórias reais
          </h2>
        </div>

        {/* Video Testimonials */}
        <div className="mb-24 md:mb-32">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {videoTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                {/* Video Player with overlay */}
                <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-neutral-900">
                  <video
                    controls
                    preload="none"
                    playsInline
                    poster={testimonial.poster}
                    className="w-full h-full object-cover rounded-xl"
                    src={testimonial.videoSrc}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none rounded-xl" />
                  {/* Text over gradient */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none z-10">
                    <p className="text-sm font-sans text-white/90 italic mb-3">
                      "{testimonial.quote}"
                    </p>
                    <h4 className="font-label text-base font-semibold text-white normal-case tracking-normal">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm font-sans text-white/70">
                      {testimonial.store} · {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Testimonials */}
        <div>
          <p className="font-label text-[12px] tracking-[0.2em] uppercase text-accent mb-12 text-center">
            O que dizem
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {textTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative p-8 md:p-10 bg-neutral-50 group hover:bg-neutral-100 transition-colors duration-500 flex flex-col"
              >
                <div className="absolute top-6 left-8 text-6xl font-serif text-border leading-none">
                  "
                </div>
                <blockquote className="relative z-10 pt-8 flex flex-col flex-1 justify-between">
                  <p className="text-base font-sans text-foreground leading-relaxed mb-8 italic">
                    {testimonial.quote}
                  </p>
                  <footer className="border-t border-neutral-200 pt-6 mt-auto">
                    <p className="font-label text-base font-semibold text-foreground normal-case tracking-normal">{testimonial.name}</p>
                    <p className="text-sm font-sans text-muted-foreground mb-2">
                      {testimonial.store} · {testimonial.location}
                    </p>
                    <p className="font-label text-[12px] tracking-[0.1em] uppercase text-accent">
                      {testimonial.years}
                    </p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24">
          <a href="#contato" className="btn-primary">
            Fazer parte dessa história
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
