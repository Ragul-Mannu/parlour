import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [form, setForm] = useState({ name:'', email:'', phone:'', password:'', confirm:'' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (mode === 'signup' && !form.name.trim()) e.name = 'Name required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (form.password.length < 6) e.password = 'Min 6 characters';
    if (mode === 'signup' && form.password !== form.confirm) e.confirm = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const switchMode = newMode => {
    setMode(newMode);
    setErrors({});
    setForm({ name:'', email:'', phone:'', password:'', confirm:'' });
    setSuccess(false);
  };

  return (
    <div className="min-h-screen flex overflow-x-hidden">
      {/* ── Left Panel (desktop only) ── */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden">
        <img src="/hero.png" alt="Salon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/80 via-rose-gold-dark/70 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
          <motion.div
            key={mode}
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-heading font-bold text-2xl mx-auto mb-6 border-2 border-white/30">
              G
            </div>
            <h2 className="font-heading font-bold text-4xl xl:text-5xl text-white mb-4">
              {mode === 'login' ? 'Welcome Back!' : 'Join Us Today'}
            </h2>
            <p className="text-white/80 text-base xl:text-lg max-w-md leading-relaxed">
              {mode === 'login'
                ? 'Sign in to your Glow & Grace account to manage appointments, track rewards and unlock exclusive member benefits.'
                : 'Create an account to book premium beauty services, earn loyalty points and get early access to exclusive offers.'
              }
            </p>
            {/* Testimonial blurb */}
            <div className="mt-10 glass rounded-2xl p-5 text-left max-w-sm">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i=><span key={i} className="text-amber-400 text-sm">★</span>)}
              </div>
              <p className="text-white/90 text-sm italic">"Booking on Glow & Grace is so seamless. I love the reward points system!"</p>
              <div className="flex items-center gap-2 mt-3">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=40&q=80" alt="User" className="w-7 h-7 rounded-full object-cover" />
                <p className="text-white/70 text-xs">Ananya R. · Gold Member</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Right Panel (Form) ── */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center bg-white dark:bg-gray-950 px-6 py-10 md:px-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-gold to-blush-400 flex items-center justify-center text-white font-heading font-bold text-lg">G</div>
            <div>
              <p className="font-heading font-bold text-gray-900 dark:text-cream-50">Glow & Grace</p>
              <p className="text-xs text-rose-gold tracking-widest">BEAUTY STUDIO</p>
            </div>
          </Link>

          {/* Tab Switch */}
          <div className="flex bg-gray-100 dark:bg-gray-900 rounded-xl p-1 mb-8">
            {[['login','Sign In'],['signup','Create Account']].map(([m,l]) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  mode === m ? 'bg-white dark:bg-gray-800 text-rose-gold shadow-sm' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity:0, scale:0.9 }}
                animate={{ opacity:1, scale:1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale:0 }} animate={{ scale:1 }}
                  transition={{ type:'spring', damping:12, delay:0.1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-gold to-blush-400 flex items-center justify-center text-4xl mx-auto mb-5"
                >
                  ✨
                </motion.div>
                <h2 className="font-heading font-bold text-2xl text-gray-900 dark:text-cream-50 mb-2">
                  {mode === 'login' ? 'Welcome Back!' : 'Account Created!'}
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  {mode === 'login'
                    ? `Glad to see you again, ${form.email}!`
                    : 'Your account has been created successfully.'}
                </p>
                <Link to="/dashboard" className="btn-primary w-full justify-center py-3.5">
                  Go to Dashboard
                </Link>
                <Link to="/" className="btn-ghost w-full justify-center mt-2 text-sm">
                  Back to Home
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key={mode}
                initial={{ opacity:0, x: mode === 'signup' ? 20 : -20 }}
                animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x: mode === 'signup' ? -20 : 20 }}
                transition={{ duration:0.3 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <h1 className="font-heading font-bold text-2xl text-gray-900 dark:text-cream-50 mb-1">
                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {mode === 'login'
                      ? "Don't have an account? "
                      : 'Already have an account? '}
                    <button type="button" onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')} className="text-rose-gold hover:underline font-medium">
                      {mode === 'login' ? 'Create one' : 'Sign in'}
                    </button>
                  </p>
                </div>

                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Your full name"
                      className={`input-field ${errors.name ? 'border-red-400' : ''}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="your@email.com"
                    className={`input-field ${errors.email ? 'border-red-400' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="10-digit mobile number"
                      className="input-field"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      value={form.password}
                      onChange={e => setForm({...form, password: e.target.value})}
                      placeholder="Min. 6 characters"
                      className={`input-field pr-11 ${errors.password ? 'border-red-400' : ''}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPass ? '🙈' : '👁️'}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                </div>

                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Confirm Password</label>
                    <input
                      type={showPass ? 'text' : 'password'}
                      value={form.confirm}
                      onChange={e => setForm({...form, confirm: e.target.value})}
                      placeholder="Repeat password"
                      className={`input-field ${errors.confirm ? 'border-red-400' : ''}`}
                    />
                    {errors.confirm && <p className="text-red-400 text-xs mt-1">{errors.confirm}</p>}
                  </div>
                )}

                {mode === 'login' && (
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                      <input type="checkbox" className="accent-rose-gold" /> Remember me
                    </label>
                    <a href="#" className="text-rose-gold hover:underline">Forgot password?</a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-70"
                >
                  {loading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                  ) : mode === 'login' ? 'Sign In' : 'Create Account'}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                  <span className="text-xs text-gray-400">or continue with</span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  {[['G', 'Google', 'from-red-400 to-orange-400'],['f', 'Facebook', 'from-blue-500 to-blue-700']].map(([icon, name, gradient]) => (
                    <button
                      key={name}
                      type="button"
                      className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-rose-gold/30 hover:bg-blush-50/50 dark:hover:bg-gray-900 transition-all"
                    >
                      <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${gradient} text-white text-[10px] font-bold flex items-center justify-center`}>{icon}</span>
                      {name}
                    </button>
                  ))}
                </div>

                {mode === 'signup' && (
                  <p className="text-[11px] text-gray-400 text-center">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-rose-gold hover:underline">Terms of Service</a>{' '}and{' '}
                    <a href="#" className="text-rose-gold hover:underline">Privacy Policy</a>.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Auth;
