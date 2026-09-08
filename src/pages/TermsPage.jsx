import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldAlert, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Agreement Terms</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stellar-dark tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs text-gray-400 font-mono">
            Governing Jurisdiction: Lucknow &amp; Hyderabad, India
          </p>
          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 text-sm sm:text-base text-stellar-muted leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">1. Introduction</h2>
            <p>
              Welcome to the STELLAR website ("Site"). By accessing or utilizing this Site and commissioning our services, you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these Terms, you must not use this Site or engage our services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">2. About Us</h2>
            <p>
              STELLAR is an Indian digital agency specializing in custom website design, web applications, mobile apps, software systems, and branding solutions. Contact: <strong>support@stellarweb.in</strong> | <strong>+91 90147 57379</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">3. Use of the Site &amp; Eligibility</h2>
            <p>
              By using this Site, you represent that you possess the legal authority to enter into binding agreements. You agree not to attempt unauthorized penetration testing, denial of service attacks, code scraping, or malicious manipulation of our infrastructure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">4. Intellectual Property</h2>
            <p>
              All proprietary code, branding marks, layout frameworks, and creative assets produced by STELLAR remain the intellectual property of STELLAR until final invoice settlement. Upon receipt of full project payment, full commercial deployment and usage rights transfer to the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">5. User Submissions</h2>
            <p>
              Any feedback, reviews, or project proposals submitted through our web forms are treated as non-confidential unless protected by a mutually executed Non-Disclosure Agreement (NDA).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">6. Service Terms &amp; Milestones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Initial Deposit:</strong> A 50% upfront milestone deposit is required to confirm project scheduling and commence architectural design.</li>
              <li><strong>Final Balance:</strong> The remaining 50% balance is payable upon staging completion, prior to production server handover or domain DNS pointing.</li>
              <li><strong>Revisions:</strong> Standard proposals include two rounds of feedback revisions. Subsequent iterations beyond the agreed scope are billed at hourly rates.</li>
              <li><strong>Timelines:</strong> Delivery schedules are contingent upon prompt client provision of content, media assets, and milestone approvals.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">7. Maintenance and Support (AMC)</h2>
            <p>
              STELLAR offers optional annual and monthly maintenance plans starting at ₹999/month for clinics and ₹3,000/month for custom web applications. Uncontracted ad-hoc support is billed on an hourly time-and-materials basis.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">8. Confidentiality</h2>
            <p>
              STELLAR maintains strict confidentiality regarding proprietary client data, source code, and customer records. STELLAR is not liable for data compromises originating from third-party hosting providers chosen independently by the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">9. Limitation of Liability</h2>
            <p>
              In no event shall STELLAR or its officers be liable for indirect, incidental, punitive, or consequential losses, including loss of business profit or operational interruptions resulting from third-party gateway downtime or hosting provider outages.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">10. Cancellation and Refund Policy</h2>
            <p>
              Projects may be cancelled before initial development commencement subject to administrative fees. Work already approved and completed is non-refundable. Detailed conditions are codified in our dedicated <Link to="/cancellationsrefunds" className="text-stellar-cyan font-semibold underline">Cancellation &amp; Refund Policy</Link>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">11. Third-Party Integrations</h2>
            <p>
              STELLAR integrates third-party APIs (payment gateways, WhatsApp APIs, SMS aggregators, Google Maps). STELLAR does not control and is not liable for upstream policy changes, API rate limiting, or downtime of these third-party services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">12. Modifications to Terms</h2>
            <p>
              STELLAR reserves the right to revise these Terms at any time. Continued usage of our website or retained services constitutes binding consent to revised terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">13. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms shall be governed by and interpreted according to the laws of the Republic of India. Any legal actions or dispute proceedings shall be submitted exclusively to the competent courts of Lucknow or Hyderabad, India.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-stellar-dark">14. Contact Information</h2>
            <p>For inquiries regarding these Terms and Conditions:</p>
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200 space-y-1 text-sm font-medium">
              <p>• Email: <a href="mailto:support@stellarweb.in" className="text-stellar-cyan font-bold hover:underline">support@stellarweb.in</a></p>
              <p>• Phone: +91 90147 57379</p>
              <p>• Address: Hyderabad &amp; Lucknow, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
