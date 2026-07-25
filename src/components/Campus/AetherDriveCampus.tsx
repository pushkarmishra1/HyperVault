import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { BrandInfo, CampusViewMode } from '../../types/campus';
import { BRANDS_INFO } from '../../data/brands';
import { MainAtrium3D } from './MainAtrium3D';
import { CameraTravelTransition } from './CameraTravelTransition';
import { BrandShowroomView } from './BrandShowroomView';
import { CinematicHeroFilm } from '../Hero/CinematicHeroFilm';
import { CampusHUD } from './CampusHUD';
import { CampusMapModal } from './CampusMapModal';
import { CampusConciergeModal } from './CampusConciergeModal';
import { BackButton } from '../Navigation/BackButton';
import { useNavigate } from 'react-router-dom';

export const AetherDriveCampus: React.FC = () => {
  const [viewMode, setViewMode] = useState<CampusViewMode>('atrium');
  const [selectedBrand, setSelectedBrand] = useState<BrandInfo | null>(null);
  const [hoveredBrand, setHoveredBrand] = useState<BrandInfo | null>(null);
  const navigate = useNavigate();

  // Modal states
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [conciergeModelName, setConciergeModelName] = useState<string | undefined>(undefined);

  // Handle clicking a brand gate
  const handleSelectBrand = (brand: BrandInfo) => {
    setSelectedBrand(brand);
    setViewMode('transit');
  };

  // Handle travel completion
  const handleTravelArrival = () => {
    setViewMode('showroom');
  };

  // Return to central atrium
  const handleReturnToAtrium = () => {
    setViewMode('atrium');
    setSelectedBrand(null);
  };

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMapOpen) {
          setIsMapOpen(false);
        } else if (isConciergeOpen) {
          setIsConciergeOpen(false);
        } else if (viewMode !== 'atrium') {
          handleReturnToAtrium();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMapOpen, isConciergeOpen, viewMode]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans select-none">
      {/* CAMPUS TOP HUD */}
      <CampusHUD
        selectedBrand={selectedBrand}
        onSelectBrand={handleSelectBrand}
        onReturnToAtrium={handleReturnToAtrium}
        onOpenCampusMap={() => setIsMapOpen(true)}
        onOpenConcierge={() => {
          setConciergeModelName(undefined);
          setIsConciergeOpen(true);
        }}
        onOpenCinema={() => setViewMode('cinema')}
      />

      {/* VIEW MODE 1 & 2: 3D ATRIUM & PHYSICAL TRANSIT */}
      {(viewMode === 'atrium' || viewMode === 'transit') && (
        <div className="absolute inset-0 z-0">
          <MainAtrium3D
            selectedBrand={selectedBrand}
            hoveredBrand={hoveredBrand}
            isTransiting={viewMode === 'transit'}
            onHoverBrand={setHoveredBrand}
            onSelectBrand={handleSelectBrand}
          />

          {/* Physical Camera Travel Transition Overlay */}
          {viewMode === 'transit' && selectedBrand && (
            <CameraTravelTransition
              brand={selectedBrand}
              onArrival={handleTravelArrival}
            />
          )}
        </div>
      )}

      {/* VIEW MODE 3: BRAND SHOWROOM PAVILION */}
      {viewMode === 'showroom' && selectedBrand && (
        <div className="absolute inset-0 z-10 overflow-y-auto lenis-prevent">
          <BrandShowroomView
            brand={selectedBrand}
            onBackToAtrium={handleReturnToAtrium}
            onOpenConcierge={(modelName) => {
              setConciergeModelName(modelName);
              setIsConciergeOpen(true);
            }}
          />
        </div>
      )}

      {/* VIEW MODE 4: CINEMATIC 3D HERO FILM */}
      {viewMode === 'cinema' && (
        <div className="absolute inset-0 z-20">
          <CinematicHeroFilm
            onExploreVehicle={() => setViewMode('atrium')}
            onOpenShowroom={() => navigate('/showroom')}
          />
          <BackButton onClick={handleReturnToAtrium} />
        </div>
      )}

      {/* MODALS */}
      <CampusMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        selectedBrand={selectedBrand}
        onSelectBrand={handleSelectBrand}
      />

      <CampusConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        brandName={selectedBrand?.name || 'HYPERVAULT'}
        modelName={conciergeModelName}
      />
    </div>
  );
};
