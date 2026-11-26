import SiteFooter from "@/components/SiteFooter";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DEALS_CATEGORY,
  GOVERNANCE_CATEGORY,
  COMMERCIAL_RE_CATEGORY,
  DISPUTES_CATEGORY,
  EXTRA_CONTRACT_PACKAGES,
  EXTRA_ESTATE_PACKAGES,
} from "./services/additional-categories";
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
  ChevronLeft,
  ChevronRight,
  ChevronDown,
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
  DEALS_CATEGORY,
  GOVERNANCE_CATEGORY,
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
      ...EXTRA_ESTATE_PACKAGES,
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
      ...EXTRA_CONTRACT_PACKAGES,
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
  COMMERCIAL_RE_CATEGORY,
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
          "A 1031 exchange can let you defer capital gains taxes. But strict IRS timelines (45 days to identify, 180 days to close) mean one mistake can blow the deal. Get the legal side structured right, and coordinate the tax side with your CPA and qualified intermediary.",
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
  DISPUTES_CATEGORY,
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

/* One-line, plain-English summary shown on each project card */
const SUMMARIES: Record<string, string> = {
  "Buying a Business": "LOI, purchase agreement, due diligence, and closing documents for your acquisition.",
  "Selling Your Business": "LOI, purchase agreement, and closing terms negotiated to protect your price and limit your risk.",
  "Partner Buyout or Member Exit": "Buyout agreement, payment terms, releases, and updated ownership records for a clean exit.",
  "Letter of Intent & Term Sheet": "Your letter of intent or term sheet drafted or reviewed before you commit to a deal.",
  "Seller Financing & Promissory Note Package": "Promissory note, security agreement, and guaranty so a financed deal gets paid back.",
  "Investor & Capital Raise Documents": "SAFE, convertible note, or equity documents for raising money from private investors.",
  "Operating Agreement Restatement": "An updated operating agreement that matches how your company actually runs today.",
  "Holding Company & Multi-Entity Structure": "A holding company structure that separates your businesses and assets into the right entities.",
  "Corporate Cleanup & Records": "Good standing, ownership records, and missing approvals fixed before a sale, loan, or audit.",
  "Buy-Sell & Succession Agreement": "What happens if an owner dies, becomes disabled, divorces, or walks away, decided in advance.",
  "Entity Conversion or Domestication": "Converting your entity type or moving your company to another state.",
  "Dissolution & Wind-Down": "Approvals, state filings, and creditor notices to close a business properly.",
  "Basic LLC Formation": "LLC filing, custom operating agreement, and EIN for a single-owner business.",
  "Advanced LLC Formation": "A multi-member LLC with an operating agreement covering splits, voting, and exits.",
  "S-Corp Election & Formation": "Entity formation and S-corp election, coordinated with your CPA.",
  "Non-Profit Formation (501c3)": "Nonprofit formation, bylaws, and the IRS 501(c)(3) application.",
  "Foreign LLC Registration": "Registering your existing company to do business in a new state.",
  "Estate Planning (Single)": "Revocable trust, will, power of attorney, and healthcare directive for one person.",
  "Estate Planning (Married)": "Joint trust, wills, powers of attorney, and healthcare directives for both spouses.",
  "Minor's Trust": "A trust that controls when and how your children receive money.",
  "Special Needs Trust": "A trust that provides for a loved one without putting government benefits at risk.",
  "Gun Trust / NFA Trust": "An NFA trust to hold regulated firearms and lawfully share possession.",
  "Trust Funding & Asset Transfers": "Moving your accounts and business interests into your trust so it actually works.",
  "Estate Plan Review & Update": "A review and update of your existing plan after family, life, or business changes.",
  "Business Owner Estate Plan": "A complete estate plan that also covers ownership and succession of your business.",
  "Basic Contract Drafting or Review": "One contract drafted or reviewed, with a plain-English summary of the key terms.",
  "Advanced Contract Package": "Deeper review, redlines, and negotiation strategy for high-value or complex contracts.",
  "SaaS Terms of Service Package": "Terms of service covering subscriptions, billing, liability, and acceptable use.",
  "Lease Agreement Drafting/Review": "A residential or commercial lease drafted or reviewed.",
  "Vendor/Supplier Agreement": "A vendor or supplier agreement covering pricing, quality, delivery, and remedies.",
  "Master Services Agreement (MSA)": "One master agreement plus a statement of work template for repeat client work.",
  "Contract Redline & Negotiation": "A redline of the other side's contract, negotiated on your behalf.",
  "Distribution, Reseller & Supply Agreements": "Distribution, reseller, or supply agreements covering territory, pricing, and liability.",
  "Hire an Employee Package": "Offer letter, employment terms, and confidentiality protections for a new hire.",
  "Engage an Independent Contractor": "A contractor agreement with IP ownership and proper worker classification.",
  "Employee Termination Package": "A severance agreement and release to part ways with an employee cleanly.",
  "Equity Compensation Package": "Stock option plan, grant agreements, and vesting schedules for your team.",
  "Employee Handbook Creation": "A custom employee handbook with state-specific policies.",
  "Brand + IP Protection Package": "A preliminary trademark search and a plan to protect your brand name.",
  "Full Trademark Filing (USPTO)": "Federal trademark search, application, and filing with the USPTO.",
  "Domain Name Dispute Resolution": "A UDRP complaint to recover a domain registered in bad faith.",
  "Commercial Purchase & Sale": "Purchase agreement, title and survey review, and closing for commercial property.",
  "Commercial Lease: Landlord or Tenant": "Lease review, redline, and negotiation for landlords or tenants.",
  "Title Transfer to an LLC or Trust": "Moving property into an LLC or trust, with the deed and recording handled through your title company.",
  "Loan & Financing Document Review": "Loan, guaranty, and security documents reviewed before you sign.",
  "Land & Development Acquisition": "Purchase or option agreement and diligence for land you plan to build on or hold.",
  "Real Estate Investor Package": "An LLC to hold your rental property, with the title transfer coordinated through your title company.",
  "1031 Exchange Documentation": "Legal review of your 1031 exchange, coordinated with your qualified intermediary and CPA.",
  "Rental Property Purchase Review": "Purchase agreement, title, and lease review before you buy a rental property.",
  "Lease Agreement Templates Package": "Reusable, state-specific lease templates and notices for your rentals.",
  "Attorney Demand Letter": "A demand letter on firm letterhead to resolve a dispute without going to court.",
  "Commercial Collections": "Demand and settlement documents to collect past-due invoices.",
  "Settlement & Release Agreement": "A settlement and release agreement that documents your resolution so it holds.",
  "Contract Dispute Strategy Review": "A clear read on your position and options early in a contract dispute.",
  "Litigation Referral & Oversight": "Referral to vetted litigation counsel, plus coordination of the business side. No court appearances.",
  "Website Compliance Package": "Privacy policy, terms, and a compliance review for your website or online store.",
  "DMCA Agent Registration": "DMCA agent registration and a takedown policy for your platform.",
  "Affiliate Program Legal Setup": "An affiliate agreement with commission terms and FTC disclosure rules.",
  "Copyright Registration": "Copyright registration for your original work with the U.S. Copyright Office.",
  "Influencer/Creator Legal Package": "A brand deal agreement covering content rights, payment, and FTC disclosures.",
};

