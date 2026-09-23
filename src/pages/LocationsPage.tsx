import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowUpRight, Phone, Shield, Building, Filter } from 'lucide-react';
import { LOCATIONS, BRAND } from '../data/relocationData';

interface LocationsPageProps {
  onOpenQuoteModal: (defaults?: { origin?: string }) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onOpenQuoteModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    document.title = "Flagship Hubs & Terminals | Northvault Relocation";
  }, []);

  const regions = ['All', 'Southwest', 'Northeast', 'West Coast', 'Southeast', 'Midwest', 'Mountain West', 'Pacific Northwest'];

  const filteredLocations = LOCATIONS.filter((loc) => {
    const matchesSearch =
      loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.keyAreas.some((area) => area.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesRegion =
      selectedRegion === 'All' || loc.region.includes(selectedRegion);

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-4">
              FLAGSHIP OPERATIONAL HUBS
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tightest uppercase leading-[1.05]">
              Wherever Life <br />
              <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal">
                takes you.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-editorial leading-relaxed">
              Explore our permanent regional hubs, private storage vaults, and dedicated air-ride fleet terminals situated across the nation's premier metropolitan zones.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white border border-slate-200 p-4 rounded-sm shadow-sm">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, state, or luxury neighborhood (e.g. Westlake, Tribeca)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#FAF9F6] border border-slate-300 pl-10 pr-4 py-2.5 rounded-sm text-xs text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Region Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-3.5 h-3.5 text-slate-400 ml-2 hidden lg:inline" />
            {regions.slice(0, 5).map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono whitespace-nowrap transition-colors ${
                  selectedRegion === region
                    ? 'bg-gold text-white font-bold shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((loc) => (
            <div
              key={loc.slug}
              className="group bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              {/* Image banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={loc.image}
                  alt={`${loc.name} terminal`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-gold/40 text-[11px] font-mono text-gold font-bold">
                  {loc.region}
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between text-white">
                  <h3 className="text-2xl font-display font-bold">{loc.name}</h3>
                  <span className="text-xs font-mono text-gold font-semibold">{loc.movesCount}</span>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 text-xs text-slate-700">
                  <div className="flex items-start gap-2 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-[11px]">
                    <div>
                      <span className="text-slate-500 block font-mono">Dedicated Fleet:</span>
                      <span className="font-semibold text-slate-900">{loc.fleetSize}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block font-mono">Private Vault:</span>
                      <span className="font-semibold text-slate-900">{loc.vaultCapacity}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-slate-500 block font-mono text-[10px] mb-1">Key Neighborhoods:</span>
                    <div className="flex flex-wrap gap-1">
                      {loc.keyAreas.slice(0, 3).map((area) => (
                        <span
                          key={area}
                          className="bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200 text-[10px] text-slate-700"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-gold transition-colors"
                  >
                    <span>View Hub Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => onOpenQuoteModal({ origin: `${loc.name}, ${loc.state}` })}
                    className="text-xs text-gold hover:text-gold-dark uppercase tracking-wider font-bold"
                  >
                    Book Route
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-sm shadow-sm">
            <p className="text-base text-slate-600">No hubs match your search term.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('All');
              }}
              className="mt-4 text-xs font-bold uppercase tracking-widest text-gold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
