import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { AboutProcess } from './components/AboutProcess';
import { Footer } from './components/Footer';
import bangle1 from '../images/bangle1.jpg'
import bangle2 from '../images/bangle2.jpg'
import bangle3 from '../images/bangle3.jpg'
import chain1 from '../images/chain1.jpg'
import chain2 from '../images/chain2.jpg'
import earing1 from '../images/earing1.jpg'
const bangleProducts = [
  {
    id: 1,
    // name: 'Royal Maroon Silk Set',
    // price: '₹1,250',
    image: bangle1, // Close up of bangles
  },
  {
    id: 2,
    // name: 'Peacock Blue Kada',
    // price: '₹850',
    image: bangle2, // Indian jewelry
  },
  {
    id: 3,
    // name: 'Saffron Bridal Chuda',
    // price: '₹2,400',
    image: bangle3, // Traditional jewelry
  },
];

const earringProducts = [
  {
    id: 4,
    // name: 'Silk Jhumkas',
    // price: '₹450',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800', // Silk thread jewelry
  },
  {
    id: 5,
    // name: 'Kundan Chandbalis',
    // price: '₹1,100',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=800', // Ethnic earrings
  },
  {
    id: 6,
    // name: 'Threaded Studs',
    // price: '₹320',
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=800', // Indian accessories
  },
];

const chainProducts = [
  {
    id: 7,
    // name: 'Silk Thread Mala',
    // price: '₹1,800',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800', // Necklace
  },
  {
    id: 8,
    // name: 'Temple Jewelry Set',
    // price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=800', // Gold necklace
  },
  {
    id: 9,
    // name: 'Guttapusalu Necklace',
    // price: '₹4,200',
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=800', // Traditional necklace
  },
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-royal-red/30 selection:text-royal-red">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="collections" className="bg-cream">
          <ProductSection
            id="bangles"
            title="Silk Thread Bangles"
            subtitle="Hand-Wrapped Perfection"
            products={bangleProducts}
          />
          
          <ProductSection
            id="earrings"
            title="Ethnic Earrings"
            subtitle="Traditional Elegance"
            products={earringProducts}
            reversed
          />
          
          <ProductSection
            id="chains"
            title="Traditional Neckpieces"
            subtitle="Heritage in Every Thread"
            products={chainProducts}
          />
        </div>

        <AboutProcess />
      </main>

      <Footer />
    </div>
  );
}
