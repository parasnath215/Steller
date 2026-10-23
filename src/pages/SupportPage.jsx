import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LifeBuoy, 
  MessageSquare, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';

export default function SupportPage({ onOpenQuote }) {
  const slas = [
    {
      level: "Critical (Server Down / Payment Breach)",
      response: "Under 1 Hour Response",
      hours: "24/7/365 On-Call Dispatch",
      color: "border-red-200 bg-red-50/40 text-red-900",
    },
    {
      level: "Major (Feature Defect / CMS Glitch)",
      response: "Under 4 Hours Response",
      hours: "Mon - Fri (11 AM - 12 AM IST)",
      color: "border-amber-200 bg-amber-50/40 text-amber-900",
    },
    {
      level: "Minor (Text / Image / Timing Updates)",
      response: "Within 24 Hours Turnaround",
      hours: "Handled by STELLAR Care Plan",
      color: "border-emerald-200 bg-emerald-50/40 text-emerald-900",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Customer Assistance Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight">
            Client Support &amp; Maintenance
          </h1>
          <p className="text-base sm:text-lg text-stellar-muted max-w-2xl mx-auto">
            We don't disappear after launch. Our dedicated engineering and AMC team keeps your platform running 24/7/365.
          </p>

          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Support</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00C2CB]/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stellar-dark mb-2">WhatsApp Support Hotline</h3>
            <p className="text-sm text-stellar-muted leading-relaxed mb-6">
              Instant access to on-call support engineers for urgent changes, bug reports, or quick consultation.
            </p>
            <a
              href="https://wa.me/919014757379?text=Hi%20STELLAR%20Support%2C%20I%20need%20assistance%20with%20my%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs font-bold w-full text-center justify-center"
            >
              Open WhatsApp Support
            </a>
          </div>

          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00C2CB]/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-stellar-cyan flex items-center justify-center mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stellar-dark mb-2">Email Helpdesk</h3>
            <p className="text-sm text-stellar-muted leading-relaxed mb-6">
              Send detailed technical logs, design change requests, or account inquiries directly to our ticketing desk.
            </p>
            <a
              href="mailto:admin@stellarweb.in"
              className="btn-dark text-xs font-bold w-full text-center justify-center"
            >
              admin@stellarweb.in
            </a>
          </div>

          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00C2CB]/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stellar-dark mb-2">Direct Phone Line</h3>
            <p className="text-sm text-stellar-muted leading-relaxed mb-6">
              Available Monday to Friday from 12:00 PM to 12:00 AM IST for urgent operational voice support.
            </p>
            <a
              href="tel:+919014757379"
              className="btn-outline text-xs font-bold w-full text-center justify-center bg-white"
            >
              +91 90147 57379
            </a>
          </div>

        </div>

        {/* SLA Commitments */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-md space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C2CB]/10 text-stellar-cyan text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Service Level Agreements</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stellar-dark">
              Our Support SLAs &amp; Resolution Targets
            </h2>
            <p className="text-sm text-stellar-muted">
              Every client on our maintenance retainer benefits from structured response time commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slas.map((s, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border ${s.color} space-y-3`}>
                <h4 className="font-bold text-base">{s.level}</h4>
                <p className="text-2xl font-extrabold">{s.response}</p>
                <p className="text-xs opacity-80">{s.hours}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>99.9% Uptime Guarantee backed by Cloudflare &amp; LiteSpeed</span>
            </div>
            <Link to="/cancellationsrefunds" className="text-stellar-cyan font-semibold hover:underline">
              View Cancellation &amp; Refund Policy &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
