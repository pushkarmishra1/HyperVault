import { Vehicle } from '../../types/vehicle';

export const audiVehicles: Vehicle[] = [
  {
    id: 'audi-rs3',
    brand: 'Audi',
    model: 'Audi RS3',
    variant: 'Sportback / Sedan',
    year: 2024,
    horsepower: 401,
    torque: 369,
    topSpeed: 180,
    acceleration: 3.6,
    engine: '2.5L TFSI 5-Cylinder Turbo',
    transmission: '7-Speed S tronic Dual-Clutch',
    drivetrain: 'quattro with RS Torque Splitter',
    price: '₹92.00 Lakh • $62,000',
    priceInr: '₹92.00 Lakh',
    priceUsd: '$62,000',
    tagline: '5-Cylinder Sonic Supremacy.',
    description: 'Featuring the legendary 1-2-4-5-3 firing order 5-cylinder engine and the revolutionary RS Torque Splitter for drift mode agility.',
    heroImage: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Kyalami Green', hex: '#66cc00' },
      { name: 'Kemora Grey', hex: '#738290' },
      { name: 'Mythos Black', hex: '#000000' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600&auto=format&fit=crop', caption: 'Audi RS3 5-cylinder sports stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.6s' },
      { label: 'HORSEPOWER', value: '401 HP' },
      { label: 'TOP SPEED', value: '180 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Type', value: '2.5L Turbo 5-Cylinder' }] }
    ],
    features: ['RS Torque Splitter', 'RS Sports Exhaust System', 'Matrix LED Headlights']
  },
  {
    id: 'audi-rs5-competition',
    brand: 'Audi',
    model: 'Audi RS5 Competition',
    variant: 'Sportback / Coupe',
    year: 2024,
    horsepower: 444,
    torque: 442,
    topSpeed: 180,
    acceleration: 3.7,
    engine: '2.9L Biturbo V6',
    transmission: '8-Speed Tiptronic Automatic',
    drivetrain: 'quattro Permanent AWD',
    price: '₹1.13 Cr • $78,900',
    priceInr: '₹1.13 Cr',
    priceUsd: '$78,900',
    tagline: 'Track-Honed RS Perfection.',
    description: 'Coilover suspension, sports rear differential, reduced sound deadening, and carbon matte elements transform the RS5 into a track weapon.',
    heroImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Sebring Black Crystal', hex: '#111827' },
      { name: 'Nardo Grey', hex: '#6b7280' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1600&auto=format&fit=crop', caption: 'Audi RS5 Competition sleek design', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.7s' },
      { label: 'HORSEPOWER', value: '444 HP' },
      { label: 'TOP SPEED', value: '180 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Type', value: '2.9L Twin-Turbo V6' }] }
    ],
    features: ['Manual Adjustable Coilovers', 'RS Sport Exhaust', 'Carbon Exterior Package']
  },
  {
    id: 'audi-rs6-avant-performance',
    brand: 'Audi',
    model: 'Audi RS6 Avant Performance',
    variant: 'High-Performance Super Wagon',
    year: 2024,
    horsepower: 621,
    torque: 627,
    topSpeed: 174,
    acceleration: 3.3,
    engine: '4.0L Biturbo V8 Mild-Hybrid',
    transmission: '8-Speed Tiptronic with Optimized Shift Times',
    drivetrain: 'quattro Permanent All-Wheel Drive',
    price: '₹2.43 Cr • $125,800',
    priceInr: '₹2.43 Cr',
    priceUsd: '$125,800',
    tagline: 'The Ultimate Super-Wagon.',
    description: '621 horsepower, 22-inch lightweight forged wheels, and raw V8 twin-turbo force wrapped in the world’s most desirable wagon body.',
    heroImage: 'https://images.unsplash.com/photo-1594816115538-0f669a0337d9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1ZGklMjByczYlMjBhdmFudHxlbnwwfHwwfHx8MA%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1615715070496-d85daab3618d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVkaSUyMHJzNnxlbnwwfHwwfHx8MA%3D%3D',
    colorOptions: [
      { name: 'Ascari Blue Matte', hex: '#1e3a8a' },
      { name: 'Dew Silver Matte', hex: '#d1d5db' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1594816115538-0f669a0337d9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1ZGklMjByczYlMjBhdmFudHxlbnwwfHwwfHx8MA%3D%3D', caption: 'Audi RS6 Avant wagon aggression', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.3s' },
      { label: 'HORSEPOWER', value: '621 HP' },
      { label: 'TOP SPEED', value: '174 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Type', value: '4.0L Twin-Turbo V8' }] }
    ],
    features: ['Dynamic Ride Control', 'RS Ceramic Brakes', 'Bang & Olufsen 3D Advanced Sound']
  },
  {
    id: 'audi-rs7-performance',
    brand: 'Audi',
    model: 'Audi RS7 Performance',
    variant: 'Sportback Super-Coupe',
    year: 2024,
    horsepower: 621,
    torque: 627,
    topSpeed: 190,
    acceleration: 3.3,
    engine: '4.0L Biturbo V8 Mild-Hybrid',
    transmission: '8-Speed Tiptronic Automatic',
    drivetrain: 'quattro Sport Rear Differential',
    price: '₹2.24 Cr • $127,800',
    priceInr: '₹2.24 Cr',
    priceUsd: '$127,800',
    tagline: 'Widebody Fastback Dominance.',
    description: 'Sculpted widebody proportions, active rear spoiler, and 621 HP V8 twin-turbo engine engineered for high-speed grand touring supremacy.',
    heroImage: 'https://images.unsplash.com/photo-1618056210931-39f730ebbf67?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaSUyMHJzN3xlbnwwfHwwfHx8MA%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1646405871744-2005e64f8e32?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1ZGklMjByczd8ZW58MHx8MHx8fDA%3D',
    colorOptions: [
      { name: 'Tangor Red Metallic', hex: '#990000' },
      { name: 'Daytona Grey Pearl', hex: '#4b5563' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1618056210931-39f730ebbf67?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaSUyMHJzN3xlbnwwfHwwfHx8MA%3D%3D', caption: 'Audi RS7 Sportback front view', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.3s' },
      { label: 'HORSEPOWER', value: '621 HP' },
      { label: 'TOP SPEED', value: '190 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Displacement', value: '3,996 cc V8' }] }
    ],
    features: ['HD Matrix LED Laser Lights', 'RS Dynamic Package Plus', 'Valcona Leather Seats']
  },
  {
    id: 'audi-r8-v10-performance',
    brand: 'Audi',
    model: 'Audi R8 V10 Performance',
    variant: 'quattro Supercar Coupe',
    year: 2023,
    horsepower: 602,
    torque: 413,
    topSpeed: 205,
    acceleration: 3.1,
    engine: '5.2L Naturally Aspirated V10',
    transmission: '7-Speed S tronic Dual-Clutch',
    drivetrain: 'quattro All-Wheel Drive',
    price: '₹2.72 Cr • $209,700',
    priceInr: '₹2.72 Cr',
    priceUsd: '$209,700',
    tagline: 'Screaming 8,700 RPM V10 Symphony.',
    description: 'The swan song of Audi’s naturally aspirated mid-engine masterpiece, delivering pure mechanical resonance and sharp handling.',
    heroImage: 'https://images.unsplash.com/photo-1623659248894-1a0272243054?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1ZGklMjByOHxlbnwwfHwwfHx8MA%3D%3D',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoineeQAqB6NJTLE0MIQInJZbCUNU1HLov-4FdeE5Ljoq4JlsRtnNX_ap&s=10',
    colorOptions: [
      { name: 'Vegas Yellow', hex: '#facc15' },
      { name: 'Suzuka Grey', hex: '#e5e7eb' },
      { name: 'Mythos Black', hex: '#000000' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1623659248894-1a0272243054?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1ZGklMjByOHxlbnwwfHwwfHx8MA%3D%3D', caption: 'Audi R8 V10 Performance iconic profile', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.1s' },
      { label: 'HORSEPOWER', value: '602 HP' },
      { label: 'TOP SPEED', value: '205 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Type', value: '5.2L Naturally Aspirated V10' }] }
    ],
    features: ['Carbon Fiber Sideblades', 'Ceramic Brakes', 'Audi Virtual Cockpit']
  },
  {
    id: 'audi-rs-etron-gt',
    brand: 'Audi',
    model: 'Audi RS e-tron GT',
    variant: 'Quattro Electric Gran Turismo',
    year: 2024,
    horsepower: 637,
    torque: 612,
    topSpeed: 155,
    acceleration: 3.1,
    engine: 'Dual Electric Motors (800V Architecture)',
    transmission: '2-Speed Rear Transmission',
    drivetrain: 'electric quattro AWD',
    price: '₹2.05 Cr • $147,100',
    priceInr: '₹2.05 Cr',
    priceUsd: '$147,100',
    tagline: 'Sculpted Electric Powerhouse.',
    description: 'Combining 637 HP boost launch control, 800V ultra-fast charging, and Porsche Taycan-platform chassis dynamics.',
    heroImage: 'https://images.unsplash.com/photo-1629897874832-a2e2f0d3715d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXVkaSUyMGUlMjB0cm9ufGVufDB8fDB8fHww',
    thumbnail: 'https://w0.peakpx.com/wallpaper/284/924/HD-wallpaper-audi-rs5-engine-audi-rs5-audi-cars-speedometer-interior.jpg',
    colorOptions: [
      { name: 'Tactical Green Metallic', hex: '#166534' },
      { name: 'Daytona Grey', hex: '#4b5563' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1629897874832-a2e2f0d3715d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXVkaSUyMGUlMjB0cm9ufGVufDB8fDB8fHww', caption: 'Audi RS e-tron GT futuristic electric design', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.1s' },
      { label: 'HORSEPOWER', value: '637 HP' },
      { label: 'TOP SPEED', value: '155 MPH' }
    ],
    specifications: [
      { category: 'Battery', items: [{ label: 'Capacity', value: '93.4 kWh 800V' }] }
    ],
    features: ['All-Wheel Steering', 'Carbon Fiber Roof', 'e-tron Sport Sound Generator']
  }
];
