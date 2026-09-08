import React from 'react';
import { ArrowDown, Star } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      title: "Loyalty to clients",
      desc: "97% Of our customers would recommend us to a friend",
      starColor: "#FFC436",
      accentBg: "bg-amber-50 text-amber-900 border-amber-200/60",
    },
    {
      title: "Service response",
      desc: "All our servers responses under 3sec",
      starColor: "#A277FF",
      accentBg: "bg-purple-50 text-purple-900 border-purple-200/60",
    },
    {
      title: "Serving Globally",
      desc: "12+ Countries where people choose our services",
      starColor: "#00C2CB",
      accentBg: "bg-sky-50 text-sky-900 border-sky-200/60",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          
          {/* 3 Metric Cards */}
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#00C2CB]/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Star SVG Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 0L21 14.8038L35.3205 10L24 20L35.3205 30L21 25.1962L18 40L15 25.1962L0.679491 30L12 20L0.679491 10L15 14.8038L18 0Z"
                      fill={stat.starColor}
                    />
                  </svg>
                </div>
              </div>

              {/* Text content */}
              <div>
                <h4 className="text-lg font-bold text-stellar-dark tracking-tight mb-1 group-hover:text-stellar-cyan transition-colors">
                  {stat.title}
                </h4>
                <p className="text-sm text-stellar-muted leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}

          {/* 4th Column: Circular Rotating Sticker Link */}
          <div className="flex justify-center items-center py-2">
            <a
              href="#about"
              className="relative w-28 h-28 flex items-center justify-center group cursor-pointer"
              title="Scroll down to explore"
            >
              {/* Rotating Circular SVG text */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-extrabold tracking-[2.2px] fill-stellar-dark uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      • EXPLORE MORE • STELLAR AGENCY
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Down Arrow Circle */}
              <div className="w-12 h-12 rounded-full bg-stellar-dark text-white flex items-center justify-center shadow-md group-hover:bg-stellar-cyan group-hover:text-stellar-dark group-hover:scale-110 transition-all duration-300">
                <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
