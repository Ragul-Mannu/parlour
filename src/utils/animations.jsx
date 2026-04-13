import { motion } from 'framer-motion';

// ─── Fade Up ─────────────────────────────
export const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

// ─── Fade In ─────────────────────────────
export const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };

// ─── Stagger Container ────────────────────
export const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

// ─── Scale In ────────────────────────────
export const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } } };

// ─── Slide Left ──────────────────────────
export const slideLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

// ─── Slide Right ─────────────────────────
export const slideRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

// ─── Animated Section Wrapper ─────────────
export const AnimatedSection = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } } }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Animated Grid ────────────────────────
export const AnimatedGrid = ({ children, className = '' }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={stagger}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Grid Item ───────────────────────────
export const GridItem = ({ children, className = '' }) => (
  <motion.div variants={fadeUp} className={className}>
    {children}
  </motion.div>
);
