import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../data';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';

const CATEGORIES = ['All', 'Hair', 'Makeup', 'Bridal', 'Nails', 'Skin', 'Spa', 'Grooming'];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(i => i.category === active);

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-gold to-rose-gold-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/bridal.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/85 to-rose-gold-dark/90" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}>
            <p className="text-rose-gold-light text-sm tracking-widest uppercase mb-3">Our Portfolio</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">Beauty Gallery</h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              A visual journey through our finest transformations, crafted every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat ? 'bg-rose-gold text-white shadow-rose' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blush-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="masonry-grid">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="masonry-item cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.url}
                  alt={img.category}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                  <span className="text-white text-xs font-semibold">{img.category}</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-3xl max-h-[85vh] w-full"
            onClick={e => e.stopPropagation()}
          >
            <img src={lightbox.url} alt={lightbox.category} className="w-full h-full object-contain rounded-2xl" />
            <p className="text-white/60 text-center mt-3 text-sm">{lightbox.category}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
