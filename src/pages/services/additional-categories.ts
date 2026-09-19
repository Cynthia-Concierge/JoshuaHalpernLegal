import React from "react";
import { Handshake, Layers, Warehouse, Gavel } from "lucide-react";

/* Shape mirrors the types in Services.tsx */
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
  track: "business" | "personal";
  packages: ServicePackage[];
}

const QUOTED = "Quoted after consult";

/* -------------------------------------------------- */
/* Deals & Transactions                               */
/* -------------------------------------------------- */

export const DEALS_CATEGORY: ServiceCategory = {
  id: "deals",
  icon: Handshake,
  label: "Deals & Transactions",
  track: "business",
  packages: [
    {
      name: "Buying a Business",
      price: QUOTED,
      whoItsFor:
        "Owners and investors acquiring a company, a competitor, or a book of business.",
      includes: [
        "Letter of intent or term sheet drafted and negotiated",
        "Deal structure counsel: asset purchase vs. equity purchase and the tax consequences of each",
        "Purchase agreement drafting and negotiation",
        "Due diligence request list, plus review of contracts, leases, liens, and liabilities",
        "Closing documents: bill of sale, assignments, consents, escrow instructions, non-compete",
        "Closing checklist, signature management, and a closing binder",
        "Coordination with your lender, CPA, and title or escrow agent",
      ],
      whyItMatters:
        "What you buy, and what liabilities come with it, is decided in the purchase agreement. An asset deal and an equity deal can carry the same price and completely different risk.",
    },
    {
      name: "Selling Your Business",
      price: QUOTED,
      whoItsFor:
        "Owners approached by a buyer or strategic acquirer, or running a sale process.",
      includes: [
        "Pre-sale readiness review: ownership records, consents, contract assignability, clean-up items",
        "LOI review and negotiation before you sign anything exclusive",
        "Purchase agreement, disclosure schedules, and ancillary documents",
        "Negotiation of representations, warranties, indemnity caps, and escrow holdbacks",
        "Earnout, seller note, and post-closing employment or consulting terms",
        "Closing and post-closing obligations, including transition items",
      ],
      whyItMatters:
        "Most sellers give away their leverage in the letter of intent, before a lawyer is ever involved. The LOI sets price, exclusivity, and the shape of the deal.",
    },
    {
      name: "Partner Buyout or Member Exit",
      price: QUOTED,
      whoItsFor:
        "Co-owners separating, whether the exit is friendly, overdue, or contested.",
      includes: [
        "Review of your operating agreement, buy-sell terms, and any existing valuation method",
        "Redemption or membership interest purchase agreement",
        "Payment terms, promissory note, and security for the departing owner",
        "Mutual release, confidentiality, and non-compete or non-solicit terms",
        "Operating agreement amendment, updated ownership ledger, and officer or manager changes",
        "State filings and notices to banks, landlords, and key vendors",
      ],
    },
    {
      name: "Letter of Intent & Term Sheet",
      price: QUOTED,
      whoItsFor:
        "Anyone about to sign an LOI, term sheet, or MOU on a deal, lease, or joint venture.",
      includes: [
        "Drafting or review of the LOI or term sheet",
        "Plain-English explanation of which terms are binding and which are not",
        "Exclusivity, confidentiality, and break-up provisions",
        "Structure and price mechanics, including earnouts and holdbacks",
        "Negotiation support with the other side or their counsel",
      ],
    },
    {
      name: "Seller Financing & Promissory Note Package",
      price: QUOTED,
      whoItsFor:
        "Sellers carrying paper, buyers financing a purchase, and owners lending to their own entities.",
      includes: [
        "Promissory note with interest, payment schedule, and default terms",
        "Security agreement and UCC-1 financing statement",
        "Personal guaranty where appropriate",
        "Subordination or intercreditor terms when a bank is involved",
        "Default and remedy provisions that are actually enforceable",
      ],
    },
    {
      name: "Investor & Capital Raise Documents",
      price: QUOTED,
      whoItsFor:
        "Companies taking on outside money from friends, family, or private investors.",
      includes: [
        "Choice of instrument: convertible note, SAFE, revenue share, or equity",
        "Investor documents, including subscription materials and investor questionnaire",
        "Cap table and dilution review before you sign",
        "Investor rights, information rights, and transfer restrictions",
        "Single-purpose entity or holding structure where investors come in at one level",
        "Coordination on required private placement notice filings",
      ],
      notIncluded: [
        "Public offerings and SEC registration work, which we do not handle.",
      ],
    },
  ],
};

