import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      title: "Exceptional Experience!",
      text: "STELLAR transformed our online presence. The custom design they created was exactly what we envisioned, and their ongoing support has been stellar. Highly recommended for businesses looking for quality web development.",
      author: "Sridhar",
      role: "Founder",
      company: "BhaveshChemLabs",
      rating: 5,
      avatar: "S",
      color: "bg-blue-600",
    },
    {
      title: "Reliable and Fast",
      text: "STELLAR delivered our e-commerce site faster than expected, with no compromise on quality. The team was professional and communicated every step of the way.",
      author: "Tanveer",
      role: "Founder",
      company: "CityCabz",
      rating: 5,
      avatar: "T",
      color: "bg-purple-600",
    },
    {
      title: "Best Decision Ever",
      text: "Choosing STELLAR for our digital needs was the best decision we made. Their development expertise helped us create an intuitive website that has already boosted our sales.",
      author: "Razil",
      role: "Founder",
      company: "QuickRidez",
      rating: 5,
      avatar: "R",
      color: "bg-emerald-600",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00C2CB]/30 text-stellar-dark font-bold text-xs uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse"></span>
            <span>Clients Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stellar-dark tracking-tight">
            What users say about our hosting services
          </h2>

          <p className="text-base sm:text-lg text-stellar-muted">
            Over the last 5 years, STELLAR has accumulated many testimonials, reviews, and awards for better service.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-stellar-dark">4.9 / 5.0</span>
            <span className="text-sm text-gray-400">• Verified Client Ratings</span>
          </div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00C2CB]/30 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars and Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#00C2CB]/25 group-hover:text-stellar-cyan transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-stellar-dark mb-3">
                  "{rev.title}"
                </h3>

                <p className="text-sm sm:text-base text-stellar-muted leading-relaxed mb-6">
                  {rev.text}
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full ${rev.color} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-stellar-dark">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {rev.role} - <span className="text-stellar-cyan font-semibold">{rev.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
