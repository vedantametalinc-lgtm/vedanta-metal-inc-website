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
    <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0A2540] uppercase">
            Procurement Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mt-2">
            WHY CHOOSE VEDANTA METAL INC
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
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
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0A2540]/5 border border-[#0A2540]/10 flex items-center justify-center text-[#0A2540] group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0A2540] group-hover:text-blue-900 transition-colors mb-2">
                    {fact.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {fact.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[11px] font-mono text-slate-400">
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
