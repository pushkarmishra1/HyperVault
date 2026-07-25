import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, MeshReflectorMaterial, Sparkles, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { BRANDS_INFO } from '../../data/brands';
import { VEHICLES } from '../../data/vehicles';
import { BrandInfo } from '../../types/campus';
import { WebGLErrorBoundary } from '../Common/WebGLErrorBoundary';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Sparkles as SparklesIcon, Eye, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MainAtrium3DProps {
  selectedBrand: BrandInfo | null;
  hoveredBrand: BrandInfo | null;
  isTransiting: boolean;
  onHoverBrand: (brand: BrandInfo | null) => void;
  onSelectBrand: (brand: BrandInfo) => void;
}

// 3D Supercar Model for Turntable Platforms
function ShowcaseCar3D({
  color,
  isHovered,
  isSelected,
  scale = 1,
  rotationSpeed = 0.3,
}: {
  color: string;
  isHovered?: boolean;
  isSelected?: boolean;
  scale?: number;
  rotationSpeed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      const speed = isHovered || isSelected ? delta * 1.0 : delta * rotationSpeed;
      groupRef.current.rotation.y += speed;
    }
  });

  const carColor = new THREE.Color(color);

  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: carColor,
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    reflectivity: 1.0,
  });

  const carbonMaterial = new THREE.MeshStandardMaterial({
    color: '#0d1117',
    roughness: 0.3,
    metalness: 0.85,
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#0f172a',
    transparent: true,
    opacity: 0.8,
    roughness: 0.05,
    transmission: 0.85,
  });

  const headlightMaterial = new THREE.MeshBasicMaterial({
    color: isHovered || isSelected ? '#38bdf8' : '#f0f9ff',
  });

  const taillightMaterial = new THREE.MeshBasicMaterial({
    color: '#ef4444',
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]} position={[0, 0.45, 1.8]}>
      {/* Sleek Aerodynamic Body */}
      <mesh material={bodyMaterial} position={[0, 0.22, 0]}>
        <boxGeometry args={[1.9, 0.4, 3.9]} />
      </mesh>

      {/* Hood Nose */}
      <mesh material={bodyMaterial} position={[0, 0.16, 1.85]} rotation={[0.12, 0, 0]}>
        <boxGeometry args={[1.7, 0.22, 0.9]} />
      </mesh>

      {/* Cockpit Glass Canopy */}
      <mesh material={glassMaterial} position={[0, 0.58, -0.1]}>
        <boxGeometry args={[1.4, 0.42, 1.85]} />
      </mesh>

      {/* Carbon Roof & Rear Wing Spoiler */}
      <mesh material={carbonMaterial} position={[0, 0.81, -0.3]}>
        <boxGeometry args={[1.25, 0.04, 1.45]} />
      </mesh>
      <mesh material={carbonMaterial} position={[0, 0.72, -1.95]}>
        <boxGeometry args={[1.7, 0.06, 0.4]} />
      </mesh>
      <mesh material={carbonMaterial} position={[-0.65, 0.55, -1.95]}>
        <boxGeometry args={[0.08, 0.3, 0.18]} />
      </mesh>
      <mesh material={carbonMaterial} position={[0.65, 0.55, -1.95]}>
        <boxGeometry args={[0.08, 0.3, 0.18]} />
      </mesh>

      {/* 4 Alloy Wheels */}
      {[
        [-0.95, 0.0, 1.15],
        [0.95, 0.0, 1.15],
        [-0.95, 0.0, -1.15],
        [0.95, 0.0, -1.15],
      ].map(([wx, wy, wz], idx) => (
        <group key={idx} position={[wx, wy, wz]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.36, 0.36, 0.24, 24]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22, 0.22, 0.26, 16]} />
            <meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.95} />
          </mesh>
        </group>
      ))}

      {/* Headlights & Taillights */}
      <mesh material={headlightMaterial} position={[-0.68, 0.24, 2.22]}>
        <boxGeometry args={[0.38, 0.1, 0.08]} />
      </mesh>
      <mesh material={headlightMaterial} position={[0.68, 0.24, 2.22]}>
        <boxGeometry args={[0.38, 0.1, 0.08]} />
      </mesh>
      <mesh material={taillightMaterial} position={[-0.68, 0.36, -1.98]}>
        <boxGeometry args={[0.42, 0.08, 0.06]} />
      </mesh>
      <mesh material={taillightMaterial} position={[0.68, 0.36, -1.98]}>
        <boxGeometry args={[0.42, 0.08, 0.06]} />
      </mesh>
    </group>
  );
}

