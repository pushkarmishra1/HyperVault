import React from 'react';
import { motion } from 'motion/react';
import { BrandInfo } from '../../types/campus';
import { BRANDS_INFO } from '../../data/brands';
import { Compass, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface CampusMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBrand: (brand: BrandInfo) => void;
  selectedBrand: BrandInfo | null;
}

export const CampusMapModal: React.FC<CampusMapModalProps> = ({
  isOpen,
  onClose,
  onSelectBrand,
  selectedBrand,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl font-sans select-none lenis-prevent" data-lenis-prevent>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-950 border border-blue-500/40 w-full max-w-4xl p-6 sm:p-8 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] relative overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400">
              <Compass className="w-6 h-6 animate-spin" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-blue-400 uppercase font-bold block">
                ARCHITECTURAL BLUEPRINT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-sans">
                HYPERVAULT Campus Map
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all"
          >
            ✕ CLOSE
          </button>
        </div>

        {/* Blueprint Layout Grid */}
        <div className="relative w-full aspect-[16/9] bg-slate-900/80 rounded-2xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
          {/* Top Apex */}
          <div className="flex justify-center">
            {BRANDS_INFO.filter((b) => b.wing === 'center').map((brand) => (
              <button
                key={brand.id}
                onClick={() => {
                  onSelectBrand(brand);
                  onClose();
                }}
                className={`p-4 px-8 rounded-2xl border transition-all text-center ${
                  selectedBrand?.id === brand.id
                    ? 'bg-amber-500/30 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.5)] scale-105'
                    : 'bg-black/80 border-amber-500/30 hover:border-amber-400'
                }`}
              >
                <span className="text-[9px] font-mono text-amber-400 uppercase block font-bold">
                  CENTER APEX
                </span>
                <span className="text-sm font-black text-white uppercase font-sans">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>

          {/* Central Corridor & Wings */}
          <div className="grid grid-cols-2 gap-8 my-4">
            {/* Left Wing */}
            <div className="space-y-2 border-r border-dashed border-white/20 pr-4">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-bold mb-2">
                LEFT WING (WEST)
              </span>
              <div className="grid grid-cols-2 gap-2">
                {BRANDS_INFO.filter((b) => b.wing === 'left').map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => {
                      onSelectBrand(brand);
                      onClose();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedBrand?.id === brand.id
                        ? 'bg-blue-600/30 border-blue-400 text-white font-bold'
                        : 'bg-black/60 border-white/10 hover:border-blue-400/50 text-zinc-300'
                    }`}
                  >
                    <span className="text-xs font-bold font-sans uppercase block">
                      {brand.name}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400">
                      {brand.vehicleCount} Models
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Wing */}
            <div className="space-y-2 pl-4">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-bold mb-2">
                RIGHT WING (EAST)
              </span>
              <div className="grid grid-cols-2 gap-2">
                {BRANDS_INFO.filter((b) => b.wing === 'right').map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => {
                      onSelectBrand(brand);
                      onClose();
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedBrand?.id === brand.id
                        ? 'bg-blue-600/30 border-blue-400 text-white font-bold'
                        : 'bg-black/60 border-white/10 hover:border-blue-400/50 text-zinc-300'
                    }`}
                  >
                    <span className="text-xs font-bold font-sans uppercase block">
                      {brand.name}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400">
                      {brand.vehicleCount} Models
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Atrium Hub */}
          <div className="flex justify-center pt-2">
            <div className="bg-blue-950/80 border border-blue-500/50 p-3 px-8 rounded-full text-center">
              <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest">
                MAIN RECEPTION ATRIUM (YOU ARE HERE)
              </span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Active Wing
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Exclusive Apex
            </span>
          </div>
          <span>CLICK ANY PAVILION TO INITIATE CAMERA TRAVEL</span>
        </div>
      </motion.div>
    </div>
  );
};
