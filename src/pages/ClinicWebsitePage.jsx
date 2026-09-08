import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Calendar, 
  MessageSquare, 
  Clock, 
  MapPin, 
  UserCheck, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export default function ClinicWebsitePage({ onOpenQuote }) {
  const problems = [
    "Slow & outdated websites",
    "No clear clinic timings or schedule",
    "Patients keep calling for basic information",
    "Poor mobile layout on smartphones",
  ];

  const solutions = [
    "Loads in under 3 seconds on slow mobile networks",
    "Clear clinic timings, doctor schedules & Google Maps directions",
    "Direct WhatsApp appointment booking button",
    "Sleek doctor profiles that build patient trust immediately",
  ];

  const packageIncludes = [
    "Home, Services, Doctor & Contact pages",
    "WhatsApp + Call + Google Maps Integration",
    "Mobile-first responsive UX design",
    "3-second performance guarantee",
    "Easy Admin Access & Content Editor",
    "30 Days Free Post-Launch Support",
  ];

  const steps = [
    { num: "01", title: "Free Audit / Demo Review", desc: "We review your clinic requirements and share a modern prototype layout." },
    { num: "02", title: "Requirement Collection", desc: "Send us doctor bios, timings, treatments, photos, and clinic address." },
    { num: "03", title: "Website Build & Review", desc: "Our clinic design team crafts your site and shares staging access for feedback." },
    { num: "04", title: "Go Live + Admin Access", desc: "Domain pointed, SSL secured, and live patient enquiries enabled." },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Top Hero Banner */}
      <section className="bg-gradient-to-b from-[#F2F7FF] via-[#F8FAFE] to-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <span>Where Clinics Meet Digital Growth</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight leading-tight">
            Get a fast, professional clinic website that helps patients enquire easily —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB]">
              delivered in just 10 days.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-stellar-muted max-w-3xl mx-auto leading-relaxed">
            Designed specifically for doctors, dental clinics, specialty hospitals, and healthcare practices who want fewer phone interruptions and higher patient trust.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenQuote}
              className="btn-primary text-base font-bold px-8 py-4"
            >
              Book a Free Clinic Website Audit
            </button>
            <a
              href="https://wa.me/919014757379?text=Hi%20STELLAR%2C%20I%20want%20to%20know%20more%20about%20the%20Clinic%20Website%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base font-bold px-8 py-4 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-emerald-500" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3 Quick Bullets */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm text-stellar-dark font-semibold">
            <div className="flex items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
              <Clock className="w-4 h-4 text-stellar-cyan" />
              <span>Loads in under 3 seconds</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Built only for clinics &amp; doctors</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
              <PhoneCall className="w-4 h-4 text-purple-600" />
              <span>Support that actually picks up calls</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Comparison */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stellar-dark">
            How STELLAR transforms your clinic's patient experience
          </h2>
          <p className="text-base text-stellar-muted">
            Most clinic websites lose patients due to bad mobile layouts and slow loading. Here is how we fix it:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Outdated way */}
          <div className="bg-red-50/40 rounded-3xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              The Typical Clinic Website Frustrations
            </h3>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4" />
                  </div>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* STELLAR way */}
          <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-[#00C2CB]/30">
            <h3 className="text-xl font-bold text-stellar-dark mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-stellar-cyan animate-pulse"></span>
              How STELLAR Fixes This
            </h3>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-stellar-dark font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#00C2CB]/10 text-stellar-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Main Clinic Package */}
      <section className="py-20 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border-2 border-stellar-dark shadow-2xl relative overflow-hidden">
            <div className="absolute top-6 right-6 bg-stellar-dark border border-[#00C2CB]/50 text-stellar-cyan text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Complete Clinic Package
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-3xl font-extrabold text-stellar-dark">
                    Clinic Website Package
                  </h3>
                  <p className="text-sm text-stellar-muted mt-1">
                    Timeline: Delivered in <span className="font-bold text-stellar-cyan">10 working days</span>
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-stellar-dark">₹29,999</span>
                  <span className="text-sm text-gray-500 font-medium">one-time investment</span>
                </div>

                <ul className="space-y-3 pt-2">
                  {packageIncludes.map((inc, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-stellar-dark font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button onClick={onOpenQuote} className="btn-primary font-bold text-sm">
                    Book Your Website Now
                  </button>
                  <a
                    href="https://wa.me/919014757379?text=Hi%2C%20I%20am%20interested%20in%20the%20Rs%2029999%20Clinic%20Website%20Package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline font-bold text-sm bg-white"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>

              {/* STELLAR Care Plan */}
              <div className="lg:col-span-5 bg-[#FAFAFA] p-6 sm:p-8 rounded-2xl border border-[#00C2CB]/30 space-y-4">
                <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-stellar-cyan shadow-sm border border-gray-200">
                  Optional Maintenance
                </div>
                <h4 className="text-xl font-bold text-stellar-dark">
                  STELLAR Care Plan
                </h4>
                <p className="text-xs text-stellar-muted">
                  Prefer zero technical involvement? You focus on patients. We handle website updates.
                </p>

                <div className="space-y-1">
                  <p className="text-2xl font-bold text-stellar-dark">
                    ₹999 <span className="text-xs text-gray-500 font-normal">/ month</span>
                  </p>
                  <p className="text-xs font-semibold text-stellar-cyan">
                    or ₹9,999 / year (2 months free)
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-stellar-muted pt-2">
                  <li>• Clinic timing updates &amp; doctor duty shifts</li>
                  <li>• Holiday / leave notices posted instantly</li>
                  <li>• Contact detail &amp; consultation fee changes</li>
                  <li>• Minor text &amp; clinic photo gallery additions</li>
                  <li>• Priority WhatsApp direct assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stellar-dark">
            Simple. Clear. No confusion.
          </h2>
          <p className="text-base text-stellar-muted">
            From initial requirements to live launch, we make the process painless for medical practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-[#00C2CB]/30 transition-all space-y-3">
              <span className="text-3xl font-extrabold text-stellar-cyan block">
                {st.num}
              </span>
              <h4 className="font-bold text-lg text-stellar-dark">{st.title}</h4>
              <p className="text-xs text-stellar-muted leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0D0D] border border-[#00C2CB]/30 text-white max-w-3xl mx-auto space-y-4 relative overflow-hidden shadow-2xl">
            {/* Canonical Spectrum Hairline */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C58] via-[#7BB086] to-[#00C2CB]" />

            <h3 className="text-2xl font-bold">Get a clinic website that actually works</h3>
            <p className="text-sm text-gray-300">Reduce reception calls. Improve patient enquiries. Look professional.</p>
            <div className="pt-2 flex justify-center gap-4">
              <button onClick={onOpenQuote} className="btn-primary text-sm font-bold">
                Book a Free Clinic Website Audit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
