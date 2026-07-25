import { Vehicle } from '../../types/vehicle';

export const hypercarVehicles: Vehicle[] = [
  // BUGATTI
  {
    id: 'bugatti-chiron-super-sport',
    brand: 'Bugatti',
    model: 'Chiron Super Sport',
    variant: '1,578 HP W16 Longtail Hypercar',
    year: 2024,
    horsepower: 1578,
    torque: 1180,
    topSpeed: 273,
    acceleration: 2.4,
    engine: '8.0L Quad-Turbocharged W16',
    transmission: '7-Speed Dual-Clutch DSG',
    drivetrain: 'Permanent All-Wheel Drive (AWD)',
    price: '₹38.0 Cr (Est) • $3,800,000',
    priceInr: '₹38.00 Cr (Est)',
    priceUsd: '$3,800,000',
    tagline: 'Longtail Engineering. 273 MPH Uncut Velocity.',
    description: 'Quad-turbo W16 longtail aerodynamic body re-engineered for effortless stability at over 440 km/h.',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Le Patron Clear Carbon & Orange', hex: '#ea580c' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop', caption: 'Bugatti Chiron Super Sport longtail body', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-200 KM/H', value: '5.8s' },
      { label: 'HORSEPOWER', value: '1,578 HP' },
      { label: 'TOP SPEED', value: '273 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '8.0L Quad-Turbo W16' }] }
    ],
    features: ['Longtail Aero Body (+25cm)', 'Stacked Twin Exhaust Pipes', '3D Printed Titanium Braking Calipers']
  },
  {
    id: 'bugatti-bolide',
    brand: 'Bugatti',
    model: 'Bolide',
    variant: 'Track-Only 1,825 HP W16 Lightweight',
    year: 2024,
    horsepower: 1825,
    torque: 1365,
    topSpeed: 311,
    acceleration: 2.17,
    engine: '8.0L Quad-Turbocharged W16 (110 Octane Race Fuel)',
    transmission: '7-Speed Dual-Clutch DSG Track Specification',
    drivetrain: 'Permanent All-Wheel Drive (AWD)',
    price: '₹42.0 Cr (Est) • $4,400,000',
    priceInr: '₹42.00 Cr (Est)',
    priceUsd: '$4,400,000',
    tagline: 'Extreme Track-Only W16 Weight-To-Power Benchmark (0.67 kg/hp).',
    description: 'Weighing just 1,240 kg with 1,825 HP, generating Le Mans prototype-topping downforce.',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'French Racing Blue & Bare Carbon', hex: '#2563eb' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop', caption: 'Bugatti Bolide X-shaped taillight aero', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.17s' },
      { label: 'HORSEPOWER', value: '1,825 HP' },
      { label: 'TOP SPEED', value: '311 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Weight', value: '1,240 kg Dry Weight' }] }
    ],
    features: ['Morphable Roof Scoop Skin', 'Pushrod Carbon Suspension', 'X-Light Taillight Signature']
  },
  {
    id: 'bugatti-mistral',
    brand: 'Mistral',
    model: 'Mistral',
    variant: 'W16 Open-Top Roadster 1 of 99',
    year: 2024,
    horsepower: 1578,
    torque: 1180,
    topSpeed: 261,
    acceleration: 2.4,
    engine: '8.0L Quad-Turbocharged W16',
    transmission: '7-Speed Dual-Clutch DSG',
    drivetrain: 'Permanent All-Wheel Drive (AWD)',
    price: '₹48.0 Cr (Est) • $5,000,000',
    priceInr: '₹48.00 Cr (Est)',
    priceUsd: '$5,000,000',
    tagline: 'The Ultimate W16 Open-Top Roadster.',
    description: 'The final roadgoing Bugatti powered by the iconic W16 engine, featuring roof-mounted ram air scoops behind the occupants.',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Black with Yellow Warm Accent', hex: '#eab308' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop', caption: 'Bugatti Mistral roadster silhouette', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.4s' },
      { label: 'HORSEPOWER', value: '1,578 HP' },
      { label: 'TOP SPEED', value: '261 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '8.0L Quad-Turbo W16' }] }
    ],
    features: ['Roof-Mounted Air Intakes', 'Vertically Stacked LED Headlights', 'X-Taillight Rear Motif']
  },
  {
    id: 'bugatti-tourbillon',
    brand: 'Bugatti',
    model: 'Tourbillon',
    variant: '1,800 HP V16 Cosworth Hybrid',
    year: 2026,
    horsepower: 1800,
    torque: 1100,
    topSpeed: 276,
    acceleration: 2.0,
    engine: '8.3L Naturally Aspirated V16 (Cosworth 9,000 RPM) + 3 Electric Motors',
    transmission: '8-Speed Longitudinal Dual-Clutch',
    drivetrain: 'Electric All-Wheel Drive (e-AWD)',
    price: '₹45.0 Cr (Est) • $4,100,000',
    priceInr: '₹45.00 Cr (Est)',
    priceUsd: '$4,100,000',
    tagline: 'Swiss Horology Mechanical V16 Masterpiece.',
    description: 'Naturally aspirated 8.3L V16 revving to 9,000 RPM developed by Cosworth, paired with a titanium skeletonized gauge cluster.',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop',
    isHero: true,
    colorOptions: [
      { name: 'Aegean Blue Clear Carbon', hex: '#1e3a8a' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop', caption: 'Bugatti Tourbillon dihedral wing doors', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.0s' },
      { label: 'HORSEPOWER', value: '1,800 HP' },
      { label: 'MAX RPM', value: '9,000 RPM' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '8.3L Cosworth V16 NA + 3 Electric Motors' }] }
    ],
    features: ['Skeletonized Titanium Horology Instrument Cluster', 'Dihedral Anhedral Electric Doors', '800V 25 kWh Battery']
  },

  // PAGANI
  {
    id: 'pagani-huayra-bc',
    brand: 'Pagani',
    model: 'Huayra BC',
    variant: 'Benny Caiola Lightweight Edition',
    year: 2023,
    horsepower: 791,
    torque: 774,
    topSpeed: 238,
    acceleration: 2.8,
    engine: '6.0L Mercedes-AMG Twin-Turbo V12 M158',
    transmission: '7-Speed Xtrac Automated Manual',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹28.0 Cr (Est) • $2,550,000',
    priceInr: '₹28.00 Cr (Est)',
    priceUsd: '$2,550,000',
    tagline: 'Carbo-Triax HP62 Precision Sculpture.',
    description: 'Dedicated to Benny Caiola, Horacio Pagani’s first customer. Carbo-Titanium chassis with active flap aerodynamics.',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Bare Green Carbo-Titanium', hex: '#065f46' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop', caption: 'Pagani Huayra BC quad titanium exhaust', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.8s' },
      { label: 'HORSEPOWER', value: '791 HP' },
      { label: 'TOP SPEED', value: '238 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '6.0L AMG Twin-Turbo V12' }] }
    ],
    features: ['Carbo-Titanium HP62 Monocoque', 'Active Aero Flaps', 'Titanium Quad Exhaust']
  },
  {
    id: 'pagani-huayra-r',
    brand: 'Pagani',
    model: 'Huayra R',
    variant: '9,000 RPM Track-Only V12',
    year: 2024,
    horsepower: 850,
    torque: 553,
    topSpeed: 240,
    acceleration: 2.7,
    engine: '6.0L Naturally Aspirated Pagani V12-R (9,000 RPM)',
    transmission: '6-Speed Non-Synchronized Sequential',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹32.0 Cr (Est) • $3,100,000',
    priceInr: '₹32.00 Cr (Est)',
    priceUsd: '$3,100,000',
    tagline: 'Pure Acoustic Emotion. 9,000 RPM Naturally Aspirated V12.',
    description: 'Co-developed with HWA AG, producing a F1-grade acoustic V12 sound weighing just 1,050 kg.',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Nero Carbo-Titanium with Orange Accent', hex: '#f97316' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop', caption: 'Pagani Huayra R track rear diffuser', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.7s' },
      { label: 'HORSEPOWER', value: '850 HP' },
      { label: 'MAX RPM', value: '9,000 RPM' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '6.0L NA V12-R HWA Engine' }] }
    ],
    features: ['Inconel 625 Equal-Length Exhaust Headers', 'Safety Roll Cage Integrated Chassis', '1,000 kg Downforce at 320 km/h']
  },
  {
    id: 'pagani-utopia',
    brand: 'Pagani',
    model: 'Utopia',
    variant: 'Gated Manual 6.0L V12',
    year: 2024,
    horsepower: 852,
    torque: 811,
    topSpeed: 236,
    acceleration: 2.8,
    engine: '6.0L Mercedes-AMG Twin-Turbo V12',
    transmission: '7-Speed Gated Manual / Automated Manual',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹26.0 Cr (Est) • $2,500,000',
    priceInr: '₹26.00 Cr (Est)',
    priceUsd: '$2,500,000',
    tagline: 'Art and Science. Mechanical Gated Shifter Perfection.',
    description: 'No heavy batteries, exposed mechanical gated manual linkage, forged aluminum turbine wheels, and 852 HP AMG V12.',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Rinascimento White', hex: '#f8fafc' },
      { name: 'Clear Blue Carbo-Titanium', hex: '#1e3a8a' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop', caption: 'Pagani Utopia exposed gated shifter and turbine wheels', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.8s' },
      { label: 'HORSEPOWER', value: '852 HP' },
      { label: 'TORQUE', value: '811 lb-ft' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '6.0L AMG Twin-Turbo V12' }] }
    ],
    features: ['Exposed Gated Manual Linkage', 'Carbo-Titanium & Carbo-Triax Monocoque', 'Titanium Quad Exhaust System']
  },

  // KOENIGSEGG
  {
    id: 'koenigsegg-jesko-attack',
    brand: 'Koenigsegg',
    model: 'Jesko Attack',
    variant: 'Track-Focused Active Aero Megacar',
    year: 2024,
    horsepower: 1600,
    torque: 1106,
    topSpeed: 278,
    acceleration: 2.5,
    engine: '5.0L Flat-Plane Twin-Turbo V8 (E85 Fuel)',
    transmission: '9-Speed Koenigsegg Light Speed Transmission (LST)',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹30.0 Cr (Est) • $3,000,000',
    priceInr: '₹30.00 Cr (Est)',
    priceUsd: '$3,000,000',
    tagline: '1,600 HP Light Speed Transmission Megacar.',
    description: 'Active rear wing generating 1,400 kg of downforce, world-first 9-clutch Light Speed Transmission (LST), and 8,500 RPM flat-plane V8.',
    heroImage: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=800&auto=format&fit=crop',
    isHero: true,
    colorOptions: [
      { name: 'Tang Orange Pearl', hex: '#ea580c' },
      { name: 'Kevlar Clear Carbon', hex: '#111111' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=1600&auto=format&fit=crop', caption: 'Koenigsegg Jesko Attack giant top-mounted active rear wing', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.5s' },
      { label: 'HORSEPOWER', value: '1,600 HP' },
      { label: 'DOWNFORCE', value: '1,400 kg' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '5.0L Twin Turbo Flat-Plane V8' }] }
    ],
    features: ['Light Speed Transmission 9-Speed LST', 'Triplex Front & Rear Suspension', 'Synchrohelix Doors']
  },
  {
    id: 'koenigsegg-jesko-absolut',
    brand: 'Jesko Absolut',
    model: 'Jesko Absolut',
    variant: 'Low-Drag 310+ MPH High-Speed Velocity',
    year: 2024,
    horsepower: 1600,
    torque: 1106,
    topSpeed: 310,
    acceleration: 2.5,
    engine: '5.0L Flat-Plane Twin-Turbo V8 (E85 Fuel)',
    transmission: '9-Speed Koenigsegg Light Speed Transmission (LST)',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹34.0 Cr (Est) • $3,400,000',
    priceInr: '₹34.00 Cr (Est)',
    priceUsd: '$3,400,000',
    tagline: 'The Fastest Koenigsegg Ever Built. 0.278 Drag Coefficient.',
    description: 'Rear fins replace the giant wing, reducing drag to an astonishing 0.278 Cd to surpass 310 MPH (500 km/h).',
    heroImage: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Graphite Grey Clear Carbon', hex: '#374151' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=1600&auto=format&fit=crop', caption: 'Jesko Absolut streamlined twin rear stabilization fins', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.5s' },
      { label: 'HORSEPOWER', value: '1,600 HP' },
      { label: 'TOP SPEED', value: '310+ MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Drag Coeff', value: '0.278 Cd' }] }
    ],
    features: ['Low Drag Streamlined Bodywork', 'Light Speed Transmission', 'Rear Twin Aero Fins']
  },
  {
    id: 'koenigsegg-gemera',
    brand: 'Koenigsegg',
    model: 'Gemera',
    variant: '2,300 HP V8 Dark Matter Four-Seater Megacar',
    year: 2025,
    horsepower: 2300,
    torque: 2028,
    topSpeed: 249,
    acceleration: 1.9,
    engine: '5.0L Twin-Turbo V8 + Dark Matter Electric Motor',
    transmission: 'Light Speed Tourbillon Transmission (LSTT)',
    drivetrain: 'All-Wheel Drive with 4-Wheel Steering & Torque Vectoring',
    price: '₹18.0 Cr (Est) • $1,700,000',
    priceInr: '₹18.00 Cr (Est)',
    priceUsd: '$1,700,000',
    tagline: 'World’s First 2,300 HP 4-Seater Mega-GT.',
    description: 'Four full-size heated seats, 8 cup holders, luggage space, and an unbelievable 2,300 horsepower from the HV8 powertrain.',
    heroImage: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Monterey Blue Carbon', hex: '#1d4ed8' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=1600&auto=format&fit=crop', caption: 'Koenigsegg Gemera giant dihedral synchro-helix doors', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '1.9s' },
      { label: 'HORSEPOWER', value: '2,300 HP' },
      { label: 'SEATING', value: '4 Full Size Seats' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '5.0L HV8 + Dark Matter Motor' }] }
    ],
    features: ['Single Giant Automated Dihedral Door', '4-Wheel Torque Vectoring', '8 Memory-Foam Heated Seats']
  },
  {
    id: 'koenigsegg-cc850',
    brand: 'Koenigsegg',
    model: 'CC850',
    variant: 'Engage Shift System (ESS) Gated Manual / Automatic',
    year: 2024,
    horsepower: 1385,
    torque: 1020,
    topSpeed: 280,
    acceleration: 2.6,
    engine: '5.0L Twin-Turbo Flat-Plane V8 (1,385 HP on E85)',
    transmission: '9-Speed ESS (Simulated 6-Speed Gated Manual or 9-Speed Auto)',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹36.0 Cr (Est) • $3,600,000',
    priceInr: '₹36.00 Cr (Est)',
    priceUsd: '$3,600,000',
    tagline: 'World First Engage Shift System. Gated Manual Clutch Feel.',
    description: 'Celebrating 20 years of Koenigsegg production. Features an analog clutch pedal and gated shifter that operates as both manual and auto.',
    heroImage: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'CC8S Silver Metallic', hex: '#94a3b8' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=1600&auto=format&fit=crop', caption: 'Koenigsegg CC850 retro homage telephone-dial wheels', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.6s' },
      { label: 'POWER-TO-WEIGHT', value: '1:1 (1385 HP / 1385 KG)' },
      { label: 'TOP SPEED', value: '280 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '5.0L Twin Turbo V8' }] }
    ],
    features: ['ESS Engage Shift System Manual Shifter', 'Telephone Dial Forged Wheels', '1:1 Power-To-Weight Ratio']
  }
];
