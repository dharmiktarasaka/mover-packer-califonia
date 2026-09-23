import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, ShieldCheck, MapPin, Building, Home, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FloatingQuoteCardProps {
  onDetailedQuoteRequested?: (data: { from: string; to: string; type: string }) => void;
}

export const FloatingQuoteCard: React.FC<FloatingQuoteCardProps> = ({ onDetailedQuoteRequested }) => {
  const [fromLocation, setFromLocation] = useState('Austin, TX');
  const [toLocation, setToLocation] = useState('New York, NY');
  const [moveType, setMoveType] = useState('Residential');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatedEstimate, setCalculatedEstimate] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate instant estimate calculation based on type
    let range = '$5,800 – $8,400';
    if (moveType === 'Commercial') range = '$12,500 – $18,000';
    if (moveType === 'International') range = '$14,200 – $22,500';

    setCalculatedEstimate(range);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#B88A45', '#0F172A', '#64748B'],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCalculatedEstimate(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-16 sm:-mt-24 lg:-mt-20">
      <div className="bg-white border border-slate-200/90 rounded-sm p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-gold/60 hover:shadow-2xl">
        {!isSubmitted ? (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                  Planning a move?
                </h3>
                <span className="hidden md:inline text-xs text-gold font-mono tracking-widest uppercase border border-gold/30 px-2 py-0.5 rounded-sm font-semibold">
                  Instant Calculator
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Zero obligation • Direct Air-Ride Guarantee</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              {/* Origin */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>From (Origin)</span>
                </label>
                <input
                  type="text"
                  required
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="City, State or Zip"
                  className="w-full bg-[#FAF9F6] border border-slate-200 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>To (Destination)</span>
                </label>
                <input
                  type="text"
                  required
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="City, State or Country"
                  className="w-full bg-[#FAF9F6] border border-slate-200 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              {/* Move Type */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1.5 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-gold" />
                  <span>Move Type</span>
                </label>
                <select
                  value={moveType}
                  onChange={(e) => setMoveType(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-slate-200 px-3 py-3 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                >
                  <option value="Residential">Residential Relocation</option>
                  <option value="Commercial">Office & Headquarters</option>
                  <option value="International">International Intermodal</option>
                </select>
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  className="w-full h-[46px] rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:bg-gold-light hover:shadow-glow-gold transition-all duration-300"
                >
                  <span>Get Estimated Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-2 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-gold font-semibold font-mono">
                      Route Calculated
                    </span>
                    <span className="text-xs text-slate-500">• {fromLocation} to {toLocation}</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 mt-0.5">
                    Perfect. Your move starts here.
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Preliminary estimate: <strong className="text-gold font-mono text-sm">{calculatedEstimate}</strong> (all-inclusive white-glove tier).
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={() => onDetailedQuoteRequested && onDetailedQuoteRequested({ from: fromLocation, to: toLocation, type: moveType })}
                  className="flex-1 md:flex-none px-6 py-3 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-all flex items-center justify-center gap-2"
                >
                  <span>Finalize Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleReset}
                  className="px-4 py-3 rounded-sm bg-slate-100 border border-slate-200 text-xs text-slate-600 hover:text-slate-900 uppercase tracking-wider"
                >
                  Adjust
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
