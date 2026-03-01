import React from 'react';
import { motion } from 'motion/react';

export const AboutProcess = () => {
  return (
    <section id="process" className="py-32 bg-stone-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] relative z-10">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000"
              alt="Jewelry Making Process"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-full h-full border border-gold/20 -z-0 hidden md:block" />
          <div className="absolute -bottom-6 -right-6 bg-cream p-8 shadow-xl z-20 max-w-xs hidden md:block">
            <p className="font-serif italic text-lg leading-relaxed">
              "Every piece tells a story of patience, precision, and the pursuit of perfection."
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gold mt-4">— Master Artisan</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 block">
            The Art of Threading
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-royal-red">
            Hand-Wrapped <br />with Love & Precision
          </h2>
          <div className="space-y-6 text-dark-grey/80 leading-relaxed font-light">
            <p>
              At SAKSAA'S, we redefine traditional Indian jewelry. Our signature silk thread bangles start with a lightweight, durable base, which is then painstakingly wrapped in premium silk threads.
            </p>
            <p>
              Each piece is adorned with intricate stone work, kundan, and golden beads, creating a vibrant explosion of color that perfectly complements ethnic wear. It's not just jewelry; it's a piece of Indian heritage reimagined for the modern woman.
            </p>
            <p>
              Our artisans spend hours on a single set, ensuring every thread is perfectly aligned and every stone is securely placed. The result is a lightweight, comfortable, and stunningly beautiful accessory.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gold/20 pt-8">
            <div>
              <p className="text-2xl font-serif text-royal-red">Silk</p>
              <p className="text-[8px] uppercase tracking-widest text-gold">Premium Thread</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-royal-red">Vibrant</p>
              <p className="text-[8px] uppercase tracking-widest text-gold">Color Palette</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-royal-red">Light</p>
              <p className="text-[8px] uppercase tracking-widest text-gold">Weight Design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
