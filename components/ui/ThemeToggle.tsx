import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative w-10 h-10 flex items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition-all duration-300 ${className} ${
        theme === 'dark' 
          ? 'bg-white/10 border-white/20 text-gold shadow-gold/10 hover:bg-white/20' 
          : 'bg-white border-gray-200 text-charcoal shadow-gray-200/50 hover:border-gray-300'
      }`}
      aria-label="Toggle Theme"
      title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {theme === 'dark' ? (
            <Sun size={18} className="fill-gold stroke-gold drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]" />
          ) : (
            <Moon size={18} className="fill-charcoal stroke-charcoal" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;