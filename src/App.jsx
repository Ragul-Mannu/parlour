import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollToTop, WhatsAppFloat } from './components/UI';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Offers from './pages/Offers';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';

// Page wrapper with transition
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

// Scroll restoration on route change
const ScrollRestoration = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};

// Layout wrapper (with Navbar + Footer)
const Layout = ({ children, darkMode, setDarkMode }) => {
  const { pathname } = useLocation();
  const noLayout = ['/login'];
  if (noLayout.includes(pathname)) return <>{children}</>;
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
};

// Animated Routes
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/book" element={<PageWrapper><BookAppointment /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="/offers" element={<PageWrapper><Offers /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Auth /></PageWrapper>} />

        {/* 404 */}
        <Route path="*" element={
          <PageWrapper>
            <div className="min-h-screen flex items-center justify-center bg-cream-50 dark:bg-gray-950 pt-20">
              <div className="text-center px-4">
                <div className="text-7xl mb-6">💄</div>
                <h1 className="font-heading font-bold text-4xl text-gray-900 dark:text-cream-50 mb-2">Page Not Found</h1>
                <p className="text-gray-500 mb-6">Oops! The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-primary inline-flex">Back to Home</a>
              </div>
            </div>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <ScrollRestoration />
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </div>
  );
};

export default App;
