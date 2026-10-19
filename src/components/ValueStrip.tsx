import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { VALUE_STRIP_ITEMS, MATERIAL_CATEGORIES } from '../data/metalsData';

interface ValueStripProps {
  onSelectCategory: (categoryIndex: number) => void;
  onNavigateToProduct?: (slug: string) => void;
}

export const ValueStrip: React.FC<ValueStripProps> = ({ onSelectCategory, onNavigateToProduct }) => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-md p-4 sm:p-6 grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {VALUE_STRIP_ITEMS.map((item, index) => {
          const categorySlug = MATERIAL_CATEGORIES[index]?.slug;
          return (
            <button
              key={item.name}
              onClick={() => {
                if (onNavigateToProduct && categorySlug) {
                  onNavigateToProduct(categorySlug);
                } else {
                  onSelectCategory(index);
                }
              }}
              className={`text-left pt-3 md:pt-0 ${
                index > 0 ? 'md:pl-4 lg:pl-6' : ''
              } group cursor-pointer focus:outline-none transition-colors p-2 rounded-lg hover:bg-slate-50`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  0{index + 1} · Category
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A2540] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-blue-900 transition-colors mt-1 line-clamp-2">
                {item.name}
              </h3>
              <p className="text-[11px] font-mono text-slate-500 mt-1 truncate">
                {item.code}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};
