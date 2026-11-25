import SiteFooter from "@/components/SiteFooter";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, ChevronDown, HelpCircle } from "lucide-react";
import { SITE_FAQS, type FaqItem } from "@/data/faqs";

type FAQItem = FaqItem;

const FAQS: FAQItem[] = SITE_FAQS;

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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
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
              find what you're looking for? Book a consultation and ask directly.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FAQ ACCORDION                                 */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 bg-white">
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
      <section className="py-20 md:py-28 bg-slate-50">
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
                Book a consultation. We'll talk through your company, what you
                need covered, and whether a retainer or a fixed-fee project fits.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FOOTER                                        */}
      {/* ============================================= */}
      <SiteFooter tagline={<>Outside General Counsel &bull; Deals & Transactions &bull; Governance &bull; Contracts &bull; Real Estate &bull; Estate Planning</>} />
    </div>
  );
};

export default FAQ;
