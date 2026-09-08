import React, { useState } from 'react';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ onOpenQuote }) {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Landing Page",
      subtitle: "*credit card required",
      priceMonthly: "899",
      priceYearly: "6999",
      recommended: false,
      popularTag: null,
      features: [
        { text: "Single-page website", included: true },
        { text: "Contact form", included: true },
        { text: "3-days delivery", included: true },
        { text: "Free hosting", included: true },
        { text: "Basic branding", included: true },
        { text: "Template based design", included: true },
        { text: "Mobile responsive", included: false },
      ],
      buttonText: "Purchase now",
    },
    {
      name: "Static Website – Starter",
      subtitle: "*credit card required",
      priceMonthly: "1999",
      priceYearly: "18999",
      recommended: true,
      popularTag: "Recommended",
      features: [
        { text: "Everything in Basic Plan", included: true },
        { text: "5-page website", included: true },
        { text: "12-days delivery", included: true },
        { text: "Mobile responsive", included: true },
        { text: "Google maps Integration", included: true },
        { text: "Chat and Email Support", included: true },
      ],
      buttonText: "Purchase now",
    },
    {
      name: "Dynamic Website - Premium",
      subtitle: "*credit card required",
      priceMonthly: "3499",
      priceYearly: "34999",
      recommended: false,
      popularTag: null,
      features: [
        { text: "Everything in Starter Plan", included: true },
        { text: "14-pages website", included: true },
        { text: "25-days delivery", included: true },
        { text: "Custom CMS, Booking", included: true },
        { text: "Analytics & Reporting", included: true },
        { text: "WhatsApp Integration", included: true },
        { text: "Dedicated Support 24/7", included: true },
      ],
      buttonText: "Purchase now",
    },
  ];

  return (
    <section id="price" className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 text-stellar-dark font-bold text-xs uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Start Your Website</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stellar-dark tracking-tight">
            The perfect Management plan for your Business!
          </h2>

          <p className="text-base sm:text-lg text-stellar-muted">
            Transparent, predictable pricing with no hidden charges. Choose the tier that fits your growth.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-white p-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  !isYearly
                    ? 'bg-stellar-dark text-white shadow-sm'
                    : 'text-stellar-muted hover:text-stellar-dark'
                }`}
              >
                Per Month
              </button>

              <button
                type="button"
                onClick={() => setIsYearly(true)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  isYearly
                    ? 'bg-stellar-dark text-white shadow-sm'
                    : 'text-stellar-muted hover:text-stellar-dark'
                }`}
              >
                <span>Per Year</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-stellar-cyan text-stellar-dark font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards - Clean Monochrome Canvases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                plan.recommended
                  ? 'bg-white border-2 border-stellar-dark shadow-2xl scale-100 md:-translate-y-2'
                  : 'bg-white border border-gray-200/80 shadow-md hover:shadow-xl'
              }`}
            >
              {/* Recommended Badge with Canonical Brand Spectrum Gradient */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Plan Title */}
                <h3 className="text-2xl font-bold text-stellar-dark mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium mb-6">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-semibold text-stellar-dark">₹</span>
                  <span className="text-5xl sm:text-6xl font-extrabold text-stellar-dark tracking-tight">
                    {isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-base text-gray-500 font-medium">
                    / {isYearly ? 'Year' : 'monthly'}
                  </span>
                </div>

                <div className="h-px bg-gray-100 my-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm">
                      {feat.included ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <span className={feat.included ? 'text-stellar-dark font-medium' : 'text-gray-400 line-through'}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onOpenQuote}
                  className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                    plan.recommended
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 24/7 Support Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-stellar-dark">
                Post-Launch Dedicated Support Included
              </h4>
              <p className="text-sm text-stellar-muted">
                All packages include 24/7/365 continuous technical maintenance and uptime monitoring.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="text-sm font-bold text-stellar-cyan hover:underline flex-shrink-0"
          >
            Need something custom? Get a Quote &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
