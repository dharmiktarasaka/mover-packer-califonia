import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Clock, Award, Phone, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES, BRAND, PROCESS_STEPS, FAQS } from '../data/relocationData';

interface ServiceDetailPageProps {
  onOpenQuoteModal: (defaults?: { service?: string }) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = SERVICES.find((s) => s.id === slug) || SERVICES[0];

  useEffect(() => {
    document.title = `${service.title} | Northvault Relocation`;
  }, [service]);

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-slate-200 flex items-center justify-between text-xs font-mono">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Services</span>
        </Link>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Services</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gold font-semibold">{service.title}</span>
        </div>
      </div>

      {/* Cinematic Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={service.detailHeroImage || service.image}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-900/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-light font-bold block mb-3">
              SERVICE {service.number} • {service.shortTitle}
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tightest leading-[1.05] uppercase">
              {service.title}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-slate-200 font-editorial leading-relaxed">
              “{service.tagline}”
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal({ service: service.id })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-gold text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-lg transition-all"
              >
                <span>Request {service.shortTitle} Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-sm bg-white/10 border border-white/25 text-white text-xs uppercase tracking-widest hover:bg-white/20 transition-colors font-medium backdrop-blur-sm"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Specialist ({BRAND.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Stats Grid */}
      <section className="bg-white border-t border-b border-slate-200 py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                Crew Protocol
              </span>
              <span className="text-2xl font-display font-bold text-slate-900 mt-1">
                {service.stats.avgCrew}
              </span>
              <span className="text-xs text-slate-600 mt-0.5">Uniformed & certified specialists</span>
            </div>

            <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                Transport Class
              </span>
              <span className="text-2xl font-display font-bold text-slate-900 mt-1">
                {service.stats.transitType}
              </span>
              <span className="text-xs text-slate-600 mt-0.5">Pneumatic air-suspension telemetry</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
                Underwritten Coverage
              </span>
              <span className="text-2xl font-display font-bold text-gold mt-1">
                {service.stats.insurance}
              </span>
              <span className="text-xs text-slate-600 mt-0.5">Full stated replacement value</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers / Capacity Scale */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-2">
            DEPLOYMENT TIERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
            Available Service Scales
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-gold/60 hover:shadow-lg transition-all shadow-sm"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                  TIER 0{idx + 1}
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 mt-1 mb-2">
                  {tier.name}
                </h3>
                <div className="space-y-3 py-4 border-t border-b border-slate-200 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Property Scope:</span>
                    <span className="text-slate-900 font-semibold">{tier.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Ideal For:</span>
                    <span className="text-slate-700">{tier.idealFor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Standard Window:</span>
                    <span className="text-gold font-mono font-bold">{tier.duration}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal({ service: service.id })}
                className="mt-6 w-full py-3 rounded-sm bg-slate-50 border border-slate-200 text-xs text-slate-800 uppercase tracking-widest font-bold hover:bg-gold hover:text-slate-950 hover:border-gold transition-all"
              >
                Inquire For This Tier
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included Checklist */}
      <section className="bg-white border-t border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-2">
                WHAT'S INCLUDED
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
                The All-Inclusive Guarantee
              </h2>
              <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                When you engage Northvault, our quotes are binding and comprehensive. You will never encounter unexpected fuel surcharges, stair fees, or overtime line items.
              </p>
              <div className="p-4 bg-[#FAF9F6] border border-gold/40 rounded-sm text-xs text-slate-700 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-medium">Binding Price Guarantee backed by written executive agreement.</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-[#FAF9F6] border border-slate-200 p-5 rounded-sm flex items-start gap-3 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
              <div className="bg-[#FAF9F6] border border-slate-200 p-5 rounded-sm flex items-start gap-3 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  24/7 Concierge Hotline & Satellite GPS Live Tracking
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific Process Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-2">
            EXECUTION TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
            How Your {service.shortTitle} Unfolds
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-slate-200 p-5 rounded-sm shadow-sm hover:border-gold/50 transition-colors"
            >
              <span className="font-mono text-xs text-gold font-bold block mb-1">
                {step.step} • {step.phase}
              </span>
              <h4 className="text-base font-display font-bold text-slate-900 mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next/Prev Service Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <Link
            to="/services"
            className="text-xs uppercase tracking-widest text-slate-600 hover:text-slate-900 font-bold transition-colors"
          >
            ← Back to All Services
          </Link>
          <button
            onClick={() => onOpenQuoteModal({ service: service.id })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gold text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-sm"
          >
            <span>Inquire About {service.shortTitle}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
