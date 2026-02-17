import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16 mb-10">
            <div className="flex-shrink-0 mx-auto md:mx-0 mb-8 md:mb-0">
              <img
                src="/joshua-halpern.png"
                alt="Joshua Halpern"
                className="rounded-2xl shadow-lg w-64 h-64 md:w-72 md:h-72 object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                Most business owners don't have a lawyer they can rely on.
              </h2>

              <div className="space-y-5 text-lg md:text-xl text-slate-600 leading-relaxed">
                <p>So when legal questions come up, they guess.</p>
                <p>Or delay.</p>
                <p>Or hope nothing goes wrong.</p>
                <p className="font-semibold text-slate-900">That's how small issues turn into expensive problems.</p>
                <p>
                  This gives you direct access to a business lawyer — so you can make the right decisions <span className="font-semibold text-slate-900">before</span> problems happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
