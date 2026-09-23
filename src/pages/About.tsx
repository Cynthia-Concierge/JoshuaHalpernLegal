import React from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Shield,
  Phone,
  ArrowRight,
  GraduationCap,
  Briefcase,
  MapPin,
  FileText,
  Building2,
  ScrollText,
  Eye,
  UserCheck,
  Lightbulb,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* HERO                                          */}
      {/* ============================================= */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-36 overflow-hidden bg-slate-900">
        {/* Background */}
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
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px]" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-400/8 rounded-full filter blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              About Joshua Halpern
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-blue-400/5 rounded-3xl blur-2xl" />
              <img
                src="/joshua-halpern-hero.png"
                alt="Joshua Halpern"
                className="relative w-40 h-52 md:w-52 md:h-68 lg:w-60 lg:h-80 rounded-2xl object-cover object-top shadow-2xl shadow-black/40 border-2 border-white/10"
              />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight font-serif max-w-3xl">
              I Left BigLaw for the Billing Model,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                Not the Work
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Former corporate and transactional associate at Taft, Stettinius
              &amp; Hollister. Now outside general counsel to operating
              companies, investors, and multi-entity groups.
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ============================================= */}
      {/* THE STORY                                     */}
      {/* ============================================= */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-5 text-lg text-slate-600 leading-relaxed">
            <p className="text-xl md:text-2xl font-semibold text-slate-900">
              I left the billing model, not the work.
            </p>
            <p>
              I spent years in the corporate and transactional group of a large
              firm, working on acquisitions, financings, and governance for
              closely held companies. The work was excellent. The hourly model
              was not.
            </p>
            <p>
              Legal Halp is that same practice on a fixed fee. Every matter is
              handled by me. Every fee is quoted before the work starts.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* CREDENTIALS                                   */}
      {/* ============================================= */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Background
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: GraduationCap,
                  text: "J.D., Cleveland-Marshall College of Law",
                },
                {
                  icon: Briefcase,
                  text: "Former Associate, Corporate & Transactional, Taft Stettinius & Hollister",
                },
                {
                  icon: MapPin,
                  text: "Licensed in Ohio. Local counsel partnered for other jurisdictions",
                },
                {
                  icon: FileText,
                  text: "M&A, entity structure, governance, real estate, contracts, IP",
                },
                {
                  icon: Briefcase,
                  text: "$250M+ in transactions closed",
                },
                {
                  icon: Building2,
                  text: "Outside GC to portfolios of up to 28 entities",
                },
                {
                  icon: ScrollText,
                  text: "In-house counsel to a large residential brokerage",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-100 shadow-sm"
                >
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-slate-700 font-medium text-base leading-snug pt-1.5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* VALUES — How I Work                           */}
      {/* ============================================= */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 transform translate-x-1/4 z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                How I Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: Eye,
                  title: "Radical Transparency",
                  description:
                    "You always know the cost and the status. I over-communicate on purpose.",
                },
                {
                  icon: UserCheck,
                  title: "No Gatekeepers",
                  description:
                    "You hire me, you work with me. No paralegal, no junior associate.",
                },
                {
                  icon: Lightbulb,
                  title: "Practical, Not Perfect",
                  description:
                    "No jargon. The simplest solution that actually solves the problem.",
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
                Book a Free 15-Minute Call
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Let's talk about what you need. No pitch, no pressure, just a
                conversation.
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
            Mergers &amp; Acquisitions &bull; Outside General Counsel &bull;
            Entity Structuring &bull; Governance &bull; Commercial Real Estate
            &bull; Contracts &bull; IP
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

export default About;
