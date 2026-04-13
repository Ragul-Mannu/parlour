import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, STYLISTS_FOR_BOOKING, TIME_SLOTS } from '../data';
import { AnimatedSection } from '../utils/animations';

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', stylist: '', date: '', time: '', notes: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.match(/^\d{10}$/)) e.phone = 'Valid 10-digit phone required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.stylist) e.stylist = 'Please select a stylist';
    if (!form.date) e.date = 'Please select a date';
    if (!form.time) e.time = 'Please select a time slot';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) setSuccess(true);
  };

  const field = (id, label, type = 'text', required = true) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
        {label} {required && <span className="text-rose-gold">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={e => setForm({...form, [id]: e.target.value})}
        min={type === 'date' ? today : undefined}
        className={`input-field ${errors[id] ? 'border-red-400 focus:ring-red-200' : ''}`}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  const select = (id, label, options, placeholder) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
        {label} <span className="text-rose-gold">*</span>
      </label>
      <select
        id={id}
        value={form[id]}
        onChange={e => setForm({...form, [id]: e.target.value})}
        className={`input-field ${errors[id] ? 'border-red-400' : ''}`}
      >
        <option value="">{placeholder}</option>
        {options.map(o => (
          <option key={typeof o === 'string' ? o : o.id} value={typeof o === 'string' ? o : o.name}>
            {typeof o === 'string' ? o : `${o.name} — ₹${o.price}`}
          </option>
        ))}
      </select>
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  const selectedService = SERVICES.find(s => s.name === form.service);

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-rose-gold to-rose-gold-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/hero.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/85 to-rose-gold-dark/90" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <p className="text-rose-gold-light text-sm tracking-widest uppercase mb-3">Reserve Your Spot</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-3">Book Appointment</h1>
            <p className="text-white/80 text-base max-w-lg mx-auto">
              Choose your service, pick your expert and schedule a time that's perfect for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="section-padding bg-cream-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* ── FORM ── */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-card border border-gray-100 dark:border-gray-800">
                  <h2 className="font-heading font-bold text-xl md:text-2xl text-gray-900 dark:text-cream-50 mb-6">
                    Your Details
                  </h2>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-5">
                    {field('name', 'Full Name')}
                    {field('phone', 'Phone Number', 'tel')}
                    <div className="sm:col-span-2">
                      {field('email', 'Email Address', 'email')}
                    </div>
                  </div>

                  <hr className="border-gray-100 dark:border-gray-800 mb-5" />
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-4">Appointment Details</h3>

                  {/* Appointment Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-5">
                    {select('service', 'Select Service', SERVICES.map(s => ({ id: s.id, name: s.name, price: s.price })), 'Choose a service')}
                    {select('stylist', 'Select Stylist', STYLISTS_FOR_BOOKING, 'Choose a stylist')}
                    {field('date', 'Preferred Date', 'date')}
                    {/* Time Slot */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Time Slot <span className="text-rose-gold">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {TIME_SLOTS.slice(0, 9).map(t => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm({...form, time: t})}
                            className={`py-1.5 text-xs rounded-lg font-medium transition-all ${
                              form.time === t
                                ? 'bg-rose-gold text-white shadow-rose'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blush-50'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Special Notes <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={e => setForm({...form, notes: e.target.value})}
                      rows={3}
                      placeholder="Any allergies, special requests or preferences..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Confirm Appointment
                  </button>
                </form>
              </AnimatedSection>
            </div>

            {/* ── SUMMARY ── */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-5">
                {/* Booking Summary Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-card border border-gray-100 dark:border-gray-800">
                  <h3 className="font-heading font-bold text-gray-900 dark:text-cream-50 text-lg mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    {[
                      { label:'Name', value: form.name || '—' },
                      { label:'Service', value: form.service || '—' },
                      { label:'Stylist', value: form.stylist || '—' },
                      { label:'Date', value: form.date || '—' },
                      { label:'Time', value: form.time || '—' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">{label}</span>
                        <span className="font-medium text-gray-900 dark:text-cream-50 text-right max-w-[60%] truncate">{value}</span>
                      </div>
                    ))}
                    {selectedService && (
                      <>
                        <hr className="border-gray-100 dark:border-gray-800" />
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration</span>
                          <span className="font-medium text-gray-900 dark:text-cream-50">{selectedService.duration}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span className="text-gray-900 dark:text-cream-50">Estimated Price</span>
                          <span className="text-rose-gold text-lg">₹{selectedService.price.toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Policies */}
                <div className="bg-blush-50 dark:bg-gray-800 rounded-2xl p-5">
                  <h4 className="font-semibold text-gray-900 dark:text-cream-50 text-sm mb-3">📋 Salon Policies</h4>
                  <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                    <li>✓ Arrive 10 minutes before your appointment</li>
                    <li>✓ Cancellation must be 24 hours in advance</li>
                    <li>✓ Rescheduling available up to 2 times</li>
                    <li>✓ Consultation included before services</li>
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-card border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-cream-50 text-sm mb-3">Need Help?</h4>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <p>📞 +91 98765 43210</p>
                    <p>✉️ hello@glowandgrace.in</p>
                    <p>🕐 9:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SUCCESS POPUP ── */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', damping: 12 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-gold to-blush-400 flex items-center justify-center text-4xl mx-auto mb-5"
              >
                ✅
              </motion.div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 dark:text-cream-50 mb-2">
                Appointment Booked!
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-2">
                Your appointment has been successfully confirmed.
              </p>
              <div className="bg-blush-50 dark:bg-gray-800 rounded-xl p-4 mb-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong>{form.service}</strong> with <strong>{form.stylist}</strong></p>
                <p>{form.date} at {form.time}</p>
              </div>
              <p className="text-xs text-gray-400 mb-6">
                A confirmation SMS has been sent to {form.phone}. We look forward to seeing you! 💄
              </p>
              <button
                onClick={() => { setSuccess(false); setForm({ name:'', phone:'', email:'', service:'', stylist:'', date:'', time:'', notes:'' }); }}
                className="btn-primary w-full justify-center"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookAppointment;
