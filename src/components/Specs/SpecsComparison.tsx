import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GitCompare, Gauge, Zap, Trophy, ShieldCheck } from 'lucide-react';
import { VEHICLES } from '../../data/vehicles';
import { Vehicle } from '../../types/vehicle';

export const SpecsComparison: React.FC = () => {
  const [vehicleAId, setVehicleAId] = useState<string>(VEHICLES[0].id);
  const [vehicleBId, setVehicleBId] = useState<string>(VEHICLES[8].id); // 911 GT3 RS default comparison

  const vehicleA = VEHICLES.find((v) => v.id === vehicleAId) || VEHICLES[0];
  const vehicleB = VEHICLES.find((v) => v.id === vehicleBId) || VEHICLES[1];

  const metrics = [
    {
      label: 'Horsepower (HP)',
      keyA: vehicleA.horsepower,
      keyB: vehicleB.horsepower,
      format: (val: number) => `${val} HP`,
      better: vehicleA.horsepower > vehicleB.horsepower ? 'A' : vehicleA.horsepower < vehicleB.horsepower ? 'B' : 'equal',
    },
    {
      label: '0 - 60 MPH Acceleration',
      keyA: vehicleA.acceleration,
      keyB: vehicleB.acceleration,
      format: (val: number) => `${val}s`,
      better: vehicleA.acceleration < vehicleB.acceleration ? 'A' : vehicleA.acceleration > vehicleB.acceleration ? 'B' : 'equal',
    },
    {
      label: 'Top Speed (MPH)',
      keyA: vehicleA.topSpeed,
      keyB: vehicleB.topSpeed,
      format: (val: number) => `${val} MPH`,
      better: vehicleA.topSpeed > vehicleB.topSpeed ? 'A' : vehicleA.topSpeed < vehicleB.topSpeed ? 'B' : 'equal',
    },
    {
      label: 'Torque Output',
      keyA: vehicleA.torque,
      keyB: vehicleB.torque,
      format: (val: number) => `${val} lb-ft`,
      better: vehicleA.torque > vehicleB.torque ? 'A' : vehicleA.torque < vehicleB.torque ? 'B' : 'equal',
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-2">
          <GitCompare className="w-3.5 h-3.5" />
          <span>Telemetry Comparison Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-sans">
          Head to Head <span className="text-blue-500 font-mono">Performance</span>
        </h2>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Vehicle A Selector */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-blue-500/30">
          <label className="text-[10px] font-mono tracking-widest text-blue-400 uppercase block mb-2">
            Primary Specimen (Car A)
          </label>
          <select
            value={vehicleAId}
            onChange={(e) => setVehicleAId(e.target.value)}
            className="w-full bg-zinc-900 border border-white/15 rounded-xl p-3 text-sm font-mono text-white focus:outline-none focus:border-blue-400 cursor-pointer"
          >
            {VEHICLES.map((v) => (
              <option key={v.id} value={v.id}>
                {v.brand} {v.model} ({v.horsepower} HP)
              </option>
            ))}
          </select>
        </div>

        {/* Vehicle B Selector */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-sky-500/30">
          <label className="text-[10px] font-mono tracking-widest text-sky-400 uppercase block mb-2">
            Challenger Specimen (Car B)
          </label>
          <select
            value={vehicleBId}
            onChange={(e) => setVehicleBId(e.target.value)}
            className="w-full bg-zinc-900 border border-white/15 rounded-xl p-3 text-sm font-mono text-white focus:outline-none focus:border-sky-400 cursor-pointer"
          >
            {VEHICLES.map((v) => (
              <option key={v.id} value={v.id}>
                {v.brand} {v.model} ({v.horsepower} HP)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-side Telemetry Table */}
      <div className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header Row */}
        <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 p-6 text-center items-center">
          <div className="col-span-5 flex flex-col items-center gap-2">
            <img src={vehicleA.thumbnail} alt="" className="w-24 h-14 object-cover rounded-lg border border-white/10" />
            <div className="text-sm font-bold text-white uppercase">{vehicleA.brand} {vehicleA.model}</div>
          </div>
          <div className="col-span-2 text-xs font-mono text-blue-400 uppercase font-bold">VS</div>
          <div className="col-span-5 flex flex-col items-center gap-2">
            <img src={vehicleB.thumbnail} alt="" className="w-24 h-14 object-cover rounded-lg border border-white/10" />
            <div className="text-sm font-bold text-white uppercase">{vehicleB.brand} {vehicleB.model}</div>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="divide-y divide-white/5">
          {metrics.map((m, idx) => (
            <div key={idx} className="grid grid-cols-12 p-5 items-center text-center hover:bg-white/2 transition-colors">
              <div className={`col-span-5 font-mono text-lg font-bold ${m.better === 'A' ? 'text-blue-400 font-extrabold' : 'text-zinc-300'}`}>
                {m.format(m.keyA)} {m.better === 'A' && <Trophy className="inline w-4 h-4 ml-1 text-amber-400" />}
              </div>
              <div className="col-span-2 text-[10px] font-mono text-zinc-500 uppercase">
                {m.label}
              </div>
              <div className={`col-span-5 font-mono text-lg font-bold ${m.better === 'B' ? 'text-sky-400 font-extrabold' : 'text-zinc-300'}`}>
                {m.format(m.keyB)} {m.better === 'B' && <Trophy className="inline w-4 h-4 ml-1 text-amber-400" />}
              </div>
            </div>
          ))}

          {/* Engine Row */}
          <div className="grid grid-cols-12 p-5 items-center text-center text-xs font-mono">
            <div className="col-span-5 text-zinc-300 font-medium px-2">{vehicleA.engine}</div>
            <div className="col-span-2 text-[10px] text-zinc-500 uppercase">Powertrain</div>
            <div className="col-span-5 text-zinc-300 font-medium px-2">{vehicleB.engine}</div>
          </div>

          {/* Drivetrain Row */}
          <div className="grid grid-cols-12 p-5 items-center text-center text-xs font-mono">
            <div className="col-span-5 text-zinc-300 font-medium">{vehicleA.drivetrain}</div>
            <div className="col-span-2 text-[10px] text-zinc-500 uppercase">Drivetrain</div>
            <div className="col-span-5 text-zinc-300 font-medium">{vehicleB.drivetrain}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
