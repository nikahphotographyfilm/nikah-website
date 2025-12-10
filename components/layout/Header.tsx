import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // The header is "transparent" (white text, clear bg) ONLY if we are on Home AND not scrolled AND menu is closed.
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent 
          ? 'bg-transparent py-6' 
          : 'bg-white/95 dark:bg-charcoal/95 backdrop-blur-md shadow-sm border-b border-transparent dark:border-white/5 py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50 relative group">
          <span className={`font-serif text-3xl font-bold tracking-wide transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-charcoal dark:text-white'
          }`}> 
            Nikah
          </span>
          <span className={`block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-500 ease-out ${
            isTransparent ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-gold'
          }`} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              
              // Define hover glow styles based on background
              const glowClass = isTransparent
                ? 'text-white/90 hover:text-white'
                : 'text-charcoal dark:text-gray-300 hover:text-gold dark:hover:text-gold';

              const activeClass = isActive 
                ? (isTransparent ? 'text-white font-bold' : 'text-gold')
                : '';

              return (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`relative px-1 py-2 text-sm tracking-wide font-sans font-medium transition-all duration-300 ${glowClass} ${activeClass}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>

          {/* Theme Toggle - Now self-contained for visibility */}
          <ThemeToggle />
          
          <Link to="/contact">
            <Button 
              variant={isTransparent ? "outline-white" : "primary"} 
              size="sm"
            >
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          
          <button 
            className="z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-charcoal dark:text-white" /> 
            ) : (
              <Menu size={24} className={isTransparent ? 'text-white' : 'text-charcoal dark:text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-charcoal flex flex-col items-center justify-center gap-8 lg:hidden"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className="text-3xl font-serif text-charcoal dark:text-white hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="lg">Book Consultation</Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;