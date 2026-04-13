import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../data';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';
import { SectionHeader, TeamCard } from '../components/UI';

const Team = () => (
  <div className="pt-20 overflow-x-hidden">
    {/* Hero */}
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-gold to-rose-gold-dark overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src="/hero.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/85 to-rose-gold-dark/90" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}>
          <p className="text-rose-gold-light text-sm tracking-widest uppercase mb-3">The Artists Behind Your Look</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">Our Dream Team</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
            Certified experts with a passion for beauty, artistry and making you feel extraordinary.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Team Grid */}
    <section className="section-padding bg-cream-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {TEAM.map(m => (
            <GridItem key={m.id}><TeamCard member={m} /></GridItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>

    {/* Why Our Team */}
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeader subtitle="Our Standards" title="What Sets Our Team Apart" />
        </AnimatedSection>
        <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon:'🎓', title:'Internationally Certified', desc:'Every stylist is VLCC & Schwarzkopf certified, with ongoing upskilling.' },
            { icon:'💡', title:'Trend Savvy', desc:'Regular training on global trends — our stylists breathe fashion.' },
            { icon:'🌿', title:'Product Experts', desc:'Trained in organic, cruelty-free products for safe and effective results.' },
            { icon:'❤️', title:'Client Focused', desc:'Each expert takes time to understand your unique needs and preferences.' },
          ].map((item, i) => (
            <GridItem key={i}>
              <motion.div whileHover={{ y:-4 }} className="bg-cream-50 dark:bg-gray-800 rounded-2xl p-5 text-center shadow-card border border-gray-100 dark:border-gray-700 h-full">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-cream-50 text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            </GridItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-gradient-to-br from-rose-gold to-rose-gold-dark">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to meet your perfect stylist?</h2>
          <p className="text-white/80 mb-6 text-sm md:text-base">Book a consultation and we'll match you with the ideal expert for your beauty needs.</p>
          <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-gold font-bold rounded-full shadow-lg hover:bg-cream-50 transition-colors">
            Book with a Stylist
          </a>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Team;
