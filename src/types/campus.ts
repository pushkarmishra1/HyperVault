export type CampusWing = 'left' | 'right' | 'center';

export interface BrandInfo {
  id: string;
  name: string;
  tagline: string;
  wing: CampusWing;
  position: [number, number, number]; // [x, y, z] position in 3D atrium
  color: string;
  accentColor: string;
  logo: string;
  description: string;
  flagshipModelId: string;
  vehicleCount: number;
  country: string;
  founded: number;
}

export type CampusViewMode = 'atrium' | 'transit' | 'showroom' | 'cinema';

export interface TestDriveFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  advisorPreference: string;
  notes: string;
}

export interface FinanceCalculation {
  vehiclePrice: number;
  downPayment: number;
  tradeInValue: number;
  loanTermMonths: number;
  interestRate: number;
  estimatedMonthlyPayment: number;
  totalInterest: number;
  totalCost: number;
}
