import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Phone,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Building2,
  Users,
  Scale,
  DollarSign,
  Globe,
  UserCheck,
} from "lucide-react";

const FORMATION_TYPES = [
  {
    title: "LLC Formation",
    price: "$1,000",
    description:
      "File your LLC, get your EIN, set up operating agreements. We handle the paperwork. You handle the business.",
    slug: "/services/llc-formation",
    icon: Briefcase,
  },
  {
    title: "S-Corporation",
    price: "Contact Us",
    description:
      "Form your S-Corp with proper tax elections and compliance filings for optimal tax savings.",
    slug: "/contact",
    icon: Building2,
  },
  {
    title: "C-Corporation",
    price: "Contact Us",
    description:
      "Full corporate structure with all required formation documents, bylaws, and filings.",
    slug: "/contact",
    icon: Scale,
  },
  {
    title: "Partnership Formation",
    price: "$1,500",
    description:
      "Proper legal structure and partnership agreements to protect your business and all partners involved.",
    slug: "/services/llc-formation",
    icon: Users,
  },
];

const STEPS = [
  {
    step: "1",
    title: "Fill Out the Form",
    description:
      "Complete our business formation intake form with details about your business. Takes about 5 minutes.",
  },
  {
    step: "2",
    title: "We Prepare Everything",
    description:
      "Our team reviews your information and prepares all required documents and filings, tailored to your state.",
  },
  {
    step: "3",
    title: "Review & Approve",
    description:
      "You'll receive your completed documents for review and approval before anything is filed.",
  },
  {
    step: "4",
    title: "You're Official",
    description:
      "We file with your state and send you everything. Your business is now legally formed and protected.",
  },
];

const TRUST_ITEMS = [
  {
    icon: Scale,
    title: "Licensed Attorney",
    description: "Real legal expertise from Joshua Halpern, Esq.",
  },
  {
    icon: DollarSign,
    title: "Clear Pricing",
    description: "Know what you're paying upfront. No surprises.",
  },
  {
    icon: Globe,
    title: "All 50 States",
    description: "We handle formations nationwide.",
  },
  {
    icon: UserCheck,
    title: "Direct Access",
    description: "Work directly with Josh and his team.",
  },
];

const Formation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
              <Briefcase className="w-4 h-4" />
              Business Formation
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight font-serif">
              Modern Legal Help for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                Real Life
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-semibold">
              Quality legal guidance. Clear pricing. No BS.
            </p>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you're forming an LLC, planning your estate, handling real
              estate, or need ongoing legal access, we've got you.
            </p>

            {/* Video embed */}
            <div className="pt-6 max-w-2xl mx-auto">
              <div className="bg-slate-800 border-2 border-blue-400/30 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center gap-2">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                    ▶ Watch Before You Form Your LLC
                  </span>
                </div>
                <div className="aspect-video">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    crossOrigin="anonymous"
                    poster="https://github.com/cynthiaconcierge/JoshuaHalpernLegal/releases/download/videos/josh-formation-vsl.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://github.com/cynthiaconcierge/JoshuaHalpernLegal/releases/download/videos/josh-formation-vsl.mp4"
                      type="video/mp4"
                    />
                    <track
                      kind="captions"
                      src="https://github.com/cynthiaconcierge/JoshuaHalpernLegal/releases/download/videos/josh-formation-vsl.vtt"
                      srcLang="en"
                      label="English"
                      default
                    />
                  </video>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                to="/formation/intake"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Trust Bar */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
              {TRUST_ITEMS.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formation Types */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
                Formation Services
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Business Formation Services
              </h2>
              <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
                We handle LLC, S-Corp, C-Corp, and Partnership formations in all
                50 states.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {FORMATION_TYPES.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                      <type.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 pt-2.5">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/formation/intake"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-slate-900/20 transform hover:-translate-y-0.5 transition-all text-lg"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-slate-400 text-sm mt-3">Takes about 10 minutes to complete</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                How It Works
              </h2>
              <p className="text-slate-500 text-lg mt-4">
                Business formation simplified into 4 easy steps
              </p>
            </div>

            <div className="space-y-0">
              {STEPS.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 md:gap-8 items-start relative"
                >
                  {index < STEPS.length - 1 && (
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

            <div className="text-center pt-4">
              <Link
                to="/formation/intake"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all text-lg"
              >
                Start Step 1 Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Every Formation */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
                What's Included
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Every formation includes
              </h2>
            </div>

            <div className="space-y-3">
              {[
                "Business name search and availability check",
                "Articles of Organization / Incorporation filed with your state",
                "Custom Operating Agreement or Bylaws (not a template)",
                "Federal EIN for taxes and banking",
                "Help opening a business bank account",
                "Registered agent enrollment assistance",
                "Compliance checklist so you stay legit",
                "Attorney consultation + email support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-100 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/formation/intake"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-slate-900/20 transform hover:-translate-y-0.5 transition-all text-lg"
              >
                Get All of This - Start Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
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
                Ready to Make It Official?
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Start your business formation today. No surprises, no hassle, no
                BS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/formation/intake"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold py-4 px-10 rounded-xl border border-white/20 hover:border-white/30 transform hover:-translate-y-1 transition-all text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              Terms &amp; Conditions
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
              Payment &amp; Refund Policy
            </Link>
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

export default Formation;
