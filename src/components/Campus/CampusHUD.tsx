import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandInfo } from '../../types/campus';
import { BRANDS_INFO } from '../../data/brands';
import {
  Compass,
  MapPin,
  Volume2,
  VolumeX,
  ShieldCheck,
  Grid,
  Headphones,
  Sparkles,
  ChevronRight,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CampusHUDProps {
  selectedBrand: BrandInfo | null;
  onSelectBrand: (brand: BrandInfo) => void;
  onReturnToAtrium: () => void;
  onOpenCampusMap: () => void;
  onOpenConcierge: () => void;
  onOpenCinema?: () => void;
}

export const CampusHUD: React.FC<CampusHUDProps> = ({
  selectedBrand,
  onSelectBrand,
  onReturnToAtrium,
  onOpenCampusMap,
  onOpenConcierge,
  onOpenCinema,
}) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <>
      {/* TOP FLOATING CAMPUS HUD BAR */}
      <header className="fixed top-6 left-6 right-6 z-40 flex items-center justify-between pointer-events-none font-sans select-none">
        {/* Brand Identity / Campus Logo */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={onReturnToAtrium}
            className="flex items-center gap-3 bg-black/85 p-3 px-5 rounded-2xl border border-white/15 backdrop-blur-xl hover:border-blue-500/50 transition-all shadow-[0_0_25px_rgba(0,0,0,0.8)] group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-black text-white text-xs tracking-tighter">
              HV
            </div>
            <div className="text-left">
              <span className="text-[9px] font-mono tracking-[0.25em] text-red-400 uppercase font-bold block">
                HYPERVAULT
              </span>
              <span className="text-xs font-bold text-white tracking-tight uppercase group-hover:text-blue-300 transition-colors">
                Automotive Campus
              </span>
            </div>
          </button>

          {/* Current Location Badge */}
          {selectedBrand && (
            <div className="hidden md:flex items-center gap-2 bg-blue-950/60 p-3 px-4 rounded-2xl border border-blue-500/40 backdrop-blur-xl text-xs font-mono text-blue-300">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>PAVILION: {selectedBrand.name.toUpperCase()}</span>
            </div>
          )}
        </div>

        {/* Right HUD Controls */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* 3D Showroom Direct Button */}
          <button
            onClick={() => navigate('/showroom')}
            data-cursor="SHOWROOM"
            className="px-4 py-3 rounded-2xl bg-blue-600 border border-blue-400 backdrop-blur-xl text-xs font-mono text-white font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">Inspect 3D Car</span>
          </button>

          {/* 3D Hero Film Cinema Toggle */}
          {onOpenCinema && (
            <button
              onClick={onOpenCinema}
              data-cursor="CINEMA"
              className="px-4 py-3 rounded-2xl bg-black/80 border border-blue-500/40 backdrop-blur-xl text-xs font-mono text-blue-300 hover:text-white hover:border-blue-400 transition-all flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">3D Hero Film</span>
            </button>
          )}

          {/* All Vehicles Catalog Button */}
          <button
            onClick={() => navigate('/collection')}
            data-cursor="COLLECTION"
            className="px-4 py-3 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-xl text-xs font-mono text-zinc-300 hover:text-white hover:border-blue-400 transition-all flex items-center gap-2"
          >
            <Grid className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">All Supercars</span>
          </button>

          {/* Interactive Campus Map Blueprint */}
          <button
            onClick={onOpenCampusMap}
            data-cursor="BLUEPRINT"
            className="px-4 py-3 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-xl text-xs font-mono text-zinc-300 hover:text-white hover:border-blue-400 transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Campus Map</span>
          </button>

          {/* VIP Concierge Desk */}
          <button
            onClick={onOpenConcierge}
            data-cursor="CONCIERGE"
            className="px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all flex items-center gap-2"
          >
            <Headphones className="w-4 h-4" />
            <span className="hidden sm:inline">VIP Desk</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-xl text-zinc-300 hover:text-white transition-all"
            title={soundEnabled ? 'Mute Soundscape' : 'Enable Soundscape'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-blue-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-zinc-500" />
            )}
          </button>
        </div>
      </header>

      {/* BRAND DIRECTORY DRAWER */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
            {/* Backdrop click close */}
            <div className="absolute inset-0" onClick={() => setDrawerOpen(false)} />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md h-full bg-slate-950 border-l border-white/15 p-8 flex flex-col justify-between overflow-y-auto select-none"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase font-bold block">
                      HYPERVAULT CAMPUS
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white font-sans">
                      Automotive Directory
                    </h3>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all text-xs font-mono"
                  >
                    ✕
                  </button>
                </div>

                {/* Brands List grouped by Wings */}
                <div className="space-y-6">
                  {/* Left Wing */}
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-3 font-semibold">
                      LEFT WING • WEST PAVILIONS
                    </span>
                    <div className="space-y-2">
                      {BRANDS_INFO.filter((b) => b.wing === 'left').map((b) => (
                        <button
                          key={b.id}
                          onClick={() => {
                            onSelectBrand(b);
                            setDrawerOpen(false);
                          }}
                          className="w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all flex items-center justify-between text-left group"
                        >
                          <div>
                            <span className="text-sm font-bold text-white uppercase block font-sans group-hover:text-blue-400">
                              {b.name}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">
                              {b.vehicleCount} Models • {b.country}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Wing */}
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-3 font-semibold">
                      RIGHT WING • EAST PAVILIONS
                    </span>
                    <div className="space-y-2">
                      {BRANDS_INFO.filter((b) => b.wing === 'right').map((b) => (
                        <button
                          key={b.id}
                          onClick={() => {
                            onSelectBrand(b);
                            setDrawerOpen(false);
                          }}
                          className="w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all flex items-center justify-between text-left group"
                        >
                          <div>
                            <span className="text-sm font-bold text-white uppercase block font-sans group-hover:text-blue-400">
                              {b.name}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">
                              {b.vehicleCount} Models • {b.country}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Center Apex */}
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-3 font-semibold">
                      CENTER APEX • EXCLUSIVE HALL
                    </span>
                    {BRANDS_INFO.filter((b) => b.wing === 'center').map((b) => (
                      <button
                        key={b.id}
                        onClick={() => {
                          onSelectBrand(b);
                          setDrawerOpen(false);
                        }}
                        className="w-full p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 transition-all flex items-center justify-between text-left group"
                      >
                        <div>
                          <span className="text-sm font-bold text-amber-300 uppercase block font-sans">
                            {b.name}
                          </span>
                          <span className="text-[10px] font-mono text-amber-400/80">
                            {b.vehicleCount} Megacars • {b.country}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Designed & Developed by Pushkar Mishra
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
