import React from 'react';
import { Link } from 'react-router-dom';
import WhatWeBuild from '../components/WhatWeBuild';
import { Layout, Smartphone, Database, ShoppingBag, Server, RefreshCw, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onOpenQuote }) {
  const serviceCategories = [
    {
      title: "Custom Website Design & Development",
      desc: "Fast, responsive, and conversion-focused websites engineered for maximum engagement and SEO authority.",
      icon: Layout,
      highlights: [
        "Single-Page & Multi-Page Corporate Portals",
        "Sub-3-second load speed architecture",
        "Clean mobile-first UI/UX interfaces",
        "Native CMS integration for easy content editing",
      ],
      color: "bg-[#00C2CB]/10 text-stellar-cyan",
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps for iOS and Android with sleek UI/UX and real-time synchronisation.",
      icon: Smartphone,
      highlights: [
        "React Native & Flutter cross-platform builds",
        "Secure biometric authentication & offline modes",
        "Push notification workflows & deep linking",
        "App Store & Google Play compliance & deployment",
      ],
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Enterprise Software & ERP Solutions",
      desc: "Custom operational software, CRM pipelines, and automation tools built to scale your business operations.",
      icon: Database,
      highlights: [
        "Bespoke ERP & CRM database engineering",
        "Automated role-based access control (RBAC)",
        "REST API & third-party SaaS integrations",
        "Cloud database clustering with zero data loss",
      ],
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "E-Commerce Systems & Gateways",
      desc: "High-converting digital storefronts with seamless checkout flows, inventory management, and PCI compliance.",
      icon: ShoppingBag,
      highlights: [
        "Custom checkout funnels with 1-click buy",
        "Razorpay, Stripe, PayU, and COD integration",
        "Automated inventory alerts & order tracking",
        "Abandoned cart recovery & WhatsApp automation",
      ],
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Managed Cloud Hosting & AMC",
      desc: "24/7 server monitoring, performance tuning, automated daily backups, and reliable maintenance contracts.",
      icon: Server,
      highlights: [
        "LiteSpeed & Cloudflare CDN acceleration",
        "Daily automated backups with 1-click restore",
        "SSL certification & DDoS mitigation",
        "Dedicated engineer on WhatsApp for urgent issues",
      ],
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: "Zero-Downtime Server & Web Migration",
      desc: "Seamless migration of legacy websites, databases, and apps to high-performance servers without losing traffic or SEO rankings.",
      icon: RefreshCw,
      highlights: [
        "Zero-downtime DNS transition protocol",
        "100% database integrity verification",
        "SEO permalink & 301 redirect protection",
        "Post-migration performance benchmarking",
      ],
      color: "bg-cyan-50 text-cyan-600",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>End-to-End Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight">
            Our Digital Services
          </h1>
          <p className="text-base sm:text-lg text-stellar-muted max-w-2xl mx-auto">
            From modern web design to mission-critical backend software, explore how STELLAR scales your business.
          </p>

          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 hover:border-[#00C2CB]/40 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${svc.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-stellar-dark mb-2.5 group-hover:text-stellar-cyan transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-stellar-muted leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <div className="h-px bg-gray-100 my-4" />

                  <ul className="space-y-2.5">
                    {svc.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 text-stellar-cyan flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-3 rounded-xl border border-gray-200 text-xs font-bold text-stellar-dark hover:bg-[#00C2CB]/10 hover:border-stellar-cyan hover:text-stellar-dark transition-all shadow-sm"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What We Build Integration */}
      <WhatWeBuild onOpenQuote={onOpenQuote} />
    </div>
  );
}
