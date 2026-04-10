import { useEffect } from "react";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const ThankYou = () => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Lawyer On Call Application",
        content_category: "legal_services",
        value: 1500,
        currency: "USD",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center animate-scale-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            You're Almost In
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            We've got your info. We'll reach out within 24 hours to schedule a quick intro call.
          </p>
          <p className="text-slate-400">
            Don't want to wait? You can book your call right now.
          </p>
        </div>

        {/* Book Call CTA */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8 animate-slide-up text-center">
          <Calendar className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3 font-serif">Skip the Wait — Book Now</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            15 minutes with Josh to discuss your legal needs, how the service works, and whether it's a good fit. No pressure, no commitment.
          </p>
          <a
            href="https://calendly.com/legalhalp/15-minute-legal-consult"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-600/25 transform hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Book Your Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* What to Expect */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <h3 className="text-lg font-bold text-white mb-4">On the call, we'll cover:</h3>
          <div className="space-y-3">
            {[
              "Your current legal setup and where the gaps are",
              "How the flat-fee retainer works for your situation",
              "Whether we're the right fit (no pressure either way)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/lawyeroncall"
            className="text-slate-400 hover:text-white text-sm underline transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
