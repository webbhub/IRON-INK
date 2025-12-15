import React from 'react';
import Section from './ui/Section';

const services = [
  {
    title: 'Realismo',
    description: 'Reprodução fiel de fotografias com técnicas avançadas de sombra e luz.',
    image: 'https://i.postimg.cc/9Qvs6TG0/realismo.jpg'
  },
  {
    title: 'Fine Line',
    description: 'Traços finos e delicados para tatuagens minimalistas e elegantes.',
    image: 'https://i.postimg.cc/xjth0BKX/portfolio-fineline.webp'
  },
  {
    title: 'Old School',
    description: 'Estilo tradicional com traços grossos e paleta de cores limitada.',
    image: 'https://i.postimg.cc/7Pstv0k9/portfolio-oldschool.jpg'
  },
  {
    title: 'Body Piercing',
    description: 'Aplicação profissional de joias de titânio e ouro com total segurança.',
    image: 'https://i.postimg.cc/BnxCv1r4/bodypiercing.jpg'
  }
];

const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold uppercase mb-4">Especialidades</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="group relative h-96 overflow-hidden border border-zinc-800 bg-zinc-900">
            {/* Background Image */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2 border-l-4 border-brand-gold pl-3">
                {service.title}
              </h3>
              <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;