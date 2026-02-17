import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Shield,
  Phone,
  ArrowRight,
  CheckCircle2,
  Building2,
  Heart,
  PenTool,
  Users,
  Sparkles,
  Home,
  Globe,
  AlertTriangle,
  Info,
} from "lucide-react";

/* -------------------------------------------------- */
/* Types                                              */
/* -------------------------------------------------- */

interface ServicePackage {
  name: string;
  price: string;
  whoItsFor: string;
  includes: string[];
  notIncluded?: string[];
  extras?: { label: string; items: string[] };
  whyItMatters?: string;
  commonItems?: string[];
  stripeLink?: string;
}

interface ServiceCategory {
  id: string;
  icon: React.FC<{ className?: string }>;
  label: string;
  packages: ServicePackage[];
}

/* -------------------------------------------------- */
/* Data                                               */
/* -------------------------------------------------- */

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "business",
    icon: Building2,
    label: "Starting a Business",
    packages: [
      {
        name: "Basic LLC Formation",
        price: "$1,000",
        whoItsFor:
          "Solopreneurs, freelancers, side hustlers, and first-time business owners.",
        includes: [
          "Business name search",
          "Articles of Organization filed with your state",
          "Custom Operating Agreement (not a template)",
          "Federal EIN for taxes and banking",
          "Help opening a business bank account",
          "Registered agent enrollment assistance",
          "Compliance checklist so you stay legit",
          "30-minute attorney consultation + email support",
        ],
        notIncluded: [
          "State filing fees ($50–$300 depending on state)—disclosed before we start.",
        ],
        stripeLink: "https://buy.stripe.com/cNi9ATgqm8Mh7G19Gy3oA03",
      },
      {
        name: "Advanced LLC Formation",
        price: "$1,500",
        whoItsFor:
          "Partnerships, co-founders, investor-backed startups, or any LLC with 2+ members.",
        includes: [
          "Everything in Basic LLC Formation",
          "Multi-member Operating Agreement with profit splits, voting rights, and exit terms",
          "Buy-Sell Agreement (what happens if a partner leaves, dies, or wants out)",
          "60-minute legal strategy session",
          "Enhanced compliance guidance for multi-owner structures",
        ],
        whyItMatters:
          "50% of business partnerships end in disputes. A solid Operating Agreement prevents lawsuits, buyout nightmares, and dead equity. This is the document you'll wish you had when things go sideways.",
        stripeLink: "https://buy.stripe.com/cNi9ATgqm8Mh7G19Gy3oA03",
      },
    ],
  },
  {
    id: "family",
    icon: Heart,
    label: "Protecting Your Family",
    packages: [
      {
        name: "Estate Planning (Single)",
        price: "$1,750",
        whoItsFor:
          "Unmarried adults who want to protect assets, avoid probate, and ensure their wishes are followed.",
        includes: [
          "Revocable Living Trust",
          "Pour-Over Will",
          "Durable Power of Attorney",
          "Healthcare Directive + HIPAA Authorization",
          "Asset transfer instructions",
          "1-hour attorney consultation",
        ],
        stripeLink: "https://buy.stripe.com/bJefZh3DA2nTbWhf0S3oA04",
      },
      {
        name: "Estate Planning (Married)",
        price: "$2,500",
        whoItsFor:
          "Married couples who want joint asset protection, probate avoidance, and peace of mind.",
        includes: [
          "Joint Revocable Living Trust",
          "Pour-Over Wills (both spouses)",
          "Durable Powers of Attorney (both spouses)",
          "Healthcare Directives + HIPAA (both spouses)",
          "Personal property assignment",
          "Asset transfer guidance",
          "1-hour consultation + ongoing support",
        ],
        whyItMatters:
          "Wills go through probate—a public, expensive, months-long court process. A trust bypasses all of that. Your family gets assets faster, privately, and without lawyers eating into your estate.",
        stripeLink: "https://buy.stripe.com/bJefZh3DA2nTbWhf0S3oA04",
      },
    ],
  },
  {
    id: "contracts",
    icon: PenTool,
    label: "Contracts & Agreements",
    packages: [
      {
        name: "Basic Contract Drafting or Review",
        price: "$550",
        whoItsFor:
          "Freelancers, consultants, agencies, or anyone who needs one contract drafted or reviewed.",
        includes: [
          "Custom contract drafting OR thorough review of existing contract",
          "Plain-English explanation of key terms",
          "Attorney strategy call or written summary",
          "2 rounds of revisions",
          "5-day turnaround (expedited available)",
        ],
        commonItems: [
          "Service agreements",
          "NDAs",
          "Independent contractor agreements",
          "Partnership agreements",
          "Influencer brand deals",
          "Licensing agreements",
        ],
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
      {
        name: "Advanced Contract Package",
        price: "$850",
        whoItsFor:
          "Complex deals, high-value agreements, or contracts with significant negotiation.",
        includes: [
          "Everything in Basic Contract Package",
          "Deeper legal analysis and risk assessment",
          "Negotiation strategy and redline support",
          "Additional revision rounds as needed",
          "Priority turnaround",
        ],
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
    ],
  },
  {
    id: "employment",
    icon: Users,
    label: "Hiring & Employment",
    packages: [
      {
        name: "Hire an Employee Package",
        price: "$850",
        whoItsFor:
          "Business owners hiring their first (or next) W-2 employee.",
        includes: [
          "Employment Agreement (offer letter + terms)",
          "At-Will Employment documentation",
          "Confidentiality + IP assignment provisions",
          "Employee handbook guidance",
          "State-specific compliance review",
        ],
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
      {
        name: "Engage an Independent Contractor",
        price: "$850",
        whoItsFor:
          "Business owners working with freelancers, consultants, or agencies.",
        includes: [
          "Independent Contractor Agreement",
          "Scope of work documentation",
          "IP ownership and confidentiality terms",
          "Proper classification guidance (avoid IRS issues)",
          "1099 compliance checklist",
        ],
        whyItMatters:
          "Misclassifying employees as contractors can trigger IRS audits, back taxes, and penalties. Get it right from the start.",
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
    ],
  },
  {
    id: "brand",
    icon: Sparkles,
    label: "Brand & IP Protection",
    packages: [
      {
        name: "Brand + IP Protection Package",
        price: "$550",
        whoItsFor:
          "Creators, influencers, startups, and anyone building a brand worth protecting.",
        includes: [
          "Preliminary trademark search + analysis",
          "Brand protection strategy session",
          "Custom Cease & Desist template",
          "Social media + content ownership guidance",
          "Upgrade credit toward full trademark filing",
        ],
        whyItMatters:
          "A brand without legal protection is just a name—and names get stolen every day. Lock yours down before someone else does.",
        stripeLink: "https://buy.stripe.com/8x228rca6geJ7G105Y3oA06",
      },
    ],
  },
  {
    id: "realestate",
    icon: Home,
    label: "Real Estate Investors",
    packages: [
      {
        name: "Real Estate Investor Package",
        price: "$2,500",
        whoItsFor:
          "Landlords and rental property owners who want to hold real estate in an LLC for liability protection.",
        includes: [
          "Full LLC formation with real estate-specific Operating Agreement",
          "Federal EIN",
          "Deed preparation + title transfer to LLC",
          "County recording + compliance handling",
          "Mortgage due-on-sale clause review",
          "Tax ID and title verification",
          "Ownership compliance checklist",
          "30-minute consultation + email support",
        ],
        whyItMatters:
          "If a tenant sues you personally, they can come after your house, car, and savings. An LLC creates a legal shield between your rental property and your personal assets.",
        stripeLink: "https://buy.stripe.com/dRmaEXfmi9Ql9O9g4W3oA07",
      },
    ],
  },
  {
    id: "online",
    icon: Globe,
    label: "Online Business Compliance",
    packages: [
      {
        name: "Website Compliance Package",
        price: "$750",
        whoItsFor:
          "E-commerce stores, SaaS companies, online service providers, and anyone collecting user data.",
        includes: [
          "Custom Privacy Policy (GDPR + CCPA compliant)",
          "Terms & Conditions",
          "Cookie Policy + consent implementation guidance",
          "Accessibility compliance review (WCAG 2.1)",
          "COPPA compliance (if applicable)",
          "Industry-specific disclaimers",
          "E-commerce compliance review",
          "30-minute consultation + email support",
        ],
        whyItMatters:
          "GDPR fines can hit €20 million. ADA lawsuits are surging. One missing privacy policy can tank your business. Get compliant before you get caught.",
        stripeLink: "https://buy.stripe.com/4gM6oHca6d2x2lH6um3oA08",
      },
    ],
  },
];

/* -------------------------------------------------- */
/* Package Card Component                             */
/* -------------------------------------------------- */

const PackageCard: React.FC<{ pkg: ServicePackage }> = ({ pkg }) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden">
    {/* Header */}
    <div className="p-6 md:p-8 border-b border-slate-100">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
        {pkg.name}
      </h3>
      <p className="text-blue-600 font-bold text-3xl md:text-4xl mb-4">
        {pkg.price}
      </p>
      <p className="text-slate-500 text-sm leading-relaxed">{pkg.whoItsFor}</p>
    </div>

    {/* Body */}
    <div className="p-6 md:p-8 space-y-6">
      {/* What you get */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
          What you get
        </p>
        <ul className="space-y-2.5">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not included */}
      {pkg.notIncluded && pkg.notIncluded.length > 0 && (
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Not included
              </p>
              {pkg.notIncluded.map((item, i) => (
                <p key={i} className="text-slate-500 text-sm leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Common contracts */}
      {pkg.commonItems && pkg.commonItems.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
            Common contracts
          </p>
          <div className="flex flex-wrap gap-2">
            {pkg.commonItems.map((item, i) => (
              <span
                key={i}
                className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Why it matters */}
      {pkg.whyItMatters && (
        <div className="bg-slate-900 rounded-xl p-5 text-white">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
                Why it matters
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {pkg.whyItMatters}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <a
        href={pkg.stripeLink || "#consultation"}
        target={pkg.stripeLink ? "_blank" : undefined}
        rel={pkg.stripeLink ? "noopener noreferrer" : undefined}
        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-slate-900/20 transform active:scale-95 hover:-translate-y-0.5 transition-all duration-200 text-base"
      >
        Get Started — {pkg.price}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </div>
);

/* -------------------------------------------------- */
/* Page Component                                     */
/* -------------------------------------------------- */

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0].id);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* HERO                                          */}
      {/* ============================================= */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-slate-50 to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Scale className="w-4 h-4 text-blue-600" />
              Services & Pricing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight font-serif">
              Flat-Fee Legal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 underline decoration-blue-400/60 underline-offset-8 decoration-4">
                Packages
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Real legal work. Real attorney. Real prices—disclosed upfront.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* TAB NAVIGATION                                */}
      {/* ============================================= */}
      <section className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex gap-1 overflow-x-auto no-scrollbar py-3">
              {SERVICE_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.id === activeTab;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(cat.id);
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SERVICE PACKAGES                              */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/20">
                <activeCategory.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {activeCategory.label}
              </h2>
            </div>

            {/* Package cards */}
            <div
              className={`grid gap-8 ${
                activeCategory.packages.length === 1
                  ? "grid-cols-1 max-w-xl"
                  : "grid-cols-1 lg:grid-cols-2"
              }`}
            >
              {activeCategory.packages.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FINAL CTA                                     */}
      {/* ============================================= */}
      <section
        id="consultation"
        className="py-20 md:py-28 bg-white border-t border-slate-200"
      >
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
                Not Sure Which Package You Need?
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Book a free 15-minute call. I'll tell you exactly what you need,
                what it costs, and whether we're a good fit.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Schedule Your Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FOOTER                                        */}
      {/* ============================================= */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-6">
            <Scale className="w-8 h-8 text-slate-600 mb-2" />
            <span className="text-lg font-serif text-slate-300 tracking-widest uppercase">
              Legal Halp
            </span>
            <p className="text-sm text-slate-500 mt-1">
              by Joshua Halpern, Esq.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Email
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Phone
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
          </div>

          <p className="text-xs text-slate-600 mb-6">
            LLC Formation &bull; Estate Planning &bull; Contracts &bull; IP
            Protection &bull; Real Estate &bull; Business Law
          </p>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Disclaimer: The information provided on this website does not, and is
            not intended to, constitute legal advice; instead, all information,
            content, and materials available on this site are for general
            informational purposes only.
          </p>

          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Legal Halp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
