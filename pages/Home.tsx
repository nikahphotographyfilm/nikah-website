import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SEO from '../components/utils/SEO';
import { PACKAGES } from '../constants';
import { Review } from '../types';

interface HomeContent {
  hero: {
    image: string;
    subtitle: string;
    title: string;
    titleLine2: string;
    description: string;
  };
  intro: {
    mainImage: string;
    subImage: string;
    subtitle: string;
    title: string;
    titleItalic: string;
    description: string;
  };
  videoSection: {
    bgImage: string;
    title: string;
    description: string;
  };
}

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]); // Parallax for hero
  
  const [reviews, setReviews] = useState<Review[]>([]);
  const [homeData, setHomeData] = useState<HomeContent | null>(null);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reviewsRes, homeRes, galleryRes] = await Promise.all([
          fetch('/content/reviews.json'),
          fetch('/content/home.json'),
          fetch('/content/gallery.json')
        ]);
        
        if (reviewsRes.ok) setReviews(await reviewsRes.json());
        if (homeRes.ok) setHomeData(await homeRes.json());
        if (galleryRes.ok) {
           const gData = await galleryRes.json();
           setGalleryItems(gData.items || []);
        }
        
        setDataLoaded(true);
      } catch (error) {
        console.error('Error loading home data:', error);
      }
    };
    fetchData();
  }, []);

  // Auto-play for reviews slider
  useEffect(() => {
    if (!dataLoaded || reviews.length === 0) return;
    const interval = setInterval(handleNextReview, 6000);
    return () => clearInterval(interval);
  }, [currentReviewIndex, dataLoaded, reviews.length]);

  const handleNextReview = () => {
    if (reviews.length === 0) return;
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    if (reviews.length === 0) return;
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (!homeData) return <div className="min-h-screen bg-white dark:bg-charcoal" />;

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white dark:bg-charcoal transition-colors duration-300">
      <SEO 
        title="Best Wedding Photography in Chittagong"
        description="Nikah Photography - Where Every Moment Feels Alive. Cinematic wedding photography in Bangladesh."
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <motion.div 
          style={{ y: y1 }} 
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={homeData.hero.image} 
            alt="Nikah Photography - Cinematic Wedding Moment" 
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </motion.div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Hero Quote - Optimized for Mobile */}
            <h1 className="font-serif italic text-3xl sm:text-4xl md:text-7xl lg:text-8xl leading-tight mb-12 drop-shadow-lg tracking-tight">
              {homeData.hero.title}
            </h1>
            
            {/* Buttons - Spaced out and clean */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-sm sm:max-w-none mx-auto">
              <Link to="/packages" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:min-w-[180px]">Explore Packages</Button>
              </Link>
              <Link to="/gallery" className="w-full sm:w-auto">
                <Button variant="outline-white" size="lg" className="w-full sm:min-w-[180px]">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator - Absolute to Viewport */}
        <div className="absolute bottom-4 left-0 right-0 z-20 hidden md:flex flex-col items-center gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="flex flex-col items-center gap-2 cursor-pointer text-white/70 hover:text-white transition-colors"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <div className="w-[24px] h-[40px] rounded-full border-2 border-current flex justify-center p-1">
                <motion.div 
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className="w-1 h-1 bg-current rounded-full" 
                />
              </div>
            </motion.div>
        </div>
      </section>

      {/* Intro Section - Dynamic Content */}
      <Section className="py-20 md:py-32 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           <img 
            src={homeData.intro.mainImage} 
            alt="Real Wedding by Nikah" 
            loading="lazy"
            className="rounded-sm shadow-2xl w-full object-cover h-[400px] md:h-[600px]" 
           />
           <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white dark:bg-charcoal p-4 shadow-xl hidden lg:block transform rotate-3 transition-colors duration-300">
              <img 
                src={homeData.intro.subImage} 
                alt="Detail Shot" 
                loading="lazy"
                className="w-full h-full object-cover" 
              />
           </div>
        </div>
        <div className="order-1 md:order-2">
          <h3 className="font-subheading text-gold uppercase tracking-widest text-sm font-bold mb-4">{homeData.intro.subtitle}</h3>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight text-charcoal dark:text-white">
            {homeData.intro.title} <br/> <span className="italic text-gray-800 dark:text-gray-300">{homeData.intro.titleItalic}</span>
          </h2>
          <p className="font-sans text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light max-w-lg">
            {homeData.intro.description}
          </p>
          <Link to="/about" className="inline-flex items-center text-charcoal dark:text-white font-medium hover:text-gold transition-colors tracking-wide border-b border-charcoal/20 dark:border-white/20 pb-1 hover:border-gold font-subheading">
            Discover Our Approach <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* Mini Gallery (Dynamic) */}
      <section className="py-20 bg-surface dark:bg-darkSurface transition-colors duration-300">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h3 className="font-subheading text-gold uppercase tracking-widest text-sm font-bold mb-2">Portfolio</h3>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal dark:text-white">Selected Works</h2>
          </div>
          <Link to="/gallery" className="hidden md:flex items-center text-charcoal dark:text-white hover:text-gold transition-colors font-subheading">
            View Full Gallery <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
          {galleryItems.slice(0, 4).map((item, idx) => (
             <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[400px] overflow-hidden cursor-pointer"
             >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs uppercase tracking-widest mb-1 font-subheading">{item.category}</p>
                  <h4 className="font-serif text-xl italic">{item.title}</h4>
                </div>
             </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 md:hidden">
          <Link to="/gallery" className="w-full max-w-xs">
            <Button variant="outline" className="w-full">View All Works</Button>
          </Link>
        </div>
      </section>

      {/* Video Highlight */}
      <section className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={homeData.videoSection.bgImage} 
            alt="Video Background" 
            loading="lazy"
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 text-center text-white p-6">
           <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 mb-8 cursor-pointer hover:scale-110 transition-transform">
              <Play size={24} fill="white" className="ml-1 md:w-8 md:h-8" />
           </div>
           <h2 className="font-serif text-3xl md:text-5xl mb-4">{homeData.videoSection.title}</h2>
           <p className="font-sans max-w-xl mx-auto text-gray-300 mb-8 text-sm md:text-base">{homeData.videoSection.description}</p>
           <Link to="/videos"><Button variant="secondary">Watch Films</Button></Link>
        </div>
      </section>

      {/* Featured Packages */}
      <Section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-charcoal dark:text-white">Packages</h2>
          <p className="font-sans text-gray-500 dark:text-gray-400 max-w-lg mx-auto">Transparent pricing for premium storytelling. No hidden fees, just beautiful memories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.slice(0, 3).map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              whileHover={{ y: -10 }}
              className={`p-8 border ${
                pkg.isFeatured ? 'border-gold shadow-xl relative' : 'border-gray-200 dark:border-white/10'
              } bg-white dark:bg-white/5 text-center rounded-sm flex flex-col h-full transition-shadow duration-300 hover:shadow-lg`}
            >
              {pkg.isFeatured && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-xs font-bold px-4 py-1 tracking-widest uppercase rounded-full shadow-md font-subheading">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl mb-2 text-charcoal dark:text-white">{pkg.title}</h3>
              <p className="font-subheading text-3xl font-bold mb-4 text-charcoal dark:text-gold">{pkg.price}</p>
              
              <div className="flex-grow flex flex-col">
                <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mb-8 border-b border-gray-100 dark:border-white/10 pb-8 min-h-[60px] flex items-center justify-center">
                  {pkg.description}
                </p>
                <ul className="space-y-4 mb-8 text-left">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300 font-sans">
                      <span className="text-gold mr-2 shrink-0">✓</span> <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to={`/contact?package=${pkg.id}`} className="mt-auto w-full">
                <Button variant={pkg.isFeatured ? 'primary' : 'outline'} className="w-full">
                  Select Package
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <Link to="/packages">
                <Button variant="outline" className="min-w-[200px]">View All Packages</Button>
             </Link>
        </div>
      </Section>

      {/* Reviews (Dynamic from JSON) */}
      {reviews.length > 0 && (
        <section className="py-24 bg-surface dark:bg-darkSurface overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="font-subheading text-gold uppercase tracking-widest text-sm font-bold mb-2">Love Notes</h3>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal dark:text-white">Words from Our Couples</h2>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[450px] md:h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReviewIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 md:gap-12"
                  >
                    <div className="relative shrink-0">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-charcoal shadow-lg overflow-hidden bg-gray-200">
                          <img 
                            src={reviews[currentReviewIndex].photo} 
                            alt={reviews[currentReviewIndex].name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-gold', 'text-white', 'text-2xl', 'font-serif');
                              if(e.currentTarget.parentElement) {
                                  e.currentTarget.parentElement.innerText = reviews[currentReviewIndex].name.split('&').map(n => n.trim()[0]).join('&');
                              }
                            }}
                          />
                      </div>
                      <div className="absolute -bottom-3 -right-3 bg-white dark:bg-charcoal p-2 rounded-full shadow-md text-gold">
                          <Quote size={16} fill="currentColor" />
                      </div>
                    </div>

                    <div className="text-center md:text-left">
                      <div className="flex justify-center md:justify-start gap-1 mb-4 text-gold">
                          {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                          ))}
                      </div>
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 italic leading-relaxed mb-6 font-serif">
                          "{reviews[currentReviewIndex].review}"
                      </p>
                      <div>
                          <h4 className="font-subheading font-bold text-lg text-charcoal dark:text-white">{reviews[currentReviewIndex].name}</h4>
                          <p className="text-xs uppercase tracking-widest text-gold mt-1 font-sans">{reviews[currentReviewIndex].event}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center md:justify-end gap-4 mt-8 md:mt-0 relative z-10">
                <button onClick={handlePrevReview} className="p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:border-gold text-charcoal dark:text-white hover:text-gold transition-colors bg-white/50 dark:bg-black/50">
                    <ChevronLeft size={20} />
                </button>
                <button onClick={handleNextReview} className="p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:border-gold text-charcoal dark:text-white hover:text-gold transition-colors bg-white/50 dark:bg-black/50">
                    <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default Home;