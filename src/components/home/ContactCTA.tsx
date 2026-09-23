import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle, ShieldCheck, Mail, Calendar, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND, SERVICES } from '../../data/relocationData';

interface ContactCTAProps {
  onOpenQuoteModal?: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    movingFrom: '',
    movingTo: '',
    moveDate: '',
    moveType: 'Residential',
    homeSize: '3-4 Bedroom Estate',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D6A85F', '#F5F3EE', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section className="relative bg-[#FAF9F6] py-28 sm:py-36 border-t border-slate-200 overflow-hidden">
      {/* Background cinematic image with subtle light tint */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury relocation background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-[#FAF9F6]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Dramatic Headline Banner */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-grand text-gold font-semibold block mb-4">
            BEGIN YOUR CHAPTER
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black text-slate-900 tracking-tightest uppercase leading-[1.02]">
            Ready for a <br />
            <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal">
              smoother move?
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-2xl text-slate-600 font-editorial max-w-2xl mx-auto">
            Tell us where you're going. We'll handle everything in between.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-glow-gold transition-all"
            >
              <span>Start Your Move</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-white border border-slate-300 text-slate-800 text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-sm font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call {BRAND.phone}</span>
            </a>
          </div>
        </div>

        {/* Final In-Page Consultation & Quote Card */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-sm p-8 sm:p-14 shadow-xl">
          {!isSuccess ? (
            <div>
              <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                    Let's get you moving.
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 font-editorial">
                    Complete your relocation parameters for a confidential proposal within 4 business hours.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gold font-mono font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidential Data Handling</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling Harrison"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sterling@estate.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Moving From (Origin) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Austin, TX"
                      value={formData.movingFrom}
                      onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Moving To (Destination) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="New York, NY"
                      value={formData.movingTo}
                      onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Target Move Date
                    </label>
                    <input
                      type="date"
                      value={formData.moveDate}
                      onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-2.5 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Move Classification
                    </label>
                    <select
                      value={formData.moveType}
                      onChange={(e) => setFormData({ ...formData, moveType: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="Residential">Residential Relocation</option>
                      <option value="Commercial">Office & Corporate Campus</option>
                      <option value="International">International Relocation</option>
                      <option value="Storage">Vault Storage & Transit</option>
                      <option value="Specialty">Fine Art & Piano Special Handling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Estimated Home / Estate Size
                    </label>
                    <select
                      value={formData.homeSize}
                      onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="1-2 Bedroom Luxury Condo">1-2 Bedroom Luxury Apartment / Condo</option>
                      <option value="3-4 Bedroom Estate">3-4 Bedroom Family Residence</option>
                      <option value="5+ Bedroom Sovereign Estate">5+ Bedroom Sovereign Estate / Mansion</option>
                      <option value="Corporate Office">Commercial HQ / Office Facility</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                    Special Inquiries, Valuables or High-Value Items (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention fine art, temperature-sensitive wine collections, elevators, security gates or specific timeline constraints..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF9F6] border border-slate-300 p-3.5 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    *Your submission is bound by strict non-disclosure security protocols.
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-grand hover:bg-gold-light hover:shadow-glow-gold transition-all"
                  >
                    <span>Request My Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-gold" />
              </div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold font-mono">
                ✓ Request Received
              </span>
              <h3 className="text-3xl font-display font-bold text-slate-900 mt-2">
                Our relocation specialist will contact you shortly.
              </h3>
              <p className="mt-3 text-slate-600 font-editorial text-lg max-w-lg mx-auto">
                Thank you for contacting Northvault Relocation. A dedicated Senior Move Coordinator has been assigned to your itinerary.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 rounded-sm bg-slate-100 border border-slate-300 text-xs text-slate-800 uppercase tracking-widest hover:bg-slate-200 transition-colors font-semibold"
                >
                  Submit Another Itinerary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
