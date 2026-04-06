import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Mail,
  FileText,
  Clock,
  Phone,
  Calendar,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    title: "We review your submission",
    description:
      "Our team will go through every detail you provided and flag anything that needs clarification.",
  },
  {
    icon: Mail,
    title: "You'll hear from us within 1 business day",
    description:
      "We'll reach out via email or phone to confirm details and walk you through next steps.",
  },
  {
    icon: Clock,
    title: "We prepare and file everything",
    description:
      "Once approved, we handle all state filings, EIN registration, and document preparation.",
  },
];

const FormationThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight font-serif">
              You're All Set!
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-semibold">
              Your business formation intake has been submitted successfully.
            </p>

            <p className="text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              Our legal team is on it. We'll review your information and reach
              out within 1 business day to get things moving.
            </p>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-12 tracking-tight">
              What Happens Next
            </h2>

            <div className="space-y-0">
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-5 md:gap-6 items-start relative"
                >
                  {index < STEPS.length - 1 && (
                    <div className="absolute left-[23px] md:left-[27px] top-[56px] w-0.5 h-[calc(100%-32px)] bg-slate-200" />
                  )}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/20 relative z-10">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="pb-10 md:pb-14">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Want to talk to someone now?
              </h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                If you have questions or need to make changes to your
                submission, schedule a quick call with our team.
              </p>
              <a
                href="https://calendly.com/legalhalp/15-minute-legal-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-xs text-slate-400 pt-2">
              Your information is private, encrypted, and confidential.
            </p>
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
            <Link
              to="/terms"
              className="hover:text-blue-400 transition-colors"
            >
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
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Disclaimer: The information provided on this website does not, and
            is not intended to, constitute legal advice; instead, all
            information, content, and materials available on this site are for
            general informational purposes only.
          </p>
          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Legal Halp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormationThankYou;
