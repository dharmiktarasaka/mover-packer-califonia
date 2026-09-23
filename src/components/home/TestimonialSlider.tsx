import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../../data/relocationData';

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#FAF9F6] py-28 sm:py-36 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-grand text-gold font-semibold">
              CLIENT TESTIMONIALS
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-sm bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:text-gold hover:border-gold transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-sm bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:text-gold hover:border-gold transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Left: Client Portrait & Details */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-full h-[400px] sm:h-[460px] object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">
                      Verified Client
                    </span>
                    <h4 className="text-xl font-display font-bold text-white">
                      {current.author}
                    </h4>
                    <p className="text-xs text-white/80 mt-0.5">{current.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Giant Editorial Quote */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                  <span className="text-xs uppercase tracking-wider text-slate-500 ml-2 font-mono">
                    5.0 / 5.0 Sovereign Rating
                  </span>
                </div>

                <Quote className="w-12 h-12 text-gold/30 mb-4" />

                <blockquote className="text-2xl sm:text-4xl lg:text-4xl font-editorial text-slate-900 leading-snug italic font-normal">
                  “{current.quote}”
                </blockquote>
              </div>

              {/* Move Route Metadata Strip */}
              <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-slate-900 font-semibold">{current.route}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Scope:</span>
                  <span className="text-gold uppercase tracking-wider font-semibold">{current.homeType}</span>
                </div>
                <div>
                  <span className="text-slate-400">Story {currentIndex + 1} of {TESTIMONIALS.length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
