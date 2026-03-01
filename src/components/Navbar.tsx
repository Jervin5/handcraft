import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Bangles', href: '#bangles' },
    { name: 'Earrings', href: '#earrings' },
    { name: 'Chains', href: '#chains' },
    { name: 'Our Process', href: '#process' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 hidden md:flex gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex-shrink-0 text-center">
          <a href="#" className="font-serif text-2xl md:text-4xl tracking-[0.2em] uppercase text-royal-red font-bold">
            SAKSAA'S
          </a>
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-gold -mt-1 font-medium">
            The Art of HandCraft
          </p>
        </div>

        <div className="flex-1 hidden md:flex justify-end gap-8">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream border-b border-gold/20 p-8 md:hidden flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
