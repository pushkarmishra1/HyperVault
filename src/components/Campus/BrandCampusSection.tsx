import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Compass, Flag, Shield, Zap, Globe } from 'lucide-react';
import { BRANDS_INFO } from '../../data/brands';
import { BrandInfo } from '../../types/campus';
import { VEHICLES } from '../../data/vehicles';

interface BrandCampusSectionProps {
  onSelectBrand: (brand: BrandInfo) => void;
}

export const BrandCampusSection: React.FC<BrandCampusSectionProps> = ({ onSelectBrand }) => {
  const [hoveredBrandId, setHoveredBrandId] = useState<string | null>(null);

  const leftWing = BRANDS_INFO.filter((b) => b.wing === 'left');
  const rightWing = BRANDS_INFO.filter((b) => b.wing === 'right');
  const centerApex = BRANDS_INFO.find((b) => b.wing === 'center');

  // Helper to get flagship vehicle hero image for backdrop
  const getFlagshipImage = (brandId: string) => {
    const car = VEHICLES.find((v) => v.brand.toLowerCase().includes(brandId.toLowerCase()) || brandId.toLowerCase().includes(v.brand.toLowerCase()));
    return car?.heroImage || 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop';
  };

  const getFlagshipHp = (brandId: string) => {
    const car = VEHICLES.find((v) => v.brand.toLowerCase().includes(brandId.toLowerCase()) || brandId.toLowerCase().includes(v.brand.toLowerCase()));
    return car ? `${car.horsepower} HP` : '650+ HP';
  };

  const getFlagshipTopSpeed = (brandId: string) => {
    const car = VEHICLES.find((v) => v.brand.toLowerCase().includes(brandId.toLowerCase()) || brandId.toLowerCase().includes(v.brand.toLowerCase()));
    return car ? `${car.topSpeed} MPH` : '200+ MPH';
  };

  return (
    <section id="campus-section" className="relative w-full py-28 bg-[#050505] text-white overflow-hidden">
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-red-500/30 text-red-400 text-[10px] font-mono-tech tracking-[0.2em] uppercase font-bold mb-4">
            <Compass className="w-3.5 h-3.5 text-red-500 animate-spin-slow" />
            <span>ARCHITECTURAL MAP • 9 LUXURY PAVILIONS</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            THE HYPERVAULT <span className="red-text-gradient">CAMPUS</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-sans max-w-xl mx-auto leading-relaxed">
            Select an elite pavilion to initiate a seamless camera transit directly into the private showroom suite.
          </p>
        </div>

        {/* CONNECTING ELEGANT PATHWAYS (SVG OVERLAY) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="laserLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#dc2626" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Connecting arcs between left wing, center apex, and right wing */}
            <path
              d="M 200 350 Q 500 200 640 180"
              stroke="url(#laserLine)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6,6"
              className="opacity-40 animate-pulse"
            />
            <path
              d="M 1080 350 Q 780 200 640 180"
              stroke="url(#laserLine)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6,6"
              className="opacity-40 animate-pulse"
            />
          </svg>
        </div>

        {/* CAMPUS LAYOUT GRID: LEFT WING | CENTER APEX | RIGHT WING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* LEFT WING PAVILIONS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <h3 className="font-mono-tech text-xs tracking-widest text-zinc-300 uppercase font-bold">
                WEST WING • BAVARIAN & MARANELLO
              </h3>
            </div>

            {leftWing.map((b) => (
              <motion.div
                key={b.id}
                onMouseEnter={() => setHoveredBrandId(b.id)}
                onMouseLeave={() => setHoveredBrandId(null)}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => onSelectBrand(b)}
                className="group relative rounded-2xl glass-panel border border-white/10 hover:border-red-500/50 p-5 overflow-hidden transition-all duration-500 cursor-pointer shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={getFlagshipImage(b.id)}
                    alt={b.name}
                    className="w-full h-full object-cover object-center opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-mono-tech uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-red-400 font-bold border border-white/10">
                        {b.country} • {b.founded}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif-luxury font-bold text-white group-hover:text-red-400 transition-colors">
                      {b.name}
                    </h4>

                    <p className="text-xs text-zinc-400 font-sans mt-1 line-clamp-1 max-w-sm">
                      {b.tagline}
                    </p>

                    <div className="flex items-center gap-4 mt-3 text-[10px] font-mono-tech text-zinc-300">
                      <span>POWER: <strong className="text-red-400 font-bold">{getFlagshipHp(b.id)}</strong></span>
                      <span>•</span>
                      <span>TOP SPEED: <strong className="text-white font-bold">{getFlagshipTopSpeed(b.id)}</strong></span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-red-600/20 group-hover:bg-red-600 border border-red-500/40 text-red-400 group-hover:text-white transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER APEX PAVILION (KOENIGSEGG CROWN JEWEL) */}
          {centerApex && (
            <div className="lg:col-span-2 flex flex-col items-center justify-center my-4 lg:my-0">
              <div className="w-full text-center mb-3">
                <span className="text-[9px] font-mono-tech text-amber-400 uppercase tracking-widest font-bold block">
                  APEX HYPERCAR MONUMENT
                </span>
              </div>

              <motion.div
                onMouseEnter={() => setHoveredBrandId(centerApex.id)}
                onMouseLeave={() => setHoveredBrandId(null)}
                whileHover={{ scale: 1.04 }}
                onClick={() => onSelectBrand(centerApex)}
                className="group relative w-full h-full min-h-[420px] rounded-3xl glass-panel border-2 border-amber-500/50 hover:border-amber-400 p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-pointer shadow-[0_0_50px_rgba(234,179,8,0.25)] text-center"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={getFlagshipImage(centerApex.id)}
                    alt={centerApex.name}
                    className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-55 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-mono-tech tracking-widest uppercase font-bold mb-2">
                    {centerApex.country} • CROWN JEWEL
                  </span>
                  <h4 className="text-2xl font-serif-luxury font-black text-white group-hover:text-amber-300 transition-colors">
                    {centerApex.name}
                  </h4>
                </div>

                <div className="relative z-10 py-4">
                  <div className="text-3xl font-mono-tech font-black text-amber-400">
                    2,300 HP
                  </div>
                  <div className="text-[10px] font-mono-tech text-zinc-300 uppercase tracking-widest mt-1">
                    MEGACAR LIGHT SPEED POWER
                  </div>
                </div>

                <div className="relative z-10">
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-black font-mono-tech text-xs tracking-wider uppercase font-black flex items-center justify-center gap-2 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] transition-all">
                    <span>ENTER APEX SUITE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          {/* RIGHT WING PAVILIONS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center justify-end gap-3 pb-3 border-b border-white/10 text-right">
              <h3 className="font-mono-tech text-xs tracking-widest text-zinc-300 uppercase font-bold">
                EAST WING • AFFALTERBACH & WEISSACH
              </h3>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            </div>

            {rightWing.map((b) => (
              <motion.div
                key={b.id}
                onMouseEnter={() => setHoveredBrandId(b.id)}
                onMouseLeave={() => setHoveredBrandId(null)}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => onSelectBrand(b)}
                className="group relative rounded-2xl glass-panel border border-white/10 hover:border-amber-500/50 p-5 overflow-hidden transition-all duration-500 cursor-pointer shadow-xl text-right"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={getFlagshipImage(b.id)}
                    alt={b.name}
                    className="w-full h-full object-cover object-center opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-amber-600/20 group-hover:bg-amber-500 border border-amber-500/40 text-amber-400 group-hover:text-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div>
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <span className="text-[9px] font-mono-tech uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-amber-400 font-bold border border-white/10">
                        {b.country} • {b.founded}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif-luxury font-bold text-white group-hover:text-amber-400 transition-colors">
                      {b.name}
                    </h4>

                    <p className="text-xs text-zinc-400 font-sans mt-1 line-clamp-1 max-w-sm">
                      {b.tagline}
                    </p>

                    <div className="flex items-center justify-end gap-4 mt-3 text-[10px] font-mono-tech text-zinc-300">
                      <span>POWER: <strong className="text-amber-400 font-bold">{getFlagshipHp(b.id)}</strong></span>
                      <span>•</span>
                      <span>TOP SPEED: <strong className="text-white font-bold">{getFlagshipTopSpeed(b.id)}</strong></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
