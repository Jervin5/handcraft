import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=2000"
          alt="Indian Silk Thread Jewelry"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-cream/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-xs md:text-sm uppercase tracking-[0.5em] text-royal-red mb-4 font-bold"
        >
          Traditional Craftsmanship
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-9xl font-serif font-light mb-8 leading-tight text-royal-red"
        >
          Vibrant <br />
          <span className="italic text-gold">Silk Traditions</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#collections"
            className="inline-block px-10 py-4 bg-royal-red text-cream text-xs uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 shadow-xl"
          >
            Shop the Collection
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
      >
        <div className="w-[1px] h-12 bg-gold/30 mx-auto" />
      </motion.div>
    </section>
  );
};
