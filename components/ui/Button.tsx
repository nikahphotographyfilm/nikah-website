import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg transition-all duration-300 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-charcoal text-white hover:bg-gold hover:text-white hover:shadow-lg dark:bg-white dark:text-charcoal dark:hover:bg-gold dark:hover:text-white",
    secondary: "bg-gold text-white hover:bg-charcoal hover:shadow-lg dark:hover:bg-white dark:hover:text-charcoal",
    outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-charcoal",
    ghost: "bg-transparent text-charcoal hover:text-gold hover:bg-gold/5 dark:text-white dark:hover:text-gold dark:hover:bg-white/5",
    "outline-white": "border-2 border-white text-white hover:bg-white hover:text-charcoal",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-sm px-6 py-3 gap-2 w-full md:w-auto", // Full width on mobile
    lg: "text-base px-8 py-4 gap-3 w-full md:w-auto", // Full width on mobile
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, translateY: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props as any}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};

export default Button;