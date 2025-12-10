import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import SEO from '../components/utils/SEO';
import { X, ChevronLeft, ChevronRight, Share2, Download } from 'lucide-react';

const CATEGORIES = ['All', 'Wedding', 'Pre-wedding', 'Films', 'Editorial'];

interface GalleryItem {
  id: string;
  src: string;
  category: string;
  title: string;
  location: string;
}

const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('/content/gallery.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.items || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load gallery", err);
        setLoading(false);
      });
  }, []);

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-charcoal transition-colors duration-300">
      <SEO 
        title="Wedding Portfolio"
        description="Browse our curated wedding gallery featuring weddings from Chittagong, Dhaka, and destination weddings."
      />
      
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-6 text-charcoal dark:text-white">Portfolio</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 font-sans">A curation of our favorite love stories, captured across the globe.</p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm tracking-wider uppercase px-4 py-2 rounded-full transition-all font-subheading font-bold ${
                filter === cat 
                  ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal' 
                  : 'bg-transparent text-gray-500 dark:text-gray-400 hover:text-charcoal dark:hover:text-white border border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 dark:text-gray-400">Loading gallery...</div>
      ) : (
        <div className="container mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 p-4">
                    <p className="text-xs uppercase tracking-widest mb-2 font-subheading">{item.category}</p>
                    <h3 className="font-serif text-2xl italic">{item.title}</h3>
                    <p className="text-sm mt-2 font-light font-sans">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/95 dark:bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button className="absolute top-6 right-6 p-2 text-charcoal dark:text-white hover:text-gold transition-colors z-50" onClick={() => setSelectedImageIndex(null)}>
              <X size={32} />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-charcoal dark:text-white hover:text-gold transition-colors z-50 hidden md:block" onClick={handlePrev}>
              <ChevronLeft size={40} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-charcoal dark:text-white hover:text-gold transition-colors z-50 hidden md:block" onClick={handleNext}>
              <ChevronRight size={40} />
            </button>

            <motion.div 
              className="relative max-w-6xl max-h-full w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <img 
                src={filteredItems[selectedImageIndex].src} 
                alt={filteredItems[selectedImageIndex].title} 
                className="max-h-[80vh] w-auto object-contain shadow-2xl rounded-sm" 
              />
              
              <div className="mt-6 flex items-center justify-between w-full max-w-2xl px-4 text-charcoal dark:text-white">
                 <div className="text-left">
                    <h3 className="font-serif text-2xl italic">{filteredItems[selectedImageIndex].title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-sans">{filteredItems[selectedImageIndex].location}</p>
                 </div>
                 <div className="flex gap-4">
                    <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gold hover:text-white hover:border-gold transition-colors">
                      <Download size={18} />
                    </button>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;