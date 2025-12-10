import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SEO from '../components/utils/SEO';
import { PACKAGES } from '../constants';
import { Camera, Video, Clock, Image as ImageIcon, BookOpen, HardDrive, Users, Calendar, ArrowRight, Star } from 'lucide-react';

const Packages: React.FC = () => {

  const getIconForFeature = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('photographer') || lower.includes('photo clicks')) return <Camera size={16} className="text-gold shrink-0 mt-0.5" />;
    if (lower.includes('cinematographer') || lower.includes('movie') || lower.includes('trailer') || lower.includes('film')) return <Video size={16} className="text-gold shrink-0 mt-0.5" />;
    if (lower.includes('duration') || lower.includes('hours')) return <Clock size={16} className="text-gold shrink-0 mt-0.5" />;
    if (lower.includes('days') || lower.includes('events')) return <Calendar size={16} className="text-gold shrink-0 mt-0.5" />;
    if (lower.includes('pictures') || lower.includes('edited')) return <ImageIcon size={16} className="text-gold shrink-0 mt-0.5" />;
    if (lower.includes('album') || lower.includes('storybook')) return <BookOpen size={16} className="text-gold shrink-0 mt-0.5" />;
    if (lower.includes('pendrive') || lower.includes('soft copies')) return <HardDrive size={16} className="text-gold shrink-0 mt-0.5" />;
    if (lower.includes('jahidul') || lower.includes('arian')) return <Star size={16} className="text-gold shrink-0 mt-0.5" />;
    return <Users size={16} className="text-gold shrink-0 mt-0.5" />;
  };

  // Generate Offer Schema for all packages
  const packagesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PACKAGES.map((pkg, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": pkg.title,
      "description": pkg.description,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BDT",
        "price": pkg.price.replace(/[^0-9]/g, ''),
        "availability": "https://schema.org/InStock",
        "url": `https://nikahphotography.com/packages`
      }
    }))
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-white via-white to-surface/50 dark:from-charcoal dark:via-charcoal dark:to-darkSurface/50 transition-colors duration-300">
      <SEO 
        title="Wedding Photography Packages & Pricing"
        description="Transparent wedding photography packages in Chittagong. From Essential to Luxury Cinematic experiences. View our pricing."
        schema={packagesSchema}
      />
      
      {/* Premium Hero Section - Typography Driven */}
      <Section className="container mx-auto px-6 mb-24 md:mb-32 pt-8 text-center relative z-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal dark:text-white mb-8 leading-tight tracking-tight"
          >
            Choose Your <br className="hidden md:block" />
            <span className="italic">Perfect Package</span>
          </motion.h1>

          {/* Gold Divider */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-[2px] bg-gold mb-8 rounded-full"
          />

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide font-sans"
          >
            Transparent pricing, elegant storytelling, and a team you can rely on.
          </motion.p>

        </div>
      </Section>

      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {PACKAGES.map((pkg, idx) => (
            <Section key={pkg.id} delay={idx * 0.1} className="h-full">
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className={`p-8 border ${
                  pkg.isFeatured ? 'border-gold shadow-2xl relative bg-white dark:bg-white/10 ring-1 ring-gold/20' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-lg'
                } rounded-sm h-full flex flex-col transition-all duration-300`}
              >
                {pkg.isFeatured && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-xs font-bold px-6 py-2 tracking-widest uppercase rounded-full shadow-md z-10 font-subheading">
                    Best Seller
                  </span>
                )}
                
                <div className="text-center mb-8 border-b border-gray-100 dark:border-white/10 pb-8">
                  <h3 className="font-serif text-3xl mb-4 text-charcoal dark:text-white">{pkg.title}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                     <p className="text-2xl font-bold text-gold font-subheading">{pkg.price}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 max-w-[200px] mx-auto leading-normal font-sans">{pkg.description}</p>
                </div>
                
                <div className="flex-grow mb-10">
                  <ul className="space-y-4">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed group font-sans">
                        {getIconForFeature(feat)}
                        <span className="group-hover:text-charcoal dark:group-hover:text-white transition-colors">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={`/contact?package=${pkg.id}`} className="mt-auto self-center">
                  <Button variant={pkg.isFeatured ? 'primary' : 'outline'} className="min-w-[160px] w-auto">
                    Book This
                  </Button>
                </Link>
              </motion.div>
            </Section>
          ))}
        </div>
      </div>

      {/* FAQ / Additional Info Section */}
      <Section className="bg-white dark:bg-white/5 py-24 border-t border-gray-100 dark:border-white/5 transition-colors">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-2 font-subheading">Custom Requests</h4>
            <h2 className="font-serif text-4xl mb-6 text-charcoal dark:text-white">Looking for something specific?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-sans">
              Share your requirements and we’ll tailor a package that matches your day perfectly.
            </p>
            <Link to="/contact" className="inline-flex items-center text-charcoal dark:text-white font-semibold hover:text-gold transition-colors text-lg group font-subheading">
              Request a Custom Quote <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="space-y-8 font-sans">
             <div>
               <h3 className="font-serif text-xl mb-2 flex items-center gap-2 text-charcoal dark:text-white"><Clock size={18} className="text-gold"/> Overtime Charges</h3>
               <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Standard overtime is charged at BDT 3,000 per hour per team member if the event runs longer than the booked duration.</p>
             </div>
             <div>
               <h3 className="font-serif text-xl mb-2 flex items-center gap-2 text-charcoal dark:text-white"><Calendar size={18} className="text-gold"/> Booking Process</h3>
               <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">A 50% advance payment is required to secure your date. The remaining balance is due on the event day or before delivery.</p>
             </div>
             <div>
               <h3 className="font-serif text-xl mb-2 flex items-center gap-2 text-charcoal dark:text-white"><HardDrive size={18} className="text-gold"/> Delivery Timeline</h3>
               <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">We deliver a sneak peek within 3-5 days. The full gallery and films are delivered within 4-8 weeks depending on the season.</p>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Packages;