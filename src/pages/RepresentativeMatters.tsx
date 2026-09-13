import React from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Shield,
  Phone,
  ArrowRight,
  Handshake,
  Building2,
  Briefcase,
  Landmark,
  Layers,
  Copyright,
  Lock,
} from "lucide-react";

/* -------------------------------------------------- */
/* Data                                               */
/* -------------------------------------------------- */

interface Matter {
  title: string;
  client: string;
  detail: string;
}

interface MatterGroup {
  id: string;
  icon: React.FC<{ className?: string }>;
  label: string;
  blurb: string;
  matters: Matter[];
}

const MATTER_GROUPS: MatterGroup[] = [
  {
    id: "ma",
    icon: Handshake,
    label: "Mergers, Acquisitions & Exits",
    blurb:
      "Buy-side and sell-side execution, from letter of intent through closing and post-closing integration.",
    matters: [
      {
        title: "Membership interest purchase and closing",
        client: "Multi-property residential real estate holding company",
        detail:
          "Buyer-side representation through the purchase of 100% of the membership interests in a property-holding LLC, including the holding company operating agreement, closing mechanics, transfer documentation, and follow-on lender diligence requests.",
      },
      {
        title: "Buy-side acquisition counsel",
        client:
          "Automated amenities and vending operator, two Pacific Northwest markets",
        detail:
          "Structuring, diligence scoping, and transaction counsel for an operator evaluating the acquisition of a competing route-based business across two metropolitan markets.",
      },
      {
        title: "Cross-border option exercise and closing",
        client: "EU subsidiary of a U.S. energy technology company",
        detail:
          "Advised on exercise mechanics and closing sequencing under a put and call option agreement governing a foreign subsidiary, coordinating with local counsel in the target jurisdiction and managing the deal calendar for the U.S. side.",
      },
      {
        title: "50/50 partner buyout and exit",
        client: "Pacific Northwest glass and glazing contractor",
        detail:
          "Valuation framework, redemption structure, and exit documentation for a deadlocked two-member LLC, including release of guaranties and post-closing non-compete terms.",
      },
      {
        title: "Co-ownership exit and property disposition",
        client: "Multi-generational funeral home, New Jersey",
        detail:
          "Counsel to a co-owner on unwinding a jointly held operating property, including partition alternatives, buyout valuation, and negotiated disposition terms.",
      },
    ],
  },
  {
    id: "gc",
    icon: Briefcase,
    label: "Outside General Counsel",
    blurb:
      "Standing counsel embedded in operating companies, handling the full legal function on a fixed monthly fee.",
    matters: [
      {
        title: "Fractional general counsel to a 28-entity portfolio",
        client:
          "Media, health publishing, OTT, AI, and consumer products group (~75 employees)",
        detail:
          "Portfolio-wide legal function across roughly 28 operating and holding entities: intercompany agreements, talent and production contracts, licensing and distribution, IP assignment discipline, and governance cleanup across the structure.",
      },
      {
        title: "Replacement of an in-house general counsel function",
        client:
          "Business process outsourcing and contact center group, ~5,000 employees, ~$35M revenue",
        detail:
          "Assumed the legal function previously held by in-house counsel for a multi-entity group with domestic and offshore operations. Client contracting, master services agreements, vendor terms, employment matters, and entity compliance across jurisdictions.",
      },
      {
        title: "In-house counsel to a residential brokerage",
        client: "Large metropolitan real estate brokerage",
        detail:
          "Retained in-house counsel role covering an operating agreement restatement, multi-unit purchase agreements, partner admissions and buyouts, and ongoing commission and independent contractor issues.",
      },
      {
        title: "Outside GC across an affiliated venture group",
        client:
          "Mid-Atlantic behavioral and developmental services provider plus affiliated energy and advisory ventures",
        detail:
          "Single counsel relationship spanning a licensed services operator and several early-stage affiliates, covering entity formation, intercompany structure, contracting, and regulatory-adjacent compliance review.",
      },
    ],
  },
  {
    id: "structuring",
    icon: Layers,
    label: "Entity Structuring & Restructuring",
    blurb:
      "Holding company architecture, multi-state cleanup, and tax-driven restructuring of existing groups.",
    matters: [
      {
        title: "ROBS unwind and S-corporation restructuring",
        client: "Owner-operated services business",
        detail:
          "Unwound a rollover-as-business-startup structure, coordinated valuation, and restructured the surviving entity's equity and elections with the client's tax advisors.",
      },
      {
        title: "Six-state entity and titling cleanup",
        client:
          "Private real estate holder with assets across six states",
        detail:
          "Reconciled entity ownership against recorded title across a multi-state portfolio, corrected chain-of-title and registration defects, and coordinated the cleanup with an estate plan that included a previously unfunded irrevocable trust.",
      },
      {
        title: "Holding company formation and governance build-out",
        client:
          "Management consulting corporation and affiliated investment holding company",
        detail:
          "Designed and documented a two-tier structure separating the operating consultancy from an investment holding vehicle, with governance, capitalization, and intercompany terms.",
      },
      {
        title: "Articles correction and title conformance",
        client: "Single-asset real estate LLC",
        detail:
          "Corrected a misspelled entity name carried through the state Articles of Organization and every downstream record, then conformed deed and title documentation to the corrected legal name.",
      },
    ],
  },
  {
    id: "cre",
    icon: Building2,
    label: "Commercial & Investment Real Estate",
    blurb:
      "Acquisitions, leasing, title and escrow issues, and the entity work that sits underneath them.",
    matters: [
      {
        title: "Point-of-sale escrow and contractor dispute",
        client: "Seller and repair contractor on a suburban Ohio transaction",
        detail:
          "Handled a post-closing municipal point-of-sale escrow release where the seller also served as the repair contractor, resolving the overlapping roles and the buyer entity's claims against the escrowed funds.",
      },
      {
        title: "Multifamily portfolio entity review",
        client:
          "California multifamily investor, five buildings, roughly $15M",
        detail:
          "Reviewed a portfolio held individually rather than through entities, and scoped the liability segregation, financing, and succession implications of restructuring it.",
      },
      {
        title: "Commercial lease negotiation program",
        client: "Multi-location flooring and retail operator",
        detail:
          "Ongoing landlord-side and tenant-side lease review, escalation and CAM terms, build-out allowances, and assignment and subletting provisions across an expanding footprint.",
      },
    ],
  },
  {
    id: "governance",
    icon: Landmark,
    label: "Governance, Equity & Investor Matters",
    blurb:
      "The documents that decide who controls the company and what happens when someone leaves.",
    matters: [
      {
        title: "Operating agreement restatement and buy-sell",
        client: "Multi-office brokerage with several member-owners",
        detail:
          "Full restatement of the governing operating agreement with revised voting thresholds, transfer restrictions, and a valuation-driven buy-sell mechanism, followed by member unit purchase agreements for two partner transitions.",
      },
      {
        title: "Member exit and arbitration posture",
        client: "Multi-entity healthcare services group",
        detail:
          "Advised on a departing member's exit against a mandatory arbitration clause, including redemption valuation, the cleanup of entity records that had drifted from the cap table, and the sequencing of the exit against pending business.",
      },
      {
        title: "Equity compensation and founder documentation",
        client: "Investor-backed operating company",
        detail:
          "Structured and papered an equity incentive arrangement alongside founder vesting and IP assignment, aligning the documents with the existing capitalization before an outside raise.",
      },
    ],
  },
  {
    id: "ip",
    icon: Copyright,
    label: "Intellectual Property & Brand",
    blurb: "Trademark prosecution, licensing, and IP ownership discipline.",
    matters: [
      {
        title: "Trademark prosecution and office action response",
        client: "Design and apparel brand",
        detail:
          "Prosecuted a federal trademark application through examination, including the substantive response to an office action and the evidentiary strategy for overcoming the examiner's refusal.",
      },
      {
        title: "Licensing and distribution agreements",
        client: "Consumer products and media group",
        detail:
          "Drafted and negotiated inbound and outbound license terms, territory and channel restrictions, royalty mechanics, and quality control provisions across a portfolio of brands.",
      },
    ],
  },
];

