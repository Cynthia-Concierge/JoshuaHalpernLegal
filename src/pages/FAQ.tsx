import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, Shield, Phone, ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What kind of legal services do you offer?",
    answer:
      "We offer flat-fee legal packages for LLC formation, contracts, hiring (both employees and contractors), estate planning, real estate, and general business counsel. Everything is tailored, attorney-drafted, and designed to be practical, protective, and affordable.",
  },
  {
    question: "How does your flat-fee pricing work?",
    answer:
      "We charge a transparent flat fee for each package or service—no hourly billing, no hidden charges. You'll know exactly what you're paying for before any work begins.",
  },
  {
    question: "Can I speak directly with an attorney?",
    answer:
      "Yes. Every package includes direct access to a licensed attorney for your questions, legal advice, and personalized guidance. You won't be passed off to a call center or paralegal.",
  },
  {
    question: "Do you offer custom contracts or just templates?",
    answer:
      "All contracts are custom-drafted or tailored to your business and specific needs. We don't just hand you a template—we make sure the agreement actually fits what you're doing and protects your interests.",
  },
  {
    question: "Can you help if I'm in a different state?",
    answer:
      "Yes. We represent clients in many states and can assist with business law matters, contracts, and estate planning across most jurisdictions. We'll let you know upfront if something requires a local attorney referral.",
  },
  {
    question: "Is everything done virtually?",
    answer:
      "Yes. We operate a modern virtual law firm—meaning everything is handled securely through phone, email, and video calls. We work around your schedule and handle everything without the need for in-person meetings.",
  },
  {
    question: "Do you offer ongoing legal support or just one-time packages?",
    answer:
      "Both. Our packages include post-engagement support, and we also offer ongoing legal counsel for businesses that need a trusted legal advisor on hand.",
  },
  {
    question: "How long does it take to complete my package?",
    answer:
      "Turnaround time depends on the package, but most legal documents are delivered within 5–10 business days. Expedited service is available if needed.",
  },
  {
    question: "What if I need help with something not listed?",
    answer:
      "Just reach out. We offer custom services and can usually create a solution or refer you to the right resource. If it's a legal issue you're facing, we're here to help—or get you to someone who can.",
  },
  {
    question: "Do you handle litigation or disputes?",
    answer:
      "We focus on proactive legal services—meaning we help you avoid problems before they happen. If you're facing a dispute or lawsuit, we'll connect you with a trusted litigation attorney in our network.",
  },
];

const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => (
  <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left"
    >
      <span className="text-base md:text-lg font-semibold text-slate-900 leading-snug">
        {item.question}
      </span>
      <ChevronDown
        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
          <p className="text-slate-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              <HelpCircle className="w-4 h-4 text-blue-600" />
              FAQ
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight font-serif">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 underline decoration-blue-400/60 underline-offset-8 decoration-4">
                Questions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about working with Legal Halp. Can't
              find what you're looking for? Book a free call and ask directly.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FAQ ACCORDION                                 */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FINAL CTA                                     */}
      {/* ============================================= */}
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
                Still Have Questions?
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Book a free 15-minute call. No sales pitch—just a straight
                conversation about what you need.
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
            <Scale className="w-8 h-8 text-slate-600 mb-2" />
            <span className="text-lg font-serif text-slate-300 tracking-widest uppercase">
              Legal Halp
            </span>
            <p className="text-sm text-slate-500 mt-1">
              by Joshua Halpern, Esq.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Email
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Phone
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
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

export default FAQ;
