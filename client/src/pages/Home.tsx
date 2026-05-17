import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

/**
 * DESIGN PHILOSOPHY: Dark Minimalism Espiritual
 * - Preto profundo + dourado queimado + azul espiritual
 * - Tipografia monumental (Poppins) para impacto
 * - Muito espaço negativo, hierarquia visual extrema
 * - Animações suaves, fade-in ao scroll
 * - Foco total em conversão e urgência emocional
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
    feedback: 'Eu não consigo explicar… parece que minha mente destravou depois do terceiro dia.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Rafael Mendes',
    profession: 'Corretor',
    feedback: 'Passei anos tentando recuperar minha fé. Esse áudio mexeu profundamente comigo.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'Juliana Alves',
    profession: 'Psicóloga',
    feedback: 'A sensação é de paz mental misturada com clareza emocional.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 4,
    name: 'Eduardo Lima',
    profession: 'Personal Trainer',
    feedback: 'Comecei ouvindo por curiosidade. Hoje virou parte da minha rotina.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    id: 5,
    name: 'Camila Rocha',
    profession: 'Designer',
    feedback: 'É diferente de tudo que já ouvi. Parece algo muito mais profundo.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babfca?w=150&h=150&fit=crop'
  },
  {
    id: 6,
    name: 'Felipe Martins',
    profession: 'Empresário',
    feedback: 'Me senti mais focado, leve e espiritualmente fortalecido.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop'
  },
  {
    id: 7,
    name: 'Aline Ferreira',
    profession: 'Estudante',
    feedback: 'Foi como se minha mente desacelerasse pela primeira vez em anos.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=150&h=150&fit=crop'
  }
];

const features = [
  {
    title: 'Frequências Estratégicas',
    description: 'Som cientificamente desenvolvido para ativar estados mentais elevados'
  },
  {
    title: 'Reflexões Inspiradas',
    description: 'Ensinamentos de Jesus adaptados para a mentalidade moderna'
  },
  {
    title: 'Ativação Emocional',
    description: 'Despertar profundo de sentimentos e conexão interior'
  },
  {
    title: 'Fortalecimento Espiritual',
    description: 'Reconexão com sua essência e propósito de vida'
  },
  {
    title: 'Mentalidade de Fé',
    description: 'Reprogramação de crenças limitantes em 7 dias'
  },
  {
    title: 'Escuta Profunda',
    description: 'Áudio desenvolvido para meditação e transformação interior'
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCTA = () => {
    const message = 'Quero desbloquear o Código de Deus agora!';
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="w-full bg-background text-foreground">
      {/* ===== HERO SECTION ===== */}
      <section 
        className="section-hero relative"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663669712065/P5kJDka2K9cT2nfK2HzBWG/hero-spiritual-light-asLfJ6wTxixPDLKrLVJQtz.webp')`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Título Principal */}
          <h1 className="display-xl text-white mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Mude Sua Vida em 7 Dias
          </h1>

          {/* Subtítulo */}
          <p className="display-lg text-white/90 mb-8 font-light leading-relaxed" style={{ animationDelay: '0.3s' }}>
            O áudio espiritual que combina ensinamentos antigos, fé e frequências estratégicas para despertar sua mente, fortalecer sua espiritualidade e transformar sua energia interior.
          </p>

          {/* Texto de Impacto */}
          <div className="mb-12 space-y-4" style={{ animationDelay: '0.5s' }}>
            <p className="text-xl text-white/80 font-light">
              <span className="text-gold-primary font-semibold">Existem conhecimentos que atravessaram séculos…</span>
            </p>
            <p className="text-lg text-white/70">
              Mas poucas pessoas aprenderam a usar isso na vida moderna.
            </p>
          </div>

          {/* CTA Principal */}
          <button
            onClick={handleCTA}
            className="btn-primary text-lg mb-8 glow-effect"
            style={{ animationDelay: '0.7s' }}
          >
            DESBLOQUEAR AGORA
          </button>

          {/* Indicador de Scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== PROVA SOCIAL - DEPOIMENTOS ===== */}
      <section className="py-20 px-4 bg-gradient-to-b from-background via-dark-card/20 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="display-lg text-center mb-4 text-white">
            Quem Já Transformou Sua Vida
          </h2>
          <p className="text-center text-white/70 mb-16 text-lg">
            Veja o que pessoas reais estão experimentando
          </p>

          {/* Slider de Depoimentos */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="testimonial-card max-w-2xl mx-auto">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-gold-primary"
                        />
                        <div className="text-left">
                          <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                          <p className="text-gold-primary text-sm">{testimonial.profession}</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-lg italic">"{testimonial.feedback}"</p>
                      <div className="flex gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex ? 'bg-gold-primary w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== O QUE EXISTE NESSE ÁUDIO ===== */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="display-lg text-center mb-4 text-white">
            O Que Existe Nesse Áudio?
          </h2>
          <p className="text-center text-white/70 mb-16 text-lg">
            Uma experiência completa de transformação espiritual
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-gold-primary/20 bg-dark-card/40 backdrop-blur-sm hover:border-gold-primary/50 hover:bg-dark-card/60 transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-primary/20 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-gold-primary/40" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POR QUE ISSO É DIFERENTE ===== */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-dark-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="display-lg text-center mb-8 text-white">
            Por Que Isso É Diferente?
          </h2>

          <div className="space-y-6">
            <div className="p-8 border-l-4 border-gold-primary bg-dark-card/40 rounded-r-xl">
              <h3 className="text-gold-primary font-semibold text-lg mb-2">Não é apenas motivação</h3>
              <p className="text-white/80">É uma experiência criada para impactar mente, emoção e espiritualidade simultaneamente.</p>
            </div>

            <div className="p-8 border-l-4 border-gold-primary bg-dark-card/40 rounded-r-xl">
              <h3 className="text-gold-primary font-semibold text-lg mb-2">Não é um áudio comum</h3>
              <p className="text-white/80">Desenvolvido através de estudos profundos sobre ensinamentos de Jesus, fé e frequências estratégicas.</p>
            </div>

            <div className="p-8 border-l-4 border-gold-primary bg-dark-card/40 rounded-r-xl">
              <h3 className="text-gold-primary font-semibold text-lg mb-2">Não é só música relaxante</h3>
              <p className="text-white/80">É uma ferramenta de ativação mental e espiritual baseada em conhecimentos antigos adaptados para 2026.</p>
            </div>

            <div className="p-8 border-l-4 border-gold-primary bg-dark-card/40 rounded-r-xl">
              <h3 className="text-gold-primary font-semibold text-lg mb-2">Não é conteúdo superficial</h3>
              <p className="text-white/80">É profundidade. É transformação. É a combinação perfeita entre fé, frequência, mentalidade e ativação espiritual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIMENTE POR 7 DIAS ===== */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display-lg text-white mb-6">
            Você Não Precisa Acreditar Agora
          </h2>
          <p className="text-2xl text-white/80 mb-8 font-light">
            Apenas ouvir.
          </p>

          <div className="bg-dark-card/50 border border-gold-primary/30 rounded-2xl p-12 backdrop-blur-sm">
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Em apenas alguns minutos por dia, você pode começar a sentir uma nova clareza mental, uma nova força espiritual e uma nova conexão interior.
            </p>
            <p className="text-white/70 text-base">
              Não é promessa. É experiência. Não é teoria. É prática. Não é esperança. É resultado.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BLOCO FINAL DE CONVERSÃO ===== */}
      <section className="py-20 px-4 bg-gradient-to-b from-background via-dark-card/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display-lg text-white mb-8">
            Talvez Isso Tenha Chegado Até Você Por Um Motivo
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-xl text-white/80">
              Existem momentos em nossas vidas quando algo nos chama. Uma voz interior. Uma intuição. Uma sensação de que precisa mudar.
            </p>
            <p className="text-xl text-white/80">
              Esse é um desses momentos.
            </p>
            <p className="text-lg text-white/70">
              O Código de Deus não é apenas um áudio. É um convite para despertar. Para transformar. Para se reconectar com algo muito maior do que você mesmo.
            </p>
          </div>

          <div className="mb-12 p-8 bg-gold-primary/10 border border-gold-primary/30 rounded-xl">
            <p className="text-gold-primary font-semibold text-lg mb-2">Exclusividade. Urgência. Transformação.</p>
            <p className="text-white/80">
              Este é um conhecimento raro. Poucas pessoas têm acesso. E você está aqui, agora, com essa oportunidade única.
            </p>
          </div>

          {/* CTA Final */}
          <button
            onClick={handleCTA}
            className="btn-primary text-xl glow-effect"
          >
            DESBLOQUEAR AGORA
          </button>
        </div>
      </section>

      {/* ===== RODAPÉ FIXO ===== */}
      <div className="fixed bottom-0 left-0 right-0 bg-dark-card/95 backdrop-blur-md border-t border-gold-primary/20 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-primary text-gold-primary" />
              ))}
            </div>
            <span className="text-gold-primary font-semibold">NOTA 4,5</span>
          </div>

          <div className="text-white font-semibold text-lg">
            R$ 27,00
          </div>

          <button
            onClick={handleCTA}
            className="px-6 py-2 bg-gold-primary text-black font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 whitespace-nowrap"
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
