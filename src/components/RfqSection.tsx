import React, { useState, useEffect } from 'react';
import { Upload, FileText, CheckCircle2, MessageSquare, Send, X, AlertCircle, Mail, Copy } from 'lucide-react';
import { MATERIAL_CATEGORIES, COMPANY_INFO } from '../data/metalsData';

interface RfqSectionProps {
  initialCategory?: string;
  initialGrade?: string;
}

export const RfqSection: React.FC<RfqSectionProps> = ({
  initialCategory,
  initialGrade,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneWhatsApp: '',
    country: '',
    productCategory: initialCategory || 'STAINLESS STEEL',
    materialGrade: initialGrade || '',
    quantity: '',
    requiredSpecification: '',
    message: '',
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [rfqReferenceId, setRfqReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedEmailBody, setCopiedEmailBody] = useState(false);

  const targetEmail = COMPANY_INFO.emails[0]; // sales@vedantametalinc.com

  // Update form if parent passes initial values
  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({
        ...prev,
        productCategory: initialCategory,
        materialGrade: initialGrade || prev.materialGrade,
      }));
    }
  }, [initialCategory, initialGrade]);

  // Available grades based on selected category
  const selectedCatObj = MATERIAL_CATEGORIES.find(
    (c) => c.name.toLowerCase() === formData.productCategory.toLowerCase()
  );
  const availableGrades = selectedCatObj ? selectedCatObj.grades : [];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset grade if category changed and current grade not in new category
      ...(name === 'productCategory' ? { materialGrade: '' } : {}),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const getEmailContent = (refId: string) => {
    const subject = `Material RFQ [${refId}] - ${formData.companyName ? `${formData.companyName} / ` : ''}${formData.fullName}`;
    const body = `Attn: Sales Department - VEDANTA METAL INC
Email: ${targetEmail}

Material Procurement Enquiry
Reference ID: ${refId}

--- BUYER INFORMATION ---
Full Name: ${formData.fullName}
Company Name: ${formData.companyName || 'Not specified'}
Business Email: ${formData.businessEmail}
Phone / WhatsApp: ${formData.phoneWhatsApp}
Country: ${formData.country || 'Not specified'}

--- MATERIAL SPECIFICATION ---
Product Category: ${formData.productCategory}
Material / Grade: ${formData.materialGrade || 'Standard Grade / Per Specification'}
Quantity: ${formData.quantity || 'Per requirement'}
Required Size / Specification: ${formData.requiredSpecification || 'Per drawing / quotation'}

--- ADDITIONAL REQUIREMENTS / NOTES ---
${formData.message || 'Please provide quotation, mill test availability, and delivery lead time.'}

${attachedFile ? `[Note: Attachment "${attachedFile.name}" selected by buyer]\n` : ''}
Sent via VEDANTA METAL INC Official Website RFQ Portal`;

    return { subject, body };
  };

  const generateMailtoUrl = (refId: string) => {
    const { subject, body } = getEmailContent(refId);
    return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyEmailContent = () => {
    const { subject, body } = getEmailContent(rfqReferenceId);
    const fullText = `To: ${targetEmail}\nSubject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedEmailBody(true);
    setTimeout(() => setCopiedEmailBody(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.businessEmail.trim() || !formData.businessEmail.includes('@')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }
    if (!formData.phoneWhatsApp.trim()) {
      setErrorMsg('Please enter your phone or WhatsApp number.');
      return;
    }

    // Generate unique RFQ Reference ID
    const refId = `VMI-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqReferenceId(refId);
    setSubmitted(true);

    // Automatically trigger mailto link to open user's default email client addressed to sales@vedantametalinc.com
    try {
      const mailtoUrl = generateMailtoUrl(refId);
      window.location.href = mailtoUrl;
    } catch {
      // In case window.location.href is restricted in sandbox, submitted UI provides direct button & copy tool
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      phoneWhatsApp: '',
      country: '',
      productCategory: 'STAINLESS STEEL',
      materialGrade: '',
      quantity: '',
      requiredSpecification: '',
      message: '',
    });
    setAttachedFile(null);
    setCopiedEmailBody(false);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello VEDANTA METAL INC, I have submitted an RFQ (${rfqReferenceId}):
Name: ${formData.fullName}
Company: ${formData.companyName || 'N/A'}
Email: ${formData.businessEmail}
Phone/WA: ${formData.phoneWhatsApp}
Country: ${formData.country || 'N/A'}
Category: ${formData.productCategory}
Grade: ${formData.materialGrade || 'Standard Specification'}
Quantity: ${formData.quantity || 'Specification Dependent'}
Size/Specs: ${formData.requiredSpecification || 'As per enquiry'}
Notes: ${formData.message || 'Please share your best quote.'}
Routed to: ${targetEmail}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="rfq" className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            B2B Procurement Request
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            REQUEST A QUOTE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Share your material requirement with our team and send your enquiry directly to VEDANTA METAL INC
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Form Container */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                /* Success Confirmation State */
                <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      RFQ Successfully Generated
                    </h3>
                    <p className="text-slate-300 text-sm max-w-lg mx-auto">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry is connected to our official sales desk:
                    </p>
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-slate-950 rounded-lg border border-amber-400/40 font-mono text-amber-300 text-sm font-bold tracking-wide">
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span>{targetEmail}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-xs font-mono text-slate-500">
                        Reference Code: <strong className="text-slate-200">{rfqReferenceId}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-left text-xs max-w-md mx-auto space-y-1.5 font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>Recipient:</span>
                      <span className="text-amber-400 font-semibold">{targetEmail}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Category:</span>
                      <span className="text-slate-200">{formData.productCategory}</span>
                    </div>
                    {formData.materialGrade && (
                      <div className="flex justify-between text-slate-400">
                        <span>Grade:</span>
                        <span className="text-amber-400">{formData.materialGrade}</span>
                      </div>
                    )}
                    {formData.quantity && (
                      <div className="flex justify-between text-slate-400">
                        <span>Quantity:</span>
                        <span className="text-slate-200">{formData.quantity}</span>
                      </div>
                    )}
                    {attachedFile && (
                      <div className="flex justify-between text-slate-400">
                        <span>Attached File:</span>
                        <span className="text-slate-200 truncate max-w-[200px]">{attachedFile.name}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Click below to open your email client addressed to <strong>{targetEmail}</strong>, copy the prepared enquiry text, or forward it via WhatsApp for immediate response.
                  </p>

                  {/* Direct Email & WhatsApp Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
                    <a
                      href={generateMailtoUrl(rfqReferenceId)}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                      <span>OPEN IN MAIL CLIENT</span>
                    </a>

                    <button
                      onClick={handleCopyEmailContent}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors border border-slate-700 cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>{copiedEmailBody ? 'COPIED TO CLIPBOARD' : 'COPY INQUIRY TEXT'}</span>
                    </button>

                    <a
                      href={`https://wa.me/919636636229?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WHATSAPP</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="text-xs font-mono text-slate-500 hover:text-slate-300 underline cursor-pointer"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                /* The RFQ Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Direct Connection Indicator to sales@vedantametalinc.com */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="text-slate-300 font-medium">Inquiry Connected To:</span>
                      <a
                        href={`mailto:${targetEmail}`}
                        className="text-amber-400 font-mono font-bold hover:underline"
                      >
                        {targetEmail}
                      </a>
                    </div>
                    <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      Official Sales Desk
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. John Mitchell"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Industrial Fabrications"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Business Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Business Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        required
                        placeholder="procurement@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Phone / WhatsApp <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneWhatsApp"
                        value={formData.phoneWhatsApp}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 / +1 ..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="e.g. India, UAE, UK, Singapore"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Material Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-800">
                    {/* Product Category */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Product Category <span className="text-amber-400">*</span>
                      </label>
                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors font-mono"
                      >
                        {MATERIAL_CATEGORIES.map((c) => (
                          <option key={c.id} value={c.name} className="bg-slate-900 text-white">
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Material / Grade */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Material / Grade
                      </label>
                      {availableGrades.length > 0 ? (
                        <div className="space-y-1.5">
                          <select
                            name="materialGrade"
                            value={formData.materialGrade}
                            onChange={handleInputChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors font-mono"
                          >
                            <option value="">Select Grade (or enter custom below)</option>
                            {availableGrades.map((g) => (
                              <option key={g} value={g} className="bg-slate-900 text-white">
                                {g}
                              </option>
                            ))}
                          </select>
                          <input
                            type="text"
                            name="materialGrade"
                            value={formData.materialGrade}
                            onChange={handleInputChange}
                            placeholder="Or type specific grade..."
                            className="w-full px-3 py-1.5 rounded-md bg-slate-950/70 border border-slate-800/80 text-xs text-slate-200 placeholder-slate-600 focus:border-amber-400 outline-none font-mono"
                          />
                        </div>
                      ) : (
                        <input
                          type="text"
                          name="materialGrade"
                          value={formData.materialGrade}
                          onChange={handleInputChange}
                          placeholder="e.g. 316L, Inconel 625, UNS 32205"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-mono"
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Quantity */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g. 500 kg, 2 tons, 20 lengths"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    {/* Required Size / Specification */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                        Required Size / Specification
                      </label>
                      <input
                        type="text"
                        name="requiredSpecification"
                        value={formData.requiredSpecification}
                        onChange={handleInputChange}
                        placeholder="e.g. Sheet 2mm, Pipe 2'' Sch 40, Bar 50mm"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                      Message / Special Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Specify tolerances, delivery timelines, cut lengths, or any special metallurgy requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* UPLOAD RFQ / SPECIFICATION */}
                  <div className="pt-2">
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                      UPLOAD RFQ / SPECIFICATION
                    </label>
                    <div className="border border-dashed border-slate-800 rounded-xl p-4 bg-slate-950/60 hover:border-amber-400/40 transition-colors text-center relative cursor-pointer">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.dxf,.png,.jpg,.jpeg"
                      />
                      {attachedFile ? (
                        <div className="flex items-center justify-center gap-3 text-xs text-amber-300 font-mono">
                          <FileText className="w-5 h-5 text-amber-400" />
                          <span className="truncate max-w-xs">{attachedFile.name} ({(attachedFile.size / 1024).toFixed(1)} KB)</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setAttachedFile(null);
                            }}
                            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                          <div className="text-xs text-slate-300 font-medium">
                            Click or drag material schedule / drawing / BOQ document
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            Supports PDF, Excel, Word, DWG, and image files (up to 25MB)
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Primary Submit Button: REQUEST A QUOTE */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-xl hover:shadow-amber-500/20 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>REQUEST A QUOTE</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center mt-2.5 font-mono">
                      <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Enquiries are connected directly to <strong>{targetEmail}</strong></span>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Side Info & Direct Contact Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick WhatsApp Quotation Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instant WhatsApp RFQ</h4>
                  <span className="text-[11px] font-mono text-emerald-400">Direct Sales Channel</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Need an immediate check on material availability or rapid pricing? Message our sales team directly on WhatsApp.
              </p>
              <a
                href={`https://wa.me/919636636229?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            {/* Procurement Policy & Standard Info */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs space-y-4">
              <h4 className="font-bold text-white uppercase tracking-wider font-mono text-xs border-b border-slate-800 pb-2">
                Supply Operations Notice
              </h4>
              <ul className="space-y-2.5 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono">·</span>
                  <span>Enquiries are matched strictly against certified material grades and dimensions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono">·</span>
                  <span>Standard cut-to-length and custom pieces available based on tender drawings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono">·</span>
                  <span>Direct delivery coordination for fabrication units, EPC contractors, and project sites.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                  Verified Entity:
                </span>
                <span className="font-bold text-white block">VEDANTA METAL INC</span>
                <span className="font-mono text-[11px] text-amber-400">GSTIN: {COMPANY_INFO.gstin}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
