import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Zap, Volume2, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';

interface HeroSectionProps {
  heroVehicle: Vehicle;
  onExploreCampus: () => void;
  onInspectVehicle: (vehicle: Vehicle) => void;
  onOpenAudioEngine: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroVehicle,
  onExploreCampus,
  onInspectVehicle,
  onOpenAudioEngine,
}) => {
  const { scrollY } = useScroll();

  // Parallax background movement
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  
  // Parallax car zoom effect while scrolling
  const carScale = useTransform(scrollY, [0, 800], [1, 1.22]);
  const carY = useTransform(scrollY, [0, 800], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  return (
    <section className="relative w-full min-h-[100dvh] md:h-screen md:min-h-[750px] overflow-hidden flex flex-col justify-between bg-black text-white select-none py-4 md:py-0">
      {/* 1. PARALLAX LUXURY SHOWROOM BACKDROP */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 scale-105"
      >
        <img
          src="https://images.splitshire.com/full/The-BMW-M5-Performing-a-Drift_29sIu.png"
          alt="Showroom Architecture"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-75 contrast-125"
        />
        {/* Dark Radial Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.85)_100%)]" />
      </motion.div>

      {/* 2. ATMOSPHERIC AMBIENT GLOW & PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-600/20 via-amber-600/10 to-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* 3. CENTERPIECE: STUNNING BMW M5 COMPETITION WITH SUBTLE GLOWING HEADLIGHTS */}
      {heroVehicle.heroImage ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ scale: carScale, y: carY, opacity: heroOpacity }}
            className="relative w-full max-w-5xl px-4 flex justify-center items-center pointer-events-auto"
          >
            {/* Subtle Headlight Glow Beams */}
            <div className="absolute top-1/2 left-[28%] w-32 h-16 bg-blue-400/40 blur-2xl rounded-full animate-headlight pointer-events-none" />
            <div className="absolute top-1/2 right-[28%] w-32 h-16 bg-blue-400/40 blur-2xl rounded-full animate-headlight pointer-events-none" />
            
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-red-600/20 blur-3xl rounded-full pointer-events-none" />

            {/* Centered BMW M5 Competition Image */}
            <img
              src={heroVehicle.heroImage}
              alt={heroVehicle.model}
              className="w-full h-auto max-h-[520px] object-cover rounded-2xl border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-transform duration-700 hover:scale-[1.01] cursor-pointer"
              onClick={() => onInspectVehicle(heroVehicle)}
            />
          </motion.div>
        </div>
      ) : null}

      {/* 4. HERO TOP HEADLINE & BRAND STATEMENT */}
      <div className="relative z-20 pt-28 md:pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-red-500/30 text-red-400 text-[10px] md:text-xs font-mono-tech tracking-[0.25em] uppercase font-bold mb-4 shadow-[0_0_20px_rgba(220,38,38,0.2)]"
        >
          <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          <span>HYPERVAULT FLAGSHIP MONUMENT • BAVARIAN M POWER</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white uppercase leading-[0.9] drop-shadow-2xl"
        >
          WHERE MACHINES <br />
          <span className="metallic-text-gradient font-black">BECOME ART</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 max-w-xl mx-auto text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed"
        >
          An immersive digital sanctuary showcasing the world’s most elite hypercars, handcrafted engineering, and acoustic mastery.
        </motion.p>
      </div>

      {/* 5. HERO BOTTOM QUICK SPECS BAR & ACTION BUTTONS */}
      <div className="relative z-20 pb-8 md:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center gap-6">
        {/* Floating Quick Specs Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="glass-panel border border-white/10 rounded-2xl px-4 sm:px-6 py-3 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-10 text-center shadow-2xl backdrop-blur-2xl w-full sm:w-auto"
        >
          <div>
            <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">HORSEPOWER</div>
            <div className="text-sm sm:text-lg font-mono-tech font-black text-red-500">{heroVehicle.horsepower} HP</div>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">0 - 60 MPH</div>
            <div className="text-sm sm:text-lg font-mono-tech font-black text-white">{heroVehicle.acceleration}s</div>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">TOP SPEED</div>
            <div className="text-sm sm:text-lg font-mono-tech font-black text-white">{heroVehicle.topSpeed} MPH</div>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">PRICE TAG</div>
            <div className="text-sm sm:text-lg font-mono-tech font-black text-amber-400">{heroVehicle.price}</div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onExploreCampus}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-zinc-900 hover:from-red-500 hover:to-red-600 text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)] cursor-pointer group min-h-[44px]"
          >
            <span>ENTER BRAND CAMPUS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onInspectVehicle(heroVehicle)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-red-500/50 text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-xl min-h-[44px]"
          >
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>INSPECT BMW M5</span>
          </button>

          <button
            onClick={onOpenAudioEngine}
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-black/60 hover:bg-zinc-900 border border-red-500/40 text-red-400 hover:text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg min-h-[44px]"
          >
            <Volume2 className="w-4 h-4 text-red-500 animate-pulse" />
            <span>LISTEN TO EXHAUST</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="pt-2 flex flex-col items-center gap-1 text-[10px] font-mono-tech text-zinc-400 tracking-widest uppercase opacity-70 animate-bounce">
          <span>SCROLL TO EXPLORE CAMPUS</span>
          <ChevronDown className="w-4 h-4 text-red-500" />
        </div>
      </div>
    </section>
  );
};
