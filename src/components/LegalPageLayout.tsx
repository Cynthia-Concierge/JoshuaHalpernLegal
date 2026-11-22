import React from "react";
import SiteFooter, { LegalLinks } from "@/components/SiteFooter";

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
    <span className="font-semibold text-slate-900">LH Law Holdings LLC d/b/a Legal Halp</span>
    <br />
    Attn: Joshua B. Halpern, Esq.
    <br />
    6545 Market Ave. N., Suite 100, North Canton, OH 44721
    <br />
    <Email />
    <br />
    <a href="tel:+12162232818" className="text-blue-600 hover:text-blue-500 underline">
      (216) 223-2818
    </a>
  </p>
);

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, effectiveDate, children }) => (
  <div className="min-h-screen bg-white">
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">{title}</h1>
          <p className="text-slate-500 mb-4">Effective and last updated: {effectiveDate}</p>
          <LegalLinks
            className="flex flex-wrap gap-2 mb-12 text-sm"
            linkClassName="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          />
          <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed">{children}</div>
        </div>
      </div>
    </div>

    <SiteFooter />
  </div>
);

export default LegalPageLayout;
