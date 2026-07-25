import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Headphones, ShieldCheck, CheckCircle2, Calendar, Send, User, Mail, Phone, Clock } from 'lucide-react';

interface CampusConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName?: string;
  modelName?: string;
}

export const CampusConciergeModal: React.FC<CampusConciergeModalProps> = ({
  isOpen,
  onClose,
  brandName = 'HYPERVAULT',
  modelName,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Test Drive',
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl font-sans select-none lenis-prevent" data-lenis-prevent>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-950 border border-blue-500/40 w-full max-w-2xl p-6 sm:p-8 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] relative overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-blue-400 uppercase font-bold block">
                VIP CONCIERGE & ADVISORY
              </span>
              <h2 className="text-2xl font-black uppercase text-white font-sans">
                {brandName} Desk
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all"
          >
            ✕ CLOSE
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase font-sans mb-2">
              VIP Request Confirmed
            </h3>
            <p className="text-sm font-mono text-zinc-300 max-w-md mb-6">
              Thank you, {formData.fullName}. A senior {brandName} specialist will contact you via email and phone within 15 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase font-bold tracking-wider"
            >
              Return to Campus
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {modelName && (
              <div className="p-3 bg-blue-950/60 border border-blue-500/40 rounded-xl text-xs font-mono text-blue-300 flex items-center justify-between">
                <span>INQUIRING MODEL:</span>
                <span className="font-bold uppercase text-white">{modelName}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Lord Alexander Sterling"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-900 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  VIP Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="alexander@sterling.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 019-2831"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  Service Requested
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-slate-900 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="Test Drive">Book Private Test Drive</option>
                  <option value="Purchase Consultation">Private Purchase Consultation</option>
                  <option value="Custom Bespoke Commission">Custom Bespoke Commission</option>
                  <option value="Trade-In Evaluation">Vehicle Trade-In Valuation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                Preferred Date & Special Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Specify preferred test drive time, racetrack location, or custom paint requests..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-900 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit VIP Reservation</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
