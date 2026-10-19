import React from 'react';
import { ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { MATERIAL_CATEGORIES } from '../data/metalsData';

interface ProductsOverviewProps {
  onSelectCategory: (categoryIndex: number) => void;
  onNavigateToProduct: (slug: string) => void;
  onOpenRfq: (category?: string) => void;
}

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({
  onSelectCategory,
  onNavigateToProduct,
  onOpenRfq,
}) => {
  return (
    <section id="products" className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A2540] uppercase">
              Core Material Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mt-1">
              OUR PRODUCTS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Stockist and supplier of premium stainless steel, specialty high-temperature alloys, duplex steels, titanium, and non-ferrous engineering metals. Click any category for its full technical specification page.
            </p>
          </div>
          <button
            onClick={() => onOpenRfq()}
            className="self-start md:self-auto text-xs font-bold uppercase tracking-wider text-[#0A2540] hover:text-[#071E3D] flex items-center gap-1.5 cursor-pointer py-2 border-b border-[#0A2540]/30 hover:border-[#0A2540]"
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
                className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Image */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                    <img
                      src={cat.image}
                      alt={`${cat.name} material supply by VEDANTA METAL INC`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm border border-slate-200 text-[11px] font-mono font-bold text-[#0A2540] shadow-sm">
                      0{index + 1} · Category
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-blue-900 transition-colors">
                      {cat.name}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {cat.shortDesc}
                    </p>

                    {/* Key Technical Grades Preview */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                        Supplied Grades:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.grades.slice(0, 5).map((grade) => (
                          <span
                            key={grade}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {grade}
                          </span>
                        ))}
                        {cat.grades.length > 5 && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-50 text-[#0A2540] font-bold border border-slate-200">
                            +{cat.grades.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions: Individual Product Page & Quick RFQ */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => onNavigateToProduct(cat.slug)}
                    className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#071E3D] rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>VIEW INDIVIDUAL PRODUCT PAGE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-between text-xs pt-1 px-1">
                    <button
                      onClick={() => onSelectCategory(index)}
                      className="text-slate-500 hover:text-[#0A2540] font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <span>Catalogue Matrix</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => onOpenRfq(cat.name)}
                      className="text-[#0A2540] hover:underline font-bold cursor-pointer"
                    >
                      Direct RFQ &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
