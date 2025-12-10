import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SEO from '../components/utils/SEO';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-charcoal transition-colors duration-300">
      <SEO 
        title="About Us"
        description="Learn about Nikah Photography's journey. 10+ years of capturing weddings with honesty and warmth in Chittagong and across Bangladesh."
      />
      
      {/* Hero / Intro */}
      <Section className="container mx-auto px-6 mb-24 text-center max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-charcoal dark:text-white">
          Welcome to <span className="italic">Nikah Photography</span>
        </h1>
        <div className="w-20 h-[2px] bg-gold mx-auto mb-10 rounded-full"></div>
        <p className="font-serif text-2xl md:text-3xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto">
          We are Nikah - and our purpose is simple:<br />
          <span className="text-gold italic">to capture your wedding exactly the way it feels.</span>
        </p>
      </Section>

      {/* Narrative Section */}
      <Section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mx-auto space-y-10 text-lg md:text-xl leading-loose text-gray-600 dark:text-gray-300 font-light text-center md:text-left font-sans">
          <p>
            A wedding is not just a celebration. It’s emotions, traditions, family moments, laughter, blessings, and memories that become a part of your life forever. Our job is to hold onto those moments with honesty and warmth, so you can relive them anytime you want.
          </p>
          <p>
            Nikah Photography started with a love for real stories. Over the last 10+ years, we’ve been a part of many beautiful weddings across different cultures and traditions in Chittagong. Each wedding teaches us something new, and each couple inspires us in a different way.
          </p>
        </div>
      </Section>

      {/* Style Section - Visual Break */}
      <section className="bg-surface dark:bg-darkSurface py-24 mb-24 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute top-4 left-4 w-full h-full border-2 border-gold/20 rounded-sm z-0"></div>
               <img 
                 src="https://picsum.photos/800/1000?grayscale" 
                 alt="Natural candid wedding moment by Nikah Photography" 
                 loading="lazy"
                 className="relative z-10 w-full h-auto rounded-sm shadow-lg object-cover" 
               />
            </div>
            <div className="order-1 lg:order-2">
              <Section delay={0.2}>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-charcoal dark:text-white">Our style is natural and simple.</h2>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                  <p>
                    We don’t force poses or make you feel uncomfortable.
                    We let things flow as they do, and we capture the real moments - the ones you often don’t even notice happening.
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="container mx-auto px-6 mb-32 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-charcoal dark:text-white">Why couples choose Nikah</h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm font-bold font-subheading">Our Approach</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-white/5 p-10 border border-gray-100 dark:border-white/10 rounded-sm hover:shadow-lg transition-all duration-300">
            <h3 className="font-serif text-2xl mb-6 text-gold italic">Understanding Your Story</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              Before we start shooting, we like to understand your story - who you are, what you want, what matters to you, and how you dream of seeing your wedding memories. This helps us create photos and films that truly feel personal and meaningful.
            </p>
          </div>
          
          <div className="bg-white dark:bg-white/5 p-10 border border-gray-100 dark:border-white/10 rounded-sm hover:shadow-lg transition-all duration-300">
            <h3 className="font-serif text-2xl mb-6 text-gold italic">Care & Responsibility</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
              Whether your event is grand or intimate, we treat every wedding with the same care and responsibility. We work like family - calm, supportive, and always focused on keeping your day smooth and stress-free.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy / Closing */}
      <Section className="container mx-auto px-6 text-center max-w-3xl">
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-serif italic mb-10 leading-relaxed">
            "At Nikah, we believe photography is not only about beautiful images. It’s about connection, trust, and capturing the heart of your celebration."
          </p>
        </div>

        <div className="bg-surface dark:bg-darkSurface p-12 md:p-16 rounded-sm transition-colors duration-300">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-charcoal dark:text-white">We are your storytellers.</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed font-sans">
            We are the quiet eyes behind the camera, noticing the small moments that make your day unforgettable.
          </p>
          <Link to="/contact">
             <Button variant="primary" size="lg">Let us create something beautiful together</Button>
          </Link>
          <p className="mt-6 text-sm text-gray-400 tracking-wide font-subheading">Memories that feel real, warm, and timeless.</p>
        </div>
      </Section>

    </div>
  );
};

export default About;