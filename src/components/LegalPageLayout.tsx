import React from "react";
import { Link } from "react-router-dom";

export const CONTACT_EMAIL = "assistant@legalhalp.com";

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-12 mb-3 tracking-tight">{children}</h2>
);

export const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-bold text-slate-900 mt-6 mb-2">{children}</h3>
);

export const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc pl-6 space-y-2">{children}</ul>
);

export const Email: React.FC = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:text-blue-500 underline">
    {CONTACT_EMAIL}
  </a>
);

export const ContactBlock: React.FC = () => (
  <p className="mt-3">
    <span className="font-semibold text-slate-900">Legal Halp</span>
    <br />
    <Email />
  </p>
);

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, effectiveDate, children }) => (
  <div className="min-h-screen bg-white">
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">{title}</h1>
          <p className="text-slate-500 mb-4">Effective and last updated: {effectiveDate}</p>
          <div className="flex flex-wrap gap-2 mb-12 text-sm">
            <Link to="/terms" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Privacy Policy</Link>
            <Link to="/payment-policy" className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Payment &amp; Refund Policy</Link>
          </div>
          <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">{children}</div>
        </div>
      </div>
    </section>

    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Legal Halp" className="h-10 brightness-0 invert opacity-80 mb-1" />
          <p className="text-sm text-slate-500 mt-1">by Joshua Halpern, Esq.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-6 mb-6 text-sm">
          <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link>
          <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link to="/payment-policy" className="hover:text-blue-400 transition-colors">Payment &amp; Refund Policy</Link>
        </div>
        <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
          Attorney Advertising. The information on this website is for general informational purposes
          only and is not legal advice. Contacting Legal Halp does not create an attorney-client relationship.
        </p>
        <div className="text-xs text-slate-700">&copy; {new Date().getFullYear()} Legal Halp. All rights reserved.</div>
      </div>
    </footer>
  </div>
);

export default LegalPageLayout;
