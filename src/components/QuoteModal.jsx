import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Phone, Mail, User, Building } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [projectType, setProjectType] = useState('starter');
  const [timeline, setTimeline] = useState('standard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Solution estimates without price
  const baseEstimates = {
    landing: { name: "Landing Page", days: "3-5 days" },
    starter: { name: "Static Website (Starter)", days: "10-12 days" },
    premium: { name: "Dynamic Website (Premium)", days: "20-25 days" },
    custom: { name: "Custom Web App / Software", days: "30-45 days" },
  };

  const currentEst = baseEstimates[projectType] || baseEstimates.starter;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Project Quote Request: ${currentEst.name} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello STELLAR Team,\n\nI would like to request a project quote:\n\n` +
      `• Solution Type: ${currentEst.name}\n` +
      `• Estimated Turnaround: ${currentEst.days}\n` +
      `• Client Name: ${formData.name}\n` +
      `• Company: ${formData.company || 'N/A'}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email}\n` +
      `• Requirements: ${formData.notes || 'None specified'}\n`
    );
    const mailtoUrl = `mailto:admin@stellarweb.in?subject=${subject}&body=${emailBody}`;

    try {
      await fetch('https://formsubmit.co/ajax/admin@stellarweb.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          solutionType: currentEst.name,
          estimatedDays: currentEst.days,
          name: formData.name,
          company: formData.company || 'N/A',
          phone: formData.phone,
          email: formData.email,
          requirements: formData.notes || 'None specified',
          _subject: `New Quote Request: ${currentEst.name} (${formData.name})`,
        }),
      });
    } catch (err) {
      // Non-blocking fallback
    }

    // Direct user to email client
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0D0D0D]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="relative bg-[#0D0D0D] text-white p-6 sm:p-8 flex items-start justify-between overflow-hidden">
          {/* Canonical Spectrum Accent Hairline */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB]" />

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C2CB]/20 text-stellar-cyan text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Inquiry &amp; Quote</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get a Quote
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Select your requirements below to receive a personalized proposal.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-stellar-dark">Quote Request Sent!</h4>
            <p className="text-stellar-muted max-w-md mx-auto text-sm">
              Your quote request has been forwarded to <a href="mailto:admin@stellarweb.in" className="text-stellar-cyan font-bold hover:underline">admin@stellarweb.in</a>. We will prepare your detailed proposal and get back within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href={`mailto:admin@stellarweb.in?subject=${encodeURIComponent(`Project Quote Request: ${currentEst.name} - ${formData.name}`)}&body=${encodeURIComponent(`Hello STELLAR Team,\n\nI requested a project quote:\n\n• Solution Type: ${currentEst.name}\n• Name: ${formData.name}\n• Company: ${formData.company || 'N/A'}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n• Requirements: ${formData.notes || 'None'}\n`)}`}
                className="btn-primary text-xs font-semibold px-5 py-2.5 inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>
              <a
                href={`https://wa.me/919014757379?text=${encodeURIComponent(`Hello STELLAR Team! I requested a project quote:\n\n• Solution: ${currentEst.name}\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs font-semibold px-5 py-2.5 inline-flex items-center gap-1.5 bg-white"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Also Notify on WhatsApp</span>
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-stellar-muted hover:text-stellar-cyan underline font-medium"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Select Type */}
            <div>
              <label className="block text-sm font-bold text-stellar-dark mb-3">
                1. Select Solution Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'landing', label: 'Landing Page', sub: 'Fast 1-Page Site' },
                  { id: 'starter', label: 'Starter 5-Page', sub: 'Business Website' },
                  { id: 'premium', label: 'Premium 14-Page', sub: 'Custom CMS & Booking' },
                  { id: 'custom', label: 'Custom App / ERP', sub: 'Tailored Software' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      projectType === item.id
                        ? 'border-stellar-cyan bg-[#00C2CB]/5 shadow-sm ring-2 ring-stellar-cyan/20'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <p className={`font-bold text-sm ${projectType === item.id ? 'text-stellar-cyan' : 'text-stellar-dark'}`}>
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Solution Summary (No Price) */}
            <div className="bg-[#FAFAFA] p-4 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-semibold text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
                <span>Selected: <strong className="text-stellar-dark">{currentEst.name}</strong></span>
              </span>
              <span className="text-stellar-cyan font-bold">Estimated Turnaround: {currentEst.days}</span>
            </div>

            {/* Step 2: Contact Information */}
            <div>
              <label className="block text-sm font-bold text-stellar-dark mb-3">
                2. Your Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="Work Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Building className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Company / Brand Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Brief Notes */}
            <div>
              <label className="block text-sm font-bold text-stellar-dark mb-2">
                3. Project Brief or Specific Requirements (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Tell us about the features you need, your target launch date, or link to your current website..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25 transition-all"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-semibold text-gray-500 hover:text-stellar-dark"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-sm font-bold flex items-center gap-2"
              >
                <span>{isSubmitting ? 'Sending Request...' : 'Send Quote Request'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
