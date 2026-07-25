import React, { useState } from 'react';
import { VehicleGrid } from '../../components/Vehicles/VehicleGrid';
import { VehicleDetailModal } from '../../components/Vehicles/VehicleDetailModal';
import { BackButton } from '../../components/Navigation/BackButton';
import { Vehicle } from '../../types/vehicle';
import { useNavigate } from 'react-router-dom';

export const CollectionPage: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 bg-black text-white min-h-screen relative">
      <BackButton enableEscKey={!selectedVehicle} />

      <VehicleGrid onSelectVehicle={(v) => setSelectedVehicle(v)} />

      <VehicleDetailModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onOpen3DShowroom={() => {
          setSelectedVehicle(null);
          navigate('/showroom');
        }}
      />
    </div>
  );
};