/* -------------------------------------------------- */
/* Governance & Entity Cleanup                        */
/* -------------------------------------------------- */

export const GOVERNANCE_CATEGORY: ServiceCategory = {
  id: "governance",
  icon: Layers,
  label: "Governance & Entity Cleanup",
  track: "business",
  packages: [
    {
      name: "Operating Agreement Restatement",
      price: QUOTED,
      whoItsFor:
        "Companies whose operating agreement no longer matches how the business actually runs.",
      includes: [
        "Review of the current agreement, ownership records, and any side deals",
        "Amended and restated operating agreement",
        "Ownership percentages, capital accounts, and distribution terms",
        "Management, voting thresholds, and decision rights",
        "Transfer restrictions, buy-sell triggers, and deadlock provisions",
        "Member consents and an updated ownership ledger",
      ],
      whyItMatters:
        "Most disputes between owners are decided by a document signed years earlier and never updated. Banks, buyers, and lenders read it before they fund anything.",
    },
    {
      name: "Holding Company & Multi-Entity Structure",
      price: QUOTED,
      whoItsFor:
        "Owners running several businesses, properties, or lines of revenue under separate entities.",
      includes: [
        "Structure design: holding company, operating subsidiaries, and asset-holding entities",
        "Formation of the entities the structure requires",
        "Operating agreements for each entity in the structure",
        "Intercompany agreements, including management, lease, and licensing arrangements",
        "Ownership transfers and assignments to put the structure in place",
        "Coordination with your CPA and insurance broker",
      ],
    },
    {
      name: "Corporate Cleanup & Records",
      price: QUOTED,
      whoItsFor:
        "Companies heading into a sale, a loan, or an audit with incomplete records.",
      includes: [
        "Entity audit across every state where you operate",
        "Reinstatement and good standing filings",
        "Reconstructed ownership ledger and cap table",
        "Missing consents, resolutions, and ratifications",
        "Minute book and corporate records assembled in one place",
        "Registered agent and annual report calendar",
      ],
      whyItMatters:
        "Diligence is where sloppy records cost real money. Buyers and lenders discount the price or delay closing when ownership and authority cannot be proven.",
    },
    {
      name: "Buy-Sell & Succession Agreement",
      price: QUOTED,
      whoItsFor:
        "Co-owned businesses that need a plan for death, disability, divorce, or a partner walking away.",
      includes: [
        "Buy-sell agreement with clearly defined triggering events",
        "Valuation method and payment terms agreed in advance",
        "Funding mechanics, including life and disability insurance coordination",
        "Transfer restrictions and rights of first refusal",
        "Coordination with each owner's estate plan",
        "Successor management and control provisions",
      ],
    },
    {
      name: "Entity Conversion or Domestication",
      price: QUOTED,
      whoItsFor:
        "Businesses changing entity type or moving their legal home to another state.",
      includes: [
        "Conversion, domestication, or merger plan and filings",
        "New or restated governing documents",
        "Tax election coordination with your CPA, including S-corp elections and revocations",
        "Updated EIN, banking, licensing, and contract assignments",
        "Notice to lenders, landlords, and counterparties",
      ],
    },
    {
      name: "Dissolution & Wind-Down",
      price: QUOTED,
      whoItsFor:
        "Owners closing a business, or cleaning up dormant entities that still carry filing obligations.",
      includes: [
        "Member or shareholder approvals and written consents",
        "Plan of dissolution and final state filings",
        "Creditor notice and claim handling",
        "Contract, lease, and license terminations",
        "Final distributions and asset transfers to owners",
        "Coordination with your CPA on final returns",
      ],
    },
  ],
};

/* -------------------------------------------------- */
/* Commercial Real Estate                             */
/* -------------------------------------------------- */

