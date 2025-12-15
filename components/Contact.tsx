import React from 'react';
import Section from './ui/Section';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pb-0" fullWidth>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <div>
            <h3 className="text-brand-gold font-bold tracking-widest uppercase mb-2">Contato</h3>
            <h2 className="font-display text-4xl font-bold uppercase text-white mb-8">
              Pronto para sua <br /> Próxima Tatuagem?
            </h2>
            <p className="text-zinc-400 mb-8">
              Preencha o formulário abaixo para solicitar um orçamento ou tirar dúvidas. Nossa equipe entrará em contato o mais breve possível.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Nome</label>
                  <input type="text" id="name" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Telefone</label>
                  <input type="tel" id="phone" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email</label>
                <input type="email" id="email" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Mensagem</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-zinc-700 py-2 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Conte sua ideia..."></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <MapPin className="text-brand-gold w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-display text-white font-bold uppercase mb-2">Localização</h4>
                  <p className="text-zinc-400 text-sm">Rua Augusta, 1234 - Consolação<br />São Paulo - SP, 01304-001</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-brand-gold w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-display text-white font-bold uppercase mb-2">Contato</h4>
                  <p className="text-zinc-400 text-sm">(11) 99999-9999<br />contato@ironink.com.br</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-brand-gold w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-display text-white font-bold uppercase mb-2">Horários</h4>
                  <p className="text-zinc-400 text-sm">Seg - Sex: 10h às 20h<br />Sáb: 10h às 18h</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-brand-gold w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-display text-white font-bold uppercase mb-2">Orçamentos</h4>
                  <p className="text-zinc-400 text-sm">Envie sua referência e tamanho aproximado.</p>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="w-full h-80 bg-zinc-800 border border-zinc-700 relative overflow-hidden group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.357639556857!2d-46.6623862!3d-23.5555938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582c61e0e84b%3A0xf6508933557c603!2sR.%20Augusta%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;