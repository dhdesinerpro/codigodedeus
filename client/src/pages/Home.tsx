import { useState, useEffect } from 'react';
import { Star, ChevronRight, Zap, Lock, Volume2, Sparkles } from 'lucide-react';

/**
 * DESIGN PHILOSOPHY: Premium Dark Minimalist 2026
 * - Copy agressiva e persuasiva com urgência emocional
 * - Estrutura compacta com espaçamento estratégico (sem sobreposições)
 * - Tipografia moderna com destaques em amarelo
 * - Background premium moderno (não espiritual, mais tech-luxury)
 * - UX pensada em jornada de conversão
 * - Animações suaves e modernas
 */

interface Testimonial {
  id: number;
  name: string;
  profession: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Costa',
    profession: 'Empresária',
    feedback: 'Minha mente destravou. Não é exagero. Terceiro dia e já sentia diferente.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Rafael Mendes',
    profession: 'Corretor',
    feedback: 'Recuperei minha fé. Esse áudio mexeu profundamente comigo de forma real.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'Juliana Alves',
    profession: 'Psicóloga',
    feedback: 'Paz mental + clareza emocional. Recomendo para todos os meus pacientes.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 4,
    name: 'Eduardo Lima',
    profession: 'Personal Trainer',
    feedback: 'Comecei por curiosidade. Virou ritual diário. Não consigo viver sem.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    id: 5,
    name: 'Camila Rocha',
    profession: 'Designer',
    feedback: 'Diferente de tudo. Profundo. Real. Isso é transformação de verdade.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 6,
    name: 'Felipe Martins',
    profession: 'Empresário',
    feedback: 'Foco, leveza, força espiritual. Meu desempenho aumentou 40%.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop'
  },
  {
    id: 7,
    name: 'Aline Ferreira',
    profession: 'Estudante',
    feedback: 'Minha mente desacelerou pela primeira vez em ANOS. Que alívio.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=150&h=150&fit=crop'
  }
];

