import { useState, useEffect } from 'react';
import { Star, ChevronRight, Heart, Brain, Zap, Shield, Lock, Sparkles } from 'lucide-react';

/**
 * DESIGN PHILOSOPHY: Premium Luxury Christian Prosperity
 * - Copy agressiva cristã focada em prosperidade, saúde, sabedoria, auto controle
 * - Versículo: "Transformai-vos pela renovação da vossa mente." Romanos 12:2
 * - Logo "CÓDIGO DE DEUS" no topo
 * - Ênfase em ÁUDIO PODEROSO que desbloqueia crenças limitantes
 * - Destaques em amarelo premium
 * - Cores de luxo e prosperidade (preto + amarelo)
 * - Mobile Android first
 * - Rodapé fixo amarelo premium
 * - Espaçamento compacto, sem vazios em excesso
 */

interface Testimonial {
  id: number;
  name: string;
  profession: string;
  feedback: string;
  image: string;
}

const verses = [
  '"Conforme a vossa fé, vos seja feito." — Jesus Cristo',
  '"Tudo é possível ao que crê." — Jesus Cristo',
  '"A tua fé te curou." — Jesus Cristo',
  '"O Reino de Deus está dentro de vós." — Jesus Cristo',
  '"Tudo quanto em oração pedirdes, crede que recebestes." — Jesus Cristo',
  '"Se tiverdes fé e não duvidardes..." — Jesus Cristo',
  '"Não temas; crê somente." — Jesus Cristo',
  '"Se creres, verás a glória de Deus." — Jesus Cristo',
  '"Quem crê em mim fará também as obras que eu faço." — Jesus Cristo',
  '"Transformai-vos pela renovação da vossa mente." — ROMANOS 12:2'
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Costa',
    profession: 'Empresária',
    feedback: 'Prosperidade desbloqueada. Minha mente se abriu para oportunidades que não via antes. Milagre real.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Rafael Mendes',
    profession: 'Corretor',
    feedback: 'Saúde mental restaurada. Ansiedade desapareceu. Recuperei minha fé e minha força. Transformação divina.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'Juliana Alves',
    profession: 'Psicóloga',
    feedback: 'Sabedoria ativada. Meus pacientes veem mudanças profundas. Isso é espiritual de verdade.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 4,
    name: 'Eduardo Lima',
    profession: 'Empresário',
    feedback: 'Auto controle total. Vícios desapareceram. Meu negócio triplicou em 3 meses. Obra de Deus.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    id: 5,
    name: 'Camila Rocha',
    profession: 'Pastora',
    feedback: 'Conexão espiritual profunda. Bloqueios inconscientes desapareceram. Sinto a presença de Deus.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 6,
    name: 'Felipe Martins',
    profession: 'Empresário',
    feedback: 'Riqueza mental e material. Padrões limitantes foram quebrados. Minha vida é outra.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop'
  },
  {
    id: 7,
    name: 'Aline Ferreira',
    profession: 'Missionária',
    feedback: 'Consciência elevada. Sinto a presença do Espírito Santo. Meu chamado se ativou. Milagre.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=150&h=150&fit=crop'
  }
];

