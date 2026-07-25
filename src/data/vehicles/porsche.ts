import { Vehicle } from '../../types/vehicle';

export const porscheVehicles: Vehicle[] = [
  {
    id: 'porsche-718-gt4-rs',
    brand: 'Porsche',
    model: '718 Cayman GT4 RS',
    variant: 'Weissach Package',
    year: 2024,
    horsepower: 493,
    torque: 331,
    topSpeed: 196,
    acceleration: 3.2,
    engine: '4.0L Naturally Aspirated Flat-6 (9,000 RPM)',
    transmission: '7-Speed Porsche Doppelkupplung (PDK)',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹2.54 Cr • $160,700',
    priceInr: '₹2.54 Cr',
    priceUsd: '$160,700',
    tagline: '9,000 RPM Mid-Engine Air Intakes at Your Ears.',
    description: 'Process air intakes located right behind the driver windows deliver an intoxicating acoustic induction storm.',
    heroImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Arctic Grey', hex: '#6b7280' },
      { name: 'Shark Blue', hex: '#0284c7' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop', caption: 'Porsche 718 GT4 RS swan-neck rear wing', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.2s' },
      { label: 'HORSEPOWER', value: '493 HP' },
      { label: 'MAX RPM', value: '9,000 RPM' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '4.0L NA Boxer Flat-6' }] }
    ],
    features: ['Process Air Intake Box', 'Weissach Carbon Fiber Hood', 'Titanium Roll Cage']
  },
  {
    id: 'porsche-911-carrera-gts',
    brand: 'Porsche',
    model: '911 Carrera GTS',
    variant: 'T-Hybrid Coupe',
    year: 2025,
    horsepower: 532,
    torque: 449,
    topSpeed: 194,
    acceleration: 2.9,
    engine: '3.6L Boxer Flat-6 + Electric Turbocharger (T-Hybrid)',
    transmission: '8-Speed Porsche PDK',
    drivetrain: 'Rear-Wheel Drive (RWD) / GTS 4 AWD',
    price: '₹2.34 Cr • $150,900',
    priceInr: '₹2.34 Cr',
    priceUsd: '$150,900',
    tagline: 'The Sweet Spot of the 911 Range.',
    description: 'Electric turbocharging eliminates turbo lag instantly, delivering immediate throttle response and 532 peak horsepower.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Crayon / Chalk', hex: '#e5e7eb' },
      { name: 'Carmine Red', hex: '#b91c1c' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop', caption: 'Porsche 911 Carrera GTS timeless shape', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.9s' },
      { label: 'HORSEPOWER', value: '532 HP' },
      { label: 'TOP SPEED', value: '194 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '3.6L T-Hybrid Electric Turbo Flat-6' }] }
    ],
    features: ['Electric Turbocharger e-Turbo', 'PASM Sports Suspension (-10mm)', 'Sport Chrono Package']
  },
  {
    id: 'porsche-911-gt3',
    brand: 'Porsche',
    model: '911 GT3',
    variant: '992.2 Motorsport Edition',
    year: 2025,
    horsepower: 502,
    torque: 331,
    topSpeed: 198,
    acceleration: 3.2,
    engine: '4.0L Naturally Aspirated Flat-6 (9,000 RPM)',
    transmission: '6-Speed GT Sport Manual / 7-Speed PDK',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹2.75 Cr • $182,900',
    priceInr: '₹2.75 Cr',
    priceUsd: '$182,900',
    tagline: 'Pure Motorsport Telepathy.',
    description: 'Double-wishbone front axle derived from the 911 RSR race car and a naturally aspirated 9,000 RPM flat-six engine.',
    heroImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Python Green', hex: '#22c55e' },
      { name: 'Shark Blue', hex: '#0284c7' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop', caption: 'Porsche 911 GT3 swan-neck rear wing', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.2s' },
      { label: 'HORSEPOWER', value: '502 HP' },
      { label: 'MAX RPM', value: '9,000 RPM' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '4.0L NA Boxer 6' }] }
    ],
    features: ['Double-Wishbone Front Axle', 'Swan-Neck Rear Wing', 'PCCB Carbon Brakes']
  },
  {
    id: 'porsche-911-gt3-rs',
    brand: 'Porsche',
    model: '911 GT3 RS',
    variant: 'Weissach Active Aero Package',
    year: 2024,
    horsepower: 518,
    torque: 343,
    topSpeed: 184,
    acceleration: 3.0,
    engine: '4.0L Naturally Aspirated Flat-6 (9,000 RPM)',
    transmission: '7-Speed PDK with Short Ratio Gears',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹3.51 Cr • $241,300',
    priceInr: '₹3.51 Cr',
    priceUsd: '$241,300',
    tagline: 'Active DRS Aerodynamics & Track Dominance.',
    description: 'Active DRS wing generating 860 kg of downforce at 285 km/h, paired with four individual steering wheel control dials.',
    heroImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop',
    isHero: true,
    colorOptions: [
      { name: 'White with Pyro Red Accents', hex: '#dc2626' },
      { name: 'GT Silver Metallic', hex: '#94a3b8' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop', caption: 'Porsche 911 GT3 RS colossal active rear wing', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.0s' },
      { label: 'DOWNFORCE', value: '860 kg' },
      { label: 'HORSEPOWER', value: '518 HP' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.0L High-Revving Flat-6' }] }
    ],
    features: ['F1-Style DRS Drag Reduction System', 'Magnesium Wheels', 'Weissach Package Carbon Weave']
  },
  {
    id: 'porsche-911-turbo-s',
    brand: 'Porsche',
    model: '911 Turbo S',
    variant: '992 Flagship Supercar',
    year: 2024,
    horsepower: 640,
    torque: 590,
    topSpeed: 205,
    acceleration: 2.6,
    engine: '3.7L Twin-Turbo Flat-6 VTG',
    transmission: '8-Speed Porsche PDK',
    drivetrain: 'Porsche Traction Management (PTM) AWD',
    price: '₹3.35 Cr • $230,400',
    priceInr: '₹3.35 Cr',
    priceUsd: '$230,400',
    tagline: 'Relentless Benchmark Acceleration.',
    description: '0 to 100 km/h in an astonishing 2.6 seconds. Variable turbine geometry turbos ensure explosive power under all conditions.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Gentian Blue Metallic', hex: '#1e3a8a' },
      { name: 'Jet Black Metallic', hex: '#000000' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop', caption: 'Porsche 911 Turbo S widebody launch', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.6s' },
      { label: 'HORSEPOWER', value: '640 HP' },
      { label: 'TOP SPEED', value: '205 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '3,745 cc VTG Twin Turbo Flat-6' }] }
    ],
    features: ['Active Cooling Air Flaps & Wing', 'Porsche Dynamic Chassis Control (PDCC)', 'Burmester High-End Surround']
  },
  {
    id: 'porsche-taycan-turbo-gt',
    brand: 'Porsche',
    model: 'Taycan Turbo GT',
    variant: 'Weissach Package Electric Monster',
    year: 2025,
    horsepower: 1092,
    torque: 988,
    topSpeed: 180,
    acceleration: 2.1,
    engine: 'Dual Electric Motors with Pulse Inverter (Silicon Carbide)',
    transmission: '2-Speed Rear Transmission',
    drivetrain: 'Porsche Electric AWD with Attack Mode',
    price: '₹2.80 Cr • $230,000',
    priceInr: '₹2.80 Cr',
    priceUsd: '$230,000',
    tagline: '1,092 HP Electric Nürburgring Record Holder.',
    description: 'Attack Mode provides 120 kW boost for 10 seconds. 0-100 km/h in 2.1 seconds setting track records across continents.',
    heroImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Purple Sky Metallic', hex: '#581c87' },
      { name: 'Shade Green Metallic', hex: '#065f46' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop', caption: 'Porsche Taycan Turbo GT track stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.1s' },
      { label: 'HORSEPOWER', value: '1,092 HP' },
      { label: 'TOP SPEED', value: '180 MPH' }
    ],
    specifications: [
      { category: 'Powertrain', items: [{ label: 'Boost Power', value: '1,092 HP Silicon Carbide Inverter' }] }
    ],
    features: ['Push-to-Pass Attack Mode', 'Porsche Active Ride Suspension', 'Carbon Ceramic Brakes (PCCB)']
  }
];