// Centerstage Hero Supercar Exhibit
function CenterstageSupercarExhibit({ onInspect }: { onInspect: () => void }) {
  const heroGroup = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (heroGroup.current) {
      heroGroup.current.rotation.y += delta * 0.35; // Continuous smooth 360 spin
    }
  });

  return (
    <group position={[0, 0, 1.5]}>
      {/* Glowing Revolving Base Turntable */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[3.8, 4.0, 0.22, 64]} />
        <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Neon Ring Trim on Turntable */}
      <mesh position={[0, 0.22, 0]}>
        <torusGeometry args={[3.82, 0.04, 16, 64]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      <pointLight position={[0, 0.8, 0]} intensity={12} color="#38bdf8" />

      {/* Spinning Centerstage Hero 3D Car */}
      <group ref={heroGroup} position={[0, 0.12, 0]}>
        <ShowcaseCar3D color="#0055ff" scale={1.15} rotationSpeed={0} />
      </group>

      {/* Floating 3D Badge directly above center car */}
      <Html position={[0, 3.2, 0]} center className="pointer-events-auto">
        <button
          onClick={onInspect}
          className="group flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-black/90 border border-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.8)] backdrop-blur-xl cursor-pointer hover:scale-105 transition-all text-nowrap"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-blue-300 font-bold uppercase">
              CENTERSTAGE FLAGSHIP EXHIBIT
            </span>
          </div>

          <h2 className="text-xl font-black uppercase text-white font-sans tracking-tight flex items-center gap-2 group-hover:text-blue-300 transition-colors">
            BMW M5 Competition
          </h2>

          <div className="mt-2.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-xs font-mono text-white font-bold group-hover:bg-blue-500 transition-colors shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            <span>INSPECT IN 3D SHOWROOM</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </Html>
    </group>
  );
}

