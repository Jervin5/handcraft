import React from 'react';
import { motion } from 'motion/react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  reversed?: boolean;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  id,
  title,
  subtitle,
  products,
  reversed = false,
}) => {
  return (
    <section id={id} className="py-24 px-6 max-w-7xl mx-auto">
      <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-baseline justify-between mb-16 gap-4`}>
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold block mb-2">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif">{title}</h2>
        </div>
        <div className="h-[1px] flex-grow bg-gold/20 mx-8 hidden md:block" />
        {/* <a href="#" className="text-[10px] uppercase tracking-[0.2em] border-b border-gold/40 pb-1 hover:border-gold transition-colors">
          View All
        </a> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-6 border border-transparent group-hover:border-gold/20 transition-all duration-500">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-1">{product.name}</h3>
              <p className="text-xs text-gold tracking-widest">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
