import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { BrandInfo } from '../../types/campus';

interface BrandShowroomTransitionProps {
  brand: BrandInfo;
  onTransitionComplete: () => void;
}

export const BrandShowroomTransition: React.FC<BrandShowroomTransitionProps> = ({
  brand,
  onTransitionComplete,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineTopRef = useRef<HTMLDivElement>(null);
  const lineBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onTransitionComplete();
      },
    });

    // Animate shutter entrance
    tl.fromTo(
      overlayRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.2'
      )
      .fromTo(
        [lineTopRef.current, lineBottomRef.current],
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'expo.inOut' },
        '-=0.3'
      )
      // Pause briefly for dramatic effect
      .to({}, { duration: 0.5 })
      // Smooth shutter exit reveal
      .to(textRef.current, { opacity: 0, scale: 1.08, duration: 0.3 })
      .to(overlayRef.current, { opacity: 0, duration: 0.4, ease: 'power2.inOut' });

    return () => {
      tl.kill();
    };
  }, [brand, onTransitionComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white select-none overflow-hidden"
    >
      {/* Background Subtle Shutter Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]" />

      {/* Top and Bottom Animated Aperture Lines */}
      <div
        ref={lineTopRef}
        className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent origin-center"
      />
      <div
        ref={lineBottomRef}
        className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent origin-center"
      />

      {/* Central Brand Emblem & Entrance Text */}
      <div ref={textRef} className="relative z-10 text-center max-w-xl px-6">
        <div className="inline-block p-4 rounded-3xl bg-white/5 border border-red-500/40 mb-6 shadow-[0_0_50px_rgba(220,38,38,0.4)]">
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-16 h-16 object-cover rounded-2xl mx-auto"
          />
        </div>

        <span className="block text-[10px] font-mono-tech tracking-[0.3em] text-red-400 uppercase font-bold mb-2">
          CAMERA SHUTTER TRANSIT • {brand.country}
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
          ENTERING <br />
          <span className="red-text-gradient">{brand.name}</span>
        </h2>

        <p className="mt-3 text-xs font-mono-tech text-zinc-400 uppercase tracking-widest">
          {brand.tagline}
        </p>

        {/* Loading Spinner */}
        <div className="mt-8 flex justify-center items-center gap-2 text-xs font-mono-tech text-red-500">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>CALIBRATING PRIVATE SUITE...</span>
        </div>
      </div>
    </div>
  );
};
