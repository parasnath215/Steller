import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function RefundsPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Policy Guidelines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stellar-dark tracking-tight">
            Cancellations &amp; Refunds Policy
          </h1>
          <p className="text-xs text-gray-400 font-mono">
            Effective Date: 13/10/2025 • Company: STELLAR
          </p>
          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Cancellations &amp; Refunds</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 text-sm sm:text-base text-stellar-muted leading-relaxed">
          
          <p className="text-base text-stellar-dark font-medium leading-relaxed">
            At <strong>STELLAR</strong>, we’re committed to delivering high-quality digital solutions and transparent business practices. This Refund and Cancellation Policy outlines the exact terms under which cancellations and refunds are processed for our design, development, and hosting services.
          </p>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">1. Service Initiation and Payments</h2>
            <p>
              Once a client confirms a project with STELLAR, an advance or milestone payment is required to begin the work. This advance payment confirms the client’s intent to proceed and covers resource allocation, planning, wireframing, and infrastructure setup. By making a payment, the client agrees to the scope, timelines, and deliverables mentioned in the proposal or quotation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-stellar-dark">2. Cancellation Policy</h2>
            <p>Clients may request project cancellation under the following structured terms:</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-stellar-cyan">
              <div>
                <h4 className="font-bold text-stellar-dark">Before Work Commencement:</h4>
                <p className="text-sm">If cancellation is requested before any design or engineering work has started, <strong>80% of the amount paid will be refunded</strong> (20% is retained as administrative and project onboarding fee).</p>
              </div>

              <div>
                <h4 className="font-bold text-stellar-dark">After Work Commencement:</h4>
                <p className="text-sm">If any design, development, wireframing, or cloud setup work has commenced, the advance payment is <strong>non-refundable</strong> as dedicated engineering resources have already been deployed.</p>
              </div>

              <div>
                <h4 className="font-bold text-stellar-dark">Post Project Delivery:</h4>
                <p className="text-sm">Once the website or software system has been deployed to live servers or administrative credentials handed over, <strong>no cancellation or refund is possible</strong>.</p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">3. Refund Policy Conditions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Duplicate Payment:</strong> If a client accidentally processes a duplicate transaction, the excess funds will be refunded within 7 working days.</li>
              <li><strong>Non-Delivery Due to STELLAR’s Fault:</strong> If STELLAR fails to deliver agreed milestones due to internal technical impediments (unrelated to client content delays), a proportional refund will be evaluated.</li>
              <li><strong>Service Dissatisfaction:</strong> Since all builds follow staged milestone review rounds with client approval at each step, dissatisfaction raised after explicit approval is not eligible for refund.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">4. Timelines for Refund Processing</h2>
            <p>
              All approved refunds are officially processed within <strong>7–10 business days</strong> from the formal confirmation date. Refunds will be remitted exclusively via the original mode of payment (bank transfer / gateway reversal).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">5. No Refund on Digital Deliverables</h2>
            <p>
              Due to the open and non-revocable nature of digital products — including compiled source code, UI Figma prototypes, domain acquisitions, and third-party software licenses — delivered digital assets cannot be returned or refunded once accessed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">6. Change Requests &amp; Scope Expansion</h2>
            <p>
              Any feature requests or architectural adjustments outside the confirmed scope sheet are treated as independent change orders. Project delays resulting from client unresponsiveness or late content submission do not constitute valid grounds for refund requests.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">7. Project Pauses and Dormancy</h2>
            <p>
              If a project remains inactive for more than <strong>30 consecutive days</strong> due to lack of client communication, assets, or feedback, it is placed in dormant status. Reactivating a dormant project requires a reactivation fee. No refunds will be provided for abandoned projects.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-stellar-dark">8. Dispute Resolution Process</h2>
            <p>
              All formal cancellation or refund inquiries must be submitted in writing via email to <strong>support@stellarweb.in</strong> with the subject line:
            </p>
            <div className="bg-gray-100 px-4 py-2 rounded-lg font-mono text-xs text-stellar-dark">
              Refund Request – [Your Project Name / Invoice ID]
            </div>
            <p>STELLAR will review and provide a written resolution within 7 working days.</p>
          </section>

          <section className="space-y-2 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-stellar-dark">9. Contact &amp; Escalation</h2>
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200 space-y-1 text-sm font-medium">
              <p>• Email: <a href="mailto:support@stellarweb.in" className="text-stellar-cyan font-bold hover:underline">support@stellarweb.in</a></p>
              <p>• Website: <a href="https://stellarweb.in" className="text-stellar-cyan hover:underline">https://stellarweb.in</a></p>
              <p>• Presence: Hyderabad | Lucknow | Global</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
