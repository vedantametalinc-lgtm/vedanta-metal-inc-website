import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueStrip } from './components/ValueStrip';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProductsOverview } from './components/ProductsOverview';
import { ProductRangeCatalog } from './components/ProductRangeCatalog';
import { IndustriesSection } from './components/IndustriesSection';
import { GallerySection } from './components/GallerySection';
import { RfqSection } from './components/RfqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [rfqCategory, setRfqCategory] = useState<string>('STAINLESS STEEL');
  const [rfqGrade, setRfqGrade] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRfq = (category?: string, grade?: string) => {
    if (category) setRfqCategory(category);
    if (grade !== undefined) setRfqGrade(grade);
    scrollToSection('rfq');
  };

  const handleSelectCategoryFromOverview = (index: number) => {
    setSelectedCategoryIndex(index);
    scrollToSection('range');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Sticky Header */}
      <Header onOpenRfq={() => handleOpenRfq()} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenRfq={() => handleOpenRfq()}
          onExploreProducts={() => scrollToSection('products')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 3. Material Categories / Value Strip */}
        <ValueStrip onSelectCategory={handleSelectCategoryFromOverview} />

        {/* 4. About Us Section */}
        <AboutSection onOpenRfq={() => handleOpenRfq()} />

        {/* 5. Why Choose Vedanta Metal Inc */}
        <WhyChooseSection />

        {/* 6. Our Products Section */}
        <ProductsOverview
          onSelectCategory={handleSelectCategoryFromOverview}
          onOpenRfq={(cat) => handleOpenRfq(cat)}
        />

        {/* 7. Product Range Section */}
        <ProductRangeCatalog
          selectedCategoryIndex={selectedCategoryIndex}
          onSelectCategoryIndex={(idx) => setSelectedCategoryIndex(idx)}
          onOpenRfqWithGrade={(cat, grade) => handleOpenRfq(cat, grade)}
        />

        {/* 8. Industries We Serve */}
        <IndustriesSection onOpenRfq={() => handleOpenRfq()} />

        {/* 9. Gallery */}
        <GallerySection />

        {/* 10. Request a Quote (RFQ) Form */}
        <RfqSection initialCategory={rfqCategory} initialGrade={rfqGrade} />

        {/* 11. Contact Vedanta Metal Inc */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer onOpenRfq={() => handleOpenRfq()} />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
