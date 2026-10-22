import React, { useRef, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
    {
      title: "Flawless Execution",
      text: "STELLAR built our medical clinic platform with instant patient booking and secure records. Our conversion rates jumped by 40% within weeks of launch.",
      author: "Dr. N. Sharma",
      role: "Medical Director",
      company: "Apex Healthcare",
      rating: 5,
      avatar: "N",
      color: "bg-cyan-600",
    },
    {
      title: "Outstanding Architecture",
      text: "The admissions ecosystem and high-speed portal built by STELLAR handled peak traffic without a hitch. Outstanding technical acumen and design sense.",
      author: "Priya Verma",
      role: "Director of Ops",
      company: "Staford Education",
      rating: 5,
      avatar: "P",
      color: "bg-rose-600",
    },
    {
      title: "Seamless Global Reach",
      text: "Our international export catalog loads in under a second across 12 countries now. STELLAR’s team is proactive, highly skilled, and always reachable.",
      author: "Rohit Agarwal",
      role: "Head of Digital",
      company: "Bhasin Aromatics",
      rating: 5,
      avatar: "R",
      color: "bg-amber-600",
    },
  ];

  // Tripled list for endless seamless horizontal looping
  const displayReviews = [...reviews, ...reviews, ...reviews];

  const scrollRef = useRef(null);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start in the middle set to allow bi-directional scrolling seamlessly
    const singleSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft === 0) {
      container.scrollLeft = singleSetWidth;
    }

    let animId;
    const speed = 0.9; // Smooth horizontal auto-scroll speed

    const step = () => {
      if (container && !isPausedRef.current) {
        container.scrollLeft += speed;

        const currentSingleSetWidth = container.scrollWidth / 3;
        // When we reach end of 2nd set, seamlessly wrap back to 1st set
        if (container.scrollLeft >= currentSingleSetWidth * 2) {
          container.scrollLeft -= currentSingleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += currentSingleSetWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const pauseForTwoSeconds = () => {
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2000);
  };

  const handleTouchStart = () => {
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    pauseForTwoSeconds();
  };

  const handleScrollPrev = () => {
    pauseForTwoSeconds();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const handleScrollNext = () => {
    pauseForTwoSeconds();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
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

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center justify-end gap-3 mb-4 max-w-7xl mx-auto px-2">
          <button
            onClick={handleScrollPrev}
            aria-label="Previous Reviews"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-stellar-cyan text-stellar-dark flex items-center justify-center shadow-xs transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleScrollNext}
            aria-label="Next Reviews"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-stellar-cyan text-stellar-dark flex items-center justify-center shadow-xs transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Auto-scrolling Review Track with Infinite Loop & Touch Pause */}
      <div className="w-full relative">
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleTouchStart}
          onMouseLeave={handleTouchEnd}
          className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-4 sm:px-8 cursor-grab active:cursor-grabbing select-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {displayReviews.map((rev, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[380px] lg:w-[420px] flex-shrink-0 bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00C2CB]/30 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
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

                <h3 className="text-lg sm:text-xl font-bold text-stellar-dark mb-3">
                  "{rev.title}"
                </h3>

                <p className="text-sm sm:text-base text-stellar-muted leading-relaxed mb-6">
                  {rev.text}
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full ${rev.color} text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0`}>
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
