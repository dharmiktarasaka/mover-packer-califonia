import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Phone, Building2, Shield, CheckCircle2, ChevronRight } from 'lucide-react';
import { LOCATIONS, BRAND, SERVICES } from '../data/relocationData';
import { ChicagoLocationPage } from './ChicagoLocationPage';

interface LocationDetailPageProps {
  onOpenQuoteModal: (defaults?: { origin?: string }) => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { citySlug } = useParams<{ citySlug: string }>();

  // Specialized flagship experience for Chicago
  if (citySlug === 'chicago') {
    return <ChicagoLocationPage onOpenQuoteModal={onOpenQuoteModal} />;
  }

  const location = LOCATIONS.find((l) => l.slug === citySlug) || LOCATIONS[0];

  useEffect(() => {
    document.title = `${location.name} Luxury Relocation & Moving Services | Northvault`;
  }, [location]);

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-slate-200 flex items-center justify-between text-xs font-mono">
        <Link
          to="/locations"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Locations</span>
        </Link>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Locations</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gold font-semibold">{location.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-900/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-light font-bold block mb-3">
              {location.region.toUpperCase()} • FLAGSHIP TERMINAL
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tightest leading-[1.05] uppercase">
              {location.name} Moving Services
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-slate-200 font-editorial leading-relaxed">
              White-glove residential estate relocation, commercial enterprise transfers, and private vault storage in {location.name}, {location.state}.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal({ origin: `${location.name}, ${location.state}` })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-gold text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-lg transition-all"
              >
                <span>Request {location.name} Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-sm bg-white/10 border border-white/25 text-white text-xs uppercase tracking-widest hover:bg-white/20 transition-colors font-medium backdrop-blur-sm"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Local Terminal: {location.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Stats */}
      <section className="bg-white border-t border-b border-slate-200 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            <div>
              <span className="text-slate-500 uppercase font-mono font-bold block">Station Fleet</span>
              <span className="text-xl font-display font-bold text-slate-900 mt-0.5 block">{location.fleetSize}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase font-mono font-bold block">Vault Facility</span>
              <span className="text-xl font-display font-bold text-slate-900 mt-0.5 block">{location.vaultCapacity}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase font-mono font-bold block">Volume Handled</span>
              <span className="text-xl font-display font-bold text-gold mt-0.5 block">{location.movesCount}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase font-mono font-bold block">Standard Lead Time</span>
              <span className="text-xl font-display font-bold text-slate-900 mt-0.5 block">{location.leadTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services Offered */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-2">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
            Available Relocation Disciplines in {location.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm hover:border-gold/50 transition-colors">
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">Local Estate Moving</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Same-day white-glove relocation within {location.name} metropolitan enclaves with protective floor runners and valet unpacking.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm hover:border-gold/50 transition-colors">
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">Long-Distance & Interstate</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated non-stop air-ride van transit directly connecting {location.name} to major coastal and global destinations.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm hover:border-gold/50 transition-colors">
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">Archival Packing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Museum-grade paper, acid-free wrapping, custom-crafted timber boxes, and turnkey unboxing.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm hover:border-gold/50 transition-colors">
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">Biometric Vault Storage</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              68°F stabilized, 24/7 security monitored private vault storage units adjacent to the terminal.
            </p>
          </div>
        </div>
      </section>

      {/* Key Neighborhoods Served */}
      <section className="bg-white border-t border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-2">
                COVERAGE RADIUS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
                Premier {location.name} Communities Served
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Our moving crews are familiar with local building HOA restrictions, freight elevator scheduling, security gate clearances, and municipal parking permits across all premier neighborhoods.
              </p>
              <div className="flex flex-wrap gap-2">
                {location.keyAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-[#FAF9F6] border border-gold/30 px-3 py-1.5 rounded-sm text-xs font-semibold text-slate-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FAF9F6] border border-slate-200 p-8 rounded-sm shadow-xs">
              <h4 className="text-xl font-display font-bold text-slate-900 mb-4">Frequent Transit Corridors</h4>
              <div className="space-y-3">
                {location.popularRoutes.map((route, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-sm bg-white border border-slate-200 text-xs shadow-xs"
                  >
                    <span className="font-semibold text-slate-800">{route}</span>
                    <span className="text-gold font-mono font-bold">Dedicated Route</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
          Book your {location.name} moving consultation.
        </h3>
        <p className="text-slate-600 font-editorial text-lg max-w-md mx-auto mb-8">
          Speak with our local {location.name} Operations Director today.
        </p>
        <button
          onClick={() => onOpenQuoteModal({ origin: `${location.name}, ${location.state}` })}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-gold text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-gold-light shadow-md transition-all"
        >
          <span>Request Quote For {location.name}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
