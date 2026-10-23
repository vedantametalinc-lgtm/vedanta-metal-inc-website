import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  FileText, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight,
  Send,
  Mail,
  Copy,
  AlertCircle
} from 'lucide-react';
import { MaterialCategory, MATERIAL_CATEGORIES, COMPANY_INFO } from '../data/metalsData';

interface ProductDetailPageProps {
  category: MaterialCategory;
  onBackToHome: () => void;
  onSelectCategorySlug: (slug: string) => void;
  onOpenRfqWithGrade: (category: string, grade: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  category,
  onBackToHome,
  onSelectCategorySlug,
  onOpenRfqWithGrade,
}) => {
  const currentIndex = MATERIAL_CATEGORIES.findIndex((c) => c.slug === category.slug);
  const prevCategory = currentIndex > 0 ? MATERIAL_CATEGORIES[currentIndex - 1] : MATERIAL_CATEGORIES[MATERIAL_CATEGORIES.length - 1];
  const nextCategory = currentIndex < MATERIAL_CATEGORIES.length - 1 ? MATERIAL_CATEGORIES[currentIndex + 1] : MATERIAL_CATEGORIES[0];

  const [selectedGrade, setSelectedGrade] = useState<string>(category.grades[0] || '');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryQuantity, setInquiryQuantity] = useState('');
  const [inquirySpecs, setInquirySpecs] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rfqRef, setRfqRef] = useState('');
  const [copied, setCopied] = useState(false);
  const [formError, setFormError] = useState('');

  const targetEmail = COMPANY_INFO.emails[0];

  const handleGradeSelect = (grade: string) => {
    setSelectedGrade(grade);
  };

  const generateInquiryMailtoUrl = (ref: string) => {
    const subject = `Material RFQ [${ref}] - ${category.name} (${selectedGrade})`;
    const body = `Attn: Sales Department - VEDANTA METAL INC\nEmail: ${targetEmail}\n\n` +
      `Product Category: ${category.name}\n` +
      `Specified Grade: ${selectedGrade}\n` +
      `Reference ID: ${ref}\n\n` +
      `Buyer Name: ${inquiryName}\n` +
      `Company: ${inquiryCompany || 'N/A'}\n` +
      `Email: ${inquiryEmail}\n` +
      `Phone/WhatsApp: ${inquiryPhone}\n` +
      `Quantity: ${inquiryQuantity || 'As per quotation'}\n` +
      `Size / Specification: ${inquirySpecs || 'Per standard enquiry'}\n` +
      `Notes: ${inquiryMessage || 'Please share your best quote.'}\n\n` +
      `Prepared via VEDANTA METAL INC Official Product Page`;

    return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!inquiryName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!inquiryEmail.trim() || !inquiryEmail.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!inquiryPhone.trim()) {
      setFormError('Please enter your contact number.');
      return;
    }

    const ref = `VMI-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    try {
      window.location.href = generateInquiryMailtoUrl(ref);
      setRfqRef(ref);
      setFormSubmitted(true);
    } catch {
      setFormError('Could not open your email app. Please try again or contact our sales desk directly.');
    }
  };

  const copyEmailText = () => {
    const text = `To: ${targetEmail}\nSubject: Material RFQ [${rfqRef}] - ${category.name} (${selectedGrade})\n\n` +
      `Buyer: ${inquiryName} (${inquiryCompany || 'N/A'})\n` +
      `Email: ${inquiryEmail} | Phone: ${inquiryPhone}\n` +
      `Product: ${category.name}\nGrade: ${selectedGrade}\nQuantity: ${inquiryQuantity}\n` +
      `Requirements: ${inquirySpecs}\nNotes: ${inquiryMessage}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappInquiryUrl = `https://wa.me/919636636229?text=${encodeURIComponent(
    `Hello VEDANTA METAL INC, I am inquiring about ${category.name} (Grade: ${selectedGrade || 'all grades'}). Please share material availability and specifications.`
  )}`;

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 text-slate-800">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="border-b border-slate-200 bg-slate-50/80 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
              <button 
                onClick={onBackToHome}
                className="hover:text-[#0A2540] font-medium cursor-pointer transition-colors"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <button 
                onClick={onBackToHome}
                className="hover:text-[#0A2540] font-medium cursor-pointer transition-colors"
              >
                Products
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-bold text-[#0A2540] truncate max-w-[200px] sm:max-w-none">
                {category.name}
              </span>
            </div>

            {/* Navigation Buttons: Back & Category Switchers */}
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Products</span>
              </button>

              <div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block" />

              <button
                onClick={() => onSelectCategorySlug(prevCategory.slug)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-100 text-xs text-slate-600 transition-colors cursor-pointer"
                title={`Previous: ${prevCategory.name}`}
              >
                <ArrowLeft className="w-3 h-3" />
                <span className="hidden md:inline">Prev</span>
              </button>

              <button
                onClick={() => onSelectCategorySlug(nextCategory.slug)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-100 text-xs text-slate-600 transition-colors cursor-pointer"
                title={`Next: ${nextCategory.name}`}
              >
                <span className="hidden md:inline">Next</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Product Page Header & Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Technical Overview */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A2540]/5 border border-[#0A2540]/15 text-[#0A2540] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Category Specification · Industrial Supply</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-tight">
              {category.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {category.shortDesc}
            </p>

            <p className="text-sm text-slate-500 leading-relaxed">
              {category.detailedDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#grades"
                className="px-5 py-2.5 rounded-md bg-[#0A2540] hover:bg-[#071E3D] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                View Available Grades ({category.grades.length})
              </a>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp RFQ</span>
              </a>

              <button
                onClick={() => onOpenRfqWithGrade(category.name, selectedGrade)}
                className="px-4 py-2.5 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Submit Specification
              </button>
            </div>
          </div>

          {/* Right Column: High-Resolution Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={category.image}
                  alt={`${category.name} industrial supply by VEDANTA METAL INC`}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center justify-between shadow-sm">
                  <span className="font-semibold text-[#0A2540]">{category.name}</span>
                  <span className="text-[11px] font-mono text-slate-500">{category.grades.length} Grades Verified</span>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-500 font-mono">
                {category.specificationNote}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Available Material Forms & Technical Attributes */}
      <div className="bg-slate-50 border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Forms Supplied */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-[#0A2540] font-bold text-sm uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#0A2540]" />
                <h3>Supplied Product Forms</h3>
              </div>
              <p className="text-xs text-slate-500">
                Available in standard mill dimensions and custom cut-to-order profiles.
              </p>
              <ul className="space-y-2 pt-1 text-xs text-slate-700">
                {category.availableForms.map((form) => (
                  <li key={form} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{form}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metallurgical Properties */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-[#0A2540] font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#0A2540]" />
                <h3>Performance Properties</h3>
              </div>
              <p className="text-xs text-slate-500">
                Engineered for critical industrial and engineering compliance.
              </p>
              <ul className="space-y-2 pt-1 text-xs text-slate-700">
                {category.keyProperties.map((prop) => (
                  <li key={prop} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2540] shrink-0" />
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Environments */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-[#0A2540] font-bold text-sm uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#0A2540]" />
                <h3>Service Environments</h3>
              </div>
              <p className="text-xs text-slate-500">
                Procured for demanding commercial operational facilities.
              </p>
              <ul className="space-y-2 pt-1 text-xs text-slate-700">
                {category.serviceEnvironments.map((env) => (
                  <li key={env} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>{env}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Grade Specification Directory Section */}
      <div id="grades" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-[#0A2540] uppercase tracking-wider">
              Procurement Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight mt-1">
              Authorized Technical Grades: {category.name}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Select any grade below to pre-populate the direct inquiry form or initiate an instant quotation.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            {category.grades.length} Grades Verified
          </span>
        </div>

        {/* Grades Specification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.grades.map((grade) => {
            const isSelected = selectedGrade === grade;
            return (
              <div
                key={grade}
                className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#0A2540] bg-[#0A2540]/5 shadow-sm ring-1 ring-[#0A2540]'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
                onClick={() => handleGradeSelect(grade)}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      Standard Grade
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-[#0A2540]" />
                    )}
                  </div>
                  <h4 className="text-lg font-bold font-mono text-[#0A2540]">
                    {grade}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Certified material supply adhering to required mill test reports and project drawings.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGradeSelect(grade);
                      onOpenRfqWithGrade(category.name, grade);
                    }}
                    className="w-full py-2 px-3 rounded text-xs font-bold uppercase tracking-wider text-[#0A2540] bg-slate-100 hover:bg-[#0A2540] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded Direct RFQ Form for This Product */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <span className="text-xs font-mono font-bold text-[#0A2540] uppercase tracking-wider">
                Direct Product Inquiry
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight mt-1">
                Inquire About {category.name}
              </h3>
              <div className="mt-2 flex items-center gap-2 text-xs font-mono text-slate-600">
                <span>Selected Grade:</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-bold text-[#0A2540]">
                  {selectedGrade || 'General Specification'}
                </span>
                <span>·</span>
                <span>Destination: <strong>{targetEmail}</strong></span>
              </div>
            </div>

            {formSubmitted ? (
              <div className="text-center py-6 space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0A2540]">
                  Email Draft Ready for {targetEmail}
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Your email app should open with the enquiry prepared. Review the details and press Send; the enquiry has not been sent yet. Reference Code: <strong className="font-mono text-[#0A2540]">{rfqRef}</strong>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={generateInquiryMailtoUrl(rfqRef)}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#0A2540] hover:bg-[#071E3D] rounded transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Email Draft</span>
                  </a>
                  <button
                    onClick={copyEmailText}
                    className="px-4 py-2 text-xs font-bold text-[#0A2540] bg-slate-100 hover:bg-slate-200 rounded border border-slate-300 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied' : 'Copy Inquiry Details'}</span>
                  </button>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={inquiryCompany}
                      onChange={(e) => setInquiryCompany(e.target.value)}
                      placeholder="e.g. EPC Engineering Ltd"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      required
                      placeholder="purchasing@company.com"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      required
                      placeholder="+91 / +1 ..."
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Quantity Required
                    </label>
                    <input
                      type="text"
                      value={inquiryQuantity}
                      onChange={(e) => setInquiryQuantity(e.target.value)}
                      placeholder="e.g. 500 kg, 2 tons, 20 lengths"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                      Size / Thickness / Specification
                    </label>
                    <input
                      type="text"
                      value={inquirySpecs}
                      onChange={(e) => setInquirySpecs(e.target.value)}
                      placeholder="e.g. Plate 10mm, Pipe 2'' Sch 40, Bar 25mm"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1">
                    Special Requirements / Notes
                  </label>
                  <textarea
                    rows={2}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Specific tolerances, delivery schedules, cut pieces, or certification requirements..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 py-3 px-6 rounded-lg bg-[#0A2540] hover:bg-[#071E3D] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>REQUEST QUOTE FOR {selectedGrade || category.name}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-mono pt-1">
                  <Mail className="w-3 h-3 text-[#0A2540]" />
                  <span>Submitting opens an email draft; review it and press Send.</span>
                </div>
              </form>
            )}

          </div>

          {/* Bottom Category Switcher Navigation Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onSelectCategorySlug(prevCategory.slug)}
              className="text-left group cursor-pointer"
            >
              <span className="text-[10px] font-mono text-slate-400 block uppercase">
                &larr; Previous Category
              </span>
              <span className="text-xs font-bold text-[#0A2540] group-hover:underline">
                {prevCategory.name}
              </span>
            </button>

            <button
              onClick={onBackToHome}
              className="px-4 py-2 rounded-md border border-slate-300 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              Back to Overview
            </button>

            <button
              onClick={() => onSelectCategorySlug(nextCategory.slug)}
              className="text-right group cursor-pointer"
            >
              <span className="text-[10px] font-mono text-slate-400 block uppercase">
                Next Category &rarr;
              </span>
              <span className="text-xs font-bold text-[#0A2540] group-hover:underline">
                {nextCategory.name}
              </span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
