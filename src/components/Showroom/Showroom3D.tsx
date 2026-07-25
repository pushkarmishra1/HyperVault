import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  PhoneCall,
  GitCompare,
  Volume2,
  Image as ImageIcon,
  Gauge,
  Zap,
  CheckCircle2,
  X,
  Sparkles,
  Flame,
  Palette,
  Layers,
} from 'lucide-react';
import { Vehicle } from '../../types/vehicle';
import { VEHICLES, HERO_VEHICLE } from '../../data/vehicles';
import { EngineAudioSimulatorModal } from '../Audio/EngineAudioSimulatorModal';
import { TestDriveBookingModal } from '../Modals/TestDriveBookingModal';
import { CompareVehiclesModal } from '../Modals/CompareVehiclesModal';
import { BackButton } from '../Navigation/BackButton';

interface ShowroomProps {
  vehicle?: Vehicle;
  onBack?: () => void;
}

export const Showroom3D: React.FC<ShowroomProps> = ({
  vehicle = HERO_VEHICLE,
  onBack,
}) => {
  const navigate = useNavigate();
  const [activeCar, setActiveCar] = useState<Vehicle>(vehicle);
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  // Modals
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const activeColor = activeCar.colorOptions[activeColorIdx] || activeCar.colorOptions[0];

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const hasOverlayOpen = !!(selectedGalleryImg || isAudioOpen || isTestDriveOpen || isCompareOpen);

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white pt-24 pb-28 select-none font-sans">
      {/* UNIFIED BACK TO SHOWROOM BUTTON */}
      <BackButton onClick={handleBack} enableEscKey={!hasOverlayOpen} />

      {/* HEADER & NAV */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <button
            onClick={handleBack}
            className="p-3 rounded-2xl bg-white/5 border border-white/15 hover:border-red-500/50 hover:bg-red-600/20 text-white transition-all cursor-pointer flex items-center gap-2 self-start group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-mono-tech uppercase font-bold">BACK TO SHOWROOM</span>
          </button>

          <div className="text-right">
            <span className="text-[10px] font-mono-tech text-red-400 uppercase tracking-widest font-bold">
              LUXURY SHOWROOM SUITE
            </span>
            <h1 className="text-2xl font-serif-luxury font-bold text-white uppercase">
              {activeCar.brand} {activeCar.model}
            </h1>
          </div>
        </div>

        {/* CAR MODEL SELECTOR TABS */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setActiveCar(v);
                setActiveColorIdx(0);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono-tech tracking-wider uppercase font-bold transition-all cursor-pointer whitespace-nowrap ${
                v.id === activeCar.id
                  ? 'bg-red-600 text-white border border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              {v.brand} {v.model}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN SHOWROOM DISPLAY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel border border-white/10 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden">
          {/* LEFT: HIGH-RES PHOTO & COLOR STUDIO */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-white/10 p-6">
              {/* Subtle Color Aura Glow */}
              <div
                className="absolute inset-0 opacity-20 blur-3xl rounded-full pointer-events-none transition-colors duration-700"
                style={{ backgroundColor: activeColor?.hex || '#dc2626' }}
              />

              <img
                src={activeColor?.image || activeCar.heroImage || activeCar.thumbnail || 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=800&auto=format&fit=crop'}
                alt={activeCar.model}
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* COLOR FINISH SELECTION */}
            <div className="mt-4 flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-xs font-mono-tech text-zinc-400 uppercase font-bold tracking-widest flex items-center gap-2">
                <Palette className="w-4 h-4 text-red-500" />
                <span>SELECT FINISH:</span>
              </span>

              <div className="flex items-center gap-3">
                {activeCar.colorOptions.map((c, idx) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveColorIdx(idx)}
                    title={c.name}
                    className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                      activeColorIdx === idx
                        ? 'border-red-500 scale-125 shadow-[0_0_15px_#ef4444]'
                        : 'border-white/20 opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>

              <span className="text-xs font-mono-tech font-bold text-white hidden sm:block">
                {activeColor?.name}
              </span>
            </div>
          </div>

          {/* RIGHT: SPECIFICATIONS & ACTIONS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="px-3 py-1 rounded bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-mono-tech font-bold uppercase tracking-widest">
                {activeCar.year} • {activeCar.brand}
              </span>

              <h2 className="text-3xl md:text-5xl font-serif-luxury font-black uppercase text-white tracking-tight mt-2">
                {activeCar.model}
              </h2>

              <p className="mt-3 text-xs md:text-sm text-zinc-300 font-sans leading-relaxed">
                {activeCar.description}
              </p>
            </div>

            {/* PERFORMANCE GAUGES */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">HORSEPOWER</div>
                <div className="text-2xl font-mono-tech font-black text-red-500">{activeCar.horsepower} HP</div>
              </div>
              <div>
                <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">TOP SPEED</div>
                <div className="text-2xl font-mono-tech font-black text-white">{activeCar.topSpeed} MPH</div>
              </div>
              <div>
                <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">0-60 MPH</div>
                <div className="text-2xl font-mono-tech font-black text-white">{activeCar.acceleration}s</div>
              </div>
              <div>
                <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">ENGINE SPEC</div>
                <div className="text-xs font-mono-tech font-bold text-zinc-300 truncate">{activeCar.engine}</div>
              </div>
              <div className="col-span-2 pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest block">🇮🇳 INDIAN PRICE</span>
                  <span className="text-xl font-mono-tech font-black text-amber-400">{activeCar.priceInr || activeCar.price}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest block">🇺🇸 INT'L PRICE</span>
                  <span className="text-base font-mono-tech font-bold text-zinc-300">{activeCar.priceUsd || activeCar.price}</span>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setIsTestDriveOpen(true)}
                className="px-4 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK TEST DRIVE</span>
              </button>

              <button
                onClick={() => setIsAudioOpen(true)}
                className="px-4 py-3.5 rounded-xl bg-black/80 hover:bg-zinc-900 border border-red-500/30 text-red-400 font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-red-500 animate-pulse" />
                <span>LISTEN TO EXHAUST</span>
              </button>

              <button
                onClick={() => setIsCompareOpen(true)}
                className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer col-span-2"
              >
                <GitCompare className="w-4 h-4 text-amber-400" />
                <span>COMPARE WITH OTHER SUPERCARS</span>
              </button>
            </div>
          </div>
        </div>

        {/* PHOTO GALLERY */}
        <div className="mt-16">
          <h3 className="text-xl font-serif-luxury font-bold text-white uppercase mb-6 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-red-500" />
            <span>STUDIO GALLERY PHOTOGRAPHY</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {activeCar.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedGalleryImg(img.url)}
                className="rounded-2xl overflow-hidden border border-white/10 group cursor-pointer relative h-56"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-xs font-mono-tech text-white font-bold">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODALS */}
      <EngineAudioSimulatorModal
        isOpen={isAudioOpen}
        onClose={() => setIsAudioOpen(false)}
        vehicle={activeCar}
      />

      <TestDriveBookingModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
        vehicle={activeCar}
      />

      <CompareVehiclesModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        initialVehicle={activeCar}
      />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedGalleryImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedGalleryImg(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-red-400 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedGalleryImg}
                alt="Enlarged"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-white/20"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
