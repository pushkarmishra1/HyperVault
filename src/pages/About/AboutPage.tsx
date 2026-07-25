import React from 'react';
import { HeritageTimeline } from '../../components/Timeline/HeritageTimeline';
import { BackButton } from '../../components/Navigation/BackButton';
import { ShieldCheck, Award, Sparkles, Compass, Building2, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-black text-white min-h-screen relative font-sans">
      <BackButton />

      <section className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The HyperVault Vision</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-sans">
            Where Machines <span className="text-red-500 font-mono">Become Art</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mt-6">
            HyperVault is the world's premier digital hypercar marketplace and luxury showroom pavilion. Conceived as an architectural digital sanctuary, HyperVault connects discerning collectors and automotive connoisseurs with rare, high-performance hypercars, bespoke tailoring ateliers, and real-time engine acoustic synthesis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
            <Building2 className="w-6 h-6 text-red-500" />
            <h3 className="text-lg font-bold text-white uppercase font-sans">Hypercar Marketplace</h3>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Curated access to ultra-exclusive specimens from Ferrari, Bugatti, Koenigsegg, Lamborghini, McLaren, and Pagani.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
            <Award className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-bold text-white uppercase font-sans">Acoustic Synthesis</h3>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Custom multi-oscillator Web Audio API models replicate atmospheric V8, V10, V12, and W16 exhaust resonant harmonics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
            <Compass className="w-6 h-6 text-red-500" />
            <h3 className="text-lg font-bold text-white uppercase font-sans">Interactive 3D Showroom</h3>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Real-time metallic reflection shaders and studio lighting bring physical presence to the digital hypercar pavilion.
            </p>
          </div>
        </div>

        {/* HEADQUARTERS BANNER */}
        <div className="mt-12 p-8 rounded-3xl bg-zinc-950 border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-red-400 font-bold tracking-widest">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>GLOBAL HEADQUARTERS</span>
            </div>
            <h3 className="text-2xl font-bold uppercase text-white font-sans">
              HyperVault Pavilion • India (Main HQ)
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              Somewhere in india • Founder & Owner: Pushkar Mishra
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400 border-l border-white/10 pl-6 hidden md:block">
            <div className="text-white font-bold mb-1">GLOBAL NETWORK</div>
            <div>Munich • Maranello • Weissach • Molsheim</div>
          </div>
        </div>
      </section>

      <HeritageTimeline />
    </div>
  );
};
