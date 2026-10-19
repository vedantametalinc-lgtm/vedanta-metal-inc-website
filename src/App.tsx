import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueStrip } from './components/ValueStrip';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProductsOverview } from './components/ProductsOverview';
import { ProductRangeCatalog } from './components/ProductRangeCatalog';
import { ProductDetailPage } from './components/ProductDetailPage';
import { IndustriesSection } from './components/IndustriesSection';
import { GallerySection } from './components/GallerySection';
import { RfqSection } from './components/RfqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MATERIAL_CATEGORIES } from './data/metalsData';

export default function App() {
  const [activeProductSlug, setActiveProductSlug] = useState<string | null>(null);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [rfqCategory, setRfqCategory] = useState<string>('STAINLESS STEEL');
  const [rfqGrade, setRfqGrade] = useState<string>('');

  // Handle URL hash for individual product pages and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#product-')) {
        const slug = hash.replace('#product-', '');
        const matched = MATERIAL_CATEGORIES.find((c) => c.slug === slug);
        if (matched) {
          setActiveProductSlug(slug);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setActiveProductSlug(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveProductSlug(null);
    window.history.pushState(null, '', `#${id}`);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigateHome = (sectionId?: string) => {
    setActiveProductSlug(null);
    if (sectionId && sectionId !== 'home') {
      scrollToSection(sectionId);
    } else {
      window.history.pushState(null, '', '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToProduct = (slug: string) => {
    setActiveProductSlug(slug);
    window.history.pushState(null, '', `#product-${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (category?: string, grade?: string) => {
    if (category) setRfqCategory(category);
    if (grade !== undefined) setRfqGrade(grade);
    
    // If currently on an individual product page, scroll to its embedded RFQ, or navigate home to RFQ
    if (activeProductSlug) {
      const rfqEl = document.getElementById('rfq');
      if (rfqEl) {
        rfqEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    scrollToSection('rfq');
  };

  const handleSelectCategoryFromOverview = (index: number) => {
    setSelectedCategoryIndex(index);
    scrollToSection('range');
  };

  const activeCategory = MATERIAL_CATEGORIES.find((c) => c.slug === activeProductSlug);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#0A2540] selection:text-white">
      {/* 1. Header with Individual Product Submenu */}
      <Header
        onOpenRfq={() => handleOpenRfq()}
        onNavigateHome={handleNavigateHome}
        onNavigateToProduct={handleNavigateToProduct}
        currentProductSlug={activeProductSlug}
      />

      <main className="flex-grow">
        {activeCategory ? (
          /* Individual Product Page View */
          <ProductDetailPage
            category={activeCategory}
            onBackToHome={() => handleNavigateHome('products')}
            onSelectCategorySlug={handleNavigateToProduct}
            onOpenRfqWithGrade={handleOpenRfq}
          />
        ) : (
          /* Main Corporate Overview Flow */
          <>
            {/* 2. Hero Section */}
            <Hero
              onOpenRfq={() => handleOpenRfq()}
              onExploreProducts={() => scrollToSection('products')}
              onContactClick={() => scrollToSection('contact')}
            />

            {/* 3. Material Categories / Value Strip */}
            <ValueStrip 
              onSelectCategory={handleSelectCategoryFromOverview}
              onNavigateToProduct={handleNavigateToProduct}
            />

            {/* 4. About Us Section */}
            <AboutSection onOpenRfq={() => handleOpenRfq()} />

            {/* 5. Why Choose Vedanta Metal Inc */}
            <WhyChooseSection />

            {/* 6. Our Products Section (Individual Product Cards with Navigation Buttons) */}
            <ProductsOverview
              onSelectCategory={handleSelectCategoryFromOverview}
              onNavigateToProduct={handleNavigateToProduct}
              onOpenRfq={(cat) => handleOpenRfq(cat)}
            />

            {/* 7. Product Range Section (Catalogue Specification Matrix) */}
            <ProductRangeCatalog
              selectedCategoryIndex={selectedCategoryIndex}
              onSelectCategoryIndex={(idx) => setSelectedCategoryIndex(idx)}
              onOpenRfqWithGrade={(cat, grade) => handleOpenRfq(cat, grade)}
              onNavigateToProduct={handleNavigateToProduct}
            />

            {/* 8. Industries We Serve */}
            <IndustriesSection onOpenRfq={() => handleOpenRfq()} />

            {/* 9. Gallery */}
            <GallerySection />

            {/* 10. Request a Quote (RFQ) Form connected to sales@vedantametalinc.com */}
            <RfqSection initialCategory={rfqCategory} initialGrade={rfqGrade} />

            {/* 11. Contact Vedanta Metal Inc */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 12. Footer with Individual Product Links */}
      <Footer 
        onOpenRfq={() => handleOpenRfq()}
        onNavigateHome={handleNavigateHome}
        onNavigateToProduct={handleNavigateToProduct}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
