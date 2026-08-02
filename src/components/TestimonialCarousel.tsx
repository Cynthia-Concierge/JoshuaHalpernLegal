import React, { useState, useRef, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  service: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I was quoted $3,500 by another firm to set up my LLC. Josh did it for $1,000, explained everything clearly, and I had my operating agreement in 5 days. This is how legal services should work.",
    name: "Sarah K.",
    role: "Wellness Studio Owner",
    service: "LLC Formation",
  },
  {
    quote:
      "We'd been putting off estate planning for years because lawyers made it feel so complicated and expensive. Josh made it simple. We finally have peace of mind knowing our kids are taken care of.",
    name: "Mike & Lisa T.",
    role: "Real Estate Investors",
    service: "Estate Planning",
  },
  {
    quote:
      "I run a marketing agency and was sending out contracts that were basically copy-pasted from the internet. Josh drafted proper service agreements, NDAs, and a contractor template I can reuse. Way more professional and I'm actually protected now.",
    name: "David R.",
    role: "Agency Founder",
    service: "Contract Drafting",
  },
  {
    quote:
      "Someone was selling knockoff products under my brand name on Amazon. Josh filed my trademark, sent a cease and desist, and got the listings taken down within a week. I wish I hadn't waited so long.",
    name: "Marcus J.",
    role: "E-commerce Brand Owner",
    service: "Trademark Filing",
  },
  {
    quote:
      "I had three rental properties in my own name. One lawsuit from a tenant and I could lose everything. Josh set up LLCs for each property, handled the deed transfers, and walked me through the whole process. Slept better that night.",
    name: "Linda H.",
    role: "Rental Property Investor",
    service: "Real Estate LLC",
  },
  {
    quote:
      "We launched our SaaS platform without proper terms of service or a privacy policy. Josh drafted everything custom for our stack — GDPR, CCPA, the works. Should've done it day one, but glad we did it before it became a problem.",
    name: "Priya S.",
    role: "SaaS Startup Co-Founder",
    service: "Website Compliance",
  },
  {
    quote:
      "Having Josh on retainer is like having a general counsel without the $250k salary. I text him about contract questions, vendor issues, whatever comes up. Flat monthly fee, no meter running. It's changed how I run my business.",
    name: "Chris M.",
    role: "Manufacturing Company CEO",
    service: "Lawyer-on-Call",
  },
  {
    quote:
      "We were hiring our first employee and had no idea what we needed. Josh put together the employment agreement, walked us through compliance, and made sure we weren't exposing ourselves. Took what felt like a huge risk off the table.",
    name: "Brittany L.",
    role: "Boutique Owner",
    service: "Employment Law",
  },
  {
    quote:
      "My business partner and I were operating on a handshake for two years. Josh drafted a real operating agreement with profit splits, voting rights, and an exit plan. Turns out we had very different ideas about what '50/50' meant. Glad we sorted that out now instead of in court.",
    name: "Evan W.",
    role: "Restaurant Co-Owner",
    service: "Advanced LLC Formation",
  },
  {
    quote:
      "I'm a freelance designer and kept getting lowballed on contracts. Josh reviewed my client agreements, tightened up the payment terms, and added IP protections. My clients actually take me more seriously now that the contracts look professional.",
    name: "Taylor B.",
    role: "Freelance Graphic Designer",
    service: "Contract Review",
  },
  {
    quote:
      "My mom passed away without a trust and we spent 14 months in probate court. When I had kids, I swore I wouldn't do that to them. Josh set up a living trust, powers of attorney, the whole package. Took one consultation and a flat fee. Done.",
    name: "Robert D.",
    role: "Software Engineer",
    service: "Estate Planning",
  },
  {
    quote:
      "We were about to sign a commercial lease that would've locked us in for five years with no exit. Josh reviewed it, caught two clauses that would've cost us thousands, and negotiated better terms with the landlord. Paid for itself ten times over.",
    name: "Aisha M.",
    role: "Retail Store Owner",
    service: "Lease Agreement Review",
  },
];

const TestimonialCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(2);

  // Determine how many cards are visible based on viewport
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = TESTIMONIALS.length - cardsPerView;

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-tcard]");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 24; // matches gap-6
    el.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(maxIndex, currentIndex + 1));
  };

  // Auto-advance every 6 seconds, pauses on hover/focus
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section
      className="py-20 md:py-28 bg-white border-t border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              What Clients Say
            </h2>
            <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
              Real business owners. Real results. Here's what working with Legal
              Halp actually looks like.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "hover:bg-slate-50 hover:border-slate-300 hover:shadow-xl"
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center transition-all ${
                canScrollRight
                  ? "hover:bg-slate-50 hover:border-slate-300 hover:shadow-xl"
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>

            {/* Scrollable Cards */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  data-tcard
                  className="flex-shrink-0 w-[85%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 relative"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-blue-500 fill-blue-500"
                      />
                    ))}
                  </div>
                  <MessageSquare className="absolute top-6 right-6 w-8 h-8 text-slate-200" />
                  <blockquote className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-slate-200 pt-5">
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-xs font-semibold mt-1 uppercase tracking-wide">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hide scrollbar CSS */}
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => scrollToIndex(dotIndex)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === dotIndex
                    ? "bg-blue-600 w-8"
                    : "bg-slate-300 hover:bg-slate-400 w-2"
                }`}
                aria-label={`Go to testimonial group ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