const features = [
  {
    icon: Heart,
    title: 'Saúde Restaurada',
    description: 'Cura emocional, mental e espiritual. Seu corpo responde à frequência divina.'
  },
  {
    icon: Brain,
    title: 'Sabedoria Ativada',
    description: 'Desbloqueie padrões inconscientes. Acesse a inteligência divina que já existe em você.'
  },
  {
    icon: Zap,
    title: 'Prosperidade Desbloqueada',
    description: 'Crenças limitantes desaparecem. Riqueza e abundância fluem naturalmente.'
  },
  {
    icon: Shield,
    title: 'Auto Controle Total',
    description: 'Domine seus impulsos, emoções e desejos. Força espiritual inabalável.'
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % verses.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleCTA = () => {
    window.open('https://pay.kiwify.com.br/EO5Sc34', '_blank');
  };

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section 
        className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 md:py-12"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663669712065/P5kJDka2K9cT2nfK2HzBWG/hero-bg-modern-9kA24rzc9LuRirLUbYrPbU.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay Premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85 z-0" />
        


        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4 md:space-y-6">
          {/* Versículo Bíblico - Carrossel */}
          <div className="inline-flex items-center justify-center px-4 md:px-6 py-3 rounded-full bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 text-xs md:text-sm font-bold tracking-wider max-w-3xl mx-auto h-16 md:h-20 overflow-hidden">
            <div 
              className="transition-opacity duration-700 ease-in-out text-center"
              style={{
                opacity: 1,
                animation: `fadeInOut 7s ease-in-out infinite`,
                whiteSpace: 'normal',
                lineHeight: '1.4'
              }}
            >
              {verses[currentVerseIndex]}
            </div>
            <style>{`
              @keyframes fadeInOut {
                0% { opacity: 0; }
                8% { opacity: 1; }
                92% { opacity: 1; }
                100% { opacity: 0; }
              }
            `}</style>
          </div>

          {/* Título Principal - MUDE SUA VIDA EM 7 DIAS */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            MUDE SUA VIDA
            <br />
            <span className="text-yellow-400">EM 7 DIAS</span>
          </h1>

          {/* Subtítulo com Copy Agressiva Cristã */}
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-light">
            <span className="text-yellow-300 font-bold">Áudio Poderoso</span> que ativa sua consciência, desbloqueia <span className="text-yellow-300 font-bold">crenças limitantes</span> e liberta você de <span className="text-yellow-300 font-bold">padrões inconscientes</span>.
          </p>

          {/* Social Proof Rápida - Vidas Transformadas */}
          <div className="flex flex-col gap-3 items-center pt-2">
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((t) => (
                  <img key={t.id} src={t.image} alt={t.name} className="w-8 h-8 rounded-full border-2 border-yellow-400/50" />
                ))}
              </div>
              <span><span className="text-yellow-300 font-bold">2.847+</span> vidas transformadas</span>
            </div>
          </div>

          {/* CTA Principal - Texto Centralizado */}
          <div className="flex flex-col gap-3 justify-center pt-2">
            <button
              onClick={handleCTA}
              className="group w-full px-6 md:px-8 py-4 md:py-5 bg-yellow-400 text-black font-black text-base md:text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 active:scale-95"
            >
              <Lock className="w-5 h-5" />
              DESBLOQUEAR AGORA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Rating - Onde era "Saber Mais" */}
          <div className="flex items-center justify-center gap-2 text-sm md:text-base">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span><span className="text-yellow-300 font-bold">4.9/5</span> avaliações verificadas</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== PROVA SOCIAL - DEPOIMENTOS ===== */}
      <section className="py-8 md:py-12 px-4 bg-black relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-6 md:mb-10 space-y-2 md:space-y-3">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Quem Já
              <br />
              <span className="text-yellow-400">TRANSFORMOU SUA VIDA</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Vidas reais. Milagres reais. Transformação que você pode sentir.
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
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div className="bg-gradient-to-br from-yellow-400/5 to-yellow-400/0 border border-yellow-400/25 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4 md:mb-5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Feedback */}
                      <p className="text-white text-lg md:text-xl font-light mb-5 md:mb-6 leading-relaxed">
                        "{testimonial.feedback}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                        />
                        <div className="text-left">
                          <h3 className="text-white font-bold text-base">{testimonial.name}</h3>
                          <p className="text-yellow-300 text-sm">{testimonial.profession}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== O QUE VOCÊ VAI RECEBER ===== */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-b from-black to-yellow-400/5 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-6 md:mb-10 space-y-3 md:space-y-4">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              O Que Você vai
              <br />
              <span className="text-yellow-400">RECEBER</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Isso não é apenas um áudio.
              <br />
              <br />
              É uma <span className="text-yellow-300 font-bold">ativação espiritual poderosa</span> criada para quebrar padrões negativos, fortalecer sua mente e despertar uma nova forma de pensar, sentir e agir.
              <br />
              <br />
              Baseado em <span className="text-yellow-300 font-bold">princípios bíblicos</span> sobre renovação da mente, fé e transformação interior.
              <br />
              <br />
              Enquanto a maioria continua presa aos mesmos pensamentos…
              <br />
              <span className="text-yellow-300 font-bold">você começa a reprogramar sua mente</span> com palavras de poder, fé e direção.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-5 md:p-6 rounded-2xl border border-yellow-400/25 bg-black/50 backdrop-blur-sm hover:border-yellow-400/50 hover:bg-yellow-400/5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base md:text-lg mb-1">{feature.title}</h3>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== POR QUE AGORA ===== */}
      <section className="py-8 md:py-12 px-4 bg-black relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-10 space-y-2 md:space-y-3">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Por Que <span className="text-yellow-400">AGORA</span>?
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Deus está chamando você. Não ignore este sinal.
            </p>
          </div>

          {/* Reasons */}
          <div className="space-y-3 md:space-y-4">
            {[
              {
                title: 'Seu Tempo É Limitado',
                desc: 'Cada dia sem despertar é um dia perdido. Seus bloqueios inconscientes estão te roubando prosperidade, saúde e paz.'
              },
              {
                title: 'Conhecimento Raro & Divino',
                desc: 'Poucas pessoas têm acesso a isso. Você foi escolhido. Não desperdice este chamado.'
              },
              {
                title: 'Garantia de Transformação',
                desc: 'Se não sentir mudança em 7 dias, devolvemos 100% do seu dinheiro. Zero risco. Você só ganha.'
              },
              {
                title: 'Comunidade Cristã Poderosa',
                desc: 'Junte-se a 2.847+ pessoas que já despertaram. Você não está sozinho nessa jornada espiritual.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 md:p-5 rounded-xl border border-yellow-400/25 bg-yellow-400/5 hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-white font-bold text-base md:text-lg mb-1 flex items-center gap-2">
                  <span className="text-yellow-400 font-black text-lg">{idx + 1}.</span>
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== URGÊNCIA & SCARCITY ===== */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-b from-black to-yellow-400/10 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl border-2 border-yellow-400 bg-yellow-400/10 backdrop-blur-sm text-center space-y-3 md:space-y-5">
            <h2 className="text-3xl md:text-5xl font-black">
              <span className="text-yellow-300">⚠️ OFERTA LIMITADA</span>
            </h2>
            <p className="text-2xl md:text-3xl text-white font-bold">
              Apenas <span className="text-yellow-300 animate-pulse font-black">47 ACESSOS</span> restantes
            </p>
            <p className="text-white/80 text-base md:text-lg font-semibold">
              Por apenas <span className="text-yellow-300 font-black text-xl md:text-2xl">R$ 27</span>
            </p>
            <p className="text-white/70 text-sm md:text-base">
              Depois disso, o preço sobe para <span className="text-yellow-300 font-bold line-through">R$ 97</span>
            </p>
            <div className="flex flex-col gap-3 justify-center pt-2">
              <button
                onClick={handleCTA}
                className="group w-full px-6 md:px-8 py-4 md:py-5 bg-yellow-400 text-black font-black text-base md:text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 active:scale-95"
              >
                <Lock className="w-5 h-5" />
                GARANTIR MEU ACESSO AGORA
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ RÁPIDO ===== */}
      <section className="py-8 md:py-12 px-4 bg-black relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-6 md:mb-10 leading-tight">
            Dúvidas <span className="text-yellow-400">Frequentes</span>
          </h2>

          <div className="space-y-3 md:space-y-4">
            {[
              {
                q: 'Quanto tempo leva para sentir os resultados?',
                a: 'A maioria relata transformações no 3º dia. Alguns no 1º dia. Garantia de 7 dias ou seu dinheiro de volta.'
              },
              {
                q: 'Funciona para qualquer pessoa?',
                a: 'Sim. Independente de idade, fé ou experiência. É ciência + espiritualidade + poder divino.'
              },
              {
                q: 'Posso usar em qualquer dispositivo?',
                a: 'Sim. Celular, tablet, computador. Acesso vitalício. Baixe e ouça offline quantas vezes quiser.'
              },
              {
                q: 'E se não gostar?',
                a: '7 dias de garantia incondicional. Se não sentir transformação, devolvemos tudo sem perguntas.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 md:p-5 rounded-xl border border-yellow-400/25 bg-yellow-400/5 hover:border-yellow-400/50 transition-all duration-300">
                <h3 className="text-white font-bold text-base md:text-lg mb-2">{item.q}</h3>
                <p className="text-white/70 text-sm md:text-base">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-b from-black to-yellow-400/5 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-6">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Sua Transformação
            <br />
            <span className="text-yellow-400">COMEÇA AGORA</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Não é promessa vazia. É <span className="text-yellow-300 font-bold">milagre real</span>. Não é teoria. É <span className="text-yellow-300 font-bold">prática comprovada</span>. Não é esperança. É <span className="text-yellow-300 font-bold">resultado garantido</span>.
          </p>

          <button
            onClick={handleCTA}
            className="group w-full md:w-auto px-8 md:px-10 py-5 md:py-6 bg-yellow-400 text-black font-black text-base md:text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 active:scale-95"
          >
            <Lock className="w-5 h-5" />
            DESBLOQUEAR AGORA POR R$ 27
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-white/60 text-xs md:text-sm">
            ✓ Acesso vitalício • ✓ Sem contrato • ✓ Suporte 24/7 • ✓ Garantia 7 dias • ✓ Dinheiro de volta
          </p>
        </div>
      </section>

      {/* ===== RODAPÉ FIXO AMARELO PREMIUM ===== */}
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-400 text-black z-50 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-black text-black" />
              ))}
            </div>
            <span className="font-black text-xs md:text-sm">4.9/5 (2.847 reviews)</span>
          </div>

          <div className="text-black font-black text-base md:text-lg">
            R$ <span className="text-2xl md:text-3xl">27</span>
          </div>

          <button
            onClick={handleCTA}
            className="px-5 md:px-7 py-2 md:py-3 bg-black text-yellow-400 font-black rounded-lg hover:bg-black/80 transition-all duration-300 whitespace-nowrap text-xs md:text-sm active:scale-95 flex items-center gap-1"
          >
            <Lock className="w-3 h-3 md:w-4 md:h-4" />
            DESBLOQUEAR AGORA
          </button>
        </div>
      </div>

      {/* Espaço para rodapé fixo */}
      <div className="h-16 md:h-20" />
    </div>
  );
}
