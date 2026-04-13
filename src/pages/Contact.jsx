import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:'', email:'', phone:'', subject:'', message:'' });
  };

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
            <p className="text-rose-gold-light text-sm tracking-widest uppercase mb-3">Get In Touch</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">Contact Us</h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              Questions, feedback or just want to say hello? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cream-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <AnimatedGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon:'📍', title:'Visit Us', lines:['24, Rose Garden Lane', 'Jubilee Hills, Hyderabad — 500033'] },
              { icon:'📞', title:'Call Us', lines:['+91 98765 43210', '+91 87654 32109'] },
              { icon:'✉️', title:'Email Us', lines:['hello@glowandgrace.in', 'bookings@glowandgrace.in'] },
              { icon:'🕐', title:'Working Hours', lines:['Mon – Sat: 9 AM – 8 PM', 'Sunday: 10 AM – 6 PM'] },
            ].map((item, i) => (
              <GridItem key={i}>
                <motion.div whileHover={{ y:-4 }} className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-card border border-gray-100 dark:border-gray-800 text-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-blush-50 dark:bg-gray-800 flex items-center justify-center text-2xl mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-cream-50 mb-2 text-sm">{item.title}</h3>
                  {item.lines.map((l, li) => (
                    <p key={li} className="text-xs text-gray-500 dark:text-gray-400">{l}</p>
                  ))}
                </motion.div>
              </GridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

            {/* Form */}
            <AnimatedSection>
              <div className="bg-cream-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-card border border-gray-100 dark:border-gray-700">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 dark:text-cream-50 mb-2">Send Us a Message</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">We typically reply within 2 hours during working hours.</p>

                {sent && (
                  <motion.div
                    initial={{ opacity:0, y:-10 }}
                    animate={{ opacity:1, y:0 }}
                    className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700"
                  >
                    <span className="text-xl">✅</span>
                    <div>
                      <p className="font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-xs">We'll get back to you within 2 hours.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[['name','Full Name'],['phone','Phone Number']].map(([id, label]) => (
                      <div key={id}>
                        <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">{label}</label>
                        <input
                          id={id}
                          type={id === 'phone' ? 'tel' : 'text'}
                          required
                          value={form[id]}
                          onChange={e => setForm({...form, [id]: e.target.value})}
                          placeholder={`Your ${label.toLowerCase()}`}
                          className="input-field"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">Email Address</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">Subject</label>
                    <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="input-field" required>
                      <option value="">Select a subject</option>
                      <option>Appointment Enquiry</option>
                      <option>Service Information</option>
                      <option>Pricing Query</option>
                      <option>Complaint / Feedback</option>
                      <option>Career Opportunities</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-300 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="Write your message here..."
                      className="input-field resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-3.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map + Social */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6 h-full">
                {/* Map Placeholder */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden h-56 md:h-72 lg:flex-1 relative border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-5xl mb-3">🗺️</div>
                    <p className="text-sm font-medium">Glow & Grace Beauty Studio</p>
                    <p className="text-xs">24, Rose Garden Lane, Jubilee Hills</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-rose-gold text-xs font-medium hover:underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                  {/* Decorative pins */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ y:[0,-6,0] }} transition={{ repeat:Infinity, duration:2 }}
                      className="w-8 h-8 bg-rose-gold rounded-full flex items-center justify-center text-white text-xl shadow-rose">
                      📍
                    </motion.div>
                  </div>
                </div>

                {/* Social Cards */}
                <div className="bg-cream-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-cream-50 mb-4 text-sm">Follow Us</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name:'Instagram', handle:'@glowandgrace', bg:'from-pink-500 to-purple-600', icon:'📸' },
                      { name:'Facebook', handle:'/GlowGraceStudio', bg:'from-blue-600 to-blue-700', icon:'👍' },
                      { name:'YouTube', handle:'Glow & Grace TV', bg:'from-red-500 to-red-700', icon:'▶️' },
                    ].map(s => (
                      <a key={s.name} href="#" className={`bg-gradient-to-br ${s.bg} text-white rounded-xl p-3 text-center hover:scale-105 transition-transform`}>
                        <div className="text-2xl mb-1">{s.icon}</div>
                        <p className="text-xs font-bold">{s.name}</p>
                        <p className="text-[10px] opacity-75">{s.handle}</p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick WhatsApp */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl shrink-0">
                    💬
                  </div>
                  <div>
                    <p className="font-bold text-sm">Chat on WhatsApp</p>
                    <p className="text-xs opacity-80">Instant replies · Mon–Sun 9 AM–8 PM</p>
                  </div>
                  <svg className="w-5 h-5 ml-auto opacity-60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
