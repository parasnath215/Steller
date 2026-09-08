import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';

export default function PortfolioSection({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  // Filter projects for the homepage section (showing top 4 or filtered items)
  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects.slice(0, 4)
    : portfolioProjects.filter(p => p.categoryKey === selectedCategory).slice(0, 4);

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 bg-[#FAFBFF] overflow-hidden border-y border-gray-100">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 shadow-xs">
            <Sparkles className="w-4 h-4 text-stellar-cyan animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-stellar-dark tracking-wide uppercase">
              Proven Track Record
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stellar-dark tracking-tight leading-tight">
            Proven Capabilities by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB]">
              Category
            </span>
          </h2>

          <p className="text-base sm:text-lg text-stellar-muted font-normal max-w-2xl mx-auto leading-relaxed">
            Explore production-grade digital architectures divided across healthcare, SaaS, e-commerce, and enterprise categories.
          </p>

          {/* Category Filter Pills - Divided by Category */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.key
                    ? 'btn-primary shadow-md scale-105'
                    : 'bg-white text-stellar-muted hover:text-stellar-dark hover:border-[#00C2CB]/40 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 hover:border-[#00C2CB]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Visual Mockup Header */}
                <div className={`relative h-56 sm:h-64 bg-gradient-to-tr ${project.bannerGradient} p-6 flex flex-col justify-between text-white overflow-hidden`}>
                  {/* Subtle Grid Backdrop */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  
                  {/* Floating Top Badges */}
                  <div className="relative z-1 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/20 text-emerald-100 border border-emerald-300/30 flex items-center gap-1 backdrop-blur-sm">
                      <Zap className="w-3.5 h-3.5 text-emerald-300" />
                      {project.speedScore} Speed
                    </span>
                  </div>

                  {/* Browser Mockup Visual Element */}
                  <div className="relative z-1 mt-auto">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-inner group-hover:translate-y-[-4px] transition-transform duration-300">
                      <div className="flex items-center justify-between text-xs text-white/90 mb-1">
                        <span className="font-bold text-stellar-cyan uppercase tracking-wider text-[11px]">{project.category}</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold text-amber-200">
                          {project.highlightMetric}
                        </span>
                      </div>
                      <div className="text-white text-base sm:text-lg font-bold truncate">
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-sm sm:text-base text-stellar-muted leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Key Highlights list */}
                  <ul className="space-y-2 text-xs sm:text-sm text-stellar-muted">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-stellar-cyan shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-50 text-gray-400 rounded-md">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="text-xs sm:text-sm font-bold text-stellar-cyan hover:underline flex items-center gap-1.5 group/link transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>

                <span className="text-xs text-gray-500 font-medium">
                  {project.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Explore Full Dedicated Portfolio Page */}
        <div className="mt-14 sm:mt-16 bg-[#0D0D0D] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#00C2CB]/30 relative overflow-hidden">
          {/* Top Spectrum Accent Hairline */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB]" />

          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Want to see more live builds &amp; client solutions?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Browse our complete portfolio directory featuring healthcare portals, high-frequency fintech terminals, e-commerce stores, and AI automations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              to="/portfolio"
              className="w-full sm:w-auto btn-primary px-6 py-3.5 text-sm flex items-center justify-center gap-2 shrink-0 font-bold"
            >
              <span>Explore All Projects &amp; Case Studies</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm text-center border border-white/20 transition-all shrink-0"
            >
              Get a Quote
            </button>
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <PortfolioModal
        project={activeProjectModal}
        isOpen={!!activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
}
