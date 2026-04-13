import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// ── ScrollToTop ──────────────────────────────────────
export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', t);
    return () => window.removeEventListener('scroll', t);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-top w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-gold text-white shadow-rose-lg flex items-center justify-center hover:bg-rose-gold-dark transition-colors"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ── WhatsApp Float ───────────────────────────────────
export const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20an%20appointment"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

// ── Star Rating ──────────────────────────────────────
export const StarRating = ({ rating, size = 'sm' }) => {
  const s = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`${s} ${i <= Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
};

// ── Service Card ─────────────────────────────────────
export const ServiceCard = ({ service }) => (
  <motion.div
    whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-card border border-gray-100 dark:border-gray-800 flex flex-col group"
  >
    <div className="relative overflow-hidden h-44 md:h-48">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 text-xs font-medium px-2 py-1 rounded-full text-gray-700 dark:text-cream-200">
        {service.category}
      </span>
      <span className="absolute bottom-3 right-3 text-2xl">{service.icon}</span>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 className="font-heading font-semibold text-gray-900 dark:text-cream-50 mb-1 text-base md:text-lg">{service.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex-1 leading-relaxed">{service.description}</p>
      <div className="flex items-center justify-between mb-3 text-xs text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {service.duration}
        </span>
        <span className="font-bold text-base text-rose-gold">₹{service.price.toLocaleString()}</span>
      </div>
      <Link to="/book" className="btn-primary justify-center text-sm py-2.5">
        Book Now
      </Link>
    </div>
  </motion.div>
);

// ── Team Card ─────────────────────────────────────────
export const TeamCard = ({ member }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-card border border-gray-100 dark:border-gray-800 text-center group"
  >
    <div className="relative">
      <div className="h-48 md:h-56 overflow-hidden">
        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <span className="absolute top-3 right-3 bg-rose-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
        {member.badge}
      </span>
    </div>
    <div className="p-4 md:p-5">
      <h3 className="font-heading font-bold text-gray-900 dark:text-cream-50 text-base md:text-lg">{member.name}</h3>
      <p className="text-rose-gold text-sm font-medium mb-1">{member.role}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{member.speciality}</p>
      <div className="flex items-center justify-center gap-2 mb-3">
        <StarRating rating={member.rating} />
        <span className="text-xs text-gray-500">({member.reviews})</span>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
        <span>⏱ {member.experience}</span>
        <span>⭐ {member.rating}</span>
      </div>
      <Link to="/book" className="btn-outline w-full justify-center text-sm py-2">Book Session</Link>
    </div>
  </motion.div>
);

// ── Testimonial Card ─────────────────────────────────
export const TestimonialCard = ({ t }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white dark:bg-gray-900 rounded-2xl p-5 md:p-6 shadow-card border border-gray-100 dark:border-gray-800 flex flex-col"
  >
    <div className="flex items-center gap-1 mb-3">
      <StarRating rating={t.rating} />
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">"{t.review}"</p>
    <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
      <div>
        <p className="font-semibold text-gray-900 dark:text-cream-50 text-sm">{t.name}</p>
        <p className="text-xs text-gray-400">{t.location} · {t.service}</p>
      </div>
    </div>
  </motion.div>
);

// ── Section Header ───────────────────────────────────
export const SectionHeader = ({ subtitle, title, desc, center = true }) => (
  <div className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
    <p className="section-subtitle mb-2">{subtitle}</p>
    <h2 className="section-title mb-3 md:mb-4">{title}</h2>
    {desc && <p className={`text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed ${center ? 'mx-auto' : ''}`}>{desc}</p>}
  </div>
);

// ── Counter ──────────────────────────────────────────
export const AnimatedCounter = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) { setStarted(true); }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading font-bold text-4xl md:text-5xl text-white mb-1">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm md:text-base text-rose-gold-light">{label}</p>
    </div>
  );
};

// ── Skeleton Card ────────────────────────────────────
export const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-card border border-gray-100 dark:border-gray-800">
    <div className="skeleton h-48" />
    <div className="p-4 space-y-3">
      <div className="skeleton h-5 rounded w-3/4" />
      <div className="skeleton h-3 rounded w-full" />
      <div className="skeleton h-3 rounded w-2/3" />
      <div className="skeleton h-10 rounded-full" />
    </div>
  </div>
);

// ── Search Bar ──────────────────────────────────────
export const SearchBar = ({ value, onChange, placeholder }) => (
  <div className="relative">
    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder || 'Search...'}
      className="input-field pl-11"
    />
  </div>
);
