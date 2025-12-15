import React, { useState } from 'react';
import Section from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Coffee, Wifi } from 'lucide-react';

const studioImages = [
  "https://i.postimg.cc/JhFtVppM/studio-interior-1.png",
  "https://i.postimg.cc/mDxRyJdM/studio-interior-2.jpg",
  "https://i.postimg.cc/5N9Jgwm3/studio-interior-3.jpg",
];

const Studio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % studioImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + studioImages.length) % studioImages.length);
  };

  return (
    <Section id="studio" className="bg-zinc-900 border-t border-zinc-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[2px] w-12 bg-brand-gold"></div>
             <h3 className="text-brand-gold font-bold tracking-widest uppercase text-sm">Estrutura & Vibe</h3>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 uppercase">
            O Estúdio
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
            Localizado no coração pulsante de São Paulo, o <strong className="text-white">Iron & Ink</strong> foi projetado para transcender a experiência de um estúdio convencional. 
            Nossa arquitetura industrial mescla concreto aparente, iluminação focal e arte urbana, criando uma atmosfera imersiva e inspiradora.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/40 p-4 border border-zinc-800 rounded-sm hover:border-brand-gold/50 transition-colors">
              <Coffee className="text-brand-gold mb-2 w-6 h-6" />
              <h4 className="text-white font-bold uppercase text-sm mb-1">Lounge Bar</h4>
              <p className="text-zinc-500 text-xs">Cafés especiais e bebidas para relaxar antes ou depois da sessão.</p>
            </div>
            <div className="bg-black/40 p-4 border border-zinc-800 rounded-sm hover:border-brand-gold/50 transition-colors">
              <Wifi className="text-brand-gold mb-2 w-6 h-6" />
              <h4 className="text-white font-bold uppercase text-sm mb-1">Conforto Total</h4>
              <p className="text-zinc-500 text-xs">Wi-Fi de alta velocidade, som ambiente curado e climatização.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 text-sm italic border-l-2 border-zinc-700 pl-4">
            <MapPin size={16} />
            <span>Projetado para ser seu refúgio urbano de arte.</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="order-1 lg:order-2 relative group">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border-2 border-zinc-800 shadow-2xl bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={studioImages[currentIndex]}
                alt={`Studio Interior ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

            {/* Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
              <button 
                onClick={prevSlide}
                className="p-3 bg-black/80 text-white border border-zinc-700 hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 bg-black/80 text-white border border-zinc-700 hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Indicators */}
             <div className="absolute bottom-6 left-6 flex gap-2 z-10">
              {studioImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-brand-gold' : 'w-4 bg-zinc-600'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Decorative industrial elements behind */}
          <div className="absolute -z-10 -top-6 -right-6 w-full h-full border border-zinc-800 rounded-sm hidden lg:block"></div>
        </div>
      </div>
    </Section>
  );
};

export default Studio;