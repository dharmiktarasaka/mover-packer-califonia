import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Package, Truck, Archive, Key, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { MOVE_JOURNEY_STAGES } from '../../data/relocationData';

const stageIcons = {
  home: Home,
  packing: Package,
  transport: Truck,
  storage: Archive,
  'new-home': Key,
};

export const MoveJourneyVisualizer = () => {
  const [activeStageId, setActiveStageId] = useState('home');
  const activeStage = MOVE_JOURNEY_STAGES.find((s) => s.id === activeStageId) || MOVE_JOURNEY_STAGES[0];

  return (
    <section className="relative bg-[#FAF9F6] py-28 sm:py-36 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-[11px] font-semibold tracking-grand uppercase text-gold font-mono">
              THE NORTHVAULT JOURNEY
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tightest leading-[1.05]">
            From first box <br className="hidden sm:inline" />
            <span className="font-serif-editorial text-gold font-normal italic">
              to final destination.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-editorial">
            Follow the journey of your residence. Click each waypoint along our operational corridor.
          </p>
        </div>

        {/* Visual Waypoint Nodes Bar */}
        <div className="relative mb-16">
          {/* Connector Line behind nodes */}
          <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-slate-200 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
            {MOVE_JOURNEY_STAGES.map((stage) => {
              const Icon = stageIcons[stage.id as keyof typeof stageIcons] || Home;
              const isSelected = stage.id === activeStageId;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex flex-col items-center text-center p-4 rounded-sm transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'bg-white border-2 border-gold shadow-lg scale-105'
                      : 'bg-white/80 border border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                      isSelected
                        ? 'bg-gold text-white font-bold shadow-md'
                        : 'bg-slate-100 text-gold border border-gold/30'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1">
                    Stage {stage.stageNumber}
                  </span>
                  <span
                    className={`text-xs font-display font-bold uppercase tracking-wider ${
                      isSelected ? 'text-slate-900' : 'text-slate-600'
                    }`}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Interactive Showcase (Light Mode) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/90 rounded-sm p-6 sm:p-10 shadow-xl"
          >
            {/* Left Image */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-sm border border-slate-200 h-[280px] sm:h-[380px]">
              <img
                src={activeStage.image}
                alt={activeStage.title}
                className="w-full h-full object-cover brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-gold font-bold">STAGE {activeStage.stageNumber}</span>
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-sm border border-white/20 text-white font-medium">
                  White-Glove Certified
                </span>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                  Checkpoint Protocol • {activeStage.label}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1 mb-3">
                  {activeStage.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                  {activeStage.summary}
                </p>

                {/* Dynamic Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-[#FAF9F6] border border-slate-200 rounded-sm mb-6">
                  {Object.entries(activeStage.metrics).map(([key, val]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                        {key}
                      </span>
                      <span className="text-xs sm:text-sm font-display font-bold text-gold capitalize">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>Chain-of-custody recorded in client portal</span>
                </div>

                <button
                  onClick={() => {
                    const currentIndex = MOVE_JOURNEY_STAGES.findIndex((s) => s.id === activeStageId);
                    const nextIndex = (currentIndex + 1) % MOVE_JOURNEY_STAGES.length;
                    setActiveStageId(MOVE_JOURNEY_STAGES[nextIndex].id);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-gold-dark"
                >
                  <span>Advance Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
