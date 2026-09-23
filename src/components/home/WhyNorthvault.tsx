import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Navigation, Lock, UserCheck, HeartHandshake } from 'lucide-react';
import { WHY_NORTHVAULT } from '../../data/relocationData';

const featureIcons = [
  UserCheck,
  Sparkles,
  Navigation,
  Lock,
  HeartHandshake,
  Shield,
];

export const WhyNorthvault = () => {
  return (
    <section className="relative bg-white py-28 sm:py-36 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-grand text-gold font-bold">
              THE NORTHVAULT ADVANTAGE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tightest leading-[1.05]">
            Precision behind <br />
            <span className="font-serif-editorial text-gold font-normal italic">
              every move.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-editorial">
            Six non-negotiable operational pillars that separate ordinary movers from an international luxury relocation firm.
          </p>
        </div>

        {/* 6 Grid Cards (Light Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_NORTHVAULT.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length];

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-[#FAF9F6] border border-slate-200/90 rounded-sm p-8 transition-all duration-300 hover:border-gold/60 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-amber-50 transition-colors shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold font-bold">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-[11px] text-slate-400 uppercase tracking-widest font-mono">
                  <span>Standard 0{index + 1}</span>
                  <span>• Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
