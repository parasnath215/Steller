import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `Hi STELLAR Team!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919014757379?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 text-stellar-dark font-bold text-xs uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Direct Access</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-stellar-muted max-w-2xl mx-auto">
            Have a project in mind or need technical support? We’re waiting to help you build and scale.
          </p>

          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Contact</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 3 Contact Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Chat with us */}
          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 hover:border-[#00C2CB]/30 hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#00C2CB]/10 text-stellar-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stellar-dark mb-2">Chat with us</h3>
            <p className="text-sm text-stellar-muted leading-relaxed mb-4">
              We’re waiting to help you every Monday-Friday from 11 am to 12 am IST easily.
            </p>
            <a
              href="https://wa.me/919014757379"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-stellar-cyan hover:underline inline-flex items-center gap-1"
            >
              Start WhatsApp Chat &rarr;
            </a>
          </div>

          {/* Card 2: Give us a call */}
          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 hover:border-[#00C2CB]/30 hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stellar-dark mb-2">Give us a call</h3>
            <p className="text-sm text-stellar-muted leading-relaxed mb-4">
              Give us a ring at <span className="font-bold text-stellar-dark">+91 90147 57379</span>. Every Monday-Friday from 12 pm to 12 am.
            </p>
            <a
              href="tel:+919014757379"
              className="text-sm font-bold text-emerald-600 hover:underline inline-flex items-center gap-1"
            >
              Call +91 9014757379 &rarr;
            </a>
          </div>

          {/* Card 3: Email Us */}
          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-gray-100 hover:border-[#00C2CB]/30 hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#A277FF]/10 text-stellar-lilac flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stellar-dark mb-2">Email Us</h3>
            <p className="text-sm text-stellar-muted leading-relaxed mb-4">
              Drop us an email at <span className="font-bold text-stellar-dark">support@stellarweb.in</span> and you'll receive a reply within 24 hours.
            </p>
            <a
              href="mailto:support@stellarweb.in"
              className="text-sm font-bold text-stellar-lilac hover:underline inline-flex items-center gap-1"
            >
              Send an Email &rarr;
            </a>
          </div>

        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-stellar-cyan uppercase tracking-wider">
                We're Here For You
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stellar-dark">
                Fill out this form, We‘ll quickly get back to you
              </h2>
              <p className="text-base text-stellar-muted leading-relaxed">
                Tell us how we can help and we’ll get in touch within the next 24 hours with an expert solution blueprint and estimate.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-stellar-muted">
                <div className="w-8 h-8 rounded-lg bg-[#00C2CB]/10 flex items-center justify-center text-stellar-cyan flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Headquartered in <strong>Hyderabad</strong> &amp; <strong>Lucknow</strong>, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-stellar-muted">
                <div className="w-8 h-8 rounded-lg bg-[#00C2CB]/10 flex items-center justify-center text-stellar-cyan flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Support Availability: Monday – Friday, 11:00 AM – 12:00 AM IST</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FAFAFA] p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stellar-dark">Thank You!</h3>
                <p className="text-sm text-stellar-muted max-w-md mx-auto">
                  Your message has been initiated. Our client success manager will reply via WhatsApp/Email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary text-sm font-semibold mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-stellar-dark mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stellar-dark mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stellar-dark mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stellar-dark mb-1.5">
                    Write Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write us your question or project requirements here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 font-bold text-base flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
