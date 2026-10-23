import React from 'react';
import { Check, Zap, Users, Shield, TrendingUp, Settings, Cpu } from 'lucide-react';

export default function WhyStellar() {
  const pillars = [
    {
      title: "3-Second Performance Policy",
      desc: "Speed is a critical factor in conversion. All our systems and servers are benchmarked to respond under 3 seconds.",
      icon: Zap,
      color: "text-amber-500 bg-amber-50",
    },
    {
      title: "Founder-Involved Projects",
      desc: "No middlemen or junior handoffs. Senior architects and founders directly oversee every milestone.",
      icon: Users,
      color: "text-stellar-cyan bg-[#00C2CB]/10",
    },
    {
      title: "Security First",
      desc: "Enterprise-grade encryption, PCI compliance, and automated threat mitigation built into every codebase.",
      icon: Shield,
      color: "text-emerald-500 bg-emerald-50",
    },
    {
      title: "Scalable Builds",
      desc: "Clean modern architectures that grow with your business, handling traffic surges with zero downtime.",
      icon: TrendingUp,
      color: "text-purple-500 bg-purple-50",
    },
  ];

  return (
    <section id="why-stellar" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Media & Floating Elements */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Illustration */}
              <div className="relative z-10 bg-[#FAFAFA] p-4 rounded-3xl border border-gray-100 shadow-xl">
                <img
                  src="/images/why-stellar-thumb.png"
                  alt="Speed up your website with STELLAR"
                  className="w-full h-auto rounded-2xl border border-gray-100"
                  loading="lazy"
                />
              </div>

              {/* Floating Gear 1 */}
              <div className="absolute -top-6 -left-4 sm:-left-6 z-20 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                    <Settings className="w-6 h-6 animate-spin-slow" />
                  </div>
                </div>
              </div>

              {/* Floating Gear 2 */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 animate-float-y pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-stellar-cyan">
                    <Cpu className="w-6 h-6" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & 4 Pillars */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 text-stellar-dark font-bold text-xs uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
                <span>Why STELLAR</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stellar-dark tracking-tight leading-tight">
                Speed up your website outside of any hassle
              </h2>

              <p className="text-base sm:text-lg text-stellar-muted leading-relaxed">
                Speed is a key factor in increasing your website in terms of visitors, purchase orders, user experience, and SEO. We build fast, lightweight, and resilient platforms designed to dominate your market.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover:border-[#00C2CB]/30 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${p.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-base text-stellar-dark">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stellar-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
