import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Calendar, MapPin, Home } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND, SERVICES } from '../../data/relocationData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultOrigin?: string;
  defaultDestination?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'residential-moving',
  defaultOrigin = '',
  defaultDestination = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    originCity: defaultOrigin || 'Austin, TX',
    destinationCity: defaultDestination || 'New York, NY',
    serviceType: defaultService,
    homeSize: '3-4 Bedroom Estate',
    estimatedDate: '2026-11-15',
    specialNotes: '',
    hasArtworkOrPiano: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [estimatedRange, setEstimatedRange] = useState({ min: 6800, max: 9400 });

  if (!isOpen) return null;

  const calculateEstimate = (homeSize: string, service: string) => {
    let base = 5000;
    if (homeSize.includes('1-2')) base = 3500;
    if (homeSize.includes('3-4')) base = 6800;
    if (homeSize.includes('5+')) base = 12500;
    if (homeSize.includes('Corporate')) base = 15000;

    if (service === 'international-moving') base *= 2.2;
    if (service === 'specialty-moving') base *= 1.4;

    return {
      min: Math.round(base),
      max: Math.round(base * 1.35),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculated = calculateEstimate(formData.homeSize, formData.serviceType);
    setEstimatedRange(calculated);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D6A85F', '#F5F3EE', '#FFFFFF', '#172033'],
      });
    } catch {
      // safe fallback if confetti unavailable
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Light-friendly backdrop blur */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-sm shadow-2xl p-6 sm:p-10 z-10 my-8 text-slate-800">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-gold transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest text-gold font-bold">
                Northvault Priority Relocation Desk
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
              Request Your Bespoke Quote
            </h3>
            <p className="mt-1 text-sm text-slate-600 font-editorial text-lg">
              Receive a binding consultation and itinerary from a dedicated Senior Move Coordinator.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 mb-1.5 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Victoria Sterling"
                    className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-2.5 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 mb-1.5 font-semibold">
                    Corporate / Private Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="victoria@sterling.com"
                    className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-2.5 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 mb-1.5 font-semibold">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-2.5 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 mb-1.5 font-semibold">
                    Origin City / State
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.originCity}
                    onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                    placeholder="Austin, TX"
                    className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-2.5 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 mb-1.5 font-semibold">
                    Destination City / State
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destinationCity}
                    onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                    placeholder="New York, NY"
                    className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-2.5 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 mb-1.5 font-semibold">
                    Service Class
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-slate-300 px-3 py-2.5 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 mb-1.5 font-semibold">
                    Property Scale
                  </label>
                  <select
                    value={formData.homeSize}
                    onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-slate-300 px-3 py-2.5 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none"
                  >
                    <option value="1-2 Bedroom Luxury Condo">1-2 Bedroom Luxury Condo</option>
                    <option value="3-4 Bedroom Estate">3-4 Bedroom Estate</option>
                    <option value="5+ Bedroom Sovereign Estate">5+ Bedroom Sovereign Estate</option>
                    <option value="Corporate Office Campus">Corporate Office / Headquarters</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 mb-1.5 font-semibold">
                    Target Date
                  </label>
                  <input
                    type="date"
                    value={formData.estimatedDate}
                    onChange={(e) => setFormData({ ...formData, estimatedDate: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-slate-300 px-3 py-2.5 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="artworkCheckbox"
                  checked={formData.hasArtworkOrPiano}
                  onChange={(e) => setFormData({ ...formData, hasArtworkOrPiano: e.target.checked })}
                  className="rounded border-slate-300 text-gold focus:ring-0"
                />
                <label htmlFor="artworkCheckbox" className="text-xs text-slate-700 cursor-pointer font-medium">
                  Includes high-value fine art, wine collection, or musical instruments (requires custom timber crating)
                </label>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Confidential. Full Value Cargo Protection Guaranteed.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-glow-gold transition-all"
                >
                  <span>Generate Estimated Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-gold" />
            </div>

            <span className="text-xs uppercase tracking-widest text-gold font-semibold font-mono">
              Quote Request Confirmed • ID #NV-{Math.floor(100000 + Math.random() * 900000)}
            </span>
            <h3 className="text-3xl font-display font-bold text-slate-900 mt-2">
              Perfect. Your move starts here.
            </h3>
            <p className="mt-2 text-slate-600 font-editorial text-lg max-w-md mx-auto">
              Thank you, {formData.fullName || 'Valued Client'}. A Senior Relocation Coordinator has been assigned to your itinerary.
            </p>

            {/* Estimated Quote Card */}
            <div className="my-8 p-6 rounded-sm bg-[#FAF9F6] border border-slate-200 text-left max-w-lg mx-auto shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">
                  Preliminary Range
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gold font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Binding White-Glove Tier</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-display font-black text-slate-900">
                    ${estimatedRange.min.toLocaleString()} – ${estimatedRange.max.toLocaleString()}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    *Includes dedicated air-ride transport, archival materials & full valuation coverage.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div>
                  <span className="text-slate-500 block">Route:</span>
                  <span className="font-semibold text-slate-900">{formData.originCity} → {formData.destinationCity}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Property Scale:</span>
                  <span className="font-semibold text-slate-900">{formData.homeSize}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-sm bg-slate-100 border border-slate-300 text-slate-800 text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors font-semibold"
              >
                Close Window
              </button>
              <a
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-sm"
              >
                <span>Call Concierge Now ({BRAND.phone})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
