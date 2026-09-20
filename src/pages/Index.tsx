import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import VideoCarousel from "@/components/VideoCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactModal from "@/components/ContactModal";
import { FORM_SUBMIT_URL } from "@/config";
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
      document.title = "Legal Halp";
    };
  }, []);

  const coverage = [
    { icon: Handshake, title: "Deals & Transactions", desc: "Acquisitions, dispositions, partner buy-ins and buyouts, joint ventures, and the negotiation that gets them closed." },
    { icon: Landmark, title: "Entity Structure & Governance", desc: "Multi-entity structures, operating agreements, member and board matters, restructurings, and ownership changes." },
    { icon: FileCheck, title: "Contracts", desc: "Customer, vendor, and partner agreements drafted, reviewed, and negotiated with your leverage in mind." },
    { icon: Building2, title: "Real Estate & Leasing", desc: "Acquisitions, holding structures, commercial leases, and the financing documents that come with them." },
    { icon: Users, title: "Employment & Compliance", desc: "Executive agreements, equity and incentive plans, separations, handbooks, and regulatory questions." },
    { icon: Briefcase, title: "Strategic Counsel for Owners", desc: "A senior sounding board on risk, disputes, and big decisions before they become expensive." },
  ];

  const faqs = [
    {
      question: "What does \"embedded\" actually mean?",
      answer: "It means you have one senior attorney who learns your entities, your contracts, your people, and your deals, and stays with you month after month. You call, text, or email directly. I join the calls with counterparties, lenders, brokers, and your CPA. You stop re-explaining your business every time something comes up.",
    },
    {
      question: "How is this different from hiring a law firm?",
      answer: "A firm bills by the hour and staffs your matter with whoever is available. Here, you have a fixed monthly fee and the same senior attorney on everything. No timers, no surprise invoices, and no hesitation about picking up the phone.",
    },
    {
      question: "Can you handle M&A and larger transactions?",
      answer: "Yes. I trained in the corporate transactional group of a national law firm, and acquisitions, sales, restructurings, and real estate transactions are core to the practice. For a major transaction, we agree on scope before work starts, including whether it sits inside the retainer or is handled as a separate fixed fee. You know the number up front.",
    },
    {
      question: "Is a real attorney handling my work?",
      answer: "Yes. I'm Joshua Halpern, a former BigLaw corporate attorney, and I personally handle every client. No paralegals, no junior associates, no call center.",
    },
    {
      question: "What's not included?",
      answer: "Courtroom litigation and court appearances. I'm business counsel, not a trial lawyer. When a dispute is headed to court, I coordinate with trusted litigation counsel. Highly specialized filings such as patent prosecution or SEC registration are also outside scope. Anything outside your retainer is flagged and quoted before work starts.",
    },
    {
      question: "How fast do you respond?",
      answer: "Same business day on Ongoing and General Counsel retainers, and within 24 to 48 hours on Essential. Deal deadlines and urgent matters are always prioritized.",
    },
    {
      question: "Do you use AI?",
      answer: "Yes, as a tool. It makes research and first drafts faster, which is part of how a fixed fee works. The judgment, strategy, and accountability are mine. AI does not know which clause matters in your industry or when a deal structure will cause problems in 18 months.",
    },
    {
      question: "Is there a long-term contract?",
      answer: "No. Retainers are month-to-month with 30 days notice to cancel. Clients stay because it works, not because of the fine print.",
    },
  ];

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
              <button onClick={() => scrollToSection('coverage')} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                What's Covered
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('retainer')} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                Retainers
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                FAQ
              </button>
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
      <section className="relative pt-28 pb-44 lg:pt-36 lg:pb-60 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={DOT_PATTERN} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
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

            <p className="text-lg md:text-2xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium">
              Deals, governance, and the everyday legal work, handled by one
              senior attorney on a fixed monthly fee.
            </p>

            {/* Trust Bar */}
            <div className="flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap sm:justify-center gap-2.5">
              {[
                "Former BigLaw Corporate Attorney",
                "M&A, Governance & Real Estate",
                "Outside GC to Multi-Entity Companies",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-sm border border-white/25 hover:border-white/40 text-white text-sm md:text-base font-semibold px-4 py-3 sm:py-2.5 rounded-2xl sm:rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default max-w-full"
                >
                  <CheckCircle2 className="w-[18px] h-[18px] md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                  <span className="leading-snug">{item}</span>
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

            <div className="flex flex-col items-center gap-4">
              <PrimaryButton />
              <p className="text-slate-400 text-sm">
                15-minute call. Fixed monthly fee, quoted before we start.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom fade to white: tall smoothstep ramp that stays near-transparent
            through the upper half so the dark hero carries further down, then
            eases into white only near the section edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-80 md:h-[28rem] z-[5] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.008) 18%, rgba(255,255,255,0.03) 32%, rgba(255,255,255,0.075) 45%, rgba(255,255,255,0.15) 56%, rgba(255,255,255,0.25) 66%, rgba(255,255,255,0.38) 74%, rgba(255,255,255,0.52) 81%, rgba(255,255,255,0.67) 87%, rgba(255,255,255,0.8) 92%, rgba(255,255,255,0.91) 96%, rgba(255,255,255,0.975) 98.5%, rgba(255,255,255,1) 100%)",
          }}
        />
      </section>

      <VideoCarousel />

      {/* ── The Gap ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              The Gap Between a Law Firm and a General Counsel
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
              Most growing companies are stuck between two bad options.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { label: "Outside firm, per matter", problem: "Senior rates to someone who relearns your business every time." },
                { label: "In-house counsel", problem: "$250,000 and up, long before the workload justifies the seat." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{item.label}</p>
                  <p className="text-slate-700 leading-relaxed">{item.problem}</p>
                </div>
              ))}
            </div>

            <p className="text-xl md:text-2xl font-semibold text-slate-900 leading-snug mb-6">
              Legal Halp is the third option: the general counsel function on a
              fixed monthly fee.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Former BigLaw corporate.", "In-house availability.", "Fixed monthly fee."].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 font-semibold px-4 py-2 rounded-lg text-base">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Covered ── */}
      <section id="coverage" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                What's Covered
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Your Legal Department, Not a Help Line
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                The work a general counsel handles, from the daily contract to the deal that changes the company.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coverage.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-slate-900/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight leading-tight text-center">
              Built for Companies That Have Outgrown Per-Matter Legal
            </h2>

            <div className="space-y-3 mb-8">
              {[
                "Legal work comes up every month: contracts, hires, vendors, leases",
                "You operate through multiple entities, or have partners and investors to answer to",
                "A deal, acquisition, buyout, or restructuring is on the horizon",
                "You want one attorney who knows the whole picture, not a new one for every matter",
                "You need general counsel judgment, but not a $250,000 in-house seat",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{item}</span>
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
      <section id="how-it-works" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                3 Steps to Your Own General Counsel
              </h2>
            </div>

            <div>
              {[
                { step: "1", title: "Book a Consultation", description: "Walk me through your business, your entities, and what's on your plate." },
                { step: "2", title: "Set Your Monthly Retainer", description: "A fixed monthly fee scoped to your company. You know the number before we start." },
                { step: "3", title: "I Become Your Legal Department", description: "Contracts, deals, governance, and everything in between. Call, text, or email whenever something comes up." },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 md:gap-8 items-start relative">
                  {index < 2 && (
                    <div className="absolute left-[27px] md:left-[31px] top-[60px] w-0.5 h-[calc(100%-40px)] bg-slate-200" />
                  )}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/20 relative z-10">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="pb-12 md:pb-16">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <PrimaryButton />
            </div>
          </div>
        </div>
      </section>

      {/* ── Retainer ── */}
      <section id="retainer" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={DOT_PATTERN} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-500/30">
                Outside General Counsel
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Your General Counsel,
                <br />
                <span className="text-blue-400">On a Fixed Monthly Retainer.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
                One senior attorney who knows your entities, your contracts, and
                your deals. No timers. No surprise invoices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-10 md:pt-4">
              {[
                { name: "Essential Counsel", price: "$2,000/mo", desc: "Contract reviews, quick questions, practical guidance.", popular: false },
                { name: "Ongoing Counsel", price: "$3,500/mo", desc: "Contracts, employment, compliance, and entity management.", popular: true },
                { name: "General Counsel", price: "From $5,000/mo", desc: "Embedded in-house legal partner. Strategy, deals, board-level support.", popular: false },
              ].map((tier, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-6 transition-all hover:-translate-y-1 ${
                    tier.popular
                      ? "bg-white border-2 border-blue-500 shadow-xl md:-translate-y-2"
                      : "bg-white/10 backdrop-blur-sm border border-white/20"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-lg font-bold mb-2 ${tier.popular ? "text-slate-900" : "text-white"}`}>{tier.name}</h3>
                  <p className={`font-bold text-lg mb-3 ${tier.popular ? "text-blue-600" : "text-blue-400"}`}>{tier.price}</p>
                  <p className={`text-sm leading-relaxed ${tier.popular ? "text-slate-600" : "text-slate-300"}`}>{tier.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <PrimaryButton className="px-10" />
              <p className="text-slate-400 text-sm mt-4">
                Month-to-month. No long-term contracts. Cancel with 30 days notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes This Different ── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
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
                { icon: DollarSign, title: "One Fixed Monthly Fee", description: "No billable hours and no meter running. Pick up the phone without wondering what it costs. Anything outside scope is flagged before work starts." },
                { icon: UserCheck, title: "Direct Attorney Access", description: "No paralegals. No junior associates. No call centers. You work with me directly, and I know your business." },
              ].map((item, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto md:mx-0 shadow-lg shadow-slate-900/20">
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
      <section id="faq" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
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

            {/* Scope qualifier */}
            <div className="mt-12 bg-white border border-slate-200 rounded-2xl px-6 py-5">
              <p className="text-slate-900 uppercase tracking-[0.15em] text-xs font-bold text-center mb-4">
                Business Counsel Only. Not Handled Here:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Lawsuits & Litigation", "Court Appearances", "Criminal Defense", "Family Law / Divorce", "Personal Injury", "Immigration"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
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

      <Footer />

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
