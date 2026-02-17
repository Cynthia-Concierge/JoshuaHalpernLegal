import React from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Phone,
  Mail,
  Clock,
  Calendar,
  Linkedin,
  Instagram,
  MessageSquare,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* HERO                                          */}
      {/* ============================================= */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-slate-50 to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              Get in Touch
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight font-serif">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 underline decoration-blue-400/60 underline-offset-8 decoration-4">
                Talk
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Book a free 15-minute consultation. I'll listen to what you need,
              give you straight answers, and tell you exactly what it would cost
              to work together. No pitch, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* BOOKING + CONTACT INFO                        */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Calendly Embed Placeholder */}
              <div className="lg:col-span-3">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="p-6 md:p-8 border-b border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h2 className="text-xl font-bold text-slate-900">
                        Book Your Free Call
                      </h2>
                    </div>
                    <p className="text-slate-500 text-sm">
                      Pick a time that works for you — 15 minutes, no obligation.
                    </p>
                  </div>

                  {/* 
                    Replace the placeholder below with your Calendly embed.
                    Example:
                    <iframe
                      src="https://calendly.com/YOUR-LINK"
                      width="100%"
                      height="650"
                      frameBorder="0"
                    />
                  */}
                  <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                    <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mb-5">
                      <Calendar className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="text-slate-500 text-lg font-medium mb-2">
                      Calendly Widget Goes Here
                    </p>
                    <p className="text-slate-400 text-sm max-w-sm">
                      Replace this placeholder with your Calendly embed link and
                      the booking calendar will appear here.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Prefer email card */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Prefer email?
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Reach out and I'll respond within 24 hours.
                  </p>
                  <a
                    href="mailto:josh@legalhalp.com"
                    className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Email</p>
                      <p className="text-slate-900 font-semibold text-sm">
                        josh@legalhalp.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* Other contact methods */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Other ways to connect
                  </h3>

                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Phone</p>
                      <p className="text-slate-900 font-semibold text-sm">
                        (123) 456-7890
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/joshuabhalpern"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">
                        LinkedIn
                      </p>
                      <p className="text-slate-900 font-semibold text-sm">
                        Joshua Halpern
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/legalhalp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">
                        Instagram
                      </p>
                      <p className="text-slate-900 font-semibold text-sm">
                        @legalhalp
                      </p>
                    </div>
                  </a>
                </div>

                {/* Response time card */}
                <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold">Response Times</h3>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex justify-between">
                      <span>Email replies</span>
                      <span className="text-white font-semibold">
                        Within 24 hours
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Consultations</span>
                      <span className="text-white font-semibold">
                        Same week
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Document delivery</span>
                      <span className="text-white font-semibold">
                        5–10 business days
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
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
            <Scale className="w-8 h-8 text-slate-600 mb-2" />
            <span className="text-lg font-serif text-slate-300 tracking-widest uppercase">
              Legal Halp
            </span>
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

export default Contact;
