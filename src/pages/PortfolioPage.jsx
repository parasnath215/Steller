import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  Filter, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Cpu, 
  Globe, 
  Activity, 
  Smartphone,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';
import PortfolioModal from '../components/PortfolioModal';

export default function PortfolioPage({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory = 
        selectedCategory === 'all' || project.categoryKey === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#F7F9FD] via-white to-white border-b border-gray-100 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-stellar-muted mb-6">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stellar-dark font-semibold">Portfolio &amp; Case Studies</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 shadow-xs">
              <Sparkles className="w-4 h-4 text-stellar-cyan animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-stellar-dark tracking-wide uppercase">
                Proven Engineering &amp; Design
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight leading-[1.12]">
              Systems that scale.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB]">
                Products that win.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-stellar-muted font-normal leading-relaxed">
              Explore our comprehensive showcase of custom web applications, clinic platforms, e-commerce storefronts, and cloud software engineered with sub-second performance.
            </p>

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="btn-primary text-sm sm:text-base px-6 py-3 font-bold flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919014757379?text=Hi%20STELLAR%20Team%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm sm:text-base px-6 py-3 font-semibold"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="mt-14 pt-8 border-t border-gray-200/70 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-stellar-dark tracking-tight">150+</div>
              <div className="text-xs sm:text-sm text-stellar-muted font-medium mt-1">Shipped Digital Products</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-stellar-cyan tracking-tight">99.8%</div>
              <div className="text-xs sm:text-sm text-stellar-muted font-medium mt-1">Client Platform Uptime</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-stellar-dark tracking-tight">&lt; 1.2s</div>
              <div className="text-xs sm:text-sm text-stellar-muted font-medium mt-1">Average Page Load Speed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-stellar-lilac tracking-tight">100%</div>
              <div className="text-xs sm:text-sm text-stellar-muted font-medium mt-1">Source Code Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Gallery Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Toolbar: Categories + Search Input */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12 pb-8 border-b border-gray-100">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.key
                    ? 'btn-primary shadow-md'
                    : 'bg-gray-100/80 hover:bg-gray-200/70 text-stellar-muted hover:text-stellar-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech, client, or topic..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25 bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#00C2CB]/10 text-stellar-cyan flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stellar-dark">No projects match your filter</h3>
            <p className="text-sm text-stellar-muted max-w-md mx-auto">
              Try searching for a different keyword like "React", "PostgreSQL", "Clinic", or clear your filter.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 text-xs font-semibold text-stellar-cyan bg-[#00C2CB]/10 rounded-lg hover:bg-[#00C2CB]/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 hover:border-[#00C2CB]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className={`relative h-48 bg-gradient-to-tr ${project.bannerGradient} p-5 flex flex-col justify-between text-white overflow-hidden`}>
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                  
                  <div className="relative z-1 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-400/20 text-emerald-100 border border-emerald-300/30 flex items-center gap-1 backdrop-blur-sm">
                      <Zap className="w-3 h-3 text-emerald-300" />
                      {project.speedScore}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="relative z-1 bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/20">
                    <div className="text-xs text-stellar-cyan font-bold uppercase tracking-wider text-[11px]">
                      {project.category}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white truncate">
                      {project.title}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {project.highlightMetric}
                    </span>
                    <span className="text-gray-500 font-medium">
                      {project.timeline} Build
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stellar-muted leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-medium bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-[11px] font-medium bg-gray-50 text-gray-400 rounded">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="btn-outline w-full py-2.5 px-4 text-xs sm:text-sm font-bold justify-center flex items-center gap-2 group/btn"
                >
                  <span>Explore In-Depth Case Study</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-stellar-cyan" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Delivery Process */}
      <section className="py-20 bg-[#0D0D0D] text-white relative overflow-hidden">
        {/* Spectrum Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-stellar-spectrum" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold text-stellar-cyan uppercase tracking-widest">
              How We Deliver Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our 4-Stage Rapid Delivery Lifecycle
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Every project follows an agile, transparent framework designed for high speed, zero surprises, and production stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00C2CB]/20 text-stellar-cyan font-black text-lg flex items-center justify-center">
                01
              </div>
              <h3 className="text-base font-bold text-white">Discovery &amp; Blueprint</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Detailed architecture mapping, database schema design, wireframes, and milestone breakdown.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 font-black text-lg flex items-center justify-center">
                02
              </div>
              <h3 className="text-base font-bold text-white">Agile Sprints &amp; UI</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Bi-weekly sprint demos, responsive front-end builds, and rapid integration of client feedback.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 font-black text-lg flex items-center justify-center">
                03
              </div>
              <h3 className="text-base font-bold text-white">QA, Security &amp; Speed</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Rigorous stress testing, Core Web Vitals optimization, and PCI/HIPAA compliance validation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 font-black text-lg flex items-center justify-center">
                04
              </div>
              <h3 className="text-base font-bold text-white">Launch &amp; Ongoing AMC</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Zero-downtime DNS deployment, daily automated cloud backups, and proactive maintenance care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0D0D0D] border border-[#00C2CB]/30 text-white p-8 sm:p-14 overflow-hidden shadow-2xl">
          {/* Canonical Spectrum Accent Hairline */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB]" />

          <div className="relative z-1 max-w-2xl space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to build your next breakthrough product?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Share your project vision with our team. We’ll analyze your requirements, propose the technical stack, and provide an instant roadmap with clear delivery milestones.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="btn-primary text-base font-bold px-8 py-4 flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <PortfolioModal
        project={activeProjectModal}
        isOpen={!!activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
}
