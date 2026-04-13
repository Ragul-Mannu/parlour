import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DUMMY_USER } from '../data';
import { AnimatedSection, AnimatedGrid, GridItem } from '../utils/animations';
import { StarRating } from '../components/UI';

const statusStyles = {
  upcoming: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
};

const TABS = ['My Appointments', 'Edit Profile', 'Notifications'];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [appointments, setAppointments] = useState(DUMMY_USER.appointments);
  const [profile, setProfile] = useState({ name: DUMMY_USER.name, email: DUMMY_USER.email, phone: DUMMY_USER.phone });
  const [cancelModal, setCancelModal] = useState(null);
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState(DUMMY_USER.notifications);

  const cancelAppt = (id) => {
    setAppointments(prev => prev.map(a => a.id === id ? {...a, status:'cancelled'} : a));
    setCancelModal(null);
  };

  const saveProfile = e => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const markRead = (id) => setNotifications(prev => prev.map(n => n.id === id ? {...n, unread:false} : n));
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="pt-20 min-h-screen bg-cream-50 dark:bg-gray-950">

      {/* ── Profile Header Banner ── */}
      <div className="bg-gradient-to-br from-rose-gold to-rose-gold-dark py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-5 md:gap-8">
          <motion.img
            initial={{ scale:0.8, opacity:0 }}
            animate={{ scale:1, opacity:1 }}
            src={DUMMY_USER.avatar}
            alt={DUMMY_USER.name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-rose-lg shrink-0"
          />
          <div className="text-center sm:text-left">
            <motion.h1
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              className="font-heading font-bold text-2xl md:text-3xl text-white mb-0.5"
            >
              {DUMMY_USER.name}
            </motion.h1>
            <motion.p initial={{ opacity:0 }} animate={{ opacity:1, transition:{ delay:0.2 } }}
              className="text-white/70 text-sm mb-2">{DUMMY_USER.email}</motion.p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
              <span className="bg-amber-400 text-amber-900 font-bold px-3 py-1 rounded-full">👑 {DUMMY_USER.tier}</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full">⭐ {DUMMY_USER.points} Points</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full">📅 Since {DUMMY_USER.memberSince}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-16 md:top-20 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`relative px-4 md:px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === i
                  ? 'text-rose-gold'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {tab}
              {i === 2 && unreadCount > 0 && (
                <span className="absolute top-3 right-2 w-4 h-4 bg-rose-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
              {activeTab === i && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-gold" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">

        {/* ─── TAB 0: Appointments ─── */}
        {activeTab === 0 && (
          <AnimatedSection>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
              {[
                { label:'Total Visits', value: appointments.filter(a=>a.status==='completed').length, icon:'✅' },
                { label:'Upcoming', value: appointments.filter(a=>a.status==='upcoming').length, icon:'📅' },
                { label:'Cancelled', value: appointments.filter(a=>a.status==='cancelled').length, icon:'❌' },
                { label:'Rewards', value: `${DUMMY_USER.points} pts`, icon:'⭐' },
              ].map(s => (
                <div key={s.label} className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-card border border-gray-100 dark:border-gray-800 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-heading font-bold text-xl md:text-2xl text-gray-900 dark:text-cream-50">{s.value}</p>
                  <p className="text-xs text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Appointment Cards */}
            <h2 className="font-heading font-bold text-lg text-gray-900 dark:text-cream-50 mb-4">All Appointments</h2>
            <div className="space-y-4">
              {appointments.map((appt, i) => (
                <motion.div
                  key={appt.id}
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-card border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {/* Left */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blush-50 dark:bg-gray-800 flex items-center justify-center text-2xl shrink-0">
                        💆
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-cream-50 text-sm md:text-base">{appt.service}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">With {appt.stylist}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          📅 {appt.date} &nbsp;·&nbsp; 🕐 {appt.time}
                        </p>
                      </div>
                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full capitalize ${statusStyles[appt.status]}`}>
                        {appt.status}
                      </span>
                      <p className="font-bold text-rose-gold">₹{appt.price.toLocaleString()}</p>
                    </div>
                  </div>
                  {/* Actions */}
                  {appt.status === 'upcoming' && (
                    <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <button
                        onClick={() => setCancelModal(appt.id)}
                        className="text-xs px-4 py-2 rounded-full border border-red-300 text-red-500 hover:bg-red-50 transition-colors"
                      >
                        Cancel Booking
                      </button>
                      <a href="/book" className="text-xs px-4 py-2 rounded-full bg-blush-50 dark:bg-gray-800 text-rose-gold font-medium hover:bg-blush-100 transition-colors">
                        Reschedule
                      </a>
                    </div>
                  )}
                  {appt.status === 'completed' && (
                    <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <a href="/book" className="text-xs px-4 py-2 rounded-full bg-rose-gold text-white font-medium hover:bg-rose-gold-dark transition-colors">
                        Book Again
                      </a>
                      <button className="text-xs px-4 py-2 rounded-full border border-amber-300 text-amber-600 hover:bg-amber-50 transition-colors">
                        Leave a Review
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* ─── TAB 1: Edit Profile ─── */}
        {activeTab === 1 && (
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-card border border-gray-100 dark:border-gray-800">
                <h2 className="font-heading font-bold text-xl text-gray-900 dark:text-cream-50 mb-6">Edit Profile</h2>

                {saved && (
                  <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}}
                    className="mb-5 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm flex items-center gap-2">
                    ✅ Profile updated successfully!
                  </motion.div>
                )}

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <img src={DUMMY_USER.avatar} alt="Avatar" className="w-16 h-16 rounded-full object-cover border-2 border-rose-gold" />
                  <div>
                    <button className="btn-outline text-xs py-1.5 px-4">Change Photo</button>
                    <p className="text-xs text-gray-400 mt-1">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>

                <form onSubmit={saveProfile} className="space-y-4">
                  {[['name','Full Name','text'],['email','Email Address','email'],['phone','Phone Number','tel']].map(([id,label,type]) => (
                    <div key={id}>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">{label}</label>
                      <input
                        type={type}
                        value={profile[id]}
                        onChange={e => setProfile({...profile, [id]:e.target.value})}
                        className="input-field"
                      />
                    </div>
                  ))}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">Date of Birth</label>
                      <input type="date" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">City</label>
                      <input type="text" placeholder="Your city" className="input-field" defaultValue="Hyderabad" />
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button type="submit" className="btn-primary flex-1 justify-center">Save Changes</button>
                    <button type="button" onClick={() => setProfile({ name:DUMMY_USER.name, email:DUMMY_USER.email, phone:DUMMY_USER.phone })} className="btn-outline px-6">Reset</button>
                  </div>
                </form>

                {/* Membership Info */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 flex items-center gap-4">
                    <div className="text-3xl">👑</div>
                    <div>
                      <p className="font-bold text-sm text-gray-900 dark:text-cream-50">{DUMMY_USER.tier}</p>
                      <p className="text-xs text-gray-500">Member since {DUMMY_USER.memberSince}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="font-heading font-bold text-lg text-amber-500">{DUMMY_USER.points}</p>
                      <p className="text-xs text-gray-400">Reward Points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* ─── TAB 2: Notifications ─── */}
        {activeTab === 2 && (
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-bold text-lg text-gray-900 dark:text-cream-50">Notifications</h2>
                {unreadCount > 0 && (
                  <button
                    onClick={() => setNotifications(prev => prev.map(n => ({...n, unread:false})))}
                    className="text-xs text-rose-gold hover:underline"
                  >
                    Mark all read
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {notifications.map((n, i) => (
                  <motion.div
                    key={n.id}
                    initial={{ opacity:0, x:-20 }}
                    animate={{ opacity:1, x:0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => markRead(n.id)}
                    className={`bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-card border cursor-pointer transition-colors hover:border-rose-gold/30 ${
                      n.unread
                        ? 'border-rose-gold/20 dark:border-rose-gold/20'
                        : 'border-gray-100 dark:border-gray-800'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${n.unread ? 'bg-rose-gold' : 'bg-gray-200 dark:bg-gray-600'}`} />
                      <div className="flex-1">
                        <p className={`text-sm ${n.unread ? 'font-semibold text-gray-900 dark:text-cream-50' : 'text-gray-600 dark:text-gray-400'}`}>
                          {n.text}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* ── Cancel Confirmation Modal ── */}
      <AnimatePresence>
        {cancelModal && (
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setCancelModal(null)}
          >
            <motion.div
              initial={{ scale:0.85, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.85, opacity:0 }}
              transition={{ type:'spring', damping:20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-4xl mb-4 text-center">⚠️</div>
              <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-cream-50 text-center mb-2">Cancel Appointment?</h3>
              <p className="text-sm text-gray-500 text-center mb-6">This action cannot be undone. Are you sure you want to cancel this booking?</p>
              <div className="flex gap-3">
                <button onClick={() => setCancelModal(null)} className="flex-1 py-3 rounded-full border border-gray-200 text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-gray-50 transition-colors">
                  Keep It
                </button>
                <button onClick={() => cancelAppt(cancelModal)} className="flex-1 py-3 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors">
                  Yes, Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
