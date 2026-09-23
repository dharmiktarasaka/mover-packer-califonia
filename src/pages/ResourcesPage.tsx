import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock, Calendar, CheckSquare, Square, Sparkles, Filter } from 'lucide-react';
import { BLOG_POSTS } from '../data/relocationData';

export const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Conduct initial 3D LiDAR volumetric survey with Northvault Director", stage: "8 Weeks Out", done: true },
    { id: 2, text: "Audit fine art, sculptures & wine collection for custom timber crating", stage: "8 Weeks Out", done: true },
    { id: 3, text: "Reserve building freight elevators & security permits at destination", stage: "4 Weeks Out", done: false },
    { id: 4, text: "Transfer medical records, school enrollments & vehicle registrations", stage: "4 Weeks Out", done: false },
    { id: 5, text: "Separate essential travel jewelry, documents, and overnight valises", stage: "1 Week Out", done: false },
    { id: 6, text: "Confirm arrival appointment window with dedicated van Chauffeur", stage: "48 Hours Out", done: false },
    { id: 7, text: "Review floor plan layout with on-site Move Director for valet unboxing", stage: "Move Day", done: false },
  ]);

  useEffect(() => {
    document.title = "Editorial Journal & Relocation Guides | Northvault Relocation";
  }, []);

  const toggleTask = (id: number) => {
    setChecklist(
      checklist.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const categories = ['All', 'Relocation Guide', 'Checklist', 'Specialty Care', 'Pricing & Value', 'Interstate'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  const completedCount = checklist.filter((t) => t.done).length;

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-4">
              EDITORIAL INTELLIGENCE
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tightest uppercase leading-[1.05]">
              The Sovereign <br />
              <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal">
                relocation journal.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-editorial leading-relaxed">
              Curated advice, architectural preservation protocols, and cross-border insights engineered by senior mobility directors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          <Filter className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-mono whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-gold text-slate-950 font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-gold/60 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm border border-gold/40 text-[10px] font-mono font-bold text-gold uppercase shadow-xs">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-gold" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-gold transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/resources/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-gold transition-colors"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive In-Browser Moving Checklist Planner Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white border border-slate-200 rounded-sm p-8 sm:p-12 shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-gold font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Relocation Tool</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900">
                The Sovereign Moving Checklist
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-editorial mt-1">
                Track your operational milestones in real time. Click items to toggle progress.
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono text-slate-500 uppercase font-semibold block">Progress</span>
              <span className="text-2xl font-display font-black text-gold">
                {completedCount} of {checklist.length} Completed
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleTask(item.id)}
                className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                  item.done
                    ? 'bg-slate-50 border-slate-200 text-slate-400'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-gold/50 shadow-xs'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.done ? (
                    <CheckSquare className="w-5 h-5 text-gold flex-shrink-0" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                  <span className={`text-xs sm:text-sm ${item.done ? 'line-through text-slate-400' : 'text-slate-800 font-medium'}`}>
                    {item.text}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold font-bold px-2 py-0.5 rounded-sm bg-gold/10 border border-gold/30 flex-shrink-0 ml-2">
                  {item.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
