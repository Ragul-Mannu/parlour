import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES, TESTIMONIALS, TEAM, PACKAGES, WHY_CHOOSE, COUNTERS } from '../data';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';
import { ServiceCard, TeamCard, TestimonialCard, SectionHeader, AnimatedCounter } from '../components/UI';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="overflow-x-hidden">

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="/hero.png" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-rose-gold/20 to-black/60" />
        </div>

        {/* Floating decorative circles */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-rose-gold/10 blur-3xl pointer-events-none" />
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full bg-blush-400/10 blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-rose-gold/20 backdrop-blur-sm text-rose-gold-light border border-rose-gold/30 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              ✨ Award Winning Luxury Salon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 md:mb-6"
          >
            Reveal Your<br />
            <span className="bg-gradient-to-r from-rose-gold-light via-blush-300 to-amber-300 bg-clip-text text-transparent">
              Natural Beauty
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience transformative beauty rituals at Glow & Grace — where luxury meets artistry and every visit is a celebration of you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
          >
            <Link to="/book" className="btn-primary text-base px-8 py-4 shadow-glow">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white text-base font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Explore Services
            </Link>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto"
          >
            {[['5000+', 'Happy Clients'], ['20+', 'Expert Stylists'], ['10+', 'Years Experience']].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <p className="font-heading font-bold text-xl md:text-3xl text-white">{val}</p>
                <p className="text-xs md:text-sm text-white/60">{lbl}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ FEATURED SERVICES ══════════════════════════════ */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              subtitle="What We Offer"
              title="Our Premium Services"
              desc="From transformative hair treatments to radiant skin care — indulge in services crafted for the modern woman."
            />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {SERVICES.slice(0, 8).map(service => (
              <GridItem key={service.id}>
                <ServiceCard service={service} />
              </GridItem>
            ))}
          </AnimatedGrid>
          <AnimatedSection className="text-center mt-8 md:mt-10">
            <Link to="/services" className="btn-outline inline-flex">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ══════════════════════════════════ */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader subtitle="Our Promise" title="Why Choose Glow & Grace?"
              desc="Six reasons why thousands of women trust us for their beauty needs." />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <GridItem key={i}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(183,110,121,0.12)' }}
                  className="bg-cream-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blush-100 to-rose-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-cream-50 text-base md:text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              </GridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* ═══ COUNTERS ═══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose-gold via-blush-500 to-rose-gold-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-black blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {COUNTERS.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter value={c.value} suffix={c.suffix} label={c.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOP STYLISTS ═══════════════════════════════════ */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader subtitle="Meet Our Artists" title="Top Stylists & Experts"
              desc="Our certified professionals bring global expertise and a passion for beauty to every appointment." />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6">
            {TEAM.slice(0,3).map(m => (
              <GridItem key={m.id}><TeamCard member={m} /></GridItem>
            ))}
          </AnimatedGrid>
          <AnimatedSection className="text-center mt-8">
            <Link to="/team" className="btn-outline inline-flex">
              Meet All Stylists
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ PRICING PACKAGES ═══════════════════════════════ */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader subtitle="Value for Money" title="Beauty Packages"
              desc="Handcrafted packages for every occasion — from daily pampering to once-in-a-lifetime celebrations." />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PACKAGES.map((pkg, i) => (
              <GridItem key={pkg.id}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  className={`rounded-2xl overflow-hidden shadow-card ${pkg.highlight ? 'ring-2 ring-rose-gold shadow-rose-lg' : ''} bg-white dark:bg-gray-800 flex flex-col h-full`}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                    <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3 inline-block">
                      {pkg.tag}
                    </span>
                    <h3 className="font-heading font-bold text-xl md:text-2xl mb-1">{pkg.name}</h3>
                    <p className="text-white/80 text-sm">{pkg.ideal}</p>
                  </div>
                  {/* Price */}
                  <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <div>
                      <span className="font-heading font-bold text-2xl md:text-3xl text-gray-900 dark:text-cream-50">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">₹{pkg.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">Save {pkg.savings}</span>
                  </div>
                  {/* Features */}
                  <div className="px-6 py-4 flex-1">
                    <ul className="space-y-2.5">
                      {pkg.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <svg className="w-4 h-4 text-rose-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-xs text-gray-400 mb-3 text-center">⏱ Duration: {pkg.duration}</p>
                    <Link to="/book" className={pkg.highlight ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}>
                      Choose Package
                    </Link>
                  </div>
                </motion.div>
              </GridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══════════════════════════════════ */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader subtitle="Client Love" title="What Our Clients Say"
              desc="Real stories from real women who experienced the Glow & Grace difference." />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {TESTIMONIALS.slice(0,3).map(t => (
              <GridItem key={t.id}><TestimonialCard t={t} /></GridItem>
            ))}
          </AnimatedGrid>
          <AnimatedSection className="text-center mt-8">
            <Link to="/testimonials" className="btn-outline inline-flex">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ GALLERY PREVIEW ════════════════════════════════ */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader subtitle="Our Portfolio" title="Gallery Highlights"
              desc="A glimpse into the artistry and elegance created at Glow & Grace every day." />
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { url:'/bridal.png', span:'col-span-2 row-span-2' },
              { url:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80', span:'' },
              { url:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80', span:'' },
              { url:'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80', span:'' },
              { url:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80', span:'' },
            ].map(({ url, span }, i) => (
              <GridItem key={i} className={span}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`overflow-hidden rounded-xl ${span ? 'h-full min-h-48 md:min-h-64' : 'h-36 md:h-44'}`}
                >
                  <img src={url} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                </motion.div>
              </GridItem>
            ))}
          </AnimatedGrid>
          <AnimatedSection className="text-center mt-8">
            <Link to="/gallery" className="btn-outline inline-flex">View Full Gallery
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ APP DOWNLOAD CTA ═══════════════════════════════ */}
      <section className="section-padding bg-gradient-to-br from-gray-950 via-rose-gold-dark to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-gold/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blush-400/10 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="section-subtitle mb-2 block">Download Now</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Book Appointments<br />On the Go 📱
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-md">
              Download the Glow & Grace app and enjoy exclusive in-app offers, instant booking, live tracking and loyalty rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              {[
                { label: 'App Store', sub: 'Download on the', icon: '🍎' },
                { label: 'Google Play', sub: 'Get it on', icon: '▶️' },
              ].map(s => (
                <a key={s.label} href="#" className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-colors">
                  <span className="text-2xl">{s.icon}</span>
                  <div className="text-left">
                    <p className="text-xs text-white/60">{s.sub}</p>
                    <p className="font-semibold text-white">{s.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-80 md:w-56 md:h-96 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-white/40">
                <div className="text-6xl mb-2">📱</div>
                <p className="text-sm">App Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
