import { Vehicle } from '../../types/vehicle';

export const luxuryVehicles: Vehicle[] = [
  // ASTON MARTIN
  {
    id: 'aston-martin-db12',
    brand: 'Aston Martin',
    model: 'DB12',
    variant: 'World’s First Super Tourer',
    year: 2024,
    horsepower: 671,
    torque: 590,
    topSpeed: 202,
    acceleration: 3.5,
    engine: '4.0L Twin-Turbo V8 Hand-Built',
    transmission: '8-Speed Electronic Automatic',
    drivetrain: 'Rear-Wheel Drive with Electronic Rear Differential (E-Diff)',
    price: '₹4.59 Cr • $248,086',
    priceInr: '₹4.59 Cr',
    priceUsd: '$248,086',
    tagline: 'The World’s First Super Tourer.',
    description: '671 HP twin-turbo V8, Michelin Pilot Sport 5 S tires, and a completely new ultra-luxurious touchscreen infotainment system.',
    heroImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Iridescent Emerald', hex: '#065f46' },
      { name: 'Xenar Grey', hex: '#64748b' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop', caption: 'Aston Martin DB12 front grille sculpture', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.5s' },
      { label: 'HORSEPOWER', value: '671 HP' },
      { label: 'TOP SPEED', value: '202 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.0L V8 Twin Turbo' }] }
    ],
    features: ['E-Diff Electronic Rear Differential', 'Bowers & Wilkins 1,170W Sound System', 'Adaptive Dampers']
  },
  {
    id: 'aston-martin-vantage',
    brand: 'Aston Martin',
    model: 'Vantage',
    variant: '656 HP Front-Mid Engine Sports Coupe',
    year: 2025,
    horsepower: 656,
    torque: 590,
    topSpeed: 202,
    acceleration: 3.4,
    engine: '4.0L Handcrafted Twin-Turbo V8',
    transmission: '8-Speed ZF Automatic with Launch Control',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹3.99 Cr • $191,000',
    priceInr: '₹3.99 Cr',
    priceUsd: '$191,000',
    tagline: 'Engineered for Real Drivers. 656 HP Muscle.',
    description: 'A 30% jump in power over its predecessor, redesigned widebody stance, and Bilstein DTX adaptive dampers.',
    heroImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Cosmopolitan Yellow', hex: '#eab308' },
      { name: 'Aston Martin Racing Green', hex: '#047857' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop', caption: 'Aston Martin Vantage aggressive wide stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.4s' },
      { label: 'HORSEPOWER', value: '656 HP' },
      { label: 'TOP SPEED', value: '202 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '4.0L Twin-Turbo V8 656PS' }] }
    ],
    features: ['Bilstein DTX Adaptive Dampers', 'Electronic Rear Differential E-Diff', 'Carbon Ceramic Brakes']
  },
  {
    id: 'aston-martin-dbs-770-ultimate',
    brand: 'Aston Martin',
    model: 'DBS 770 Ultimate',
    variant: '770 PS V12 Finale 1 of 499',
    year: 2024,
    horsepower: 759,
    torque: 664,
    topSpeed: 211,
    acceleration: 3.2,
    engine: '5.2L Quad-Cam 48-Valve Twin-Turbo V12',
    transmission: '8-Speed ZF Automatic',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹8.50 Cr • $387,600',
    priceInr: '₹8.50 Cr',
    priceUsd: '$387,600',
    tagline: 'The Ultimate Ferocious V12 Flagship Grand Tourer.',
    description: 'Horsepower tuned to 770 PS (759 HP), horse-shoe engine vent bonnet, solid-mounted steering column for maximum road feedback.',
    heroImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Cinnabar Orange', hex: '#ea580c' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop', caption: 'Aston Martin DBS 770 Ultimate horseshoe hood', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.2s' },
      { label: 'HORSEPOWER', value: '759 HP' },
      { label: 'TOP SPEED', value: '211 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '5.2L Twin-Turbo V12' }] }
    ],
    features: ['Horseshoe Engine Vent Hood', 'Solid Mounted Steering Column', 'Carbon Fiber Splitter & Diffuser']
  },
  {
    id: 'aston-martin-valhalla',
    brand: 'Aston Martin',
    model: 'Valhalla',
    variant: '998 HP Flat-Plane V8 PHEV Supercar',
    year: 2025,
    horsepower: 998,
    torque: 738,
    topSpeed: 217,
    acceleration: 2.5,
    engine: '4.0L Flat-Plane V8 Twin-Turbo + 3 Electric Motors',
    transmission: '8-Speed Dual Clutch (E-Reverse)',
    drivetrain: 'All-Wheel Drive (AWD) with e-Vectoring',
    price: '₹8.0 Cr (Est) • $800,000',
    priceInr: '₹8.00 Cr (Est)',
    priceUsd: '$800,000',
    tagline: 'F1-Derived Hybrid Hypercar.',
    description: 'Active aerodynamics generating 600 kg downforce at 240 km/h, carbon fiber monocoque developed with Aston Martin Aramco F1 Team.',
    heroImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Aston Martin F1 Green', hex: '#047857' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop', caption: 'Aston Martin Valhalla mid-engine aero', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.5s' },
      { label: 'HORSEPOWER', value: '998 HP' },
      { label: 'TOP SPEED', value: '217 MPH' }
    ],
    specifications: [
      { category: 'Powertrain', items: [{ label: 'Engine', value: '4.0L Flat-Plane V8 + 3 Electric Motors' }] }
    ],
    features: ['F1-Derived Active Aero', 'Carbon Fiber Monocoque', 'Pushrod Front Suspension']
  },
  {
    id: 'aston-martin-valkyrie',
    brand: 'Aston Martin',
    model: 'Valkyrie',
    variant: '11,100 RPM 1,140 HP NA V12 Adrian Newey Hypercar',
    year: 2024,
    horsepower: 1140,
    torque: 664,
    topSpeed: 250,
    acceleration: 2.2,
    engine: '6.5L Naturally Aspirated Cosworth V12 (11,100 RPM) + Rimac KERS Hybrid',
    transmission: '7-Speed Single-Clutch Automated Manual',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹32.0 Cr (Est) • $3,500,000',
    priceInr: '₹32.00 Cr (Est)',
    priceUsd: '$3,500,000',
    tagline: 'Formula 1 Car for the Road Designed by Adrian Newey.',
    description: '11,100 RPM Cosworth V12 engine acoustics, full venturi tunnel aerodynamic underside generating 1,100 kg of downforce.',
    heroImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    isHero: true,
    colorOptions: [
      { name: 'Pure Carbon Fiber & Lime Green Accent', hex: '#111111' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop', caption: 'Aston Martin Valkyrie F1 venturi tunnels', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.2s' },
      { label: 'MAX RPM', value: '11,100 RPM' },
      { label: 'HORSEPOWER', value: '1,140 HP' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '6.5L Cosworth NA V12 + KERS' }] }
    ],
    features: ['11,100 RPM Redline Cosworth V12', 'Full Length Venturi Tunnels (1,100 kg Downforce)', 'Feet-Up F1 Seating Position']
  },

  // ROLLS-ROYCE
  {
    id: 'rolls-royce-ghost',
    brand: 'Rolls-Royce',
    model: 'Ghost',
    variant: 'Extended Wheelbase / Series II',
    year: 2024,
    horsepower: 563,
    torque: 627,
    topSpeed: 155,
    acceleration: 4.6,
    engine: '6.75L Twin-Turbocharged V12',
    transmission: '8-Speed Satellite-Aided Automatic',
    drivetrain: 'All-Wheel Drive with All-Wheel Steering',
    price: '₹7.95 Cr • $348,500',
    priceInr: '₹7.95 Cr',
    priceUsd: '$348,500',
    tagline: 'Post-Opulent Architectural Perfection.',
    description: 'Planar Suspension System, Illuminated Fascia with 850 stars, and GPS Satellite-Aided Transmission that pre-selects gears for turns.',
    heroImage: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Salamanca Blue', hex: '#1e3a8a' },
      { name: 'English White', hex: '#ffffff' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1600&auto=format&fit=crop', caption: 'Rolls-Royce Ghost Pantheon Grille lighting', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '4.6s' },
      { label: 'HORSEPOWER', value: '563 HP' },
      { label: 'ENGINE', value: '6.75L V12' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Displacement', value: '6.75 Liter V12 Twin Turbo' }] }
    ],
    features: ['Planar Suspension System', 'Illuminated Fascia', 'Effortless Automatic Power Doors']
  },
  {
    id: 'rolls-royce-phantom',
    brand: 'Rolls-Royce',
    model: 'Phantom',
    variant: 'Series II Pinnacle Flagship',
    year: 2024,
    horsepower: 563,
    torque: 664,
    topSpeed: 155,
    acceleration: 5.1,
    engine: '6.75L Twin-Turbocharged V12',
    transmission: '8-Speed Automatic',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹10.48 Cr • $493,000',
    priceInr: '₹10.48 Cr',
    priceUsd: '$493,000',
    tagline: 'The Absolute Pinnacle of Automotive Luxury.',
    description: 'The flagship of motor cars. Glass-enclosed Gallery dashboard, Starlight Headliner, and double-glazed acoustics.',
    heroImage: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Midnight Sapphire', hex: '#002266' },
      { name: 'Diamond Black', hex: '#0a0a0a' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1600&auto=format&fit=crop', caption: 'Rolls-Royce Phantom Spirit of Ecstasy statue', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '5.1s' },
      { label: 'TORQUE', value: '664 lb-ft' },
      { label: 'ENGINE', value: '6.75L V12' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '6.75L Twin-Turbo V12' }] }
    ],
    features: ['The Gallery Glass Dashboard', 'Shooting Star Starlight Headliner', '130 kg Acoustic Sound Insulation']
  },
  {
    id: 'rolls-royce-spectre',
    brand: 'Rolls-Royce',
    model: 'Spectre',
    variant: 'All-Electric Ultra-Luxury Coupe',
    year: 2024,
    horsepower: 577,
    torque: 664,
    topSpeed: 155,
    acceleration: 4.4,
    engine: 'Dual Electric Motors (102 kWh Battery)',
    transmission: 'Single-Speed Automatic',
    drivetrain: 'All-Wheel Drive (AWD)',
    price: '₹7.50 Cr • $422,750',
    priceInr: '₹7.50 Cr',
    priceUsd: '$422,750',
    tagline: 'World’s First Ultra-Luxury Electric Super Coupe.',
    description: 'The spiritual successor to the Phantom Coupe. 4,796 Starlight doors, 0.25 Cd aerodynamic profile, and completely silent electric acceleration.',
    heroImage: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Chartreuse & Black Two-Tone', hex: '#84cc16' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1600&auto=format&fit=crop', caption: 'Rolls-Royce Spectre fastback coupe silhouette', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '4.4s' },
      { label: 'HORSEPOWER', value: '577 HP' },
      { label: 'RANGE', value: '320 Miles' }
    ],
    specifications: [
      { category: 'Battery', items: [{ label: 'Capacity', value: '102 kWh' }] }
    ],
    features: ['Starlight Doors (4,796 Illuminated Stars)', 'Illuminated Grille with 22 LEDs', 'Planar Suspension']
  },
  {
    id: 'rolls-royce-cullinan-series-ii',
    brand: 'Rolls-Royce',
    model: 'Cullinan Series II',
    variant: 'Black Badge Super-Luxury SUV',
    year: 2025,
    horsepower: 592,
    torque: 664,
    topSpeed: 155,
    acceleration: 4.9,
    engine: '6.75L Twin-Turbocharged V12',
    transmission: '8-Speed Automatic',
    drivetrain: 'All-Wheel Drive with Off-Road Mode',
    price: '₹10.50 Cr • $391,750',
    priceInr: '₹10.50 Cr',
    priceUsd: '$391,750',
    tagline: 'Effortless Everywhere. Redefined Super-Luxury SUV.',
    description: 'Updated L-shaped LED headlight signature, 23-inch milled forged wheels, and Duality Twill embroidered seating.',
    heroImage: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Emperador Blue', hex: '#0369a1' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1600&auto=format&fit=crop', caption: 'Cullinan Series II front LED illumination', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '4.9s' },
      { label: 'HORSEPOWER', value: '592 HP' },
      { label: 'ENGINE', value: '6.75L V12 Twin Turbo' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '6.75L Twin Turbo V12' }] }
    ],
    features: ['Viewing Suite Automatic Rear Seating', 'Spirit Digital Architecture', '23-Inch Milled Aluminum Wheels']
  },

  // BENTLEY
  {
    id: 'bentley-continental-gt-speed',
    brand: 'Bentley',
    model: 'Continental GT Speed',
    variant: '771 HP Ultra Performance Hybrid V8',
    year: 2025,
    horsepower: 771,
    torque: 738,
    topSpeed: 208,
    acceleration: 3.1,
    engine: '4.0L Twin-Turbo V8 + Electric Motor PHEV',
    transmission: '8-Speed Dual-Clutch Automatic',
    drivetrain: 'Active All-Wheel Drive with Torque Vectoring',
    price: '₹5.23 Cr • $302,100',
    priceInr: '₹5.23 Cr',
    priceUsd: '$302,100',
    tagline: '771 HP Supreme Grand Tourer.',
    description: 'Replacing the W12 with a 771 HP Ultra Performance Hybrid V8, single headlights, and 3D leather door paneling.',
    heroImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Tourmaline Green', hex: '#064e3b' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop', caption: 'Bentley Continental GT Speed modern headlights', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.1s' },
      { label: 'HORSEPOWER', value: '771 HP' },
      { label: 'TOP SPEED', value: '208 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '4.0L V8 PHEV 771 HP' }] }
    ],
    features: ['Bentley Rotating Display 3-Sided Dashboard', '48V Active Anti-Roll Bar', 'Naim 2,200W Audio']
  },
  {
    id: 'bentley-flying-spur-speed',
    brand: 'Bentley',
    model: 'Flying Spur Speed',
    variant: 'Ultra Performance Hybrid Luxury Sedan',
    year: 2025,
    horsepower: 771,
    torque: 738,
    topSpeed: 177,
    acceleration: 3.3,
    engine: '4.0L Twin-Turbo V8 + Electric Motor PHEV',
    transmission: '8-Speed Dual Clutch',
    drivetrain: 'All-Wheel Drive with All-Wheel Steering',
    price: '₹5.25 Cr • $310,000',
    priceInr: '₹5.25 Cr',
    priceUsd: '$310,000',
    tagline: 'Four-Door Supercar Performance.',
    description: 'Combining executive luxury, four-wheel steering, and 771 HP hybrid performance for four passengers.',
    heroImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Verdant Green', hex: '#14532d' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop', caption: 'Bentley Flying Spur Speed majestic front grille', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.3s' },
      { label: 'HORSEPOWER', value: '771 HP' },
      { label: 'TOP SPEED', value: '177 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '771 HP V8 Hybrid' }] }
    ],
    features: ['All-Wheel Steering', 'Flying B Retractable Hood Mascot', 'Mulliner Quilting']
  },
  {
    id: 'bentley-bentayga-s',
    brand: 'Bentley',
    model: 'Bentayga S',
    variant: 'V8 Performance Luxury SUV',
    year: 2024,
    horsepower: 542,
    torque: 568,
    topSpeed: 180,
    acceleration: 4.4,
    engine: '4.0L Twin-Turbocharged V8',
    transmission: '8-Speed Automatic',
    drivetrain: 'Permanent All-Wheel Drive',
    price: '₹5.10 Cr • $240,000',
    priceInr: '₹5.10 Cr',
    priceUsd: '$240,000',
    tagline: 'Aggressive Sporting Character Luxury SUV.',
    description: 'Sports exhaust tuning, 15% stiffer damping, and Blackline specification trim for sports handling.',
    heroImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Dragon Red II', hex: '#b91c1c' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop', caption: 'Bentayga S sports exhaust rear quad pipes', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '4.4s' },
      { label: 'HORSEPOWER', value: '542 HP' },
      { label: 'TOP SPEED', value: '180 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.0L Twin Turbo V8' }] }
    ],
    features: ['Bentley Dynamic Ride Active Roll Control', 'Sports Exhaust System', '22-Inch S Specification Wheels']
  },

  // LAND ROVER / RANGE ROVER
  {
    id: 'range-rover-sv',
    brand: 'Land Rover',
    model: 'Range Rover SV',
    variant: '530 HP Twin-Turbo V8 Flagship',
    year: 2024,
    horsepower: 606,
    torque: 553,
    topSpeed: 162,
    acceleration: 4.3,
    engine: '4.4L Twin-Turbocharged Mild-Hybrid V8',
    transmission: '8-Speed Automatic with Low Range',
    drivetrain: 'All-Wheel Drive with Active Rear Locking Differential',
    price: '₹4.47 Cr • $234,000',
    priceInr: '₹4.47 Cr',
    priceUsd: '$234,000',
    tagline: 'The Unrivaled Benchmark of Luxury SUVs.',
    description: 'Handcrafted by Special Vehicle Operations (SVO), featuring ceramic controls, SV Signature Suite seating, and 606 HP V8 power.',
    heroImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Sunset Gold Satin', hex: '#d97706' },
      { name: 'Ligurian Black Gloss', hex: '#0a0a0a' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop', caption: 'Range Rover SV clean flush exterior', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '4.3s' },
      { label: 'HORSEPOWER', value: '606 HP' },
      { label: 'TOP SPEED', value: '162 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.4L Twin-Turbo V8 MHEV' }] }
    ],
    features: ['SV Signature Suite Rear Club Table', 'White Ceramic Gear Selector', 'Executive Class Comfort Plus Seats']
  },
  {
    id: 'range-rover-autobiography',
    brand: 'Land Rover',
    model: 'Range Rover Autobiography',
    variant: 'P530 V8 Long Wheelbase',
    year: 2024,
    horsepower: 523,
    torque: 553,
    topSpeed: 155,
    acceleration: 4.6,
    engine: '4.4L Twin-Turbo V8',
    transmission: '8-Speed Automatic',
    drivetrain: 'All-Wheel Drive',
    price: '₹3.16 Cr • $141,100',
    priceInr: '₹3.16 Cr',
    priceUsd: '$141,100',
    tagline: 'Peerless Refinement and Modern Luxury.',
    description: 'Flush door handles, Meridian Signature Sound with headrest speakers, and active noise cancellation.',
    heroImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Batumi Gold', hex: '#ca8a04' },
      { name: 'Belgravia Green', hex: '#14532d' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop', caption: 'Range Rover Autobiography rear LED pillar lamps', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '4.6s' },
      { label: 'HORSEPOWER', value: '523 HP' },
      { label: 'TOP SPEED', value: '155 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.4L V8 Twin Turbo' }] }
    ],
    features: ['Meridian 1,600W Signature Sound', 'All-Wheel Steering', 'Electronic Air Suspension']
  },
  {
    id: 'range-rover-sport-sv',
    brand: 'Land Rover',
    model: 'Range Rover Sport SV',
    variant: 'Edition One 635 HP V8 Twin-Turbo',
    year: 2024,
    horsepower: 626,
    torque: 553,
    topSpeed: 180,
    acceleration: 3.6,
    engine: '4.4L Twin-Turbo MHEV V8',
    transmission: '8-Speed Automatic',
    drivetrain: 'All-Wheel Drive with 6D Dynamics',
    price: '₹2.80 Cr • $180,300',
    priceInr: '₹2.80 Cr',
    priceUsd: '$180,300',
    tagline: 'The Most Powerful Range Rover Sport Ever.',
    description: 'Hydraulic 6D Dynamics pitch and roll control suspension, carbon ceramic brakes, and carbon fiber wheels.',
    heroImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Carbon Bronze Matte', hex: '#78350f' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop', caption: 'Range Rover Sport SV quad exhaust pipes', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.6s' },
      { label: 'HORSEPOWER', value: '626 HP' },
      { label: 'TOP SPEED', value: '180 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '4.4L Twin-Turbo V8 635PS' }] }
    ],
    features: ['6D Dynamics Interlinked Hydraulic Suspension', '23-Inch Carbon Fiber Wheels', 'BASS Body Soul Seat Transducers']
  },
  {
    id: 'defender-110-v8',
    brand: 'Land Rover',
    model: 'Defender 110 V8',
    variant: '518 HP Supercharged All-Terrain Icon',
    year: 2024,
    horsepower: 518,
    torque: 461,
    topSpeed: 149,
    acceleration: 5.1,
    engine: '5.0L Supercharged V8',
    transmission: '8-Speed Automatic with Twin-Speed Transfer Box',
    drivetrain: 'Permanent All-Wheel Drive with Electronic Active Rear Differential',
    price: '₹2.05 Cr • $111,500',
    priceInr: '₹2.05 Cr',
    priceUsd: '$111,500',
    tagline: 'Unstoppable Off-Road Legend with V8 Thunder.',
    description: 'Quad exhaust tailpipes, 22-inch dark grey satin wheels, blue front brake calipers, and 518 HP supercharged V8 force.',
    heroImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Carpathian Grey', hex: '#374151' },
      { name: 'Santorini Black', hex: '#0a0a0a' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop', caption: 'Defender 110 V8 rugged all-terrain stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '5.1s' },
      { label: 'HORSEPOWER', value: '518 HP' },
      { label: 'TOP SPEED', value: '149 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '5.0L Supercharged V8' }] }
    ],
    features: ['Terrain Response 2 with Dynamic Mode', 'Electronic Active Rear Differential', 'Quad Exhaust Tailpipes']
  },
  {
    id: 'defender-octa',
    brand: 'Land Rover',
    model: 'Defender OCTA',
    variant: '626 HP Twin-Turbo V8 6D Dynamics Monster',
    year: 2025,
    horsepower: 626,
    torque: 553,
    topSpeed: 155,
    acceleration: 3.8,
    engine: '4.4L Twin-Turbocharged Mild-Hybrid V8',
    transmission: '8-Speed Automatic with High/Low Range',
    drivetrain: 'Permanent AWD with OCTA Performance Mode',
    price: '₹2.65 Cr • $152,000',
    priceInr: '₹2.65 Cr',
    priceUsd: '$152,000',
    tagline: 'The Most Extreme Defender Ever Created.',
    description: 'Named after diamond octahedrons. 6D Dynamics hydraulic interlinked suspension, 33-inch Goodyear tires, and 626 HP.',
    heroImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Petra Copper', hex: '#b45309' },
      { name: 'Farallon Green', hex: '#064e3b' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop', caption: 'Defender OCTA wide track off-road stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.8s' },
      { label: 'HORSEPOWER', value: '626 HP' },
      { label: 'WADING DEPTH', value: '1,000 mm' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Powertrain', value: '4.4L Twin-Turbo V8 MHEV 626HP' }] }
    ],
    features: ['6D Dynamics Hydraulic Interlinked Dampers', 'OCTA Off-Road Launch Mode', 'Diamond Encircled Graphic Badging']
  },
  {
    id: 'range-rover-velar',
    brand: 'Land Rover',
    model: 'Range Rover Velar',
    variant: 'Dynamic HSE P400 Mild-Hybrid',
    year: 2024,
    horsepower: 395,
    torque: 405,
    topSpeed: 155,
    acceleration: 5.2,
    engine: '3.0L Ingenium Turbocharged Inline-6 MHEV',
    transmission: '8-Speed Automatic',
    drivetrain: 'All-Wheel Drive with Intelligent Driveline Dynamics',
    price: '₹94.3 Lakh • $61,500',
    priceInr: '₹94.30 Lakh',
    priceUsd: '$61,500',
    tagline: 'Reductionist Design. Pure Modernity.',
    description: '11.4-inch curved floating glass Pivi Pro touchscreen, Pixel LED headlights with signature DRLs, and whisper quiet ride.',
    heroImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Zadar Grey', hex: '#4b5563' },
      { name: 'Varesine Blue', hex: '#1e3a8a' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop', caption: 'Range Rover Velar reductionist floating glass console', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '5.2s' },
      { label: 'HORSEPOWER', value: '395 HP' },
      { label: 'TOP SPEED', value: '155 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '3.0L Inline-6 MHEV Turbo' }] }
    ],
    features: ['11.4" Curved Floating Glass Pivi Pro', 'Pixel LED Headlights', 'Active Road Noise Cancellation']
  },
  {
    id: 'range-rover-evoque',
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    variant: 'Autobiography P250 Compact Luxury SUV',
    year: 2024,
    horsepower: 246,
    torque: 269,
    topSpeed: 143,
    acceleration: 7.0,
    engine: '2.0L Turbocharged Inline-4 Ingenium',
    transmission: '9-Speed Automatic',
    drivetrain: 'All-Wheel Drive with Driveline Disconnect',
    price: '₹67.9 Lakh • $49,900',
    priceInr: '₹67.90 Lakh',
    priceUsd: '$49,900',
    tagline: 'Charismatic Luxury for the Urban Cityscape.',
    description: 'Coupe-like silhouette, flush deployable door handles, Clearsight rearview mirror, and refined leather interior craftsmanship.',
    heroImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop',
    colorOptions: [
      { name: 'Arroios Grey', hex: '#94a3b8' },
      { name: 'Tribeca Blue', hex: '#0284c7' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop', caption: 'Range Rover Evoque compact sleek profile', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '7.0s' },
      { label: 'HORSEPOWER', value: '246 HP' },
      { label: 'TOP SPEED', value: '143 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine', value: '2.0L Turbo 4-Cylinder' }] }
    ],
    features: ['ClearSight Interior Rear View Mirror', 'Deployable Flush Door Handles', 'Curved Touchscreen Pivi Pro']
  }
];
