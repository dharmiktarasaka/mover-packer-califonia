import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedBanner = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#FAF9F6] overflow-hidden border-t border-b border-slate-200">
      {/* Background Luminous Editorial Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury architectural interior transition"
          className="w-full h-full object-cover object-center brightness-100 contrast-100"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(250, 249, 246, 0.98) 0%, rgba(250, 249, 246, 0.94) 50%, rgba(250, 249, 246, 0.7) 75%, rgba(250, 249, 246, 0.35) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(250, 249, 246, 1) 0%, rgba(250, 249, 246, 0.5) 25%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-semibold tracking-grand uppercase text-gold">
              THE WHITE-GLOVE DISTINCTION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tightest leading-[1.05] uppercase"
          >
            We Move <br />
            More Than <br />
            <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal">
              boxes.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-slate-700 font-editorial font-normal leading-relaxed"
          >
            White-glove moving service for homes, businesses and everything in between. Full valet unpack, custom crating of museum antiquities, and single-source accountability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 grid grid-cols-2 gap-4 text-xs text-slate-700 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Full Wardrobe Valet Staging</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Air-Ride Pneumatic Vans</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Custom Art & Wine Crating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Zero Debris Left Behind</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <Link
              to="/services/residential-moving"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-grand hover:bg-gold-light hover:shadow-glow-gold transition-all duration-300"
            >
              <span className="text-white">Explore White-Glove Moving</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
