import React from 'react';
import { PackageCheck, ShieldAlert, Cpu, ClipboardList, Building2, SendHorizontal } from 'lucide-react';
import { WHY_CHOOSE_FACTS } from '../data/metalsData';

export const WhyChooseSection: React.FC = () => {
  const icons = [
    PackageCheck,
    ShieldAlert,
    Cpu,
    ClipboardList,
    Building2,
    SendHorizontal,
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            Procurement Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            WHY CHOOSE VEDANTA METAL INC
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Supplying industrial grade materials through a direct, transparent B2B sourcing workflow engineered for technical buyers and procurement specialists.
          </p>
        </div>

        {/* Feature Cards Grid (6 Clean Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_FACTS.map((fact, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={fact.title}
                className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:border-amber-400/30 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {fact.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {fact.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-900 flex items-center text-[11px] font-mono text-slate-500">
                  <span>Industrial Supply Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
