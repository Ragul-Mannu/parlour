import React from 'react';
import { motion } from 'framer-motion';
import { OFFERS } from '../data';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';
import { SectionHeader } from '../components/UI';

const Offers = () => (
  <div className="pt-20 overflow-x-hidden">
    {/* Hero */}
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-gold to-rose-gold-dark overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src="/hero.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/85 to-rose-gold-dark/90" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}>
          <p className="text-rose-gold-light text-sm tracking-widest uppercase mb-3">Special Deals</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">Offers & Packages</h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
            Exclusive deals curated just for you. Save big, indulge more.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Offer Cards */}
    <section className="section-padding bg-cream-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {OFFERS.map((offer, i) => (
            <GridItem key={offer.id}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-card border border-gray-100 dark:border-gray-800"
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${offer.color} p-6 md:p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-8xl opacity-20 -mt-4 -mr-4">{offer.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
                    {offer.tag}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">{offer.title}</h3>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <span className="font-heading font-bold text-xl md:text-2xl">{offer.discount}</span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-5 md:p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{offer.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Valid Till</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-cream-50">{offer.validTill}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 mb-0.5">Promo Code</p>
                      <span className="font-mono font-bold text-rose-gold bg-blush-50 dark:bg-gray-800 px-3 py-1 rounded-lg text-sm tracking-widest">
                        {offer.code}
                      </span>
                    </div>
                  </div>
                  <a href="/book" className="btn-primary w-full justify-center">
                    Claim Offer
                  </a>
                </div>
              </motion.div>
            </GridItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>

    {/* Membership Section */}
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader subtitle="Loyalty Program" title="Glow & Grace Membership Tiers"
            desc="Join our membership and unlock a world of exclusive benefits, savings and priority access." />
        </AnimatedSection>
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name:'Silver', price:'₹999/mo', color:'from-gray-400 to-gray-600', perks:['10% off all services','Monthly newsletter','Advance booking 3 days','Free birthday facial'] },
            { name:'Gold', price:'₹1999/mo', color:'from-amber-400 to-yellow-600', perks:['20% off all services','Priority booking always','Free monthly hair wash','Birthday full makeover'], highlight: true },
            { name:'Platinum', price:'₹3999/mo', color:'from-violet-400 to-purple-600', perks:['30% off all services','24/7 WhatsApp priority','Free monthly spa session','Exclusive members events'] },
          ].map((tier, i) => (
            <GridItem key={i}>
              <motion.div whileHover={{ y:-6 }} className={`rounded-2xl overflow-hidden shadow-card ${tier.highlight ? 'ring-2 ring-amber-400' : ''}`}>
                <div className={`bg-gradient-to-br ${tier.color} p-6 text-white text-center`}>
                  {tier.highlight && <div className="text-xs font-bold uppercase tracking-widest mb-2">⭐ Most Popular</div>}
                  <h3 className="font-heading font-bold text-2xl mb-1">{tier.name}</h3>
                  <p className="text-3xl font-heading font-bold">{tier.price}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6">
                  <ul className="space-y-2.5 mb-5">
                    {tier.perks.map(p => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 text-rose-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="/book" className={tier.highlight ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}>
                    Join {tier.name}
                  </a>
                </div>
              </motion.div>
            </GridItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  </div>
);

export default Offers;
