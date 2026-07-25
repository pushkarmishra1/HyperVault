import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, MeshReflectorMaterial, Sparkles, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  Play,
  ChevronDown,
  SkipForward,
  ArrowRight,
  ShieldCheck,
  Zap,
  Gauge,
  Layers,
  Sparkles as SparklesIcon,
  Compass,
  Cpu,
  Flame,
  Award
} from 'lucide-react';
import { HERO_VEHICLE } from '../../data/vehicles';
import { Vehicle } from '../../types/vehicle';
import { useAudioEngine } from '../../hooks/useAudioEngine';
import { WebGLErrorBoundary } from '../Common/WebGLErrorBoundary';

interface CinematicHeroProps {
  onExploreVehicle: (v: Vehicle) => void;
  onOpenShowroom: () => void;
}

// =========================================================
// 3D CONTINUOUS FILM ENGINE (REACT THREE FIBER)
// =========================================================
function ContinuousFilm3D({
  scrollProgress,
  mousePos,
  engineRunning,
}: {
  scrollProgress: number; // 0.00 to 1.00
  mousePos: { x: number; y: number };
  engineRunning: boolean;
}) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const drlLeftRef = useRef<THREE.SpotLight>(null);
  const drlRightRef = useRef<THREE.SpotLight>(null);
  const spotlight1Ref = useRef<THREE.SpotLight>(null);
  const spotlight2Ref = useRef<THREE.SpotLight>(null);
  const cabinSpotlightRef = useRef<THREE.SpotLight>(null);
  const glassWallRef = useRef<THREE.Mesh>(null);
  const carGroupRef = useRef<THREE.Group>(null);
  const wheelsGroupRef = useRef<THREE.Group>(null);

  // Exploded View Calculations (Scroll 80% to 90%)
  const explodedFactor =
    scrollProgress >= 0.8 && scrollProgress <= 0.9
      ? (scrollProgress - 0.8) / 0.1
      : scrollProgress > 0.9
      ? 0
      : 0;

  // Car levitation offset during exploded view or idle
  const carYOffset =
    scrollProgress >= 0.8 && scrollProgress <= 0.9
      ? 0.3 + explodedFactor * 0.5
      : 0.3;

  useFrame((state, delta) => {
    // ----------------------------------------------------
    // HOLLYWOOD CONTINUOUS CAMERA CHOREOGRAPHY (0 to 100%)
    // ----------------------------------------------------
    if (cameraRef.current) {
      const targetMouseX = mousePos.x * 0.4;
      const targetMouseY = mousePos.y * 0.3;

      let targetPos = new THREE.Vector3(0, 1.8, 16);
      let targetLook = new THREE.Vector3(0, 0.5, 0);

      if (scrollProgress <= 0.1) {
        // 0–10%: Black screen -> DRLs slowly appear far away
        const t = scrollProgress / 0.1;
        targetPos.set(targetMouseX, 1.8 - t * 0.2, 16 - t * 2);
        targetLook.set(0, 0.4, 0);
      } else if (scrollProgress <= 0.2) {
        // 10–20%: Dolly in towards headlights & floor reflections
        const t = (scrollProgress - 0.1) / 0.1;
        targetPos.set(targetMouseX, 1.6 - t * 0.2, 14 - t * 4);
        targetLook.set(0, 0.4, 1.0);
      } else if (scrollProgress <= 0.35) {
        // 20–35%: Pass through glass wall at Z=8 (Physically real)
        const t = (scrollProgress - 0.2) / 0.15;
        targetPos.set(targetMouseX, 1.4 - t * 0.1, 10 - t * 3.5);
        targetLook.set(0, 0.5, 0);
      } else if (scrollProgress <= 0.5) {
        // 35–50%: M5 Competition reveal, camera slowly circles front
        const t = (scrollProgress - 0.35) / 0.15;
        const angle = t * Math.PI * 0.45;
        targetPos.set(
          Math.sin(angle) * 5.2 + targetMouseX,
          1.3 + Math.sin(t * Math.PI) * 0.2,
          Math.cos(angle) * 5.2
        );
        targetLook.set(0, 0.5, 0);
      } else if (scrollProgress <= 0.65) {
        // 50–65%: Truck to Side profile, rotate wheels, gold calipers
        const t = (scrollProgress - 0.5) / 0.15;
        targetPos.set(
          THREE.MathUtils.lerp(3.8, 4.8, t) + targetMouseX,
          THREE.MathUtils.lerp(1.3, 1.1, t),
          THREE.MathUtils.lerp(4.2, 0.2, t)
        );
        targetLook.set(0, 0.4, 0);
      } else if (scrollProgress <= 0.8) {
        // 65–80%: Enter cabin naturally, focus steering wheel & dashboard
        const t = (scrollProgress - 0.65) / 0.15;
        targetPos.set(
          THREE.MathUtils.lerp(4.8, -0.35, t) + targetMouseX * 0.2,
          THREE.MathUtils.lerp(1.1, 0.85, t),
          THREE.MathUtils.lerp(0.2, 0.25, t)
        );
        targetLook.set(
          THREE.MathUtils.lerp(0, -0.35, t),
          THREE.MathUtils.lerp(0.4, 0.7, t),
          THREE.MathUtils.lerp(0, -0.2, t)
        );
      } else if (scrollProgress <= 0.9) {
        // 80–90%: Camera exits cabin, elevated levitating exploded view
        const t = (scrollProgress - 0.8) / 0.1;
        targetPos.set(
          THREE.MathUtils.lerp(-0.35, 4.2, t) + targetMouseX,
          THREE.MathUtils.lerp(0.85, 3.2, t),
          THREE.MathUtils.lerp(0.25, 4.2, t)
        );
        targetLook.set(
          THREE.MathUtils.lerp(-0.35, 0, t),
          THREE.MathUtils.lerp(0.7, 0.6, t),
          THREE.MathUtils.lerp(-0.2, 0, t)
        );
      } else {
        // 90–100%: Reassemble, Engine Start & Final Hero Shot
        const t = (scrollProgress - 0.9) / 0.1;
        targetPos.set(
          THREE.MathUtils.lerp(4.2, 0, t) + targetMouseX,
          THREE.MathUtils.lerp(3.2, 1.1, t),
          THREE.MathUtils.lerp(4.2, 4.8, t)
        );
        targetLook.set(0, 0.5, 0);
      }

      // Smooth camera interpolation
      cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, targetPos.x, delta * 3.5);
      cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetPos.y, delta * 3.5);
      cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetPos.z, delta * 3.5);
      cameraRef.current.lookAt(targetLook);
    }

    // ----------------------------------------------------
    // GLASS WALL DYNAMICS (Z = 8)
    // ----------------------------------------------------
    if (glassWallRef.current && cameraRef.current) {
      const glassMat = glassWallRef.current.material as THREE.MeshPhysicalMaterial;
      if (cameraRef.current.position.z < 8.2) {
        glassMat.opacity = THREE.MathUtils.lerp(glassMat.opacity, 0.02, delta * 5);
      } else {
        glassMat.opacity = THREE.MathUtils.lerp(glassMat.opacity, 0.65, delta * 2);
      }
    }

    // ----------------------------------------------------
    // DRL HEADLIGHTS & SPOTLIGHT SEQUENCING
    // ----------------------------------------------------
    const drlBrightness =
      scrollProgress < 0.05
        ? scrollProgress * 10
        : scrollProgress >= 0.9
        ? 15.0
        : 8.0;

    if (drlLeftRef.current) drlLeftRef.current.intensity = drlBrightness;
    if (drlRightRef.current) drlRightRef.current.intensity = drlBrightness;

    if (spotlight1Ref.current) {
      spotlight1Ref.current.intensity = THREE.MathUtils.lerp(
        spotlight1Ref.current.intensity,
        scrollProgress > 0.35 ? 14 : 0,
        delta * 3
      );
    }

    if (spotlight2Ref.current) {
      spotlight2Ref.current.intensity = THREE.MathUtils.lerp(
        spotlight2Ref.current.intensity,
        scrollProgress > 0.45 ? 16 : 0,
        delta * 3
      );
    }

    if (cabinSpotlightRef.current) {
      cabinSpotlightRef.current.intensity = THREE.MathUtils.lerp(
        cabinSpotlightRef.current.intensity,
        scrollProgress >= 0.65 && scrollProgress <= 0.8 ? 8 : 0,
        delta * 4
      );
    }

    // Wheels rotation during side-profile inspection (Scroll 50-65%)
    if (wheelsGroupRef.current && scrollProgress >= 0.5 && scrollProgress <= 0.65) {
      wheelsGroupRef.current.children.forEach((w) => {
        w.rotation.x += delta * 1.5;
      });
    }
  });

  // Exploded offsets
  const expY = explodedFactor * 0.9;
  const expX = explodedFactor * 1.0;
  const expZ = explodedFactor * 1.2;

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1.8, 16]} fov={42} />
      <color attach="background" args={['#02040a']} />
      <fog attach="fog" args={['#02040a', 5, 22]} />

      {/* Atmospheric Floating Particles */}
      <Sparkles
        count={scrollProgress > 0.35 ? 160 : 80}
        scale={16}
        size={2.5}
        speed={0.4}
        opacity={0.35}
        color="#38bdf8"
      />

      {/* DRL Twin Laser Spotlights */}
      <group position={[0, 0.45, 2.1]}>
        <mesh position={[-0.8, 0, 0]}>
          <boxGeometry args={[0.38, 0.07, 0.05]} />
          <meshBasicMaterial color="#38bdf8" toneMapped={false} />
        </mesh>
        <spotLight
          ref={drlLeftRef}
          position={[-0.8, 0, 0.1]}
          target-position={[-0.8, -0.5, 12]}
          angle={0.35}
          intensity={5}
          color="#38bdf8"
          penumbra={0.8}
        />

        <mesh position={[0.8, 0, 0]}>
          <boxGeometry args={[0.38, 0.07, 0.05]} />
          <meshBasicMaterial color="#38bdf8" toneMapped={false} />
        </mesh>
        <spotLight
          ref={drlRightRef}
          position={[0.8, 0, 0.1]}
          target-position={[0.8, -0.5, 12]}
          angle={0.35}
          intensity={5}
          color="#38bdf8"
          penumbra={0.8}
        />
      </group>

      {/* Showroom Spotlights */}
      <spotLight
        ref={spotlight1Ref}
        position={[3, 8, 2]}
        target-position={[0, 0, 0]}
        angle={0.6}
        penumbra={0.5}
        color="#ffffff"
        castShadow
      />
      <spotLight
        ref={spotlight2Ref}
        position={[-3, 7, -2]}
        target-position={[0, 0, 0]}
        angle={0.7}
        penumbra={0.5}
        color="#38bdf8"
      />

      {/* Dedicated Cabin Spotlight */}
      <spotLight
        ref={cabinSpotlightRef}
        position={[-0.35, 2.5, 0.3]}
        target-position={[-0.35, 0.7, -0.2]}
        angle={0.5}
        penumbra={0.2}
        color="#38bdf8"
      />

      <ambientLight intensity={scrollProgress > 0.35 ? 0.75 : 0.55} />
      <directionalLight position={[10, 15, 10]} intensity={1.8} color="#ffffff" castShadow />
      <directionalLight position={[-10, 12, -10]} intensity={1.2} color="#38bdf8" />

      {/* BMW M5 3D MODEL ASSEMBLY */}
      <group ref={carGroupRef} position={[0, carYOffset, 0]}>
        {/* Main Body Chassis - Vibrant Metallic Marina Bay Blue Paint */}
        <mesh position={[0, 0.2 + expY * 0.2, 0]}>
          <boxGeometry args={[2.25, 0.65, 4.8]} />
          <meshPhysicalMaterial
            color="#1e3a8a"
            metalness={0.92}
            roughness={0.12}
            clearcoat={1.0}
            clearcoatRoughness={0.08}
            reflectivity={1.0}
          />
        </mesh>

        {/* Carbon Roof (Explodes UP) */}
        <mesh position={[0, 1.12 + expY * 1.8, -0.1]}>
          <boxGeometry args={[1.5, 0.05, 2.2]} />
          <meshStandardMaterial color="#0c0d12" roughness={0.5} metalness={0.85} />
        </mesh>

        {/* Windshield & Windows */}
        <mesh position={[0, 0.85 + expY * 1.1, -0.1]}>
          <boxGeometry args={[1.75, 0.6, 2.4]} />
          <meshPhysicalMaterial
            color="#030712"
            transparent
            opacity={0.8}
            roughness={0.05}
            transmission={0.85}
          />
        </mesh>

        {/* BMW Kidney Grille */}
        <group position={[0, 0.45 + expY * 0.3, 2.41 + expZ * 0.3]}>
          <mesh position={[-0.3, 0, 0]}>
            <boxGeometry args={[0.45, 0.35, 0.05]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0.3, 0, 0]}>
            <boxGeometry args={[0.45, 0.35, 0.05]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* 4.4L M TwinPower Turbo V8 Engine Block (Explodes UP & FORWARD) */}
        <group position={[0, 0.45 + expY * 1.5, 1.2 + expZ * 0.5]}>
          <mesh>
            <boxGeometry args={[0.95, 0.52, 0.9]} />
            <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.9} />
          </mesh>
          {/* Twin Turbos */}
          <mesh position={[-0.25, 0.32, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
            <meshStandardMaterial color="#38bdf8" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0.25, 0.32, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
            <meshStandardMaterial color="#38bdf8" metalness={0.9} roughness={0.2} />
          </mesh>

          {/* Label during Exploded View */}
          {scrollProgress >= 0.8 && scrollProgress <= 0.9 && (
            <Html position={[0, 0.8, 0]} center className="pointer-events-none">
              <div className="bg-black/90 border border-blue-500/50 p-3 rounded-xl shadow-2xl backdrop-blur-md text-nowrap">
                <span className="text-[9px] font-mono text-blue-400 block uppercase font-bold">
                  01 • POWERPLANT
                </span>
                <span className="text-xs font-mono text-white font-bold block">
                  4.4L TwinPower V8 • 617 HP
                </span>
              </div>
            </Html>
          )}
        </group>

        {/* Cockpit Instrument Cluster & Steering Wheel */}
        <group position={[0, 0.7 + expY * 1.0, 0.3 + expZ * 0.4]}>
          {/* Dashboard */}
          <mesh>
            <boxGeometry args={[1.4, 0.25, 0.5]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} />
          </mesh>

          {/* Illuminated Digital Display Screen */}
          <mesh position={[-0.1, 0.18, -0.15]} rotation={[-Math.PI / 12, 0, 0]}>
            <planeGeometry args={[0.9, 0.22]} />
            <meshBasicMaterial
              color={scrollProgress >= 0.65 ? '#0284c7' : '#0f172a'}
            />
          </mesh>

          {/* Steering Wheel */}
          <mesh position={[-0.35, 0.1, -0.2]} rotation={[Math.PI / 6, 0, 0]}>
            <torusGeometry args={[0.18, 0.03, 16, 32]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} />
          </mesh>

          {/* Cockpit HUD Overlay when camera is inside (Scroll 65-80%) */}
          {scrollProgress >= 0.65 && scrollProgress <= 0.8 && (
            <Html position={[-0.35, 0.35, -0.2]} center className="pointer-events-none">
              <div className="bg-black/95 border border-blue-500/60 p-3 rounded-xl shadow-2xl backdrop-blur-xl text-nowrap">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  <span className="text-[9px] font-mono text-blue-400 uppercase font-bold">
                    BMW M Curved Display
                  </span>
                </div>
                <div className="text-xs font-mono text-white font-bold">
                  M SETUP: SPORT+ • TRACK MODE
                </div>
                <div className="text-[10px] font-mono text-zinc-400">
                  Head-Up Display Active • M Differential
                </div>
              </div>
            </Html>
          )}
        </group>

        {/* Quad Exhaust Pipes (Explodes BACKWARDS) */}
        <group position={[0, 0.2 + expY * 0.2, -2.25 - expZ * 1.2]}>
          {[-0.6, -0.3, 0.3, 0.6].map((xOff, i) => (
            <mesh key={i} position={[xOff, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.07, 0.07, 0.3, 16]} />
              <meshStandardMaterial color="#0f172a" metalness={0.95} roughness={0.1} />
            </mesh>
          ))}
        </group>

        {/* Quad Wheels & M Carbon Ceramic Brake Calipers */}
        <group ref={wheelsGroupRef}>
          {/* Front Left */}
          <group position={[-1.15 - expX * 1.1, 0.1 + expY * 0.1, 1.3]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.42, 0.42, 0.35, 32]} />
              <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
            </mesh>
            <mesh position={[0.2, 0.15, 0]}>
              <boxGeometry args={[0.1, 0.22, 0.18]} />
              <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>

          {/* Front Right */}
          <group position={[1.15 + expX * 1.1, 0.1 + expY * 0.1, 1.3]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.42, 0.42, 0.35, 32]} />
              <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
            </mesh>
            <mesh position={[-0.2, 0.15, 0]}>
              <boxGeometry args={[0.1, 0.22, 0.18]} />
              <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>

          {/* Rear Left */}
          <group position={[-1.15 - expX * 1.1, 0.1 + expY * 0.1, -1.3]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.45, 0.45, 0.4, 32]} />
              <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
            </mesh>
            <mesh position={[0.2, 0.15, 0]}>
              <boxGeometry args={[0.1, 0.22, 0.18]} />
              <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>

          {/* Rear Right */}
          <group position={[1.15 + expX * 1.1, 0.1 + expY * 0.1, -1.3]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.45, 0.45, 0.4, 32]} />
              <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
            </mesh>
            <mesh position={[-0.2, 0.15, 0]}>
              <boxGeometry args={[0.1, 0.22, 0.18]} />
              <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
            </mesh>
          </group>
        </group>
      </group>

      {/* Refractive Glass Barrier (Z = 8) */}
      <mesh ref={glassWallRef} position={[0, 2, 8]}>
        <planeGeometry args={[20, 10]} />
        <meshPhysicalMaterial
          color="#1e293b"
          transparent
          opacity={0.65}
          roughness={0.1}
          metalness={0.9}
          transmission={0.6}
          clearcoat={1.0}
        />
      </mesh>

      {/* Floating Magnetic Levitation Podium */}
      <group position={[0, -0.05, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[3.2, 3.4, 0.1, 64]} />
          <meshStandardMaterial color="#0f172a" metalness={0.95} roughness={0.15} />
        </mesh>
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[3.0, 3.0, 0.02, 64]} />
          <meshBasicMaterial color={engineRunning || scrollProgress >= 0.9 ? '#38bdf8' : '#0284c7'} />
        </mesh>
      </group>

      {/* Mirror Showroom Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mirror={0.8}
          mixBlur={0.8}
          mixStrength={2.5}
          roughness={0.15}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#030712"
          metalness={0.9}
        />
      </mesh>
    </>
  );
}

// =========================================================
// MAIN CINEMATIC HERO FILM COMPONENT
// =========================================================
export const CinematicHeroFilm: React.FC<CinematicHeroProps> = ({ onExploreVehicle, onOpenShowroom }) => {
  const [scrollProgress, setScrollProgress] = useState(0); // 0.00 to 1.00
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [engineStarted, setEngineStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { triggerRev, triggerEngineStart, isPlaying } = useAudioEngine();

  // Mouse Parallax listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Continuous Wheel, Touch, and Keyboard Scroll Controller
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      setScrollProgress((prev) => {
        const delta = e.deltaY * 0.00065;
        const next = Math.min(1.0, Math.max(0.0, prev + delta));

        if (next >= 0.92 && !engineStarted) {
          setEngineStarted(true);
          triggerEngineStart();
        }
        return next;
      });
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const deltaY = touchStartY - e.touches[0].clientY;
        touchStartY = e.touches[0].clientY;
        setScrollProgress((prev) => {
          const next = Math.min(1.0, Math.max(0.0, prev + deltaY * 0.0015));
          if (next >= 0.92 && !engineStarted) {
            setEngineStarted(true);
            triggerEngineStart();
          }
          return next;
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        setScrollProgress((prev) => Math.min(1.0, prev + 0.15));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        setScrollProgress((prev) => Math.max(0.0, prev - 0.15));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [engineStarted, triggerEngineStart]);

  // Jump to specific chapter directly
  const jumpToChapter = (targetProgress: number) => {
    setScrollProgress(targetProgress);
    if (targetProgress >= 0.9 && !engineStarted) {
      setEngineStarted(true);
      triggerEngineStart();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden font-sans select-none">
      {/* 3D RENDER CANVAS */}
      <div className="absolute inset-0 z-0">
        <WebGLErrorBoundary>
          <Canvas
            shadows
            gl={{
              antialias: true,
              alpha: false,
              powerPreference: 'high-performance',
              failIfMajorPerformanceCaveat: false,
              preserveDrawingBuffer: false,
              stencil: false,
              depth: true,
            }}
            onCreated={({ gl }) => {
              gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
              const dom = gl.domElement;
              if (dom) {
                dom.addEventListener(
                  'webglcontextlost',
                  (e) => {
                    e.preventDefault();
                  },
                  false
                );
              }
            }}
          >
            <Suspense fallback={null}>
              <ContinuousFilm3D
                scrollProgress={scrollProgress}
                mousePos={mousePos}
                engineRunning={engineStarted}
              />
            </Suspense>
          </Canvas>
        </WebGLErrorBoundary>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90" />

      {/* Top Header / Skip Button */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-3">
        <button
          onClick={() => jumpToChapter(1.0)}
          data-cursor="HERO REVEAL"
          className="px-4 py-2 rounded-full border border-white/15 bg-black/70 backdrop-blur-md text-xs font-mono text-zinc-300 hover:text-white hover:border-blue-400 transition-all flex items-center gap-2"
        >
          <span>Jump to Hero Shot</span>
          <SkipForward className="w-3.5 h-3.5 text-blue-400" />
        </button>
      </div>

      {/* CHAPTER OVERLAYS ALIGNED TO 100% SCROLL TIMELINE */}

      {/* 1. SCROLL 0 - 10%: BLACK SCREEN & INITIAL DRL SILENCE */}
      <AnimatePresence>
        {scrollProgress <= 0.1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 pointer-events-none"
          >
            <span className="text-xs font-mono tracking-[0.4em] text-blue-400 uppercase mb-4 block animate-pulse">
              Chapter 01 • Genesis
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white font-sans">
              ENGINEERING.
            </h1>
            <p className="text-xs font-mono text-zinc-400 mt-4 tracking-widest uppercase">
              Scroll down to begin continuous film...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. SCROLL 10 - 20%: APPROACHING HEADLIGHTS */}
      <AnimatePresence>
        {scrollProgress > 0.1 && scrollProgress <= 0.2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 pointer-events-none"
          >
            <span className="text-xs font-mono tracking-[0.4em] text-blue-400 uppercase mb-4 block">
              Chapter 02 • The Approach
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight text-white font-sans">
              PRECISION & POWER.
            </h1>
            <p className="text-xs font-mono text-zinc-400 mt-3">
              Twin Laser DRLs Illuminating Floor Reflections
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. SCROLL 20 - 35%: PASSING THROUGH GLASS WALL */}
      <AnimatePresence>
        {scrollProgress > 0.2 && scrollProgress <= 0.35 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none px-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-black/80 backdrop-blur-md text-[11px] font-mono tracking-widest text-blue-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              Chapter 03 • Refractive Glass Barrier
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase text-white mt-3 font-sans">
              Entering Private Concept Showroom
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. SCROLL 35 - 50%: THE HERO REVEAL & NAVIGATION UNLOCKED */}
      <AnimatePresence>
        {scrollProgress > 0.35 && scrollProgress <= 0.5 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="absolute top-1/4 left-12 z-20 pointer-events-none max-w-md"
          >
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
              Chapter 04 • The Hero Reveal
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              BMW <span className="text-blue-500 font-mono">M5</span>
            </h2>
            <p className="text-xs font-mono text-zinc-300 mt-2 leading-relaxed">
              Spotlights activate. Glossy Carbon Black finish reflecting architectural contours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. SCROLL 50 - 65%: SIDE PROFILE, ROTATING WHEELS & BRAKING */}
      <AnimatePresence>
        {scrollProgress > 0.5 && scrollProgress <= 0.65 && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="absolute bottom-24 right-12 z-20 pointer-events-none max-w-sm bg-black/80 p-6 rounded-2xl border border-white/15 backdrop-blur-xl"
          >
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
              Chapter 05 • Side Dynamics & Braking
            </span>
            <h3 className="text-xl font-bold uppercase text-white font-sans">
              M Carbon Ceramic Brakes
            </h3>
            <p className="text-xs font-mono text-zinc-300 mt-1">
              Gold 6-Piston Calipers • 400mm Carbon Discs • Rotating M Forged Wheels
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. SCROLL 65 - 80%: DIGITAL COCKPIT ENTRY */}
      <AnimatePresence>
        {scrollProgress > 0.65 && scrollProgress <= 0.8 && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="absolute top-20 left-12 z-20 pointer-events-none max-w-md bg-black/80 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-xl"
          >
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">
              Chapter 06 • Digital Cockpit Entry
            </span>
            <h3 className="text-xl font-bold uppercase text-white font-sans">
              BMW Curved Display & M Setup
            </h3>
            <p className="text-xs font-mono text-zinc-300 mt-1">
              Ambient LED lines active. Steering wheel focused. M Differential engaged.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. SCROLL 80 - 90%: LEVITATING EXPLODED ENGINEERING */}
      <AnimatePresence>
        {scrollProgress > 0.8 && scrollProgress <= 0.9 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center bg-black/85 px-8 py-4 rounded-2xl border border-blue-500/40 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Layers className="w-4 h-4 text-blue-400 animate-spin" />
              <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-widest">
                Chapter 07 • Levitating Exploded Engineering
              </span>
            </div>
            <h3 className="text-2xl font-black uppercase text-white font-sans">
              Magnetic Component Separation
            </h3>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              Powertrain, Carbon Roof, Wheels & Chassis floating in alignment.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 8. SCROLL 90 - 100%: FINAL HERO SHOT & MASTER TAGLINE */}
      <AnimatePresence>
        {scrollProgress > 0.9 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-12 pointer-events-none"
          >
            {/* Top Badge */}
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-black/80 backdrop-blur-md text-xs font-mono text-blue-400 uppercase">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Chapter 08 • Awakening • BMW M5 Competition</span>
              </div>
            </div>

            {/* Bottom Hero Tagline & Controls */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 pointer-events-auto">
              <div className="lg:col-span-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-[0.3em] block font-semibold">
                    The Ultimate Driving Machine
                  </span>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight font-sans">
                    Where Machines <span className="text-blue-500 font-mono">Become Art.</span>
                  </h1>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 font-medium tracking-widest uppercase pt-1">
                    Designed & Developed by Pushkar Mishra
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onExploreVehicle(HERO_VEHICLE)}
                    data-cursor="INSPECT"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-mono text-xs tracking-widest uppercase font-semibold flex items-center gap-2 shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_55px_rgba(59,130,246,0.9)] transition-all"
                  >
                    <span>Inspect Vehicle</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenShowroom}
                    data-cursor="ENTER 3D"
                    className="px-7 py-4 rounded-xl border border-white/20 bg-black/70 backdrop-blur-md text-white font-mono text-xs tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                    <span>Enter 3D Studio</span>
                  </button>

                  <button
                    onClick={() => triggerRev('V8')}
                    className={`p-4 rounded-xl border transition-all ${
                      isPlaying
                        ? 'border-blue-500 bg-blue-600/30 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.7)] animate-pulse'
                        : 'border-white/20 bg-black/70 text-zinc-300 hover:border-blue-400'
                    }`}
                    title="Rev V8 Engine"
                  >
                    <Volume2 className="w-4 h-4 text-blue-400" />
                  </button>
                </div>
              </div>

              {/* Quick Spec Metrics */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 bg-black/80 p-5 rounded-2xl border border-white/15 backdrop-blur-2xl">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase block">Power</span>
                  <span className="text-lg font-mono font-bold text-blue-400">617 HP</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase block">0-60 MPH</span>
                  <span className="text-lg font-mono font-bold text-white">3.1s</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase block">Engine</span>
                  <span className="text-lg font-mono font-bold text-white">4.4L V8</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase block">MSRP</span>
                  <span className="text-lg font-mono font-bold text-white">$111,800</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTINUOUS FILM TIMELINE PROGRESS TRACKER */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-auto">
        {/* Chapter Quick Jump Pills */}
        <div className="hidden sm:flex items-center gap-1.5 bg-black/80 p-1.5 rounded-full border border-white/15 backdrop-blur-md">
          {[
            { progress: 0.05, label: '01' },
            { progress: 0.15, label: '02' },
            { progress: 0.28, label: '03' },
            { progress: 0.42, label: '04' },
            { progress: 0.58, label: '05' },
            { progress: 0.72, label: '06' },
            { progress: 0.85, label: '07' },
            { progress: 0.95, label: '08' },
          ].map((ch) => (
            <button
              key={ch.label}
              onClick={() => jumpToChapter(ch.progress)}
              className={`w-7 h-7 rounded-full text-[10px] font-mono transition-all ${
                Math.abs(scrollProgress - ch.progress) < 0.07
                  ? 'bg-blue-600 text-white font-bold scale-110 shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {ch.label}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        {scrollProgress < 0.95 && (
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            <span>Scroll Timeline ({Math.round(scrollProgress * 100)}%)</span>
            <ChevronDown className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
          </div>
        )}
      </div>
    </div>
  );
};
