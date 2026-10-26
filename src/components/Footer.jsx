import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: "Custom Software Dev", path: "/services" },
    { name: "Mobile App Development", path: "/services" },
    { name: "ERP & CRM Solutions", path: "/services" },
    { name: "SaaS Engineering", path: "/services" },
    { name: "Software Modernisation", path: "/services" },
    { name: "Dedicated Tech Pods", path: "/services" },
  ];

  const industries = [
    { name: "Healthcare & MedTech", path: "/clinic-website" },
    { name: "EdTech & Learning", path: "/portfolio" },
    { name: "FinTech & Banking", path: "/portfolio" },
    { name: "Real Estate & PropTech", path: "/portfolio" },
    { name: "E-commerce Retail", path: "/portfolio" },
    { name: "Logistics & On-Demand", path: "/portfolio" },
  ];

  const quickLinks = [
    { name: "Why Choose STELLAR", path: "/about" },
    { name: "Software Portfolio", path: "/portfolio" },
    { name: "Technology Stack", path: "/services" },
    { name: "Cities We Serve", path: "#cities-we-serve" },
    { name: "Contact Us", path: "/contact" },
  ];

  const cities = [
    "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Pune",
    "Chennai", "Ahmedabad", "Jaipur", "Noida", "Gurgaon",
    "Kolkata", "Surat", "Indore", "Bhopal", "Coimbatore",
    "Chandigarh", "Vadodara", "Nagpur", "Kochi", "Lucknow",
    "Trivandrum", "Bhubaneswar", "Patna", "Dehradun", "and more"
  ];

  return (
    <>
      <footer id="contact" className="bg-[#F8F9FA] text-[#475569] pt-16 sm:pt-20 pb-16 sm:pb-20 relative overflow-hidden border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Footer Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
            
            {/* Left Column: Brand, Description, Free Quote Button */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="inline-block">
                <img
                  src="/images/stellar-logo.png"
                  alt="STELLAR"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </Link>

              <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                STELLAR builds mission-critical custom software, mobile applications, and enterprise web solutions for forward-thinking organizations across India and globally.
              </p>

              <div>
                <button
                  onClick={onOpenQuote}
                  className="bg-[#00C2CB] hover:bg-[#009FA8] text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Get Free Quote in 24 Hours
                </button>
              </div>
            </div>

            {/* Right Columns: Services, Industries, Quick Links, Contact Us */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              
              {/* SERVICES */}
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-bold text-stellar-dark uppercase tracking-wider">
                  SERVICES
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  {services.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.path} className="hover:text-stellar-cyan transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* INDUSTRIES */}
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-bold text-stellar-dark uppercase tracking-wider">
                  INDUSTRIES
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  {industries.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.path} className="hover:text-stellar-cyan transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* QUICK LINKS */}
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-bold text-stellar-dark uppercase tracking-wider">
                  QUICK LINKS
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  {quickLinks.map((item, idx) => (
                    <li key={idx}>
                      {item.path.startsWith('#') ? (
                        <a href={item.path} className="hover:text-stellar-cyan transition-colors">
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.path} className="hover:text-stellar-cyan transition-colors">
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT US */}
              <div className="space-y-4">
                <h4 className="text-xs sm:text-sm font-bold text-stellar-dark uppercase tracking-wider">
                  CONTACT US
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <p>
                    <a href="mailto:admin@stellarweb.in" className="hover:text-stellar-cyan transition-colors">
                      admin@stellarweb.in
                    </a>
                  </p>
                  <p>
                    <a href="tel:+919014757379" className="hover:text-stellar-cyan transition-colors">
                      +91 90147 57379
                    </a>
                  </p>
                  <p className="leading-relaxed text-gray-500 pt-1">
                    Hyderabad · Lucknow · Pan-India · Global (3+ Countries)
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* CITIES WE SERVE ACROSS INDIA Section */}
          <div id="cities-we-serve" className="pt-8 pb-10 border-t border-gray-200">
            <h4 className="text-xs sm:text-sm font-bold text-stellar-dark uppercase tracking-wider mb-5">
              CITIES WE SERVE ACROSS INDIA
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {cities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-medium hover:border-stellar-cyan hover:text-stellar-dark transition-colors select-none"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} STELLAR. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-stellar-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="hover:text-stellar-cyan transition-colors">
                Terms of Use
              </Link>
              <Link to="/privacy-policy" className="hover:text-stellar-cyan transition-colors">
                Security Disclosures
              </Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Action Buttons for Desktop (Call & WhatsApp) */}
      <div className="hidden md:flex flex-col gap-3 fixed bottom-6 right-6 z-40">
        {/* Call Button */}
        <a
          href="tel:+919014757379"
          className="w-12 h-12 rounded-full bg-[#00C2CB] text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/30 hover:scale-110 active:scale-95 transition-all"
          title="Call STELLAR"
          aria-label="Call STELLAR"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919014757379?text=Hi%20STELLAR%20Team%2C%20I%20would%20like%20to%20discuss%20a%20website%2Fsoftware%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#00B06F] text-white flex items-center justify-center shadow-lg hover:shadow-green-500/30 hover:scale-110 active:scale-95 transition-all"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
          </svg>
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar (Always present on mobile screens - Image 4) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-stretch h-12 shadow-[0_-3px_12px_rgba(0,0,0,0.12)]">
        {/* Call Us Button */}
        <a
          href="tel:+919014757379"
          className="w-1/2 bg-[#00C2CB] text-white flex items-center justify-center gap-2 font-bold text-sm tracking-wide active:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919014757379?text=Hi%20STELLAR%20Team%2C%20I%20would%20like%20to%20discuss%20a%20website%2Fsoftware%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-[#00B06F] text-white flex items-center justify-center gap-2 font-bold text-sm tracking-wide active:opacity-90 transition-opacity"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
