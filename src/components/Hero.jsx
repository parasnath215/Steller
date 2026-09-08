import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F9FAFE] to-white">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C2CB]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#A277FF]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAFA] border border-[#00C2CB]/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-stellar-dark uppercase tracking-wider">
                Top-Rated Website Developers
              </span>
            </div>

            {/* Main Headline with Canonical Spectrum Gradient (Warm to Cool) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-stellar-dark leading-[1.12] tracking-tight">
              Websites &amp; Software that help businesses grow —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C58] via-[#FFC436] via-[#7BB086] to-[#00C2CB]">
                not just look good.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-stellar-muted font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Built for startups &amp; businesses that need speed, security, and long-term support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto btn-primary text-base px-8 py-4 flex items-center justify-center gap-2 font-bold"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919014757379?text=Hi%20STELLAR%20Team%2C%20I%20would%20like%20to%20discuss%20a%20website%2Fsoftware%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-outline text-base px-7 py-3.5 flex items-center justify-center gap-2 font-semibold"
              >
                <Phone className="w-4 h-4 text-stellar-cyan" />
                <span>Talk to Team</span>
              </a>
            </div>

            {/* Trust highlights under CTA */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>3-Second Load Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>24/7 Ongoing AMC Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic with Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Main Artwork */}
              <div className="relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                <img
                  src="https://stellarweb.in/wp-content/uploads/2023/02/hero-thumb-v0007.png"
                  alt="STELLAR Agency Web & App Development"
                  className="w-full h-auto drop-shadow-2xl mx-auto"
                  loading="eager"
                />
              </div>

              {/* Floating Server Badge */}
              <div className="absolute -top-4 left-4 sm:-top-6 sm:left-6 z-20 animate-float-y pointer-events-none">
                <div className="bg-white/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <img
                    src="https://stellarweb.in/wp-content/uploads/2023/02/server.png"
                    alt="High Speed Server"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-bold text-stellar-dark">High Performance</p>
                    <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      99.9% Uptime SLA
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Database Badge */}
              <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:right-6 z-20 animate-float-y-rev pointer-events-none">
                <div className="bg-white/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <img
                    src="https://stellarweb.in/wp-content/uploads/2023/02/database-hero.png"
                    alt="Secure Database"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-bold text-stellar-dark">Zero Data Loss</p>
                    <p className="text-[11px] text-stellar-cyan font-semibold">
                      Automated Daily Backups
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Grid Circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-purple-300/10 to-transparent rounded-3xl -rotate-2 -z-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