export const COMMERCIAL_RE_CATEGORY: ServiceCategory = {
  id: "commercialre",
  icon: Warehouse,
  label: "Commercial Real Estate",
  track: "business",
  packages: [
    {
      name: "Commercial Purchase & Sale",
      price: QUOTED,
      whoItsFor:
        "Buyers and sellers of commercial, industrial, mixed-use, or multi-family property.",
      includes: [
        "Purchase agreement drafting or review, including contingencies and deadlines",
        "Title commitment and survey review, plus objection letters",
        "Diligence coordination: leases, estoppels, service contracts, zoning, environmental reports",
        "Entity and deed structure for how title will be held",
        "Closing documents and settlement statement review",
        "Coordination with your lender, title company, and broker",
      ],
    },
    {
      name: "Commercial Lease: Landlord or Tenant",
      price: QUOTED,
      whoItsFor:
        "Business owners signing space, and landlords leasing it out.",
      includes: [
        "Lease drafting or full review with a redline",
        "Economics reviewed in plain English: base rent, escalations, CAM, and pass-throughs",
        "Build-out, tenant improvement allowance, and delivery condition",
        "Assignment, subletting, and change-of-control rights",
        "Personal guaranty negotiation, including caps and burn-off",
        "Renewal options, exclusivity, default, and remedies",
        "Estoppel and SNDA review where a lender is involved",
      ],
      whyItMatters:
        "A commercial lease is usually the second largest contract a business signs, and the landlord's form is written entirely for the landlord.",
    },
    {
      name: "Deed Preparation & Title Transfer",
      price: QUOTED,
      whoItsFor:
        "Owners moving property into an LLC or trust, or transferring between related parties.",
      includes: [
        "Deed preparation, including warranty and quitclaim deeds",
        "Recording with the county and confirmation of the recorded copy",
        "Transfer tax and exemption analysis",
        "Review of due-on-sale, title insurance, and lender consent issues",
        "Updated entity records and insurance notification guidance",
      ],
    },
    {
      name: "Loan & Financing Document Review",
      price: QUOTED,
      whoItsFor:
        "Borrowers taking on commercial, acquisition, construction, or SBA financing.",
      includes: [
        "Term sheet and commitment letter review before you sign",
        "Loan agreement, note, mortgage, and security agreement review",
        "Personal guaranty and covenant analysis, including what triggers default",
        "Entity authority documents and resolutions the lender requires",
        "Negotiation of lender terms where there is room to move",
      ],
    },
    {
      name: "Land & Development Acquisition",
      price: QUOTED,
      whoItsFor:
        "Buyers acquiring land for a build, an expansion, or a long-term hold.",
      includes: [
        "Purchase or option agreement with a real diligence period",
        "Zoning, use, access, and utility diligence coordination",
        "Seller financing or installment terms where used",
        "Easements, restrictions, and covenant review",
        "Closing and post-closing entity structure",
      ],
    },
  ],
};

/* -------------------------------------------------- */
/* Disputes & Demand Letters                          */
/* -------------------------------------------------- */

export const DISPUTES_CATEGORY: ServiceCategory = {
  id: "disputes",
  icon: Gavel,
  label: "Disputes & Demand Letters",
  track: "business",
  packages: [
    {
      name: "Attorney Demand Letter",
      price: QUOTED,
      whoItsFor:
        "Businesses owed money, dealing with a broken contract, or facing misuse of their brand or work.",
      includes: [
        "Review of the contract, correspondence, and your leverage",
        "Demand letter on firm letterhead with a clear deadline",
        "Handling the response and follow-up negotiation",
        "Recommended next steps if the demand is ignored",
      ],
      whyItMatters:
        "A letter from counsel resolves a large share of disputes before anyone files anything, at a fraction of the cost of litigation.",
    },
    {
      name: "Commercial Collections",
      price: QUOTED,
      whoItsFor:
        "Companies carrying past-due invoices from customers who have stopped responding.",
      includes: [
        "Demand letter and payment deadline",
        "Payment plan, forbearance, or settlement agreement documentation",
        "Confession of judgment or security where available and appropriate",
        "Escalation plan and referral to collection counsel if needed",
        "Invoice and contract terms tightened so the next one collects faster",
      ],
    },
    {
      name: "Settlement & Release Agreement",
      price: QUOTED,
      whoItsFor:
        "Parties who have reached a resolution and need it documented so it holds.",
      includes: [
        "Settlement agreement with payment terms and deadlines",
        "Mutual or one-way release, scoped to the actual dispute",
        "Confidentiality and non-disparagement terms",
        "Default remedies and security for payment over time",
        "Dismissal or standstill coordination with any litigation counsel",
      ],
    },
    {
      name: "Contract Dispute Strategy Review",
      price: QUOTED,
      whoItsFor:
        "Owners in the early stage of a dispute who need to know where they stand before spending money.",
      includes: [
        "Review of the contract, notice requirements, and cure rights",
        "Assessment of your position, exposure, and realistic outcomes",
        "Notice and cure letters drafted to preserve your rights",
        "Negotiation strategy and a recommended path",
        "Honest read on whether litigation counsel is warranted",
      ],
    },
    {
      name: "Litigation Referral & Oversight",
      price: QUOTED,
      whoItsFor:
        "Businesses heading into or already in court who want a business lawyer in their corner.",
      includes: [
        "Referral to vetted litigation counsel matched to the matter and jurisdiction",
        "Engagement and fee arrangement review before you sign",
        "Transition of the file, contracts, and background",
        "Ongoing coordination on strategy, budget, and settlement posture",
        "Handling of the business and transactional work that surrounds the dispute",
      ],
      notIncluded: [
        "Courtroom representation and court appearances, which are handled by the litigation counsel you engage.",
      ],
    },
  ],
};

