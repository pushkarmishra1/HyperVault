import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Share2, Sparkles, Send, CheckCircle2, Globe, Shield } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';
import { BackButton } from '../../components/Navigation/BackButton';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleId: VEHICLES[0].id,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-black text-white min-h-screen px-6 sm:px-12 max-w-7xl mx-auto w-full relative font-sans">
      <BackButton />

      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Concierge Atelier</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          Private <span className="text-red-500 font-mono">Consultation</span>
        </h1>
        <p className="text-sm text-zinc-400 font-light mt-4">
          Connect with HyperVault VIP Client Advisors regarding global allocations, paint-to-sample specifications, or track-pack acquisition rights.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
        {/* LEFT COLUMN: INQUIRY FORM */}
        <div className="lg:col-span-7 bg-zinc-950 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <h2 className="text-xl font-bold uppercase text-white font-sans mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
            <span>CLIENT INQUIRY FORM</span>
            <span className="text-[10px] font-mono text-red-400 font-normal uppercase">DIRECT ATELIER DESK</span>
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center mx-auto text-red-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-white font-sans">
                Consultation Requested
              </h3>
              <p className="text-xs font-mono text-zinc-400 max-w-md mx-auto">
                Thank you, {formData.name}. Our HyperVault bespoke client advisor will connect with you shortly regarding allocation availability.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-xl border border-white/20 bg-white/5 font-mono text-xs uppercase text-zinc-300 hover:text-white"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-mono">
              <div>
                <label className="text-[10px] uppercase text-zinc-400 block mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alexander Sterling"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase text-zinc-400 block mb-1.5">Private Email</label>
                  <input
                    type="email"
                    required
                    placeholder="sterling@atelier.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-zinc-400 block mb-1.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+91 77XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase text-zinc-400 block mb-1.5">Target Specimen</label>
                <select
                  value={formData.vehicleId}
                  onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.brand} {v.model} ({v.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase text-zinc-400 block mb-1.5">Bespoke Inquiries / Notes</label>
                <textarea
                  rows={4}
                  placeholder="Mention desired paint-to-sample, track pack options, or delivery timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.7)] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Bespoke Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: CONTACT INFORMATION & HEADQUARTERS */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Headquarters Card */}
          <div className="bg-zinc-950 border border-red-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-red-400 font-bold tracking-widest">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>MAIN HEADQUARTERS</span>
            </div>

            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-wide font-sans">
                HyperVault India Headquarters
              </h3>
              <p className="text-xs font-mono text-zinc-300 mt-2 leading-relaxed">
                📍 Somewhere in india
              </p>
              <p className="text-[11px] font-mono text-zinc-400 mt-1">
                Founder & Owner: <strong className="text-white">Pushkar Mishra</strong>
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">Direct Concierge Email</div>
                  <a href="mailto:concierge@hypervault.com" className="hover:text-red-400 transition-colors font-bold">
                    concierge@hypervault.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">Direct Hotline</div>
                  <div className="font-bold text-white">+91 77XXXXXXXX / +49 89 2080 3000</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">Business Hours</div>
                  <div className="font-medium text-zinc-300">Mon – Sat: 09:00 – 20:00 IST</div>
                  <div className="text-[11px] text-zinc-400">Sunday: By Private VIP Appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Global Network Card */}
          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400 font-bold tracking-widest">
              <Share2 className="w-4 h-4 text-red-500" />
              <span>OFFICIAL SOCIAL & MEDIA CHANNELS</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-black border border-white/10 hover:border-red-500/50 hover:text-red-400 transition-all flex items-center justify-between"
              >
                <span>INSTAGRAM</span>
                <span className="text-[10px] text-zinc-400">@hypervault</span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-black border border-white/10 hover:border-red-500/50 hover:text-red-400 transition-all flex items-center justify-between"
              >
                <span>X / TWITTER</span>
                <span className="text-[10px] text-zinc-400">@hypervault</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-black border border-white/10 hover:border-red-500/50 hover:text-red-400 transition-all flex items-center justify-between"
              >
                <span>LINKEDIN</span>
                <span className="text-[10px] text-zinc-400">HyperVault</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-black border border-white/10 hover:border-red-500/50 hover:text-red-400 transition-all flex items-center justify-between"
              >
                <span>YOUTUBE</span>
                <span className="text-[10px] text-zinc-400">HyperVault HD</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
