import React from 'react';
import { Factory, Flame, Zap, TestTubes, Cog, HardHat, RefreshCcw } from 'lucide-react';
import { INDUSTRIES } from '../data/metalsData';

interface IndustriesSectionProps {
  onOpenRfq: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenRfq }) => {
  const industryIcons = [
    Flame,      // Oil & Gas
    Factory,    // Petrochemical
    Zap,        // Power
    TestTubes,  // Chemical
    Cog,        // Engineering & Manufacturing
    HardHat,    // Construction
    RefreshCcw  // Process Industries
  ];

  return (
    <section id="industries" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0A2540] uppercase">
            Application Sectors
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mt-1">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Supplying industrial metals and high-performance alloys tailored for critical operational environments and rigorous engineering specifications.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, index) => {
            const Icon = industryIcons[index % industryIcons.length];
            return (
              <div
                key={ind.name}
                className="p-6 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0A2540] group-hover:bg-[#0A2540] group-hover:text-white transition-colors mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-blue-900 transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-500 font-mono mt-2 uppercase tracking-wide">
                    {ind.description}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {ind.application}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">B2B Material Supply</span>
                  <button
                    onClick={onOpenRfq}
                    className="text-[11px] font-bold text-[#0A2540] hover:underline transition-colors cursor-pointer"
                  >
                    Enquire &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Integrity Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Materials supplied in accordance with standard mill test certifications and client purchase order specifications.
          </p>
        </div>

      </div>
    </section>
  );
};
