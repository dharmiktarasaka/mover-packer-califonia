import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS } from '../../data/relocationData';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-white py-28 sm:py-36 border-t border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 border border-slate-200 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-semibold tracking-grand uppercase text-slate-800">
              CLIENT INQUIRIES
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tightest leading-[1.08]">
            Frequently Asked <br />
            <span className="font-serif-editorial text-gold font-normal italic">
              Questions.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600 font-editorial">
            Everything you need to know about our white-glove protocols, insurance thresholds, and dedicated scheduling.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-sm bg-[#FAF9F6] transition-colors hover:border-gold/60 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-semibold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-gold text-white' : 'bg-white text-gold border border-slate-300'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs text-slate-600">
          Have an unlisted requirement or complex international routing?{' '}
          <Link to="/contact" className="text-gold font-semibold hover:underline inline-flex items-center gap-1">
            Consult our Senior Operations Concierge <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
