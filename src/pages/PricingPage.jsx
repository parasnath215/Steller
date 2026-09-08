import React from 'react';
import { Link } from 'react-router-dom';
import Pricing from '../components/Pricing';
import { ShieldCheck, HelpCircle, Check, Sparkles } from 'lucide-react';

export default function PricingPage({ onOpenQuote }) {
  const pricingFaqs = [
    {
      q: "Are there any hidden costs beyond the displayed prices?",
      a: "No. Our pricing is 100% transparent. The price covers full design, development, initial content upload, and the stated delivery timeframe. Third-party domain registration or custom paid APIs (if needed) are billed directly at cost."
    },
    {
      q: "Can I upgrade my plan later as my business grows?",
      a: "Yes, you can upgrade from a Landing Page to a Starter or Premium Dynamic platform at any time without rebuilding your domain or SEO structure."
    },
    {
      q: "What does the 24/7/365 dedicated support cover?",
      a: "It includes uptime monitoring, critical bug fixes, server security patches, SSL renewals, and automated backups so your business runs without interruption."
    },
    {
      q: "Do you offer custom software or enterprise plans?",
      a: "Yes! If your project involves a custom web application, ERP, SaaS architecture, or multi-vendor marketplace, click 'Get an estimate' for a tailored scope proposal."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Transparent Investment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight">
            Our Pricing Plans
          </h1>
          <p className="text-base sm:text-lg text-stellar-muted max-w-2xl mx-auto">
            Our pricing plans are designed for your favor. Scale your digital footprint with predictable budgets.
          </p>

          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Pricing</span>
          </div>
        </div>
      </div>

      {/* Pricing Tables */}
      <Pricing onOpenQuote={onOpenQuote} />

      {/* Pricing FAQs */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-stellar-dark">
            Frequently Asked Pricing Questions
          </h2>
          <p className="text-sm text-stellar-muted">
            Everything you need to know about our billing, milestones, and guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingFaqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-100 space-y-2 hover:border-[#00C2CB]/30 transition-all">
              <h3 className="font-bold text-base text-stellar-dark flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-stellar-cyan flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-stellar-muted leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
