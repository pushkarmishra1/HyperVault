import React, { useState } from 'react';
import { HeroSection } from '../../components/Hero/HeroSection';
import { BrandCampusSection } from '../../components/Campus/BrandCampusSection';
import { BrandShowroomTransition } from '../../components/Campus/BrandShowroomTransition';
import { BrandShowroomView } from '../../components/Campus/BrandShowroomView';
import { FeaturedSpotlightSection } from '../../components/Sections/FeaturedSpotlightSection';
import { AetherBespokeCustomizer } from '../../components/Sections/AetherBespokeCustomizer';
import { HeritageTimelineSection } from '../../components/Sections/HeritageTimelineSection';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { EngineAudioSimulatorModal } from '../../components/Audio/EngineAudioSimulatorModal';
import { TestDriveBookingModal } from '../../components/Modals/TestDriveBookingModal';
import { CompareVehiclesModal } from '../../components/Modals/CompareVehiclesModal';
import { HERO_VEHICLE, VEHICLES } from '../../data/vehicles';
import { BrandInfo } from '../../types/campus';

export const HomePage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<BrandInfo | null>(null);
  const [isTransiting, setIsTransiting] = useState(false);
  const [targetBrand, setTargetBrand] = useState<BrandInfo | null>(null);

  // Modals
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [audioVehicle, setAudioVehicle] = useState(HERO_VEHICLE);
  
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);
  const [testDriveVehicle, setTestDriveVehicle] = useState(HERO_VEHICLE);

  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareVehicle, setCompareVehicle] = useState(HERO_VEHICLE);

  // Brand selection with camera shutter transit effect
  const handleSelectBrand = (brand: BrandInfo) => {
    setTargetBrand(brand);
    setIsTransiting(true);
  };

  const handleTransitionComplete = () => {
    setSelectedBrand(targetBrand);
    setIsTransiting(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCampus = () => {
    setSelectedBrand(null);
    setTimeout(() => {
      const el = document.getElementById('campus-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  // Open triggers
  const handleOpenAudio = (veh?: typeof HERO_VEHICLE) => {
    if (veh) setAudioVehicle(veh);
    setIsAudioModalOpen(true);
  };

  const handleOpenTestDrive = (veh?: typeof HERO_VEHICLE) => {
    if (veh) setTestDriveVehicle(veh);
    setIsTestDriveModalOpen(true);
  };

  const handleOpenCompare = (veh?: typeof HERO_VEHICLE) => {
    if (veh) setCompareVehicle(veh);
    setIsCompareModalOpen(true);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen relative font-sans">
      {/* NAVBAR */}
      <Navbar
        onOpenTestDrive={() => handleOpenTestDrive(HERO_VEHICLE)}
        onOpenAudioEngine={() => handleOpenAudio(HERO_VEHICLE)}
        onOpenCompare={() => handleOpenCompare(HERO_VEHICLE)}
        onSelectBrand={handleSelectBrand}
      />

      {/* FULL-SCREEN CAMERA SHUTTER TRANSITION OVERLAY */}
      {isTransiting && targetBrand && (
        <BrandShowroomTransition
          brand={targetBrand}
          onTransitionComplete={handleTransitionComplete}
        />
      )}

      {/* VIEW MODE A: BRAND SHOWROOM SUITE VIEW */}
      {selectedBrand ? (
        <BrandShowroomView
          brand={selectedBrand}
          onBackToAtrium={handleBackToCampus}
          onSelectBrand={handleSelectBrand}
          onOpenTestDrive={handleOpenTestDrive}
          onOpenAudioEngine={handleOpenAudio}
          onOpenCompare={handleOpenCompare}
        />
      ) : (
        /* VIEW MODE B: CONTINUOUS LONG HOMEPAGE EXPERIENCE (10 SECTIONS) */
        <main className="w-full">
          {/* SECTION 1: FULL-SCREEN MAIN HERO WITH BMW M5 */}
          <HeroSection
            heroVehicle={HERO_VEHICLE}
            onExploreCampus={() => {
              const el = document.getElementById('campus-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onInspectVehicle={(veh) => {
              // Find BMW brand info
              const bmwBrand = VEHICLES.find((v) => v.id === veh.id);
              if (bmwBrand) handleOpenTestDrive(veh);
            }}
            onOpenAudioEngine={() => handleOpenAudio(HERO_VEHICLE)}
          />

          {/* SECTION 2: BRAND CAMPUS (9 LUXURY PAVILIONS) */}
          <BrandCampusSection onSelectBrand={handleSelectBrand} />

          {/* SECTION 3: APEX SPOTLIGHT FEATURED SUPERCAR FILMSTRIP */}
          <FeaturedSpotlightSection
            onInspectVehicle={(veh) => handleOpenTestDrive(veh)}
            onOpenTestDrive={(veh) => handleOpenTestDrive(veh)}
          />

          {/* SECTION 4: BESPOKE SPECIFICATION STUDIO */}
          <AetherBespokeCustomizer />

          {/* SECTION 5: HERITAGE & GENESIS MOTORSPORT TIMELINE */}
          <HeritageTimelineSection />
        </main>
      )}

      {/* FOOTER */}
      <Footer />

      {/* MODALS */}
      <EngineAudioSimulatorModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
        vehicle={audioVehicle}
      />

      <TestDriveBookingModal
        isOpen={isTestDriveModalOpen}
        onClose={() => setIsTestDriveModalOpen(false)}
        vehicle={testDriveVehicle}
      />

      <CompareVehiclesModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        initialVehicle={compareVehicle}
      />
    </div>
  );
};
