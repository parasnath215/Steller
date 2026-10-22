import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

export default function QueriesPage({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Agency' },
    { id: 'tech', label: 'Tech & Speed' },
    { id: 'delivery', label: 'Project Scope & Delivery' },
  ];

  const faqs = [
    {
      category: 'general',
      q: "What services does STELLAR provide?",
      a: "STELLAR provides high-performance website design and development, custom mobile applications, enterprise software/ERP systems, e-commerce stores, business-grade hosting, automated daily backups, and ongoing AMC maintenance support.",
    },
    {
      category: 'general',
      q: "Hiring a digital agency vs hiring in-house: What is the difference?",
      a: "Hiring an in-house team requires significant overhead: recruitment, salaries, employee benefits, hardware, and continuous training. A digital agency gives you instant access to senior designers, full-stack engineers, and DevOps architects at a fraction of the cost, with guaranteed delivery timelines.",
    },
    {
      category: 'tech',
      q: "Why is the 3-second load speed policy so important?",
      a: "Every additional second of load time drops conversions by up to 20%. Search engines like Google prioritize fast-loading pages in their organic ranking algorithms. At STELLAR, we benchmark every database query, script, and image so the entire page renders in under 3 seconds.",
    },
    {
      category: 'tech',
      q: "How often should I update my website?",
      a: "A website that remains static with outdated information loses user trust and SEO ranking. Regular updates to product listings, case studies, announcements, and security patches keep your digital presence healthy. Our STELLAR Care Plan handles all updates for you seamlessly.",
    },
    {
      category: 'tech',
      q: "Can STELLAR migrate my existing website without downtime?",
      a: "Yes. We execute zero-downtime DNS and database migrations. Your old site remains live for visitors while we configure the staging environment, test functionality, and seamlessly switch traffic without broken links or lost data.",
    },
    {
      category: 'delivery',
      q: "How does STELLAR handle project scoping and deliverables?",
      a: "At STELLAR, every project begins with a comprehensive technical discovery phase where architecture, UI wireframes, database schemas, and milestone roadmaps are documented and agreed upon before a single line of code is written.",
    },
    {
      category: 'delivery',
      q: "What are the project milestone and handover terms?",
      a: "Projects follow structured sprint milestones. Upon completion of QA testing and client sign-off, full source code ownership, repository credentials, and production deployment keys are handed over with comprehensive documentation.",
    },
    {
      category: 'general',
      q: "What digital channels should my business be using?",
      a: "Depending on your target audience, a fast conversion-focused website paired with local Google Search presence, automated WhatsApp enquiry routing, and targeted social media channels yields the highest return on investment.",
    },
  ];

  const filteredFaqs = faqs.filter(f => {
    const matchesCategory = activeTab === 'all' || f.category === activeTab;
    const matchesSearch = f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Knowledge Base &amp; FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight">
            Client Queries &amp; FAQs
          </h1>
          <p className="text-base sm:text-lg text-stellar-muted max-w-2xl mx-auto">
            Find immediate answers to common questions about our technical capabilities, project delivery speed, portfolio, and support.
          </p>

          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Queries</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search questions by keyword (e.g. speed, portfolio, migration, support)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:border-stellar-cyan focus:ring-2 focus:ring-stellar-cyan/25 transition-all"
          />
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === cat.id
                  ? 'bg-stellar-dark text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#00C2CB]/40 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-stellar-dark flex items-center justify-between gap-4 hover:text-stellar-cyan transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-stellar-cyan' : 'text-gray-400'}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-stellar-muted leading-relaxed border-t border-gray-100 pt-4 bg-[#FAFAFA]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-gray-400">
              No matching questions found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Contact Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0D0D0D] text-white text-center space-y-4 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-stellar-spectrum"></div>
          <h3 className="text-xl font-bold text-white">Can’t find your question?</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Our engineering team is always ready to answer any custom technical or scope inquiry.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link to="/contact" className="btn-primary text-sm font-bold">
              Contact our team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
