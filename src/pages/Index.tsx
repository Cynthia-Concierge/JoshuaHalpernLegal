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
} from "lucide-react";

const ANIMATION_DELAY = 120;

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const whatYouGet = [
    { icon: FileCheck, label: "Contract drafting, review, and negotiation (vendor agreements, partnerships, customer contracts)" },
    { icon: Users, label: "Employment law guidance (hiring, firing, equity plans, IP assignment)" },
    { icon: Shield, label: "IP strategy and protection (trademarks, copyrights, trade secrets)" },
    { icon: BookOpen, label: "Compliance and regulatory guidance (GDPR, CCPA, industry-specific regs)" },
    { icon: Handshake, label: "M&A readiness and due diligence support" },
    { icon: Target, label: "Board and investor advisory (cap table, governance, fundraising docs)" },
    { icon: MessageCircle, label: "Unlimited access via Slack, email, or phone — no billable hours" },
  ];

  const whoFor = [
    "Growth-stage startups (Series A-B)",
    "Profitable businesses (5-50 employees)",
    "Companies spending $5k-$25k/month on legal",
    "Solo founders who need strategic guidance",
  ];

  const pricingTiers = [
    {
      name: "On-Demand Counsel Lite",
      price: "$5k",
      hours: "Up to 20 hours/month",
      features: [
        "Contract review and drafting (standard agreements)",
        "Email/Slack support (24-hour response time)",
        "Strategic counsel on business decisions",
      ],
      bestFor: "Established businesses with predictable legal needs",
    },
    {
      name: "On-Demand Counsel Pro",
      price: "$8k",
      hours: "Up to 40 hours/month",
      features: [
        "Complex contract negotiation and M&A prep",
        "Priority access (same-day response)",
        "Quarterly strategy sessions",
        "All Lite features included",
      ],
      bestFor: "High-growth companies with frequent legal needs",
      highlighted: true,
    },
    {
      name: "On-Demand General Counsel",
      price: "$12k",
      hours: "Unlimited access",
      features: [
        "Board meeting attendance and investor advisory",
        "IP strategy and compliance buildout",
        "Dedicated Slack channel + weekly check-ins",
        "All Pro features included",
      ],
      bestFor: "Series A+ startups or established businesses ($5M+ revenue)",
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

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Hero */}
      <section className="relative pt-16 pb-20 lg:pt-28 lg:pb-36 overflow-hidden bg-slate-900">
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
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              On-Demand In-House Counsel
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight font-serif">
              Legal Counsel That Doesn't{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                Cost $20k/Month
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-semibold">
              AI-enabled legal support for growing businesses. Get senior-level counsel without the enterprise price tag.
            </p>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Same legal protection. Better response time. 40-60% cost savings.
            </p>

            <div className="pt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
              >
                Book Free Legal Cost Audit
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-400 pt-4">
              See exactly where you're overpaying and how much you'd save with on-demand counsel
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ⸻ Problem */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                Your Legal Team Is Costing You More Than Money
              </h2>
            </div>
            <div className="space-y-4 pl-1 border-l-2 border-slate-200 ml-6 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              <p className="text-slate-600">You're paying $10k-$25k/month for a law firm that takes 3 days to review a simple contract.</p>
              <p className="text-slate-600">Your outside counsel doesn't understand your business — they're reactive, not strategic.</p>
              <p className="text-slate-600">Junior associates bill $400/hour to do research that AI can do in 30 seconds.</p>
              <p className="text-slate-600">You're stuck in billable-hour billing that punishes you for asking questions.</p>
            </div>
            <p
              className="text-slate-700 text-lg font-bold mt-8 animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              There's a better way — and it costs 60% less.
            </p>
          </div>
        </div>
      </section>

      {/* ⸻ Solution */}
      <section className="py-20 md:py-28 bg-slate-50/80 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="flex items-center gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                On-Demand In-House Counsel, Powered by AI
              </h2>
            </div>
            <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Embedded Partnership</p>
                  <p className="text-slate-600">I become part of your team — proactive, strategic, aligned with your business goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">AI-Accelerated Workflow</p>
                  <p className="text-slate-600">Contract review in hours (not days). Instant precedent search. Automated compliance tracking.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Senior-Level Expertise</p>
                  <p className="text-slate-600">You work directly with me (Josh Halpern, licensed attorney) — no junior associates billing their learning curve.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Predictable Pricing</p>
                  <p className="text-slate-600">One flat monthly fee. No surprise bills. No billable hours.</p>
                </div>
              </div>
            </div>
            <p
              className="mt-8 text-slate-900 text-lg font-bold animate-fade-in-up border-t border-slate-200 pt-8"
              style={{ animationDelay: "200ms" }}
            >
              Same legal protection. Better response time. 40-60% cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* ⸻ What You Get */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 font-serif tracking-tight animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              What You Get
            </h2>
            <ul className="space-y-5">
              {whatYouGet.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${60 + i * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium leading-relaxed">{item.label}</span>
                  </li>
                );
              })}
            </ul>
            <p
              className="mt-10 text-slate-700 font-bold text-lg animate-fade-in-up border-t border-slate-200 pt-8"
              style={{ animationDelay: "400ms" }}
            >
              Think of me as your general counsel — just without the $250k salary + benefits.
            </p>
          </div>
        </div>
      </section>

      {/* ⸻ Is This Right For You? (Pre-Qualification) */}
      <section className="py-20 md:py-28 bg-slate-50/80 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              className="flex items-center gap-3 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                Is This Right For You?
              </h2>
            </div>

            <div className="space-y-6 mb-10">
              {/* ✅ Perfect Fits */}
              <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl animate-fade-in-up" style={{ animationDelay: "80ms" }}>
                <p className="text-emerald-900 font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  You're a Perfect Fit If:
                </p>
                <ul className="space-y-2 text-emerald-800 text-sm">
                  {whoFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ❌ Not a Fit */}
              <div className="p-6 bg-red-50 border-2 border-red-200 rounded-xl animate-fade-in-up" style={{ animationDelay: "160ms" }}>
                <p className="text-red-900 font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  This Probably Isn't For You If:
                </p>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>You need a trial attorney for active litigation (I'm counsel, not courtroom representation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>You're a pre-revenue startup with no customers yet (start with business formation, come back when you're scaling)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>You need one-off project work (this is for ongoing legal partnership)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Clear Next Step */}
            <div className="text-center p-6 bg-white border-2 border-slate-200 rounded-xl animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              <p className="text-slate-700 font-semibold mb-4">
                If you checked the boxes above, let's talk.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                Book Free Legal Cost Audit
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ⸻ About Josh */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-8 p-8 md:p-10">
                <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
                  <img
                    src="/joshua-halpern-hero.png"
                    alt="Josh Halpern"
                    className="w-32 h-40 md:w-40 md:h-52 rounded-xl object-cover object-top shadow-md border border-slate-200/80"
                  />
                </div>
                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                    About Josh
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Josh Halpern is a licensed attorney focused on helping business owners protect what they're building.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    He built this firm to remove hourly billing so clients can actually use their lawyer.
                  </p>
                  <p className="text-slate-700 font-semibold pt-2">No games. No billing clock.</p>
                  <p className="text-slate-700 font-semibold">Just clear legal help.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⸻ Pricing */}
      <section className="py-20 md:py-28 bg-slate-50/80 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div
              className="flex items-center gap-3 mb-12 justify-center animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white">
                <DollarSign className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif tracking-tight">
                Transparent, Predictable Pricing
              </h2>
            </div>

            {/* Pricing Tiers */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative p-6 rounded-2xl border-2 bg-white animate-fade-in-up ${
                    tier.highlighted
                      ? "border-blue-500 shadow-xl shadow-blue-100"
                      : "border-slate-200"
                  }`}
                  style={{ animationDelay: `${80 + i * 80}ms` }}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  <p className="text-sm text-slate-600 font-semibold mb-4">{tier.hours}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-600 italic">Best for:</p>
                    <p className="text-sm text-slate-700 font-medium">{tier.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto animate-fade-in-up" style={{ animationDelay: "320ms" }}>
              <table className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-center font-semibold">Traditional Law Firm</th>
                    <th className="px-6 py-4 text-center font-semibold bg-blue-600">On-Demand Counsel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Monthly Cost</td>
                    <td className="px-6 py-4 text-center text-slate-700">$15k-$30k</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">$5k-$12k</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Response Time</td>
                    <td className="px-6 py-4 text-center text-slate-700">2-5 days</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">Same day</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Billable Hours</td>
                    <td className="px-6 py-4 text-center text-slate-700">Yes ($400-$800/hr)</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">No — flat fee</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Junior Associates</td>
                    <td className="px-6 py-4 text-center text-slate-700">Yes (you pay for training)</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">No — work directly with me</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">AI-Enabled Workflow</td>
                    <td className="px-6 py-4 text-center text-slate-700">No</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">Yes</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Strategic Partnership</td>
                    <td className="px-6 py-4 text-center text-slate-700">Reactive</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50">Proactive</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all text-lg"
              >
                Book Free Legal Cost Audit
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-600 mt-4">See exactly how much you'll save</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⸻ Final CTA */}
      <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,_rgba(51,65,85,0.4),_transparent_50%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-white border border-white/10 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <Phone className="w-7 h-7" />
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif tracking-tight animate-fade-in-up"
              style={{ animationDelay: "80ms" }}
            >
              Book Your Free Legal Cost Audit
            </h2>
            <p
              className="text-slate-300 text-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              Bring your current legal invoices and contracts to a 30-minute call. I'll show you:
            </p>
            <ul
              className="text-slate-300 text-lg space-y-2 max-w-xl mx-auto text-left animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span>Where you're overpaying</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span>How on-demand counsel would work for your business</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span>Exactly what you'd save each month (with a custom ROI breakdown)</span>
              </li>
            </ul>
            <p
              className="text-slate-400 text-base animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              No pressure. No commitment. Just clarity.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-slate-100 hover:scale-[1.02] transition-all duration-300 shadow-xl animate-fade-in-up"
              style={{ animationDelay: "280ms" }}
            >
              Book Free Audit
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