function AtriumSceneContent({
  selectedBrand,
  hoveredBrand,
  isTransiting,
  onHoverBrand,
  onSelectBrand,
  atriumOffset,
  onOpenShowroom,
}: MainAtrium3DProps & { atriumOffset: number; onOpenShowroom: () => void }) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const activeFocusBrand = selectedBrand || hoveredBrand;

  useFrame((state, delta) => {
    if (!cameraRef.current) return;
    const clampedDelta = Math.min(delta, 0.05);

    // Target Camera Position
    let targetPos = new THREE.Vector3(atriumOffset * 12, 3.2, 16 - Math.abs(atriumOffset) * 2);
    let targetLook = new THREE.Vector3(atriumOffset * 8, 1.5, -4);

    if (isTransiting && selectedBrand) {
      const [bx, by, bz] = selectedBrand.position;
      targetPos.set(bx * 0.85, by + 1.2, bz + 4.5);
      targetLook.set(bx, by + 0.8, bz);
    } else if (activeFocusBrand) {
      const [bx, by, bz] = activeFocusBrand.position;
      targetPos.set(bx * 0.6, by + 1.8, bz + 7.5);
      targetLook.set(bx, by + 0.8, bz);
    } else {
      const time = state.clock.getElapsedTime() * 0.15;
      targetPos.x += Math.sin(time) * 1.5;
      targetPos.y += Math.cos(time * 0.5) * 0.2;
    }

    const lerpSpeed = isTransiting ? clampedDelta * 3.8 : clampedDelta * 2.5;
    cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, targetPos.x, lerpSpeed);
    cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetPos.y, lerpSpeed);
    cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetPos.z, lerpSpeed);
    cameraRef.current.lookAt(targetLook);
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 3.2, 16]} fov={45} />

      {/* Bright, Radiant Studio Background & Atmospheric Lighting */}
      <color attach="background" args={['#0f172a']} />
      <fog attach="fog" args={['#0f172a', 30, 100]} />

      {/* Ambient & Directional Studio Lights */}
      <ambientLight intensity={1.8} />
      <directionalLight position={[0, 25, 15]} intensity={4.0} color="#ffffff" />
      <directionalLight position={[-15, 12, 10]} intensity={2.5} color="#38bdf8" />
      <directionalLight position={[15, 12, 10]} intensity={2.5} color="#fbbf24" />

      {/* Centerstage Spotlight directly on center car */}
      <spotLight
        position={[0, 16, 3]}
        target-position={[0, 0.2, 1.5]}
        angle={0.7}
        penumbra={0.4}
        intensity={28}
        color="#38bdf8"
        castShadow
      />

      <Sparkles count={150} scale={30} size={2.5} speed={0.4} opacity={0.4} color="#38bdf8" />

      {/* CENTERSTAGE HERO EXHIBIT IN ATRIUM */}
      <CenterstageSupercarExhibit onInspect={onOpenShowroom} />

      {/* ARCHITECTURAL BRAND PAVILION GATES & 3D CARS */}
      <group position={[0, 0, 0]}>
        {BRANDS_INFO.map((brand) => {
          const isHovered = hoveredBrand?.id === brand.id;
          const isSelected = selectedBrand?.id === brand.id;
          const [bx, by, bz] = brand.position;

          return (
            <group
              key={brand.id}
              position={[bx, by, bz]}
              onPointerOver={(e) => {
                e.stopPropagation();
                onHoverBrand(brand);
              }}
              onPointerOut={() => onHoverBrand(null)}
              onClick={(e) => {
                e.stopPropagation();
                onSelectBrand(brand);
              }}
            >
              {/* Gate Archway Frame */}
              <mesh position={[0, 2.2, 0]}>
                <boxGeometry args={[5.2, 4.4, 0.6]} />
                <meshStandardMaterial
                  color={isSelected || isHovered ? '#334155' : '#1e293b'}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>

              {/* Glowing Gate Neon Frame */}
              <mesh position={[0, 2.2, 0.32]}>
                <planeGeometry args={[4.8, 4.0]} />
                <meshBasicMaterial color={brand.color} opacity={isHovered ? 0.45 : 0.25} transparent />
              </mesh>

              {/* Neon LED Trims */}
              <mesh position={[0, 4.35, 0.32]}>
                <boxGeometry args={[5.0, 0.12, 0.1]} />
                <meshBasicMaterial color={brand.color} />
              </mesh>
              <mesh position={[-2.55, 2.2, 0.32]}>
                <boxGeometry args={[0.12, 4.2, 0.1]} />
                <meshBasicMaterial color={brand.color} />
              </mesh>
              <mesh position={[2.55, 2.2, 0.32]}>
                <boxGeometry args={[0.12, 4.2, 0.1]} />
                <meshBasicMaterial color={brand.color} />
              </mesh>

              {/* Glowing Turntable Pedestal */}
              <mesh position={[0, 0.08, 1.8]}>
                <cylinderGeometry args={[2.5, 2.7, 0.16, 32]} />
                <meshStandardMaterial
                  color={isHovered || isSelected ? '#334155' : '#1e293b'}
                  metalness={0.9}
                  roughness={0.2}
                />
              </mesh>
              <mesh position={[0, 0.17, 1.8]}>
                <torusGeometry args={[2.52, 0.03, 16, 48]} />
                <meshBasicMaterial color={brand.color} />
              </mesh>

              {/* 3D SUPERCAR MODEL ON PEDESTAL */}
              <ShowcaseCar3D
                color={brand.color}
                isHovered={isHovered}
                isSelected={isSelected}
                scale={0.95}
              />

              {/* Pavilion Spotlight */}
              <spotLight
                position={[0, 6, 3]}
                target-position={[0, 0.5, 1.8]}
                angle={0.6}
                intensity={isHovered || isSelected ? 22 : 12}
                color={brand.color}
              />

              {/* Interactive 3D Badge */}
              <Html position={[0, 3.8, 1.8]} center className="pointer-events-auto">
                <button
                  onClick={() => onSelectBrand(brand)}
                  className={`group flex flex-col items-center justify-center px-4 py-2.5 rounded-2xl border transition-all duration-300 text-nowrap cursor-pointer ${
                    isSelected || isHovered
                      ? 'bg-black/95 border-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.7)] scale-105'
                      : 'bg-black/85 border-white/20 hover:border-white/50 backdrop-blur-md'
                  }`}
                  style={{
                    borderColor: isHovered || isSelected ? brand.color : undefined,
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span
                      className="w-2 h-2 rounded-full animate-ping"
                      style={{ backgroundColor: brand.color }}
                    />
                    <span className="text-[9px] font-mono tracking-widest text-zinc-300 uppercase font-bold">
                      {brand.name}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 text-[10px] font-mono text-white font-bold group-hover:bg-blue-500 transition-colors shadow-md">
                    <span>EXPLORE PAVILION</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Html>
            </group>
          );
        })}
      </group>

      {/* MIRROR POLISHED SHOWROOM FLOOR */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial
          color="#1e293b"
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
    </>
  );
}

export const MainAtrium3D: React.FC<MainAtrium3DProps> = (props) => {
  const [atriumOffset, setAtriumOffset] = useState(0);
  const navigate = useNavigate();

  // Handle navigation inputs
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      setAtriumOffset((prev) => {
        const delta = e.deltaY * 0.001;
        return Math.min(1.0, Math.max(-1.0, prev + delta));
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setAtriumOffset((prev) => Math.min(1.0, Math.max(-1.0, prev + 0.3)));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setAtriumOffset((prev) => Math.min(1.0, Math.max(-1.0, prev - 0.3)));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full h-full relative select-none">
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
          }}
        >
          <AtriumSceneContent
            {...props}
            atriumOffset={atriumOffset}
            onOpenShowroom={() => navigate('/showroom')}
          />
        </Canvas>
      </WebGLErrorBoundary>

      {/* FLOATING DIRECT SUPERCAR CAROUSEL SELECTOR AT BOTTOM */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 max-w-full px-4 pointer-events-auto">
        <div className="flex items-center gap-2 bg-black/90 p-2.5 px-5 rounded-full border border-white/20 backdrop-blur-xl text-xs font-mono text-zinc-300 shadow-2xl overflow-x-auto max-w-[95vw] no-scrollbar">
          <button
            onClick={() => setAtriumOffset((prev) => Math.max(-1.0, prev - 0.4))}
            className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-colors text-white shrink-0"
            title="Pan Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-[11px] font-bold uppercase text-blue-400 tracking-wider shrink-0 flex items-center gap-1.5 px-2 border-r border-white/15">
            <Zap className="w-3.5 h-3.5" />
            3D CARS:
          </span>

          {VEHICLES.map((veh) => (
            <button
              key={veh.id}
              onClick={() => navigate('/showroom')}
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-blue-600/80 hover:text-white text-[11px] font-mono text-zinc-300 font-bold tracking-tight transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{veh.brand} {veh.model}</span>
              <ArrowRight className="w-3 h-3 opacity-60" />
            </button>
          ))}

          <button
            onClick={() => setAtriumOffset((prev) => Math.min(1.0, prev + 0.4))}
            className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-colors text-white shrink-0"
            title="Pan Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
