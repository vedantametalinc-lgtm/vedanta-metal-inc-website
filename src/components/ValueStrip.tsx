import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VALUE_STRIP_ITEMS } from '../data/metalsData';

interface ValueStripProps {
  onSelectCategory: (categoryIndex: number) => void;
}

export const ValueStrip: React.FC<ValueStripProps> = ({ onSelectCategory }) => {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-2xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
        {VALUE_STRIP_ITEMS.map((item, index) => (
          <button
            key={item.name}
            onClick={() => onSelectCategory(index)}
            className={`text-left pt-3 md:pt-0 ${
              index > 0 ? 'md:pl-4 lg:pl-6' : ''
            } group cursor-pointer focus:outline-none transition-colors hover:text-amber-400`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest">
                Category 0{index + 1}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors mt-1 line-clamp-2">
              {item.name}
            </h3>
            <p className="text-[11px] font-mono text-slate-400 mt-1 truncate">
              {item.code}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};
