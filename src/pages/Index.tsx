import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import VideoCarousel from "@/components/VideoCarousel";
import ContactModal from "@/components/ContactModal";
import { FORM_SUBMIT_URL } from "@/config";
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
} from "lucide-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);

  const whatYouGet = [
    { icon: FileCheck, title: "Contracts & Agreements", desc: "Drafting, reviewing, and negotiating vendor agreements, client contracts, NDAs, and partnership deals" },
    { icon: Users, title: "Employment Law", desc: "Offer letters, terminations, employee handbooks, equity compensation plans, and HR compliance" },
    { icon: Shield, title: "Brand & IP Protection", desc: "Trademark filings, copyright registration, website terms of service, and privacy policies" },
    { icon: Briefcase, title: "Business Strategy", desc: "Entity structuring (LLC vs S-Corp), operating agreements, compliance, and regulatory guidance" },
    { icon: Handshake, title: "Deal Negotiation", desc: "Strategic counsel on partnerships, vendor terms, investor agreements, and key business deals" },
    { icon: MessageCircle, title: "Direct Access", desc: "Text, email, or call your attorney directly. No gatekeepers, no assistants, no billable surprises" },
  ];

  const painPoints = [
    { icon: DollarSign, text: "You got a $4,000 invoice for a contract review that took 2 hours" },
    { icon: Clock, text: "You waited 3 weeks for your lawyer to return a simple email" },
    { icon: AlertCircle, text: "You skipped legal review on a deal because you couldn't afford the hourly rate" },
    { icon: Scale, text: "You're using Google and ChatGPT for legal questions because real lawyers are too expensive" },
  ];

  const steps = [
    { num: "1", title: "Book Your Free Audit", desc: "15-minute call. We review what you're currently spending on legal and where you're exposed." },
    { num: "2", title: "Get Your Custom Plan", desc: "We'll recommend the right retainer tier based on your actual business needs. No upselling." },
    { num: "3", title: "Start Getting Legal Done", desc: "Text, email, or call your attorney whenever you need something. Flat fee. No surprises." },
  ];

  const faqs = [
    {
      question: "How is this different from hiring a law firm?",
      answer: "Law firms bill hourly. Every email, every call, every 6-minute increment costs you money. With Legal Halp, you pay one flat monthly fee and get unlimited access to your attorney. No timers. No surprise invoices. Just legal support when you need it."
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
    currentLegalSpend?: string;
    mainNeed?: string;
    state?: string;
  }) => {
    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || '';

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
          current_legal_spend: formData.currentLegalSpend || '',
          main_need: formData.mainNeed || '',
          state: formData.state || '',
          tags: ['website', 'legal cost audit'],
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
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
                FAQ
              </button>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-all text-sm"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-36 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-emerald-500/8 rounded-full filter blur-[120px]" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-emerald-400/6 rounded-full filter blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-sm text-emerald-300 font-medium">
              <Zap className="w-4 h-4" />
              For Business Owners Tired of Overpaying Lawyers
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Your On-Demand Lawyer Without Paying $500/Hour
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto">
              Ask questions, review contracts, and get real answers in real time—without booking calls or watching the clock.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Former BigLaw Attorney</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-emerald-400" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>All 50 States</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-emerald-400" />
                <span>Month-to-Month</span>
              </div>
            </div>

            {/* Video Embed */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="aspect-video bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700/50 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-400/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-slate-400 font-medium">Video Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="text-3xl md:text-4xl font-bold text-white">
              Starting at <span className="text-emerald-400">$1,500/mo</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all text-lg"
              >
                Get Your Free Legal Audit
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500">Free 15-min call. No obligation. No credit card.</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ── Pain Points ── */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
              Sound Familiar?
            </h2>
            <p className="text-lg text-slate-500 text-center mb-10">
              If any of this hits home, you're not alone — and there's a better way.
            </p>

            <div className="space-y-4">
              {painPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="flex items-center justify-center gap-4 p-5 bg-red-50/60 border border-red-100 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-800 font-medium text-lg leading-snug text-center flex-1">{point.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <p className="text-xl font-bold text-slate-900 mb-1">
                The hourly billing model is designed to make your lawyer rich.
              </p>
              <p className="text-lg text-slate-600">
                Not to solve your problems efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      </section>

      {/* ── Solution Intro ── */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What If Your Lawyer Worked <span className="text-emerald-600">For</span> You — Not Against Your Budget?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Legal Halp gives you a dedicated business attorney for a flat monthly fee. You text, email, or call when you need something. We handle it. No timers. No invoices for "reviewing your email."
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-emerald-600 mb-1">60%</div>
                <div className="text-sm text-slate-600 font-medium">Less than hourly billing</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-emerald-600 mb-1">24hr</div>
                <div className="text-sm text-slate-600 font-medium">Max response time</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-emerald-600 mb-1">$0</div>
                <div className="text-sm text-slate-600 font-medium">Surprise invoices</div>
              </div>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get Your Free Legal Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      </section>

      {/* ── Meet Josh ── */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <img
                    src="/josh-halpern-headshot.png"
                    alt="Josh Halpern"
                    className="w-28 h-28 rounded-2xl object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                    Meet Josh Halpern
                  </h2>
                  <p className="text-emerald-600 font-semibold mb-4">Founder, Legal Halp</p>
                  <div className="space-y-3 text-slate-700 leading-relaxed">
                    <p>
                      I spent years at a BigLaw firm watching business owners get billed into oblivion for straightforward legal work. A contract review shouldn't cost $3,000. A quick legal question shouldn't come with a $500 invoice.
                    </p>
                    <p>
                      I built Legal Halp to fix that. Same quality legal work. Same licensed attorney. But instead of an hourly meter, you pay one flat monthly fee — and you can actually <strong>use</strong> your lawyer without worrying about the bill.
                    </p>
                    <p className="font-semibold text-slate-900">
                      Every piece of work is personally handled by me. Not a paralegal. Not a chatbot. Not an AI. Me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      </section>

      <VideoCarousel />

      {/* ── What You Get ── */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-center">
              Everything Your Business Needs. One Fee.
            </h2>
            <p className="text-lg text-slate-500 text-center mb-10">
              No nickel-and-diming. No "that's outside scope." Just comprehensive legal support.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {whatYouGet.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed pl-[52px]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
              Three Steps. That's It.
            </h2>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-5 text-left">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-emerald-500/25">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
              >
                Book Your Free Audit — Step 1
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Built For Business Owners Who Are Done Overpaying
            </h2>

            <div className="space-y-4 text-left max-w-2xl mx-auto mb-6">
              {[
                "You're running a real business — not a side project, not an idea on a napkin",
                "You have legal needs that come up regularly (contracts, hiring, compliance)",
                "You're earning $500K+ in revenue and need strategic counsel, not templates",
                "You want to be able to text your lawyer at 9pm without getting a $200 invoice for it",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-sm mb-8">
              This is not for individuals with one-off legal questions. This is ongoing business counsel.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 bg-slate-900 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Function Health-style headline */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-center mx-auto max-w-4xl">
                What could cost you{" "}
                <span className="relative inline-block">
                  <span className="text-red-400 line-through decoration-2">$50,000</span>
                </span>{" "}
                is{" "}
                <span className="text-emerald-400">$1,500/month</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto text-center">
                One lawsuit. One contract dispute. One employee issue. That's all it takes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-xl bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl cursor-default relative ${
                    tier.highlighted
                      ? "border-2 border-emerald-500 shadow-lg"
                      : "border border-slate-700 shadow-sm"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{tier.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">/mo</span>
                  </div>
                  <ul className="space-y-2.5 text-left">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Risk Reversal */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-bold text-white mb-1">Zero-Risk Guarantee</p>
                  <p className="text-slate-300 text-sm">
                    Month-to-month. No long-term contracts. No cancellation fees. If it's not working, you cancel with 30 days notice. We keep it that simple because the model works — and clients stay because of the savings, not the fine print.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
            >
              Find Out Which Plan Fits Your Business
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
              Questions? Answers.
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stop Asking AI for Legal Advice.<br />
              Start Having a Lawyer on Your Team.
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              Book a free 15-minute Legal Cost Audit. We'll review what you're currently spending and show you exactly how much you'd save.
            </p>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
              >
                Get Your Free Legal Audit
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500">No commitment. No credit card. Just a conversation.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <button
          onClick={openModal}
          className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-colors"
        >
          Get Your Free Legal Audit
          <ArrowRight className="w-5 h-5" />
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
