import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6] border-b border-slate-200">
      {/* Cinematic Luminous Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
            alt="Northvault luxury relocation estate staging"
            className="w-full h-full object-cover object-center brightness-100 contrast-100"
          />
        </motion.div>

        {/* Luminous Light Overlays - Guarantees 100% crystal-clear contrast and visibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(250, 249, 246, 0.98) 0%, rgba(250, 249, 246, 0.95) 45%, rgba(250, 249, 246, 0.75) 70%, rgba(250, 249, 246, 0.35) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(250, 249, 246, 1) 0%, rgba(250, 249, 246, 0.6) 25%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(250, 249, 246, 0.9) 0%, transparent 25%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28 text-center sm:text-left flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white border border-slate-300 shadow-sm mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] sm:text-xs font-bold tracking-grand uppercase text-slate-900">
              PREMIUM RELOCATION SERVICES
            </span>
          </motion.div>

          {/* Huge Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tightest text-slate-950 leading-[1.03] uppercase"
          >
            Move <br className="hidden sm:inline" />
            Without <br />
            <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal pr-2">
              compromise.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-base sm:text-xl lg:text-2xl text-slate-800 font-editorial font-medium max-w-2xl leading-relaxed text-balance"
          >
            From carefully packed heirlooms to entire corporate relocations, we manage every detail with precision, protection and care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4"
          >
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gold text-slate-950 font-bold text-xs uppercase tracking-grand shadow-md hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-white border border-slate-300 text-slate-900 text-xs uppercase tracking-grand hover:border-gold hover:bg-slate-50 transition-all duration-300 shadow-sm font-bold"
            >
              <span>Explore Our Services</span>
            </Link>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-3 text-xs"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold tracking-wide text-slate-800">
              Trusted by 2,500+ families & international corporations
            </span>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-[10px] tracking-widest text-slate-600 uppercase font-semibold">
        <span>Scroll to Explore</span>
        <ChevronDown className="w-3.5 h-3.5 text-gold animate-bounce" />
      </div>
    </section>
  );
};
