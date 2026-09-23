import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, Check, Sparkles, Box, Truck, Compass, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES, BRAND } from '../data/relocationData';

interface ServicesPageProps {
  onOpenQuoteModal: (defaults?: { service?: string }) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    document.title = "Relocation Services Portfolio | Northvault Relocation";
  }, []);

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Services Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white border border-slate-200 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-[11px] font-semibold tracking-grand uppercase text-slate-800">
                SERVICE PORTFOLIO
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tightest leading-[1.05] uppercase">
              Bespoke Relocation <br />
              <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal">
                without compromise.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-editorial leading-relaxed">
              From historic country estates and high-rise penthouses to intercontinental diplomatic mobility and enterprise corporate relocations. Every engagement is executed with tailored precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[360px] sm:h-[460px] object-cover filter contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-sm border border-gold/40 text-xs font-mono font-bold text-gold">
                    SERVICE {service.number}
                  </div>
                </div>
              </div>

              {/* Text Information side */}
              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold">
                  {service.tagline}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mt-1 mb-4">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white border border-slate-300 text-slate-800 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all font-bold shadow-sm"
                  >
                    <span>View Specifications & Tiers</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => onOpenQuoteModal({ service: service.id })}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gold text-white text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all shadow-glow-gold"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* White-Glove Standards Matrix */}
      <section className="bg-white border-t border-b border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-grand text-gold font-semibold block mb-2">
              EXCELLENCE AT SCALE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
              The White-Glove Guarantee
            </h2>
            <p className="mt-3 text-slate-600 font-editorial text-base">
              Standard van lines versus the Northvault Relocation standard.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase font-mono tracking-widest text-slate-600 bg-slate-100">
                  <th className="py-4 px-6">Criteria</th>
                  <th className="py-4 px-6 text-slate-500">Standard Moving Companies</th>
                  <th className="py-4 px-6 text-gold font-bold bg-amber-50/60 border-l border-r border-amber-200">
                    Northvault Relocation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Cargo Protection & Valuation</td>
                  <td className="py-4 px-6 text-slate-500">Statutory 60¢ / pound liability</td>
                  <td className="py-4 px-6 text-slate-800 font-medium bg-amber-50/40 border-l border-r border-amber-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" /> Full Replacement Value up to $20M+
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Fleet Transit Type</td>
                  <td className="py-4 px-6 text-slate-500">Co-mingled freight (multiple families per trailer)</td>
                  <td className="py-4 px-6 text-slate-800 font-medium bg-amber-50/40 border-l border-r border-amber-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" /> 100% Dedicated Air-Ride Van (No Co-Loading)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Packing Materials</td>
                  <td className="py-4 px-6 text-slate-500">Standard recycled cardboard & newsprint</td>
                  <td className="py-4 px-6 text-slate-800 font-medium bg-amber-50/40 border-l border-r border-amber-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" /> Museum Archival Paper, Velvet & Custom Timber Crates
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Turnkey Valet Unpack</td>
                  <td className="py-4 px-6 text-slate-500">Drop off boxes in general rooms only</td>
                  <td className="py-4 px-6 text-slate-800 font-medium bg-amber-50/40 border-l border-r border-amber-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" /> Wardrobe valet, kitchen placement, zero debris left
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Delivery Window</td>
                  <td className="py-4 px-6 text-slate-500">Vague 7 to 14 day arrival window</td>
                  <td className="py-4 px-6 text-slate-800 font-medium bg-amber-50/40 border-l border-r border-amber-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" /> Exact Day & Hour Guaranteed Appointment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
          Ready to engineer your relocation?
        </h3>
        <p className="text-slate-600 font-editorial text-lg max-w-xl mx-auto mb-8">
          Speak with a Senior Relocation Director today for a confidential assessment.
        </p>
        <button
          onClick={() => onOpenQuoteModal()}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-glow-gold transition-all"
        >
          <span>Request Custom Relocation Itinerary</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
