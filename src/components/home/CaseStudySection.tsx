import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { CASE_STUDY } from '../../data/relocationData';

export const CaseStudySection = () => {
  return (
    <section className="relative bg-white py-28 sm:py-36 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-xs uppercase tracking-grand text-gold font-semibold">
                RECENT RELOCATION PROJECT
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tightest leading-[1.05]">
              Case Study: <br />
              <span className="font-serif-editorial text-gold font-normal italic">
                Austin to Manhattan
              </span>
            </h2>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-slate-900 transition-colors"
          >
            <span>Read Heritage & Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Architectural Case Study Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FAF9F6] border border-slate-200 rounded-sm overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left: Project Image */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px]">
            <img
              src={CASE_STUDY.image}
              alt={CASE_STUDY.title}
              className="w-full h-full object-cover contrast-105"
            />
            <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-gold/40 text-[11px] font-mono uppercase tracking-widest text-gold font-bold shadow-md">
              {CASE_STUDY.tag}
            </div>
          </div>

          {/* Right: Specifications & Metrics */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-mono mb-2">
                <MapPin className="w-4 h-4" />
                <span>{CASE_STUDY.route}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Executive Family Relocation
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {CASE_STUDY.summary}
              </p>

              {/* Architectural Grid Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 mb-6 text-xs">
                <div>
                  <span className="text-slate-500 uppercase font-mono block text-[10px]">Property</span>
                  <span className="font-semibold text-slate-900 mt-0.5 block">{CASE_STUDY.property}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase font-mono block text-[10px]">Transit Duration</span>
                  <span className="font-semibold text-gold mt-0.5 block">{CASE_STUDY.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase font-mono block text-[10px]">Distance</span>
                  <span className="font-semibold text-slate-900 mt-0.5 block">{CASE_STUDY.distance}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase font-mono block text-[10px]">High-Value Manifest</span>
                  <span className="font-semibold text-slate-700 mt-0.5 block">{CASE_STUDY.heirloomsMoved}</span>
                </div>
              </div>
            </div>

            {/* Outcome Strip */}
            <div className="pt-6 border-t border-slate-200 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{CASE_STUDY.outcome}</span>
              </div>

              <Link
                to="/services/residential-moving"
                className="inline-flex items-center justify-between px-5 py-3 rounded-sm bg-white border border-slate-300 text-slate-800 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors font-bold shadow-sm"
              >
                <span>View Full Relocation Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
