import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, SlidersHorizontal, Sparkles } from 'lucide-react';
import { VEHICLES, BRANDS } from '../../data/vehicles';
import { BrandFilter, Vehicle } from '../../types/vehicle';
import { VehicleCard } from './VehicleCard';

interface VehicleGridProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleGrid: React.FC<VehicleGridProps> = ({ onSelectVehicle }) => {
  const [selectedBrand, setSelectedBrand] = useState<BrandFilter>('All');
  const [sortBy, setSortBy] = useState<'default' | 'hp' | 'speed' | 'accel'>('default');

  let filteredVehicles = VEHICLES.filter((v) => {
    if (selectedBrand === 'All') return true;
    return v.brand === selectedBrand;
  });

  if (sortBy === 'hp') {
    filteredVehicles = [...filteredVehicles].sort((a, b) => b.horsepower - a.horsepower);
  } else if (sortBy === 'speed') {
    filteredVehicles = [...filteredVehicles].sort((a, b) => b.topSpeed - a.topSpeed);
  } else if (sortBy === 'accel') {
    filteredVehicles = [...filteredVehicles].sort((a, b) => a.acceleration - b.acceleration);
  }

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Automotive Collection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans">
            The Hypercar <span className="text-blue-500 font-mono">Showcase</span>
          </h2>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400 uppercase hidden sm:inline-block">
            Sort Telemetry:
          </span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'default' | 'hp' | 'speed' | 'accel')}
              className="bg-zinc-900 border border-white/15 rounded-xl px-4 py-2 text-xs font-mono text-white focus:outline-none focus:border-blue-400 cursor-pointer"
            >
              <option value="default">Default Order</option>
              <option value="hp">Highest Horsepower</option>
              <option value="speed">Top Speed (MPH)</option>
              <option value="accel">Quickest 0-60 MPH</option>
            </select>
          </div>
        </div>
      </div>

      {/* Brand Filters Horizontal Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-white/10">
        <SlidersHorizontal className="w-4 h-4 text-zinc-500 shrink-0 mr-2" />
        {BRANDS.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            data-cursor={brand}
            className={`px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap shrink-0 min-h-[44px] flex items-center justify-center ${
              selectedBrand === brand
                ? 'bg-blue-600 text-white font-semibold shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedBrand + sortBy}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={onSelectVehicle} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredVehicles.length === 0 && (
        <div className="py-20 text-center font-mono text-zinc-500 text-sm border border-dashed border-white/10 rounded-2xl">
          No vehicles registered under filter "{selectedBrand}"
        </div>
      )}
    </section>
  );
};
