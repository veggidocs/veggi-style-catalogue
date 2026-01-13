import { useState } from "react";
import testimonialVideo1 from "@/assets/testimonial-video-1.jpg";
import testimonialVideo2 from "@/assets/testimonial-video-2.jpg";
import testimonialVideo3 from "@/assets/testimonial-video-3.jpg";

const videoTestimonials = [
  {
    id: 1,
    name: "Carla Mendes",
    store: "Boutique Flor de Lis",
    location: "São Paulo, SP",
    quote: "Giro de 25 dias. Nunca tive com outra marca.",
    image: testimonialVideo1,
  },
  {
    id: 2,
    name: "Patrícia Santos",
    store: "Loja Amor de Mãe",
    location: "Belo Horizonte, MG",
    quote: "A marca que minha cliente já conhece e confia.",
    image: testimonialVideo2,
  },
  {
    id: 3,
    name: "Juliana Costa",
    store: "Kids & Dreams",
    location: "Curitiba, PR",
    quote: "Os licenciados vendem sozinhos. É só expor.",
    image: testimonialVideo3,
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
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Quem revende
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900">
            Histórias reais
          </h2>
        </div>

        {/* Video Testimonials */}
        <div className="mb-24 md:mb-32">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {videoTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(testimonial.id)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-neutral-900 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Quote Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-lg md:text-xl font-serif text-white italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h4 className="font-medium text-neutral-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">
                    {testimonial.store} · {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Testimonials */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-12 text-center">
            O que dizem
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {textTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative p-8 md:p-10 bg-neutral-50 group hover:bg-neutral-100 transition-colors duration-500"
              >
                {/* Quote Mark */}
                <div className="absolute top-6 left-8 text-6xl font-serif text-neutral-300 leading-none">
                  "
                </div>

                {/* Quote */}
                <blockquote className="relative z-10 pt-8">
                  <p className="text-lg md:text-xl font-serif text-neutral-800 leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <footer className="border-t border-neutral-200 pt-6">
                    <p className="font-medium text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500 mb-2">
                      {testimonial.store} · {testimonial.location}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-neutral-400">
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

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-neutral-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/60 text-lg">
                Vídeo em breve
              </p>
              <p className="text-sm text-white/40 mt-2">
                Clique para fechar
              </p>
            </div>
          </div>
          
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-white hover:text-white/70 transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
