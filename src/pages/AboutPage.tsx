import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Globe, Users, HeartHandshake, CheckCircle2, Building2 } from 'lucide-react';
import { BRAND } from '../data/relocationData';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    document.title = "The Northvault Heritage & Architecture | Northvault Relocation";
  }, []);

  const milestones = [
    { year: "2009", title: "Inception in Austin", desc: "Founded with two custom-fitted air-ride vans and an unwavering commitment to white-glove estate relocations." },
    { year: "2014", title: "Fine Art & Diplomatic Division", desc: "Accredited by international museum logistics syndicates for temperature-monitored art and wine transit." },
    { year: "2018", title: "Coast-to-Coast Fleet Expansion", desc: "Expanded flagship terminals to New York, Los Angeles, Chicago, and Miami, eliminating intermediate freight transfers." },
    { year: "2022", title: "Private Vault Facilities", desc: "Constructed high-security biometric climate-controlled storage vaults across Texas and New York." },
    { year: "2026", title: "Autonomous Telematics & Global Reach", desc: "Operating across 50+ metropolitan zones with real-time GPS telemetry, zero-emissions fleet initiatives, and $500M+ property relocated." },
  ];

  const leadership = [
    {
      name: "Marcus Vance",
      title: "Co-Founder & Chief Executive Officer",
      bio: "Former luxury logistics director for European diplomatic missions. 22 years of global mobility governance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Helena Rostova",
      title: "Head of Fine Art & Archival Preservation",
      bio: "Trained conservator with past credentials at international auction houses; oversees custom crating protocols.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Christian Lind",
      title: "Senior Vice President of Global Operations",
      bio: "Oversees air-ride transport logistics, customs clearance corridors, and dedicated fleet telemetry.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-4">
              ABOUT NORTHVAULT RELOCATION
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tightest uppercase leading-[1.05]">
              Built On <br />
              <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal">
                discretion & precision.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-2xl text-slate-600 font-editorial leading-relaxed">
              We started Northvault because the moving industry had reduced human life transitions to transactional freight weight. We chose to elevate it into an architectural art form.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-sm overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Northvault private estate staging"
                className="w-full h-[450px] object-cover contrast-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border border-slate-200 p-6 rounded-sm max-w-xs shadow-xl hidden sm:block">
              <span className="text-3xl font-display font-black text-gold">15+ Years</span>
              <p className="text-xs text-slate-600 mt-1">
                Refining white-glove estate, intermodal, and corporate relocation across North America & Europe.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <h2 className="text-3xl font-display font-bold text-slate-900">
              The Sovereign Moving Philosophy
            </h2>
            <p>
              When a distinguished client entrusts us with their residence, they are handing us their private sanctuary. Every original oil painting, family archive, bespoke Italian dining table, and vintage cellar carries an intrinsic value far exceeding any insurance policy.
            </p>
            <p className="font-editorial text-xl sm:text-2xl text-slate-900 italic">
              “We operate under three core tenets: absolute privacy, single-team continuity, and zero tolerance for compromised standards.”
            </p>
            <p>
              Our moving directors, riggers, and chauffeurs are salaried permanent employees—never temporary day laborers. They are certified through rigorous background clearances and 120 hours of training in structural crating, luxury floor shielding, and diplomatic protocol.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="bg-white border-t border-b border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
              HERITAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Sixteen Years of Evolution
            </h2>
          </div>

          <div className="relative border-l border-slate-200 pl-6 sm:pl-10 space-y-12 max-w-4xl">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                {/* Node point */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-gold group-hover:scale-125 transition-transform shadow-sm" />
                <span className="font-mono text-sm font-bold text-gold">{m.year}</span>
                <h3 className="text-xl font-display font-bold text-slate-900 mt-0.5 mb-1.5">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            EXECUTIVE DIRECTORS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Leadership Behind the Fleet
          </h2>
          <p className="mt-3 text-slate-600 font-editorial text-base">
            Seasoned specialists bridging luxury logistics, fine art curation, and global transport infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader) => (
            <div
              key={leader.name}
              className="bg-white border border-slate-200 rounded-sm overflow-hidden group hover:border-gold/50 transition-colors shadow-sm"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-slate-900">
                  {leader.name}
                </h3>
                <span className="text-xs text-gold font-mono block mt-0.5 mb-3 font-semibold">
                  {leader.title}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
        <div className="bg-white border border-slate-200 p-10 sm:p-16 rounded-sm shadow-xl">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Partner with Northvault on your next chapter.
          </h3>
          <p className="text-slate-600 font-editorial text-lg max-w-lg mx-auto mb-8">
            Experience what true white-glove relocation feels like from your initial consultation through final valet unboxing.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-glow-gold"
          >
            <span>Request Bespoke Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
