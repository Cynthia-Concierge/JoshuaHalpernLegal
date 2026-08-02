import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Shield,
  Phone,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  MessageCircle,
  Users,
  Briefcase,
  Handshake,
  DollarSign,
  Star,
  ChevronDown,
  ChevronUp,
  Clock,
  GraduationCap,
} from "lucide-react";

const whatYouGet = [
  {
    icon: FileCheck,
    title: "Contracts & Agreements",
    desc: "Drafting, reviewing, and negotiating vendor agreements, client contracts, NDAs, and partnership deals",
  },
  {
    icon: Users,
    title: "Employment Law",
    desc: "Offer letters, terminations, employee handbooks, equity compensation plans, and HR compliance",
  },
  {
    icon: Shield,
    title: "Brand & IP Protection",
    desc: "Trademark filings, copyright registration, website terms of service, and privacy policies",
  },
  {
    icon: Briefcase,
    title: "Business Strategy",
    desc: "Entity structuring (LLC vs S-Corp), operating agreements, compliance, and regulatory guidance",
  },
  {
    icon: Handshake,
    title: "Deal Negotiation",
    desc: "Strategic counsel on partnerships, vendor terms, investor agreements, and key business deals",
  },
  {
    icon: MessageCircle,
    title: "Direct Access",
    desc: "Text, email, or call your attorney directly. No gatekeepers, no assistants, no billable surprises",
  },
];

const faqs = [
  {
    question: "How is this different from hiring a law firm?",
    answer:
      "Law firms bill hourly. Every email, every call, every 6-minute increment costs you money. With Legal Halp, you pay one flat monthly fee and get unlimited access to your attorney. No timers. No surprise invoices. Just legal support when you need it.",
  },
  {
    question: "Is a real attorney handling my work?",
    answer:
      "Yes. I'm Josh Halpern, a licensed attorney with 10+ years of experience, including BigLaw. I personally handle every client. You're never talking to a paralegal or a chatbot.",
  },
  {
    question: "What's NOT included?",
    answer:
      "Courtroom litigation (I'm business counsel, not a trial lawyer), regulatory filings requiring specialized licensing (SEC, patent prosecution), and work outside your plan scope. If you need something beyond your tier, I'll quote it upfront — no surprises.",
  },
  {
    question: "How fast do you respond?",
    answer:
      "24-48 hours on the Essential plan. Same-day on Ongoing and General Counsel. Urgent matters are always prioritized regardless of plan.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Month-to-month. No long-term contracts. 30 days notice. Most clients stay because they save thousands compared to hourly billing.",
  },
  {
    question: "What if I don't use it one month?",
    answer:
      "You're still covered. Legal needs are unpredictable — you might go a month with no issues, then suddenly need contract review, an employment termination, or a cease & desist response. The retainer ensures I'm available when you need me, not scrambling to find an attorney during a crisis. Think of it like insurance: you pay for peace of mind and immediate access, not just usage.",
  },
];

const pricingTiers = [
  {
    name: "Essential Counsel",
    price: "From $500/mo",
    description:
      "For businesses that need a low-volume monthly flat fee arrangement. Contract reviews, quick questions, and practical guidance before issues get expensive.",
    features: [
      "Monthly on-call access",
      "Contract review & drafting",
      "Quick legal questions answered",
      "Priority response (48 hours)",
      "Email & text access",
    ],
    popular: false,
  },
  {
    name: "Ongoing Counsel",
    price: "From $1,500/mo",
    description:
      "For businesses that need regular legal support each month. Contracts, employment, compliance, and entity management.",
    features: [
      "Everything in Essential",
      "Employment agreements & HR support",
      "Compliance & entity management",
      "Same-day priority response",
      "Quarterly strategy sessions",
      "Rollover hours for lighter months",
    ],
    popular: true,
  },
  {
    name: "General Counsel",
    price: "From $2,500/mo",
    description:
      "For businesses that need a lawyer embedded in operations as a true in-house legal partner. Strategy, deals, and board-level support.",
    features: [
      "Everything in Ongoing",
      "Complex contract negotiation & M&A",
      "Board meeting attendance",
      "Investor & financing documentation",
      "Strategic planning sessions",
      "Dedicated attorney relationship",
    ],
    popular: false,
  },
];

