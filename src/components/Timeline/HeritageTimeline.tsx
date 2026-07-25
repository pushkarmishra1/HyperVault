import React from 'react';
import { motion } from 'motion/react';
import { History, Award, Compass, ShieldCheck } from 'lucide-react';

export const HeritageTimeline: React.FC = () => {
  const milestones = [
    {
      year: '1979',
      title: 'Birth of the G-Class Monument',
      brand: 'Mercedes-Benz',
      description: 'Handcrafted in Graz, Austria, the Geländewagen laid down an immutable off-road legacy fused with indestructible engineering.',
      image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1200&auto=format&fit=crop',
    },
    {
      year: '1992',
      title: 'The McLaren F1 Benchmark',
      brand: 'McLaren',
      description: 'Gordon Murray designed the gold-lined engine bay and central driver seating position, setting a naturally aspirated top speed record of 240.1 mph.',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      year: '2014',
      title: 'Carbon LifeDrive Architecture',
      brand: 'BMW',
      description: 'The BMW i8 introduced mass carbon fiber reinforced polymer passenger cells married to futuristic plug-in hybrid drivetrains.',
      image: 'https://notoriousluxury.com/wp-content/uploads/2013/09/aaa1.jpg',
    },
    {
      year: '2024',
      title: 'The 2,300 HP Megacar Frontier',
      brand: 'Koenigsegg',
      description: 'Christian von Koenigsegg unveiled the Gemera, combining axial flux electric thrusters with twin-turbo V8 output for four passengers.',
      image: 'https://hips.hearstapps.com/hmg-prod/images/k1-64ac54793527f.jpeg?crop=1.00xw:0.892xh;0,0.0427xh&resize=1200:*',
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
          <History className="w-3.5 h-3.5" />
          <span>Chronicles of Engineering</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans">
          Heritage & <span className="text-blue-500 font-mono">Evolution</span>
        </h2>
        <p className="text-sm text-zinc-400 font-light mt-4">
          Every epoch defines a milestone where human imagination transcended mechanical limitations.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l border-blue-500/30 ml-4 sm:ml-32 space-y-16">
        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pl-8 sm:pl-12 group"
          >
            {/* Timeline Node Pulsing Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-black group-hover:scale-125 group-hover:bg-sky-400 transition-all shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

            {/* Year Stamp */}
            <span className="hidden sm:block absolute -left-32 top-0 font-mono text-xl font-bold text-blue-400">
              {m.year}
            </span>

            {/* Content Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-zinc-950 border border-white/10 p-6 rounded-2xl group-hover:border-blue-500/40 transition-colors shadow-2xl">
              <div className="md:col-span-8 space-y-2">
                <span className="sm:hidden font-mono text-xs font-bold text-blue-400 block">
                  {m.year} • {m.brand}
                </span>
                <span className="hidden sm:block text-[10px] font-mono text-zinc-500 uppercase">
                  {m.brand}
                </span>
                <h3 className="text-xl font-bold text-white uppercase font-sans tracking-wide">
                  {m.title}
                </h3>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="md:col-span-4 aspect-16/10 rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
