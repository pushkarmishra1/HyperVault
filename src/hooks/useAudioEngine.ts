import { useCallback, useRef, useState } from 'react';

/**
 * Web Audio API Engine Rev Synthesizer
 * Synthesizes multi-oscillator V8/V10/W16 engine firing sounds, turbo spooling whistle, and pops.
 */
export function useAudioEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const triggerRev = useCallback((cylinders: 'V8' | 'V10' | 'W16' | 'Flat-6' = 'V8') => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      setIsPlaying(true);

      const now = ctx.currentTime;
      const duration = 2.4;

      // Base engine fundamental frequencies
      const baseFreq = cylinders === 'W16' ? 75 : cylinders === 'V10' ? 65 : cylinders === 'Flat-6' ? 85 : 55;
      const revMultiplier = cylinders === 'W16' ? 4.5 : cylinders === 'V10' ? 5.2 : 4.0;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, now);
      masterGain.gain.linearRampToValueAtTime(0.35, now + 0.3); // Rev up
      masterGain.gain.exponentialRampToValueAtTime(0.4, now + 0.9); // Max peak
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      // Low Pass Filter for exhaust rumble
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.linearRampToValueAtTime(2800, now + 0.9);
      filter.frequency.exponentialRampToValueAtTime(300, now + duration);

      // Main Harmonic Oscillators (Sub + Fundamental + Harmonics)
      const osc1 = ctx.createOscillator(); // Fundamental sawtooth
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(baseFreq, now);
      osc1.frequency.exponentialRampToValueAtTime(baseFreq * revMultiplier, now + 0.9);
      osc1.frequency.exponentialRampToValueAtTime(baseFreq * 0.9, now + duration);

      const osc2 = ctx.createOscillator(); // Sub rumble square
      osc2.type = 'square';
      osc2.frequency.setValueAtTime(baseFreq * 0.5, now);
      osc2.frequency.exponentialRampToValueAtTime(baseFreq * 0.5 * revMultiplier, now + 0.9);
      osc2.frequency.exponentialRampToValueAtTime(baseFreq * 0.45, now + duration);

      // Turbo Spool Whistle (Sine high pitch sweep)
      const turboOsc = ctx.createOscillator();
      const turboGain = ctx.createGain();
      turboOsc.type = 'sine';
      turboOsc.frequency.setValueAtTime(1200, now + 0.3);
      turboOsc.frequency.exponentialRampToValueAtTime(4200, now + 1.0);
      turboGain.gain.setValueAtTime(0.001, now);
      turboGain.gain.linearRampToValueAtTime(0.08, now + 0.8);
      turboGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Exhaust overrun pops (Buffer Noise)
      const bufferSize = ctx.sampleRate * 0.15;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now + 1.1);
      noiseGain.gain.linearRampToValueAtTime(0.12, now + 1.2);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

      // Connections
      osc1.connect(filter);
      osc2.connect(filter);
      turboOsc.connect(turboGain);
      turboGain.connect(masterGain);
      noise.connect(noiseGain);
      noiseGain.connect(masterGain);

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      // Start & Stop
      osc1.start(now);
      osc2.start(now);
      turboOsc.start(now);
      noise.start(now + 1.1);

      osc1.stop(now + duration);
      osc2.stop(now + duration);
      turboOsc.stop(now + duration);
      noise.stop(now + duration);

      setTimeout(() => {
        setIsPlaying(false);
      }, duration * 1000);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const triggerEngineStart = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      setIsPlaying(true);
      const now = ctx.currentTime;

      // Starter Motor Chirp/Crank (0s to 0.4s)
      const crankOsc = ctx.createOscillator();
      const crankGain = ctx.createGain();
      crankOsc.type = 'sawtooth';
      crankOsc.frequency.setValueAtTime(220, now);
      crankOsc.frequency.linearRampToValueAtTime(140, now + 0.35);
      crankGain.gain.setValueAtTime(0.2, now);
      crankGain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

      // Main V8 Ignition Flare (0.4s to 1.2s)
      const flareOsc = ctx.createOscillator();
      const flareGain = ctx.createGain();
      flareOsc.type = 'sawtooth';
      flareOsc.frequency.setValueAtTime(60, now + 0.35);
      flareOsc.frequency.exponentialRampToValueAtTime(240, now + 0.7); // V8 Flare
      flareOsc.frequency.exponentialRampToValueAtTime(80, now + 1.8); // Settles to idle

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.linearRampToValueAtTime(2200, now + 0.7);
      filter.frequency.exponentialRampToValueAtTime(450, now + 1.8);

      flareGain.gain.setValueAtTime(0.01, now + 0.35);
      flareGain.gain.linearRampToValueAtTime(0.4, now + 0.65);
      flareGain.gain.exponentialRampToValueAtTime(0.15, now + 1.8);
      flareGain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);

      crankOsc.connect(crankGain);
      crankGain.connect(ctx.destination);

      flareOsc.connect(filter);
      filter.connect(flareGain);
      flareGain.connect(ctx.destination);

      crankOsc.start(now);
      crankOsc.stop(now + 0.4);

      flareOsc.start(now + 0.35);
      flareOsc.stop(now + 3.0);

      setTimeout(() => setIsPlaying(false), 3000);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const triggerPneumaticDoor = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      // White noise for air release
      const bufferSize = ctx.sampleRate * 0.8;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(180, now + 0.8);
      filter.Q.value = 3.0;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.8);
    } catch {
      // Audio fallback
    }
  }, []);

  return { triggerRev, triggerEngineStart, triggerPneumaticDoor, isPlaying };
}
