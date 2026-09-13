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
  PhoneCall,
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

type ServiceTrack = "business" | "personal";

interface ServiceCategory {
  id: string;
  icon: React.FC<{ className?: string }>;
  label: string;
  track: ServiceTrack;
  packages: ServicePackage[];
}

/* -------------------------------------------------- */
/* Data                                               */
/* -------------------------------------------------- */

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "business",
    icon: Building2,
    label: "Business Formation & Structure",
    track: "business",
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
          "State filing fees ($50 to $300 depending on state), disclosed before we start.",
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
      {
        name: "S-Corp Election & Formation",
        price: "$1,800",
        whoItsFor:
          "Business owners making $60k+ profit who want to save on self-employment taxes.",
        includes: [
          "S-Corp election (Form 2553) filing with IRS",
          "Complete LLC or Corporation formation",
          "Operating Agreement or Corporate Bylaws",
          "Federal EIN",
          "Registered agent service enrollment",
          "Payroll setup guidance (reasonable salary requirements)",
          "Tax savings analysis and compliance checklist",
          "60-minute consultation on S-Corp strategy",
        ],
        whyItMatters:
          "S-Corps can save $10k-$30k annually in self-employment taxes for profitable businesses. But you need proper setup and payroll compliance to avoid IRS issues.",
        stripeLink: "https://buy.stripe.com/cNi9ATgqm8Mh7G19Gy3oA03",
      },
      {
        name: "Non-Profit Formation (501c3)",
        price: "$2,500",
        whoItsFor:
          "Mission-driven founders who want to launch a tax-exempt charitable organization.",
        includes: [
          "Complete Articles of Incorporation (state filing)",
          "IRS Form 1023 (501c3 tax-exempt application)",
          "Corporate Bylaws for non-profit governance",
          "Conflict of Interest Policy",
          "Dissolution clause (required by IRS)",
          "Federal EIN",
          "Board structure and compliance guidance",
          "State charitable registration (if applicable)",
          "90-minute strategy session + ongoing email support",
        ],
        whyItMatters:
          "501c3 status unlocks tax-deductible donations, grants, and credibility. But the IRS rejects 40% of applications for compliance issues. Get it right the first time.",
        stripeLink: "https://buy.stripe.com/cNi9ATgqm8Mh7G19Gy3oA03",
      },
      {
        name: "Foreign LLC Registration",
        price: "$850",
        whoItsFor:
          "Business owners expanding operations to a new state.",
        includes: [
          "Foreign qualification filing in target state",
          "Certificate of Good Standing from home state",
          "Registered agent enrollment in new state",
          "State compliance review",
          "Filing fee payment coordination",
          "30-minute consultation on multi-state operations",
        ],
        whyItMatters:
          "Operating in a state without proper registration can result in fines, inability to sue, and back taxes. Stay compliant before you scale.",
        stripeLink: "https://buy.stripe.com/cNi9ATgqm8Mh7G19Gy3oA03",
      },
    ],
  },
  {
    id: "family",
    icon: Heart,
    label: "Estate Planning",
    track: "personal",
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
          "Wills go through probate, a public, expensive, months-long court process. A trust bypasses all of that. Your family gets assets faster, privately, and without lawyers eating into your estate.",
        stripeLink: "https://buy.stripe.com/bJefZh3DA2nTbWhf0S3oA04",
      },
      {
        name: "Minor's Trust",
        price: "$1,500",
        whoItsFor:
          "Parents who want to set aside money for their children with control over when and how funds are distributed.",
        includes: [
          "Irrevocable or Revocable Minor's Trust",
          "Trustee appointment and successor provisions",
          "Distribution schedule (age-based or milestone-based)",
          "Asset protection provisions",
          "Tax guidance (kiddie tax considerations)",
          "Transfer instructions for funding the trust",
          "1-hour consultation",
        ],
        whyItMatters:
          "Without a trust, minors inherit at 18 with no restrictions. A Minor's Trust lets you control distribution (college, 25, 30, etc.) and protect assets from creditors and bad decisions.",
        stripeLink: "https://buy.stripe.com/bJefZh3DA2nTbWhf0S3oA04",
      },
      {
        name: "Special Needs Trust",
        price: "$2,200",
        whoItsFor:
          "Families with disabled loved ones who want to provide for them without jeopardizing government benefits.",
        includes: [
          "Special Needs Trust (SNT) drafting",
          "Trustee appointment and management guidelines",
          "SSI/Medicaid preservation provisions",
          "Distribution guidelines for supplemental care",
          "Coordination with existing estate plans",
          "Beneficiary designation updates",
          "1-hour consultation + benefits compliance review",
        ],
        whyItMatters:
          "Direct inheritance can disqualify a disabled person from SSI, Medicaid, and other benefits. A Special Needs Trust protects their eligibility while improving their quality of life.",
        stripeLink: "https://buy.stripe.com/bJefZh3DA2nTbWhf0S3oA04",
      },
      {
        name: "Gun Trust / NFA Trust",
        price: "$750",
        whoItsFor:
          "Firearms enthusiasts who own or plan to purchase NFA-regulated items (suppressors, SBRs, machine guns).",
        includes: [
          "NFA Gun Trust drafting",
          "Trustee and successor trustee designations",
          "ATF Form 1 and Form 4 preparation guidance",
          "Legal possession sharing among trustees",
          "Compliance with state and federal firearms laws",
          "Trust funding instructions",
          "30-minute consultation + email support",
        ],
        whyItMatters:
          "NFA items require ATF approval. A Gun Trust simplifies the process, allows multiple people to legally possess your firearms, and avoids probate headaches when you pass away.",
        stripeLink: "https://buy.stripe.com/bJefZh3DA2nTbWhf0S3oA04",
      },
    ],
  },
  {
    id: "contracts",
    icon: PenTool,
    label: "Contracts & Agreements",
    track: "business",
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
      {
        name: "SaaS Terms of Service Package",
        price: "$1,200",
        whoItsFor:
          "Software companies, app developers, and subscription-based businesses.",
        includes: [
          "Custom Terms of Service for your platform",
          "Subscription and billing terms",
          "Usage restrictions and acceptable use policy",
          "Limitation of liability and warranty disclaimers",
          "Termination and refund provisions",
          "DMCA safe harbor compliance (if applicable)",
          "Privacy Policy integration guidance",
          "2 rounds of revisions + 30-minute consultation",
        ],
        whyItMatters:
          "Generic ToS templates leave you exposed. Custom terms protect you from liability, chargebacks, and user abuse while staying compliant with platform requirements (Apple, Google, Stripe).",
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
      {
        name: "Lease Agreement Drafting/Review",
        price: "$650",
        whoItsFor:
          "Landlords, property managers, and commercial tenants.",
        includes: [
          "Residential or commercial lease drafting OR review",
          "Security deposit and rent escalation clauses",
          "Maintenance and repair responsibilities",
          "Termination and default provisions",
          "State-specific compliance review",
          "Pet policies, subletting, and other addendums",
          "Attorney consultation + 2 rounds of revisions",
        ],
        commonItems: [
          "Residential leases",
          "Commercial leases",
          "Office space agreements",
          "Equipment leases",
          "Ground leases",
        ],
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
      {
        name: "Vendor/Supplier Agreement",
        price: "$750",
        whoItsFor:
          "Business owners who need to formalize relationships with vendors, suppliers, or manufacturers.",
        includes: [
          "Custom vendor or supplier agreement",
          "Pricing, payment terms, and delivery schedules",
          "Quality standards and inspection rights",
          "Warranties and defect remedies",
          "Termination and dispute resolution clauses",
          "Confidentiality and IP ownership provisions",
          "2 rounds of revisions + attorney consultation",
        ],
        whyItMatters:
          "Handshake deals with suppliers fall apart when quality drops or deliveries are late. A solid agreement protects your supply chain and gives you recourse when things go wrong.",
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
    ],
  },
  {
    id: "employment",
    icon: Users,
    label: "Hiring & Employment",
    track: "business",
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
      {
        name: "Employee Termination Package",
        price: "$950",
        whoItsFor:
          "Business owners who need to let someone go (voluntary or involuntary) without getting sued.",
        includes: [
          "Severance Agreement with release of claims",
          "Non-disparagement and confidentiality clauses",
          "Final paycheck compliance review",
          "Unemployment insurance guidance",
          "Return of company property documentation",
          "Reference and communication protocols",
          "Attorney consultation on termination strategy",
        ],
        whyItMatters:
          "Wrongful termination lawsuits are expensive. A proper severance agreement with a release protects you from future claims while maintaining goodwill.",
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
      {
        name: "Equity Compensation Package",
        price: "$1,500",
        whoItsFor:
          "Startups and growing companies offering stock options, RSUs, or equity grants to employees.",
        includes: [
          "Stock Option Plan (ISO or NSO)",
          "Option Grant Agreements",
          "Vesting schedule documentation (4-year with 1-year cliff, custom)",
          "83(b) election guidance",
          "Board resolution templates",
          "Exercise and repurchase provisions",
          "Tax implications overview",
          "1-hour consultation on equity strategy",
        ],
        whyItMatters:
          "Equity compensation is a powerful retention tool, but improper setup can trigger tax nightmares and disputes. Get the structure right from day one.",
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
      {
        name: "Employee Handbook Creation",
        price: "$1,200",
        whoItsFor:
          "Growing businesses (10+ employees) who need formal policies to stay compliant and avoid HR disasters.",
        includes: [
          "Custom Employee Handbook (30-50 pages)",
          "At-will employment statement",
          "Anti-discrimination and harassment policies",
          "PTO, sick leave, and benefits policies",
          "Code of conduct and social media guidelines",
          "Disciplinary procedures and termination process",
          "State-specific compliance (meal breaks, overtime, etc.)",
          "Employee acknowledgment form",
          "1-hour consultation + 2 rounds of revisions",
        ],
        whyItMatters:
          "Without a handbook, you're exposed to HR lawsuits, inconsistent treatment claims, and compliance violations. A handbook protects you and sets clear expectations.",
        stripeLink: "https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05",
      },
    ],
  },
  {
    id: "brand",
    icon: Shield,
    label: "Brand & Trademarks",
    track: "business",
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
          "A brand without legal protection is just a name, and names get stolen every day. Lock yours down before someone else does.",
        stripeLink: "https://buy.stripe.com/8x228rca6geJ7G105Y3oA06",
      },
      {
        name: "Full Trademark Filing (USPTO)",
        price: "$1,500",
        whoItsFor:
          "Business owners ready to file a federal trademark application and protect their brand nationwide.",
        includes: [
          "Comprehensive trademark search (USPTO + common law)",
          "Trademark application preparation (TEAS Plus or Standard)",
          "Class selection and goods/services description",
          "Filing with USPTO",
          "Office Action response (1 included)",
          "Monitoring for first 6 months post-filing",
          "Attorney representation throughout process",
        ],
        notIncluded: [
          "USPTO filing fees ($250-$350 per class, paid separately to USPTO).",
        ],
        whyItMatters:
          "Federal trademark registration gives you nationwide protection, the right to sue infringers, and the ® symbol. DIY filings get rejected 50% of the time.",
        stripeLink: "https://buy.stripe.com/8x228rca6geJ7G105Y3oA06",
      },
      {
        name: "Domain Name Dispute Resolution",
        price: "$2,000",
        whoItsFor:
          "Brand owners whose domain name was taken by a cybersquatter or competitor.",
        includes: [
          "UDRP (Uniform Domain-Name Dispute-Resolution Policy) complaint drafting",
          "Evidence gathering and bad faith analysis",
          "Filing with ICANN arbitration provider (WIPO, NAF)",
          "Full representation through arbitration process",
          "Domain transfer coordination upon win",
          "Strategic consultation on likelihood of success",
        ],
        notIncluded: [
          "UDRP filing fee (~$1,500, paid separately to arbitration provider).",
        ],
        whyItMatters:
          "Cybersquatters buy domains similar to your brand and hold them hostage for $10k-$100k. UDRP is faster and cheaper than a lawsuit, and you can win back your domain in 60 days.",
        stripeLink: "https://buy.stripe.com/8x228rca6geJ7G105Y3oA06",
      },
    ],
  },
  {
    id: "realestate",
    icon: Home,
    label: "Real Estate Investors",
    track: "business",
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
      {
        name: "1031 Exchange Documentation",
        price: "$1,500",
        whoItsFor:
          "Real estate investors selling a property and want to defer capital gains taxes by reinvesting in another property.",
        includes: [
          "1031 Exchange legal structure review",
          "Qualified Intermediary (QI) coordination",
          "Identification and closing timeline compliance",
          "Exchange agreement review",
          "Deed and title documentation review",
          "IRS compliance checklist",
          "Attorney consultation throughout process",
        ],
        whyItMatters:
          "A 1031 exchange lets you defer capital gains taxes indefinitely. But strict IRS timelines (45 days to identify, 180 days to close) mean one mistake can blow the deal. Get expert guidance.",
        stripeLink: "https://buy.stripe.com/dRmaEXfmi9Ql9O9g4W3oA07",
      },
      {
        name: "Rental Property Purchase Review",
        price: "$850",
        whoItsFor:
          "Real estate investors buying rental properties who need contract review and due diligence support.",
        includes: [
          "Purchase agreement review and redlining",
          "Title and survey review",
          "Inspection contingency strategy",
          "Lease assignment review (if tenants in place)",
          "Financing and closing coordination",
          "Risk analysis and negotiation strategy",
          "Attorney consultation + closing support",
        ],
        whyItMatters:
          "Buying rental property without legal review is like buying a car without an inspection. Hidden title issues, bad leases, and unclear terms can cost you tens of thousands.",
        stripeLink: "https://buy.stripe.com/dRmaEXfmi9Ql9O9g4W3oA07",
      },
      {
        name: "Lease Agreement Templates Package",
        price: "$950",
        whoItsFor:
          "Landlords with multiple properties who need state-compliant lease templates they can reuse.",
        includes: [
          "Residential lease template (state-specific)",
          "Month-to-month rental agreement",
          "Pet addendum and security deposit riders",
          "Lease renewal and termination notices",
          "Tenant screening and application forms",
          "Late fee and eviction provisions",
          "Landlord-tenant law compliance overview",
          "30-minute consultation + unlimited template use",
        ],
        whyItMatters:
          "Using generic leases from the internet leaves you exposed to state law violations. Custom templates protect you and ensure compliance across all your properties.",
        stripeLink: "https://buy.stripe.com/dRmaEXfmi9Ql9O9g4W3oA07",
      },
    ],
  },
  {
    id: "online",
    icon: Globe,
    label: "Online & E-Commerce",
    track: "business",
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
      {
        name: "DMCA Agent Registration",
        price: "$350",
        whoItsFor:
          "Online platforms, marketplaces, and content hosts who want safe harbor protection from copyright infringement claims.",
        includes: [
          "DMCA agent registration with U.S. Copyright Office",
          "Designated agent contact information setup",
          "DMCA takedown policy drafting",
          "Implementation guidance for your platform",
          "Copyright Office filing",
        ],
        notIncluded: [
          "U.S. Copyright Office filing fee ($6, paid separately).",
        ],
        whyItMatters:
          "Without DMCA safe harbor, you're liable for every piece of infringing content users post. Registration protects you from lawsuits as long as you follow takedown procedures.",
        stripeLink: "https://buy.stripe.com/4gM6oHca6d2x2lH6um3oA08",
      },
      {
        name: "Affiliate Program Legal Setup",
        price: "$1,200",
        whoItsFor:
          "E-commerce brands and SaaS companies launching affiliate or referral programs.",
        includes: [
          "Affiliate Agreement (terms for partners)",
          "Commission structure and payment terms",
          "FTC disclosure compliance (affiliate link disclosures)",
          "Trademark and brand usage guidelines",
          "Termination and fraud prevention provisions",
          "Cookie tracking and attribution policies",
          "30-minute consultation + 2 rounds of revisions",
        ],
        whyItMatters:
          "Affiliates can damage your brand if they spam, mislead, or violate FTC rules. A solid agreement protects you and sets clear boundaries for partners.",
        stripeLink: "https://buy.stripe.com/4gM6oHca6d2x2lH6um3oA08",
      },
    ],
  },
  {
    id: "creators",
    icon: Sparkles,
    label: "Creators & Individuals",
    track: "personal",
    packages: [
      {
        name: "Copyright Registration",
        price: "$450",
        whoItsFor:
          "Authors, artists, photographers, software developers, and content creators who need to protect their original works.",
        includes: [
          "Copyright application preparation and filing",
          "Work categorization and registration strategy",
          "Filing with U.S. Copyright Office",
          "Certificate of Registration (when issued)",
          "Legal ownership documentation",
          "30-minute consultation on copyright strategy",
        ],
        notIncluded: [
          "U.S. Copyright Office filing fee ($65 per work, paid separately).",
        ],
        whyItMatters:
          "You own copyright automatically, but registration is required to sue infringers and recover statutory damages ($150k per work). Protect your work before someone steals it.",
        stripeLink: "https://buy.stripe.com/8x228rca6geJ7G105Y3oA06",
      },
      {
        name: "Influencer/Creator Legal Package",
        price: "$950",
        whoItsFor:
          "Influencers, YouTubers, and content creators who need legal protection for brand deals and content monetization.",
        includes: [
          "Influencer-Brand Deal Agreement template",
          "FTC disclosure compliance guidance",
          "Content ownership and licensing terms",
          "Sponsorship deliverables and approval process",
          "Payment terms and termination clauses",
          "Platform-specific compliance (Instagram, YouTube, TikTok)",
          "30-minute consultation + unlimited template use",
        ],
        whyItMatters:
          "Brands will try to own your content, limit your other deals, and delay payment. A solid agreement protects your rights and ensures you get paid on time.",
        stripeLink: "https://buy.stripe.com/4gM6oHca6d2x2lH6um3oA08",
      },
    ],
  },
];

