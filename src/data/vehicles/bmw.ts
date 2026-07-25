import { Vehicle } from '../../types/vehicle';

export const bmwVehicles: Vehicle[] = [
  {
    id: 'bmw-m2-competition',
    brand: 'BMW',
    model: 'BMW M2 Competition',
    variant: 'TwinPower Turbo Coupe',
    year: 2024,
    horsepower: 453,
    torque: 406,
    topSpeed: 177,
    acceleration: 3.9,
    engine: '3.0L BMW M TwinPower Turbo Inline-6',
    transmission: '6-Speed Manual / 8-Speed M Steptronic',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹98 Lakh • $65,000',
    priceInr: '₹98.00 Lakh',
    priceUsd: '$65,000',
    tagline: 'Pure, Unadulterated Drivers Car.',
    description: 'A compact track weapon engineered for ultimate agility, rear-drive precision, and explosive high-RPM twin-turbo power.',
    heroImage: 'https://images.unsplash.com/photo-1698251015050-a79d0220f539?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJtdyUyMG0yJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D',
    thumbnail: 'https://images.unsplash.com/photo-1698251015050-a79d0220f539?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJtdyUyMG0yJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D',
    colorOptions: [
      { name: 'Zandvoort Blue', hex: '#6fa8dc' },
      { name: 'Toronto Red', hex: '#c00000' },
      { name: 'Black Sapphire', hex: '#111111' },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1698251015050-a79d0220f539?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJtdyUyMG0yJTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D', caption: 'BMW M2 Coupe track stance', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.9s' },
      { label: 'HORSEPOWER', value: '453 HP' },
      { label: 'TOP SPEED', value: '177 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '3.0L Inline-6 Twin Turbo' }, { label: 'Displacement', value: '2,993 cc' }] }
    ],
    features: ['Active M Differential', 'M Carbon Roof', 'M Compound Brakes']
  },
  {
    id: 'bmw-m3-competition',
    brand: 'BMW',
    model: 'BMW M3 Competition',
    variant: 'M xDrive Sedan',
    year: 2024,
    horsepower: 503,
    torque: 479,
    topSpeed: 180,
    acceleration: 3.4,
    engine: '3.0L BMW M TwinPower Turbo Inline-6',
    transmission: '8-Speed M Steptronic with Drivelogic',
    drivetrain: 'M xDrive All-Wheel Drive',
    price: '₹1.31 Cr • $80,200',
    priceInr: '₹1.31 Cr',
    priceUsd: '$80,200',
    tagline: 'The Iconic High-Performance Sports Sedan.',
    description: 'Combining iconic M motorsport heritage with four-door practicality and blistering M xDrive launch capability.',
    heroImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwbTN8ZW58MHx8MHx8fDA%3D',
    thumbnail: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwbTN8ZW58MHx8MHx8fDA%3D',
    colorOptions: [
      { name: 'Isle of Man Green', hex: '#0f382c' },
      { name: 'Brooklyn Grey', hex: '#888888' },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwbTN8ZW58MHx8MHx8fDA%3D', caption: 'BMW M3 Competition front profile', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.4s' },
      { label: 'HORSEPOWER', value: '503 HP' },
      { label: 'TOP SPEED', value: '180 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '3.0L S58 Twin-Turbo' }] }
    ],
    features: ['M xDrive System', 'M Carbon Bucket Seats', 'Harmon Kardon Audio']
  },
  {
    id: 'bmw-m4-csl',
    brand: 'BMW',
    model: 'BMW M4 CSL',
    variant: 'Coupe Sport Leichtbau',
    year: 2023,
    horsepower: 543,
    torque: 479,
    topSpeed: 191,
    acceleration: 3.6,
    engine: '3.0L BMW M TwinPower Turbo Inline-6',
    transmission: '8-Speed M Steptronic',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    price: '₹2.18 Cr • $140,895',
    priceInr: '₹2.18 Cr',
    priceUsd: '$140,895',
    tagline: 'Reborn Track Legend. 1 of 1,000 Worldwide.',
    description: 'Stripped of excess weight and engineered with carbon ceramic brakes and laser headlights to set Nürburgring records.',
    heroImage: 'https://d12d6l12s3d372.cloudfront.net/3861_E244_4_A59_4_FCD_8232_F26_D12_C3_F55_C_d30c0572f4.jpg',
    thumbnail: 'https://d12d6l12s3d372.cloudfront.net/3861_E244_4_A59_4_FCD_8232_F26_D12_C3_F55_C_d30c0572f4.jpg',
    colorOptions: [
      { name: 'Frozen Brooklyn Grey', hex: '#5f6368' },
      { name: 'Alpine White', hex: '#f0f0f0' },
    ],
    gallery: [
      { url: 'https://d12d6l12s3d372.cloudfront.net/3861_E244_4_A59_4_FCD_8232_F26_D12_C3_F55_C_d30c0572f4.jpg', caption: 'BMW M4 CSL aerodynamically tuned body', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.6s' },
      { label: 'HORSEPOWER', value: '543 HP' },
      { label: 'TOP SPEED', value: '191 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '3.0L S58 High Output Inline-6' }] }
    ],
    features: ['Titanium Silencer', 'Carbon Ceramic Brakes', 'Full Carbon Bucket Racing Seats']
  },
  {
    id: 'bmw-m5-cs',
    brand: 'BMW',
    model: 'BMW M5 CS',
    variant: 'Competition Sport Limited Edition',
    year: 2024,
    horsepower: 627,
    torque: 553,
    topSpeed: 190,
    acceleration: 2.9,
    engine: '4.4L BMW M TwinPower Turbo V8',
    transmission: '8-Speed M Steptronic',
    drivetrain: 'M xDrive AWD with 2WD mode',
    price: '₹2.25 Cr • $142,000',
    priceInr: '₹2.25 Cr',
    priceUsd: '$142,000',
    tagline: 'The Most Powerful BMW M Production Car Ever Built.',
    description: 'Gold Bronze accents, yellow laser headlights, carbon fiber hood, and 627 horsepower make the M5 CS an absolute legend.',
    heroImage: 'https://images.splitshire.com/full/The-BMW-M5-Performing-a-Drift_29sIu.png',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2h6XLQybrohnZVA6OdJN2eepnC8YSIiciabLi8ot8UlWrJyUkuh-_9e1f&s=10',
    isHero: true,
    colorOptions: [
      { name: 'Frozen Brands Hatch Grey', hex: '#333333' },
      { name: 'Frozen Deep Green Metallic', hex: '#11291f' },
    ],
    gallery: [
      { url: 'https://images.splitshire.com/full/The-BMW-M5-Performing-a-Drift_29sIu.png', caption: 'BMW M5 CS Gold Bronze wheels & laser lights', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '2.9s' },
      { label: 'HORSEPOWER', value: '627 HP' },
      { label: 'TOP SPEED', value: '190 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '4.4L Twin-Turbo V8 S63' }] }
    ],
    features: ['Yellow M Laserlights', 'Carbon Ceramic Brakes', '4 Individual M Carbon Bucket Seats']
  },
  {
    id: 'bmw-m8-competition',
    brand: 'BMW',
    model: 'BMW M8 Competition',
    variant: 'Gran Coupe / Coupe',
    year: 2024,
    horsepower: 617,
    torque: 553,
    topSpeed: 190,
    acceleration: 3.0,
    engine: '4.4L BMW M TwinPower Turbo V8',
    transmission: '8-Speed M Steptronic',
    drivetrain: 'M xDrive All-Wheel Drive',
    price: '₹2.44 Cr • $138,800',
    priceInr: '₹2.44 Cr',
    priceUsd: '$138,800',
    tagline: 'Flagship Luxury Grand Tourer.',
    description: 'Supreme highway dominance combined with supercar cornering capability and opulent Merino leather interior.',
    heroImage: 'https://images.unsplash.com/photo-1721907857338-548d6ecdde3e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtdyUyMG04fGVufDB8fDB8fHww',
    thumbnail: 'https://images.unsplash.com/photo-1721907857338-548d6ecdde3e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtdyUyMG04fGVufDB8fDB8fHww',
    colorOptions: [
      { name: 'Marina Bay Blue', hex: '#002266' },
      { name: 'Skyscraper Grey', hex: '#777777' },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1721907857338-548d6ecdde3e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtdyUyMG04fGVufDB8fDB8fHww', caption: 'BMW M8 Competition aggressive styling', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.0s' },
      { label: 'HORSEPOWER', value: '617 HP' },
      { label: 'TOP SPEED', value: '190 MPH' }
    ],
    specifications: [
      { category: 'Engine', items: [{ label: 'Engine Type', value: '4.4L V8 Twin Power Turbo' }] }
    ],
    features: ['M Setup & M Mode', 'Bowers & Wilkins Diamond Sound System', 'Adaptive M Suspension']
  },
  {
    id: 'bmw-xm-label-red',
    brand: 'BMW',
    model: 'BMW XM Label Red',
    variant: 'M Hybrid Flagship SUV',
    year: 2024,
    horsepower: 738,
    torque: 738,
    topSpeed: 175,
    acceleration: 3.7,
    engine: '4.4L V8 TwinPower Turbo + Electric Motor',
    transmission: '8-Speed M Steptronic',
    drivetrain: 'M xDrive Hybrid AWD',
    price: '₹3.15 Cr • $185,000',
    priceInr: '₹3.15 Cr',
    priceUsd: '$185,000',
    tagline: 'Monolithic Electric Hybrid Super SUV.',
    description: '738 horsepower electrifying M hybrid powertrain clothed in Toronto Red accents and bespoke lounge luxury.',
    heroImage: 'https://manofmany.com/wp-content/uploads/2023/07/BMW-XM-Label-Red-review.jpg',
    thumbnail: 'https://manofmany.com/wp-content/uploads/2023/07/BMW-XM-Label-Red-review.jpg',
    colorOptions: [
      { name: 'Frozen Carbon Black with Red Accent', hex: '#0a0a0a' },
    ],
    gallery: [
      { url: 'https://manofmany.com/wp-content/uploads/2023/07/BMW-XM-Label-Red-review.jpg', caption: 'BMW XM Label Red imposing presence', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.7s' },
      { label: 'HORSEPOWER', value: '738 HP' },
      { label: 'TORQUE', value: '738 lb-ft' }
    ],
    specifications: [
      { category: 'Powertrain', items: [{ label: 'Engine', value: '4.4L V8 + Electric Drive' }] }
    ],
    features: ['M Lounge Interior', 'Sculpted 3D Prism Headliner', 'Iconic Glow Kidney Grille']
  },
  {
    id: 'bmw-i7-m70',
    brand: 'BMW',
    model: 'BMW i7 M70',
    variant: 'xDrive Electric Flagship',
    year: 2024,
    horsepower: 650,
    torque: 748,
    topSpeed: 155,
    acceleration: 3.5,
    engine: 'Dual Electric Motors (xDrive)',
    transmission: 'Single-Speed Automatic',
    drivetrain: 'All-Wheel Drive (AWD)',
    price: '₹2.50 Cr • $168,500',
    priceInr: '₹2.50 Cr',
    priceUsd: '$168,500',
    tagline: 'Silent Electric Thunder. Ultimate Luxury.',
    description: 'The most powerful all-electric BMW M model, equipped with a 31-inch 8K Theatre Screen and Executive Lounge seating.',
    heroImage: 'https://www.evoindia.com/evoindia/2023-01/b827af00-6227-45cd-9464-fe765154d70f/hero.jpg',
    thumbnail: 'https://media.gq-magazine.co.uk/photos/6365154b9474add160bce3f5/master/w_1600%2Cc_limit/BMW%2520i7_0002_BMW%2520i7%2520xDrive%2520Oxid%2520Grey_100.jpg',
    colorOptions: [
      { name: 'BMW Individual Two-Tone Black/Grey', hex: '#1a1a1a' },
    ],
    gallery: [
      { url: 'https://www.evoindia.com/evoindia/2023-01/b827af00-6227-45cd-9464-fe765154d70f/hero.jpg', caption: 'BMW i7 M70 luxury silhouette', type: 'exterior' }
    ],
    performanceMetrics: [
      { label: '0-100 KM/H', value: '3.5s' },
      { label: 'HORSEPOWER', value: '650 HP' },
      { label: 'RANGE', value: '295 Miles' }
    ],
    specifications: [
      { category: 'Battery', items: [{ label: 'Capacity', value: '101.7 kWh' }] }
    ],
    features: ['31.3" 8K Theatre Screen', 'Automatic Comfort Doors', 'Bowers & Wilkins Diamond Surround']
  }
];
