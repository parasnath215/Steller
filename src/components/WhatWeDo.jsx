import React from 'react';
import { ArrowRight, CheckCircle2, Layout, Smartphone, Wrench, BarChart3, Zap, ShieldCheck } from 'lucide-react';

export default function WhatWeDo({ onOpenQuote }) {
  const services = [
    {
      title: "Website For Every Business",
      subtitle: "High-performance, SEO-ready, conversion-focused",
      icon: Layout,
      color: "text-stellar-cyan bg-[#00C2CB]/10",
    },
    {
      title: "Apps & Software",
      subtitle: "Custom systems that automate operations",
      icon: Smartphone,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "AMC & Support",
      subtitle: "We don’t disappear after launch",
      icon: Wrench,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Business Management",
      subtitle: "We'll help you get on track with system that have been built",
      icon: BarChart3,
      color: "text-orange-600 bg-orange-50",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 text-stellar-dark font-bold text-xs uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Our Core Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stellar-dark tracking-tight">
            What we Do
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Media with Floating Elements */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Illustration */}
              <div className="relative z-10 bg-[#FAFAFA] p-4 rounded-3xl border border-gray-100 shadow-xl">
                <img
                  src="/images/what-we-do-thumb.png"
                  alt="What we do at STELLAR"
                  className="w-full h-auto rounded-2xl border border-gray-100"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge 1 - Analytics/Speed */}
              <div className="absolute -top-6 -right-4 sm:-right-6 z-20 animate-float-y pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <Zap className="w-6 h-6 fill-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stellar-dark">Speed Optimized</p>
                    <p className="text-[11px] text-stellar-cyan font-medium">&lt; 3 Sec Policy</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 - Secure Icon */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 z-20 animate-float-y-rev pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stellar-dark">Enterprise Security</p>
                    <p className="text-[11px] text-emerald-600 font-medium">SSL &amp; PCI Ready</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Capability Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {services.map((svc, idx) => {
                const IconComponent = svc.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl border border-gray-100 bg-[#FAFAFA] hover:bg-white hover:border-[#00C2CB]/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${svc.color} transition-transform group-hover:scale-110`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-stellar-dark group-hover:text-stellar-cyan transition-colors">
                          {svc.title}
                        </h4>
                        <p className="text-sm sm:text-base text-stellar-muted flex items-center gap-2">
                          <span className="text-stellar-cyan font-bold">&rarr;</span>
                          <span>{svc.subtitle}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <a
                href="#what-we-build"
                className="btn-dark text-base px-8 py-4 inline-flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl"
              >
                <span>Know more</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
