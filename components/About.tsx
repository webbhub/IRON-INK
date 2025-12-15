import React from 'react';
import Section from './ui/Section';
import { Check, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="about" className="bg-brand-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <div className="relative group">
           {/* Subtle glow effect behind the image */}
           <div className="absolute -inset-1 bg-gradient-to-tr from-brand-gold/20 to-zinc-800/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-700"></div>
            <img
              src="https://i.postimg.cc/JhFtVppM/studio-interior-1.png"
              alt="Iron & Ink Studio Interior"
              className="relative w-full h-[400px] lg:h-[500px] object-cover rounded-xl shadow-2xl grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
            />
        </div>

        {/* Content Side */}
        <div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
            Sobre Nós
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
            Muito além de um estúdio, o <span className="text-white font-medium">Iron & Ink</span> é referência em arte na pele. 
            Fundado em 2012, unimos tradição, segurança e inovação em um ambiente industrial e acolhedor. 
            Com mais de uma década de história, oferecemos criações autorais e uma experiência única, onde cada tatuagem é tratada como uma obra de arte eterna.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Mais de 10 anos de tradição",
              "Reconhecimento internacional",
              "Criações autorais exclusivas",
              "Ambiente seguro e acolhedor",
              "Autorizado pela ANVISA"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-zinc-300">
                <Check className="text-brand-gold w-5 h-5 shrink-0" />
                <span className="font-light tracking-wide text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#studio"
            onClick={(e) => handleScroll(e, 'studio')}
            className="inline-flex items-center gap-3 px-8 py-3 border border-zinc-700 text-white font-display font-bold uppercase tracking-widest text-xs md:text-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-300 group rounded-sm"
          >
            Conheça o estúdio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default About;