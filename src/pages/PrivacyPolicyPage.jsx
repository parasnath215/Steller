import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Legal Document</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stellar-dark tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400 font-mono">
            Last Updated: 30/12/2024 • Effective Date: Immediate
          </p>
          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-stellar-muted leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">1. Introduction</h2>
            <p>
              At <strong>STELLAR</strong>, we respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (<strong>www.stellarweb.in</strong>). By accessing or using our website, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">2. Information We Collect</h2>
            <h3 className="text-lg font-bold text-stellar-dark">2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when submitting inquiries, quote requests, or contact forms, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and job designation</li>
              <li>Email address</li>
              <li>Phone or WhatsApp number</li>
              <li>Business/Brand details</li>
              <li>Project scope specifications and requirements</li>
            </ul>

            <h3 className="text-lg font-bold text-stellar-dark pt-2">2.2 Non-Personal Information</h3>
            <p>When you browse our website, automated systems may collect diagnostic information such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browser type and version</li>
              <li>IP address and approximate geolocation</li>
              <li>Device type and operating system</li>
              <li>Pages viewed, referral source, and session duration</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">3. How We Use Your Information</h2>
            <p>We process the information collected for the following legitimate purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide, deploy, and manage our digital agency services</li>
              <li>To communicate regarding your project quotes, contracts, or technical tickets</li>
              <li>To enhance website performance, security, and user experience</li>
              <li>To send service updates and notices where explicitly consented</li>
              <li>To comply with regulatory, tax, and legal requirements</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">4. Sharing Your Information</h2>
            <p>
              <strong>We do not sell, trade, or rent your personal information to third parties.</strong> We only share minimal necessary information with trusted third-party providers who assist us in hosting, payment processing, or server infrastructure under strict non-disclosure obligations, or when required by judicial process.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">5. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and session tokens to remember user preferences, facilitate analytics, and maintain security. You can manage or disable cookie permissions in your browser settings at any time without terminating access to our core content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">6. Data Security</h2>
            <p>
              We implement industry-standard SSL encryption, firewall policies, restricted database access, and continuous monitoring to guard your personal data against unauthorized disclosure or loss.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">7. Third-Party Links</h2>
            <p>
              Our portfolio may link to client websites or external services. We are not responsible for the independent privacy practices of external domains. We encourage users to inspect third-party privacy notices before providing sensitive data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">8. Your Rights</h2>
            <p>
              Under applicable Indian privacy standards and international data frameworks, you have the right to request access, correction, or deletion of your stored contact records by notifying our data officer at <strong>support@stellarweb.in</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">9. Children's Privacy</h2>
            <p>
              Our website is intended for business professionals and is not directed at children under the age of 13. We do not knowingly retain information belonging to minors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">10. Changes to This Privacy Policy</h2>
            <p>
              STELLAR reserves the right to amend this document periodically. Updates are published directly on this URL with an updated revision date.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-stellar-dark">11. Contact Us</h2>
            <p>For questions or requests concerning this Privacy Policy, please reach us at:</p>
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200 space-y-2 text-sm font-medium">
              <p>• Primary Email: <a href="mailto:support@stellarweb.in" className="text-stellar-cyan font-bold hover:underline">support@stellarweb.in</a></p>
              <p>• Alternate Email: <a href="mailto:admin@stellarweb.in" className="text-stellar-cyan hover:underline">admin@stellarweb.in</a></p>
              <p>• Telephone / WhatsApp: <a href="tel:+919014757379" className="text-stellar-cyan hover:underline">+91 90147 57379</a></p>
              <p>• Physical Presence: Hyderabad &amp; Lucknow, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
