import { Vehicle, BrandFilter } from '../types/vehicle';
import { bmwVehicles } from './vehicles/bmw';
import { audiVehicles } from './vehicles/audi';
import { mercedesVehicles } from './vehicles/mercedes';
import { porscheVehicles } from './vehicles/porsche';
import { ferrariVehicles } from './vehicles/ferrari';
import { lamborghiniVehicles } from './vehicles/lamborghini';
import { mclarenVehicles } from './vehicles/mclaren';
import { hypercarVehicles } from './vehicles/hypercars';
import { luxuryVehicles } from './vehicles/luxury';

export const VEHICLES: Vehicle[] = [
  ...bmwVehicles,
  ...audiVehicles,
  ...mercedesVehicles,
  ...porscheVehicles,
  ...ferrariVehicles,
  ...lamborghiniVehicles,
  ...mclarenVehicles,
  ...hypercarVehicles,
  ...luxuryVehicles
];

export const HERO_VEHICLE = VEHICLES.find(v => v.id === 'bmw-m5-cs') || VEHICLES[0];

export const BRANDS: BrandFilter[] = [
  'All',
  'BMW',
  'Audi',
  'Mercedes-AMG',
  'Porsche',
  'Ferrari',
  'Lamborghini',
  'McLaren',
  'Bugatti',
  'Pagani',
  'Koenigsegg',
  'Aston Martin',
  'Rolls-Royce',
  'Bentley',
  'Land Rover'
];
