import React from 'react';
import Section from './ui/Section';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    text: "Ambiente incrível, atendimento excepcional e resultado surpreendente! O Ricardo é um artista de verdade, minha tattoo ficou perfeita.",
    author: "Marina S.",
    tag: "Avaliação Google"
  },
  {
    text: "Fiz meu primeiro piercing com a Sarah e foi uma experiência incrível! Muito profissional, cuidadosa e o resultado ficou lindo.",
    author: "Juliana C.",
    tag: "Avaliação Google"
  },
  {
    text: "Estúdio de referência em SP! A vibe é sensacional, muito detalhista e atencioso. Recomendo de olhos fechados.",
    author: "Roberto L.",
    tag: "Avaliação Google"
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white">O que dizem nossos clientes</h2>
        <p className="text-zinc-500 mt-2">Confiança e satisfação comprovadas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-zinc-900/50 p-8 border border-zinc-800 relative hover:-translate-y-2 transition-transform duration-300">
            <Quote className="text-zinc-700 mb-6 w-10 h-10" />
            <p className="text-zinc-300 italic mb-6 leading-relaxed">"{review.text}"</p>
            
            <div className="flex gap-1 mb-4 text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400">
                {review.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-display text-white font-bold uppercase tracking-wider">{review.author}</h4>
                <span className="text-xs text-zinc-500">{review.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;