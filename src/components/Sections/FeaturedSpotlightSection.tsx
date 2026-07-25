import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Gauge, Shield, Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';
import { Vehicle } from '../../types/vehicle';

interface FeaturedSpotlightSectionProps {
  onInspectVehicle: (vehicle: Vehicle) => void;
  onOpenTestDrive: (vehicle?: Vehicle) => void;
}

export const FeaturedSpotlightSection: React.FC<FeaturedSpotlightSectionProps> = ({
  onInspectVehicle,
  onOpenTestDrive,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredList = VEHICLES.slice(0, 6); // Top 6 flagship supercars

  const currentCar = featuredList[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredList.length) % featuredList.length);
  };

  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-red-500/30 text-red-400 text-[10px] font-mono-tech tracking-[0.2em] uppercase font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>APEX SPOTLIGHT • HYPERCAR FILMSTRIP</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              FLAGSHIP <span className="red-text-gradient">SHOWCASE</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-600/20 text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono-tech text-zinc-400 font-bold px-2">
              0{activeIndex + 1} / 0{featuredList.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-600/20 text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* FEATURED DISPLAY CARD */}
        <div className="glass-panel border border-white/10 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden">
          {/* Background Ambient Car Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-white/10 p-6">
              <img
                src={currentCar.heroImage}
                alt={currentCar.model}
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-700 cursor-pointer"
                onClick={() => onInspectVehicle(currentCar)}
              />
            </div>
          </div>

          {/* Car Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="px-3 py-1 rounded bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-mono-tech font-bold uppercase tracking-widest">
                {currentCar.brand} • {currentCar.year}
              </span>
              <h3 className="text-3xl md:text-5xl font-serif-luxury font-black uppercase text-white tracking-tight mt-2">
                {currentCar.model}
              </h3>
              <p className="mt-3 text-xs md:text-sm text-zinc-300 font-sans leading-relaxed">
                {currentCar.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-black/60 border border-white/10 rounded-2xl p-4 text-center">
              <div>
                <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">POWER</div>
                <div className="text-lg font-mono-tech font-black text-red-500">{currentCar.horsepower} HP</div>
              </div>
              <div>
                <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">0-60 MPH</div>
                <div className="text-lg font-mono-tech font-black text-white">{currentCar.acceleration}s</div>
              </div>
              <div>
                <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">MAX SPEED</div>
                <div className="text-lg font-mono-tech font-black text-white">{currentCar.topSpeed} MPH</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onInspectVehicle(currentCar)}
                className="px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all cursor-pointer"
              >
                <span>INSPECT SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenTestDrive(currentCar)}
                className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono-tech text-xs tracking-wider uppercase font-bold transition-all cursor-pointer"
              >
                BOOK TEST DRIVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
