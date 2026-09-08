export const portfolioProjects = [
  {
    id: "medcare-os",
    title: "Multi-Speciality Clinic OS & Management Portal",
    client: "Healthcare & Clinic Solution",
    category: "Healthcare & Clinics",
    categoryKey: "healthcare",
    isFeatured: true,
    tagline: "End-to-end clinic management portal with automated doctor appointment booking, digital prescriptions, and instant WhatsApp alerts.",
    bannerGradient: "from-blue-600 via-indigo-600 to-cyan-500",
    badge: "HIPAA Compliant",
    speedScore: "99/100",
    highlightMetric: "+310% Patient Booking Inflow",
    timeline: "3 Weeks",
    techStack: ["React 18", "Tailwind CSS", "Node.js", "PostgreSQL", "Twilio WhatsApp API", "AWS CloudFront"],
    challenge: "Traditional clinics often rely on manual appointment registers, causing prolonged waiting room times and lost patient histories.",
    solution: "We engineered a sub-second, mobile-first clinic web application featuring automated SMS/WhatsApp appointment reminders, real-time doctor slot availability, secure digital prescription vaults, and doctor schedule management.",
    features: [
      "Instant 3-step appointment booking without mandatory account creation",
      "Real-time doctor calendar slot sync with cancellation auto-fill",
      "Automated WhatsApp confirmation & 2-hour pre-visit reminders",
      "Encrypted patient health records portal with QR-code clinic check-in",
      "Interactive multi-doctor and multi-speciality department filters"
    ],
    results: [
      { metric: "+310%", label: "Online Bookings in 60 Days" },
      { metric: "-68%", label: "Patient No-Show Rate" },
      { metric: "0.9s", label: "Page Load Time on Mobile" },
      { metric: "100%", label: "HIPAA & Data Privacy Compliance" }
    ],
    testimonial: {
      quote: "Transformed chaotic front-desk operations into a streamlined digital clinic. Patients love how effortless booking has become, and no-shows dropped immediately.",
      author: "Senior Healthcare Practitioner",
      role: "Medical Director"
    }
  },
  {
    id: "apex-logistics",
    title: "Freight Dispatch & Supply Chain Logistics SaaS",
    client: "SaaS & Cloud Platform",
    category: "SaaS & Web Apps",
    categoryKey: "saas",
    isFeatured: true,
    tagline: "Cloud-native fleet tracking, cargo dispatch automation, and automated invoice reconciliation platform.",
    bannerGradient: "from-slate-900 via-indigo-950 to-blue-900",
    badge: "Enterprise SaaS",
    speedScore: "98/100",
    highlightMetric: "45,000+ Daily Dispatches",
    timeline: "5 Weeks",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "WebSockets", "FastAPI", "Redis", "Docker"],
    challenge: "Managing active interstate freight fleets through fragmented spreadsheets leads to communication bottlenecks and inaccurate billing.",
    solution: "Delivered an enterprise dispatch control tower dashboard with real-time GPS telemetry, geofencing event triggers, instant automated bill-of-lading generation, and customer track-and-trace links.",
    features: [
      "Live interactive fleet map with sub-second WebSocket telemetry updates",
      "Automated load matching and trip milestone verification",
      "Client-facing self-service tracking portal with SMS notifications",
      "Instant PDF invoice and compliance document generation",
      "Role-based access control for drivers, dispatchers, and finance teams"
    ],
    results: [
      { metric: "45K+", label: "Daily Shipments Monitored" },
      { metric: "-85%", label: "Manual Tracking Inquiries" },
      { metric: "99.98%", label: "Platform Uptime SLA" },
      { metric: "+40%", label: "Faster Billing Reconciliation" }
    ],
    testimonial: {
      quote: "The reliability and speed of this platform are world-class. Operations can track thousands of shipments in real-time with zero lag or crash issues.",
      author: "Supply Chain Architect",
      role: "VP Operations"
    }
  },
  {
    id: "velox-ecommerce",
    title: "Luxury Direct-to-Consumer Headless Storefront",
    client: "E-Commerce & Retail System",
    category: "E-Commerce & Retail",
    categoryKey: "ecommerce",
    isFeatured: true,
    tagline: "Headless ultra-fast shopping storefront with sub-second checkout, currency switcher, and omnichannel inventory.",
    bannerGradient: "from-amber-600 via-rose-700 to-purple-900",
    badge: "Headless Commerce",
    speedScore: "100/100",
    highlightMetric: "+240% Checkout Conversion",
    timeline: "3 Weeks",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe API", "Razorpay", "Algolia Search", "Vercel Edge"],
    challenge: "Legacy e-commerce stores often suffer sluggish mobile load times, high checkout drop-offs, and desynchronized stock counts.",
    solution: "Engineered a bespoke headless e-commerce experience with instantaneous page transitions, instant search suggestions, frictionless 1-click checkout, and automated multi-warehouse stock sync.",
    features: [
      "Sub-second Algolia search with instant fuzzy filtering and predictive suggestions",
      "Frictionless 1-click Express Checkout with Apple Pay, Google Pay, UPI & Cards",
      "Dynamic bundle pricing engine and customized cross-sell upsells",
      "Automated stock level synchronization across 3 distribution hubs",
      "Optimized WebP/AVIF responsive image pipeline for luxury visuals"
    ],
    results: [
      { metric: "+240%", label: "Checkout Conversion Lift" },
      { metric: "0.8s", label: "First Contentful Paint" },
      { metric: "-52%", label: "Cart Abandonment Drop" },
      { metric: "₹1.4Cr+", label: "Quarterly Volume Handled" }
    ],
    testimonial: {
      quote: "The site is lightning fast, feels like a top-tier digital product, and sales conversion shot up immediately after launch.",
      author: "E-Commerce Brand Director",
      role: "D2C Founder"
    }
  },
  {
    id: "finpulse-analytics",
    title: "Institutional Wealth & Trading Analytics Terminal",
    client: "Fintech & Enterprise Architecture",
    category: "Fintech & Enterprise",
    categoryKey: "enterprise",
    isFeatured: true,
    tagline: "Ultra-responsive financial data visualization terminal for equity portfolio managers and wealth advisors.",
    bannerGradient: "from-emerald-700 via-teal-800 to-slate-900",
    badge: "Fintech Terminal",
    speedScore: "99/100",
    highlightMetric: "Sub-100ms Live Latency",
    timeline: "4 Weeks",
    techStack: ["React", "D3.js", "Tailwind CSS", "WebSockets", "Go Backend", "TimescaleDB"],
    challenge: "Financial desks require live sub-second tick feeds, complex technical charts, and scenario simulation without browser lag or memory leaks.",
    solution: "Built a hardware-accelerated charting suite with canvas-rendered technical indicators, live price order book feeds, and automated tax statement downloads.",
    features: [
      "High-frequency tick data charting with 60 FPS smooth rendering",
      "Dynamic portfolio rebalancing calculator and VAR risk simulation",
      "Bank-grade 256-bit encryption with biometric authentication integration",
      "Exportable auditor-ready P&L reports and tax balance sheets"
    ],
    results: [
      { metric: "<100ms", label: "Real-Time WebSocket Latency" },
      { metric: "₹450Cr+", label: "Assets Under Monitoring" },
      { metric: "100%", label: "Zero UI Freeze or Memory Leaks" },
      { metric: "5/5", label: "User Satisfaction Rating" }
    ],
    testimonial: {
      quote: "The chart responsiveness and live telemetry achieved is on par with institutional trading software, right inside a clean web browser.",
      author: "Quantitative Portfolio Lead",
      role: "Managing Director"
    }
  },
  {
    id: "edusphere-lms",
    title: "Interactive Learning Academy & Exam Platform",
    client: "EdTech & Learning System",
    category: "SaaS & Web Apps",
    categoryKey: "saas",
    isFeatured: false,
    tagline: "Modern online academy platform with course progress trackers, interactive video quizzes, and certificate generation.",
    bannerGradient: "from-blue-700 via-violet-800 to-fuchsia-900",
    badge: "EdTech Platform",
    speedScore: "97/100",
    highlightMetric: "85,000+ Active Students",
    timeline: "4 Weeks",
    techStack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Mux Video", "AWS S3"],
    challenge: "Video buffering issues, fragmented assignment submissions, and manual certificate distribution cause student drop-offs.",
    solution: "Designed an engaging LMS featuring adaptive video streaming, gamified quiz modules, automated tamper-proof PDF certifications, and mentor discussion boards.",
    features: [
      "Adaptive bitrate video player with bookmarking and 1.5x/2x playback",
      "Interactive mid-lecture quizzes with instant score tracking",
      "One-click cryptographically verifiable course completion certificates",
      "Comprehensive teacher analytics dashboard for student retention"
    ],
    results: [
      { metric: "85K+", label: "Enrolled Active Students" },
      { metric: "+92%", label: "Course Completion Rate" },
      { metric: "4.9/5", label: "Student Feedback Score" },
      { metric: "Zero", label: "Buffering Bottlenecks" }
    ],
    testimonial: {
      quote: "Student retention skyrocketed after launch. The sleek UI and intuitive quiz format keep learners engaged every single day.",
      author: "Digital Learning Specialist",
      role: "Academic Operations"
    }
  },
  {
    id: "aura-ai",
    title: "Document Intelligence & AI Automation Suite",
    client: "AI & Workflow Automation",
    category: "AI & Automations",
    categoryKey: "ai",
    isFeatured: false,
    tagline: "Intelligent document parsing and enterprise workflow automation platform powered by custom LLM agents.",
    bannerGradient: "from-purple-900 via-indigo-900 to-pink-900",
    badge: "AI & Automations",
    speedScore: "99/100",
    highlightMetric: "12x Faster Processing",
    timeline: "4 Weeks",
    techStack: ["React", "Tailwind CSS", "Python FastAPI", "LangChain", "OpenAI API", "PostgreSQL pgvector"],
    challenge: "Teams spend thousands of hours manually reviewing compliance in commercial contracts, tax forms, and vendor invoices.",
    solution: "Engineered a secure dashboard where teams upload hundreds of legal documents and receive instant clause extraction, risk scores, and anomaly warnings.",
    features: [
      "Batch PDF/Word upload with multi-threaded vector parsing",
      "Automated discrepancy detection and risk clause flagging",
      "Exportable summary executive briefing reports",
      "Strict zero-data-retention compliance architecture"
    ],
    results: [
      { metric: "12x", label: "Speedup in Audit Review" },
      { metric: "99.4%", label: "Extraction Accuracy" },
      { metric: "15,000+", label: "Contracts Scanned per Month" },
      { metric: "-70%", label: "Manual Data Entry Overhead" }
    ],
    testimonial: {
      quote: "The interface is extraordinarily intuitive, and the speed at which it processes 200-page contracts is a massive productivity boost.",
      author: "AI Engineering Lead",
      role: "Platform Director"
    }
  },
  {
    id: "pulse-fitness",
    title: "Club & Studio Membership Progressive Web App",
    client: "Healthcare & Wellness Platform",
    category: "Healthcare & Clinics",
    categoryKey: "healthcare",
    isFeatured: false,
    tagline: "Progressive web app for gym access, class reservations, trainer scheduling, and digital membership renewals.",
    bannerGradient: "from-rose-600 via-orange-600 to-amber-500",
    badge: "Progressive Web App",
    speedScore: "99/100",
    highlightMetric: "12,000+ Active Members",
    timeline: "2 Weeks",
    techStack: ["React", "PWA", "Tailwind CSS", "Razorpay Subscriptions", "Firebase", "QR Engine"],
    challenge: "Manual check-in bottlenecks, renewal phone calls, and overcrowded peak slots hamper member satisfaction.",
    solution: "Built an installable PWA with QR code turnstile check-in, real-time studio capacity tracker, workout class booking, and automatic subscription renewals.",
    features: [
      "Dynamic QR pass for physical turnstile access",
      "Instant class booking with real-time remaining slot counter",
      "Automated UPI and credit card recurring membership billing",
      "In-app push notifications for class reminders and trainer notes"
    ],
    results: [
      { metric: "12K+", label: "Active Mobile Members" },
      { metric: "+45%", label: "Membership Renewal Rate" },
      { metric: "0 Front-Desk", label: "Check-in Bottlenecks" },
      { metric: "100%", label: "Mobile-First Accessibility" }
    ],
    testimonial: {
      quote: "Members love opening their phone, scanning at the gate, and booking classes in 2 taps. It completely modernised operations.",
      author: "Fitness Network Manager",
      role: "Operations Director"
    }
  }
];

export const portfolioCategories = [
  { key: "all", label: "All Projects" },
  { key: "saas", label: "SaaS & Web Apps" },
  { key: "healthcare", label: "Healthcare & Clinics" },
  { key: "ecommerce", label: "E-Commerce & Retail" },
  { key: "enterprise", label: "Fintech & Enterprise" },
  { key: "ai", label: "AI & Automations" },
];
