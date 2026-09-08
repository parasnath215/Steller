import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: "Meet Ruthik Madasu – The Visionary Behind STELLAR",
      excerpt: "🚀 Meet the Founder: When you think of STELLAR, you think of innovation, speed, and websites that actually convert. Behind this vision is Ruthik Madasu...",
      date: "August 4, 2025",
      category: "Agency Insights",
      author: "STELLAR Team",
    },
    {
      title: "Why Your Website Must Load Under 3 Seconds",
      excerpt: "Every second matters online. If your website takes more than 3 seconds to load, most visitors simply leave. Learn the architecture behind sub-3s latency.",
      date: "August 2, 2025",
      category: "Performance & SEO",
      author: "Dev Team",
    },
    {
      title: "We’re Now a Top-Rated Website Developer on Upwork! 🌟",
      excerpt: "💥 Big News! STELLAR just hit a huge milestone — we’ve officially been recognized as a Top-Rated Website Developer on Upwork, the world’s largest platform.",
      date: "April 16, 2025",
      category: "Milestones",
      author: "Ruthik Madasu",
    },
    {
      title: "Local SEO for Small Businesses: How to Win Clients in Your City in 2025",
      excerpt: "You don’t need to be viral. You just need to show up where it matters — in your city’s search results. Why Local SEO = Your Most Powerful Lead Driver.",
      date: "May 10, 2025",
      category: "Digital Marketing",
      author: "SEO Lead",
    },
    {
      title: "How to Choose the Right Website Development Company in Hyderabad",
      excerpt: "🏙️ Hyderabad is booming with digital startups — but how do you find the right team to build your website? Step 1: Know What You Truly Need...",
      date: "April 16, 2025",
      category: "Tech Guides",
      author: "STELLAR Tech",
    },
    {
      title: "Website Development Roadmap: Strategy & Execution Guide",
      excerpt: "🚀 Planning to build a high-performance web product? Here’s what you need to plan before development — from architecture to scale.",
      date: "April 7, 2025",
      category: "Planning & Strategy",
      author: "Strategy Desk",
    },
    {
      title: "Top 7 Reasons Your Business Needs a Custom Website in 2025",
      excerpt: "✨ Tempted by cheap website templates? Here’s why a custom website will always win in the long run — especially in 2025.",
      date: "April 7, 2025",
      category: "Architecture",
      author: "Design Team",
    },
    {
      title: "How STELLAR Helped a Startup Scale with Website & Branding – A Real Story",
      excerpt: "✨ From zero to online hero — see how STELLAR turned a simple idea into a real digital brand. Case study on Gonourishy.com.",
      date: "April 7, 2025",
      category: "Case Studies",
      author: "Client Success",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-stellar-dark shadow-sm text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Official Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stellar-dark tracking-tight">
            Articles &amp; Industry Insights
          </h1>
          <p className="text-base sm:text-lg text-stellar-muted max-w-2xl mx-auto">
            Practical advice on web development, sub-3-second load speed, local SEO, and startup scaling from the STELLAR engineering team.
          </p>

          <div className="pt-2 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-stellar-cyan transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-stellar-dark font-semibold">Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-[#FAFAFA] rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00C2CB]/40 hover:bg-white transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-semibold text-gray-500">
                  <span className="px-3 py-1 rounded-full bg-[#00C2CB]/10 text-stellar-cyan font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stellar-dark mb-3 group-hover:text-stellar-cyan transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-stellar-muted leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                <span className="text-gray-500">By {post.author}</span>
                <span className="text-stellar-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
