import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Play, Square, Gauge, Flame, X, Sparkles, Zap, Radio } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';

interface EngineAudioSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle?: Vehicle;
}

interface EngineProfile {
  id: string;
  name: string;
  type: string;
  baseFreq: number;
  revMaxFreq: number;
  harmonics: number[];
  cylinderCount: number;
  description: string;
}

const ENGINE_PROFILES: Record<string, EngineProfile> = {
  'twin-turbo-v8': {
    id: 'twin-turbo-v8',
    name: 'BMW M 4.4L TwinPower Turbo V8',
    type: 'V8 Twin-Turbo',
    baseFreq: 85,
    revMaxFreq: 380,
    harmonics: [1.0, 1.5, 2.0, 2.5, 4.0],
    cylinderCount: 8,
    description: 'Deep mechanical rumble building into an aggressive metallic TwinPower crescendo.',
  },
  'atmospheric-v10': {
    id: 'atmospheric-v10',
    name: 'Sant’Agata 5.2L Atmospheric V10',
    type: 'Naturally Aspirated V10',
    baseFreq: 110,
    revMaxFreq: 580,
    harmonics: [1.0, 2.0, 2.5, 3.5, 5.0, 6.0],
    cylinderCount: 10,
    description: 'High-pitch F1 acoustic scream revving to a staggering 8,700 RPM.',
  },
  'quad-turbo-w16': {
    id: 'quad-turbo-w16',
    name: 'Molsheim 8.0L Quad-Turbo W16',
    type: 'W16 Quad-Turbo',
    baseFreq: 70,
    revMaxFreq: 320,
    harmonics: [1.0, 1.25, 2.0, 3.0, 4.0, 8.0],
    cylinderCount: 16,
    description: 'Thunderous earth-shaking low frequency mechanical jet-turbine roaring power.',
  },
  'boxer-6': {
    id: 'boxer-6',
    name: 'Weissach 4.0L Atmospheric Boxer-6',
    type: 'Flat-6 Motorsport',
    baseFreq: 95,
    revMaxFreq: 520,
    harmonics: [1.0, 1.5, 3.0, 4.5],
    cylinderCount: 6,
    description: 'Surgical, crisp, laser-focused Porsche GT Motorsport flat-six acoustic pulse.',
  }
};

