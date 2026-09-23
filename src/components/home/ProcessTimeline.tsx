import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/relocationData';

export const ProcessTimeline = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section className="relative bg-white py-28 sm:py-36 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-grand text-gold font-bold">
              OUR PROTOCOL
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tightest leading-[1.05]">
            A better way <br />
            <span className="font-serif-editorial text-gold font-normal italic">
              to move.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-editorial">
            Engineered across five synchronized phases to guarantee zero disruption, absolute confidentiality, and complete peace of mind.
          </p>
        </div>

        {/* Desktop: Horizontal Interactive Timeline */}
        <div className="hidden lg:block">
          {/* Step Selector Ribbon */}
          <div className="relative flex items-center justify-between border-b border-slate-200 pb-8 mb-12">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-start text-left group focus:outline-none relative"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`font-mono text-xs uppercase tracking-widest px-2 py-0.5 rounded-sm transition-all duration-300 font-bold ${
                        isActive
                          ? 'bg-gold text-white shadow-md'
                          : isPast
                          ? 'bg-amber-50 text-gold border border-gold/40'
                          : 'bg-slate-100 text-slate-500 border border-slate-200 group-hover:text-slate-800'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-wider font-bold transition-colors ${
                        isActive ? 'text-gold' : 'text-slate-500 group-hover:text-slate-900'
                      }`}
                    >
                      {step.phase}
                    </span>
                  </div>

                  <span
                    className={`text-sm font-display font-semibold transition-colors ${
                      isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-700'
                    }`}
                  >
                    {step.title}
                  </span>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelineBar"
                      className="absolute -bottom-[33px] left-0 right-0 h-[2px] bg-gold"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card (Light Mode) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FAF9F6] border border-slate-200/90 rounded-sm p-10 shadow-xl grid grid-cols-12 gap-8 items-center"
            >
              <div className="col-span-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold mb-2 font-mono font-bold">
                  <span>Phase {activeStep.step}</span>
                  <span>•</span>
                  <span>{activeStep.subtitle}</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
                  {activeStep.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal mb-8">
                  {activeStep.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                  {activeStep.detailList.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-5 bg-white border border-slate-200 p-6 rounded-sm flex flex-col justify-between h-full shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                    <span className="uppercase tracking-wider font-semibold">Operational Assurance</span>
                    <span className="text-gold font-mono font-bold">100% Certified</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Every aspect of Phase {activeStep.step} is documented digitally and certified by your on-site Move Director before transition to the next phase.
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-dark"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400">
                    Step {activeStepIndex + 1} of {PROCESS_STEPS.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#FAF9F6] border border-slate-200 p-6 rounded-sm shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-gold bg-amber-50 border border-gold/30 px-2 py-0.5 rounded-sm font-bold">
                  {step.step} • {step.phase}
                </span>
                <span className="text-xs text-slate-500">{step.subtitle}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="space-y-2 pt-3 border-t border-slate-200">
                {step.detailList.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
