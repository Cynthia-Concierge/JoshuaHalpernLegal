import React from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  CheckCircle2,
  Phone,
  FileText,
  DollarSign,
  Shield,
  Briefcase,
  Building2,
  Globe,
  PenTool,
  Sparkles,
  ArrowRight,
  Star,
  UserCheck,
} from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* SECTION 1: Hero                               */}
      {/* ============================================= */}
      <section className="relative pt-12 pb-40 lg:pt-20 lg:pb-56 overflow-hidden bg-slate-900">
        {/* Background layers */}
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
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-400/8 rounded-full filter blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-600/10 rounded-full filter blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                Joshua Halpern, Esq.
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.15] tracking-[-0.02em]">
                <span className="block bg-gradient-to-r from-white via-white to-slate-100 bg-clip-text text-transparent">
                  Big-Firm Corporate Counsel.
                </span>
                <span className="block mt-2 text-blue-400">
                  Embedded In Your Business.
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Deals, governance, and the everyday legal work, handled by one
                senior attorney on a fixed monthly fee.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
                >
                  Book a Consultation
                </Link>
                <Link
                  to="/representative-matters"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/30 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
                >
                  See Representative Matters
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="pt-6">
                <div className="flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start gap-2.5">
                  {[
                    "Former BigLaw Corporate Attorney",
                    "M&A, Governance & Real Estate",
                    "Outside GC to Multi-Entity Companies",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 bg-white/[0.12] backdrop-blur-sm border border-white/25 text-white text-sm md:text-base font-semibold px-4 py-3 sm:py-2.5 rounded-2xl sm:rounded-full shadow-sm max-w-full"
                    >
                      <CheckCircle2 className="w-[18px] h-[18px] md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex-shrink-0 relative hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-400/5 rounded-3xl blur-2xl" />
                <img
                  src="/joshua-halpern-hero.png"
                  alt="Joshua Halpern"
                  className="relative w-[300px] h-[400px] xl:w-[340px] xl:h-[450px] rounded-2xl object-cover object-top shadow-2xl shadow-black/40 border-2 border-white/10"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg shadow-black/10 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm leading-tight">$250M+</p>
                  <p className="text-slate-500 text-xs">In transactions closed</p>
                </div>
              </div>
            </div>

            {/* Mobile Photo */}
            <div className="lg:hidden relative mx-auto">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 to-blue-400/5 rounded-3xl blur-xl" />
                <img
                  src="/joshua-halpern-hero.png"
                  alt="Joshua Halpern"
                  className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-2xl object-cover object-top shadow-2xl shadow-black/40 border-2 border-white/10 mx-auto"
                />
              </div>
              {/* Floating badge, mobile version */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg shadow-black/10 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm leading-tight">$250M+</p>
                  <p className="text-slate-500 text-xs">In transactions closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade to white: eased multi-stop ramp, layered above the
            background but below content so headline and pills stay crisp */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 md:h-64 z-[5] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.995) 6%, rgba(255,255,255,0.97) 14%, rgba(255,255,255,0.92) 22%, rgba(255,255,255,0.845) 30%, rgba(255,255,255,0.75) 38%, rgba(255,255,255,0.64) 46%, rgba(255,255,255,0.52) 54%, rgba(255,255,255,0.4) 62%, rgba(255,255,255,0.29) 70%, rgba(255,255,255,0.19) 78%, rgba(255,255,255,0.11) 85%, rgba(255,255,255,0.05) 91%, rgba(255,255,255,0.015) 96%, rgba(255,255,255,0) 100%)",
          }}
        />
      </section>

      <VideoCarousel />

      {/* ============================================= */}
      {/* SECTION 2: The Gap                            */}
      {/* ============================================= */}
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
                {
                  label: "Outside firm, per matter",
                  problem:
                    "Senior rates to someone who relearns your business every time.",
                },
                {
                  label: "In-house counsel",
                  problem:
                    "$250,000 and up, long before the workload justifies the seat.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    {item.label}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {item.problem}
                  </p>
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

      {/* ============================================= */}
      {/* SECTION 3: How It Works                       */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
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

            <div className="space-y-0">
              {[
                {
                  step: "1",
                  title: "Book a Consultation",
                  description:
                    "Walk me through your business, your entities, and what's on your plate.",
                },
                {
                  step: "2",
                  title: "Set Your Monthly Retainer",
                  description:
                    "A fixed monthly fee scoped to your company. You know the number before we start.",
                },
                {
                  step: "3",
                  title: "I Become Your Legal Department",
                  description:
                    "Contracts, deals, governance, and everything in between. Call, text, or email whenever something comes up.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 md:gap-8 items-start relative"
                >
                  {index < 2 && (
                    <div className="absolute left-[27px] md:left-[31px] top-[60px] w-0.5 h-[calc(100%-40px)] bg-slate-200" />
                  )}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/20 relative z-10">
                    <span className="text-white font-bold text-xl">
                      {item.step}
                    </span>
                  </div>
                  <div className="pb-12 md:pb-16">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 4: Retainer (Primary Offering)        */}
      {/* ============================================= */}
      <section
        id="retainer"
        className="py-20 md:py-28 bg-slate-900 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
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

            {/* What's covered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {[
                "Contract drafting and review",
                "Deals and transactions",
                "Entity structure and governance",
                "Real estate and leasing",
                "Employment and compliance",
                "Strategic counsel for owners",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Pricing Tier Preview */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  name: "Essential Counsel",
                  price: "From $1,500/mo",
                  desc: "Contract reviews, quick questions, practical guidance.",
                  popular: false,
                },
                {
                  name: "Ongoing Counsel",
                  price: "From $2,000/mo",
                  desc: "Contracts, employment, compliance, and entity management.",
                  popular: true,
                },
                {
                  name: "General Counsel",
                  price: "From $3,000/mo",
                  desc: "Embedded in-house legal partner. Strategy, deals, board-level support.",
                  popular: false,
                },
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
                  <h3 className={`text-lg font-bold mb-2 ${tier.popular ? "text-slate-900" : "text-white"}`}>
                    {tier.name}
                  </h3>
                  <p className={`font-bold text-lg mb-3 ${tier.popular ? "text-blue-600" : "text-blue-400"}`}>
                    {tier.price}
                  </p>
                  <p className={`text-sm leading-relaxed ${tier.popular ? "text-slate-600" : "text-slate-300"}`}>
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/lawyer-on-call"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold py-4 px-10 rounded-xl border border-white/20 hover:border-white/30 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
                >
                  Compare Retainer Plans
                </Link>
              </div>
              <p className="text-slate-400 text-sm mt-4">
                Month-to-month. No long-term contracts. Cancel with 30 days notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 5: What Makes This Different          */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-100/30 skew-x-12 transform -translate-x-1/4 z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
                {
                  icon: Star,
                  title: "Big-Firm Experience",
                  description:
                    "Trained in the corporate group of a national law firm, advising companies on real deals. The same rigor, without the big-firm overhead.",
                },
                {
                  icon: DollarSign,
                  title: "One Fixed Monthly Fee",
                  description:
                    "No billable hours and no meter running. Pick up the phone without wondering what it costs. Anything outside scope is flagged before work starts.",
                },
                {
                  icon: UserCheck,
                  title: "Direct Attorney Access",
                  description:
                    "No paralegals. No junior associates. No call centers. You work with me directly, and I know your business.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto md:mx-0 shadow-lg shadow-slate-900/20">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 6: Testimonials                       */}
      {/* ============================================= */}
      <TestimonialCarousel />

      {/* ============================================= */}
      {/* SECTION 7: Project Work (Secondary Offering)  */}
      {/* ============================================= */}
      <section
        id="pricing"
        className="py-16 md:py-20 bg-white border-t border-slate-200"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
                Project Work
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Need a Single Project Handled?
              </h2>
              <p className="text-slate-600 text-base md:text-lg mt-3 max-w-2xl mx-auto">
                Not ready for a retainer? Defined projects are available on a
                fixed fee, quoted before any work begins.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Briefcase, title: "Business Formation", price: "$1,000", slug: "/services/llc-formation" },
                { icon: Building2, title: "Real Estate Holding Structures", price: "$2,500", slug: "/services/real-estate-llc" },
                { icon: PenTool, title: "Contract Drafting", price: "$550", slug: "/services/contract-drafting" },
                { icon: Shield, title: "Estate Planning", price: "$1,750", slug: "/services/estate-planning" },
                { icon: Sparkles, title: "Brand Protection", price: "$550", slug: "/services/brand-protection" },
                { icon: Globe, title: "Website Compliance", price: "$750", slug: "/services/website-compliance" },
              ].map((service, index) => (
                <Link
                  key={index}
                  to={service.slug}
                  className="group flex items-center gap-4 bg-white px-5 py-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900 leading-tight">{service.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">From {service.price}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900 transition-colors"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 8: Final CTA                          */}
      {/* ============================================= */}
      <section
        id="consultation"
        className="py-20 md:py-28 bg-slate-50 border-t border-slate-200"
      >
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
              <FileText className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready for a General Counsel Who Knows Your Business?
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Book a consultation. We'll talk through your company, what you
                need covered, and whether a retainer is the right fit.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Book a Consultation
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
            <img src="/logo.png" alt="Legal Halp" className="h-10 brightness-0 invert opacity-80 mb-1" />
            <p className="text-sm text-slate-500 mt-1">
              by Joshua Halpern, Esq.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/payment-policy" className="hover:text-blue-400 transition-colors">Payment &amp; Refund Policy</Link>
          </div>

          <p className="text-xs text-slate-600 mb-6">
            Outside General Counsel &bull; Deals &amp; Transactions &bull;
            Governance &bull; Contracts &bull; Real Estate &bull; Estate Planning
          </p>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Disclaimer: The information provided on this website does not, and is
            not intended to, constitute legal advice; instead, all information,
            content, and materials available on this site are for general
            informational purposes only.
          </p>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            By providing your phone number, you agree to receive text messages from Legal Halp Law. Message and data rates may apply. Reply STOP to opt out.
          </p>

          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Legal Halp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
