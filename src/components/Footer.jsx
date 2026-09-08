import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0D0D0D] text-white pt-20 pb-12 relative overflow-hidden border-t border-[#00C2CB]/20">
      {/* Canonical Brand Spectrum Hairline at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB] opacity-40 pointer-events-none" />

      {/* Ambient background light: cool spectrum glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C2CB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A277FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="relative bg-gradient-to-br from-[#171717] to-[#0D0D0D] border border-[#00C2CB]/30 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left overflow-hidden">
          {/* Subtle Top Spectrum Line on CTA Banner */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB]" />

          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to scale your business online?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Talk to our team today for a free architecture review and project estimate.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="btn-primary text-sm sm:text-base px-8 py-4 font-bold shadow-xl"
            >
              Get a Quote
            </button>
            <a
              href="https://wa.me/919014757379"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-[#00C2CB]/50 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-stellar-cyan" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#262626]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img
                  src="https://stellarweb.in/wp-content/uploads/2024/12/STELLAR__4_-removebg-preview.png"
                  alt="STELLAR"
                  className="h-14 sm:h-18 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              We build websites and digital products that don’t just look good — they work. User-focused, mobile-ready, and built to scale.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <a
                href="mailto:admin@stellarweb.in"
                className="flex items-center gap-3 hover:text-stellar-cyan transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-stellar-cyan group-hover:text-stellar-cyan transition-colors">
                  <Mail className="w-4 h-4 text-stellar-cyan" />
                </div>
                <span className="font-medium text-white">admin@stellarweb.in</span>
              </a>

              <a
                href="tel:+919014757379"
                className="flex items-center gap-3 hover:text-stellar-cyan transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-stellar-cyan group-hover:text-stellar-cyan transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="font-medium text-white">+91 90147 57379</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-stellar-yellow" />
                </div>
                <span>Headquartered in Hyderabad &amp; Lucknow, India</span>
              </div>
            </div>

            {/* Social Link */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/stellar.webs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-stellar-cyan hover:text-stellar-dark hover:border-stellar-cyan transition-colors"
                title="Follow on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-stellar-cyan transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-stellar-cyan transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-stellar-cyan transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-stellar-cyan transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/queries" className="hover:text-stellar-cyan transition-colors">Queries</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Legal */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-base font-bold text-white uppercase tracking-wider">
              Resources
            </h5>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/support" className="hover:text-stellar-cyan transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/clinic-website" className="hover:text-stellar-cyan transition-colors">Website for Clinics and Hospitals</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-stellar-cyan transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-stellar-cyan transition-colors">Privacy policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-stellar-cyan transition-colors">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/cancellationsrefunds" className="hover:text-stellar-cyan transition-colors">Cancellations &amp; Refunds</Link>
              </li>
            </ul>

            <div className="pt-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-400 leading-relaxed">
                GST Registration: <span className="font-mono text-white">36EQTPM6776A1Z9</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}, All Rights Reserved by{' '}
            <span className="font-bold text-white">STELLAR</span>.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-stellar-cyan transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-stellar-cyan group-hover:text-stellar-dark transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
