import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../data';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg shadow-rose py-2'
          : 'bg-transparent py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-rose-gold to-blush-400 flex items-center justify-center text-white text-lg font-heading font-bold shadow-rose">
                G
              </div>
              <div>
                <span className="font-heading font-bold text-base md:text-lg text-gray-900 dark:text-cream-50 block leading-tight">
                  Glow & Grace
                </span>
                <span className="text-[10px] text-rose-gold tracking-widest uppercase font-body hidden sm:block">
                  Beauty Studio
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-rose-gold bg-blush-50 dark:bg-gray-800'
                        : 'hover:text-rose-gold hover:bg-blush-50 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full text-gray-600 dark:text-cream-200 hover:bg-blush-50 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Book Now - Desktop */}
              <Link
                to="/book"
                className="hidden md:inline-flex btn-primary py-2 px-5 text-sm"
              >
                Book Now
              </Link>

              {/* Dashboard Link - Desktop */}
              <Link
                to="/dashboard"
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full bg-blush-50 dark:bg-gray-800 text-rose-gold text-sm font-medium hover:bg-blush-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                My Account
              </Link>

              {/* Hamburger - Mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-700 dark:text-cream-200 hover:bg-blush-50 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-1 items-end">
                  <motion.div animate={{ width: menuOpen ? '20px' : '20px', rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="h-0.5 bg-current rounded-full w-5 origin-center" />
                  <motion.div animate={{ opacity: menuOpen ? 0 : 1, width: menuOpen ? 0 : '14px' }} className="h-0.5 bg-current rounded-full" />
                  <motion.div animate={{ width: menuOpen ? '20px' : '20px', rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="h-0.5 bg-current rounded-full w-5 origin-center" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-gray-950 z-50 lg:hidden shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
                <div>
                  <p className="font-heading font-bold text-gray-900 dark:text-cream-50">Glow & Grace</p>
                  <p className="text-xs text-rose-gold tracking-widest">BEAUTY STUDIO</p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl bg-blush-50 dark:bg-gray-800 text-gray-600 dark:text-cream-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto py-4 px-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl mb-1 font-medium text-sm transition-all ${
                          isActive
                            ? 'bg-blush-50 dark:bg-gray-800 text-rose-gold'
                            : 'text-gray-700 dark:text-cream-200 hover:bg-blush-50 dark:hover:bg-gray-800 hover:text-rose-gold'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
                <Link to="/book" className="btn-primary w-full justify-center">
                  Book Appointment
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-rose-gold text-rose-gold text-sm font-medium hover:bg-blush-50 transition-colors"
                >
                  My Account
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
