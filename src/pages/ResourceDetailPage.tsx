import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS, BRAND } from '../data/relocationData';

interface ResourceDetailPageProps {
  onOpenQuoteModal: () => void;
}

export const ResourceDetailPage: React.FC<ResourceDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  useEffect(() => {
    document.title = `${post.title} | Northvault Relocation Journal`;
  }, [post]);

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 border-b border-slate-200 flex items-center justify-between text-xs font-mono">
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </Link>
        <span className="text-gold uppercase tracking-wider font-bold">{post.category}</span>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-4">
          <span className="flex items-center gap-1.5 text-gold font-medium">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl font-editorial text-slate-700 leading-relaxed mb-8 border-l-2 border-gold pl-4 italic">
          “{post.summary}”
        </p>

        {/* Featured Image */}
        <div className="rounded-sm overflow-hidden border border-slate-200 my-10 shadow-xl bg-white">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] sm:h-[480px] object-cover filter brightness-95"
          />
        </div>

        {/* Article Body */}
        <div className="max-w-none space-y-6 text-slate-700 text-base leading-relaxed">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <div className="my-8 p-6 rounded-sm bg-white border border-gold/40 shadow-sm">
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold" /> Key Takeaway for Moving Day
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prioritize certified single-team custody over fragmented transport brokering. When one dedicated team packs, transports, and unboxes your residence, risk factors are reduced by over 99.4%.
            </p>
          </div>
        </div>

        {/* Call to action inside article */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-slate-200 p-8 rounded-sm shadow-md">
          <div>
            <h4 className="text-xl font-display font-bold text-slate-900">
              Planning an upcoming estate relocation?
            </h4>
            <p className="text-xs text-slate-600 mt-1 font-editorial">
              Let our senior coordinators draft a tailored volumetric blueprint.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-sm bg-gold text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-all flex items-center gap-2 flex-shrink-0 shadow-sm"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </article>
    </div>
  );
};
