import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandInfo } from '../../types/campus';
import { Compass, ShieldCheck, Zap, Layers, Sparkles, Lock, Unlock } from 'lucide-react';
import { useAudioEngine } from '../../hooks/useAudioEngine';

interface CameraTravelTransitionProps {
  brand: BrandInfo;
  onArrival: () => void;
}

export const CameraTravelTransition: React.FC<CameraTravelTransitionProps> = ({ brand, onArrival }) => {
  const [stage, setStage] = useState<'entering' | 'hallway' | 'doors' | 'arrived'>('entering');
  const [progress, setProgress] = useState(0);
  const { triggerPneumaticDoor } = useAudioEngine();

  useEffect(() => {
    // Stage 1: Entering corridor (0s - 0.8s)
    const timer1 = setTimeout(() => {
      setStage('hallway');
    }, 800);

    // Stage 2: Hallway physical travel progress (0.8s - 2.2s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 12;
      });
    }, 120);

    // Stage 3: Pneumatic doors opening sound & animation (2.2s - 3.0s)
    const timer2 = setTimeout(() => {
      setStage('doors');
      triggerPneumaticDoor();
    }, 2200);

    // Stage 4: Arrived inside Pavilion (3.2s)
    const timer3 = setTimeout(() => {
      setStage('arrived');
      onArrival();
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, [onArrival, triggerPneumaticDoor]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-8 font-sans overflow-hidden bg-black/60 backdrop-blur-sm">
      {/* Cinematic Hallway Vignette & Scanning Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-40 animate-pulse" />

      {/* Glass Corridor Door Frame Animation (Opening outward) */}
      <AnimatePresence>
        {stage === 'doors' && (
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10">
            {/* Left Glass Door Panel sliding left */}
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: '-100%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-1/2 h-full bg-gradient-to-r from-slate-900/90 to-blue-950/80 border-r border-blue-400/50 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            />
            {/* Right Glass Door Panel sliding right */}
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-1/2 h-full bg-gradient-to-l from-slate-900/90 to-blue-950/80 border-l border-blue-400/50 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            />
          </div>
        )}
      </AnimatePresence>

      {/* Top Header HUD Telemetry */}
      <div className="relative z-20 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 bg-black/80 p-3 px-5 rounded-full border border-blue-500/40 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-bold">
            PHYSICAL CAMERA TRAVEL • CORRIDOR {brand.wing.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-black/80 p-3 px-5 rounded-full border border-white/15 backdrop-blur-md text-xs font-mono text-zinc-300">
          <Compass className="w-4 h-4 text-amber-400 animate-spin" />
          <span>DESTINATION: {brand.name.toUpperCase()}</span>
        </div>
      </div>

      {/* Center Arrival Announcement */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black/85 p-8 sm:p-12 rounded-3xl border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl max-w-xl w-full"
          style={{ borderColor: brand.color }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">
            {stage === 'doors' ? (
              <>
                <Unlock className="w-4 h-4 text-emerald-400" />
                <span>Pneumatic Doors Opening</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Navigating Glass Hallway</span>
              </>
            )}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-sans tracking-tight mb-2">
            {brand.name}
          </h2>

          <p className="text-xs font-mono text-zinc-300 mb-6">{brand.tagline}</p>

          {/* Travel Progress Bar */}
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5 border border-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: brand.color || '#38bdf8',
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mt-2">
            <span>TRANSIT TELEMETRY: {progress}%</span>
            <span>VELOCITY: 4.8 M/S</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-400" />
          <span>HYPERVAULT CAMPUS NETWORK</span>
        </div>
        <div>CONTINUOUS UNBROKEN SHOT • NO CUTS</div>
      </div>
    </div>
  );
};
