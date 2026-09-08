import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClinicWebsitePage from './pages/ClinicWebsitePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import QueriesPage from './pages/QueriesPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import RefundsPage from './pages/RefundsPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-stellar-muted selection:bg-[#00C2CB]/30 selection:text-stellar-dark">
        {/* Global Navigation */}
        <Navbar onOpenQuote={handleOpenQuote} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
            
            {/* About Us Routes */}
            <Route path="/about" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/about-us" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
            <Route 
              path="/about-us-stellar-website-app-software-development-agency" 
              element={<AboutPage onOpenQuote={handleOpenQuote} />} 
            />

            {/* Clinic & Hospital Solution */}
            <Route path="/clinic-website" element={<ClinicWebsitePage onOpenQuote={handleOpenQuote} />} />

            {/* Portfolio & Case Studies Page */}
            <Route path="/portfolio" element={<PortfolioPage onOpenQuote={handleOpenQuote} />} />

            {/* Pricing Page redirected to Portfolio */}
            <Route path="/pricing" element={<Navigate to="/portfolio" replace />} />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Services Page */}
            <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />

            {/* Queries & FAQs */}
            <Route path="/queries" element={<QueriesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/faqs" element={<QueriesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/faqs-01" element={<QueriesPage onOpenQuote={handleOpenQuote} />} />

            {/* Support Hub */}
            <Route path="/support" element={<SupportPage onOpenQuote={handleOpenQuote} />} />

            {/* Legal & Policy Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/cancellationsrefunds" element={<RefundsPage />} />
            <Route path="/cancellations-and-refunds" element={<RefundsPage />} />

            {/* Blog & Case Studies */}
            <Route path="/blog" element={<BlogPage />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Interactive Quote Calculator Modal */}
        <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}
