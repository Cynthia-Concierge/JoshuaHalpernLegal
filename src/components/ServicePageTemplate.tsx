import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicePageTemplateProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  price: string;
  subtitle: string;
  description: string;
  includes?: string[];
  whoItsFor?: string;
  whyItMatters?: string;
  stripeLink?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  icon: Icon,
  title,
  price,
  subtitle,
  description,
  includes,
  whoItsFor,
  whyItMatters,
  stripeLink,
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-slate-50 to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-2xl shadow-lg shadow-slate-900/20 mx-auto">
              <Icon className="w-8 h-8" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight font-serif">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            <p className="text-blue-600 font-bold text-3xl md:text-4xl">
              Starting at {price}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              {stripeLink ? (
                <a
                  href={stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-slate-900/30 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
                >
                  Get Started - {price}
                  <ArrowRight className="w-5 h-5" />
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-slate-900/30 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-8 rounded-xl border-2 border-slate-200 hover:border-slate-300 shadow-sm transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {whoItsFor && (
              <div className="mb-12">
                <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                  Who It's For
                </span>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  {whoItsFor}
                </p>
              </div>
            )}

            <div className="mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
                Overview
              </span>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      {includes && includes.length > 0 && (
        <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
                  What's Included
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Everything in your package
                </h2>
              </div>

              <div className="space-y-3">
                {includes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-100 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why It Matters */}
      {whyItMatters && (
        <section className="py-20 md:py-28 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
                Why It Matters
              </span>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                {whyItMatters}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
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
                Ready to get started?
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Book a free 15-minute consultation. I'll tell you exactly what
                you need and what it costs. No pressure.
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

      {/* Footer */}
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
            LLC Formation &bull; Estate Planning &bull; Contracts &bull; IP Protection &bull; Real Estate &bull; Business Law
          </p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Disclaimer: The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.
          </p>
          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Legal Halp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicePageTemplate;
