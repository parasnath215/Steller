import React, { useState } from 'react';
import { ExternalLink, Globe, Sparkles, Monitor, Smartphone } from 'lucide-react';

export default function BrandsShowcase({ onOpenQuote }) {
  const brands = [
    {
      name: "Maharaja Lucknow",
      url: "https://maharajalko.in",
      tag: "Hospitality & Restaurant",
      desc: "High-performance digital presence with instant reservation flow.",
      gradient: "from-amber-500/10 to-orange-500/5",
    },
    {
      name: "Raj Jewellers",
      url: "https://rajjewellers.in",
      tag: "Luxury Retail & Catalog",
      desc: "Elegant luxury catalog showcase with lightning-fast load times.",
      gradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
      name: "Santushti",
      url: "https://santushti.co.in",
      tag: "FMCG & Brand Portal",
      desc: "Brand authority portal with dynamic product discovery.",
      gradient: "from-blue-500/10 to-cyan-500/5",
    },
    {
      name: "MediGrow Hub",
      url: "https://medigrowhub.com",
      tag: "Healthcare & Clinic",
      desc: "Patient appointment scheduling and healthcare service ecosystem.",
      gradient: "from-indigo-500/10 to-purple-500/5",
    },
    {
      name: "Bhasin Aromatics",
      url: "https://bhasinaromatics.com",
      tag: "Export & Manufacturing",
      desc: "Global industrial export catalog with inquiry automation.",
      gradient: "from-pink-500/10 to-rose-500/5",
    },
    {
      name: "Staford",
      url: "https://staford.in",
      tag: "Education & Institution",
      desc: "Comprehensive admissions portal with real-time student updates.",
      gradient: "from-violet-500/10 to-blue-500/5",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 text-stellar-dark font-bold text-xs uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Less Latency, More Business</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stellar-dark tracking-tight">
            Brands We’ve Empowered
          </h2>

          <p className="text-base sm:text-lg text-stellar-muted">
            Explore live digital experiences built and supported by the STELLAR team.
          </p>
        </div>

        {/* 6 Grid Cards - Clean Monochrome Canvases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-[#00C2CB]/40 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5"
            >
              {/* Mock Browser Header Bar */}
              <div className="bg-[#F1F3F7] px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                </div>

                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs text-gray-500 font-mono border border-gray-200 max-w-[200px] truncate shadow-inner">
                  <Globe className="w-3 h-3 text-stellar-cyan flex-shrink-0" />
                  <span className="truncate">{brand.url.replace('https://', '')}</span>
                </div>

                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-stellar-cyan transition-colors p-1"
                  title="Open live site"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Viewport Frame with Iframe */}
              <div className="relative h-[320px] bg-slate-50 overflow-hidden flex items-center justify-center">
                {/* Live Preview Iframe */}
                <iframe
                  src={brand.url}
                  title={brand.name}
                  loading="lazy"
                  className="w-[140%] h-[140%] -translate-x-[14%] -translate-y-[14%] scale-75 border-0 pointer-events-none group-hover:pointer-events-auto transition-transform"
                />

                {/* Hover Backdrop Overlay with Action Button */}
                <div className="absolute inset-0 bg-[#0D0D0D]/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center p-6 text-center">
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm font-bold shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all"
                  >
                    <span>Visit {brand.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-gray-100 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-lg text-stellar-dark group-hover:text-stellar-cyan transition-colors">
                      {brand.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#00C2CB]/10 text-stellar-cyan">
                      {brand.tag}
                    </span>
                  </div>
                  <p className="text-sm text-stellar-muted leading-relaxed">
                    {brand.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live in Production
                  </span>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stellar-cyan font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Visit website &rarr;
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Section Bottom Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={onOpenQuote}
            className="btn-primary text-base sm:text-lg px-9 py-4 font-bold inline-flex items-center gap-2.5"
          >
            <span>🔥 Get Your Website Today!</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
