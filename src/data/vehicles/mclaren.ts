import { Vehicle } from '../../types/vehicle';

export const mclarenVehicles: Vehicle[] = [
  {
    id: 'mclaren-artura',
    brand: 'McLaren',
    model: 'Artura',
    variant: 'Spider / Coupe High-Performance Hybrid',
    year: 2024,
    horsepower: 690,
    torque: 531,
    topSpeed: 205,
    acceleration: 3.0,
    engine: '3.0L 120° Twin-Turbo V6 + Axial Flux Electric Motor',
    transmission: '8-Speed SSG Dual-Clutch (E-Reverse)',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹5.10 Cr • $237,500',
    priceInr: '₹5.10 Cr',
    priceUsd: '$237,500',
    tagline: 'Next-Generation McLaren Carbon Lightweight Architecture.',
    description: 'Ultra-lightweight MCLA carbon tub, 120° V6 twin-turbo engine revving to 8,500 RPM, and seamless axial flux electric boost.',
    heroImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Flux Green', hex: '#84cc16' },
      { name: 'McLaren Orange', hex: '#f97316' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop', caption: 'McLaren Artura futuristic body sculpture', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.0s' },
      { label: 'HORSEPOWER', value: '690 HP' },
      { label: 'TOP SPEED', value: '205 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '3.0L V6 Turbo + Axial Flux Motor' }] }
    ],
    features: ['MCLA Carbon Fiber Monocoque', 'E-Differential', 'Proactive Chassis Control II']
  },
  {
    id: 'mclaren-720s',
    brand: 'McLaren',
    model: '720S',
    variant: 'Spider / Coupe Super Series',
    year: 2023,
    horsepower: 710,
    torque: 568,
    topSpeed: 212,
    acceleration: 2.8,
    engine: '4.0L Twin-Turbo V8 M840T',
    transmission: '7-Speed Seamless Shift Gearbox (SSG)',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹4.65 Cr • $310,500',
    priceInr: '₹4.65 Cr',
    priceUsd: '$310,500',
    tagline: 'Benchmark Supercar Performance.',
    description: 'Dihedral doors, eye-socket headlight intakes, and proactive chassis control delivering blistering acceleration and lap times.',
    heroImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Memphis Red', hex: '#dc2626' },
      { name: 'Silica White', hex: '#ffffff' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop', caption: 'McLaren 720S aerodynamic profile', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.8s' },
      { label: 'HORSEPOWER', value: '710 HP' },
      { label: 'TOP SPEED', value: '212 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.0L Twin-Turbo V8' }] }
    ],
    features: ['Monocage II Carbon Fiber Chassis', 'Active Rear Wing Airbrake', 'Proactive Chassis Control']
  },
  {
    id: 'mclaren-750s',
    brand: 'McLaren',
    model: '750S',
    variant: 'Spider / Coupe Lightweight Benchmark',
    year: 2024,
    horsepower: 740,
    torque: 590,
    topSpeed: 206,
    acceleration: 2.7,
    engine: '4.0L Twin-Turbo V8 M840T',
    transmission: '7-Speed SSG with Shorter Final Drive',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹5.90 Cr • $329,500',
    priceInr: '₹5.90 Cr',
    priceUsd: '$329,500',
    tagline: 'Lighter, More Powerful, Unsparing Precision.',
    description: '30 kg lighter than the 720S, with 740 HP, shorter final drive gear ratios, and central stainless steel exhaust.',
    heroImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Saros Grey', hex: '#4b5563' },
      { name: 'Papaya Spark', hex: '#ea580c' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop', caption: 'McLaren 750S central exhaust and active wing', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.7s' },
      { label: 'HORSEPOWER', value: '740 HP' },
      { label: 'TOP SPEED', value: '206 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '4.0L V8 Twin Turbo 740PS' }] }
    ],
    features: ['Proactive Chassis Control III (PCC III)', 'New Larger Active Rear Wing', 'Carbon Fiber Racing Seats']
  },
  {
    id: 'mclaren-senna',
    brand: 'McLaren',
    model: 'Senna',
    variant: 'Ultimate Series Track Monster',
    year: 2023,
    horsepower: 789,
    torque: 590,
    topSpeed: 208,
    acceleration: 2.7,
    engine: '4.0L Twin-Turbo V8 M840TR',
    transmission: '7-Speed Dual-Clutch SSG',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹12.0 Cr (Est) • $1,000,000',
    priceInr: '₹12.00 Cr (Est)',
    priceUsd: '$1,000,000',
    tagline: 'Legalized Pure Track Weapon. Named After Ayrton Senna.',
    description: 'Generating 800 kg of downforce, glass doors, roof snorkel, and relentless downforce-driven track performance.',
    heroImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Trophy Yellow & Green Ayrton Senna Livery', hex: '#eab308' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop', caption: 'McLaren Senna wild aero wing and snorkel', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.7s' },
      { label: 'DOWNFORCE', value: '800 kg' },
      { label: 'HORSEPOWER', value: '789 HP' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.0L Twin Turbo V8 M840TR' }] }
    ],
    features: ['Active Front Aero Blades & Rear Wing', 'Monocage III Carbon Chassis', 'Gorilla Glass Door Lower Panels']
  },
  {
    id: 'mclaren-speedtail',
    brand: 'McLaren',
    model: 'Speedtail',
    variant: 'Hyper-GT Central Driving Position',
    year: 2024,
    horsepower: 1035,
    torque: 848,
    topSpeed: 250,
    acceleration: 2.9,
    engine: '4.0L Twin-Turbo V8 + Parallel Hybrid System',
    transmission: '7-Speed Dual Clutch SSG',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹22.5 Cr (Est) • $2,250,000',
    priceInr: '₹22.50 Cr (Est)',
    priceUsd: '$2,250,000',
    tagline: '250 MPH Streamlined Hyper-GT. Central Driver Seat.',
    description: '3-seat central driving position inspired by the legendary McLaren F1, featuring flexible carbon fiber ailerons and 250 MPH top speed.',
    heroImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Frozen Blue Silver', hex: '#94a3b8' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop', caption: 'McLaren Speedtail teardrop hyperbody', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-300 KM/H', value: '12.8s' },
      { label: 'HORSEPOWER', value: '1,035 HP' },
      { label: 'TOP SPEED', value: '250 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '4.0L V8 Hybrid 1,035 HP' }] }
    ],
    features: ['Central 3-Seat Layout', 'Flexible Carbon Rear Active Ailerons', 'Electrochromic Glass Canopy']
  },
  {
    id: 'mclaren-p1',
    brand: 'McLaren',
    model: 'P1',
    variant: 'Ultimate Series Holy Trinity Hypercar',
    year: 2023,
    horsepower: 903,
    torque: 664,
    topSpeed: 217,
    acceleration: 2.8,
    engine: '3.8L Twin-Turbo V8 + Electric Motor (IPAS)',
    transmission: '7-Speed Dual Clutch SSG',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹15.0 Cr (Est) • $1,150,000',
    priceInr: '₹15.00 Cr (Est)',
    priceUsd: '$1,150,000',
    tagline: 'The Original Holy Trinity Hybrid Hypercar.',
    description: 'Featuring instant IPAS electric torque fill, race mode active rear wing DRS, and 903 combined horsepower.',
    heroImage: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=800&auto=format&fit=crop',
    isHero: true,
    colorOptions: [
      { name: 'Volcano Yellow', hex: '#eab308' },
      { name: 'Volcano Orange', hex: '#ea580c' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1600&auto=format&fit=crop', caption: 'McLaren P1 iconic flame-spitting rear exhaust', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.8s' },
      { label: 'HORSEPOWER', value: '903 HP' },
      { label: 'TOP SPEED', value: '217 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '3.8L V8 Twin Turbo + Electric IPAS' }] }
    ],
    features: ['IPAS Electric Boost Button', 'DRS Rear Wing', 'Hydro-Pneumatic RaceActive Chassis']
  }
];
