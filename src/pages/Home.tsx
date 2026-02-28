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
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* SECTION 1 — Hero                              */}
      {/* ============================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-900">
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
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px]" />
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight font-serif">
                Big-Firm Legal Work.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                  Small-Business Pricing.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                LLC formation, estate planning, contracts, and IP
                protection, handled by a former BigLaw attorney at flat fees you
                can actually afford.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
                >
                  See Pricing
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/30 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
                >
                  Book Free Consultation
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="pt-4">
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-slate-400 font-medium">
                  {[
                    "Former BigLaw Attorney",
                    "Flat-Fee Guarantee",
                    "Strategic Counsel to Founders & Entrepreneurs",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400/70" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Photo */}
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
                  <p className="text-slate-900 font-bold text-sm leading-tight">500+ Businesses</p>
                  <p className="text-slate-500 text-xs">Protected</p>
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
              {/* Floating badge — mobile version */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg shadow-black/10 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm leading-tight">500+ Businesses</p>
                  <p className="text-slate-500 text-xs">Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      <VideoCarousel />

      {/* ============================================= */}
      {/* SECTION 2 — The Problem (Emotional Hook)      */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight leading-tight">
              Hiring a Lawyer Shouldn't Feel Like Signing a Blank Check
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              <p>
                Traditional firms bill $300 to $600 per hour, sometimes more.
                A straightforward LLC formation or thoughtful estate plan can
                cost you thousands. And the meter is always running.
              </p>
              <p>
                On the other end of the spectrum, online platforms and AI tools
                generate documents without real legal judgment, no strategy,
                and no one accountable to you.
              </p>
              <p className="font-semibold text-slate-900 text-xl md:text-2xl">
                There's a better way.
              </p>
              <p>
                Legal Halp delivers sophisticated, business-minded legal counsel
                with transparent, flat-fee pricing and ongoing access when you
                actually need it.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {["Big-firm training.", "Modern structure.", "No billing surprises."].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 font-semibold px-4 py-2 rounded-lg text-base">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 3 — How It Works                      */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                3 Steps to Legal Peace of Mind
              </h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  step: "1",
                  title: "Book a Free Call",
                  description:
                    "15 minutes. No sales pitch. Just tell me what you need.",
                  icon: Phone,
                },
                {
                  step: "2",
                  title: "Get a Flat Quote",
                  description:
                    "You'll know the exact price before we start. No surprises. Ever.",
                  icon: DollarSign,
                },
                {
                  step: "3",
                  title: "I Handle Everything",
                  description:
                    "You get professionally drafted legal documents + direct attorney access.",
                  icon: FileText,
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

            <div className="text-center mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-slate-900/30 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
              >
                Start With a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 4 — Services Grid                     */}
      {/* ============================================= */}
      <section
        id="pricing"
        className="py-20 md:py-28 bg-white border-t border-slate-200"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
                Services & Pricing
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Transparent Legal Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "LLC Formation",
                  price: "$1,000",
                  description:
                    "Entrepreneurs, side hustlers, new businesses",
                  slug: "/services/llc-formation",
                },
                {
                  icon: Shield,
                  title: "Estate Planning",
                  price: "$1,750",
                  description:
                    "Families protecting assets + avoiding probate",
                  slug: "/services/estate-planning",
                },
                {
                  icon: PenTool,
                  title: "Contract Drafting",
                  price: "$550",
                  description: "Freelancers, agencies, partnerships",
                  slug: "/services/contract-drafting",
                },
                {
                  icon: Sparkles,
                  title: "Brand Protection",
                  price: "$550",
                  description: "Creators, influencers, startups with IP",
                  slug: "/services/brand-protection",
                },
                {
                  icon: Building2,
                  title: "Real Estate LLC",
                  price: "$2,500",
                  description:
                    "Landlords, rental property investors",
                  slug: "/services/real-estate-llc",
                },
                {
                  icon: Globe,
                  title: "Website Compliance",
                  price: "$750",
                  description: "E-commerce, SaaS, online businesses",
                  slug: "/services/website-compliance",
                },
                {
                  icon: PhoneCall,
                  title: "Lawyer-on-Call",
                  price: "From $500/mo",
                  description: "On-demand legal counsel, monthly retainer",
                  slug: "/services/lawyer-on-call",
                },
                {
                  icon: FileText,
                  title: "Trademark Filing",
                  price: "$1,250",
                  description: "Federal trademark registration + monitoring",
                  slug: "/services/trademark-filing",
                },
                {
                  icon: Briefcase,
                  title: "Business Exit Strategy",
                  price: "$1,500",
                  description: "Dissolution, sales, succession planning",
                  slug: "/services/business-exit",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300 shadow-sm">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-bold text-2xl mb-3">
                    {service.price}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    to={service.slug}
                    className="mt-auto inline-flex items-center gap-1.5 text-slate-700 font-semibold text-sm hover:text-blue-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900 transition-colors text-lg"
              >
                View All Services & Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 5 — Why Legal Halp?                   */}
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
                    "I spent years at one of the nation's largest law firms advising companies on million-dollar deals. You get that same legal rigor, without the bloated fees.",
                },
                {
                  icon: DollarSign,
                  title: "Actually Flat Fees",
                  description:
                    'Not "starting at" or "estimated." You get the real price upfront. If something changes, I tell you before I do the work. No invoice shock.',
                },
                {
                  icon: UserCheck,
                  title: "Direct Attorney Access",
                  description:
                    "No paralegals. No junior associates. No call centers. When you hire Legal Halp, you work with me directly. Every step.",
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
      {/* SECTION 6 — Social Proof / Testimonials       */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                What Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "I was quoted $3,500 by another firm to set up my LLC. Josh did it for $1,000, explained everything clearly, and I had my operating agreement in 5 days. This is how legal services should work.",
                  name: "Sarah K.",
                  role: "Wellness Studio Owner",
                },
                {
                  quote:
                    "We'd been putting off estate planning for years because lawyers made it feel so complicated and expensive. Josh made it simple. We finally have peace of mind.",
                  name: "Mike & Lisa T.",
                  role: "Real Estate Investors",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 relative"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-blue-500 fill-blue-500"
                      />
                    ))}
                  </div>
                  <MessageSquare className="absolute top-6 right-6 w-8 h-8 text-slate-200" />
                  <blockquote className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 7 — Final CTA                         */}
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
            LLC Formation &bull; Estate Planning &bull; Contracts &bull; IP
            Protection &bull; Real Estate &bull; Business Law
          </p>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Disclaimer: The information provided on this website does not, and is
            not intended to, constitute legal advice; instead, all information,
            content, and materials available on this site are for general
            informational purposes only.
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
