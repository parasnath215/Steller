import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, Zap, Clock, Award, Star } from 'lucide-react';

export default function PortfolioModal({ project, isOpen, onClose, onOpenQuote }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-[#0D0D0D]/75 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 my-8 transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual Strip */}
        <div className={`relative px-6 sm:px-8 py-8 sm:py-10 bg-gradient-to-r ${project.bannerGradient} text-white`}>
          {/* Subtle noise/grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-1 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30">
                {project.category}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-emerald-400/25 border border-emerald-300/40 text-emerald-100 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                {project.badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h3>

            <p className="text-white/85 text-sm sm:text-base max-w-2xl font-light">
              {project.tagline}
            </p>

            {/* Micro stats banner */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-300" /> Delivery: <strong>{project.timeline}</strong>
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-emerald-300" /> PageSpeed: <strong>{project.speedScore}</strong>
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-cyan-300" /> Impact: <strong>{project.highlightMetric}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-gray-100">
          
          {/* Section: Challenge & Engineering Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-0">
            <div className="bg-red-50/50 border border-red-100/80 rounded-xl p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1.5 block">
                The Client Challenge
              </span>
              <p className="text-stellar-muted text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-[#FAFAFA] border border-[#00C2CB]/30 rounded-xl p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-stellar-cyan mb-1.5 block">
                STELLAR Engineering Solution
              </span>
              <p className="text-stellar-muted text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Section: Key Features Delivered */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stellar-dark flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-stellar-cyan" />
              Key Features &amp; Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAFAFA] border border-gray-100 text-xs sm:text-sm text-stellar-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-stellar-cyan mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Measurable Impact & Results */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stellar-dark">
              Measurable Business Impact
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gradient-to-br from-stellar-light to-white border border-gray-200 text-center">
                  <div className="text-xl sm:text-2xl font-black text-stellar-cyan">
                    {res.metric}
                  </div>
                  <div className="text-xs font-medium text-stellar-muted mt-1">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Tech Stack Used */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stellar-dark">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg border border-slate-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Client Testimonial */}
          {project.testimonial && (
            <div className="pt-6">
              <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200/70 relative">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xs sm:text-sm italic text-gray-700 leading-relaxed mb-3">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="text-xs font-bold text-stellar-dark">
                  {project.testimonial.author}{' '}
                  <span className="font-normal text-gray-500">
                    — {project.testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA Strip */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stellar-muted text-center sm:text-left">
            Need a similar custom system built for your business?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onOpenQuote) onOpenQuote();
              }}
              className="w-1/2 sm:w-auto btn-primary px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
