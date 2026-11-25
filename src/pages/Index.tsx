import { useState, useRef, useEffect } from "react";
import HeroFade from "@/components/HeroFade";
import { useNavigate } from "react-router-dom";
import SiteFooter from "@/components/SiteFooter";
import VideoCarousel from "@/components/VideoCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactModal from "@/components/ContactModal";
import { FORM_SUBMIT_URL } from "@/config";
import { SITE_FAQS } from "@/data/faqs";
import { getAttribution } from "@/utils/attribution";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
import {
  FileCheck,
  Users,
  Briefcase,
  Building2,
  Handshake,
  Landmark,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Phone,
  Scale,
  Star,
  UserCheck,
  FileText,
  XCircle,
} from "lucide-react";

const DOT_PATTERN = {
  backgroundImage:
    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
  backgroundSize: "32px 32px",
};

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [miniDismissed, setMiniDismissed] = useState(false);
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
          requestAnimationFrame(() => {
            if (miniVideoRef.current && video) {
              miniVideoRef.current.currentTime = video.currentTime;
              miniVideoRef.current.muted = video.muted;
              miniVideoRef.current.play().catch(() => {});
              video.pause();
            }
          });
        } else if (entry.isIntersecting && showMiniPlayer) {
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
    const ogTitle = "Outside General Counsel, Embedded in Your Business | Legal Halp";
    const ogDesc =
      "Big-firm corporate counsel on a fixed monthly retainer. Deals, governance, contracts, and real estate, handled by one senior attorney who knows your business.";
    const ogImage = "https://legalhalplaw.com/api/og?v=4";

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
      document.title = "Legal Halp";
    };
  }, []);

  const coverage = [
    { icon: Handshake, title: "Deals & Transactions", desc: "Buying or selling a business, partner buy-ins and buyouts, and joint ventures, from negotiation through the closing documents." },
    { icon: Landmark, title: "Entity Structure & Governance", desc: "Holding companies, multi-entity structures, operating agreements, partner and member matters, and ownership changes." },
    { icon: FileCheck, title: "Contracts", desc: "Customer, vendor, contractor, and partner agreements drafted, reviewed, and negotiated with your leverage in mind." },
    { icon: Building2, title: "Real Estate & Leasing", desc: "Holding structures for investment property, purchase agreements, and commercial leases, coordinated with your title company and lender." },
    { icon: Users, title: "Employees & Contractors", desc: "Offer letters, employment and contractor agreements, handbooks, separations, and worker classification questions." },
    { icon: Briefcase, title: "Strategic Counsel for Owners", desc: "A sounding board on risk and big decisions, plus coordination with outside litigation and specialist counsel when you need them." },
  ];

  const faqs = SITE_FAQS;

  const handleModalSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    businessType?: string;
    mainNeed?: string;
    state?: string;
    additionalInfo?: string;
  }) => {
    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || '';

      // Marketing attribution: UTM params + fbclid captured at first-touch
      // (sessionStorage), plus _fbp/_fbc cookies set by the Meta pixel.
      // Server uses these for CAPI Lead matching and campaign attribution.
      const attribution = getAttribution();

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
          additional_info: formData.additionalInfo || '',
          tags: ['website', 'applied-legal-halp'],
          ...attribution,
        })
      });

      if (response.ok) {
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

  const PrimaryButton = ({ label = "Book a Consultation", className = "" }: { label?: string; className?: string }) => (
    <button
      onClick={openModal}
      className={`inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg ${className}`}
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </button>
  );

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
              {[
                { id: "retainer", label: "Pricing" },
                { id: "about", label: "About Josh" },
                { id: "coverage", label: "What's Covered" },
                { id: "how-it-works", label: "How It Works" },
                { id: "faq", label: "FAQ" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2 rounded-lg transition-all text-sm"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-28 lg:pt-36 lg:pb-40 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={DOT_PATTERN} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-600/10 rounded-full filter blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              Joshua Halpern, Esq.
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] tracking-[-0.02em]">
              <span className="block">Big-Firm Corporate Counsel.</span>
              <span className="block mt-2 text-blue-400">Embedded In Your Business.</span>
            </h1>

            <p className="fade-in-up text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium" style={{ animationDelay: "0.15s" }}>
              Deals, governance, and the everyday legal work, handled by{" "}
              <span className="text-white font-bold">one senior attorney</span> on{" "}
              <span className="relative inline-block text-white font-bold whitespace-nowrap">
                one fixed monthly fee.
                <svg aria-hidden="true" className="marker-draw absolute left-0 -bottom-1.5 md:-bottom-2 w-full h-2.5 md:h-3 text-blue-400 pointer-events-none" viewBox="0 0 300 20" preserveAspectRatio="none">
                  <path d="M4 15 C 70 13, 150 10, 296 6" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.7" />
                </svg>
              </span>
            </p>

            {/* Trust Bar */}
            <div className="flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap sm:justify-center gap-2.5">
              {[
                "Big-Firm M&A and Corporate Experience",
                "No Hourly Billing, No Surprise Invoices",
                "Month-to-Month, No Long-Term Contract",
              ].map((item, i) => (
                <div
                  key={i}
                  className="fade-in-up group relative overflow-hidden flex items-center gap-2.5 bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-sm border border-white/25 hover:border-blue-400/60 text-white text-sm md:text-base font-semibold px-4 py-3 sm:py-2.5 rounded-2xl sm:rounded-full shadow-sm hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 ease-out cursor-default max-w-full"
                  style={{ animationDelay: `${0.35 + i * 0.12}s` }}
                >
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  <CheckCircle2 className="relative w-[18px] h-[18px] md:w-5 md:h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-300" />
                  <span className="relative leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Video Embed */}
            <div className="w-full max-w-3xl mx-auto" ref={videoContainerRef}>
              <div className="aspect-video bg-slate-950 rounded-2xl shadow-2xl shadow-black/40 border-2 border-white/10 overflow-hidden">
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

            {/* Scope qualifier, directly under the video so it is unmissable */}
            <div className="max-w-2xl mx-auto w-full bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4">
              <p className="text-blue-300 uppercase tracking-[0.15em] text-[11px] font-bold text-center mb-3">
                Business Counsel Only. Not Handled Here:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Lawsuits & Litigation", "Court Appearances", "Criminal Defense", "Family Law / Divorce", "Personal Injury", "Immigration"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <PrimaryButton />
              <p className="text-slate-400 text-sm">
                Retainers from $2,500/month. 15-minute call.
              </p>
            </div>
          </div>
        </div>

        <HeroFade to="slate" />
      </section>

      {/* ── Retainer ── */}
      <section id="retainer" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                Outside General Counsel
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Your General Counsel,
                <br />
                <span className="text-blue-600">On a Fixed Monthly Retainer.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
                One senior attorney who knows your entities, your contracts, and
                your deals. No timers. No surprise invoices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-10 md:pt-4 md:items-stretch">
              {[
                { name: "Essential Counsel", price: "$2,500", bestFor: "For owners who need a lawyer to run things by.", included: ["Email access for legal questions", "Review of standard contracts you receive", "Practical, plain-English guidance", "Replies within 2 business days"], excluded: ["Drafting new agreements", "Deals and transactions"], popular: false },
                { name: "Ongoing Counsel", price: "$3,500", bestFor: "For businesses with legal work every month.", included: ["Everything in Essential", "Contract drafting and negotiation", "Employment documents and policies", "Entity and governance upkeep", "Replies within 1 business day, calls for urgent matters"], excluded: ["Deals, acquisitions, and restructurings"], popular: true },
                { name: "General Counsel", price: "From $6,000", bestFor: "For multi-entity companies and owners doing deals.", included: ["Everything in Ongoing", "Deals and transactions, scoped up front", "Investor and partner matters", "Multi-entity oversight", "Coordination with your CPA, lenders, and brokers", "Coordination with outside litigation, arbitration, and mediation counsel", "Deal deadlines prioritized"], excluded: [] as string[], popular: false },
              ].map((tier, i) => (
                <div
                  key={i}
                  className={`group relative flex flex-col rounded-2xl p-6 md:p-7 text-left cursor-default transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 ${
                    tier.popular
                      ? "bg-white border-2 border-blue-500 shadow-xl md:-translate-y-2 md:hover:-translate-y-4"
                      : "bg-white border border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    <span className="absolute left-0 top-0 w-full h-0.5 bg-blue-500 scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                  {tier.popular && (
                    <span className="absolute z-10 -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <h3 className="relative text-lg font-bold text-slate-900">{tier.name}</h3>
                  <p className="relative mt-2 text-3xl font-extrabold tracking-tight text-blue-600">{tier.price}<span className="text-base font-semibold text-slate-500">/mo</span></p>
                  <p className="relative mt-2 text-sm text-slate-600 leading-relaxed">{tier.bestFor}</p>
                  <ul className="relative mt-5 pt-5 border-t border-slate-200 space-y-2.5 text-sm">
                    {tier.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-slate-800">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {tier.excluded.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-slate-400">
                        <XCircle className="w-4 h-4 mt-0.5 text-slate-300 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 text-base md:text-lg mb-8">
              About $30K a year, compared with $250K or more for an in-house hire.
            </p>

            <div className="text-center">
              <PrimaryButton className="px-10" />
              <p className="text-slate-500 text-sm mt-4">
                Month-to-month. No long-term contracts. Cancel with 30 days notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Gap ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                The Problem & The Solution
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
                Big firms and full-time hires cost too much. There's a better way.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:items-stretch">
              {[
                {
                  label: "Hiring a Big Law Firm",
                  price: "$600+/hr",
                  highlight: false,
                  points: [
                    { good: false, text: "Every call and email costs you" },
                    { good: false, text: "High hourly rates for every conversation" },
                    { good: false, text: "Invoices you never saw coming" },
                  ],
                },
                {
                  label: "Hiring a Full-Time Lawyer",
                  price: "$250K+/yr",
                  highlight: false,
                  points: [
                    { good: true, text: "Knows your business, but costs a fortune" },
                    { good: false, text: "Salary, benefits, and overhead are all on you" },
                    { good: false, text: "Full-time pay for a part-time need" },
                  ],
                },
                {
                  label: "Legal Halp",
                  price: "From $2,500/mo",
                  highlight: true,
                  points: [
                    { good: true, text: "Same lawyer every time, already up to speed" },
                    { good: true, text: "One fixed monthly fee, no surprises" },
                    { good: true, text: "Big-firm experience without the big-firm cost" },
                  ],
                },
              ].map((col, i) => (
                <div
                  key={i}
                  className={`group relative rounded-2xl p-6 md:p-8 cursor-default transition-all duration-300 ease-out ${
                    col.highlight
                      ? "bg-slate-900 text-white shadow-2xl shadow-blue-500/20 ring-2 ring-blue-500 hover:-translate-y-1 md:-translate-y-2 md:hover:-translate-y-4 hover:shadow-blue-500/40 hover:ring-blue-400"
                      : "bg-white border-2 border-slate-300 shadow-md hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-900/10"
                  }`}
                >
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                    <span className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent ${col.highlight ? "via-white/10" : "via-blue-100/70"} to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full`} />
                    <span className="absolute left-0 top-0 w-full h-0.5 bg-blue-500 scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                  {col.highlight && (
                    <span className="absolute z-10 -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow whitespace-nowrap">
                      The Better Option
                    </span>
                  )}
                  <p className={`relative text-xs font-bold uppercase tracking-widest mb-2 ${col.highlight ? "text-blue-300" : "text-slate-600"}`}>
                    {col.label}
                  </p>
                  <p className={`relative text-3xl md:text-4xl font-extrabold tracking-tight mb-6 ${col.highlight ? "text-white" : "text-slate-900"}`}>
                    {col.price}
                  </p>
                  <ul className="relative space-y-3">
                    {col.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-0.5">
                        {p.good ? (
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${col.highlight ? "text-blue-400" : "text-emerald-500"}`} />
                        ) : (
                          <XCircle className="w-5 h-5 flex-shrink-0 text-red-400 transition-transform duration-300 group-hover:scale-110" />
                        )}
                        <span className={`font-medium ${col.highlight ? "text-slate-100" : "text-slate-800"}`}>{p.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoCarousel />

      {/* ── What's Covered ── */}
      <section id="coverage" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                What's Covered
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Everything a General Counsel Handles. One Monthly Fee.
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                From the everyday contract to the deal that changes your company, handled by one attorney who already knows your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coverage.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-blue-300">
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    <span aria-hidden="true" className="absolute left-0 top-0 w-full h-0.5 bg-blue-500 scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <div className="relative w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-slate-900/20 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="relative text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="relative text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                Who It's For
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Built for Owners Who Need a Lawyer Every Month
              </h2>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Legal questions come up every month: contracts, hires, vendors, leases",
                "You run more than one company, or have partners and investors to answer to",
                "A deal, acquisition, buyout, or restructuring is on the horizon",
                "You want one attorney who knows the whole picture, not a new one for every matter",
                "You need general counsel judgment, but not a $250,000 in-house hire",
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 cursor-default transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                  <span aria-hidden="true" className="absolute left-0 top-0 w-full h-0.5 bg-blue-500 scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <CheckCircle2 className="relative w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative text-slate-800 font-medium transition-transform duration-300 group-hover:translate-x-0.5">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-sm text-center">
              Need a single project handled instead? Defined projects are quoted as a fixed fee after a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                3 Steps to Your Own General Counsel
              </h2>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <div aria-hidden="true" className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-slate-200" />
              {[
                { step: "1", title: "Book a Consultation", description: "Walk me through your business, your entities, and what's on your plate." },
                { step: "2", title: "Set Your Monthly Retainer", description: "A fixed monthly fee scoped to your company. You know the number before we start." },
                { step: "3", title: "I Become Your Outside General Counsel", description: "Contracts, deals, governance, and everything in between. Email whenever something comes up. Urgent matters get a call." },
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/20 relative z-10 mb-5">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xs">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <PrimaryButton />
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes This Different ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                The Difference
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                What Makes This Different
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { icon: Star, title: "Big-Firm Experience", description: "Trained in the corporate group of a national law firm, advising companies on real deals. The same rigor, without the big-firm overhead." },
                { icon: DollarSign, title: "One Fixed Monthly Fee", description: "No billable hours and no meter running. Reach out without wondering what it costs. Anything outside scope is flagged before work starts." },
                { icon: UserCheck, title: "Direct Attorney Access", description: "No paralegals. No junior associates. No call centers. You work with me directly, and I know your business." },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-lg shadow-slate-900/20">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 text-center tracking-tight">
              Questions, Answered
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
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
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden text-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10">
              <FileText className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready for a General Counsel Who Knows Your Business?
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Book a consultation. We'll talk through your company, what you
                need covered, and whether a retainer is the right fit.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter tagline={<>Outside General Counsel &bull; Deals & Transactions &bull; Governance &bull; Contracts &bull; Real Estate &bull; Estate Planning</>} />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <button
          onClick={openModal}
          className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-6 rounded-xl transition-colors"
        >
          Book a Consultation
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
            <source src="/videos/lawyer-on-call.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Index;
