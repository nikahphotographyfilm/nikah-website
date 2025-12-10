import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  onClick?: () => void;
}

const Section: React.FC<SectionProps> = ({ children, className = "", delay = 0, id, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;