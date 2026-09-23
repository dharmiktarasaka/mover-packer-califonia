import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Menu,
  X,
  Shield,
  ChevronDown,
  MapPin,
  Home,
  Building2,
  Globe2,
  Package,
  Archive,
  Sparkles,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND, SERVICES, LOCATIONS } from '../../data/relocationData';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  'residential-moving': Home,
  'commercial-moving': Building2,
  'international-moving': Globe2,
  packing: Package,
  'storage-solutions': Archive,
  'specialty-moving': Sparkles,
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'locations' | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<'services' | 'locations' | null>(null);

  const location = useLocation();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu: 'services' | 'locations') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Top Micro-Utility Ribbon (Light Mode) */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'h-0 opacity-0 -translate-y-full overflow-hidden'
            : 'h-8 bg-[#F4F2EC] border-b border-slate-200/80 opacity-100 translate-y-0 hidden sm:block'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-[11px] font-mono text-slate-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LICENSED CARRIER • USDOT & ICC REGISTERED
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 hidden md:inline">
              CHICAGO TERMINAL: (773) 913-2569
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors">
              <Clock className="w-3 h-3 text-gold" />
              <span>24/7 Operations Desk</span>
            </span>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
              className="text-slate-800 font-bold hover:text-gold transition-colors"
            >
              {BRAND.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Light Mode) */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'top-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 py-3 shadow-md'
            : 'top-0 sm:top-8 bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Architectural Brand Emblem */}
            <Link to="/" className="group flex items-center gap-3 focus:outline-none">
              <div className="relative w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center transition-all duration-300 group-hover:border-gold group-hover:shadow-md">
                <span className="font-display font-black text-gold text-xl tracking-wider">
                  N
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold animate-pulse" />
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-display font-extrabold tracking-widest text-slate-900 group-hover:text-gold transition-colors">
                  {BRAND.name}
                </span>
                <span className="text-[9px] uppercase tracking-grand text-gold font-mono font-bold -mt-1">
                  Relocation & Logistics
                </span>
              </div>
            </Link>

            {/* CENTER: Structured Desktop Nav with Megamenus */}
            <nav className="hidden lg:flex items-center gap-7">
              {/* 1. Services with Dropdown Megamenu */}
              <div
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1.5 text-xs tracking-widest uppercase font-bold transition-colors py-1 ${
                    location.pathname.startsWith('/services') ? 'text-gold' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === 'services' ? 'rotate-180 text-gold' : 'text-slate-400'
                    }`}
                  />
                </Link>

                {/* Services Megamenu */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white border border-slate-200 rounded-sm p-6 shadow-2xl mt-1 z-50"
                    >
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold">
                          Core Relocation Disciplines
                        </span>
                        <Link
                          to="/services"
                          className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 font-semibold"
                        >
                          <span>View Full Portfolio</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {SERVICES.map((srv) => {
                          const Icon = serviceIcons[srv.id] || Home;
                          return (
                            <Link
                              key={srv.id}
                              to={`/services/${srv.id}`}
                              className="group/item flex items-start gap-3.5 p-3 rounded-sm hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                            >
                              <div className="w-9 h-9 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-gold group-hover/item:border-gold group-hover/item:bg-white transition-colors flex-shrink-0 mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center justify-between">
                                  <h4 className="text-xs font-display font-bold text-slate-900 group-hover/item:text-gold transition-colors">
                                    {srv.title}
                                  </h4>
                                  <span className="font-mono text-[10px] text-slate-400">
                                    {srv.number}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                  {srv.tagline}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                        <span>All moves backed by Full Replacement Value Protection</span>
                        <span className="text-gold font-bold">100% Dedicated Air-Ride Fleet</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Locations with Dropdown Megamenu */}
              <div
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter('locations')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/locations"
                  className={`flex items-center gap-1.5 text-xs tracking-widest uppercase font-bold transition-colors py-1 ${
                    location.pathname.startsWith('/locations') || location.pathname === '/chicago'
                      ? 'text-gold'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span>Locations</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === 'locations' ? 'rotate-180 text-gold' : 'text-slate-400'
                    }`}
                  />
                </Link>

                {/* Locations Megamenu */}
                <AnimatePresence>
                  {activeDropdown === 'locations' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white border border-slate-200 rounded-sm p-6 shadow-2xl mt-1 z-50"
                    >
                      <div className="grid grid-cols-12 gap-6">
                        {/* Featured Spotlight: Chicago Flagship Terminal */}
                        <div className="col-span-5 bg-[#FAF9F6] border border-gold/40 p-4 rounded-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold bg-gold/15 px-2 py-0.5 rounded-sm">
                                Flagship Spotlight
                              </span>
                              <span className="text-[10px] text-emerald-600 font-mono font-semibold">Active Terminal</span>
                            </div>
                            <h4 className="text-base font-display font-bold text-slate-900 mb-1">
                              JK Moving Services Chicago
                            </h4>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              Licensed local, interstate & commercial movers. Turnkey high-rise COI filing, freight elevator reservations & winter logistics.
                            </p>
                            <div className="mt-3 text-[11px] text-slate-500 space-y-1 font-mono">
                              <div>📍 3047 N Lincoln Ave #400</div>
                              <div>📞 (773) 913-2569</div>
                            </div>
                          </div>

                          <Link
                            to="/chicago"
                            className="mt-4 w-full py-2 bg-gold text-white font-bold text-xs uppercase tracking-wider rounded-sm text-center hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <span>Open Chicago Hub</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* Other Flagship Terminals */}
                        <div className="col-span-7 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                                Metropolitan Terminals
                              </span>
                              <Link
                                to="/locations"
                                className="text-xs text-gold hover:text-slate-900 flex items-center gap-1 font-semibold"
                              >
                                <span>All 10 Hubs</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                              {LOCATIONS.slice(0, 6).map((loc) => (
                                <Link
                                  key={loc.slug}
                                  to={loc.slug === 'chicago' ? '/chicago' : `/locations/${loc.slug}`}
                                  className="p-2 rounded-sm hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors flex items-center justify-between text-slate-700 hover:text-slate-900"
                                >
                                  <div className="flex items-center gap-1.5 truncate">
                                    <MapPin className="w-3 h-3 text-gold flex-shrink-0" />
                                    <span className="truncate font-medium">{loc.name}</span>
                                  </div>
                                  <span className="text-[10px] font-mono text-slate-400">
                                    {loc.state.slice(0, 2).toUpperCase()}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                            <span>Direct non-stop air-ride dispatch</span>
                            <Link to="/locations" className="text-gold font-bold hover:underline">
                              Directory & Map →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Direct Route: Chicago Flagship Highlight */}
              <Link
                to="/chicago"
                className={`relative text-xs tracking-widest uppercase font-bold transition-colors py-1 flex items-center gap-1.5 ${
                  location.pathname === '/chicago' ? 'text-gold' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>Chicago</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              </Link>

              {/* 4. About */}
              <Link
                to="/about"
                className={`text-xs tracking-widest uppercase font-bold transition-colors py-1 ${
                  location.pathname === '/about' ? 'text-gold' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                About
              </Link>

              {/* 5. Resources / Journal */}
              <Link
                to="/resources"
                className={`text-xs tracking-widest uppercase font-bold transition-colors py-1 ${
                  location.pathname.startsWith('/resources') ? 'text-gold' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Resources
              </Link>

              {/* 6. Contact */}
              <Link
                to="/contact"
                className={`text-xs tracking-widest uppercase font-bold transition-colors py-1 ${
                  location.pathname === '/contact' ? 'text-gold' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* RIGHT: Telephone & Request a Quote Action */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 hover:text-gold transition-colors text-xs font-mono font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>{BRAND.phone}</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gold text-white font-bold text-xs tracking-wider uppercase overflow-hidden shadow-md transition-all duration-300 hover:bg-gold-light hover:shadow-glow-gold hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenQuoteModal}
                className="px-3 py-1.5 rounded-sm bg-gold text-white text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                Quote
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="w-10 h-10 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION DRAWER (LIGHT MODE) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-20 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold" />
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    {BRAND.fullName}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-sm text-slate-500 hover:text-slate-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Direct Chicago Banner in Mobile Drawer */}
              <Link
                to="/chicago"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3.5 rounded-sm bg-[#FAF9F6] border border-gold/40 flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold block">
                    Flagship Terminal
                  </span>
                  <span className="text-sm font-display font-bold text-slate-900">
                    JK Moving Services Chicago
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>

              {/* Navigation Links Accordion */}
              <nav className="flex flex-col divide-y divide-slate-100 text-base font-display">
                {/* Services Mobile */}
                <div className="py-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-900 hover:text-gold font-semibold tracking-wide"
                    >
                      Services Portfolio
                    </Link>
                    <button
                      onClick={() =>
                        setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')
                      }
                      className="p-2 text-gold"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileSubmenu === 'services' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {mobileSubmenu === 'services' && (
                    <div className="pl-4 space-y-2 py-2 text-xs text-slate-600">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services/${s.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-gold"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Locations Mobile */}
                <div className="py-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      to="/locations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-900 hover:text-gold font-semibold tracking-wide"
                    >
                      Flagship Hubs
                    </Link>
                    <button
                      onClick={() =>
                        setMobileSubmenu(mobileSubmenu === 'locations' ? null : 'locations')
                      }
                      className="p-2 text-gold"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileSubmenu === 'locations' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {mobileSubmenu === 'locations' && (
                    <div className="pl-4 space-y-2 py-2 text-xs text-slate-600">
                      <Link
                        to="/chicago"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-gold font-bold"
                      >
                        Chicago Flagship Terminal (JK Moving)
                      </Link>
                      {LOCATIONS.slice(0, 6).map((l) => (
                        <Link
                          key={l.slug}
                          to={`/locations/${l.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 hover:text-gold"
                        >
                          {l.name}, {l.state}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-slate-900 hover:text-gold font-semibold"
                >
                  About The Firm
                </Link>

                <Link
                  to="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-slate-900 hover:text-gold font-semibold"
                >
                  Resources & Checklist
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-slate-900 hover:text-gold font-semibold"
                >
                  Contact & Inquiries
                </Link>
              </nav>
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 mt-6">
              <a
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 rounded-sm bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Concierge: {BRAND.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="w-full py-3.5 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest shadow-glow-gold flex items-center justify-center gap-2"
              >
                <span>Request Bespoke Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                Austin HQ • New York • Chicago • Los Angeles • London
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
