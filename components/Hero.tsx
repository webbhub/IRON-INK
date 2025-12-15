import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533518463841-d62e1fc91373?q=80&w=2070&auto=format&fit=crop"
          alt="Tattoo Studio Background"
          className="w-full h-full object-cover object-center brightness-[0.25] grayscale blur-sm scale-110"
        />
        {/* Additional gradient layers for depth and focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-dark/90 opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 drop-shadow-lg">
            Desde 2012 • São Paulo
          </h2>
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white uppercase leading-none mb-6 drop-shadow-2xl">
            Arte na <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Pele</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-300 text-lg md:text-xl font-light mb-10 leading-relaxed drop-shadow-md">
            Transformando ideias em arte eterna. Especialistas em realismo, blackwork e fine line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-8 py-4 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-lg shadow-brand-gold/20"
            >
              Agendar Horário
            </a>
            <a
              href="#artists"
              onClick={(e) => handleScroll(e, 'artists')}
              className="px-8 py-4 border border-zinc-500 text-white font-bold uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 backdrop-blur-sm bg-black/20"
            >
              Conhecer Artistas
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;