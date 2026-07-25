import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitCompare, X, Plus, Check, ShieldAlert } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';
import { Vehicle } from '../../types/vehicle';

interface CompareVehiclesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: Vehicle;
}

export const CompareVehiclesModal: React.FC<CompareVehiclesModalProps> = ({
  isOpen,
  onClose,
  initialVehicle,
}) => {
  const [selectedCar1, setSelectedCar1] = useState<Vehicle>(initialVehicle || VEHICLES[0]);
  const [selectedCar2, setSelectedCar2] = useState<Vehicle>(VEHICLES[3] || VEHICLES[1]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl glass-panel border border-amber-500/30 rounded-3xl p-6 md:p-8 text-white shadow-[0_0_80px_rgba(245,158,11,0.15)] max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
                <GitCompare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono-tech tracking-widest text-amber-400 font-bold uppercase">
                  HYPERVAULT SPECIFICATION MATRIX
                </span>
                <h3 className="text-xl md:text-2xl font-serif-luxury font-bold">
                  Side-by-Side Supercar Comparison
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Car Selectors Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {/* CAR 1 SELECTOR */}
            <div className="glass-panel border border-white/10 rounded-2xl p-4">
              <label className="text-[10px] font-mono-tech text-zinc-400 uppercase tracking-widest font-bold block mb-2">
                VEHICLE ALPHA
              </label>
              <select
                value={selectedCar1.id}
                onChange={(e) => {
                  const car = VEHICLES.find((v) => v.id === e.target.value);
                  if (car) setSelectedCar1(car);
                }}
                className="w-full bg-black/80 border border-white/20 rounded-xl p-2.5 text-xs font-mono-tech font-bold text-white focus:border-amber-400 outline-none"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id} className="bg-zinc-900 text-white">
                    {v.brand} {v.model}
                  </option>
                ))}
              </select>

              <div className="mt-4 flex flex-col items-center">
                <img
                  src={selectedCar1.heroImage}
                  alt={selectedCar1.model}
                  className="w-full h-32 object-contain"
                />
                <span className="text-sm font-serif-luxury font-bold text-white mt-2">
                  {selectedCar1.model}
                </span>
                <div className="text-center mt-1">
                  <span className="text-xs font-mono-tech text-amber-400 font-bold block">🇮🇳 {selectedCar1.priceInr || selectedCar1.price}</span>
                  <span className="text-[11px] font-mono-tech text-zinc-400 block">🇺🇸 {selectedCar1.priceUsd || selectedCar1.price}</span>
                </div>
              </div>
            </div>

            {/* CAR 2 SELECTOR */}
            <div className="glass-panel border border-white/10 rounded-2xl p-4">
              <label className="text-[10px] font-mono-tech text-zinc-400 uppercase tracking-widest font-bold block mb-2">
                VEHICLE BETA
              </label>
              <select
                value={selectedCar2.id}
                onChange={(e) => {
                  const car = VEHICLES.find((v) => v.id === e.target.value);
                  if (car) setSelectedCar2(car);
                }}
                className="w-full bg-black/80 border border-white/20 rounded-xl p-2.5 text-xs font-mono-tech font-bold text-white focus:border-amber-400 outline-none"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id} className="bg-zinc-900 text-white">
                    {v.brand} {v.model}
                  </option>
                ))}
              </select>

              <div className="mt-4 flex flex-col items-center">
                <img
                  src={selectedCar2.heroImage}
                  alt={selectedCar2.model}
                  className="w-full h-32 object-contain"
                />
                <span className="text-sm font-serif-luxury font-bold text-white mt-2">
                  {selectedCar2.model}
                </span>
                <div className="text-center mt-1">
                  <span className="text-xs font-mono-tech text-amber-400 font-bold block">🇮🇳 {selectedCar2.priceInr || selectedCar2.price}</span>
                  <span className="text-[11px] font-mono-tech text-zinc-400 block">🇺🇸 {selectedCar2.priceUsd || selectedCar2.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SPEC COMPARISON TABLE */}
          <div className="bg-black/60 border border-white/10 rounded-2xl p-4 space-y-3 font-mono-tech text-xs">
            {/* HORSEPOWER */}
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-white/10 items-center text-center">
              <span className={`font-bold ${selectedCar1.horsepower >= selectedCar2.horsepower ? 'text-red-400' : 'text-zinc-300'}`}>
                {selectedCar1.horsepower} HP
              </span>
              <span className="text-zinc-400 text-[10px] uppercase font-bold">HORSEPOWER</span>
              <span className={`font-bold ${selectedCar2.horsepower >= selectedCar1.horsepower ? 'text-red-400' : 'text-zinc-300'}`}>
                {selectedCar2.horsepower} HP
              </span>
            </div>

            {/* ACCELERATION */}
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-white/10 items-center text-center">
              <span className={`font-bold ${selectedCar1.acceleration <= selectedCar2.acceleration ? 'text-red-400' : 'text-zinc-300'}`}>
                {selectedCar1.acceleration}s
              </span>
              <span className="text-zinc-400 text-[10px] uppercase font-bold">0-60 MPH</span>
              <span className={`font-bold ${selectedCar2.acceleration <= selectedCar1.acceleration ? 'text-red-400' : 'text-zinc-300'}`}>
                {selectedCar2.acceleration}s
              </span>
            </div>

            {/* TOP SPEED */}
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-white/10 items-center text-center">
              <span className={`font-bold ${selectedCar1.topSpeed >= selectedCar2.topSpeed ? 'text-red-400' : 'text-zinc-300'}`}>
                {selectedCar1.topSpeed} MPH
              </span>
              <span className="text-zinc-400 text-[10px] uppercase font-bold">TOP SPEED</span>
              <span className={`font-bold ${selectedCar2.topSpeed >= selectedCar1.topSpeed ? 'text-red-400' : 'text-zinc-300'}`}>
                {selectedCar2.topSpeed} MPH
              </span>
            </div>

            {/* ENGINE */}
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-white/10 items-center text-center text-[11px]">
              <span className="text-white font-bold">{selectedCar1.engine}</span>
              <span className="text-zinc-400 text-[10px] uppercase font-bold">ENGINE SPEC</span>
              <span className="text-white font-bold">{selectedCar2.engine}</span>
            </div>

            {/* DRIVETRAIN */}
            <div className="grid grid-cols-3 gap-2 py-2 items-center text-center text-[11px]">
              <span className="text-white font-bold">{selectedCar1.drivetrain}</span>
              <span className="text-zinc-400 text-[10px] uppercase font-bold">DRIVETRAIN</span>
              <span className="text-white font-bold">{selectedCar2.drivetrain}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
