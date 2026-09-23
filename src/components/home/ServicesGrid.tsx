import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Home, Building2, Globe2, Package, Archive, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../data/relocationData';

const iconMap = {
  'residential-moving': Home,
  'commercial-moving': Building2,
  'international-moving': Globe2,
  'packing': Package,
  'storage-solutions': Archive,
  'specialty-moving': Sparkles,
};

export const ServicesGrid = () => {
  return (
    <section className="relative bg-[#FAF9F6] py-28 sm:py-36 border-t border-slate-200/80 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-grand text-gold font-bold">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tightest leading-[1.05]">
              Everything handled. <br />
              <span className="font-serif-editorial text-gold font-normal italic">
                Nothing overlooked.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Every relocation demands a tailored operational protocol. We adapt our equipment, crating, and security procedures to the exact nuances of your inventory.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest text-gold hover:text-slate-900 transition-colors"
            >
              <span>Explore Full Service Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6 Luxury Service Cards Grid (Light Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id as keyof typeof iconMap] || Home;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between bg-white border border-slate-200/90 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-xl"
              >
                {/* Image Container with subtle zoom */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover brightness-95 contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Top Bar with Number & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm border border-slate-200 font-bold shadow-sm">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-sm bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Features list mini */}
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link & Bottom Accent Line */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-800 group-hover:text-gold transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Animated Gold Bottom Border Reveal */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
