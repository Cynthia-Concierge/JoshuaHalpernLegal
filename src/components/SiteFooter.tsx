import React from "react";
import { Link } from "react-router-dom";

/**
 * Single source of truth for the legal footer used on every page.
 * Ohio Prof.Cond.R. 7.2(c) requires the name and office address of at least one
 * responsible lawyer or firm. Ohio Board Opinion 2026-02 requires the full legal
 * entity name and designation to appear in a noticeable location (e.g., footer)
 * wherever the trade name is used.
 */
export const LEGAL_ENTITY = "LH Law Holdings LLC";
export const TRADE_NAME = "Legal Halp";
export const RESPONSIBLE_ATTORNEY = "Joshua B. Halpern, Esq.";
// Office address for Prof.Cond.R. 7.2(c). Rendered only when set.
export const OFFICE_ADDRESS = "";
export const OFFICE_PHONE = "(216) 223-2818";
export const CONTACT_EMAIL = "assistant@legalhalp.com";

export const LEGAL_LINKS = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/payment-policy", label: "Payment & Refund Policy" },
  { to: "/accessibility", label: "Accessibility Statement" },
];

export const LegalLinks: React.FC<{ className?: string; linkClassName?: string }> = ({
  className = "flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6 text-sm",
  linkClassName = "hover:text-blue-400 transition-colors",
}) => (
  <nav aria-label="Legal" className={className}>
    {LEGAL_LINKS.map((l) => (
      <Link key={l.to} to={l.to} className={linkClassName}>
        {l.label}
      </Link>
    ))}
  </nav>
);

export const LegalDisclosure: React.FC<{ className?: string }> = ({
  className = "text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed space-y-3",
}) => (
  <div className={className}>
    <p>
      <span className="font-semibold text-slate-400">Attorney Advertising.</span>{" "}
      {TRADE_NAME} is a trade name of {LEGAL_ENTITY}. Attorney responsible for this website:{" "}
      {RESPONSIBLE_ATTORNEY}
      {OFFICE_ADDRESS ? `, ${OFFICE_ADDRESS}` : ""}, {OFFICE_PHONE}. Joshua B. Halpern is licensed to
      practice law in Ohio only and is not admitted in Florida or any other jurisdiction. Matters
      governed by the law of another jurisdiction are handled only as permitted by the applicable
      rules, which may include coordinating with locally licensed counsel. Business and
      transactional matters only. No litigation or court appearances.
    </p>
    <p>
      The information on this website is general information, not legal advice. Contacting{" "}
      {TRADE_NAME} by form, email, text, phone, or our automated assistant does not create an
      attorney-client relationship, which begins only when a written engagement agreement is signed.
      Please do not send confidential information before then. Prior results, transaction values,
      and client testimonials do not guarantee a similar outcome. No attorney at {TRADE_NAME} is
      certified as a specialist by any state bar or certifying organization.
    </p>
    <p>
      By providing your phone number, you agree to receive text messages from {TRADE_NAME}. Message
      and data rates may apply. Reply STOP to opt out.
    </p>
  </div>
);

interface SiteFooterProps {
  tagline?: React.ReactNode;
  variant?: "dark" | "slate";
}

const SiteFooter: React.FC<SiteFooterProps> = ({ tagline, variant = "dark" }) => (
  <footer
    className={`${
      variant === "dark" ? "bg-slate-950 border-slate-800" : "bg-slate-800 border-slate-600"
    } text-slate-400 py-12 border-t`}
  >
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-col items-center mb-6">
        <img src="/logo-white.svg" alt="Legal Halp" className="h-10 mb-4" />
        <p className="text-sm text-slate-500">{TRADE_NAME}</p>
        <p className="text-sm text-slate-500 mt-1">by Joshua Halpern, Esq.</p>
      </div>

      <LegalLinks />

      {tagline && <p className="text-xs text-slate-600 mb-6">{tagline}</p>}

      <LegalDisclosure className="text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed space-y-3 mb-6" />

      <div className="text-xs text-slate-600">
        &copy; {new Date().getFullYear()} {LEGAL_ENTITY} d/b/a {TRADE_NAME}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
