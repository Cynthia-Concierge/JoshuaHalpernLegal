import { useState, useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);

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
    { icon: DollarSign, text: "You got a $4,000 invoice for a contract review that took 2 hours" },
    { icon: Clock, text: "You waited 3 weeks for your lawyer to return a simple email" },
    { icon: AlertCircle, text: "You skipped legal review on a deal because you couldn't afford the hourly rate" },
    { icon: Scale, text: "You're using Google and ChatGPT for legal questions because real lawyers are too expensive" },
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
      answer: "AI tools like ChatGPT, Claude, Grok, and Google can't practice law — it's explicitly prohibited. They don't know your business context, can't file anything on your behalf, and have zero liability if they're wrong. More importantly: when you get a cease & desist, an employee lawsuit, or a partnership dispute, you need a licensed attorney who understands your situation and will advocate for you — not a chatbot that disclaims responsibility in the fine print."
    },
    {
      question: "What can you do that AI can't?",
      answer: "AI gives generic information. I give you legal strategy tailored to YOUR business, YOUR state, and YOUR specific situation. I draft and negotiate YOUR contracts. I represent YOUR interests in disputes. I file documents with the state on YOUR behalf. And when something goes sideways, I'm the one on the phone with opposing counsel — not a chatbot saying 'I can't provide legal advice.' You wouldn't trust WebMD to do surgery. Same logic applies here."
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
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-4 py-1.5 rounded-full text-sm text-brand-gold font-medium">
              <Zap className="w-4 h-4" />
              For Business Owners Tired of Overpaying Lawyers
            </div>

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
            </div>

            {/* Video Embed */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="aspect-video bg-slate-100 rounded-xl shadow-xl border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-gold/20 border-2 border-brand-gold/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-slate-500 font-medium">Video Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="text-3xl md:text-4xl font-bold text-brand-navy">
              Starting at <span className="text-brand-gold">$1,500/mo</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-brand-gold/25 hover:shadow-xl hover:shadow-brand-gold/30 transform hover:-translate-y-0.5 transition-all text-lg"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500">Selective client intake. Takes 2 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="py-20 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3 text-center tracking-tight">
              Sound Familiar?
            </h2>
            <p className="text-lg text-slate-500 text-center mb-10">
              If any of this hits home, you're not alone — and there's a better way.
            </p>

            <div className="space-y-3">
              {painPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white border border-red-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-brand-navy-dark font-medium text-base leading-relaxed pt-1.5">{point.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
              <p className="text-xl font-bold text-brand-navy mb-2">
                The hourly billing model is designed to make your lawyer rich.
              </p>
              <p className="text-base text-slate-600">
                Not to solve your problems efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
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

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-gold-dark mb-1">60%</div>
                <div className="text-sm text-slate-600 font-medium">Less than hourly billing</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-gold-dark mb-1">24hr</div>
                <div className="text-sm text-slate-600 font-medium">Max response time</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-gold-dark mb-1">$0</div>
                <div className="text-sm text-slate-600 font-medium">Surprise invoices</div>
              </div>
            </div>

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

      {/* ── Meet Josh ── */}
      <section id="about" className="py-20 bg-brand-cream relative">
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
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-1">
                    Meet Josh Halpern
                  </h2>
                  <p className="text-brand-gold-dark font-semibold mb-4">Founder, Legal Halp</p>
                  <div className="space-y-3 text-brand-navy-darker leading-relaxed">
                    <p>
                      I spent years at a BigLaw firm watching business owners get billed into oblivion for straightforward legal work. A contract review shouldn't cost $3,000. A quick legal question shouldn't come with a $500 invoice.
                    </p>
                    <p>
                      I built Legal Halp to fix that. Same quality legal work. Same licensed attorney. But instead of an hourly meter, you pay one flat monthly fee — and you can actually <strong>use</strong> your lawyer without worrying about the bill.
                    </p>
                    <p className="font-semibold text-brand-navy">
                      Every piece of work is personally handled by me. Not a paralegal. Not a chatbot. Not an AI. Me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
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

      {/* ── Why Application-Based ── */}
      <section className="py-16 bg-brand-cream relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-navy mb-3 text-center">Why We Use an Application Process</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                This is an on-demand service reserved for established businesses we know we can serve well. By maintaining a selective client roster, we ensure every client gets exceptional attention, fast response times, and personalized legal strategy. Quality over quantity — always.
              </p>
            </div>
          </div>
        </div>
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
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
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
                    quote: "I was paying $400/hour to my old firm. Josh reviewed the same vendor contract for a flat fee and caught issues they missed. Saved me $2,500 on one deal alone.",
                    name: "Sarah Chen",
                    title: "Founder & CEO",
                    company: "TechFlow SaaS",
                    revenue: "$800K ARR"
                  },
                  {
                    quote: "I used to avoid calling my lawyer because of the cost. Now I text Josh whenever something comes up. Response time is incredible and I actually understand my legal position.",
                    name: "Marcus Williams",
                    title: "Owner",
                    company: "Williams E-commerce",
                    revenue: "$2M revenue"
                  },
                  {
                    quote: "Best decision for my business. Had an employee issue that would've cost me $5K+ in BigLaw fees. Josh handled it same-day, and it's covered in my monthly retainer.",
                    name: "Jennifer Park",
                    title: "Founder",
                    company: "Park Marketing Group",
                    revenue: "6-figure agency"
                  },
                  {
                    quote: "We were spending $8K-12K per month on legal fees. Now it's predictable, and Josh is more responsive than our old firm ever was. The ROI is insane.",
                    name: "David Torres",
                    title: "Co-Founder",
                    company: "BuildRight Construction",
                    revenue: "$5M revenue"
                  },
                  {
                    quote: "Josh drafted our partnership agreement in 48 hours. My previous attorney quoted me $6,500 and wanted 3 weeks. The quality is better and I can actually reach him.",
                    name: "Amanda Foster",
                    title: "Managing Partner",
                    company: "Foster & Associates",
                    revenue: "Professional services"
                  },
                  {
                    quote: "I was using LegalZoom templates and crossing my fingers. Josh found gaps that could've destroyed my business. Now I sleep better knowing I'm actually protected.",
                    name: "Ryan Mitchell",
                    title: "Founder",
                    company: "MitchTech Consulting",
                    revenue: "$1.2M revenue"
                  },
                  {
                    quote: "The flat fee model changed everything. I ask legal questions I never would have asked before because I'm not watching the clock. It's like having in-house counsel.",
                    name: "Lisa Nguyen",
                    title: "CEO",
                    company: "Nguyen Digital",
                    revenue: "7-figure agency"
                  },
                  {
                    quote: "Josh caught a non-compete clause in a vendor contract that would've locked us out of our biggest market. That one catch paid for a year of his service.",
                    name: "James Patterson",
                    title: "Owner",
                    company: "Patterson Logistics",
                    revenue: "$3M revenue"
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
                        <p className="text-xs text-slate-400 mt-1">{testimonial.revenue}</p>
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
    </div>
  );
};

export default Index;
