import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COUNTERS, TEAM } from '../data';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';
import { SectionHeader, AnimatedCounter, TeamCard } from '../components/UI';

const About = () => {
  return (
    <div className="pt-20 overflow-x-hidden">

      {/* ── Page Hero ── */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-gold via-blush-500 to-rose-gold-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/hero.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/80 to-rose-gold-dark/90" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <p className="text-rose-gold-light text-sm font-medium tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              About Glow & Grace
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              A decade of passion, artistry, and dedication to making every woman feel extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img src="/hair_spa.png" alt="Salon Interior" className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-card-hover" />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-rose-gold text-white p-4 md:p-6 rounded-2xl shadow-rose-lg text-center">
                  <p className="font-heading font-bold text-2xl md:text-3xl">10+</p>
                  <p className="text-xs md:text-sm">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="section-subtitle mb-3">Our Journey</p>
              <h2 className="section-title mb-4 md:mb-6">Born from a Passion<br />for Beauty</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  Glow & Grace Beauty Studio was founded in 2014 by beauty visionary <strong className="text-gray-900 dark:text-cream-50">Priya Sharma</strong>, with a single vision: to create a sanctuary where every woman could experience world-class beauty services in an atmosphere of pure luxury.
                </p>
                <p>
                  What started as a small boutique salon with three chairs has grown into one of the most celebrated beauty studios in the city — home to over 20 certified experts, a 5000+ loyal client base, and countless award-winning treatments.
                </p>
                <p>
                  We believe beauty is deeply personal. That's why every service at Glow & Grace is customised to celebrate your unique features and enhance your natural radiance — never to change who you are.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/book" className="btn-primary">Book Your First Visit</Link>
                <Link to="/services" className="btn-outline">Our Services</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionHeader subtitle="Our Core Values" title="Mission & Vision" />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '💫', title: 'Our Mission', text: 'To deliver transformative beauty experiences that celebrate individuality, boost confidence and create lasting joy — using only the finest products and techniques in the industry.' },
              { icon: '👁️', title: 'Our Vision', text: 'To be India\'s most loved luxury beauty studio — setting the gold standard for artistry, hygiene, and client satisfaction in every city we serve.' },
              { icon: '💎', title: 'Our Values', text: 'Excellence, integrity, inclusivity and innovation are embedded in everything we do. Beauty is for everyone — and we are committed to making every client feel seen, celebrated and stunning.' },
            ].map((item, i) => (
              <GridItem key={i}>
                <motion.div whileHover={{ y:-4 }} className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-card border border-gray-100 dark:border-gray-700 text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading font-bold text-gray-900 dark:text-cream-50 text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.text}</p>
                </motion.div>
              </GridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* ── Counters ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-gold via-blush-500 to-rose-gold-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {COUNTERS.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter value={c.value} suffix={c.suffix} label={c.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Intro ── */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader subtitle="Our Experts" title="Meet the Dream Team"
              desc="Talented, passionate and deeply committed to your beauty journey." />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {TEAM.slice(0, 3).map(m => (
              <GridItem key={m.id}><TeamCard member={m} /></GridItem>
            ))}
          </AnimatedGrid>
          <AnimatedSection className="text-center mt-8">
            <Link to="/team" className="btn-outline inline-flex">
              View Full Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <SectionHeader subtitle="Our Credentials" title="Trusted, Certified & Awarded" />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: '🏆', title: 'Best Salon Award', desc: '3 years running' },
              { icon: '🌿', title: 'Organic Certified', desc: 'ECOCERT Approved' },
              { icon: '🎓', title: 'VLCC Certified', desc: 'All stylists trained' },
              { icon: '⭐', title: '4.9 Star Rating', desc: '5000+ Google reviews' },
            ].map((b, i) => (
              <GridItem key={i}>
                <motion.div whileHover={{ scale:1.04 }} className="bg-white dark:bg-gray-800 rounded-2xl p-5 text-center shadow-card border border-gray-100 dark:border-gray-700">
                  <div className="text-4xl mb-3">{b.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-cream-50 text-sm">{b.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{b.desc}</p>
                </motion.div>
              </GridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>
    </div>
  );
};

export default About;
