import React from 'react';
import {
  Globe2,
  Server,
  Cpu,
  CreditCard,
  ShoppingCart,
  Database,
  ArrowRightLeft,
  LifeBuoy,
  ArrowRight
} from 'lucide-react';

export default function WhatWeBuild({ onOpenQuote }) {
  const features = [
    {
      title: "High-Performance Websites",
      desc: "Fast, SEO-ready, conversion-focused websites built to scale.",
      icon: Globe2,
      accent: "from-[#00C2CB]/20 to-[#00C2CB]/5",
      iconColor: "text-stellar-cyan",
    },
    {
      title: "Business-Grade Hosting",
      desc: "Reliable hosting infrastructure designed for uptime, traffic spikes, and long-term growth.",
      icon: Server,
      accent: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-600",
    },
    {
      title: "Custom Apps & Software",
      desc: "Tailor-made tools that automate workflows and reduce manual work.",
      icon: Cpu,
      accent: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-600",
    },
    {
      title: "Secure Payments (PCI Compliant)",
      desc: "Safe and compliant payment setups that protect customer data and build trust.",
      icon: CreditCard,
      accent: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-amber-600",
    },
    {
      title: "E-commerce Systems",
      desc: "Secure, scalable online stores with smooth checkout experiences.",
      icon: ShoppingCart,
      accent: "from-rose-500/20 to-rose-500/5",
      iconColor: "text-rose-600",
    },
    {
      title: "Automated Data Backups",
      desc: "Regular, automated backups with quick recovery to keep your business safe from data loss.",
      icon: Database,
      accent: "from-cyan-500/20 to-cyan-500/5",
      iconColor: "text-cyan-600",
    },
    {
      title: "Zero-Downtime Migration",
      desc: "Seamless migration of websites, apps, and databases without breaking links or losing data.",
      icon: ArrowRightLeft,
      accent: "from-indigo-500/20 to-indigo-500/5",
      iconColor: "text-indigo-600",
    },
    {
      title: "AMC & Ongoing Support",
      desc: "Continuous maintenance, updates, and priority support — we stay with you after launch.",
      icon: LifeBuoy,
      accent: "from-teal-500/20 to-teal-500/5",
      iconColor: "text-teal-600",
    },
  ];

  return (
    <section id="what-we-build" className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 text-stellar-dark font-bold text-xs uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>What We Build &amp; Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stellar-dark tracking-tight">
            End-to-end digital solutions designed for speed, security, and scale.
          </h2>
          <p className="text-base sm:text-lg text-stellar-muted">
            From single landing pages to enterprise cloud architectures, we engineer every layer with precision.
          </p>
        </div>

        {/* Feature Cards Grid: 2 per row on mobile (optimized), 4 per row on desktop as original */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-7 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#00C2CB]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${item.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-stellar-dark mb-1.5 sm:mb-2.5 group-hover:text-stellar-cyan transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs lg:text-sm text-stellar-muted leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>

                <div className="hidden sm:flex pt-3 sm:pt-4 mt-3 border-t border-gray-100 items-center text-[11px] sm:text-xs font-semibold text-stellar-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action */}
        <div className="text-center mt-14">
          <button
            onClick={onOpenQuote}
            className="btn-primary text-base font-bold px-8 py-3.5 inline-flex items-center gap-2"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
