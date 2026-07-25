export interface PerformanceMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface VehicleColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface SpecificationCategory {
  category: string;
  items: { label: string; value: string }[];
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  variant?: string;
  year: number;
  horsepower: number; // hp
  torque: number; // lb-ft / Nm
  topSpeed: number; // mph
  acceleration: number; // 0-60 mph in seconds
  engine: string;
  transmission: string;
  drivetrain: string;
  price: string;
  priceInr?: string;
  priceUsd?: string;
  tagline: string;
  description: string;
  historyAndCraftsmanship?: string;
  heroImage: string;
  thumbnail: string;
  soundAudioUrl?: string;
  colorOptions: VehicleColorOption[];
  gallery: {
    url: string;
    caption: string;
    type?: 'exterior' | 'interior' | 'detail' | 'action';
  }[];
  specifications: SpecificationCategory[];
  performanceMetrics: PerformanceMetric[];
  features: string[];
  isHero?: boolean;
}

export type BrandFilter =
  | 'All'
  | 'BMW'
  | 'Mercedes-Benz'
  | 'Mercedes-AMG'
  | 'Audi'
  | 'Porsche'
  | 'Ferrari'
  | 'Lamborghini'
  | 'McLaren'
  | 'Bugatti'
  | 'Pagani'
  | 'Koenigsegg'
  | 'Aston Martin'
  | 'Rolls-Royce'
  | 'Bentley'
  | 'Land Rover';
