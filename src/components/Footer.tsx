import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-cream border-t border-gold/10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="#" className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase block mb-4 text-royal-red font-bold">
              SAKSAA'S
            </a>
            <p className="text-xs text-dark-grey/60 leading-relaxed max-w-xs">
              Celebrating the vibrant spirit of India through handcrafted silk thread jewelry. Each creation is a labor of love and tradition.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Contact Us to Buy</h4>
            <ul className="space-y-4 text-xs text-dark-grey/60">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold" />
                <span>+91 123456789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold" />
                <span>contact@saksaas.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span>123, Silk Thread Lane, <br />Bangle Bazaar, banglore, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Collections</h4>
            <ul className="space-y-3 text-xs text-dark-grey/60">
              <li><a href="#bangles" className="hover:text-gold transition-colors">Silk Thread Bangles</a></li>
              <li><a href="#earrings" className="hover:text-gold transition-colors">Ethnic Earrings</a></li>
              <li><a href="#chains" className="hover:text-gold transition-colors">Traditional Neckpieces</a></li>
              <li><a href="#process" className="hover:text-gold transition-colors">Our Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Newsletter</h4>
            <p className="text-xs text-dark-grey/60 mb-4">Join our inner circle for exclusive previews and stories.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-gold/30 py-2 text-xs focus:outline-none focus:border-gold flex-grow"
              />
              <button className="text-gold">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gold/10 gap-6">
          <p className="text-[10px] text-dark-grey/40 uppercase tracking-widest">
            © 2024 SAKSAA'S Handcrafted Jewelry. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-dark-grey/60">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-gold transition-colors flex items-center justify-center w-[18px] h-[18px] font-bold text-sm">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
