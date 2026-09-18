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
  Layers,
  Landmark,
  Building2,
} from "lucide-react";

const whatYouGet = [
  {
    icon: Handshake,
    title: "Deals & Transactions",
    desc: "Acquisitions, equity purchases, partner buyouts, joint ventures.",
  },
  {
    icon: Layers,
    title: "Entity & Holding Structure",
    desc: "Holding company design, multi-state cleanup, restructuring.",
  },
  {
    icon: Landmark,
    title: "Governance & Equity",
    desc: "Operating agreements, buy-sell, member exits, investor docs.",
  },
  {
    icon: FileCheck,
    title: "Commercial Contracting",
    desc: "MSAs, vendor terms, client contracts, NDAs, licensing.",
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    desc: "Acquisitions, leasing on both sides, title and escrow.",
  },
  {
    icon: Users,
    title: "Employment & IP",
    desc: "Offer letters, separations, classification, trademarks.",
  },
  {
    icon: MessageCircle,
    title: "Direct Access",
    desc: "Text, email or call me directly. No gatekeepers, no timers.",
  },
];

const faqs = [
  {
    question: "How is this different from hiring a law firm?",
    answer:
      "Law firms bill hourly, in six-minute increments. You pay one flat monthly fee instead. No timers, no surprise invoices.",
  },
  {
    question: "Is a real attorney handling my work?",
    answer:
      "Yes. I'm Josh Halpern, 10+ years of corporate and transactional practice including BigLaw. I handle every matter personally.",
  },
  {
    question: "Do you handle acquisitions and larger transactions?",
    answer:
      "Yes. Acquisitions, buyouts, holding company restructuring, joint ventures and investor documentation are core practice. Deal work is scoped and quoted separately from the monthly fee.",
  },
  {
    question: "What's NOT included?",
    answer:
      "Courtroom litigation. I'm transactional counsel, not a trial lawyer, so litigation goes to referral counsel. Also excluded: SEC registration, patent prosecution, and work outside your plan scope.",
  },
  {
    question: "How fast do you respond?",
    answer:
      "24-48 hours on the Essential plan. Same-day on Ongoing and General Counsel. Urgent matters are always prioritized regardless of plan.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Month-to-month, 30 days notice, no long-term contract.",
  },
  {
    question: "What if I don't use it one month?",
    answer:
      "You're still covered. The retainer means I'm available the week something breaks, not scrambling to find counsel mid-crisis.",
  },
];

const pricingTiers = [
  {
    name: "Essential Counsel",
    price: "$2,000/mo",
    description:
      "Contract review, quick calls, and guidance before issues get expensive.",
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
    price: "$3,500/mo",
    description:
      "Regular support. Contracting, employment, compliance, entity management.",
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
    price: "From $5,000/mo",
    description:
      "The in-house legal function, outsourced. For companies running real deals.",
    features: [
      "Everything in Ongoing",
      "M&A, buyouts & deal execution",
      "Holding company & entity structuring",
      "Governance, equity & investor documentation",
      "Commercial real estate & leasing",
      "Board and management meeting attendance",
      "Coordination with your CPA and advisors",
    ],
    popular: false,
  },
  {
    name: "Portfolio Counsel",
    price: "Scoped to the portfolio",
    description:
      "For multi-entity groups spanning several operating companies at once.",
    features: [
      "Everything in General Counsel",
      "Multi-entity and intercompany governance",
      "Portfolio-wide contracting standards",
      "Standing diligence and records discipline",
      "Referral counsel management across jurisdictions",
      "Engagement scoped after a structure review",
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
              <Briefcase className="w-4 h-4" />
              Outside General Counsel
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-[-0.02em]">
              <span className="block">Your In-House Legal</span>
              <span className="block mt-2 text-blue-400">Function. Outsourced.</span>
              <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl text-slate-300 font-bold">
                One senior attorney. One fixed monthly fee.
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium">
              Deals, governance, contracting, and the everyday legal work of
              running the company, handled by an attorney who already knows
              your business. No timers. No handoffs. No surprise invoices.
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
                  { icon: GraduationCap, label: "Former BigLaw Corporate Attorney" },
                  { icon: Scale, label: "10+ Years Transactional Practice" },
                  { icon: Handshake, label: "M&A & Deal Execution" },
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
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                What's Included
              </h2>
              <p className="text-lg text-slate-500 mt-3">
                The work a general counsel handles, under one monthly fee.
                Major transactions are scoped with you before work starts.
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
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Who It's For
            </h2>

            <div className="space-y-4 text-left max-w-2xl mx-auto mb-6">
              {[
                "You have an entity chart or a portfolio to keep current",
                "Deals cross your desk: acquisitions, buyouts, leases, investor paperwork",
                "You want counsel who already knows the business",
                "You want a senior attorney reachable directly, without an invoice per question",
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
              This is not for one-off legal questions. This is a standing
              counsel relationship.
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
                A general counsel costs{" "}
                <span className="text-slate-400">$250,000+</span> a year.
                <br className="hidden md:block" /> This is the same function,{" "}
                <span className="text-blue-600">scoped to what you use</span>.
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Every engagement is a fixed monthly fee set on the call, after
                we look at the entity structure and what is actually in front
                of you.
              </p>
            </div>

            {/* Tier cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 text-left md:items-stretch md:pt-4">
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
              Fee matched to the structure and workload on the call. Deal work
              is quoted separately.
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
                    Month-to-month. No contracts, no cancellation fees. Cancel
                    with 30 days notice.
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
                Let's Look At What's Actually In Front of You
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Book a 15-minute call. We will go through the entity structure,
                what is on the docket, and what the right level of support
                looks like. You will have a number before any work begins.
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
            Mergers &amp; Acquisitions &bull; Outside General Counsel &bull;
            Entity Structuring &bull; Governance &bull; Commercial Real Estate
            &bull; Contracts &bull; IP
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
