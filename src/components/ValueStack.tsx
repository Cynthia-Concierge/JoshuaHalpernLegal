import React from 'react';
import { Check, Shield } from 'lucide-react';

interface ValueStackProps {
  onGetDocumentsClick?: () => void;
}

const ValueStack: React.FC<ValueStackProps> = ({ onGetDocumentsClick }) => {
  const handleScrollToForm = () => {
    if (onGetDocumentsClick) {
      onGetDocumentsClick();
    } else {
      const formElement = document.getElementById('enter-your-info-form');
      if (formElement) {
        const yOffset = -20;
        const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* CRITICAL — Imagine having a lawyer (plants retainer psychologically) */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 transform translate-x-1/4 z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight leading-tight">
              Imagine having a lawyer you can ask questions anytime.
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              <p>Not scheduling weeks in advance.</p>
              <p>Not worrying about hourly billing.</p>
              <p>Not guessing when legal situations come up.</p>
              <p className="font-semibold text-slate-900 text-xl md:text-2xl">
                Just clear answers when you need them.
              </p>
              <p className="text-slate-700 font-medium">
                Most clients start by asking a single question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Final CTA */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden text-center">
            {/* Abstract pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ask your question now
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                No hourly fees. No obligation. Just real legal advice from an experienced business attorney.
              </p>
              <button 
                onClick={handleScrollToForm}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg mx-auto"
              >
                <Check className="w-6 h-6" />
                Submit Your Question
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValueStack;
