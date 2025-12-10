import React, { useState } from 'react';
import Section from '../components/ui/Section';
import SEO from '../components/utils/SEO';
import { VIDEO_ITEMS } from '../constants';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const activeVideo = VIDEO_ITEMS.find(v => v.id === selectedVideo);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Wedding Films & Cinematography"
        description="Experience the magic of cinematic wedding films by Nikah Photography. Capturing vows, laughter, and tears in high definition."
      />

      <Section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-serif text-5xl mb-6">Motion</h1>
        <p className="text-gray-500 max-w-2xl mx-auto font-sans">
          Cinematic storytelling that captures the movement, sound, and emotion of your special day.
        </p>
      </Section>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {VIDEO_ITEMS.map((video, idx) => (
          <Section key={video.id} delay={idx * 0.1}>
            <div 
              onClick={() => setSelectedVideo(video.id)}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-video overflow-hidden rounded-sm shadow-md mb-4">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play fill="white" className="text-white ml-1 w-6 h-6" />
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-1 group-hover:text-gold transition-colors">{video.title}</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-subheading">{video.category}</p>
            </div>
          </Section>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-50">
              <X size={32} />
            </button>
            <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative" onClick={e => e.stopPropagation()}>
              <iframe 
                src={`${activeVideo.embedUrl}?autoplay=1`} 
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Videos;