const PackageCard: React.FC<{ pkg: ServicePackage }> = ({ pkg }) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden flex flex-col">
    <div className="p-5 md:p-7 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
          {pkg.name}
        </h3>
        <span className="flex-shrink-0 mt-0.5 text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">
          Fixed fee
        </span>
      </div>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5">{SUMMARIES[pkg.name] ?? pkg.whoItsFor}</p>
      <Link
        to="/contact"
        className="mt-auto flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm md:text-base active:scale-95"
      >
        Request a Quote
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

/* -------------------------------------------------- */
/* Track Tabs                                         */
/* -------------------------------------------------- */

const TrackTabs: React.FC<{
  categories: ServiceCategory[];
  activeTab: string;
  onSelect: (id: string) => void;
}> = ({ categories, activeTab, onSelect }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll, categories.length]);

  // Keep the selected pill visible when the tab changes from a link or hash
  useEffect(() => {
    const el = scrollRef.current;
    const active = el?.querySelector<HTMLElement>("[data-active='true']");
    active?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [activeTab]);

  const nudge = (direction: -1 | 1) => {
    scrollRef.current?.scrollBy({ left: direction * 220, behavior: "smooth" });
  };

  return (
    <div className="relative flex-1 min-w-0">
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-1 overflow-x-auto no-scrollbar lg:flex-wrap lg:overflow-visible"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = cat.id === activeTab;
          return (
            <button
              key={cat.id}
              type="button"
              data-active={isActive}
              onClick={() => onSelect(cat.id)}
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

      {canScrollLeft && (
        <>
          <div className="lg:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent" />
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll categories left"
            className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          </button>
        </>
      )}

      {canScrollRight && (
        <>
          <div className="lg:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent" />
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll categories right"
            className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4 text-slate-600" />
          </button>
        </>
      )}
    </div>
  );
};

/* -------------------------------------------------- */
/* Page Component                                     */
/* -------------------------------------------------- */

const Services: React.FC = () => {
  const location = useLocation();
  const hashId = location.hash.replace("#", "");
  const [activeTab, setActiveTab] = useState(
    SERVICE_CATEGORIES.some((c) => c.id === hashId) ? hashId : SERVICE_CATEGORIES[0].id
  );
  useEffect(() => {
    if (SERVICE_CATEGORIES.some((c) => c.id === hashId)) {
      setActiveTab(hashId);
      // Wait until after the global scroll-to-top on route change, then jump to the menu
      const t = setTimeout(() => {
        document
          .getElementById("packages")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => clearTimeout(t);
    }
  }, [hashId]);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* HERO                                          */}
      {/* ============================================= */}
      <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100/50 via-slate-50 to-white z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Scale className="w-4 h-4 text-blue-600" />
              One-Time Projects
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight font-serif">
              Fixed-Fee{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 underline decoration-blue-400/60 underline-offset-8 decoration-4">
                Projects
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
              A defined project on a fixed fee, quoted before work begins. Need ongoing
              monthly counsel for your business? See{" "}
              <Link to="/outside-general-counsel" className="text-blue-600 font-semibold hover:underline">
                Outside General Counsel
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* TAB NAVIGATION                                */}
      {/* ============================================= */}
      <section
        className="lg:hidden sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto py-3">
            {/* Mobile: one clean dropdown for all practice areas */}
            <div className="lg:hidden">
              <label htmlFor="practice-area" className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                Practice Area
              </label>
              <div className="relative">
                <select
                  id="practice-area"
                  value={activeTab}
                  onChange={(e) => {
                    setActiveTab(e.target.value);
                    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="w-full appearance-none bg-slate-900 text-white font-semibold text-base rounded-xl pl-4 pr-11 py-3 shadow-lg shadow-slate-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {TRACKS.flatMap((track) =>
                    SERVICE_CATEGORIES.filter((c) => c.track === track.id).map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))
                  )}
                </select>
                <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SERVICE PACKAGES                              */}
      {/* ============================================= */}
      <section id="packages" className="py-16 md:py-24 bg-slate-50 scroll-mt-40 lg:scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
            {/* Desktop: clean practice area list */}
            <aside className="hidden lg:block">
              <nav aria-label="Practice areas" className="sticky top-24">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3 px-3">
                  Practice Areas
                </p>
                <ul className="space-y-0.5">
                  {TRACKS.flatMap((track) => SERVICE_CATEGORIES.filter((c) => c.track === track.id)).map((cat) => {
                    const Icon = cat.icon;
                    const isActive = cat.id === activeTab;
                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          aria-current={isActive ? "true" : undefined}
                          onClick={() => {
                            setActiveTab(cat.id);
                            const el = document.getElementById("packages");
                            if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                            isActive ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-slate-900"
                          }`}
                        >
                          <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-blue-300" : "text-slate-400"}`} />
                          {cat.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            <div className="min-w-0">
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
                className={`grid gap-6 ${
                  activeCategory.packages.length === 1
                    ? "grid-cols-1 max-w-xl"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {activeCategory.packages.map((pkg, index) => (
                  <PackageCard key={index} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* OUTSIDE GC CALLOUT                            */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  Need ongoing counsel rather than a single project?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Deals, governance, and day-to-day legal support run through
                  an Outside General Counsel monthly plan, one fixed fee rather
                  than a bill per matter.
                </p>
              </div>
              <Link
                to="/outside-general-counsel"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all hover:-translate-y-0.5 flex-shrink-0 whitespace-nowrap"
              >
                See Monthly Plans
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
        className="py-20 md:py-28 bg-slate-50"
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
                Not Sure What You Need?
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
      <SiteFooter tagline={<>Outside General Counsel &bull; Deals &amp; Transactions &bull; Governance &bull; Contracts &bull; Real Estate &bull; Estate Planning</>} />
    </div>
  );
};

export default Services;
