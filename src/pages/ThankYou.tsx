import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const ThankYou = () => {
  // Load Calendly embed script
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      const el = document.getElementById("calendly-embed");
      if (el && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/legalhalp/15-minute-legal-consult?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=3b82f6",
          parentElement: el,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center animate-scale-in">
            <CheckCircle2 className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Thanks. Let's Find a Time.
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            We've got your info and will reach out shortly to schedule your consultation.
          </p>
          <p className="text-slate-500">
            Don't want to wait? Book your call right here.
          </p>
        </div>

        {/* Calendly Inline Embed */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden mb-8 shadow-sm animate-slide-up">
          <div
            id="calendly-embed"
            style={{ minWidth: "320px" }}
            className="h-[900px] sm:h-[760px]"
          />
        </div>

        {/* What to Expect */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <h3 className="text-lg font-bold text-slate-900 mb-4">On the call, we'll cover:</h3>
          <div className="space-y-3">
            {[
              "Your company, your entities, and what's on your plate",
              "What a monthly retainer would cover for your business",
              "Whether it's the right fit (no pressure either way)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/lawyeroncall"
            className="text-slate-400 hover:text-slate-900 text-sm underline transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
