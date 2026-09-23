import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, ArrowUpRight, ShieldCheck, CheckCircle2, Building } from 'lucide-react';
import { LOCATIONS } from '../../data/relocationData';

// Normalized coordinates for stylized US map canvas (percentages)
const mapPins = [
  { slug: 'austin', name: 'Austin', state: 'Texas', x: 50, y: 76, moves: '680+ moves', fleet: '28 Dedicated Vans', status: 'Primary HQ' },
  { slug: 'dallas', name: 'Dallas', state: 'Texas', x: 52, y: 69, moves: '430+ moves', fleet: '18 Dedicated Vans', status: 'Active Hub' },
  { slug: 'houston', name: 'Houston', state: 'Texas', x: 54, y: 80, moves: '380+ moves', fleet: '16 Dedicated Vans', status: 'Active Hub' },
  { slug: 'new-york', name: 'New York', state: 'New York', x: 86, y: 32, moves: '940+ moves', fleet: '32 Dedicated Vans', status: 'Major Hub' },
  { slug: 'los-angeles', name: 'Los Angeles', state: 'California', x: 14, y: 58, moves: '710+ moves', fleet: '26 Dedicated Vans', status: 'West Coast HQ' },
  { slug: 'miami', name: 'Miami', state: 'Florida', x: 82, y: 86, moves: '520+ moves', fleet: '22 Dedicated Vans', status: 'Active Hub' },
  { slug: 'chicago', name: 'Chicago', state: 'Illinois', x: 65, y: 37, moves: '490+ moves', fleet: '20 Dedicated Vans', status: 'Midwest Hub' },
  { slug: 'denver', name: 'Denver', state: 'Colorado', x: 38, y: 46, moves: '340+ moves', fleet: '15 Dedicated Vans', status: 'Mountain Hub' },
  { slug: 'seattle', name: 'Seattle', state: 'Washington', x: 16, y: 16, moves: '310+ moves', fleet: '14 Dedicated Vans', status: 'Pacific Northwest' },
  { slug: 'phoenix', name: 'Phoenix', state: 'Arizona', x: 25, y: 62, moves: '290+ moves', fleet: '14 Dedicated Vans', status: 'Southwest Hub' },
];

export const InteractiveCoverageMap = () => {
  const [activePin, setActivePin] = useState(mapPins[0]);

  return (
    <section className="relative bg-[#FAF9F6] py-28 sm:py-36 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-grand text-gold font-semibold">
                DOMESTIC & GLOBAL NETWORK
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tightest leading-[1.05]">
              Wherever life <br />
              <span className="font-serif-editorial text-gold font-normal italic">
                takes you.
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Proprietary terminal infrastructure spanning 50+ metropolitan zones. Direct dedicated air-ride dispatch without intermediate logistics hubs.
            </p>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 mt-3 text-xs font-semibold uppercase tracking-widest text-gold hover:text-slate-900 transition-colors"
            >
              <span>Explore All 10 Metropolitan Hubs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Abstract Stylized Geographic Visualizer & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Stylized Map Surface */}
          <div className="lg:col-span-8 relative bg-white border border-slate-200 rounded-sm p-6 sm:p-10 min-h-[440px] sm:min-h-[520px] flex items-center justify-center overflow-hidden shadow-sm">
            {/* Architectural Grid & Continental Silhouette SVG */}
            <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

            {/* Stylized Vector US Outline (Abstract Architectural Aesthetics) */}
            <svg
              className="w-full h-full max-h-[460px] opacity-40"
              viewBox="0 0 1000 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Abstract land polygon */}
              <path
                d="M130 110L230 115L310 130L440 120L580 135L710 125L840 190L890 270L860 360L830 460L800 520L730 470L630 430L510 510L420 460L330 430L220 400L140 330L110 210Z"
                stroke="#B88A45"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              {/* Internal flight & transit vector routes */}
              <line x1="500" y1="460" x2="860" y2="200" stroke="#B88A45" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="140" y1="350" x2="500" y2="460" stroke="#B88A45" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="650" y1="220" x2="820" y2="520" stroke="#B88A45" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="160" y1="100" x2="380" y2="280" stroke="#B88A45" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
            </svg>

            {/* Interactive Pins */}
            {mapPins.map((pin) => {
              const isSelected = activePin.slug === pin.slug;

              return (
                <div
                  key={pin.slug}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <button
                    onClick={() => setActivePin(pin)}
                    onMouseEnter={() => setActivePin(pin)}
                    className="relative focus:outline-none"
                    aria-label={`Select ${pin.name}`}
                  >
                    {/* Pulsing ring on hover/active */}
                    <span
                      className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-gold/30 animate-ping'
                          : 'group-hover:bg-gold/20'
                      }`}
                    />

                    {/* Core Pin Dot */}
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-gold border-slate-900 scale-125 shadow-glow-gold'
                          : 'bg-white border-gold group-hover:scale-110 shadow-sm'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    </div>

                    {/* Label Tag */}
                    <span
                      className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-sm border transition-all shadow-sm ${
                        isSelected
                          ? 'bg-gold text-white border-gold'
                          : 'bg-white text-slate-700 border-slate-200 group-hover:text-slate-900 group-hover:border-slate-300'
                      }`}
                    >
                      {pin.name}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Hub Telemetry Detail Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-lg h-full">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                    Terminal Operational Status
                  </span>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                    {activePin.name}, {activePin.state}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 uppercase font-mono text-[10px]">Classification</span>
                  <span className="font-semibold text-gold">{activePin.status}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 uppercase font-mono text-[10px]">Fleet Capacity</span>
                  <span className="font-semibold text-slate-900">{activePin.fleet}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 uppercase font-mono text-[10px]">Historical Volume</span>
                  <span className="font-semibold text-slate-900">{activePin.moves}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 uppercase font-mono text-[10px]">Dispatch Readiness</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Immediate
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <Link
                to={`/locations/${activePin.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-sm"
              >
                <span>View {activePin.name} Hub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
