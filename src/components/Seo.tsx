import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://legalhalplaw.com";

interface PageMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

const DEFAULT_META: PageMeta = {
  title: "Outside General Counsel & Corporate Attorney | Legal Halp",
  description:
    "Outside general counsel and corporate transactional representation for operating companies, investors, and multi-entity groups. Fixed monthly fee, no hourly billing.",
};

const PAGE_META: Record<string, PageMeta> = {
  "/": DEFAULT_META,
  "/lawyer-on-call": {
    title: "Outside General Counsel on a Flat Monthly Fee | Legal Halp",
    description:
      "Your in-house legal function, outsourced. Deals, governance, contracting and entity management from one senior attorney. Plans from $1,500/mo, month to month.",
  },
  "/representative-matters": {
    title: "Representative Matters | Legal Halp",
    description:
      "Anonymized corporate and transactional matters: M&A and exits, outside general counsel engagements, entity restructuring, commercial real estate, governance and IP.",
  },
  "/services": {
    title: "Fixed-Fee Project Work | Legal Halp",
    description:
      "Defined legal projects on a fixed fee, quoted before work begins: business formation, contracts, employment, trademarks, real estate holding structures, and estate planning.",
  },
  "/about": {
    title: "About Joshua Halpern, Esq. | Legal Halp",
    description:
      "Former corporate and transactional associate at Taft Stettinius & Hollister. Now outside general counsel to operating companies, investors and multi-entity groups.",
  },
  "/contact": {
    title: "Book a Consultation | Legal Halp",
    description:
      "Schedule a 15-minute call. We scope the matter and you have a fee before any work begins.",
  },
  "/faq": {
    title: "Frequently Asked Questions | Legal Halp",
    description:
      "How the flat-fee and monthly retainer models work, what is included, response times, and what falls outside scope.",
  },
  "/formation": {
    title: "LLC & Business Formation | Legal Halp",
    description:
      "Attorney-formed LLCs and corporations with a custom operating agreement, EIN, and compliance guidance. Flat fee, disclosed upfront.",
  },
  "/lawyeroncall": {
    title: "Outside General Counsel, Embedded in Your Business | Legal Halp",
    description:
      "Big-firm corporate counsel on a fixed monthly retainer. Deals, governance, contracts, and real estate, handled by one senior attorney who knows your business.",
  },
  "/realestate": {
    title: "Real Estate Legal Services | Legal Halp",
    description:
      "Entity structuring, leases, purchase agreements and title work for real estate investors and owners.",
  },
  "/services/llc-formation": {
    title: "LLC Formation | Legal Halp",
    description:
      "Attorney-drafted LLC formation with a custom operating agreement, EIN and compliance checklist. Flat fee.",
  },
  "/services/estate-planning": {
    title: "Estate Planning & Trusts | Legal Halp",
    description:
      "Revocable living trusts, pour-over wills, powers of attorney and healthcare directives at a flat fee.",
  },
  "/services/contract-drafting": {
    title: "Contract Drafting & Review | Legal Halp",
    description:
      "Custom contract drafting, review and negotiation support from a corporate attorney. Flat fee per contract.",
  },
  "/services/brand-protection": {
    title: "Trademark & Brand Protection | Legal Halp",
    description:
      "Trademark search, federal filing and office action response, plus brand protection strategy. Flat fee.",
  },
  "/services/real-estate-llc": {
    title: "Real Estate LLC Formation | Legal Halp",
    description:
      "Hold rental property in an LLC: formation, a real-estate-specific operating agreement, deed preparation and recording.",
  },
  "/services/website-compliance": {
    title: "Website & Privacy Compliance | Legal Halp",
    description:
      "Custom privacy policy, terms of service, cookie policy and accessibility review for online businesses.",
  },
  "/terms": {
    title: "Terms & Conditions | Legal Halp",
    description: "Terms and conditions for the Legal Halp website.",
  },
  "/privacy": {
    title: "Privacy Policy | Legal Halp",
    description: "How Legal Halp collects, uses and protects your information.",
  },
  "/payment-policy": {
    title: "Payment & Refund Policy | Legal Halp",
    description: "Payment terms and refund policy for Legal Halp engagements.",
  },
  "/thank-you": { title: "Thank You | Legal Halp", description: "", noindex: true },
  "/lawyeroncall/thank-you": {
    title: "Thank You | Legal Halp",
    description: "",
    noindex: true,
  },
  "/formation/intake": {
    title: "Formation Intake | Legal Halp",
    description: "",
    noindex: true,
  },
  "/formation/thank-you": {
    title: "Thank You | Legal Halp",
    description: "",
    noindex: true,
  },
  "/booking/thank-you": {
    title: "Thank You | Legal Halp",
    description: "",
    noindex: true,
  },
  "/realestate/thank-you": {
    title: "Thank You | Legal Halp",
    description: "",
    noindex: true,
  },
};

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const removeMeta = (attr: "name" | "property", key: string) => {
  const el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.remove();
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized =
      pathname.length > 1 && pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;
    const meta = PAGE_META[normalized] || DEFAULT_META;
    const url = `${SITE}${normalized === "/" ? "" : normalized}`;
    const description = meta.description || DEFAULT_META.description;

    document.title = meta.title;
    setMeta("name", "description", description);

    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");

    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", description);

    setCanonical(url);

    if (meta.noindex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      removeMeta("name", "robots");
    }
  }, [pathname]);

  return null;
};

export default Seo;
