import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Calendar, MapPin, Star } from 'lucide-react';
import { BRAND } from '../../data/relocationData';

export const TrustStrip = () => {
  const stats = [
    {
      value: BRAND.metrics.movesCompleted,
      label: "Moves Completed",
      subtext: "Estates & Corporate",
      icon: Shield,
    },
    {
      value: BRAND.metrics.onTimeRate,
      label: "On-Time Delivery",
      subtext: "Guaranteed Window",
      icon: Clock,
    },
    {
      value: BRAND.metrics.yearsExperience,
      label: "Years Experience",
      subtext: "Since 2009",
      icon: Calendar,
    },
    {
      value: BRAND.metrics.citiesCovered,
      label: "Cities Covered",
      subtext: "Domestic & Global",
      icon: MapPin,
    },
    {
      value: BRAND.metrics.customerRating,
      label: "Customer Rating",
      subtext: "Over 1,400+ Reviews",
      icon: Star,
    },
  ];

  return (
    <section className="relative bg-white border-b border-slate-200/90 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 divide-y sm:divide-y-0 divide-slate-100">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="pt-6 sm:pt-0 flex flex-col items-start group"
              >
                <div className="w-9 h-9 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center mb-3 group-hover:border-gold/50 group-hover:bg-amber-50 transition-colors shadow-sm">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight group-hover:text-gold transition-colors">
                  {item.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
