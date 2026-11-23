import SiteFooter from "@/components/SiteFooter";
import HeroFade from "@/components/HeroFade";
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
  Handshake,
  Layers,
  Warehouse,
  Gavel,
  Sparkles,
  ArrowRight,
  Star,
  UserCheck,
  AlertTriangle,
  XCircle,
  Users,
  Compass,
} from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* SECTION 1: Hero                               */}
      {/* ============================================= */}
      <section className="relative pt-12 pb-28 lg:pt-20 lg:pb-40 overflow-hidden bg-slate-900">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
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

              {/* Credentials + scope, one quiet block under the CTAs */}
              <div className="pt-8 border-t border-white/10 max-w-xl mx-auto lg:mx-0 space-y-6">
                <ul className="space-y-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                  {[
                    "Big-Firm M&A and Corporate Experience",
                    "M&A, Governance & Real Estate",
                    "Outside GC to Multi-Entity Companies",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-center lg:justify-start gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-start justify-center lg:justify-start gap-2.5 text-[13px] text-slate-400 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-left">
                    <span className="text-slate-200 font-semibold">Business and transactional matters only.</span>{" "}
                    No litigation, court appearances, criminal, family, or personal injury cases.
                  </p>
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
              <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default px-4 py-3 flex items-center gap-3">
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
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-all duration-300 ease-out cursor-default px-4 py-3 flex items-center gap-3">
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

        <HeroFade to="slate" />
      </section>

      {/* ============================================= */}
      {/* SECTION 3: Retainer (Primary Offering)        */}
      {/* ============================================= */}
      <section
        id="retainer"
        className="py-20 md:py-28 bg-slate-50 relative overflow-hidden"
      >
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

            {/* What's covered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
              {[
                { icon: PenTool, text: "Contract drafting and review" },
                { icon: Handshake, text: "Deals and transactions" },
                { icon: Layers, text: "Entity structure and governance" },
                { icon: Building2, text: "Real estate and leasing" },
                { icon: Users, text: "Employment and compliance" },
                { icon: Compass, text: "Strategic counsel for owners" },
              ].map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3.5 cursor-default transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {/* Light sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  {/* Accent bar */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 w-full h-0.5 bg-blue-500 scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                  <div className="relative flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="w-[18px] h-[18px] text-blue-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="relative text-slate-800 font-medium transition-transform duration-300 group-hover:translate-x-0.5">
                    {text}
                  </span>
                  <CheckCircle2 className="relative ml-auto w-4 h-4 text-blue-500 flex-shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              ))}
            </div>

            {/* Retainer teaser (full plans live on /outside-general-counsel) */}
            <div className="text-center mb-10">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
                Monthly Retainers
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-slate-900">
                From $2,500
                <span className="text-xl md:text-2xl text-slate-500 font-semibold">/mo</span>
              </p>
              <p className="text-slate-600 text-base md:text-lg mt-4 max-w-xl mx-auto">
                Three levels of support, from essential counsel to a fully
                embedded general counsel. Your fee is set on the call, scoped
                to your company.
              </p>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/outside-general-counsel"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-10 rounded-xl border border-slate-300 hover:border-slate-400 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
                >
                  See Retainer Plans
                </Link>
              </div>
              <p className="text-slate-500 text-sm mt-4">
                Month-to-month. No long-term contracts. Cancel with 30 days notice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 3: The Comparison                     */}
      {/* ============================================= */}
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
                  {/* Light sweep + accent bar on hover */}
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

      {/* ============================================= */}
      {/* SECTION 4: About + Videos                     */}
      {/* ============================================= */}
      <VideoCarousel />

      {/* ============================================= */}
      {/* SECTION 5: How It Works                       */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-slate-50">
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
                  title: "I Become Your Outside General Counsel",
                  description:
                    "Contracts, deals, governance, and everything in between. Email whenever something comes up. Urgent matters get a call.",
                },
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
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 6: What Makes This Different          */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">

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
                    "No billable hours and no meter running. Reach out without wondering what it costs. Anything outside scope is flagged before work starts.",
                },
                {
                  icon: UserCheck,
                  title: "Direct Attorney Access",
                  description:
                    "No paralegals. No junior associates. No call centers. You work with me directly, and I know your business.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-lg shadow-slate-900/20">
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
      {/* SECTION 7: Testimonials                       */}
      {/* ============================================= */}
      <TestimonialCarousel />

      {/* ============================================= */}
      {/* SECTION 8: Project Work (Secondary Offering)  */}
      {/* ============================================= */}
      <section
        id="pricing"
        className="py-16 md:py-20 bg-white"
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
                Not ready for a retainer? Defined projects are handled on a
                fixed fee, scoped and quoted on a call before any work begins.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Handshake, title: "Deals & Transactions", note: "Buying, selling, partner buyouts", slug: "/services#deals" },
                { icon: Layers, title: "Governance & Entity Cleanup", note: "Operating agreements, holding companies", slug: "/services#governance" },
                { icon: Briefcase, title: "Business Formation", note: "Entities, operating agreements, S-Corps", slug: "/services#business" },
                { icon: Warehouse, title: "Commercial Real Estate", note: "Purchases, leases, financing review", slug: "/services#commercialre" },
                { icon: Building2, title: "Real Estate Holding Structures", note: "LLCs, holding companies, 1031 support", slug: "/services#realestate" },
                { icon: PenTool, title: "Contract Drafting", note: "Drafting, review, negotiation", slug: "/services#contracts" },
                { icon: Gavel, title: "Demand Letters & Disputes", note: "Demands, collections, settlements", slug: "/services#disputes" },
                { icon: Shield, title: "Estate Planning", note: "Trusts, wills, powers of attorney", slug: "/services#family" },
                { icon: Sparkles, title: "Brand Protection", note: "Trademarks and IP", slug: "/services#brand" },
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
                    <p className="text-slate-500 text-sm mt-0.5">{service.note}</p>
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
                View All Project Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 9: Final CTA                          */}
      {/* ============================================= */}
      <section
        id="consultation"
        className="py-20 md:py-28 bg-slate-50"
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
      <SiteFooter tagline={<>Outside General Counsel &bull; Deals & Transactions &bull; Governance &bull; Contracts &bull; Real Estate &bull; Estate Planning</>} />
    </div>
  );
};

export default Home;