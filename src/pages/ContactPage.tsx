import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND, SERVICES } from '../data/relocationData';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    originCity: '',
    destinationCity: '',
    moveType: 'Residential Relocation',
    homeSize: '3-4 Bedroom Estate',
    targetDate: '',
    notes: '',
    fineArtCrating: true,
    climateStorage: false,
    valetUnpacking: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [calculatedQuote, setCalculatedQuote] = useState<{ min: number; max: number } | null>(null);

  useEffect(() => {
    document.title = "Contact & Bespoke Relocation Inquiries | Northvault Relocation";
  }, []);

  const calculateEstimate = (homeSize: string, fineArt: boolean, storage: boolean) => {
    let base = 6500;
    if (homeSize.includes('1-2')) base = 4200;
    if (homeSize.includes('3-4')) base = 7800;
    if (homeSize.includes('5+')) base = 14000;
    if (homeSize.includes('Commercial')) base = 18000;

    if (fineArt) base += 1800;
    if (storage) base += 1200;

    return {
      min: Math.round(base),
      max: Math.round(base * 1.3),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const est = calculateEstimate(formData.homeSize, formData.fineArtCrating, formData.climateStorage);
    setCalculatedQuote(est);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D6A85F', '#F5F3EE', '#FFFFFF', '#172033'],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-4">
              PRIORITY RELOCATION DESK
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tightest uppercase leading-[1.05]">
              Let's get <br />
              <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal">
                you moving.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-editorial leading-relaxed">
              Initiate a confidential consultation with a dedicated Senior Move Director. We will formulate a comprehensive itinerary and binding proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Executive Desk Contacts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm p-8 sm:p-12 shadow-xl">
            {!submitted ? (
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                      Relocation Itinerary Request
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-editorial mt-1">
                      All estimates are backed by our Full Value Protection & Price Integrity guarantee.
                    </p>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-gold hidden sm:block" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alistair Montgomery"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alistair@estate.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Direct Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-3829"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Route & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Moving From (City, State) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Austin, TX"
                        value={formData.originCity}
                        onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Moving To (City, State / Int'l) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="New York, NY"
                        value={formData.destinationCity}
                        onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Target Move Date
                      </label>
                      <input
                        type="date"
                        value={formData.targetDate}
                        onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-2.5 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Class & Property Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Service Discipline
                      </label>
                      <select
                        value={formData.moveType}
                        onChange={(e) => setFormData({ ...formData, moveType: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="Residential Relocation">Residential Moving (Estate / Penthouse)</option>
                        <option value="Commercial Relocation">Office & Corporate Headquarters</option>
                        <option value="International Relocation">International Relocation & Customs</option>
                        <option value="Specialty Handling">Fine Art, Piano & Sculpture Transit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Property Scale
                      </label>
                      <select
                        value={formData.homeSize}
                        onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="1-2 Bedroom Luxury Condo">1-2 Bedroom Luxury Condo / Apartment</option>
                        <option value="3-4 Bedroom Estate">3-4 Bedroom Family Residence (3,000–5,000 sq ft)</option>
                        <option value="5+ Bedroom Sovereign Estate">5+ Bedroom Sovereign Estate (6,000+ sq ft)</option>
                        <option value="Commercial Office Facility">Commercial Office Facility</option>
                      </select>
                    </div>
                  </div>

                  {/* White-Glove Add-on Checkboxes */}
                  <div className="p-4 bg-[#FAF9F6] border border-slate-200 rounded-sm space-y-3">
                    <span className="text-[11px] uppercase font-mono tracking-widest text-gold font-bold block">
                      White-Glove Inclusions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <label className="flex items-center gap-2 text-slate-700 cursor-pointer font-medium">
                        <input
                          type="checkbox"
                          checked={formData.fineArtCrating}
                          onChange={(e) => setFormData({ ...formData, fineArtCrating: e.target.checked })}
                          className="rounded border-slate-300 text-gold focus:ring-0"
                        />
                        <span>Custom Fine Art Crating</span>
                      </label>

                      <label className="flex items-center gap-2 text-slate-700 cursor-pointer font-medium">
                        <input
                          type="checkbox"
                          checked={formData.valetUnpacking}
                          onChange={(e) => setFormData({ ...formData, valetUnpacking: e.target.checked })}
                          className="rounded border-slate-300 text-gold focus:ring-0"
                        />
                        <span>Valet Wardrobe Unpack</span>
                      </label>

                      <label className="flex items-center gap-2 text-slate-700 cursor-pointer font-medium">
                        <input
                          type="checkbox"
                          checked={formData.climateStorage}
                          onChange={(e) => setFormData({ ...formData, climateStorage: e.target.checked })}
                          className="rounded border-slate-300 text-gold focus:ring-0"
                        />
                        <span>Climate Vault Waypoint</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Specific Instructions or Access Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Service elevator reservations, gate access codes, steep driveways, or delicate high-value inventories..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 p-3.5 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Non-disclosure protocol guaranteed on all inquiries.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-glow-gold transition-all"
                    >
                      <span>Generate Preliminary Itinerary</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-gold" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                  ✓ Request Received • Dossier #NV-{Math.floor(100000 + Math.random() * 900000)}
                </span>
                <h3 className="text-3xl font-display font-bold text-slate-900 mt-2">
                  Our relocation specialist will contact you shortly.
                </h3>
                <p className="mt-2 text-slate-600 font-editorial text-lg max-w-lg mx-auto">
                  Thank you, {formData.fullName}. A Senior Relocation Coordinator at our {formData.originCity || 'Regional'} terminal has been alerted to review your itinerary.
                </p>

                {calculatedQuote && (
                  <div className="my-8 p-6 rounded-sm bg-[#FAF9F6] border border-slate-200 text-left max-w-md mx-auto shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4 text-xs">
                      <span className="text-slate-500 uppercase font-mono">Calculated Scope</span>
                      <span className="text-gold font-semibold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> All-Inclusive
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-display font-black text-slate-900">
                      ${calculatedQuote.min.toLocaleString()} – ${calculatedQuote.max.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Includes dedicated vehicle dispatch, full valuation replacement, and valet unboxing.
                    </p>
                  </div>
                )}

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-sm bg-slate-100 border border-slate-300 text-xs text-slate-800 uppercase tracking-widest hover:bg-slate-200 transition-colors font-semibold"
                  >
                    Configure Another Itinerary
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Corporate Directory & Offices */}
          <div className="lg:col-span-4 space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-md">
              <h4 className="text-xl font-display font-bold text-slate-900 mb-6">
                Executive Desk Contact
              </h4>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-500 uppercase font-mono text-[10px]">Toll-Free Dispatch</span>
                    <a href={`tel:${BRAND.phone}`} className="text-sm font-semibold text-slate-900 hover:text-gold">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-500 uppercase font-mono text-[10px]">Private Client Inquiries</span>
                    <a href={`mailto:${BRAND.email}`} className="text-sm font-semibold text-slate-900 hover:text-gold">
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-500 uppercase font-mono text-[10px]">Hours of Operation</span>
                    <span className="text-xs text-slate-900">Mon – Sun: 24/7 Dedicated Concierge</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-500 uppercase font-mono text-[10px]">Global Headquarters</span>
                    <span className="text-xs text-slate-900">{BRAND.headquarters}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Terminal Directory */}
            <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-md">
              <h4 className="text-xl font-display font-bold text-slate-900 mb-4">
                Flagship Terminals
              </h4>
              <div className="space-y-4 text-xs">
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Austin Terminal (HQ)</span>
                  <span className="text-slate-500">401 Congress Ave, Suite 2800</span>
                </div>
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">New York Terminal</span>
                  <span className="text-slate-500">590 Madison Ave, 21st Floor</span>
                </div>
                <div className="border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 block">Los Angeles Terminal</span>
                  <span className="text-slate-500">9601 Wilshire Blvd, Beverly Hills</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">European Liaison Office</span>
                  <span className="text-slate-500">1 Berkeley Street, Mayfair, London</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
