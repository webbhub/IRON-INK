import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl font-bold uppercase text-white tracking-widest">Iron & Ink</h2>
          <p className="text-zinc-600 text-xs mt-1">© 2024 Iron & Ink Studio. Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;