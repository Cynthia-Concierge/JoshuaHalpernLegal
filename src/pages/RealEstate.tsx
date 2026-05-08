import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import RealEstateContactModal from "@/components/RealEstateContactModal";
import { FORM_SUBMIT_URL } from "@/config";
import { getAttribution } from "@/utils/attribution";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
import {
  FileCheck,
  MessageCircle,
  Shield,
  Briefcase,
  Handshake,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Scale,
  GraduationCap,
  Star,
  Home as HomeIcon,
  Gavel,
} from "lucide-react";

const RealEstate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);

  // SEO: page-specific meta tags for /realestate
  useEffect(() => {
    const ogTitle = "Real Estate Lawyer For Investors | Legal Halp";
    const ogDesc = "A dedicated real estate attorney for investors. Closings, LLC structuring, vendor recoveries, evictions. Flat monthly fee — no hourly surprises.";
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
    setMeta("property", "og:url", "https://legalhalplaw.com/realestate");
    setMeta("name", "description", ogDesc);
    setMeta("name", "twitter:title", ogTitle);
    setMeta("name", "twitter:description", ogDesc);
    setMeta("name", "twitter:image", ogImage);

    return () => {
      document.title = "Legal Halp – Your Lawyer on Speed Dial";
    };
  }, []);

  const whatYouGet = [
    { icon: Gavel, title: "Closings & Title", desc: "Courthouse auctions, tax sales, probate sales, title curing, and clean closings — so the deal actually holds up after you sign" },
    { icon: Shield, title: "Asset Protection", desc: "LLC structuring, holding companies, and series LLCs across your portfolio so a tenant claim can't reach your personal assets" },
    { icon: DollarSign, title: "Vendor Recoveries", desc: "We audit your statements and send the demand letters when a property manager, HOA, lender, insurer, or title company has been overcharging you" },
    { icon: HomeIcon, title: "Leases & Evictions", desc: "Lease drafting, enforcement, notices, and the eviction process where state law permits — so problem tenants don't drain your portfolio" },
    { icon: Handshake, title: "Deal Structuring", desc: "Subject-to, seller financing, joint ventures, partnership agreements, and operating agreements built for how investors actually move" },
    { icon: MessageCircle, title: "Direct Access", desc: "Text, email, or call your attorney directly. No gatekeepers, no assistants, no billable surprises" },
  ];

  const steps = [
    { num: "1", title: "Tell Us About Your Portfolio", desc: "Quick intake form — number of doors, what you're working on, what's biting you. Takes under a minute." },
    { num: "2", title: "We'll Reach Out to Schedule a Call", desc: "Our team contacts you ASAP for a brief intro call. We tell you straight whether we're the right fit." },
    { num: "3", title: "Start Getting Legal Done", desc: "Once onboarded, text, email, or call your attorney whenever you need something. Flat fee. No surprises." },
  ];

  const faqs = [
    {
      question: "How is this different from hiring a real estate attorney by the hour?",
      answer: "Hourly attorneys bill every email, every call, every 6-minute increment. With Legal Halp, you pay one flat monthly fee and get unlimited access to a real estate attorney who knows investors. No timers. No surprise invoices. Just legal support when you need it — closings, evictions, recoveries, contracts, all of it."
    },
    {
      question: "Do you actually do courthouse closings and tax-sale work?",
      answer: "Yes. Subject-to, courthouse auctions, tax deed sales, probate sales, REO closings, wholesale assignments, and title curing are core to what we do for investor clients. We also coordinate with title companies in your applicable county and prepare the documents you need before you bid."
    },
    {
      question: "Can you actually get money back from a property manager or vendor that's been overcharging me?",
      answer: "Often, yes. We pull the statements, identify the overcharges, and send demand letters on firm letterhead. In many cases vendors settle quickly to avoid escalation. We've recovered money for investors against property managers, HOAs, lenders, and insurance carriers. We'll tell you on the intro call whether it's worth pursuing in your situation."
    },
    {
      question: "Is a real attorney handling my work?",
      answer: "Yes. I'm Josh Halpern, a licensed attorney with 10+ years of experience, including BigLaw. I personally handle every client. You're never talking to a paralegal or a chatbot."
    },
    {
      question: "Can you handle work in any state?",
      answer: "Yes — we work with investors nationwide. Many real estate matters are handled directly across all 50 states. For state-licensed work outside our admissions, we coordinate with local counsel in your applicable county and stay in the driver's seat on strategy and documents — so you have one point of contact instead of five."
    },
    {
      question: "What's NOT included?",
      answer: "Civil litigation that goes to trial, criminal matters, family law, and personal injury. If you need something beyond your tier (e.g., a heavy-litigation eviction battle), we'll quote it upfront — no surprises."
    },
    {
      question: "How fast do you respond?",
      answer: "24-48 hours on Essential. Same-day on Business and Full-Service. Urgent matters (closings on the clock, eviction deadlines, demand letter responses) are always prioritized regardless of plan."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Month-to-month. No long-term contracts. 30 days notice. Most investor clients stay because the recovery and protection work pays for the retainer many times over."
    },
    {
      question: "I just have one property. Is this for me?",
      answer: "If you own one rental and the rest of your wealth depends on it not blowing up — yes. If you're a hobbyist with one Airbnb you barely care about, probably not. Our investor clients usually have 1-100+ doors and treat real estate as a real business."
    },
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$1,500",
      desc: "For investors with 1–5 properties",
      features: [
        "Closing review and contract drafting",
        "Lease templates and lease enforcement",
        "Email and text support (48hr response)",
        "Single-LLC structuring + operating agreement",
        "Monthly legal check-in call",
      ],
    },
    {
      name: "Business",
      price: "$2,500",
      desc: "For investors with 5–20 doors and active dealflow",
      features: [
        "Everything in Essential, plus:",
        "Vendor audits + demand letters (recoveries)",
        "Priority support (24hr response)",
        "Multi-LLC and holding-company structuring",
        "Eviction support where state law permits",
        "Quarterly portfolio strategy calls",
      ],
      highlighted: true,
    },
    {
      name: "Full-Service",
      price: "$5,000",
      desc: "For investors with 20+ doors / active acquisition",
      features: [
        "Everything in Business, plus:",
        "Same-day response (often hours)",
        "Series LLC + asset protection buildout",
        "JV / partnership / syndication structuring",
        "Multi-state coordination via local counsel",
        "Weekly standing calls + on-demand video",
      ],
    },
  ];

  const handleModalSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    mainNeed: string;
  }) => {
    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || '';

      const attribution = getAttribution();

      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          phone: formData.phone,
          source: 'Website - Real Estate Investor LP',
          business_type: 'Real Estate (Investor)',
          main_need: formData.mainNeed,
          tags: ['website', 'real-estate-investor'],
          ...attribution,
        })
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Real Estate Investor Application',
            content_category: 'real_estate_legal',
            value: 1500,
            currency: 'USD',
          });
        }
        setIsModalOpen(false);
        navigate('/realestate/thank-you');
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
              <button onClick={() => scrollToSection('what-you-get')} className="text-sm font-medium text-brand-navy-darker hover:text-brand-gold-dark transition-colors">
                What You Get
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
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-36 overflow-hidden bg-white">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy leading-tight tracking-tight">
              Your Real Estate Lawyer On Call.{" "}
              <span className="relative">
                <span className="relative z-10">Without</span>
                <span className="absolute bottom-2 md:bottom-3 left-0 right-0 h-3 md:h-4 bg-brand-gold/20 -rotate-1 rounded-sm" />
              </span>{" "}
              <span className="text-brand-gold">The Hourly Bill.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto">
              A dedicated real estate attorney for investors nationwide — closings, LLC structuring, vendor recoveries, evictions. Flat monthly fee. Text, email, or call when you need something.
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
                <HomeIcon className="w-4 h-4 text-brand-gold" />
                <span>Investor-Focused</span>
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
                <Briefcase className="w-4 h-4 text-brand-gold" />
                <span>Real Estate & Transactional Law</span>
              </div>
            </div>

            {/* Video Embed — placeholder using existing hero video. Swap for /videos/realestate-hero.mp4 when ready. */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="aspect-video bg-slate-900 rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/lawyer-on-call.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-6">
              <div className="max-w-2xl mx-auto w-full">
                <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl px-6 py-4">
                  <p className="text-slate-600 text-center leading-relaxed text-sm">
                    <span className="font-semibold text-brand-navy">Real estate, business & transactional law for investors</span> — closings, LLC structuring, evictions, contracts, recoveries. We do not handle civil lawsuits at trial, criminal defense, family law, or personal injury.
                  </p>
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-brand-gold/25 hover:shadow-xl hover:shadow-brand-gold/30 transform hover:-translate-y-0.5 transition-all text-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution Intro ── */}
      <section className="py-20 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 tracking-tight">
              The Legal Side Of Real Estate Investing — <span className="text-brand-gold-dark">Done Right.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Investors lose money two ways: deals that close wrong, and vendors that quietly overcharge. We close clean, structure your portfolio so a tenant claim can't reach your personal assets, and pull the records when something feels off in the numbers.
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

            <style>{`
              @keyframes gold-border-glow {
                0%, 100% { border-color: #D97706; box-shadow: 0 0 10px rgba(217, 119, 6, 0.3); }
                50% { border-color: #F59E0B; box-shadow: 0 0 20px rgba(245, 158, 11, 0.5); }
              }
              .animate-gold-border { animation: gold-border-glow 2s ease-in-out infinite; }
            `}</style>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </section>

      {/* ── What You Get ── */}
      <section id="what-you-get" className="py-20 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 text-center tracking-tight">
              Everything An Investor Needs. One Fee.
            </h2>
            <p className="text-lg text-slate-500 text-center mb-10">
              No nickel-and-diming. No "that's outside scope." Comprehensive legal support for the way you actually do business.
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
                Get Started
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
              Built For Investors Who Treat Real Estate Like A Real Business
            </h2>

            <div className="space-y-4 text-left max-w-2xl mx-auto mb-6">
              {[
                "You own 1+ rental property, flip houses, wholesale, or are actively building a portfolio",
                "You're tired of paying $400/hour to read a closing doc",
                "Your portfolio's getting bigger and the legal exposure is getting scarier",
                "You want a lawyer who knows real estate at the county courthouse level",
                "You want a lawyer who leverages AI to work faster and smarter — not one stuck in 1995",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl cursor-default">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-brand-navy-darker font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-sm mb-8">
              This is not for hobbyists with one Airbnb they barely care about. This is ongoing real estate counsel for investors with skin in the game.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
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
                One bad closing. One overcharging vendor. One tenant claim that reaches your personal assets. That's all it takes.
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

            <div className="bg-brand-cream border border-slate-200 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-bold text-brand-navy mb-1">Zero-Risk Guarantee</p>
                  <p className="text-slate-700 text-sm">
                    Month-to-month. No long-term contracts. No cancellation fees. If it's not working, you cancel with 30 days notice. Most investor clients stay because the recovery and protection work pays for the retainer many times over.
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

            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-navy mb-2 text-center">Why We Use an Application Process</h3>
                <p className="text-slate-600 text-center leading-relaxed text-sm">
                  This is an on-demand service reserved for investors we know we can serve well. By keeping a selective client roster, we ensure every client gets fast response times, real strategy, and a partner who actually knows real estate. Quality over quantity — always.
                </p>
              </div>
            </div>

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

      {/* ── Final CTA ── */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
              Stop Asking AI for Real Estate Advice.<br />
              Start Having a Lawyer on Your Team.
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Apply for on-demand legal counsel built for real estate investors. We work with a limited number of clients to ensure exceptional service.
            </p>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:-translate-y-0.5"
              >
                Get Started
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
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <RealEstateContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default RealEstate;
