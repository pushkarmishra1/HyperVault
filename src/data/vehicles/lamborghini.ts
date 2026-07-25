import { Vehicle } from '../../types/vehicle';

export const lamborghiniVehicles: Vehicle[] = [
  {
    id: 'lamborghini-huracan-tecnica',
    brand: 'Lamborghini',
    model: 'Huracán Tecnica',
    variant: 'Rear-Wheel Drive V10',
    year: 2024,
    horsepower: 631,
    torque: 417,
    topSpeed: 202,
    acceleration: 3.2,
    engine: '5.2L Naturally Aspirated V10 (8,500 RPM)',
    transmission: '7-Speed Dual Clutch LDF',
    drivetrain: 'Rear-Wheel Drive with Rear-Wheel Steering',
    price: '₹4.04 Cr • $249,865',
    priceInr: '₹4.04 Cr',
    priceUsd: '$249,865',
    tagline: 'The Perfect Bridge Between Road and Track.',
    description: 'Combining STO power with refined everyday road dynamics, fixed rear wing, and direct rear-wheel steering telemetry.',
    heroImage: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Verde Selvans', hex: '#16a34a' },
      { name: 'Arancio Borealis', hex: '#f97316' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop', caption: 'Huracán Tecnica Y-shaped front curtain', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.2s' },
      { label: 'HORSEPOWER', value: '631 HP' },
      { label: 'TOP SPEED', value: '202 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '5.2L NA V10' }] }
    ],
    features: ['LDVI Integrated Vehicle Dynamics', 'Rear-Wheel Steering', 'Carbon Ceramic Brakes']
  },
  {
    id: 'lamborghini-huracan-sto',
    brand: 'Lamborghini',
    model: 'Huracán STO',
    variant: 'Super Trofeo Omologata',
    year: 2023,
    horsepower: 631,
    torque: 417,
    topSpeed: 193,
    acceleration: 3.0,
    engine: '5.2L Naturally Aspirated V10 (8,500 RPM)',
    transmission: '7-Speed Dual Clutch LDF',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹4.99 Cr • $334,495',
    priceInr: '₹4.99 Cr',
    priceUsd: '$334,495',
    tagline: 'Street-Legal Super Trofeo Race Car.',
    description: 'Cofango front clamshell, shark fin air scoop, adjustable carbon rear wing, and 75% carbon fiber body panels.',
    heroImage: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Blu Laufey', hex: '#38bdf8' },
      { name: 'Verde Citrea', hex: '#22c55e' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop', caption: 'Huracán STO lightweight race bodywork', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.0s' },
      { label: 'HORSEPOWER', value: '631 HP' },
      { label: 'TOP SPEED', value: '193 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '5.2L High Output V10' }] }
    ],
    features: ['Cofango Clamshell Hood', 'CCMR Braking System', 'Magneride 2.0 Suspension']
  },
  {
    id: 'lamborghini-revuelto',
    brand: 'Lamborghini',
    model: 'Revuelto',
    variant: '1,001 HP V12 HPEV Hybrid',
    year: 2024,
    horsepower: 1001,
    torque: 793,
    topSpeed: 217,
    acceleration: 2.5,
    engine: '6.5L NA V12 + 3 Electric Motors',
    transmission: '8-Speed Transverse Dual-Clutch',
    drivetrain: 'e-AWD All-Wheel Drive',
    price: '₹8.89 Cr • $608,358',
    priceInr: '₹8.89 Cr',
    priceUsd: '$608,358',
    tagline: '1,001 HP V12 HPEV Flagship.',
    description: 'The world’s first High Performance Electrified Vehicle (HPEV) supercar, featuring a 9,500 RPM V12 paired with 3 electric motors.',
    heroImage: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=800&auto=format&fit=crop',
    isHero: true,
    colorOptions: [
      { name: 'Arancio Apodis', hex: '#f97316' },
      { name: 'Verde Shock', hex: '#4ade80' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop', caption: 'Lamborghini Revuelto 1001 HP futuristic profile', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.5s' },
      { label: 'HORSEPOWER', value: '1,001 HP' },
      { label: 'TOP SPEED', value: '217 MPH' }
    ],
    specifications: [
      { category: 'Powertrain', items: [{ label: 'Engine', value: '6.5L V12 NA + 3 Electric Motors' }] }
    ],
    features: ['Monofuselage Carbon Chassis', '13 Driving Modes', 'e-Torque Vectoring']
  },
  {
    id: 'lamborghini-temerario',
    brand: 'Lamborghini',
    model: 'Temerario',
    variant: '10,000 RPM Twin-Turbo V8 Hybrid',
    year: 2025,
    horsepower: 907,
    torque: 538,
    topSpeed: 213,
    acceleration: 2.7,
    engine: '4.0L Twin-Turbo Flat-Plane V8 (10,000 RPM) + 3 Electric Motors',
    transmission: '8-Speed Dual Clutch',
    drivetrain: 'e-AWD All-Wheel Drive',
    price: '₹5.50 Cr (Est) • $357,000',
    priceInr: '₹5.50 Cr (Est)',
    priceUsd: '$357,000',
    tagline: '10,000 RPM Twin-Turbo V8 Hybrid Revolution.',
    description: 'Replacing the Huracán with a custom-developed flat-plane V8 revving to an unprecedented 10,000 RPM and 907 total HP.',
    heroImage: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Blu Marinus', hex: '#1d4ed8' },
      { name: 'Verde Mercurius', hex: '#10b981' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop', caption: 'Lamborghini Temerario hexagonal DRLs', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.7s' },
      { label: 'HORSEPOWER', value: '907 HP' },
      { label: 'MAX RPM', value: '10,000 RPM' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '4.0L Flat-Plane V8 + 3 Electric Motors' }] }
    ],
    features: ['10,000 RPM Redline', 'Alleggerita Lightweight Package', 'Hexagonal Light Signature']
  },
  {
    id: 'lamborghini-urus-se',
    brand: 'Lamborghini',
    model: 'Urus SE',
    variant: '789 HP V8 Plug-in Hybrid Super SUV',
    year: 2025,
    horsepower: 789,
    torque: 700,
    topSpeed: 194,
    acceleration: 3.4,
    engine: '4.0L Twin-Turbo V8 + Electric Motor PHEV',
    transmission: '8-Speed Automatic',
    drivetrain: 'Permanent AWD with Longitudinal Center Differential',
    price: '₹4.57 Cr • $258,000',
    priceInr: '₹4.57 Cr',
    priceUsd: '$258,000',
    tagline: '789 HP Plug-in Hybrid Super SUV.',
    description: 'Electric torque vectoring and redesigned Matrix LED headlights deliver unmatched all-terrain super-sports capability.',
    heroImage: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Arancio Egon', hex: '#ea580c' },
      { name: 'Bianco Sapphirus', hex: '#f8fafc' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544611107-e4407592e1b4?q=80&w=1600&auto=format&fit=crop', caption: 'Urus SE imposing hybrid SUV stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.4s' },
      { label: 'HORSEPOWER', value: '789 HP' },
      { label: 'TOP SPEED', value: '194 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.0L V8 Twin Turbo PHEV' }] }
    ],
    features: ['Electric Central Vectoring Differential', 'Adaptive Air Suspension', '23" Galante Forged Wheels']
  }
];
