import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MATERIAL_CATEGORIES } from '../data/metalsData';

interface ProductsOverviewProps {
  onSelectCategory: (categoryIndex: number) => void;
  onOpenRfq: (category?: string) => void;
}

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  onSelectCategory,
  onOpenRfq,
}) => {
  return (
    <section id="products" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              Core Material Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              OUR PRODUCTS
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Stockist and supplier of premium stainless steel, specialty high-temperature alloys, duplex steels, titanium, and non-ferrous engineering metals.
            </p>
          </div>
          <button
            onClick={() => onOpenRfq()}
            className="self-start md:self-auto text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer py-2"
          >
            <span>SUBMIT MATERIAL RFQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MATERIAL_CATEGORIES.map((cat, index) => {
            return (
              <div
                key={cat.id}
                className="group rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Category Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                    <img
                      src={cat.image}
                      alt={`${cat.name} material supply by VEDANTA METAL INC`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-mono text-amber-400">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cat.name}
                    </h3>
                    
                    <p className="text-sm text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {cat.shortDesc}
                    </p>

                    {/* Key Technical Grades Preview */}
                    <div className="mt-4 pt-4 border-t border-slate-800">
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                        Supplied Grades:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.grades.slice(0, 5).map((grade) => (
                          <span
                            key={grade}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                          >
                            {grade}
                          </span>
                        ))}
                        {cat.grades.length > 5 && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/40 text-amber-400/80">
                            +{cat.grades.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectCategory(index)}
                    className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-slate-950 bg-slate-800/60 group-hover:bg-amber-400 rounded transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>VIEW PRODUCT RANGE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
