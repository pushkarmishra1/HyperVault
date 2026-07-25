import { Vehicle } from '../../types/vehicle';

export const ferrariVehicles: Vehicle[] = [
  {
    id: 'ferrari-roma',
    brand: 'Ferrari',
    model: 'Ferrari Roma',
    variant: '2+ Coupe La Nuova Dolce Vita',
    year: 2024,
    horsepower: 612,
    torque: 561,
    topSpeed: 199,
    acceleration: 3.4,
    engine: '3.9L Turbocharged V8 (3-Time Engine of the Year)',
    transmission: '8-Speed Dual-Clutch F1 Transaxle',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹3.76 Cr • $243,000',
    priceInr: '₹3.76 Cr',
    priceUsd: '$243,000',
    tagline: 'La Nuova Dolce Vita.',
    description: 'Harmonious proportions, timeless elegance, and a twin-turbo V8 producing 612 HP for sophisticated grand touring.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Rosso Corsa', hex: '#dc2626' },
      { name: 'Blu Roma', hex: '#1e3a8a' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop', caption: 'Ferrari Roma timeless front silhouette', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.4s' },
      { label: 'HORSEPOWER', value: '612 HP' },
      { label: 'TOP SPEED', value: '199 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '3,855 cc 90° Turbo V8' }] }
    ],
    features: ['Side Slip Control (SSC 6.0)', 'Matrix LED Headlights', 'Dual Cockpit Display']
  },
  {
    id: 'ferrari-296-gtb',
    brand: 'Ferrari',
    model: 'Ferrari 296 GTB',
    variant: 'Assetto Fiorano V6 Hybrid',
    year: 2024,
    horsepower: 819,
    torque: 546,
    topSpeed: 205,
    acceleration: 2.9,
    engine: '3.0L 120° V6 Twin-Turbo + Plug-in Electric Motor',
    transmission: '8-Speed F1 Dual-Clutch',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹5.40 Cr • $321,000',
    priceInr: '₹5.40 Cr',
    priceUsd: '$321,000',
    tagline: 'Fun to Drive Redefined. 120° Piccolo V12 sound.',
    description: '120-degree hot-V V6 twin-turbo coupled with an MGU-K electric motor generating 819 HP and screaming like a mini V12.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Rosso Imola', hex: '#990000' },
      { name: 'Giallo Modena', hex: '#eab308' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop', caption: 'Ferrari 296 GTB mid-engine stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.9s' },
      { label: 'HORSEPOWER', value: '819 HP' },
      { label: 'TOP SPEED', value: '205 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '120° V6 Twin Turbo + PHEV' }] }
    ],
    features: ['Assetto Fiorano Track Pack', 'Active Rear Spoiler', 'eManettino Modes']
  },
  {
    id: 'ferrari-296-gts',
    brand: 'Ferrari',
    model: 'Ferrari 296 GTS',
    variant: 'Retractable Hard Top Spider',
    year: 2024,
    horsepower: 819,
    torque: 546,
    topSpeed: 205,
    acceleration: 2.9,
    engine: '3.0L 120° V6 Twin-Turbo + Plug-in Electric Motor',
    transmission: '8-Speed F1 Dual-Clutch',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹6.25 Cr • $366,000',
    priceInr: '₹6.25 Cr',
    priceUsd: '$366,000',
    tagline: 'Open-Air V6 Hybrid Symphony.',
    description: 'Retractable Hard Top (RHT) deploys in 14 seconds at speeds up to 45 km/h to connect you directly to the 8,500 RPM soundtrack.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Azzurro Dino', hex: '#38bdf8' },
      { name: 'Rosso Corsa', hex: '#dc2626' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop', caption: 'Ferrari 296 GTS open top profile', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.9s' },
      { label: 'HORSEPOWER', value: '819 HP' },
      { label: 'TOP SPEED', value: '205 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '819 HP V6 PHEV System' }] }
    ],
    features: ['Retractable Hard Top (14s)', 'Side Slip Control (SSC 7.0)', 'eDiff with ABS Evo']
  },
  {
    id: 'ferrari-sf90-stradale',
    brand: 'Ferrari',
    model: 'Ferrari SF90 Stradale',
    variant: 'Plug-in Hybrid AWD Supercar',
    year: 2024,
    horsepower: 986,
    torque: 590,
    topSpeed: 211,
    acceleration: 2.5,
    engine: '4.0L Twin-Turbo V8 + 3 Electric Motors',
    transmission: '8-Speed F1 Dual-Clutch',
    drivetrain: 'e4WD Electric All-Wheel Drive',
    price: '₹7.50 Cr • $524,000',
    priceInr: '₹7.50 Cr',
    priceUsd: '$524,000',
    tagline: '986 HP Hybrid Benchmark.',
    description: '3 electric motors paired with a 769 HP V8 engine make the SF90 the first series-production PHEV Ferrari with e4WD.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Rosso Scuderia', hex: '#ef4444' },
      { name: 'Grigio Titanio', hex: '#64748b' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop', caption: 'Ferrari SF90 Stradale aggressive front fascia', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.5s' },
      { label: 'HORSEPOWER', value: '986 HP' },
      { label: 'TOP SPEED', value: '211 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '4.0L V8 Turbo + 3 Electric Motors' }] }
    ],
    features: ['Shut-off Gurney Active Rear Wing', 'e4WD Vectoring', 'Carbon Ceramic Brakes']
  },
  {
    id: 'ferrari-sf90-spider',
    brand: 'Ferrari',
    model: 'Ferrari SF90 Spider',
    variant: '986 HP Open-Top PHEV',
    year: 2024,
    horsepower: 986,
    torque: 590,
    topSpeed: 211,
    acceleration: 2.5,
    engine: '4.0L Twin-Turbo V8 + 3 Electric Motors',
    transmission: '8-Speed F1 Dual-Clutch',
    drivetrain: 'e4WD Electric All-Wheel Drive',
    price: '₹8.20 Cr • $570,000',
    priceInr: '₹8.20 Cr',
    priceUsd: '$570,000',
    tagline: 'Extreme Open-Top Hybrid Supercar.',
    description: 'Combining the exhilarating 986 HP hybrid powertrain with Ferrari signature Retractable Hard Top for open-air speed.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Giallo Triplo Strato', hex: '#facc15' },
      { name: 'Nero Daytona', hex: '#000000' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop', caption: 'Ferrari SF90 Spider open-top stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.5s' },
      { label: 'HORSEPOWER', value: '986 HP' },
      { label: 'TOP SPEED', value: '211 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '986 HP e4WD Hybrid' }] }
    ],
    features: ['Retractable Hard Top', 'eManettino Hybrid Modes', 'Curved 16" Digital Cockpit']
  },
  {
    id: 'ferrari-812-competizione',
    brand: 'Ferrari',
    model: 'Ferrari 812 Competizione',
    variant: '9,500 RPM Naturally Aspirated V12',
    year: 2023,
    horsepower: 819,
    torque: 512,
    topSpeed: 211,
    acceleration: 2.85,
    engine: '6.5L Naturally Aspirated 65° V12 (9,500 RPM)',
    transmission: '7-Speed F1 Dual-Clutch',
    drivetrain: 'Rear-Wheel Drive with Independent 4-Wheel Steering',
    price: '₹10.5 Cr (Est) • $600,000',
    priceInr: '₹10.50 Cr (Est)',
    priceUsd: '$600,000',
    tagline: '9,500 RPM Pure V12 Pinnacle.',
    description: 'Directly evolved from Ferrari Front-Engine V12 racing history, featuring titanium connecting rods and an all-aluminum rear screen.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Giallo Modena with Carbon Stripe', hex: '#facc15' },
      { name: 'Grigio Competizione', hex: '#4b5563' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop', caption: 'Ferrari 812 Competizione rear screen vortex generators', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.85s' },
      { label: 'HORSEPOWER', value: '819 HP' },
      { label: 'MAX RPM', value: '9,500 RPM' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '6.5L Naturally Aspirated V12' }] }
    ],
    features: ['Independent 4-Wheel Steering', 'Vortex Generator Aluminum Rear Screen', 'Titanium Rods']
  },
  {
    id: 'ferrari-purosangue',
    brand: 'Ferrari',
    model: 'Ferrari Purosangue',
    variant: '4-Door 4-Seat V12 Super SUV',
    year: 2024,
    horsepower: 715,
    torque: 528,
    topSpeed: 193,
    acceleration: 3.3,
    engine: '6.5L Naturally Aspirated 65° V12',
    transmission: '8-Speed Dual-Clutch F1 DCT',
    drivetrain: '4RM-S EVO All-Wheel Drive System',
    price: '₹10.50 Cr • $400,000',
    priceInr: '₹10.50 Cr',
    priceUsd: '$400,000',
    tagline: 'The First Ever Four-Door Four-Seat V12 Ferrari.',
    description: 'Welcome doors (suicide doors), mid-front mounted 715 HP naturally aspirated V12, and revolutionary active suspension technology.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Nero Purosangue', hex: '#111827' },
      { name: 'Rosso Corsa', hex: '#dc2626' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop', caption: 'Ferrari Purosangue sleek 4-door V12 profile', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.3s' },
      { label: 'HORSEPOWER', value: '715 HP' },
      { label: 'TOP SPEED', value: '193 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '6.5L NA V12 Mid-Front Mounted' }] }
    ],
    features: ['Multimatic TrueActive Suspension', 'Welcome Hinged Rear Doors', 'Carbon Fiber Roof']
  },
  {
    id: 'ferrari-daytona-sp3',
    brand: 'Ferrari',
    model: 'Ferrari Daytona SP3',
    variant: 'Icona Series Mid-Engine V12',
    year: 2024,
    horsepower: 829,
    torque: 514,
    topSpeed: 211,
    acceleration: 2.85,
    engine: '6.5L Naturally Aspirated V12 (9,500 RPM)',
    transmission: '7-Speed F1 Dual-Clutch',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹25.0 Cr (Est) • $2,250,000',
    priceInr: '₹25.00 Cr (Est)',
    priceUsd: '$2,250,000',
    tagline: 'Icona Series Masterpiece. 1 of 599 Worldwide.',
    description: 'Inspired by the historic 1967 24 Hours of Daytona 1-2-3 finish, featuring a mid-mounted 829 HP naturally aspirated V12.',
    heroImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    isHero: true,
    colorOptions: [
      { name: 'Rosso Magno', hex: '#b91c1c' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1600&auto=format&fit=crop', caption: 'Ferrari Daytona SP3 muscular strakes', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.85s' },
      { label: 'HORSEPOWER', value: '829 HP' },
      { label: 'MAX RPM', value: '9,500 RPM' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '6.5L F140HC NA V12' }] }
    ],
    features: ['Targa Top Carbon Roof', 'Carbon Fiber Chassis with T1000 Fibers', 'Horizontal Rear Strakes']
  }
];
