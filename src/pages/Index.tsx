import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { GHL_WEBHOOK_URL } from "@/config";
import {
  Scale,
  AlertCircle,
  Sparkles,
  FileCheck,
  PenLine,
  Building2,
  Home,
  MessageCircle,
  UserRound,
  Users,
  DollarSign,
  Phone,
  ArrowRight,
  CheckCircle2,
  Shield,
  Briefcase,
  Zap,
  TrendingDown,
  Clock,
  Handshake,
  Target,
  Rocket,
  BookOpen,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ANIMATION_DELAY = 120;

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const whatYouGet = [
    { icon: FileCheck, label: "Contract review and drafting (vendor agreements, client contracts, NDAs)" },
    { icon: Users, label: "Employment law support (offer letters, terminations, handbooks, equity plans)" },
    { icon: Shield, label: "Trademark and copyright protection (filings, infringement defense)" },
    { icon: BookOpen, label: "Website legal compliance (privacy policies, terms of service, disclaimers)" },
    { icon: Briefcase, label: "Business structure advice (LLC vs S-Corp, operating agreements)" },
    { icon: MessageCircle, label: "Direct access via Slack, email, or phone — no surprise bills" },
  ];

  const whoFor = [
    "Small businesses that need legal support without hourly billing",
    "Founders and entrepreneurs building revenue-generating businesses",
    "Business owners who know they need legal help but are tired of being overcharged",
  ];

  const faqs = [
    {
      question: "Why can't I just use ChatGPT or other AI tools for legal questions?",
      answer: "You can read a medical textbook and diagnose your symptoms, but you still see a doctor when it matters. ChatGPT can explain legal concepts—it might even give you a contract template—but it can't assess the risk in your specific situation, spot the missing clause that will cost you later, or know which state law applies to your business. Legal work isn't about having access to information. It's about knowing which information matters, what to do with it, and when you're exposed. I use AI to research faster and draft more efficiently, but I bring 10+ years of judgment, malpractice insurance, and a law license. When something goes wrong, AI isn't liable. I am."
    },
    {
      question: "Is a real attorney actually involved, or is this all automated?",
      answer: "Yes—I'm Josh Halpern, a licensed attorney, and I personally handle every client. AI tools help me draft contracts faster, research precedent instantly, and spot issues in documents more efficiently. But every piece of work is reviewed, customized, and delivered by me. You're not talking to a chatbot—you're working with a real lawyer who happens to use better tools than most law firms."
    },
    {
      question: "How does it actually work? What's the process?",
      answer: "Simple: you reach out via email, Slack, or phone with a legal question or project. I respond within 24-48 hours (same-day for urgent matters on higher-tier plans). I draft contracts, review documents, provide guidance, and handle your legal needs just like an in-house counsel would—except you pay a flat monthly fee instead of hourly. No timers, no invoices for every email. Just ongoing legal support when you need it."
    },
    {
      question: "What exactly does the flat monthly fee include?",
      answer: "Everything within your plan's scope: contract review and drafting, employment law guidance (offer letters, terminations, equity plans), trademark filings and IP strategy, compliance work (privacy policies, terms of service), general business legal advice, and unlimited questions via email/Slack. What's NOT included: courtroom litigation (I'm counsel, not trial representation), regulatory filings that require specialized licensing (SEC, patent prosecution), and one-off projects outside your plan tier."
    },
    {
      question: "What if I need more than what my plan includes?",
      answer: "You can upgrade to a higher tier anytime, or we can scope additional work on a project basis. Most clients find that the Business Retainer ($2,500/month) covers 90% of their needs. If you're hitting the limits consistently, we'll talk about moving up—but there are no surprise bills. You'll always know the cost upfront."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Month-to-month, no long-term contracts. If it's not working for you, you can cancel with 30 days' notice. Most clients stay because the flat-rate model saves them thousands compared to hourly billing."
    },
    {
      question: "How is this different from LegalZoom or other online legal services?",
      answer: "LegalZoom sells templates. I'm your attorney. You get personalized legal strategy, custom contract drafting, real-time advice, and someone who understands your business. When something complex comes up, you're not filling out a form—you're calling me. The difference is having an actual legal partner vs. buying documents off a shelf."
    },
    {
      question: "Do you handle litigation or represent clients in court?",
      answer: "No. I focus on transactional work and business counsel—contracts, compliance, employment, IP. If you need courtroom representation, I can refer you to trial attorneys I trust. This retainer model is designed for ongoing preventive legal work, not active lawsuits."
    }
  ];

  const pricingTiers = [
    {
      name: "Essential Retainer",
      price: "$1,500",
      features: [
        "Contract review (NDAs, vendor agreements, client contracts)",
        "Email/Slack support (48-hour response time)",
        "Basic employment guidance (offer letters, terminations)",
        "Simple IP filings (trademark search, basic copyright)",
      ],
      bestFor: "Small businesses with occasional legal needs",
    },
    {
      name: "Business Retainer",
      price: "$2,500",
      features: [
        "Contract drafting and negotiation",
        "Priority email/Slack support (24-hour response time)",
        "Employment law guidance (equity plans, handbooks)",
        "IP protection strategy (trademarks, copyrights)",
        "Quarterly legal checkup calls",
      ],
      bestFor: "Growing businesses with regular legal needs",
      highlighted: true,
    },
    {
      name: "Full-Service Retainer",
      price: "$5,000",
      features: [
        "Everything in Business Retainer",
        "Same-day response time",
        "M&A readiness and due diligence prep",
        "Compliance buildout (privacy policies, terms of service)",
        "Monthly strategy sessions",
      ],
      bestFor: "Established businesses ($1M+ revenue) with frequent legal needs",
    },
  ];

  const handleModalSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    businessType?: string;
    currentLegalSpend?: string;
    mainNeed?: string;
  }) => {
    try {
      // Split name into first and last
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || '';

      // Submit to GoHighLevel webhook with qualification data
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          phone: formData.phone,
          source: 'Website - On-Demand Counsel Audit',
          business_type: formData.businessType || '',
          current_legal_spend: formData.currentLegalSpend || '',
          main_need: formData.mainNeed || '',
        })
      });

      if (response.ok) {
        setIsModalOpen(false);
        navigate('/contact');
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
      const offset = 80; // Height of sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Legal Halp"
                className="h-8"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                The Difference
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                FAQ
              </button>
              <a
                href="https://www.legalhalplaw.com"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
              >
                The Firm
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition-all text-sm"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-36 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px]" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-400/8 rounded-full filter blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 px-4 py-2 rounded-full text-sm font-semibold text-emerald-300">
              <Sparkles className="w-4 h-4" />
              AI-Enabled Legal Counsel
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Your Legal Department for a Flat Monthly Fee
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto">
              Full-service legal support at a fraction of traditional law firm costs. No hourly billing. No surprise invoices.
            </p>

            {/* Tech Advantage Banner */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 via-emerald-400/10 to-blue-500/10 border border-emerald-400/20 px-6 py-3 rounded-full">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-200 font-medium">
                Powered by <span className="text-emerald-400 font-semibold">Claude Opus</span>, <span className="text-emerald-400 font-semibold">LexisNexis AI</span>, and advanced legal research tools traditional firms don't have
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-emerald-glow" />
                <span className="font-medium">Flat monthly rate</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-emerald-glow" />
                <span className="font-medium">Unlimited questions</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-emerald-glow" />
                <span className="font-medium">Same-day response</span>
              </div>
            </div>

            <div className="text-3xl md:text-4xl font-bold text-white">
              Starting at <span className="text-emerald-400 animate-emerald-glow">$1,500/mo</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg animate-emerald-glow"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ⸻ Problem */}
      <section id="how-it-works" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Stop Paying Over $500/Hour for Legal Services
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              Every email costs money. Every phone call adds up. You avoid asking questions because the meter is always running.
            </p>
            <p className="text-xl text-slate-900 font-semibold">
              <span className="text-emerald-600 animate-emerald-glow">Flat monthly rate.</span> Unlimited questions. No surprise invoices.
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-emerald-glow"></div>
      </section>

      {/* ⸻ Solution */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Next-Generation Legal Technology
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              I use tools most law firms don't have: Claude Opus, LexisNexis AI, Casetext CoCounsel, and Westlaw Precision. What used to take 5 hours takes 1.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <div className="text-3xl font-bold text-emerald-600 mb-1">5x</div>
                <div className="text-sm text-slate-600">Faster turnaround</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <div className="text-3xl font-bold text-emerald-600 mb-1">60%</div>
                <div className="text-sm text-slate-600">Lower cost</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <div className="text-3xl font-bold text-emerald-600 mb-1">24hr</div>
                <div className="text-sm text-slate-600">Response time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⸻ What You Get */}
      <section id="services" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whatYouGet.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-emerald-glow"></div>
      </section>

      {/* ⸻ Is This Right For You? */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Who This Is For
            </h2>

            <ul className="space-y-4 text-left max-w-2xl mx-auto mb-8">
              {whoFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-slate-700">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-emerald-600 animate-emerald-glow" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 animate-emerald-glow"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-emerald-glow"></div>
      </section>

      {/* ⸻ Pricing */}
      <section id="pricing" className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
              Simple Pricing
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-lg bg-white ${
                    tier.highlighted ? "border-2 border-emerald-500 shadow-lg" : "border border-slate-200"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-emerald-glow">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    <span className="text-slate-600">/mo</span>
                  </div>
                  <ul className="space-y-2 text-left">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 animate-emerald-glow" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-emerald-glow"></div>
      </section>

      {/* ⸻ FAQ */}
      <section id="faq" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-emerald-glow"></div>
      </section>

      {/* ⸻ Final CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300">
              Book a free 30-minute call. No pressure, no commitment.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:-translate-y-0.5 animate-emerald-glow"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
        >
          <Phone className="w-5 h-5" />
          Book Free Audit
        </button>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default Index;