export const EngineAudioSimulatorModal: React.FC<EngineAudioSimulatorModalProps> = ({
  isOpen,
  onClose,
  vehicle,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rpm, setRpm] = useState(1200); // 1200 RPM to 8500 RPM
  const [isRevving, setIsRevving] = useState(false);
  const [activeEngineKey, setActiveEngineKey] = useState<string>('twin-turbo-v8');

  // Web Audio Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const mainOscRef = useRef<OscillatorNode | null>(null);
  const subOscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);

  // Match engine profile if vehicle is passed
  useEffect(() => {
    if (vehicle) {
      if (vehicle.engine.toLowerCase().includes('v10')) {
        setActiveEngineKey('atmospheric-v10');
      } else if (vehicle.engine.toLowerCase().includes('w16')) {
        setActiveEngineKey('quad-turbo-w16');
      } else if (vehicle.engine.toLowerCase().includes('boxer') || vehicle.engine.toLowerCase().includes('flat-6')) {
        setActiveEngineKey('boxer-6');
      } else {
        setActiveEngineKey('twin-turbo-v8');
      }
    }
  }, [vehicle]);

  const profile = ENGINE_PROFILES[activeEngineKey] || ENGINE_PROFILES['twin-turbo-v8'];

  // Start synth engine
  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const mainOsc = ctx.createOscillator();
      const subOsc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const masterGain = ctx.createGain();

      mainOsc.type = 'sawtooth';
      subOsc.type = 'square';
      filter.type = 'lowpass';

      // Set base freq from RPM
      const freq = profile.baseFreq + ((rpm - 1000) / 7500) * (profile.revMaxFreq - profile.baseFreq);
      mainOsc.frequency.setValueAtTime(freq, ctx.currentTime);
      subOsc.frequency.setValueAtTime(freq * 0.5, ctx.currentTime);
      filter.frequency.setValueAtTime(freq * 3.5, ctx.currentTime);

      masterGain.gain.setValueAtTime(0.15, ctx.currentTime);

      mainOsc.connect(filter);
      subOsc.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      mainOsc.start();
      subOsc.start();

      mainOscRef.current = mainOsc;
      subOscRef.current = subOsc;
      filterNodeRef.current = filter;
      gainNodeRef.current = masterGain;

      setIsPlaying(true);
    } catch {
      console.warn('Web Audio not supported or blocked');
    }
  };

  const stopAudio = () => {
    if (mainOscRef.current) {
      try {
        mainOscRef.current.stop();
        subOscRef.current?.stop();
        audioCtxRef.current?.close();
      } catch {
        // Safe catch
      }
    }
    mainOscRef.current = null;
    subOscRef.current = null;
    audioCtxRef.current = null;
    setIsPlaying(false);
  };

  // Update frequency live as RPM changes
  useEffect(() => {
    if (isPlaying && audioCtxRef.current && mainOscRef.current && filterNodeRef.current) {
      const ctx = audioCtxRef.current;
      const freq = profile.baseFreq + ((rpm - 1000) / 7500) * (profile.revMaxFreq - profile.baseFreq);
      mainOscRef.current.frequency.setTargetAtTime(freq, ctx.currentTime, 0.05);
      if (subOscRef.current) {
        subOscRef.current.frequency.setTargetAtTime(freq * 0.5, ctx.currentTime, 0.05);
      }
      filterNodeRef.current.frequency.setTargetAtTime(freq * 3.8, ctx.currentTime, 0.05);
    }
  }, [rpm, isPlaying, profile]);

  // Handle Rev hold
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRevving) {
      interval = setInterval(() => {
        setRpm((prev) => Math.min(8500, prev + 250));
      }, 30);
    } else {
      interval = setInterval(() => {
        setRpm((prev) => Math.max(1200, prev - 180));
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isRevving]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel border border-red-500/30 rounded-3xl p-6 md:p-8 text-white shadow-[0_0_80px_rgba(220,38,38,0.2)] overflow-hidden"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-red-600/20 border border-red-500/40 text-red-500">
                <Radio className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono-tech tracking-widest text-red-400 font-bold uppercase">
                  HYPERVAULT ACOUSTIC STUDIO
                </span>
                <h3 className="text-xl md:text-2xl font-serif-luxury font-bold text-white">
                  Exhaust Acoustic Simulator
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                stopAudio();
                onClose();
              }}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-600/20 text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Engine Profile Selection */}
          <div className="my-6 grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {Object.entries(ENGINE_PROFILES).map(([key, p]) => (
              <button
                key={key}
                onClick={() => {
                  if (isPlaying) stopAudio();
                  setActiveEngineKey(key);
                }}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  activeEngineKey === key
                    ? 'bg-red-600/20 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/30 hover:text-zinc-200'
                }`}
              >
                <div className="text-[10px] font-mono-tech font-bold text-red-400 tracking-wider">
                  {p.type}
                </div>
                <div className="text-xs font-bold font-sans truncate mt-0.5">
                  {p.name.split(' ')[0]} {p.name.split(' ')[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Engine Details & Tachometer */}
          <div className="bg-black/60 rounded-2xl border border-white/10 p-6 my-6 text-center relative overflow-hidden">
            {/* Glowing Tachometer Dial Effect */}
            <div className="flex flex-col items-center justify-center relative z-10">
              <div className="text-xs font-mono-tech uppercase text-zinc-400 tracking-widest mb-1">
                ENGINE TACHOMETER
              </div>
              <div className="text-5xl md:text-6xl font-mono-tech font-black text-white tracking-tight flex items-baseline gap-2">
                <span>{rpm}</span>
                <span className="text-lg font-bold text-red-500">RPM</span>
              </div>

              {/* Progress Bar Gauge */}
              <div className="w-full max-w-md h-3 bg-zinc-900 rounded-full mt-4 overflow-hidden border border-white/10 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-amber-500 to-red-600 rounded-full"
                  style={{ width: `${((rpm - 1000) / 7500) * 100}%` }}
                />
              </div>

              {/* Simulated Audio Waves */}
              <div className="flex items-center justify-center gap-1.5 h-12 mt-6">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying
                        ? `${Math.min(48, Math.max(8, (rpm / 8500) * 48 * Math.sin(i + rpm * 0.05)) + 12)}px`
                        : '6px',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-1.5 rounded-full bg-red-500/80"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {!isPlaying ? (
              <button
                onClick={startAudio}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)] cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>START ENGINE IGNITION</span>
              </button>
            ) : (
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={stopAudio}
                  className="px-6 py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Square className="w-4 h-4 fill-current text-red-500" />
                  <span>CUT IGNITION</span>
                </button>

                <button
                  onMouseDown={() => setIsRevving(true)}
                  onMouseUp={() => setIsRevving(false)}
                  onTouchStart={() => setIsRevving(true)}
                  onTouchEnd={() => setIsRevving(false)}
                  className="flex-1 sm:flex-none px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-mono-tech text-xs tracking-wider uppercase font-extrabold flex items-center justify-center gap-2 transition-all shadow-[0_0_40px_rgba(220,38,38,0.7)] cursor-pointer select-none"
                >
                  <Flame className="w-4 h-4 animate-bounce" />
                  <span>HOLD TO REV THROTTLE</span>
                </button>
              </div>
            )}

            <div className="text-center sm:text-right text-[11px] font-mono-tech text-zinc-400">
              {profile.description}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
