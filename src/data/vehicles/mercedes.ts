import { Vehicle } from '../../types/vehicle';

export const mercedesVehicles: Vehicle[] = [
  {
    id: 'amg-a45-s',
    brand: 'Mercedes-AMG',
    model: 'AMG A45 S',
    variant: '4MATIC+ Compact Super-Hatch',
    year: 2024,
    horsepower: 416,
    torque: 369,
    topSpeed: 168,
    acceleration: 3.9,
    engine: '2.0L Handcrafted M139 Turbocharged Inline-4',
    transmission: '8-Speed AMG SPEEDSHIFT DCT',
    drivetrain: 'AMG Performance 4MATIC+ with Drift Mode',
    price: '₹93.00 Lakh • $68,000',
    priceInr: '₹93.00 Lakh',
    priceUsd: '$68,000',
    tagline: 'World’s Most Powerful 4-Cylinder Production Engine.',
    description: '416 horsepower packed into a compact all-wheel drive chassis with torque vectoring and race track drift mode.',
    heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Sun Yellow', hex: '#eab308' },
      { name: 'Designo Mountain Grey Magno', hex: '#374151' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop', caption: 'AMG A45 S compact aggression', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.9s' },
      { label: 'HORSEPOWER', value: '416 HP' },
      { label: 'TOP SPEED', value: '168 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Code', value: 'M139 2.0L Turbo' }] }
    ],
    features: ['AMG Torque Control', 'AMG Ride Control Suspension', 'Panamericana Front Grille']
  },
  {
    id: 'amg-c63-s-e-performance',
    brand: 'Mercedes-AMG',
    model: 'AMG C63 S E Performance',
    variant: 'F1 Hybrid Power Sedan',
    year: 2024,
    horsepower: 671,
    torque: 752,
    topSpeed: 174,
    acceleration: 3.3,
    engine: '2.0L Turbo + Rear Electric Motor F1 Hybrid',
    transmission: '9-Speed AMG SPEEDSHIFT MCT',
    drivetrain: 'AMG Performance 4MATIC+ Fully Variable',
    price: '₹1.95 Cr • $85,000',
    priceInr: '₹1.95 Cr',
    priceUsd: '$85,000',
    tagline: 'Direct Formula 1 Hybrid Telemetry.',
    description: 'Combining an electrically assisted turbocharger and rear electric motor for an astounding 671 HP and 752 lb-ft torque.',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Graphite Grey Magno', hex: '#1f2937' },
      { name: 'Polar White', hex: '#ffffff' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop', caption: 'AMG C63 S E Performance hybrid stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.3s' },
      { label: 'HORSEPOWER', value: '671 HP' },
      { label: 'TORQUE', value: '752 lb-ft' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '2.0L Turbo + Electric Motor' }] }
    ],
    features: ['Electric Exhaust Gas Turbocharger', 'AMG Carbon Ceramic Brakes', 'Rear Axle Steering']
  },
  {
    id: 'amg-gt-63-s',
    brand: 'Mercedes-AMG',
    model: 'AMG GT 63 S',
    variant: 'E Performance 4-Door Coupe',
    year: 2024,
    horsepower: 831,
    torque: 1033,
    topSpeed: 196,
    acceleration: 2.9,
    engine: '4.0L Handcrafted AMG Biturbo V8 + PHEV Motor',
    transmission: '9-Speed AMG SPEEDSHIFT MCT',
    drivetrain: 'AMG Performance 4MATIC+ AWD',
    price: '₹3.30 Cr • $170,350',
    priceInr: '₹3.30 Cr',
    priceUsd: '$170,350',
    tagline: '1,000+ Nm Torque Executive Rocket.',
    description: 'The most powerful series-production model from Affalterbach, launching to 100 km/h in under 3 seconds.',
    heroImage: 'https://images.unsplash.com/photo-1741014154802-ecd803813064?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1564498617702-7032ead7892c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtZyUyMGd0fGVufDB8fDB8fHww',
    colorOptions: [
      { name: 'Green Hell Magno', hex: '#15803d' },
      { name: 'Obsidian Black', hex: '#000000' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1741014154802-ecd803813064?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'AMG GT 63 S E Performance wide stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.9s' },
      { label: 'HORSEPOWER', value: '831 HP' },
      { label: 'TOP SPEED', value: '196 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '4.0L V8 Twin Turbo + Motor' }] }
    ],
    features: ['AMG Ride Control+ Air Suspension', 'Carbon Aerodynamic Package', 'Burmester High-End 3D Audio']
  },
  {
    id: 'amg-gt-black-series',
    brand: 'Mercedes-AMG',
    model: 'AMG GT Black Series',
    variant: 'Flat-Plane Crank Track Special',
    year: 2023,
    horsepower: 720,
    torque: 590,
    topSpeed: 202,
    acceleration: 3.1,
    engine: '4.0L Flat-Plane Crank AMG V8 Biturbo',
    transmission: '7-Speed AMG SPEEDSHIFT DCT Rear Transaxle',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹5.50 Cr • $325,000',
    priceInr: '₹5.50 Cr',
    priceUsd: '$325,000',
    tagline: 'Nürburgring Lap Record Royalty.',
    description: 'Flat-plane crank V8 engine, active two-stage rear wing, double carbon fiber front splitter, and pure GT3 racing pedigree.',
    heroImage: 'https://images.unsplash.com/photo-1576074436157-6555fe967d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lcmNlZGVzJTIwYW1nJTIwZ3R8ZW58MHx8MHx8fDA%3D',
    thumbnail: 'https://images.unsplash.com/photo-1599767958551-276fcac34484?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lcmNlZGVzJTIwYW1nJTIwZ3R8ZW58MHx8MHx8fDA%3D',
    colorOptions: [
      { name: 'AMG Magmabeam Orange', hex: '#ea580c' },
      { name: 'Designo Selenite Grey Magno', hex: '#4b5563' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1576074436157-6555fe967d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lcmNlZGVzJTIwYW1nJTIwZ3R8ZW58MHx8MHx8fDA%3D', caption: 'AMG GT Black Series race wing and aero', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.1s' },
      { label: 'HORSEPOWER', value: '720 HP' },
      { label: 'TOP SPEED', value: '202 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '4.0L Flat-Plane V8 Twin Turbo' }] }
    ],
    features: ['Active Aero Front Splitter', 'Carbon Fiber Bonnet & Roof', 'AMG Traction Control 9-Stage']
  },
  {
    id: 'amg-one',
    brand: 'Mercedes-AMG',
    model: 'AMG ONE',
    variant: 'Formula 1 Street-Legal Hypercar',
    year: 2024,
    horsepower: 1049,
    torque: 811,
    topSpeed: 219,
    acceleration: 2.9,
    engine: '1.6L V6 Turbo + 4 Electric Motors (Direct F1 Engine)',
    transmission: '7-Speed Automated Manual',
    drivetrain: 'AMG Performance 4MATIC+ All-Wheel Drive',
    price: '₹30.0 Cr (Est) • $2,720,000',
    priceInr: '₹30.00 Cr (Est)',
    priceUsd: '$2,720,000',
    tagline: 'Formula 1 World Championship Engine on Public Roads.',
    description: 'An actual Lewis Hamilton F1 engine revving to 11,000 RPM, paired with pushrod suspension and active Formula 1 DRS aero.',
    heroImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1bHld1tjlpgNNjAk684eFjKxtrwIk_qEhTjceIiQMS47-X4xjIU_A8Y&s=10',
    thumbnail: 'https://images.unsplash.com/photo-1549275301-c9d60945be6b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lcmNlZGVzJTIwYW1nJTIwb25lfGVufDB8fDB8fHww',
    isHero: true,
    colorOptions: [
      { name: 'Mercedes-AMG F1 Silver/Black Star livery', hex: '#94a3b8' }
    ],
    gallery: [
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1bHld1tjlpgNNjAk684eFjKxtrwIk_qEhTjceIiQMS47-X4xjIU_A8Y&s=10', caption: 'AMG ONE Formula 1 derived aerodynamic body', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.9s' },
      { label: 'HORSEPOWER', value: '1,049 HP' },
      { label: 'TOP SPEED', value: '219 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '1.6L Turbo V6 F1 Engine' }, { label: 'Max RPM', value: '11,000 RPM' }] }
    ],
    features: ['Active Drag Reduction System (DRS)', 'Pushrod Chassis Suspension', 'Carbon Monocoque']
  }
];
