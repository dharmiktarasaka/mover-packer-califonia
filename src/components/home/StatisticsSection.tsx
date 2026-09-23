import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../../data/relocationData';

export const StatisticsSection = () => {
  const editorialStats = [
    { number: BRAND.metrics.yearsExperience, label: "Years of Heritage", note: "Continuous operations since 2009" },
    { number: BRAND.metrics.movesCompleted, label: "Estates & Residences", note: "Zero compromise relocations" },
    { number: BRAND.metrics.citiesCovered, label: "Metropolitan Hubs", note: "Domestic & global network" },
    { number: BRAND.metrics.onTimeRate, label: "On-Time Fulfillment", note: "Binding arrival guarantees" },
    { number: BRAND.metrics.totalPropertyMoved, label: "Valuation Relocated", note: "Underwritten Full Value Protection" },
  ];

  return (
    <section className="relative bg-white py-28 sm:py-36 border-t border-slate-200 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-xs uppercase tracking-grand text-gold font-semibold block mb-3">
              SCALE & ACCOUNTABILITY
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tightest leading-tight">
              Numbers that reflect <br />
              <span className="font-serif-editorial text-gold font-normal italic">
                uncompromising standards.
              </span>
            </h2>
          </div>
          <p className="text-slate-600 font-editorial text-lg max-w-md">
            Our track record is not measured merely in tonnage moved, but in the trust placed in us by discerning families and Fortune 500 leadership.
          </p>
        </div>

        {/* Editorial Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {editorialStats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="pt-8 lg:pt-0 lg:px-6 first:lg:pl-0 flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tightest leading-none mb-3">
                  {item.number}
                </div>
                <div className="text-sm font-display font-bold uppercase tracking-wider text-slate-700">
                  {item.label}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
                {item.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
