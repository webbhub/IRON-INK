import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const portfolioItems = [
  { src: "https://i.postimg.cc/4xDzkvBR/tatuagem-colorida.jpg", category: "Colorido" },
  { src: "https://i.postimg.cc/CLJPg2qL/portfolio-blackwork.jpg", category: "Blackwork" },
  { src: "https://i.postimg.cc/9Qvs6TG0/realismo.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/wBrndGnz/portfolio-retrato.webp", category: "Retrato" },
  { src: "https://i.postimg.cc/hjPvHfWR/portfolio-neotradicional.jpg", category: "Neotraditional" },
  { src: "https://i.postimg.cc/xjth0BKX/portfolio-fineline.webp", category: "Fine Line" },
  { src: "https://i.postimg.cc/DfN0MvCy/portfolio-oriental.webp", category: "Oriental" },
  { src: "https://i.postimg.cc/7Pstv0k9/portfolio-oldschool.jpg", category: "Old School" }
];

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full pt-12 pb-8 border-t border-zinc-800 mt-12 bg-zinc-950/50">
      <div className="flex justify-between items-end mb-8 px-4">
        <div>
           <h3 className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2">Trabalhos Recentes</h3>
           <p className="text-zinc-500 text-sm">Uma seleção dos nossos melhores projetos.</p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 px-4">
        {portfolioItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm border border-zinc-800"
            onClick={() => setSelectedImage(item.src)}
          >
            <img 
              src={item.src} 
              alt={item.category} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            
            {/* Overlay Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
               <Maximize2 className="text-brand-gold mb-2" size={24} />
               <span className="text-white font-display uppercase tracking-widest text-sm font-bold border-b-2 border-brand-gold pb-1">
                 {item.category}
               </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal for Fullscreen Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-zinc-400 hover:text-brand-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen Tattoo" 
            className="max-h-[90vh] max-w-full rounded-sm shadow-2xl border border-zinc-800"
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;