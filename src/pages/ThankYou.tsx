import { CheckCircle2, Calendar, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SCHEDULE_CALL_URL = "https://calendly.com/josh-legalhalplaw/30min";

const ThankYou = () => {
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
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Application Received
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Thank you for applying for ongoing counsel.
          </p>
          <p className="text-slate-400">
            We've received your information and will review your application shortly.
          </p>
        </div>

        {/* Next Steps Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-6 font-serif">What Happens Next?</h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Application Review</h3>
                <p className="text-slate-400 text-sm">
                  We'll review your application within 24 hours to ensure this service is a good fit for your business needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Free Legal Cost Audit</h3>
                <p className="text-slate-400 text-sm">
                  If approved, we'll reach out to schedule your complimentary audit call where we'll analyze your current legal spending and show you exactly how much you could save.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Get Started</h3>
                <p className="text-slate-400 text-sm">
                  Once you're ready to move forward, we'll onboard you immediately and you'll have direct access to ongoing legal counsel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-2">Check Your Email</h3>
              <p className="text-slate-300 text-sm mb-3">
                We've sent a confirmation to your email address. Keep an eye out for our response within 24 hours.
              </p>
              <p className="text-slate-400 text-xs">
                If you don't see it, check your spam folder or reach out directly at{" "}
                <a href="mailto:josh@legalhalplaw.com" className="text-emerald-400 hover:text-emerald-300 underline">
                  josh@legalhalplaw.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Optional: Book Call CTA */}
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-4">
            Want to skip the wait and book your free audit call now?
          </p>
          <a
            href={SCHEDULE_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Free Audit Call</span>
            <ArrowRight className="w-5 h-5" />
          </a>
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
