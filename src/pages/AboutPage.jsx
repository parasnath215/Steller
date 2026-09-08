import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ChevronDown, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Users, 
  Target, 
  Lightbulb, 
  Compass, 
  ArrowRight 
} from 'lucide-react';

export default function AboutPage({ onOpenQuote }) {
  const [openFaq, setOpenFaq] = useState(0);

  const partners = [
    "SANTUSHTI", "MAHARAJA FOODS", "MEDIGROW", "BHASIN AROMATICS", 
    "RAHUL JEWELLERS", "TRINITY SCHOOLS", "AQUSNASH", "RAJJEWELLERS", 
    "BHAVESHCHEMLABS", "BRIGHTWAYINC"
  ];

  const principles = [
    {
      title: "Passion-Driven Execution",
      desc: "We care deeply about what we build. Every project gets our full focus, energy, and attention to detail — no shortcuts.",
      icon: Target,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Quality Without Compromise",
      desc: "From design to deployment, we focus on clean code, strong performance, and long-term reliability in everything we deliver.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Creative & Skilled Team",
      desc: "Our team blends creativity with technical expertise to design and deliver solutions that actually work in the real world.",
      icon: Users,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Customer-Centric Approach",
      desc: "Your success comes first. We listen, adapt, and build solutions aligned with your goals — not assumptions.",
      icon: Compass,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Innovation with Purpose",
      desc: "We don’t innovate for hype. We use the right tools, technologies, and ideas to solve real business problems efficiently.",
      icon: Lightbulb,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Simple & Intuitive Experiences",
      desc: "We believe great digital products should be easy to use. Simplicity, clarity, and usability guide every interface we design.",
      icon: Zap,
      color: "text-cyan-600 bg-cyan-50",
    },
  ];

  const faqs = [
    {
      q: "What makes STELLAR different from other digital agencies?",
      a: "STELLAR is built as a digital systems partner, not a short-term service provider. We focus on performance, security, scalability, and long-term support, not just design delivery. Every project follows a structured process and is closely overseen by senior team members to ensure quality and reliability from day one.",
    },
    {
      q: "What digital services does STELLAR specialize in?",
      a: "STELLAR specializes in high-performance website development, custom web and app development, e-commerce platforms and integrations, business hosting, security, automated backups, zero-downtime website and server migration, as well as AMC and long-term technical support.",
    },
    {
      q: "Is STELLAR suitable for startups, small businesses, and enterprises?",
      a: "Yes. STELLAR works with startups, small businesses, and growing enterprises by offering flexible plans and scalable digital solutions. Our systems are designed to grow with your business — so you don’t need to rebuild your tech stack every time you scale.",
    },
    {
      q: "How does STELLAR approach website and software development?",
      a: "We follow a performance-first and security-first approach. Every project starts with understanding business goals, followed by clean design, optimized development, testing, and post-launch support. Our focus is on speed, usability, SEO readiness, and long-term stability.",
    },
    {
      q: "Does STELLAR provide support after project delivery?",
      a: "Absolutely. STELLAR offers AMC and ongoing support plans that include updates, performance monitoring, backups, security checks, and technical assistance. We believe real partnerships start after the launch, not before.",
    },
    {
      q: "How does STELLAR ensure website speed, security, and reliability?",
      a: "We use optimized code, performance-focused hosting, caching strategies, regular backups, SSL security, and monitoring tools. Our goal is to deliver websites and apps that load fast, stay secure, and remain stable under real-world usage.",
    },
    {
      q: "How does STELLAR determine project estimates and deliverables?",
      a: "STELLAR follows transparent, scope-based estimation. Deliverables are defined by architectural complexity, feature sets, performance requirements, and timelines. We provide structured milestone roadmaps and full deliverables clarity with no unexpected surprises.",
    },
    {
      q: "Can STELLAR handle website migrations and upgrades?",
      a: "Yes. STELLAR provides zero-downtime website and server migrations, including platform upgrades, performance improvements, and security enhancements. We ensure data integrity, SEO continuity, and minimal disruption during the transition.",
    },
    {
      q: "Why should businesses choose STELLAR as their digital partner?",
      a: "Businesses choose STELLAR for clarity, accountability, and results. We don’t just build digital products — we build systems that support business growth, reduce technical risk, and deliver consistent performance over time.",
    },
    {
      q: "How do I get started with STELLAR?",
      a: "Getting started is simple. Share your requirements through our website or contact us directly. Our team will understand your goals, suggest the right solution, and provide a clear roadmap with timelines and milestone deliverables.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>About STELLAR Agency</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-stellar-muted max-w-2xl mx-auto">
            From start-ups to Fortune 500, we partner with brands of all sizes to build fast, secure, and conversion-ready platforms.
          </p>

          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* Brand Partner Ticker */}
      <div className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            From start-ups to Fortune 500, we partner with brands of all sizes
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {partners.map((brand, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-xl bg-gray-50 border border-gray-200/70 text-xs sm:text-sm font-extrabold text-gray-600 tracking-wider hover:text-stellar-cyan hover:border-[#00C2CB]/40 hover:bg-white transition-all shadow-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Narrative */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2CB]/10 text-stellar-cyan text-xs font-bold">
              <span>Next-Gen Digital Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stellar-dark tracking-tight leading-tight">
              Leading Website &amp; App Development Company in India
            </h2>
            <p className="text-base text-stellar-muted leading-relaxed">
              <strong className="text-stellar-dark">STELLAR</strong> is a trusted digital agency empowering businesses with high-performance website development, app development, and custom software solutions. Based in India, we deliver fast, secure, and scalable digital products that help brands grow online — from startups to enterprise clients.
            </p>
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border-l-4 border-stellar-cyan space-y-2">
              <h4 className="font-bold text-stellar-dark text-base">Our Core Belief is Simple:</h4>
              <p className="text-sm text-stellar-muted italic">
                “Technology should drive business growth, not just look good. We focus on performance, reliability, and measurable outcomes.”
              </p>
            </div>
            <div className="pt-2">
              <h4 className="font-bold text-lg text-stellar-dark mb-1">More Speed, Less Latency</h4>
              <p className="text-sm text-stellar-muted leading-relaxed">
                Performance isn’t a feature — it’s a necessity. Fast load times and optimized experiences are key to better SEO rankings, higher engagement, and more conversions. We ensure every website and app we create meets performance benchmarks that matter to search engines and users alike.
              </p>
            </div>
            <div>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 font-bold text-sm">
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Stats Badges Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            {[
              { num: "100+", label: "Successful Clients", desc: "Delivered across diverse industries" },
              { num: "99.9%", label: "Uptime & Performance Focus", desc: "Monitored round the clock" },
              { num: "50+", label: "Active Retainers & AMC", desc: "Trusted for ongoing maintenance" },
              { num: "5+ yrs", label: "Industry Experience", desc: "Deep architectural craftsmanship" },
            ].map((st, i) => (
              <div key={i} className="bg-[#FAFAFA] p-6 sm:p-8 rounded-3xl border border-gray-100 hover:border-[#00C2CB]/30 hover:bg-white hover:shadow-xl transition-all text-center group">
                <p className="text-4xl sm:text-5xl font-extrabold text-stellar-cyan mb-2 group-hover:scale-105 transition-transform">
                  {st.num}
                </p>
                <h4 className="font-bold text-stellar-dark text-base mb-1">{st.label}</h4>
                <p className="text-xs text-gray-500">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Principles */}
      <section className="py-20 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stellar-dark">
              The principles behind everything we build
            </h2>
            <p className="text-base text-stellar-muted">
              Our culture and technical standards guarantee predictability, speed, and client confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((pr, idx) => {
              const Icon = pr.icon;
              return (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#00C2CB]/30 hover:-translate-y-1 transition-all">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pr.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stellar-dark mb-2">{pr.title}</h3>
                  <p className="text-sm text-stellar-muted leading-relaxed">{pr.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2CB]/10 text-stellar-cyan text-xs font-bold">
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stellar-dark">
            What makes STELLAR different from other digital agencies?
          </h2>
          <p className="text-base text-stellar-muted">
            Frequently asked questions about our engineering process, deliverables, security, and long-term partnership.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-stellar-dark flex items-center justify-between gap-4 hover:text-stellar-cyan transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-stellar-cyan' : 'text-gray-400'}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-stellar-muted leading-relaxed border-t border-gray-100 pt-4 bg-[#FAFAFA]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 text-center p-8 rounded-2xl bg-[#FAFAFA] border border-gray-200 space-y-4">
          <h3 className="text-xl font-bold text-stellar-dark">Still, have any questions?</h3>
          <p className="text-sm text-stellar-muted">We’re available Monday to Friday from 11 am to 12 am IST to discuss your project.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-primary text-sm font-bold">
              Contact us
            </Link>
            <button onClick={onOpenQuote} className="btn-dark text-sm font-bold">
              Get an instant quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
