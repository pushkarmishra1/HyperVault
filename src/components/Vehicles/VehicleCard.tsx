import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Gauge, Zap, Volume2 } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';
import { useAudioEngine } from '../../hooks/useAudioEngine';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect }) => {
  const { triggerRev, isPlaying } = useAudioEngine();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      onClick={() => onSelect(vehicle)}
      data-cursor="INSPECT"
      className="group relative rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-blue-500/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] flex flex-col justify-between cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-900">
        <img
          src={vehicle.thumbnail || vehicle.heroImage || 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=800&auto=format&fit=crop'}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Brand Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
            {vehicle.brand}
          </span>
          {vehicle.isHero && (
            <span className="px-2.5 py-1 rounded-full border border-blue-500/40 bg-blue-950/60 text-[10px] font-mono text-blue-400 font-semibold uppercase">
              Flagship
            </span>
          )}
        </div>

        {/* Sound Rev Quick Trigger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            triggerRev(vehicle.horsepower > 1000 ? 'W16' : vehicle.horsepower > 700 ? 'V10' : 'V8');
          }}
          className={`absolute top-3 right-3 z-10 w-11 h-11 rounded-full border transition-all flex items-center justify-center ${
            isPlaying
              ? 'border-blue-500 bg-blue-600/30 text-blue-300 animate-pulse'
              : 'border-white/20 bg-black/60 text-zinc-300 hover:border-blue-400 hover:text-white'
          }`}
          title="Rev Engine"
        >
          <Volume2 className="w-4 h-4" />
        </button>

        {/* Bottom Specs Pill */}
        <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-mono text-zinc-300">
          <span className="flex items-center gap-1.5 text-blue-400">
            <Gauge className="w-3.5 h-3.5" /> {vehicle.acceleration}s (0-60)
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> {vehicle.horsepower} HP
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold uppercase text-white font-sans tracking-wide group-hover:text-blue-300 transition-colors">
            {vehicle.model}
          </h3>
          <p className="text-xs text-zinc-400 line-clamp-2 mt-1 font-light leading-relaxed">
            {vehicle.tagline || vehicle.description}
          </p>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase block font-sans tracking-wide">Starting MSRP</span>
            <div className="flex flex-col">
              <span className="text-amber-400 font-bold">🇮🇳 {vehicle.priceInr || vehicle.price}</span>
              <span className="text-zinc-400 text-[10px]">🇺🇸 {vehicle.priceUsd || vehicle.price}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-blue-400 group-hover:translate-x-1 transition-transform">
            <span>SPECIFICATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