/* -------------------------------------------------- */
/* Additions to existing categories                   */
/* -------------------------------------------------- */

export const EXTRA_CONTRACT_PACKAGES: ServicePackage[] = [
  {
    name: "Master Services Agreement (MSA)",
    price: QUOTED,
    whoItsFor:
      "Companies that sell or buy services repeatedly and want one agreement that governs every engagement.",
    includes: [
      "Master agreement plus a reusable statement of work template",
      "Scope, pricing, payment, and change order mechanics",
      "Limitation of liability, indemnity, and insurance terms",
      "Intellectual property ownership and confidentiality",
      "Termination, renewal, and dispute resolution",
      "Negotiation support when the other side sends their paper",
    ],
  },
  {
    name: "Contract Redline & Negotiation",
    price: QUOTED,
    whoItsFor:
      "Anyone handed a contract on the other side's paper who does not want to sign it as written.",
    includes: [
      "Full review with a marked-up redline you can send back",
      "Plain-English summary of the terms that actually matter",
      "Ranked list of must-change, should-change, and acceptable terms",
      "Negotiation of the redline directly with the other side or their counsel",
      "Final review before signature",
    ],
  },
  {
    name: "Distribution, Reseller & Supply Agreements",
    price: QUOTED,
    whoItsFor:
      "Product companies, distributors, and wholesalers moving goods through partners.",
    includes: [
      "Distribution, reseller, or supply agreement drafted or reviewed",
      "Territory, exclusivity, and minimum purchase commitments",
      "Pricing, payment terms, and credit protection",
      "Warranty, product liability, and indemnity allocation",
      "Brand and trademark usage terms",
      "Termination and post-termination inventory handling",
    ],
  },
];

export const EXTRA_ESTATE_PACKAGES: ServicePackage[] = [
  {
    name: "Trust Funding & Asset Transfers",
    price: QUOTED,
    whoItsFor:
      "Anyone who signed a trust but never moved assets into it, which is more common than not.",
    includes: [
      "Inventory of accounts, property, and business interests",
      "Deeds transferring real estate into the trust, prepared and recorded",
      "Assignment of business and LLC interests to the trust",
      "Beneficiary designation guidance for retirement accounts and insurance",
      "Funding letters for banks, custodians, and advisors",
      "Confirmation review once transfers are complete",
    ],
    whyItMatters:
      "An unfunded trust does nothing. Assets left outside it still go through probate, which is the exact outcome the trust was meant to avoid.",
  },
  {
    name: "Estate Plan Review & Update",
    price: QUOTED,
    whoItsFor:
      "Families whose plan is more than a few years old, or whose life or business has changed since signing.",
    includes: [
      "Review of your existing trust, wills, powers of attorney, and directives",
      "Update for marriage, divorce, births, deaths, moves, and new assets",
      "Coordination of the plan with business ownership and buy-sell terms",
      "Trustee, successor, and fiduciary appointment review",
      "Restatement or amendments as needed, with execution instructions",
    ],
  },
  {
    name: "Business Owner Estate Plan",
    price: QUOTED,
    whoItsFor:
      "Owners whose largest asset is the company, and whose plan needs to address it directly.",
    includes: [
      "Revocable living trust and pour-over will",
      "Durable power of attorney, healthcare directive, and HIPAA authorization",
      "Transfer of LLC and corporate interests into the plan",
      "Coordination with the operating agreement and any buy-sell terms",
      "Succession instructions for management and control of the business",
      "Life insurance and liquidity coordination with your advisors",
    ],
  },
];
