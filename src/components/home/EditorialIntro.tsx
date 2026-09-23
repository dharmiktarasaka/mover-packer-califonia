import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const EditorialIntro = () => {
  return (
    <section className="relative bg-white text-slate-800 py-24 sm:py-32 overflow-hidden border-b border-slate-200/80">
      {/* Background subtle architectural lines */}
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-grand text-gold font-bold">
                THE NORTHVAULT STANDARD
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tightest leading-[1.08]">
              Moving is personal. <br />
              <span className="font-serif-editorial text-gold font-normal italic">
                We treat it that way.
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Senior Specialist"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="Relocation Director"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                  alt="Operations Lead"
                />
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-900 block">Dedicated Move Directors</span>
                Every client assigned an executive concierge
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p>
              True relocation is not a logistics problem of weight and distance; it is a life transition of memories, irreplaceable heirlooms, and confidential property. Standard moving firms operate with anonymous subcontractors and rigid hourly clocks.
            </p>
            <p className="font-editorial text-xl sm:text-2xl text-slate-900 leading-relaxed italic border-l-2 border-gold pl-4">
              “We founded Northvault on an uncompromising premise: every residence deserves the care of an art conservator, the precision of an aerospace logistics firm, and the discretion of a private bank.”
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              Our teams do not merely load boxes into trucks. We engineer volumetric surveys, draft custom crate blueprints, synchronize multi-state building permits, and stage your destination down to the exact position of your family portraits.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-gold hover:text-gold-dark transition-colors"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Asymmetrical Cinematic Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
        >
          {/* Main Large Image */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-sm border border-slate-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80"
              alt="Northvault certified relocation specialists staging luxury residence"
              className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-mono">
                  Field Operations
                </span>
                <h4 className="text-lg sm:text-xl font-display font-bold text-white">
                  White-glove interior staging & bespoke surface protection
                </h4>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-white/80">
                AUSTIN HQ • CREW #04
              </span>
            </div>
          </div>

          {/* Secondary Layered Image */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-sm border border-slate-200 shadow-xl bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                <Compass className="w-5 h-5 text-gold" />
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-2">
                Guaranteed Windows. <br />No Co-Mingling.
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unlike common van lines that co-load goods from 4 different households into one trailer, every Northvault client receives a dedicated transport van assigned strictly to their project.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-gold font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Dedicated Vans
              </span>
              <span>GPS Telematics</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
