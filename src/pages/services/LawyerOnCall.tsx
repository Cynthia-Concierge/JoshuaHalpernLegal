import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Phone, ArrowRight, CheckCircle2, Shield, X, DollarSign } from "lucide-react";

const LawyerOnCall: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-slate-50 to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-2xl shadow-lg shadow-slate-900/20 mx-auto">
              <PhoneCall className="w-8 h-8" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight font-serif">
              Your Legal Department. <br />
              No Office. No Overhead. No Nonsense.
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
              BigLaw expertise on your payroll for the price of a gym membership. Unlimited access, unlimited contracts, unlimited peace of mind.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200 max-w-2xl mx-auto mt-8">
              <p className="text-slate-600 text-lg mb-4 font-medium">Stop paying $500/hour every time you need legal advice.</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Unlimited contract reviews</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Unlimited consultations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Unlimited negotiation support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Same-day responses</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Direct access to a BigLaw-trained attorney</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-6 italic">No hourly billing. No surprise invoices. No "let me get back to you."</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-slate-900/30 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-lg"
              >
                Put Me On Your Payroll
                <ArrowRight className="w-5 h-5" />
              </Link>
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

      {/* The Problem Section */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              Traditional Law Firms Are Bleeding You Dry
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-5 bg-red-50 rounded-xl border border-red-100">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold">Every phone call: $500</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-red-50 rounded-xl border border-red-100">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold">Every email: $500</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-red-50 rounded-xl border border-red-100">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold">Every "quick question": $500</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-red-50 rounded-xl border border-red-100">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold">Contract review that takes 10 minutes: $500</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-red-50 rounded-xl border border-red-100">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold">Follow-up to clarify one sentence: $500</p>
                </div>
              </div>
            </div>

            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              By the time you're done with one legal matter, you've spent thousands — and you're afraid to call them again.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              What If Your Lawyer Worked FOR You, Not By The Hour?
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              That's exactly what Lawyer On Call does.
            </p>

            <p className="text-xl text-slate-700 leading-relaxed mb-12">
              You put a BigLaw attorney on your payroll — without the $200K salary, benefits, or office space.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  What You Get
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Unlimited access</strong> — call, text, email whenever you need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Unlimited contract reviews</strong> — every vendor agreement, every client contract, every lease</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Unlimited negotiations</strong> — I'm in your corner for every deal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Flat monthly fee</strong> — no meters running, no surprise bills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Same attorney every time</strong> — I learn your business, not starting from scratch each call</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  What You DON'T Get
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Hourly billing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>"Let me check with the partner" runarounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Junior associates who don't know your case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Surprise invoices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Fear of reaching out because the clock is ticking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
              Who This Is For
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              Is This Right For You?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold mb-1">Business owners</p>
                  <p className="text-slate-600">Tired of $5,000 legal bills for routine matters</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold mb-1">Startups</p>
                  <p className="text-slate-600">Need a legal department but can't afford a full-time attorney</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold mb-1">Real estate investors</p>
                  <p className="text-slate-600">Closing multiple deals a month</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold mb-1">Entrepreneurs</p>
                  <p className="text-slate-600">Need contracts reviewed daily</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-bold mb-1">Anyone</p>
                  <p className="text-slate-600">Who's ever hesitated to call their lawyer because of the cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              One Price. Unlimited Everything.
            </h2>

            <div className="text-6xl md:text-7xl font-extrabold text-blue-400 my-12">
              $1,500<span className="text-3xl text-slate-400">/month</span>
            </div>

            <p className="text-slate-300 text-lg mb-12 italic">
              That's three hours with a traditional BigLaw firm
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Unlimited phone/email/text access</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Unlimited contract reviews</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Unlimited negotiations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Unlimited consultations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">24-hour response guarantee</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Direct attorney access</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">No setup fees</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">No hidden costs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Rollover hours for lighter months</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Compare The Cost</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <span className="text-slate-200">Traditional firm (10 hrs/month)</span>
                  <span className="text-2xl font-bold text-red-400">$5,000/mo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <span className="text-slate-200">Full-time attorney (salary + benefits)</span>
                  <span className="text-2xl font-bold text-red-400">$20,000/mo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-500/20 rounded-lg border-2 border-blue-400">
                  <span className="text-white font-bold">Lawyer On Call</span>
                  <span className="text-3xl font-bold text-blue-300">$1,500/mo</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-500/10 rounded-xl border border-blue-400/30">
                <p className="text-lg font-bold text-blue-300 mb-2">ROI Example</p>
                <p className="text-slate-300">
                  If you review just <strong>3 contracts per month</strong> with a traditional firm, you'd spend $1,500-$3,000.
                </p>
                <p className="text-slate-300 mt-2">
                  With Lawyer On Call, you can review <strong>30 contracts</strong> for the same price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              But Wait...
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">"What if I don't use it every month?"</h3>
                <p className="text-slate-700">
                  Think of it like insurance. When you need it, you're grateful it's there. And unlike insurance, you can actually USE this without filing a claim. Plus, lighter months roll over — you're never losing value.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">"What if I need a lot of help?"</h3>
                <p className="text-slate-700">
                  Perfect. That's exactly who this is for. The more you use it, the better the value. No penalty for actually using your lawyer.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">"Can you really handle my industry?"</h3>
                <p className="text-slate-700">
                  I've worked with businesses across real estate, tech startups, e-commerce, professional services, and more. If it involves contracts, negotiations, or legal risk — I've seen it.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">"What if I need litigation?"</h3>
                <p className="text-slate-700">
                  Lawyer On Call covers everything EXCEPT active litigation. But I can refer you to the right attorney if you need courtroom representation — and I'll make sure they're actually good.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">"What's the catch?"</h3>
                <p className="text-slate-700">
                  There isn't one. I'd rather have 20 clients paying me $1,500/month consistently than bill sporadically at $500/hour and watch them disappear after one invoice. This model works better for both of us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stop Paying By The Hour. <br />Start Paying For Results.
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Put me on your payroll. One flat fee. Unlimited access. No surprises.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-5 px-12 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-xl mb-6"
              >
                Put Me On Your Payroll — $1,500/Month
                <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="text-slate-400 text-sm">
                No contracts. No commitments. Cancel anytime.<br />
                First consultation is free — let's talk about your needs.
              </p>
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

export default LawyerOnCall;
