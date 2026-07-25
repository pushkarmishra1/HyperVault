import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Sparkles, ZoomIn, ArrowRight } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';

export const CinematicGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'exterior' | 'interior' | 'action'>('all');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const allGalleryItems = VEHICLES.flatMap((v) =>
    v.gallery.map((g) => ({
      ...g,
      vehicleBrand: v.brand,
      vehicleModel: v.model,
      vehicleId: v.id,
    }))
  );

  const filteredItems = activeFilter === 'all'
    ? allGalleryItems
    : allGalleryItems.filter((item) => item.type === activeFilter || (activeFilter === 'action' && item.type === 'detail'));

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Photography Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans">
            Cinematic <span className="text-blue-500 font-mono">Perspectives</span>
          </h2>
        </div>

        {/* Gallery Type Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {(['all', 'exterior', 'interior', 'action'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white font-semibold shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.slice(0, 9).map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            onClick={() => setActiveImage(item.url)}
            data-cursor="EXPAND"
            className="group relative aspect-16/10 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-blue-400/50 cursor-pointer transition-all duration-500"
          >
            <img
              src={item.url}
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="px-2.5 py-1 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-[9px] font-mono tracking-widest text-blue-300 uppercase">
                  {item.vehicleBrand} {item.vehicleModel}
                </span>
                <ZoomIn className="w-4 h-4 text-white/50 group-hover:text-blue-400 transition-colors" />
              </div>

              <div>
                <p className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">
                  {item.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img src={activeImage} alt="Expanded View" className="w-full h-full object-contain" />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:border-blue-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
