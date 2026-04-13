import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';
import { SectionHeader, ServiceCard, SkeletonCard, SearchBar } from '../components/UI';

const CATEGORIES = ['All', 'Hair', 'Makeup', 'Skin', 'Nails', 'Grooming', 'Spa'];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [loading] = useState(false);

  const filtered = SERVICES.filter(s => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-gold to-rose-gold-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/hair_spa.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/85 to-rose-gold-dark/90" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <p className="text-rose-gold-light text-sm tracking-widest uppercase mb-3">Everything You Need</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">Our Services</h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              A complete menu of luxury beauty treatments — crafted for every woman, every occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Category Pills - scrollable on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1 w-full sm:w-auto hide-scrollbar">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-rose-gold text-white shadow-rose'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blush-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="w-full sm:w-64 shrink-0">
              <SearchBar
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search services..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          {/* Result count */}
          <AnimatedSection className="mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing <strong className="text-rose-gold">{filtered.length}</strong> services
              {activeCategory !== 'All' && <span> in <strong className="text-gray-900 dark:text-cream-50">{activeCategory}</strong></span>}
            </p>
          </AnimatedSection>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-heading text-xl text-gray-900 dark:text-cream-50 mb-2">No services found</h3>
              <p className="text-gray-500">Try a different search term or category</p>
              <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="btn-primary mt-4">Clear Filters</button>
            </div>
          ) : (
            <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {filtered.map(service => (
                <GridItem key={service.id}>
                  <ServiceCard service={service} />
                </GridItem>
              ))}
            </AnimatedGrid>
          )}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeader subtitle="How It Works" title="Your Beauty Journey in 4 Steps" />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step:'01', icon:'📱', title:'Choose Service', desc:'Browse our menu and pick your perfect treatment.' },
              { step:'02', icon:'👩‍💼', title:'Pick Stylist', desc:'Select from our certified expert team.' },
              { step:'03', icon:'📅', title:'Book Slot', desc:'Choose date & time that suits you best.' },
              { step:'04', icon:'✨', title:'Get Glowing', desc:'Arrive, relax, and walk out transformed!' },
            ].map((s, i) => (
              <GridItem key={i}>
                <div className="text-center relative">
                  {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-rose-gold to-transparent" />}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blush-100 to-rose-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-2xl mx-auto mb-3 relative z-10">
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold text-rose-gold tracking-widest">{s.step}</span>
                  <h4 className="font-heading font-semibold text-gray-900 dark:text-cream-50 mt-1 mb-1.5">{s.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
                </div>
              </GridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>
    </div>
  );
};

export default Services;