const TRACKS: { id: ServiceTrack; label: string }[] = [
  { id: "business", label: "For your business" },
  { id: "personal", label: "Personal" },
];

/* -------------------------------------------------- */
/* Package Card Component                             */
/* -------------------------------------------------- */

const CHECKOUT_CEILING = 1500;

const isSelfServe = (pkg: ServicePackage) => {
  if (!pkg.stripeLink) return false;
  if (pkg.price.includes("/mo")) return false;
  const amount = Number(pkg.price.replace(/[^0-9]/g, ""));
  return Number.isFinite(amount) && amount > 0 && amount < CHECKOUT_CEILING;
};

const PackageCard: React.FC<{ pkg: ServicePackage }> = ({ pkg }) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden">
    {/* Header */}
    <div className="p-6 md:p-8 border-b border-slate-100">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
        {pkg.name}
      </h3>
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1.5">
          Starts at
        </p>
        <p className="text-slate-900 font-bold text-2xl md:text-3xl leading-none">
          {pkg.price}
        </p>
      </div>
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
      {isSelfServe(pkg) ? (
        <a
          href={pkg.stripeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-slate-900/20 transform active:scale-95 hover:-translate-y-0.5 transition-all duration-200 text-base"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-slate-900/20 transform active:scale-95 hover:-translate-y-0.5 transition-all duration-200 text-base"
        >
          Start With a Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
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
              How the Work Gets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 underline decoration-blue-400/60 underline-offset-8 decoration-4">
                Priced
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Transactions and ongoing counsel are scoped to the matter and
              quoted before work begins. Defined, repeatable work is flat-fee
              and listed below.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* CORPORATE & TRANSACTIONAL                     */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                Scoped, Not Packaged
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Corporate &amp; Transactional
              </h2>
              <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
                This work does not fit a checkout button. Every engagement is
                scoped on a call and quoted in writing before it starts, as a
                flat fee for the matter or as part of a monthly counsel
                relationship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {[
                {
                  icon: Building2,
                  title: "Mergers, Acquisitions & Exits",
                  items: [
                    "Buy-side and sell-side representation",
                    "Asset and membership interest purchases",
                    "Letters of intent, diligence, and closing",
                    "Partner buyouts, redemptions, and exits",
                  ],
                },
                {
                  icon: Scale,
                  title: "Entity & Holding Structure",
                  items: [
                    "Holding company and multi-tier design",
                    "Multi-state entity and titling cleanup",
                    "Intercompany and management agreements",
                    "Restructuring alongside your tax advisors",
                  ],
                },
                {
                  icon: Users,
                  title: "Governance, Equity & Investors",
                  items: [
                    "Operating agreement restatements",
                    "Buy-sell and transfer restrictions",
                    "Member admissions, exits, and unit purchases",
                    "Equity compensation and investor documentation",
                  ],
                },
                {
                  icon: Home,
                  title: "Commercial Real Estate",
                  items: [
                    "Acquisitions and dispositions",
                    "Commercial leasing, landlord and tenant side",
                    "Title, escrow, and closing issues",
                    "Portfolio entity and financing structure",
                  ],
                },
                {
                  icon: PenTool,
                  title: "Complex Commercial Contracting",
                  items: [
                    "Master services and enterprise agreements",
                    "Joint ventures and strategic partnerships",
                    "Licensing, distribution, and royalties",
                    "Negotiation and redline management",
                  ],
                },
                {
                  icon: Shield,
                  title: "Outside General Counsel",
                  items: [
                    "The full legal function on a monthly fee",
                    "Standing counsel across an entity portfolio",
                    "Board and management support",
                    "Referral counsel management",
                  ],
                },
              ].map((group, i) => {
                const Icon = group.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/15 text-blue-300 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-white text-lg leading-snug">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                          <span className="text-slate-300 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
              >
                <PhoneCall className="w-5 h-5" />
                Scope a Matter
              </Link>
              <Link
                to="/representative-matters"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/30 transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
              >
                See Representative Matters
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FLAT-FEE INTRO                                */}
      {/* ============================================= */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
              Fixed Price
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Flat-Fee Packages
            </h2>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed">
              Defined, repeatable work with a known scope. Formation, estate
              planning, single contracts, and compliance, priced upfront so
              there is nothing to negotiate.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* TAB NAVIGATION                                */}
      {/* ============================================= */}
      <section className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto py-3 space-y-2">
            {TRACKS.map((track) => (
              <div key={track.id} className="flex items-center gap-3">
                <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-slate-400 w-28 flex-shrink-0">
                  {track.label}
                </span>
                <div className="flex gap-1 overflow-x-auto no-scrollbar">
                  {SERVICE_CATEGORIES.filter((c) => c.track === track.id).map(
                    (cat) => {
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
                    }
                  )}
                </div>
              </div>
            ))}
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
      {/* OUTSIDE GC CALLOUT                            */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  Need counsel on retainer rather than a package?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Ongoing legal support, deal execution, and portfolio
                  governance run through the Outside General Counsel
                  engagement, priced monthly rather than per matter.
                </p>
              </div>
              <Link
                to="/lawyer-on-call"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all hover:-translate-y-0.5 flex-shrink-0 whitespace-nowrap"
              >
                See Retainer Tiers
                <ArrowRight className="w-4 h-4" />
              </Link>
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
            <img src="/logo.png" alt="Legal Halp" className="h-10 brightness-0 invert opacity-80 mb-1" />
            <p className="text-sm text-slate-500 mt-1">
              by Joshua Halpern, Esq.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/payment-policy" className="hover:text-blue-400 transition-colors">Payment &amp; Refund Policy</Link>
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
