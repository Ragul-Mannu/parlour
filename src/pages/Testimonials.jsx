import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';
import { TestimonialCard, SectionHeader, StarRating } from '../components/UI';

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const featured = TESTIMONIALS[active];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-gold to-rose-gold-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/hero.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/85 to-rose-gold-dark/90" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}>
            <p className="text-rose-gold-light text-sm tracking-widest uppercase mb-3">Client Love</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">What They Say</h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              Real stories from real women who experienced the Glow & Grace difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Hero Review Slider ── */}
      <section className="section-padding bg-blush-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-card-hover text-center border border-gray-100 dark:border-gray-800"
            >
              <div className="text-5xl text-rose-gold/20 font-heading mb-4">"</div>
              <p className="text-gray-600 dark:text-gray-200 text-base md:text-xl leading-relaxed italic mb-6 max-w-2xl mx-auto">
                {featured.review}
              </p>
              <div className="flex justify-center mb-4">
                <StarRating rating={featured.rating} size="lg" />
              </div>
              <div className="flex items-center justify-center gap-3">
                <img src={featured.avatar} alt={featured.name} className="w-12 h-12 rounded-full object-cover border-2 border-rose-gold" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-cream-50">{featured.name}</p>
                  <p className="text-xs text-gray-400">{featured.location} · {featured.service}</p>
                </div>
              </div>
            </motion.div>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? 'w-8 h-2.5 bg-rose-gold' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-rose-gold/50'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex justify-center gap-3 mt-4">
              <button onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-rose-gold hover:text-rose-gold transition-colors">
                ←
              </button>
              <button onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-rose-gold hover:text-rose-gold transition-colors">
                →
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── All Reviews ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader subtitle="All Reviews" title="Every Story Matters"
              desc="Genuine reviews from our community of happy clients." />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {TESTIMONIALS.map(t => (
              <GridItem key={t.id}><TestimonialCard t={t} /></GridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* ── Rating Summary ── */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-card border border-gray-100 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <p className="font-heading font-bold text-7xl text-rose-gold">4.9</p>
                  <div className="flex justify-center my-2"><StarRating rating={5} size="lg" /></div>
                  <p className="text-gray-500 text-sm">Based on 5000+ reviews</p>
                </div>
                <div className="space-y-3">
                  {[5,4,3,2,1].map(n => (
                    <div key={n} className="flex items-center gap-3">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 w-3">{n}</span>
                      <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{ width: ['92%','5%','2%','1%','0%'][5-n] }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 w-8">{['92%','5%','2%','1%','0%'][5-n]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
