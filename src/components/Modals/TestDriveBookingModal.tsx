import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, User, Mail, Phone, CheckCircle2, X, Shield, Sparkles } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';

interface TestDriveBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle?: Vehicle;
}

export const TestDriveBookingModal: React.FC<TestDriveBookingModalProps> = ({
  isOpen,
  onClose,
  vehicle,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    location: 'Bavarian Performance Circuit (Munich)',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl glass-panel border border-red-500/30 rounded-3xl p-6 md:p-8 text-white shadow-[0_0_80px_rgba(220,38,38,0.2)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-red-600/20 border border-red-500/40 text-red-500">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono-tech tracking-widest text-red-400 font-bold uppercase">
                  VIP CONCIERGE SCHEDULER
                </span>
                <h3 className="text-xl md:text-2xl font-serif-luxury font-bold">
                  Book Private Test Drive
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500 mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif-luxury font-bold text-white uppercase">
                RESERVATION CONFIRMED
              </h4>
              <p className="mt-2 text-xs font-mono-tech text-zinc-300 max-w-md">
                Your VIP Concierge Advisor has received your reservation for the{' '}
                <strong className="text-red-400">{vehicle?.model || 'HYPERVAULT Flagship'}</strong>. An official invitation will be sent to{' '}
                <strong className="text-white">{formData.email || 'your email'}</strong>.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-8 px-8 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono-tech text-xs tracking-wider uppercase font-bold cursor-pointer"
              >
                RETURN TO PAVILION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {vehicle && (
                <div className="bg-black/60 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <img
                    src={vehicle.heroImage}
                    alt={vehicle.model}
                    className="w-24 h-16 object-contain"
                  />
                  <div>
                    <span className="text-[9px] font-mono-tech text-red-400 uppercase font-bold block">
                      SELECTED MODEL
                    </span>
                    <span className="text-sm font-serif-luxury font-bold text-white">
                      {vehicle.brand} {vehicle.model}
                    </span>
                    <span className="text-xs font-mono-tech text-zinc-400 block">
                      {vehicle.horsepower} HP • {vehicle.topSpeed} MPH
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono-tech text-zinc-400 uppercase font-bold tracking-widest block mb-1">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord Alexander Sterling"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 rounded-xl p-3 text-xs font-mono-tech text-white outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono-tech text-zinc-400 uppercase font-bold tracking-widest block mb-1">
                    VIP EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sterling@aetherdrive.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 rounded-xl p-3 text-xs font-mono-tech text-white outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono-tech text-zinc-400 uppercase font-bold tracking-widest block mb-1">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 rounded-xl p-3 text-xs font-mono-tech text-white outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono-tech text-zinc-400 uppercase font-bold tracking-widest block mb-1">
                    ATELIER CIRCUIT LOCATION
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 rounded-xl p-3 text-xs font-mono-tech text-white outline-none focus:border-red-500"
                  >
                    <option value="Bavarian Circuit (Munich)">Bavarian Circuit (Munich)</option>
                    <option value="Fiorano VIP Lounge (Maranello)">Fiorano VIP Lounge (Maranello)</option>
                    <option value="Nürburgring Nordschleife Center">Nürburgring Nordschleife Center</option>
                    <option value="Beverly Hills Private Atelier">Beverly Hills Private Atelier</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-zinc-900 hover:from-red-500 hover:to-red-600 text-white font-mono-tech text-xs tracking-wider uppercase font-bold shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all cursor-pointer mt-4"
              >
                CONFIRM VIP TEST DRIVE RESERVATION
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
