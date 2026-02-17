import React from 'react';
import LeadForm from './LeadForm';
import { Scale, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onFormSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    question: string;
  }) => void;
}

const Hero: React.FC<HeroProps> = ({ onFormSubmit }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-slate-50 to-white z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Scale className="w-4 h-4 text-blue-600" />
              For Business Owners
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight font-serif">
              Finally, A Business Lawyer You Can Ask Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 underline decoration-blue-400/60 underline-offset-8 decoration-4">Without Paying $500/hour</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ask your question and get a personal response from an experienced business attorney. No hourly fees. No obligation.
            </p>

            {/* Trust Bullets */}
            <div className="flex flex-col gap-4 max-w-lg mx-auto lg:mx-0">
              {[
                "Ask questions about contracts, clients, employees, or partnerships",
                "Get real answers from a real business lawyer",
                "Most responses within a few hours",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-base text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Form */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-8 z-20">
            <LeadForm onSubmit={onFormSubmit} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
