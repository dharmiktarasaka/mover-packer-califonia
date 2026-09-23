import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck, Award, Globe, Lock } from 'lucide-react';
import { BRAND, SERVICES, LOCATIONS } from '../../data/relocationData';

export const Footer = () => {
  return (
    <footer className="relative bg-[#0A0F1D] text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold/5 blur-[100px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top Architectural Brand Banner */}
        <div className="border-b border-slate-800 pb-14 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1px] w-8 bg-gold" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">
                  Global Relocation Authority
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tightest text-white">
                {BRAND.name}
              </h2>
              <p className="mt-3 text-lg font-editorial text-slate-300 max-w-xl">
                “{BRAND.tagline} {BRAND.subTagline}”
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-glow-gold transition-all"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-white/5 border border-white/15 text-white font-medium text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>{BRAND.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
              Relocation Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-gold transition-colors">
                      {s.number}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Major Hubs */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
              Flagship Hubs
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/chicago"
                  className="text-sm text-gold font-semibold hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Chicago (JK Moving)</span>
                  <span className="text-[10px] bg-gold/15 text-gold px-1.5 py-0.5 rounded-sm">HQ</span>
                </Link>
              </li>
              {LOCATIONS.filter((l) => l.slug !== 'chicago').slice(0, 5).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {loc.name}, {loc.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/locations"
                  className="text-xs text-gold/80 hover:text-gold uppercase tracking-wider font-semibold inline-flex items-center gap-1 mt-1"
                >
                  View All 10 Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
              The Firm
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Northvault
                </Link>
              </li>
              <li>
                <Link to="/about#fleet" className="hover:text-white transition-colors">
                  Pneumatic Fleet Specs
                </Link>
              </li>
              <li>
                <Link to="/about#security" className="hover:text-white transition-colors">
                  Vault Security Protocol
                </Link>
              </li>
              <li>
                <Link to="/about#standards" className="hover:text-white transition-colors">
                  Sustainability & Carbon Offsets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Careers & Chauffeur Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
              Resources & Intel
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Executive Moving Checklist
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Fine Art & Wine Protocol
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Cross-Country Moving Guide
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Instant Cost Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Inquiries */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-5">
              Executive Desk
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{BRAND.headquarters}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-white">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                  {BRAND.email}
                </a>
              </div>
            </div>

            {/* Quick newsletter subscription */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-2 font-medium">
                Private Journal Dispatch
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you. You have been subscribed to the Northvault Private Dispatch.");
                }}
                className="flex items-center"
              >
                <input
                  type="email"
                  placeholder="Enter executive email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold rounded-l-sm"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider rounded-r-sm hover:bg-gold-light"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Industry Certifications & Badges */}
        <div className="border-t border-b border-slate-800 py-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Full Value Replacement Coverage Underwritten</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              <span>AMSA ProMover & IAM International Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gold" />
              <span>Global Customs Authorized Consignor</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-gold" />
              <span>Biometric Vault Storage Security Standards</span>
            </div>
          </div>
        </div>

        {/* Legal & Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-200 transition-colors">
              Terms of Relocation
            </a>
            <a href="#cargo" className="hover:text-slate-200 transition-colors">
              Cargo Liability Disclosures
            </a>
            <a href="#accessibility" className="hover:text-slate-200 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