const LawyerOnCall: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* HERO                                          */}
      {/* ============================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-900">
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
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-400/8 rounded-full filter blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Phone className="w-4 h-4" />
              Lawyer-on-Call
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-[-0.02em]">
              <span className="block">Your Business Lawyer</span>
              <span className="block mt-2 text-blue-400">On Call.</span>
              <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl text-slate-300 font-bold">
                Without the hourly bill.
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium">
              A dedicated business attorney for a flat monthly fee. Text, email,
              or call whenever you need something. No timers. No surprise
              invoices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/30 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
              >
                See Pricing
              </a>
            </div>

            {/* Trust Bar */}
            <div className="pt-4">
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {[
                  { icon: GraduationCap, label: "Former BigLaw Attorney" },
                  { icon: Scale, label: "10+ Years Experience" },
                  { icon: Shield, label: "All 50 States" },
                  { icon: Star, label: "Month-to-Month" },
                  { icon: DollarSign, label: "No Surprise Invoices" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/[0.12] backdrop-blur-sm border border-white/25 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm"
                  >
                    <item.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ============================================= */}
      {/* WHAT YOU GET                                  */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                What's Included
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Everything Your Business Needs.
                <br />
                One Fee.
              </h2>
              <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                No nickel-and-diming. No "that's outside scope." Just
                comprehensive legal support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {whatYouGet.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed pl-[52px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* WHO IT'S FOR                                  */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
              Who It's For
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Built For Entrepreneurs Who Are Done Overpaying
            </h2>

            <div className="space-y-4 text-left max-w-2xl mx-auto mb-6">
              {[
                "You're running a real business — not a side project, not an idea on a napkin",
                "You have legal needs that come up regularly (contracts, hiring, compliance)",
                "You want to be able to text your lawyer without getting a $200 invoice for it",
                "You want a lawyer who leverages AI to work faster and smarter — not one stuck in 1995",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-sm">
              This is not for individuals with one-off legal questions. This is
              ongoing business counsel.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* PRICING                                       */}
      {/* ============================================= */}
      <section id="pricing" className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                Pricing
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
                What could cost you{" "}
                <span className="text-red-400 line-through decoration-2">
                  $50,000
                </span>{" "}
                is{" "}
                <span className="text-blue-600">$500–$2,500/month</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                One lawsuit. One contract dispute. One employee issue. That's
                all it takes.
              </p>
            </div>

            {/* Tier cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left md:items-stretch md:pt-4">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                    tier.popular
                      ? "bg-white border-2 border-blue-500 shadow-xl md:-translate-y-2 hover:-translate-y-3"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-blue-600 font-bold text-lg mb-3">
                    {tier.price}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {tier.description}
                  </p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-xl transition-all text-sm mt-auto ${
                      tier.popular
                        ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/25"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">
              Every option is a monthly flat fee — we'll match the right level
              of support to your business on the call.{" "}
              <span className="font-bold text-slate-900">
                Plans from $500/mo.
              </span>
            </p>

            {/* Risk Reversal */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-bold text-slate-900 mb-1">
                    Zero-Risk Guarantee
                  </p>
                  <p className="text-slate-700 text-sm">
                    Month-to-month. No long-term contracts. No cancellation
                    fees. If it's not working, you cancel with 30 days notice.
                    We keep it that simple because the model works — and clients
                    stay because of the savings, not the fine print.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FAQ                                           */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Questions? Answers.
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 py-4 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FINAL CTA                                     */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden text-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Stop Overpaying for Legal Help?
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Book a free 15-minute consultation. I'll tell you exactly what
                you need, what it costs, and whether we're a good fit. No
                pressure, no obligation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Schedule Your Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FOOTER                                        */}
      {/* ============================================= */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/logo.png"
              alt="Legal Halp"
              className="h-10 brightness-0 invert opacity-80 mb-1"
            />
            <p className="text-sm text-slate-500 mt-1">
              by Joshua Halpern, Esq.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link
              to="/terms"
              className="hover:text-blue-400 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/payment-policy"
              className="hover:text-blue-400 transition-colors"
            >
              Payment & Refund Policy
            </Link>
          </div>

          <p className="text-xs text-slate-600 mb-6">
            LLC Formation &bull; Estate Planning &bull; Contracts &bull; IP
            Protection &bull; Real Estate &bull; Business Law
          </p>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Disclaimer: The information provided on this website does not, and
            is not intended to, constitute legal advice; instead, all
            information, content, and materials available on this site are for
            general informational purposes only.
          </p>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            By providing your phone number, you agree to receive text messages
            from Legal Halp Law. Message and data rates may apply. Reply STOP to
            opt out.
          </p>

          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Legal Halp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawyerOnCall;
