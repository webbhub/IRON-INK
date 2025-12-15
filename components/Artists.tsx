import React, { useState } from 'react';
import Section from './ui/Section';
import { Instagram, Camera, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Portfolio from './Portfolio';

const artists = [
  {
    name: 'Ricardo "Ink"',
    specialty: 'Realismo Preto e Cinza',
    image: 'https://i.postimg.cc/VvWtX38L/ricardoink.jpg',
  },
  {
    name: 'Amanda Bell',
    specialty: 'Fine Line & Botânico',
    image: 'https://i.postimg.cc/dVxyR2zn/amanda-fabris.jpg',
  },
  {
    name: 'Wellington P.',
    specialty: 'Neotraditional',
    image: 'https://i.postimg.cc/brgGZkx0/wellington.jpg',
  },
  {
    name: 'Sarah Viper',
    specialty: 'Body Piercer',
    image: 'https://i.postimg.cc/SspjVDVq/sarah-viper.jpg',
  }
];

const Artists: React.FC = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <Section id="artists" className="bg-zinc-900 border-y border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
           <h3 className="text-brand-gold font-bold tracking-widest uppercase mb-2">Equipe</h3>
           <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white">Nossos Artistas</h2>
        </div>
        <p className="max-w-md text-zinc-400 text-right md:text-right text-sm">
          Profissionais dedicados com anos de experiência e estilos únicos para transformar sua ideia em realidade.
        </p>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {artists.map((artist, idx) => (
          <div key={idx} className="group bg-black border border-zinc-800 p-4 hover:border-brand-gold transition-colors duration-300">
            <div className="overflow-hidden mb-4 relative">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full aspect-[3/4] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 <button className="p-3 bg-brand-gold text-black rounded-full hover:bg-white transition-colors">
                   <Instagram size={20} />
                 </button>
                 <button className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors">
                   <Camera size={20} />
                 </button>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-display text-xl font-bold uppercase text-white mb-1">{artist.name}</h3>
              <p className="text-xs font-bold tracking-wider text-zinc-500 uppercase group-hover:text-brand-gold transition-colors">{artist.specialty}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Portfolio Toggle Section */}
      <div className="mt-12 text-center">
        <button 
          onClick={() => setShowPortfolio(!showPortfolio)}
          className={`group px-8 py-3 border uppercase tracking-widest text-sm transition-all flex items-center gap-2 mx-auto
            ${showPortfolio 
              ? 'bg-brand-gold border-brand-gold text-black hover:bg-white hover:border-white' 
              : 'border-zinc-700 text-zinc-300 hover:bg-white hover:text-black'
            }`}
        >
          {showPortfolio ? 'Fechar Portfolio' : 'Ver Portfolio Completo'}
          {showPortfolio ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Collapsible Portfolio Area */}
      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <Portfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Artists;