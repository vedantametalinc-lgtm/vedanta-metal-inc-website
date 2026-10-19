import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle2, SlidersHorizontal, ShieldCheck, ExternalLink } from 'lucide-react';
import { MATERIAL_CATEGORIES } from '../data/metalsData';

interface ProductRangeCatalogProps {
  selectedCategoryIndex: number;
  onSelectCategoryIndex: (index: number) => void;
  onOpenRfqWithGrade: (category: string, grade: string) => void;
  onNavigateToProduct?: (slug: string) => void;
}

export const ProductRangeCatalog: React.FC<ProductRangeCatalogProps> = ({
  selectedCategoryIndex,
  onSelectCategoryIndex,
  onOpenRfqWithGrade,
  onNavigateToProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const currentCategory = MATERIAL_CATEGORIES[selectedCategoryIndex] || MATERIAL_CATEGORIES[0];

  // Grade filter matching search
  const filteredGrades = currentCategory.grades.filter((g) =>
    g.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section id="range" className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0A2540] uppercase">
            Technical Metallurgy Catalogue
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight mt-1">
            PRODUCT RANGE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Procurement specification directory for stainless steel, nickel alloys, duplex, titanium, and copper-brass alloys. Select a category below or search for your required grade.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin border-b border-slate-200 mb-8">
          {MATERIAL_CATEGORIES.map((cat, idx) => {
            const isActive = idx === selectedCategoryIndex;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategoryIndex(idx);
                  setSearchTerm('');
                }}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-slate-200' : 'text-slate-400'}`}>
                  0{idx + 1}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Catalogue Card */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-lg">
          
          {/* Category Top Banner */}
          <div className="p-6 sm:p-8 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-slate-50 to-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#0A2540] font-bold tracking-wider uppercase">
                    CATEGORY SPECIFICATION
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-xs font-mono text-slate-500">
                    {currentCategory.grades.length} Certified Supplied Grades
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  {currentCategory.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentCategory.shortDesc}
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <p className="text-xs text-slate-500 font-mono">
                    {currentCategory.specificationNote}
                  </p>
                  {onNavigateToProduct && (
                    <button
                      onClick={() => onNavigateToProduct(currentCategory.slug)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2540] hover:underline cursor-pointer"
                    >
                      <span>Open Dedicated {currentCategory.name} Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Search within this Category */}
              <div className="w-full lg:w-72 shrink-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={`Filter ${currentCategory.name} grades...`}
                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] rounded-lg text-xs text-slate-900 placeholder-slate-400 font-mono transition-colors outline-none"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Grades Specification Grid */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#0A2540]" />
                <span>Available Technical Grades &amp; Materials</span>
              </h4>
              <span className="text-xs font-mono text-slate-400">
                Click any grade to pre-fill RFQ
              </span>
            </div>

            {filteredGrades.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGrades.map((grade) => (
                  <div
                    key={grade}
                    className="p-4 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-[#0A2540] hover:bg-white hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">GRADE</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 opacity-90" />
                      </div>
                      <span className="text-lg font-bold text-[#0A2540] font-mono group-hover:text-blue-900 transition-colors block">
                        {grade}
                      </span>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Supplied to standard engineering tolerances
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-200">
                      <button
                        onClick={() => onOpenRfqWithGrade(currentCategory.name, grade)}
                        className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#0A2540] group-hover:text-white bg-white group-hover:bg-[#0A2540] border border-slate-200 group-hover:border-[#0A2540] rounded transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <span>REQUEST A QUOTE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center rounded-xl bg-slate-50 border border-dashed border-slate-300">
                <p className="text-sm text-slate-600 font-mono">
                  No grade matching "{searchTerm}" found under {currentCategory.name}.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-3 text-xs font-bold text-[#0A2540] hover:underline cursor-pointer"
                >
                  Reset Grade Filter
                </button>
              </div>
            )}

            {/* Bottom Procurement Banner within Catalogue */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0A2540] shrink-0" />
                <span className="text-xs text-slate-700">
                  Need a specific size, thickness, pipe schedule, or cut-to-length piece for <strong>{currentCategory.name}</strong>?
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {onNavigateToProduct && (
                  <button
                    onClick={() => onNavigateToProduct(currentCategory.slug)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0A2540] bg-white border border-slate-300 hover:bg-slate-100 rounded transition-all cursor-pointer"
                  >
                    View Page
                  </button>
                )}
                <button
                  onClick={() => onOpenRfqWithGrade(currentCategory.name, '')}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0A2540] hover:bg-[#071E3D] rounded transition-all shrink-0 cursor-pointer shadow-sm"
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
