import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  PhoneCall,
  GitCompare,
  Volume2,
  Image as ImageIcon,
  Gauge,
  Zap,
  CheckCircle2,
  X,
  Compass,
  ChevronRight,
  Flame,
} from 'lucide-react';
import { BrandInfo } from '../../types/campus';
import { VEHICLES } from '../../data/vehicles';
import { Vehicle } from '../../types/vehicle';
import { BRANDS_INFO } from '../../data/brands';
import { BackButton } from '../Navigation/BackButton';

interface BrandShowroomViewProps {
  brand: BrandInfo;
  onBackToAtrium: () => void;
  onSelectBrand?: (brand: BrandInfo) => void;
  onOpenTestDrive?: (vehicle?: Vehicle) => void;
  onOpenConcierge?: (modelName?: string) => void;
  onOpenAudioEngine?: (vehicle?: Vehicle) => void;
  onOpenCompare?: (vehicle?: Vehicle) => void;
}

export const BrandShowroomView: React.FC<BrandShowroomViewProps> = ({
  brand,
  onBackToAtrium,
  onSelectBrand,
  onOpenTestDrive,
  onOpenConcierge,
  onOpenAudioEngine,
  onOpenCompare,
}) => {
  const [selectedGalleryCar, setSelectedGalleryCar] = useState<Vehicle | null>(null);
  const [activeColorIndex, setActiveColorIndex] = useState<Record<string, number>>({});

  // Filter cars for this brand
  const brandCars = VEHICLES.filter((v) =>
    v.brand.toLowerCase().includes(brand.id.toLowerCase()) ||
    brand.id.toLowerCase().includes(v.brand.toLowerCase())
  );

  // If no specific car matched, fallback to showing flagship vehicles
  const displayCars = brandCars.length > 0 ? brandCars : VEHICLES.slice(0, 2);

  const handleColorSelect = (carId: string, index: number) => {
    setActiveColorIndex((prev) => ({ ...prev, [carId]: index }));
  };

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white pt-24 pb-28 select-none">
      {/* UNIFIED BACK TO SHOWROOM BUTTON */}
      <BackButton onClick={onBackToAtrium} enableEscKey={!selectedGalleryCar} />

      {/* BRAND SUITE HEADER & NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToAtrium}
              className="p-3 rounded-2xl bg-white/5 border border-white/15 hover:border-red-500/50 hover:bg-red-600/20 text-white transition-all cursor-pointer flex items-center gap-2 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-mono-tech tracking-wider uppercase font-bold hidden sm:inline">
                BACK TO SHOWROOM
              </span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30 text-[9px] font-mono-tech uppercase font-bold tracking-widest">
                  {brand.country} • FLAGSHIP SUITE
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif-luxury font-black text-white uppercase tracking-tight mt-1">
                {brand.name}
              </h1>
            </div>
          </div>

          {/* BRAND SWITCHER TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {BRANDS_INFO.map((b) => (
              <button
                key={b.id}
                onClick={() => onSelectBrand && onSelectBrand(b)}
                className={`px-3 py-2 rounded-xl text-[10px] font-mono-tech tracking-wider uppercase font-bold transition-all cursor-pointer whitespace-nowrap ${
                  b.id === brand.id
                    ? 'bg-red-600 text-white border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                    : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                }`}
              >
                {b.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* BRAND TAGLINE & OVERVIEW */}
        <div className="mt-6 glass-panel border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl">
            <h3 className="text-lg md:text-xl font-serif-luxury font-bold text-red-400">
              "{brand.tagline}"
            </h3>
            <p className="mt-2 text-xs md:text-sm text-zinc-300 font-sans leading-relaxed">
              {brand.description}
            </p>
          </div>

          <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
            <div>
              <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">FOUNDED</div>
              <div className="text-lg font-mono-tech font-bold text-white">{brand.founded}</div>
            </div>
            <div>
              <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">MODELS</div>
              <div className="text-lg font-mono-tech font-bold text-red-400">{displayCars.length} FLAGSHIPS</div>
            </div>
          </div>
        </div>
      </div>

      {/* SHOWROOM VEHICLE LISTING (ALTERNATING LAYOUTS WITH VIEWPORT ANIMATIONS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
        {displayCars.map((car, idx) => {
          const isEven = idx % 2 === 0;
          const currentColorIdx = activeColorIndex[car.id] || 0;
          const activeColor = car.colorOptions[currentColorIdx] || car.colorOptions[0];

          return (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="glass-panel border border-white/10 rounded-3xl p-6 md:p-10 overflow-hidden shadow-2xl relative"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* CAR IMAGE CONTAINER (ALTERNATING COLUMN) */}
                <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 p-4 group">
                    {/* Glowing Accent Ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-600/10 blur-3xl rounded-full pointer-events-none" />

                    {/* High-Res Car Image */}
                    <img
                      src={activeColor?.image || car.heroImage || car.thumbnail || 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=800&auto=format&fit=crop'}
                      alt={car.model}
                      className="w-full h-auto max-h-[480px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                      onClick={() => setSelectedGalleryCar(car)}
                    />

                    {/* Quick Lightbox Badge */}
                    <button
                      onClick={() => setSelectedGalleryCar(car)}
                      className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-red-600 border border-white/20 text-[10px] font-mono-tech tracking-wider uppercase font-bold text-white flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-md"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>{car.gallery.length} GALLERY PHOTOS</span>
                    </button>
                  </div>

                  {/* COLOR FINISHES SWITCHER */}
                  {car.colorOptions.length > 0 && (
                    <div className="mt-4 flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3">
                      <span className="text-[10px] font-mono-tech uppercase text-zinc-400 font-bold tracking-widest pl-2">
                        FINISH:
                      </span>
                      <div className="flex items-center gap-2 overflow-x-auto">
                        {car.colorOptions.map((c, cIdx) => (
                          <button
                            key={c.name}
                            onClick={() => handleColorSelect(car.id, cIdx)}
                            title={c.name}
                            className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                              currentColorIdx === cIdx
                                ? 'border-red-500 scale-125 shadow-[0_0_10px_#ef4444]'
                                : 'border-white/20 opacity-70 hover:opacity-100'
                            }`}
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-mono-tech text-white font-bold ml-auto pr-2 truncate">
                        {activeColor?.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* CAR DETAILS & SPECIFICATIONS (ALTERNATING COLUMN) */}
                <div className={`lg:col-span-5 flex flex-col gap-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-mono-tech font-bold tracking-wider uppercase">
                        {car.year} • {car.brand}
                      </span>
                      {car.variant && (
                        <span className="px-2.5 py-1 rounded bg-white/10 text-zinc-300 text-[10px] font-mono-tech font-bold tracking-wider uppercase">
                          {car.variant}
                        </span>
                      )}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif-luxury font-black text-white uppercase tracking-tight">
                      {car.model}
                    </h2>

                    <p className="mt-2 text-xs text-zinc-300 font-sans leading-relaxed">
                      {car.description}
                    </p>
                  </div>

                  {/* PRICE & KEY SPECS GRID */}
                  <div className="bg-black/60 border border-white/10 rounded-2xl p-4 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">HORSEPOWER</div>
                      <div className="text-xl font-mono-tech font-black text-red-500">{car.horsepower} HP</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">TOP SPEED</div>
                      <div className="text-xl font-mono-tech font-black text-white">{car.topSpeed} MPH</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">0 - 60 MPH</div>
                      <div className="text-xl font-mono-tech font-black text-white">{car.acceleration}s</div>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest">ENGINE TYPE</div>
                      <div className="text-xs font-mono-tech font-bold text-zinc-300 truncate">{car.engine}</div>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest block">🇮🇳 INDIAN PRICE</span>
                        <span className="text-lg font-mono-tech font-black text-amber-400">{car.priceInr || car.price}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono-tech text-zinc-400 uppercase tracking-widest block">🇺🇸 INT'L PRICE</span>
                        <span className="text-sm font-mono-tech font-bold text-zinc-300">{car.priceUsd || car.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* ENGINE & DRIVETRAIN DETAILS */}
                  <div className="text-xs font-mono-tech text-zinc-400 space-y-1 bg-white/5 border border-white/5 rounded-2xl p-3">
                    <div className="flex justify-between">
                      <span>ENGINE:</span>
                      <strong className="text-white">{car.engine}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>TRANSMISSION:</span>
                      <strong className="text-white">{car.transmission}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>DRIVETRAIN:</span>
                      <strong className="text-white">{car.drivetrain}</strong>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => onOpenTestDrive && onOpenTestDrive(car)}
                      className="px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>BOOK TEST DRIVE</span>
                    </button>

                    <button
                      onClick={() => onOpenConcierge && onOpenConcierge(car.model)}
                      className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                      <span>CONTACT DEALER</span>
                    </button>

                    <button
                      onClick={() => onOpenCompare && onOpenCompare(car)}
                      className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono-tech text-[11px] tracking-wider uppercase font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <GitCompare className="w-3.5 h-3.5 text-amber-400" />
                      <span>COMPARE CAR</span>
                    </button>

                    <button
                      onClick={() => onOpenAudioEngine && onOpenAudioEngine(car)}
                      className="px-4 py-3 rounded-xl bg-black/80 hover:bg-zinc-900 border border-red-500/30 text-red-400 font-mono-tech text-[11px] tracking-wider uppercase font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                      <span>EXHAUST AUDIO</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* GALLERY LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedGalleryCar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl glass-panel border border-white/10 rounded-3xl p-6 md:p-8 text-white max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono-tech text-red-400 uppercase tracking-widest font-bold">
                    PHOTO GALLERY LIGHTBOX
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif-luxury font-bold">
                    {selectedGalleryCar.brand} {selectedGalleryCar.model}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedGalleryCar(null)}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedGalleryCar.gallery.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/10 group relative">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                      <span className="text-xs font-mono-tech text-white font-bold">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
