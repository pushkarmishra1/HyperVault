import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Flag, Trophy, Zap } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1926',
    title: 'The Birth of Motorsport Engineering',
    subtitle: 'Silver Arrows & Bavarian Precision',
    description: 'Foundational racing DNA established across Stuttgart and Munich, laying the groundwork for lightweight tubular chassis and supercharged racing monsters.',
    image: 'https://www.motorsportmagazine.com/wp-content/uploads/2026/04/1926-British-Grand-Prix-at-Brooklands-scaled.jpg',
  },
  {
    year: '1963',
    title: 'Icons of Sant’Agata & Weissach',
    subtitle: 'Natural Aspiration Supremacy',
    description: 'Ferruccio Lamborghini and Ferdinand Alexander Porsche redefine sports car aerodynamics with the mid-engine layout and timeless rear-engine silhouettes.',
    image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/history/350gt/350gt_hero_01.jpg',
  },
  {
    year: '2005',
    title: 'The Megacar Revolution',
    subtitle: 'Ängelholm & Molsheim Physics',
    description: 'Engineering Marvel Bugatti veyron break the 250 MPH sound and speed barrier, engineering carbon monocage chassis capable of enduring 2,000+ horsepower forces.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYbsY4rI2-SCzCBwmZc-U7odvrqGZmQZf2G_Th0MUwQ&s=10',
  },
  {
    year: '2026+',
    title: 'The Hybrid Era',
    subtitle: 'Electrified V12 & Quad-Turbo Hybrids',
    description: 'Blending high-revving internal combustion acoustic resonance with instant 800V/1586 Kw electric torque vectoring for ultimate track mastery.',
    image: 'https://sxdrv.com/images/68401bc4b362d.jpg',
  },
];

export const HeritageTimelineSection: React.FC = () => {
  return (
    <section className="relative w-full py-28 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-red-500/30 text-red-400 text-[10px] font-mono-tech tracking-[0.2em] uppercase font-bold mb-3">
            <Trophy className="w-3.5 h-3.5 text-red-500" />
            <span>CENTURY OF ARTISTRY • MOTORSPORT TIMELINE</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            HERITAGE & <span className="red-text-gradient">GENESIS</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-sans max-w-xl mx-auto leading-relaxed">
            Trace the evolutionary milestones of automotive craftsmanship from early GRAND PRIX endurance to modern hybrid hypercars.
          </p>
        </div>

        {/* TIMELINE PATHWAY */}
        <div className="relative border-l-2 border-red-500/30 ml-4 md:ml-32 pl-6 md:pl-12 flex flex-col gap-16">
          {TIMELINE_EVENTS.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-red-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-red-600 transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Year Stamp */}
              <div className="text-2xl md:text-4xl font-mono-tech font-black text-red-500 mb-1">
                {event.year}
              </div>

              {/* Card Container */}
              <div className="glass-panel border border-white/10 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl group-hover:border-red-500/40 transition-all">
                <div className="md:col-span-7">
                  <span className="text-[10px] font-mono-tech text-zinc-400 uppercase tracking-widest font-bold block mb-1">
                    {event.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif-luxury font-bold text-white uppercase">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-zinc-300 font-sans leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="md:col-span-5 rounded-2xl overflow-hidden border border-white/10 h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
