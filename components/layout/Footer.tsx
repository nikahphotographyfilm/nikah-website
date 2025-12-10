import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal dark:bg-black/40 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Grid Layout: 1 col mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Social (Left) */}
          <div className="flex flex-col items-start">
            <h3 className="font-serif text-2xl font-bold tracking-widest mb-4">NIKAH</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Stories captured with heart.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.facebook.com/Nikahh88" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/nikah_photography_film/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@nikahphotographyfilm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Legal (Center) */}
          <div className="flex flex-col md:items-center">
            <div className="text-left md:text-center">
              <h4 className="font-medium text-base mb-4 text-gray-200">Legal</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Get in Touch (Right) */}
          <div className="flex flex-col md:items-end text-left md:text-right">
            <h4 className="font-medium text-base mb-4 text-gray-200">Get in Touch</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="hover:text-gold transition-colors cursor-pointer">Phone: +880 1703 721233</p>
              <p className="hover:text-gold transition-colors cursor-pointer">Email: nikahphotographyfilm@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-white/10 pt-8 flex justify-center text-xs text-gray-500">
          <p>&copy; 2026 NIKAH Photography & Film. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;