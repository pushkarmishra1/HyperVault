import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Shield, Sparkles, Check, Flame, ChevronRight, Layers } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';

interface BespokePaint {
  name: string;
  hex: string;
  finish: string;
  extraPrice: string;
}

const BESPOKE_PAINTS: BespokePaint[] = [
  { name: 'Frozen Dark Metallic Grey', hex: '#262626', finish: 'Matte Satin', extraPrice: '$8,500' },
  { name: 'Isle of Man Emerald Green', hex: '#064e3b', finish: 'High Gloss Metallic', extraPrice: '$11,000' },
  { name: 'Marina Bay Deep Blue', hex: '#1e3a8a', finish: 'Pearl Metallic', extraPrice: '$9,200' },
  { name: 'Scuderia Rosso Corsa Red', hex: '#dc2626', finish: 'Triple-Coat Gloss', extraPrice: '$14,500' },
  { name: 'Molsheim Acid Yellow', hex: '#eab308', finish: 'Satin High Gloss', extraPrice: '$12,000' },
  { name: 'Sant’Agata Matte Black', hex: '#0f172a', finish: 'Stealth Matte', extraPrice: '$10,500' },
];

const WHEEL_OPTIONS = [
  { id: 'carbon', name: '21" Forged Lightweight Carbon Fiber', extraPrice: '$16,000' },
  { id: 'gold', name: '20" Satin Gold Motorsport Centerlock', extraPrice: '$12,500' },
  { id: 'black', name: '21" Matte Jet Black Double-Spoke', extraPrice: '$8,000' },
];

export const AetherBespokeCustomizer: React.FC = () => {
  const [selectedVehicle] = useState(VEHICLES[0]); // Default BMW M5
  const [selectedPaint, setSelectedPaint] = useState<BespokePaint>(BESPOKE_PAINTS[0]);
  const [selectedWheel, setSelectedWheel] = useState(WHEEL_OPTIONS[0]);
  const [hasAeroPackage, setHasAeroPackage] = useState(true);
  const [hasTitaniumExhaust, setHasTitaniumExhaust] = useState(true);

  return (
    <section id="bespoke-section" className="relative w-full py-28 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-[10px] font-mono-tech tracking-[0.2em] uppercase font-bold mb-3">
            <Palette className="w-3.5 h-3.5 text-amber-400" />
            <span>HYPERVAULT BESPOKE ATELIER • CUSTOM SPECIFICATION</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            DESIGN YOUR <span className="metallic-text-gradient">MASTERPIECE</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-sans max-w-xl mx-auto leading-relaxed">
            Select bespoke paints, carbon aerodynamics, and forged wheels with real-time visual specification feedback.
          </p>
        </div>

        {/* CUSTOMIZER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: VISUAL PREVIEW CANVAS */}
          <div className="lg:col-span-7 glass-panel border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden shadow-2xl">
            {/* Paint Aura Glow */}
            <div
              className="absolute inset-0 opacity-20 transition-all duration-700 blur-3xl rounded-full"
              style={{ backgroundColor: selectedPaint.hex }}
            />

            {/* Top Specification Badge */}
            <div className="w-full flex justify-between items-center z-10">
              <div>
                <span className="text-[10px] font-mono-tech uppercase text-zinc-400 tracking-widest block">
                  BESPOKE MODEL
                </span>
                <span className="font-serif-luxury text-lg font-bold text-white uppercase">
                  {selectedVehicle.brand} {selectedVehicle.model}
                </span>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 text-right">
                <span className="text-[9px] font-mono-tech text-zinc-400 uppercase block">FINISH</span>
                <span className="text-xs font-mono-tech font-bold text-amber-400">
                  {selectedPaint.finish}
                </span>
              </div>
            </div>

            {/* Vehicle Image Preview with dynamic glow border */}
            <div className="relative my-8 z-10 w-full flex justify-center">
              <img
                src={selectedVehicle.heroImage}
                alt={selectedVehicle.model}
                className="w-full h-auto max-h-[380px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
              />
            </div>

            {/* Bottom Config Summary */}
            <div className="w-full glass-panel border border-white/10 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 z-10 text-xs font-mono-tech">
              <div>
                <span className="text-zinc-400 uppercase block text-[9px]">SELECTED FINISH</span>
                <strong className="text-white">{selectedPaint.name}</strong>
              </div>
              <div>
                <span className="text-zinc-400 uppercase block text-[9px]">WHEEL SPEC</span>
                <strong className="text-white">{selectedWheel.name.split(' ')[2]} {selectedWheel.name.split(' ')[3]}</strong>
              </div>
              <div>
                <span className="text-zinc-400 uppercase block text-[9px]">ESTIMATED TOTAL</span>
                <strong className="text-amber-400 text-sm font-bold">$128,300</strong>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTROLS & OPTIONS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* PAINT SELECTOR */}
            <div className="glass-panel border border-white/10 rounded-2xl p-5">
              <label className="text-xs font-mono-tech uppercase font-bold text-zinc-300 tracking-wider flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-amber-400" />
                <span>SELECT BESPOKE EXTERIOR PAINT</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {BESPOKE_PAINTS.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPaint(p)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPaint.name === p.name
                        ? 'border-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                        : 'border-white/10 bg-white/5 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className="w-5 h-5 rounded-full border border-white/30"
                        style={{ backgroundColor: p.hex }}
                      />
                      {selectedPaint.name === p.name && (
                        <Check className="w-3.5 h-3.5 text-amber-400" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono-tech font-bold text-white truncate">
                      {p.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* WHEEL SELECTOR */}
            <div className="glass-panel border border-white/10 rounded-2xl p-5">
              <label className="text-xs font-mono-tech uppercase font-bold text-zinc-300 tracking-wider flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>FORGED WHEEL SPECIFICATION</span>
              </label>

              <div className="flex flex-col gap-2">
                {WHEEL_OPTIONS.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWheel(w)}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedWheel.id === w.id
                        ? 'border-amber-400 bg-amber-500/10 text-white'
                        : 'border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-mono-tech font-bold">{w.name}</span>
                    <span className="text-[10px] font-mono-tech text-amber-400 font-bold">{w.extraPrice}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* AERODYNAMIC PACKAGES TOGGLES */}
            <div className="glass-panel border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-white font-bold">CARBON AERO DIFFUSER & REAR WING</span>
                <button
                  onClick={() => setHasAeroPackage(!hasAeroPackage)}
                  className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer ${
                    hasAeroPackage ? 'bg-amber-500' : 'bg-zinc-800'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      hasAeroPackage ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-xs font-mono-tech text-white font-bold">TITANIUM EXHAUST ACOUSTICS</span>
                <button
                  onClick={() => setHasTitaniumExhaust(!hasTitaniumExhaust)}
                  className={`w-12 h-6 rounded-full transition-colors p-1 cursor-pointer ${
                    hasTitaniumExhaust ? 'bg-amber-500' : 'bg-zinc-800'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      hasTitaniumExhaust ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
