import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import VideoCarousel from "@/components/VideoCarousel";
import ContactModal from "@/components/ContactModal";
import { FORM_SUBMIT_URL } from "@/config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
import {
  FileCheck,
  MessageCircle,
  Users,
  Shield,
  Briefcase,
  Handshake,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Phone,
  AlertCircle,
  Zap,
  Scale,
  GraduationCap,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [miniDismissed, setMiniDismissed] = useState(false);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const miniVideoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);

  // Mini player: show when main video is playing and scrolled out of view
  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        const isPlaying = video && !video.paused && !video.ended;
        if (!entry.isIntersecting && isPlaying && !miniDismissed) {
          setShowMiniPlayer(true);
          // Sync mini player to main video time
          requestAnimationFrame(() => {
            if (miniVideoRef.current && video) {
              miniVideoRef.current.currentTime = video.currentTime;
              miniVideoRef.current.muted = video.muted;
              miniVideoRef.current.play().catch(() => {});
              video.pause();
            }
          });
        } else if (entry.isIntersecting && showMiniPlayer) {
          // Return to main video
          const mini = miniVideoRef.current;
          const main = videoRef.current;
          if (mini && main) {
            main.currentTime = mini.currentTime;
            main.muted = mini.muted;
            main.play().catch(() => {});
          }
          setShowMiniPlayer(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [miniDismissed, showMiniPlayer]);

  // SEO: set page-specific meta tags for /lawyeroncall
  useEffect(() => {
    const ogTitle = "Your On-Demand Lawyer Without Paying $500/Hour | Legal Halp";
    const ogDesc = "Fractional in-house counsel for growing businesses. Flat monthly fee starting at $1,500/mo. No hourly surprises.";
    const ogImage = "https://josh-halpern-law.vercel.app/og-lawyer-on-call.png";

    document.title = ogTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("property", "og:title", ogTitle);
    setMeta("property", "og:description", ogDesc);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:url", "https://legalhalplaw.com/lawyeroncall");
    setMeta("name", "description", ogDesc);
    setMeta("name", "twitter:title", ogTitle);
    setMeta("name", "twitter:description", ogDesc);
    setMeta("name", "twitter:image", ogImage);

    return () => {
      document.title = "Legal Halp \u2013 Your Lawyer on Speed Dial";
    };
  }, []);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialScrollRef.current) {
      const scrollAmount = 470; // Card width (450px) + gap (20px)
      const newPosition = direction === 'left'
        ? testimonialScrollRef.current.scrollLeft - scrollAmount
        : testimonialScrollRef.current.scrollLeft + scrollAmount;

      testimonialScrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatYouGet = [
    { icon: FileCheck, title: "Contracts & Agreements", desc: "Drafting, reviewing, and negotiating vendor agreements, client contracts, NDAs, and partnership deals" },
    { icon: Users, title: "Employment Law", desc: "Offer letters, terminations, employee handbooks, equity compensation plans, and HR compliance" },
    { icon: Shield, title: "Brand & IP Protection", desc: "Trademark filings, copyright registration, website terms of service, and privacy policies" },
    { icon: Briefcase, title: "Business Strategy", desc: "Entity structuring (LLC vs S-Corp), operating agreements, compliance, and regulatory guidance" },
    { icon: Handshake, title: "Deal Negotiation", desc: "Strategic counsel on partnerships, vendor terms, investor agreements, and key business deals" },
    { icon: MessageCircle, title: "Direct Access", desc: "Text, email, or call your attorney directly. No gatekeepers, no assistants, no billable surprises" },
  ];

  const painPoints = [
    {
      text: "You got a $4,000 invoice for a contract review that took ",
      highlight: "2 hours",
      highlightType: "circle" as const
    },
    {
      text: "You waited ",
      highlight: "3 weeks",
      highlightType: "underline" as const,
      textAfter: " for your lawyer to return a simple email"
    },
    {
      text: "You ",
      highlight: "skipped legal review",
      highlightType: "strikethrough" as const,
      textAfter: " on a deal because you couldn't afford the hourly rate"
    },
    {
      text: "You're using ",
      highlight: "Google and ChatGPT",
      highlightType: "underline" as const,
      textAfter: " for legal questions because real lawyers are too expensive"
    },
  ];

  const steps = [
    { num: "1", title: "Submit Your Application", desc: "Tell us about your business, revenue, and current legal needs. Takes 2 minutes." },
    { num: "2", title: "We'll Review & Reach Out", desc: "If we're a good fit, we'll contact you within 24-48 hours to schedule a consultation call." },
    { num: "3", title: "Start Getting Legal Done", desc: "Once onboarded, text, email, or call your attorney whenever you need something. Flat fee. No surprises." },
  ];

  const faqs = [
    {
      question: "How is this different from hiring a law firm?",
      answer: "Law firms bill hourly. Every email, every call, every 6-minute increment costs you money. With Legal Halp, you pay one flat monthly fee and get unlimited access to your attorney. No timers. No surprise invoices. Just legal support when you need it."
    },
    {
      question: "Can't I just use ChatGPT, Claude, or Grok for legal questions?",
      answer: "Here's the thing: AI is incredibly powerful for legal work — when wielded by someone who knows what they're doing. I use AI daily to accelerate research, draft initial documents, and analyze complex scenarios. But AI without legal judgment is like giving someone a scalpel without medical training. You don't know what information is critical, what's a red flag, which clauses protect you versus expose you, or how to structure a negotiation. A trained attorney knows what to feed AI, how to direct it, what questions to ask, and — most importantly — what it gets wrong. AI hallucinates case law, misses jurisdiction-specific nuances, and can't assess risk or strategy. You're not just paying for legal knowledge; you're paying for the judgment to use every tool — including AI — correctly. That's the difference between a DIY disaster and bulletproof legal work."
    },
    {
      question: "What can you do that AI can't?",
      answer: "The right question is: what can a lawyer using AI do that you can't do alone? AI is a tool — a very powerful one — but it's only as effective as the person directing it. I know which contract clauses matter for YOUR industry and which are boilerplate noise. I know when a 'standard' NDA is actually tilted against you. I know how to structure equity splits to avoid future disasters, and how to negotiate terms that protect your leverage. AI can draft language, but it can't tell you if you're getting screwed or if a deal structure will blow up in 18 months. I use AI to work faster and more efficiently — but the strategy, judgment, and accountability are human. When opposing counsel pushes back, when the state rejects your filing, when a contract dispute lands on your desk — you need someone who knows what went wrong and how to fix it. That's what you're paying for: expertise that knows how to use AI as a force multiplier, not a replacement."
    },
    {
      question: "Is a real attorney handling my work?",
      answer: "Yes. I'm Josh Halpern, a licensed attorney with 10+ years of experience, including BigLaw. I personally handle every client. You're never talking to a paralegal or a chatbot."
    },
    {
      question: "What's NOT included?",
      answer: "Courtroom litigation (I'm business counsel, not a trial lawyer), regulatory filings requiring specialized licensing (SEC, patent prosecution), and work outside your plan scope. If you need something beyond your tier, we'll quote it upfront — no surprises."
    },
    {
      question: "How fast do you respond?",
      answer: "24-48 hours on the Essential plan. Same-day on Business and Full-Service. Urgent matters are always prioritized regardless of plan."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Month-to-month. No long-term contracts. 30 days notice. Most clients stay because they save thousands compared to hourly billing."
    },
    {
      question: "What if I don't use it one month?",
      answer: "You're still covered. Legal needs are unpredictable — you might go a month with no issues, then suddenly need contract review, an employment termination, or a cease & desist response. The retainer ensures I'm available when you need me, not scrambling to find an attorney during a crisis. Think of it like insurance: you pay for peace of mind and immediate access, not just usage."
    },
    {
      question: "How is this different from LegalZoom?",
      answer: "LegalZoom sells templates. I'm your attorney. You get personalized strategy, custom drafting, and someone who actually understands your business. When something complex comes up, you call me — not a customer service line."
    },
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$1,500",
      desc: "For businesses with periodic legal needs",
      features: [
        "Contract review and drafting",
        "Email and text support (48hr response)",
        "Employment basics (offer letters, terminations)",
        "IP filings (trademark search, copyright)",
        "Monthly legal check-in call",
      ],
    },
    {
      name: "Business",
      price: "$2,500",
      desc: "For growing businesses with regular legal needs",
      features: [
        "Everything in Essential, plus:",
        "Contract negotiation and strategy",
        "Priority support (24hr response)",
        "Equity plans and employee handbooks",
        "Full IP protection strategy",
        "Quarterly strategy calls",
      ],
      highlighted: true,
    },
    {
      name: "Full-Service",
      price: "$5,000",
      desc: "For established businesses ($1M+ revenue)",
      features: [
        "Everything in Business, plus:",
        "Same-day response (often hours)",
        "M&A readiness and due diligence",
        "Full compliance buildout (CCPA/GDPR)",
        "Multi-state registration support",
        "Weekly standing calls + on-demand video",
      ],
    },
  ];

  const handleModalSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    businessType?: string;
    mainNeed?: string;
    state?: string;
  }) => {
    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || '';

      // Extract Facebook click/browser IDs from cookies for server-side CAPI matching
      const getCookie = (name: string) => document.cookie.split('; ').find(c => c.startsWith(name + '='))?.split('=').slice(1).join('=') || '';

      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          phone: formData.phone,
          source: 'Website - On-Demand Counsel Audit',
          business_type: formData.businessType || '',
          main_need: formData.mainNeed || '',
          state: formData.state || '',
          tags: ['website', 'applied-legal-halp'],
          _fbc: getCookie('_fbc'),
          _fbp: getCookie('_fbp'),
        })
      });

      if (response.ok) {
        // Fire Lead event client-side at submit time (belt-and-suspenders with thank-you page)
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Lawyer On Call Application',
            content_category: 'legal_services',
            value: 1500,
            currency: 'USD',
          });
        }
        setIsModalOpen(false);
        navigate('/lawyeroncall/thank-you');
      } else {
        console.error('Failed to submit form');
        alert('There was an error submitting your information. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your information. Please try again.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center cursor-pointer"
            >
              <img src="/logo.png" alt="Legal Halp" className="h-10" />
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-brand-navy-darker hover:text-brand-gold-dark transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-brand-navy-darker hover:text-brand-gold-dark transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-brand-navy-darker hover:text-brand-gold-dark transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-brand-navy-darker hover:text-brand-gold-dark transition-colors">
                FAQ
              </button>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold px-5 py-2 rounded-lg transition-all text-sm"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-36 overflow-hidden bg-white">

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy leading-tight tracking-tight">
              Your On-Demand Lawyer Without Paying $500/Hour
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto">
              Ask questions, review contracts, and get real answers in real time—without booking calls or watching the clock.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-gold" />
                <span>Former BigLaw Attorney</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-brand-gold" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span>All 50 States</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-brand-gold" />
                <span>Month-to-Month</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-brand-gold" />
                <span>AI-Powered Efficiency</span>
              </div>
            </div>

            {/* Video Embed */}
            <div className="w-full max-w-3xl mx-auto" ref={videoContainerRef}>
              <div className="aspect-video bg-slate-900 rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="https://github.com/cynthiaconcierge/JoshuaHalpernLegal/releases/download/videos/lawyer-on-call.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="text-3xl md:text-4xl font-bold text-brand-navy">
              Starting at <span className="text-brand-gold">$1,500/mo</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-6">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-brand-gold/25 hover:shadow-xl hover:shadow-brand-gold/30 transform hover:-translate-y-0.5 transition-all text-lg"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Why Application-Based */}
              <div className="max-w-2xl mx-auto w-full">
                <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 text-center">Why We Use an Application Process</h3>
                  <p className="text-slate-600 text-center leading-relaxed text-sm">
                    This is an on-demand service reserved for established businesses we know we can serve well. By maintaining a selective client roster, we ensure every client gets exceptional attention, fast response times, and personalized legal strategy. Quality over quantity — always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution Intro ── */}
      <section className="py-20 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
              What If Your Lawyer Worked <span className="text-brand-gold-dark">For</span> You — Not Against Your Budget?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Legal Halp gives you a dedicated business attorney for a flat monthly fee. You text, email, or call when you need something. We handle it. No timers. No invoices for "reviewing your email."
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl cursor-default">
                <div className="text-3xl font-bold text-brand-gold-dark mb-1">60%</div>
                <div className="text-sm text-slate-600 font-medium">Less than hourly billing</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl cursor-default">
                <div className="text-3xl font-bold text-brand-gold-dark mb-1">24hr</div>
                <div className="text-sm text-slate-600 font-medium">Max response time</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl cursor-default">
                <div className="text-3xl font-bold text-brand-gold-dark mb-1">$0</div>
                <div className="text-sm text-slate-600 font-medium">Surprise invoices</div>
              </div>
              <div className="p-5 bg-white rounded-xl border-2 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl cursor-default relative overflow-hidden animate-gold-border">
                <div className="text-3xl font-bold text-brand-gold-dark mb-1">AI+</div>
                <div className="text-sm text-slate-600 font-medium">Expertise that knows how to use it</div>
              </div>
            </div>

            {/* Animated gold border styles */}
            <style>{`
              @keyframes gold-border-glow {
                0%, 100% {
                  border-color: #D97706;
                  box-shadow: 0 0 10px rgba(217, 119, 6, 0.3);
                }
                50% {
                  border-color: #F59E0B;
                  box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
                }
              }

              .animate-gold-border {
                animation: gold-border-glow 2s ease-in-out infinite;
              }
            `}</style>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </section>

      <VideoCarousel />

      {/* ── What You Get ── */}
      <section className="py-20 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 text-center tracking-tight">
              Everything Your Business Needs. One Fee.
            </h2>
            <p className="text-lg text-slate-500 text-center mb-10">
              No nickel-and-diming. No "that's outside scope." Just comprehensive legal support.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {whatYouGet.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl cursor-default">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-brand-gold-dark flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-brand-navy">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed pl-[52px]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-10 tracking-tight">
              Three Steps. That's It.
            </h2>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-5 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-brand-gold/25">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-1">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
              >
                Submit Your Application
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-20 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8 tracking-tight">
              Built For Business Owners Who Are Done Overpaying
            </h2>

            <div className="space-y-4 text-left max-w-2xl mx-auto mb-6">
              {[
                "You're running a real business — not a side project, not an idea on a napkin",
                "You have legal needs that come up regularly (contracts, hiring, compliance)",
                "You're earning $500K+ in revenue and need strategic counsel, not templates",
                "You want to be able to text your lawyer at 9pm without getting a $200 invoice for it",
                "You want a lawyer who leverages AI to work faster and smarter — not one stuck in 1995",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl cursor-default">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-brand-navy-darker font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-sm mb-8">
              This is not for individuals with one-off legal questions. This is ongoing business counsel.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Function Health-style headline */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 leading-tight text-center mx-auto max-w-4xl">
                What could cost you{" "}
                <span className="relative inline-block">
                  <span className="text-red-400 line-through decoration-2">$50,000</span>
                </span>{" "}
                is{" "}
                <span className="text-brand-gold">$1,500/month</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center">
                One lawsuit. One contract dispute. One employee issue. That's all it takes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-xl bg-white transition-all hover:-translate-y-1 hover:shadow-xl cursor-default relative ${
                    tier.highlighted
                      ? "border-2 border-brand-gold shadow-lg"
                      : "border border-slate-200 shadow-sm"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-brand-navy mb-1">{tier.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{tier.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-brand-navy">{tier.price}</span>
                    <span className="text-slate-600">/mo</span>
                  </div>
                  <ul className="space-y-2.5 text-left">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Risk Reversal */}
            <div className="bg-brand-cream border border-slate-200 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-bold text-brand-navy mb-1">Zero-Risk Guarantee</p>
                  <p className="text-slate-700 text-sm">
                    Month-to-month. No long-term contracts. No cancellation fees. If it's not working, you cancel with 30 days notice. We keep it that simple because the model works — and clients stay because of the savings, not the fine print.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
              Apply for Service
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-10 text-center tracking-tight">
              Questions? Answers.
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-cream transition-colors"
                  >
                    <span className="font-semibold text-brand-navy pr-4">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 py-4 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </section>

      {/* ── Testimonials Carousel ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-center tracking-tight">
              What Clients Say
            </h2>
            <p className="text-lg text-slate-500 text-center mb-12 max-w-2xl mx-auto">
              Real business owners who switched from hourly billing to flat-fee legal counsel
            </p>

            <div className="relative">
              {/* Left scroll button */}
              <button
                onClick={() => scrollTestimonials('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white border border-slate-200 rounded-full p-3 shadow-lg transition-all hover:shadow-xl hover:-translate-x-1"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </button>

              {/* Right scroll button */}
              <button
                onClick={() => scrollTestimonials('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white border border-slate-200 rounded-full p-3 shadow-lg transition-all hover:shadow-xl hover:translate-x-1"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </button>

              {/* Horizontal scroll container */}
              <div ref={testimonialScrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-12">
                {[
                  {
                    quote: "I was paying $400/hour to a downtown firm that took 4 days to respond to emails. Josh reviewed the same vendor contract in 6 hours, caught three liability issues they missed, and saved me $2,500 on one deal. Switched immediately.",
                    name: "Sarah Chen",
                    title: "Founder & CEO",
                    company: "TechFlow SaaS",
                    revenue: "$800K ARR",
                    location: "San Francisco, CA"
                  },
                  {
                    quote: "My old attorney billed me $175 to read a two-sentence email. Now I text Josh at 9pm with contract questions and get real answers in 20 minutes. No invoice. No timer. Just actual legal counsel when I need it.",
                    name: "Marcus Williams",
                    title: "Owner",
                    company: "Williams E-commerce",
                    revenue: "$2.1M revenue",
                    location: "Austin, TX"
                  },
                  {
                    quote: "Had an employee threaten a lawsuit over termination. My previous firm quoted $8,500 just to draft a severance agreement. Josh handled the entire situation in 48 hours for zero additional cost. Crisis averted, employee settled, no lawsuit.",
                    name: "Jennifer Park",
                    title: "Founder",
                    company: "Park Marketing Group",
                    revenue: "32 employees",
                    location: "Chicago, IL"
                  },
                  {
                    quote: "We were hemorrhaging $8K-12K monthly on legal fees with a firm that took weeks to turn around basic contracts. Josh responds same-day, knows our business inside out, and the quality is better. Cut our legal spend by 65%.",
                    name: "David Torres",
                    title: "Co-Founder",
                    company: "BuildRight Construction",
                    revenue: "$5.2M revenue",
                    location: "Phoenix, AZ"
                  },
                  {
                    quote: "Needed a partnership agreement for bringing on a co-founder. Previous attorney quoted me $6,500 and 3-4 weeks. Josh delivered a custom agreement in 48 hours with better terms than I would've known to ask for. Now he's on retainer.",
                    name: "Amanda Foster",
                    title: "Managing Partner",
                    company: "Foster & Associates",
                    revenue: "Professional services",
                    location: "Denver, CO"
                  },
                  {
                    quote: "I was running my entire business on LegalZoom templates because I couldn't afford hourly billing. Josh found gaps in my operating agreement, client contracts, and IP assignment that could've bankrupted me in a dispute. Now I'm actually protected.",
                    name: "Ryan Mitchell",
                    title: "Founder",
                    company: "MitchTech Consulting",
                    revenue: "$1.2M revenue",
                    location: "Seattle, WA"
                  },
                  {
                    quote: "The psychology of flat-fee billing is underrated. I actually ask questions now instead of googling and hoping for the best. Had a trademark issue come up last month — got a 30-minute strategy call within 4 hours. No invoice. Just handled.",
                    name: "Lisa Nguyen",
                    title: "CEO",
                    company: "Nguyen Digital",
                    revenue: "$1.8M agency",
                    location: "Los Angeles, CA"
                  },
                  {
                    quote: "Josh caught a non-compete clause buried in a software vendor contract that would've prevented us from serving our three largest clients. One clause review paid for an entire year of his retainer. That's the value of having someone who actually reads.",
                    name: "James Patterson",
                    title: "Owner",
                    company: "Patterson Logistics",
                    revenue: "$3.4M revenue",
                    location: "Dallas, TX"
                  },
                  {
                    quote: "Hired my first employee and had no idea what I was doing. Josh drafted the offer letter, employment agreement, handbook, and IP assignment in 72 hours. My previous attorney would've billed $4,000+ for this. It's included in my monthly fee.",
                    name: "Priya Sharma",
                    title: "Founder",
                    company: "Sharma Analytics",
                    revenue: "$650K ARR",
                    location: "Boston, MA"
                  },
                  {
                    quote: "We were about to sign a lease on office space when Josh red-flagged a personal guarantee clause that would've put my house on the line. Renegotiated it out in 24 hours. One catch like that and you understand why you need real legal counsel, not Google.",
                    name: "Kevin O'Brien",
                    title: "CEO",
                    company: "O'Brien Media Group",
                    revenue: "42 employees",
                    location: "Miami, FL"
                  },
                  {
                    quote: "Switched from a $450/hour firm to Josh's flat-fee model and the difference is night and day. Same quality work, faster turnaround, and I don't have a panic attack every time I need legal advice. This is how legal should work.",
                    name: "Tiffany Rodriguez",
                    title: "Co-Founder",
                    company: "Rodriguez & Lee CPAs",
                    revenue: "$2.8M practice",
                    location: "San Diego, CA"
                  },
                  {
                    quote: "Had a client threatening litigation over a project dispute. Josh drafted a response letter that was firm but professional, cited case law I'd never heard of, and the client backed down within 48 hours. That's BigLaw expertise without the BigLaw bill.",
                    name: "Michael Zhang",
                    title: "Principal",
                    company: "Zhang Design Studio",
                    revenue: "18 employees",
                    location: "Portland, OR"
                  }
                ].map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[90%] md:w-[450px] snap-center"
                  >
                    <div className="bg-brand-cream border border-slate-200 rounded-xl p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-6 flex-grow text-base">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t border-slate-300 pt-4">
                        <p className="font-bold text-brand-navy text-lg">{testimonial.name}</p>
                        <p className="text-sm text-slate-600 font-medium">{testimonial.title}</p>
                        <p className="text-sm text-slate-500">{testimonial.company}</p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-slate-400">{testimonial.revenue}</p>
                          <p className="text-xs text-slate-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
              Stop Asking AI for Legal Advice.<br />
              Start Having a Lawyer on Your Team.
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Apply for on-demand legal counsel. We work with a limited number of clients to ensure exceptional service and attention.
            </p>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500">Selective intake. Quality over quantity.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <button
          onClick={openModal}
          className="flex items-center justify-center gap-2 w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 px-6 rounded-xl transition-colors"
        >
          Apply Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />

      {/* Mini player when video scrolls out of view */}
      {showMiniPlayer && !miniDismissed && (
        <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 w-[260px] md:w-[320px] rounded-xl overflow-hidden shadow-2xl border border-slate-300 bg-black">
          <button
            onClick={() => {
              const mini = miniVideoRef.current;
              const main = videoRef.current;
              if (mini && main) {
                main.currentTime = mini.currentTime;
              }
              mini?.pause();
              setMiniDismissed(true);
              setShowMiniPlayer(false);
            }}
            className="absolute top-2 right-2 z-10 w-6 h-6 bg-black/70 hover:bg-black rounded-full flex items-center justify-center transition"
            aria-label="Close"
          >
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <video
            ref={miniVideoRef}
            className="w-full aspect-video object-cover"
            controls
            playsInline
          >
            <source src="https://github.com/cynthiaconcierge/JoshuaHalpernLegal/releases/download/videos/lawyer-on-call.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Index;
