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
    <section id="industries" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            Application Sectors
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
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
                className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:text-amber-300 group-hover:border-amber-400/40 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-amber-400/90 font-mono mt-2 uppercase tracking-wide">
                    {ind.description}
                  </p>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {ind.application}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">B2B Material Supply</span>
                  <button
                    onClick={onOpenRfq}
                    className="text-[11px] font-bold text-slate-300 group-hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    Enquire &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factual Integrity Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center">
          <p className="text-xs text-slate-400 font-mono">
            Materials supplied in accordance with standard mill test certifications and client purchase order specifications.
          </p>
        </div>

      </div>
    </section>
  );
};
