import React from 'react';
import { 
  FileText, 
  Shield, 
  Scale,
  Users,
  CheckCircle2,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DashboardShowcase: React.FC = () => {
  return (
    <>
      {/* SECTION 5 — What Happens Next */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                What happens after you submit your question
              </h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  step: "1",
                  title: "Your question is reviewed by a business attorney",
                  description: "A real lawyer reviews your specific situation. Not a chatbot, not an assistant.",
                  icon: FileText,
                },
                {
                  step: "2",
                  title: "You receive a direct response with clear guidance",
                  description: "Straightforward advice you can actually use to make decisions and protect your business.",
                  icon: Shield,
                },
                {
                  step: "3",
                  title: "If needed, you can continue the conversation or get further help",
                  description: "No pressure, no obligation. Continue only if it makes sense for you.",
                  icon: Users,
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 md:gap-8 items-start relative">
                  {/* Connector line */}
                  {index < 2 && (
                    <div className="absolute left-[27px] md:left-[31px] top-[60px] w-0.5 h-[calc(100%-40px)] bg-slate-200"></div>
                  )}
                  
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/20 relative z-10">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="pb-12 md:pb-16">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-lg font-semibold text-slate-700">No pressure. No obligation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Authority / Credibility */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-100/30 skew-x-12 transform -translate-x-1/4 z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                Experience You Can Trust
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Trusted by Growing Businesses
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We work with business owners across multiple industries, helping them protect and grow their companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {[
                { icon: FileText, title: "Review contracts", description: "Make sure your agreements protect you before you sign." },
                { icon: Scale, title: "Resolve disputes", description: "Get clear guidance when conflicts arise with clients or partners." },
                { icon: Users, title: "Structure partnerships", description: "Set up partnerships properly so everyone knows the terms." },
                { icon: Shield, title: "Avoid legal exposure", description: "Identify and close gaps in your legal protection." },
                { icon: CheckCircle2, title: "Protect growing companies", description: "As you scale, stay protected at every stage." },
                { icon: Heart, title: "Prepare estate plans", description: "Protect your assets, family, and investments." },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-slate-700 font-medium">
                Most clients start by asking a single question.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    const formElement = document.getElementById('enter-your-info-form');
                    if (formElement) {
                      const yOffset = -20;
                      const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900 transition-colors text-lg"
                >
                  Ask yours now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardShowcase;
