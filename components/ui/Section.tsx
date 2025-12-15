import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", fullWidth = false }) => {
  return (
    <section id={id} className={`py-20 md:py-32 overflow-hidden ${className}`}>
      <div className={fullWidth ? "w-full" : "container mx-auto px-4 sm:px-6 lg:px-8"}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;