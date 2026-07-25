import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Volume2, Gauge, Zap, Compass, CheckCircle2, ShieldAlert, ArrowLeft } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';
import { useAudioEngine } from '../../hooks/useAudioEngine';
import { BackButton } from '../Navigation/BackButton';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onOpen3DShowroom: (vehicle: Vehicle) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onOpen3DShowroom,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const { triggerRev, isPlaying } = useAudioEngine();

  if (!vehicle) return null;

  const currentHeroImage =
    vehicle.gallery[selectedImageIndex]?.url || vehicle.heroImage || vehicle.thumbnail || 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=800&auto=format&fit=crop';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 lg:p-10 lenis-prevent" data-lenis-prevent>
        {/* UNIFIED BACK TO SHOWROOM BUTTON */}
        <BackButton onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-6xl bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-zinc-950/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-600/20 text-white transition-all cursor-pointer flex items-center gap-2 group"
              >
                <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-mono uppercase font-bold hidden sm:inline">Back to Showroom</span>
              </button>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase block">
                  {vehicle.brand} • {vehicle.year}
                </span>
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                  {vehicle.model} <span className="text-zinc-500 text-sm font-normal">{vehicle.variant}</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpen3DShowroom(vehicle)}
                data-cursor="3D STUDIO"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>3D Showroom</span>
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scroll Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-10">
            {/* Top Showcase Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Main Image Stage */}
              <div className="lg:col-span-8 space-y-4">
                <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
                  <img
                    src={currentHeroImage}
                    alt={vehicle.model}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Caption */}
                  {vehicle.gallery[selectedImageIndex] && (
                    <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                      {vehicle.gallery[selectedImageIndex].caption}
                    </div>
                  )}
                </div>

                {/* Thumbnails Strip */}
                {vehicle.gallery.length > 0 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {vehicle.gallery.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                          selectedImageIndex === idx
                            ? 'border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                            : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={item.url} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Spec Telemetry Side Panel */}
              <div className="lg:col-span-4 space-y-6 bg-white/2 p-6 rounded-2xl border border-white/10">
                <div className="pb-3 border-b border-white/10 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-blue-400 block tracking-widest font-bold">Ex-Showroom MSRP</span>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-400">🇮🇳 India Price</span>
                      <span className="text-xl font-mono font-bold text-amber-400">{vehicle.priceInr || vehicle.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-400">🇺🇸 Int'l Price</span>
                      <span className="text-sm font-mono font-semibold text-zinc-300">{vehicle.priceUsd || vehicle.price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-mono py-1 border-b border-white/5">
                    <span className="text-zinc-500">ENGINE:</span>
                    <span className="text-zinc-200 font-medium text-right">{vehicle.engine}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono py-1 border-b border-white/5">
                    <span className="text-zinc-500">TRANSMISSION:</span>
                    <span className="text-zinc-200 font-medium text-right">{vehicle.transmission}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono py-1 border-b border-white/5">
                    <span className="text-zinc-500">DRIVETRAIN:</span>
                    <span className="text-zinc-200 font-medium text-right">{vehicle.drivetrain}</span>
                  </div>
                </div>

                {/* Sound Rev */}
                <button
                  onClick={() =>
                    triggerRev(
                      vehicle.horsepower > 1000 ? 'W16' : vehicle.horsepower > 700 ? 'V10' : 'V8'
                    )
                  }
                  className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider transition-all ${
                    isPlaying
                      ? 'border-blue-500 bg-blue-600/30 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse'
                      : 'border-white/15 bg-white/5 text-zinc-300 hover:border-blue-400 hover:text-white'
                  }`}
                >
                  <Volume2 className="w-4 h-4 text-blue-400" />
                  <span>{isPlaying ? 'Synthesizing Audio...' : 'Acoustic Sound Rev'}</span>
                </button>
              </div>
            </div>

            {/* Performance Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {vehicle.performanceMetrics.map((pm, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/3 border border-white/5">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">{pm.label}</div>
                  <div className="text-2xl font-mono font-bold text-white mt-1">{pm.value}</div>
                  {pm.subtext && (
                    <div className="text-[9px] font-mono text-blue-400 mt-0.5">{pm.subtext}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Narrative & Craftsmanship */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase font-sans tracking-wide">
                Engineering & Heritage Story
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {vehicle.description}
              </p>
              {vehicle.historyAndCraftsmanship && (
                <p className="text-sm text-zinc-400 font-light leading-relaxed border-l-2 border-blue-500 pl-4 py-1 italic bg-blue-950/10">
                  "{vehicle.historyAndCraftsmanship}"
                </p>
              )}
            </div>

            {/* Features List */}
            {vehicle.features.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400">
                  Key Aerodynamic & Technical Innovations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {vehicle.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/2 border border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
