import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#00C2CB]/20 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      {/* Canonical Brand Spectrum Hairline (1.5px) */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/images/stellar-logo.svg"
              alt="STELLAR Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Theme Option A: High-contrast Dark Neutral Wordmark & Links */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-stellar-dark">
            <Link
              to="/"
              className={`transition-colors py-2 ${
                isActive('/') ? 'text-stellar-cyan font-bold' : 'hover:text-stellar-cyan'
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/about"
                className={`flex items-center gap-1 transition-colors py-2 ${
                  isActive('/about') ? 'text-stellar-cyan font-bold' : 'hover:text-stellar-cyan'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-stellar-cyan' : ''}`} />
              </Link>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 animate-fadeIn">
                  <Link
                    to="/about"
                    className="block px-5 py-2.5 text-sm text-stellar-muted hover:text-stellar-cyan hover:bg-[#00C2CB]/5 transition-colors"
                  >
                    About STELLAR Agency
                  </Link>
                  <Link
                    to="/clinic-website"
                    className="block px-5 py-2.5 text-sm text-stellar-muted hover:text-stellar-cyan hover:bg-[#00C2CB]/5 transition-colors"
                  >
                    Website for Clinics and Hospitals
                  </Link>
                  <Link
                    to="/services"
                    className="block px-5 py-2.5 text-sm text-stellar-muted hover:text-stellar-cyan hover:bg-[#00C2CB]/5 transition-colors"
                  >
                    Our Capabilities &amp; Services
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-5 py-2.5 text-sm text-stellar-muted hover:text-stellar-cyan hover:bg-[#00C2CB]/5 transition-colors"
                  >
                    Blog &amp; Company Insights
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`transition-colors py-2 ${
                isActive('/portfolio') ? 'text-stellar-cyan font-bold' : 'hover:text-stellar-cyan'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/services"
              className={`transition-colors py-2 ${
                isActive('/services') ? 'text-stellar-cyan font-bold' : 'hover:text-stellar-cyan'
              }`}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className={`transition-colors py-2 ${
                isActive('/contact') ? 'text-stellar-cyan font-bold' : 'hover:text-stellar-cyan'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenQuote}
              className="btn-primary flex items-center gap-2 group text-sm font-semibold"
            >
              <span>Get a Quote</span>
              <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stellar-dark hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white border-b border-[#00C2CB]/20 shadow-2xl p-6 transition-all animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3 text-base font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stellar-dark hover:text-stellar-cyan py-1.5 border-b border-gray-100 font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stellar-dark hover:text-stellar-cyan py-1.5 border-b border-gray-100"
            >
              About Us
            </Link>
            <Link
              to="/clinic-website"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stellar-muted hover:text-stellar-cyan pl-4 py-1 text-sm border-b border-gray-100"
            >
              ↳ Website for Clinics and Hospitals
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stellar-dark hover:text-stellar-cyan py-1.5 border-b border-gray-100"
            >
              Portfolio
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stellar-dark hover:text-stellar-cyan py-1.5 border-b border-gray-100"
            >
              Services
            </Link>
            <Link
              to="/queries"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stellar-dark hover:text-stellar-cyan py-1.5 border-b border-gray-100"
            >
              Queries &amp; FAQs
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stellar-dark hover:text-stellar-cyan py-1.5 border-b border-gray-100"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stellar-dark hover:text-stellar-cyan py-1.5 border-b border-gray-100"
            >
              Contact
            </Link>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full btn-primary text-center justify-center flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
