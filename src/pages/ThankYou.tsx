import { CheckCircle, Mail, Phone, Calendar } from "lucide-react";
import DynamicBackground from "@/components/DynamicBackground";

// Replace with your scheduling link (e.g. Calendly, Cal.com)
const SCHEDULE_CALL_URL = "https://calendly.com/your-link";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <DynamicBackground />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-serif">
            Your question has been received.
          </h1>

          <p className="text-xl mb-8 text-slate-600 leading-relaxed max-w-lg mx-auto">
            A business attorney will review your question and respond shortly.
          </p>

          <div className="bg-slate-50 p-8 rounded-2xl mb-8 border border-slate-200">
            <h3 className="text-lg font-semibold mb-6 text-slate-900">
              What to expect:
            </h3>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  Keep an eye on your email for a direct response
                </span>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  If your question is urgent, you may receive a call directly
                </span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  Most responses arrive within a few hours
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl mb-8 border border-slate-200 shadow-sm">
            <p className="text-slate-700 mb-6 text-lg">
              If you’d like to speak directly with our legal team, we’re happy to schedule a call.
            </p>
            <a
              href={SCHEDULE_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>

          <p className="text-sm text-slate-400">
            Your information is private and confidential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
