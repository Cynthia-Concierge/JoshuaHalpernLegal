import React from "react";
import { LegalLinks, LegalDisclosure, LEGAL_ENTITY, TRADE_NAME } from "@/components/SiteFooter";

// Footer used on ad landing pages (/lawyeroncall, /realestate).
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 py-12 border-t border-slate-600">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-16 overflow-hidden">
            <img src="/logo.png" alt="Legal Halp" className="h-16 object-cover object-left" style={{ width: "56px" }} />
          </div>
        </div>

        <LegalLinks className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-8 text-sm" />

        <LegalDisclosure className="text-xs text-slate-300 max-w-3xl mx-auto leading-relaxed space-y-3" />

        <div className="mt-8 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {LEGAL_ENTITY} d/b/a {TRADE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