const features = [
  {
    icon: Zap,
    title: 'Frequências Ativadoras',
    description: 'Som calibrado para despertar estados mentais elevados'
  },
  {
    icon: Lock,
    title: 'Conhecimento Ancestral',
    description: 'Ensinamentos de Jesus + ciência moderna em uma experiência'
  },
  {
    icon: Volume2,
    title: 'Ativação Profunda',
    description: 'Impacto emocional imediato e duradouro'
  },
  {
    icon: Sparkles,
    title: 'Transformação Real',
    description: 'Resultados mensuráveis em 7 dias de uso consistente'
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCTA = () => {
    const message = 'Quero desbloquear o Código de Deus agora!';
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="w-full bg-background text-foreground overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section 
        className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663669712065/P5kJDka2K9cT2nfK2HzBWG/hero-bg-modern-9kA24rzc9LuRirLUbYrPbU.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80 z-0" />
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8 animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-primary text-sm font-semibold">
            <Zap className="w-4 h-4" />
            TRANSFORMAÇÃO COMPROVADA EM 7 DIAS
          </div>

          {/* Título Principal */}
          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            Desperte Seu Poder
            <br />
            <span className="text-gold-primary">Espiritual Real</span>
          </h1>

          {/* Subtítulo com Copy Agressiva */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            Enquanto você dorme, <span className="text-gold-primary font-semibold">seus concorrentes</span> já estão despertando. 
            <br />
            <span className="text-gold-primary font-semibold">Não fique para trás.</span>
          </p>

          {/* Impacto */}
          <div className="bg-gold-primary/5 border border-gold-primary/20 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-white/80 text-lg">
              Áudio desenvolvido a partir de <span className="text-gold-primary font-semibold">ensinamentos ancestrais</span>, 
              <span className="text-gold-primary font-semibold"> frequências científicas</span> e 
              <span className="text-gold-primary font-semibold"> ativação mental</span> para transformar sua vida em dias, não meses.
            </p>
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={handleCTA}
              className="group px-8 py-4 bg-gold-primary text-black font-bold text-lg rounded-lg hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-gold-primary/50 transform hover:scale-105"
            >
              DESBLOQUEAR AGORA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleCTA}
              className="px-8 py-4 border-2 border-gold-primary text-gold-primary font-bold text-lg rounded-lg hover:bg-gold-primary/10 transition-all duration-300"
            >
              SABER MAIS
            </button>
          </div>

          {/* Social Proof Rápida */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((t) => (
                  <img key={t.id} src={t.image} alt={t.name} className="w-8 h-8 rounded-full border-2 border-gold-primary/50" />
                ))}
              </div>
              <span><span className="text-gold-primary font-semibold">2.847+</span> pessoas transformadas</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" />
              ))}
              <span><span className="text-gold-primary font-semibold">4.9/5</span> avaliações</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== PROVA SOCIAL - DEPOIMENTOS ===== */}
      <section className="py-20 px-4 bg-background relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black">
              Quem Já Transformou
              <br />
              <span className="text-gold-primary">Sua Vida</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Pessoas reais. Resultados reais. Transformação que você pode ver e sentir.
            </p>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-dark-card/60 border border-gold-primary/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-gold-primary/50 transition-all duration-300">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
                        ))}
                      </div>

                      {/* Feedback */}
                      <p className="text-white text-xl md:text-2xl font-light mb-8 leading-relaxed">
                        "{testimonial.feedback}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-gold-primary"
                        />
                        <div className="text-left">
                          <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-gold-primary text-sm">{testimonial.profession}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonialIndex 
                      ? 'bg-gold-primary w-8 h-2' 
                      : 'bg-white/20 w-2 h-2 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== O QUE VOCÊ RECEBE ===== */}
      <section className="py-20 px-4 bg-dark-card/30 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black">
              O Que Você
              <br />
              <span className="text-gold-primary">Realmente Recebe</span>
            </h2>
            <p className="text-white/70 text-lg">
              Não é só um áudio. É uma experiência completa de transformação.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl border border-gold-primary/20 bg-background/50 backdrop-blur-sm hover:border-gold-primary/50 hover:bg-dark-card/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
                      <p className="text-white/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== POR QUE AGORA ===== */}
      <section className="py-20 px-4 bg-background relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black">
              Por Que <span className="text-gold-primary">Agora</span>?
            </h2>
            <p className="text-white/70 text-lg">
              Não é coincidência que você está aqui. É chamado.
            </p>
          </div>

          {/* Reasons */}
          <div className="space-y-6">
            {[
              {
                title: 'Seu Tempo Está Acabando',
                desc: 'Cada dia que passa sem despertar é um dia perdido. Seus concorrentes não estão dormindo.'
              },
              {
                title: 'Conhecimento Raro & Exclusivo',
                desc: 'Poucas pessoas têm acesso a isso. Você está entre os escolhidos. Não desperdice.'
              },
              {
                title: 'Garantia de Transformação',
                desc: 'Se não sentir mudança em 7 dias, devolvemos 100% do seu dinheiro. Zero risco.'
              },
              {
                title: 'Comunidade Poderosa',
                desc: 'Junte-se a 2.847+ pessoas que já despertaram. Você não está sozinho nessa jornada.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gold-primary/20 bg-dark-card/40 hover:border-gold-primary/50 transition-all duration-300">
                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-gold-primary font-black">{idx + 1}.</span>
                  {item.title}
                </h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== URGÊNCIA & SCARCITY ===== */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-card/30 to-background relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl border-2 border-gold-primary bg-gold-primary/5 backdrop-blur-sm text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="text-gold-primary">⚠️ OFERTA LIMITADA</span>
            </h2>
            <p className="text-2xl text-white font-bold">
              Apenas <span className="text-gold-primary animate-pulse">47 acessos</span> restantes por R$ 27
            </p>
            <p className="text-white/80 text-lg">
              Depois disso, o preço sobe para <span className="text-gold-primary font-bold line-through">R$ 97</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={handleCTA}
                className="group px-8 py-4 bg-gold-primary text-black font-black text-lg rounded-lg hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-gold-primary/50 transform hover:scale-105"
              >
                GARANTIR MEU ACESSO AGORA
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ RÁPIDO ===== */}
      <section className="py-20 px-4 bg-background relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Dúvidas <span className="text-gold-primary">Frequentes</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Quanto tempo leva para sentir os resultados?',
                a: 'A maioria relata mudanças no 3º dia. Alguns no 1º dia. Garantia de 7 dias ou seu dinheiro de volta.'
              },
              {
                q: 'Funciona para qualquer pessoa?',
                a: 'Sim. Independente de idade, experiência ou crença. É ciência + espiritualidade.'
              },
              {
                q: 'Posso usar em qualquer dispositivo?',
                a: 'Sim. Celular, tablet, computador. Acesso vitalício. Baixe e ouça offline.'
              },
              {
                q: 'E se não gostar?',
                a: '7 dias de garantia incondicional. Se não sentir transformação, devolvemos tudo.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gold-primary/20 bg-dark-card/40 hover:border-gold-primary/50 transition-all duration-300">
                <h3 className="text-white font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-white/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 px-4 bg-dark-card/50 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black">
            Sua Transformação
            <br />
            <span className="text-gold-primary">Começa Agora</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Não é promessa vazia. É experiência real. Não é teoria. É prática. Não é esperança. É resultado.
          </p>

          <button
            onClick={handleCTA}
            className="group px-10 py-5 bg-gold-primary text-black font-black text-xl rounded-lg hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-gold-primary/50 transform hover:scale-105 mx-auto"
          >
            DESBLOQUEAR AGORA POR R$ 27
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-white/60 text-sm">
            ✓ Acesso vitalício • ✓ Sem contrato • ✓ Suporte 24/7 • ✓ Garantia 7 dias
          </p>
        </div>
      </section>

      {/* ===== RODAPÉ FIXO ===== */}
      <div className="fixed bottom-0 left-0 right-0 bg-dark-card/95 backdrop-blur-md border-t border-gold-primary/20 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" />
              ))}
            </div>
            <span className="text-gold-primary font-bold text-sm">4.9/5 (2.847 reviews)</span>
          </div>

          <div className="text-white font-bold text-lg">
            R$ <span className="text-gold-primary text-2xl">27</span>
          </div>

          <button
            onClick={handleCTA}
            className="px-6 py-2 bg-gold-primary text-black font-bold rounded-lg hover:bg-gold-dark transition-all duration-300 whitespace-nowrap text-sm md:text-base"
          >
            DESBLOQUEAR AGORA
          </button>
        </div>
      </div>

      {/* Espaço para rodapé fixo */}
      <div className="h-20" />
    </div>
  );
}