const STATS = [
  { value: "$250M+", label: "In transactions closed" },
  { value: "28", label: "Entities under a single GC engagement" },
  { value: "10+", label: "Years of corporate practice" },
  { value: "1", label: "Attorney on every matter" },
];

/* -------------------------------------------------- */
/* Page                                               */
/* -------------------------------------------------- */

const RepresentativeMatters: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================= */}
      {/* HERO                                          */}
      {/* ============================================= */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-400/8 rounded-full filter blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              Representative Matters
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-[-0.02em]">
              <span className="block">The Work, Not the Brochure.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium">
              A selection of corporate and transactional matters handled by
              Legal Halp. Client names and identifying details are withheld.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ============================================= */}
      {/* STATS                                         */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1.5 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* MATTER GROUPS                                 */}
      {/* ============================================= */}
      {MATTER_GROUPS.map((group, gi) => {
        const Icon = group.icon;
        const shaded = gi % 2 === 1;
        return (
          <section
            key={group.id}
            id={group.id}
            className={`py-16 md:py-24 border-t border-slate-200 ${
              shaded ? "bg-slate-50" : "bg-white"
            }`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-start gap-4 mb-10">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {group.label}
                    </h2>
                    <p className="text-slate-600 mt-2 text-base md:text-lg leading-relaxed max-w-2xl">
                      {group.blurb}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {group.matters.map((matter, mi) => (
                    <div
                      key={mi}
                      className={`rounded-2xl p-6 border shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                        shaded
                          ? "bg-white border-slate-200"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2">
                        {matter.title}
                      </h3>
                      <p className="text-blue-600 text-sm font-semibold leading-snug mb-3">
                        {matter.client}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {matter.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============================================= */}
      {/* CONFIDENTIALITY NOTE                          */}
      {/* ============================================= */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-2">
                  A note on confidentiality
                </p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Every matter above is described by structure and industry
                  only. Client identities, transaction values, and other
                  identifying details are withheld. Prior results do not
                  guarantee a similar outcome in any future matter. Legal Halp
                  is a corporate and transactional practice. Matters requiring
                  courtroom litigation are referred to trial counsel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FINAL CTA                                     */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
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
                Have a deal or a structure to work through?
              </h3>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Bring the situation. We will scope it on the call and you will
                know the fee before any work begins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Schedule a Call
                </Link>
                <Link
                  to="/lawyer-on-call"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/30 transform hover:-translate-y-1 transition-all text-lg"
                >
                  Outside General Counsel
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
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
            <img
              src="/logo.png"
              alt="Legal Halp"
              className="h-10 brightness-0 invert opacity-80 mb-1"
            />
            <p className="text-sm text-slate-500 mt-1">
              by Joshua Halpern, Esq.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link
              to="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/payment-policy"
              className="hover:text-blue-400 transition-colors"
            >
              Payment &amp; Refund Policy
            </Link>
          </div>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Disclaimer: The information provided on this website does not, and
            is not intended to, constitute legal advice; instead, all
            information, content, and materials available on this site are for
            general informational purposes only. Prior results do not guarantee
            a similar outcome.
          </p>

          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Legal Halp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RepresentativeMatters;
