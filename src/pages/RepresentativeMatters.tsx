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
}

interface MatterGroup {
  id: string;
  icon: React.FC<{ className?: string }>;
  label: string;
  matters: Matter[];
}

const MATTER_GROUPS: MatterGroup[] = [
  {
    id: "ma",
    icon: Handshake,
    label: "Mergers, Acquisitions & Exits",
    matters: [
      {
        title: "Membership interest purchase, LOI through closing",
        client: "Multi-property real estate holding company",
      },
      {
        title: "Buy-side acquisition of a competing operator",
        client: "Vending and automated amenities, two Pacific NW markets",
      },
      {
        title: "Cross-border option exercise and closing",
        client: "EU subsidiary of a U.S. energy technology company",
      },
      {
        title: "50/50 partner buyout of a deadlocked LLC",
        client: "Pacific Northwest glass and glazing contractor",
      },
      {
        title: "Co-ownership unwind and property disposition",
        client: "Multi-generational funeral home, New Jersey",
      },
    ],
  },
  {
    id: "gc",
    icon: Briefcase,
    label: "Outside General Counsel",
    matters: [
      {
        title: "Fractional GC across 28 operating and holding entities",
        client: "Media, publishing, OTT and consumer products group, ~75 staff",
      },
      {
        title: "Replaced the in-house general counsel function",
        client: "BPO and contact center group, ~5,000 employees, ~$35M revenue",
      },
      {
        title: "Retained in-house counsel",
        client: "Large metropolitan residential real estate brokerage",
      },
      {
        title: "Single counsel relationship across affiliated ventures",
        client: "Mid-Atlantic services provider plus energy and advisory arms",
      },
    ],
  },
  {
    id: "structuring",
    icon: Layers,
    label: "Entity Structuring & Restructuring",
    matters: [
      {
        title: "ROBS unwind, valuation and S-corp restructuring",
        client: "Owner-operated services business",
      },
      {
        title: "Entity and titling reconciliation across six states",
        client: "Private real estate holder, multi-state portfolio",
      },
      {
        title: "Two-tier holding structure and governance build-out",
        client: "Consulting corporation and affiliated investment holdco",
      },
      {
        title: "Articles correction and downstream title conformance",
        client: "Single-asset real estate LLC",
      },
    ],
  },
  {
    id: "cre",
    icon: Building2,
    label: "Commercial & Investment Real Estate",
    matters: [
      {
        title: "Point-of-sale escrow release and contractor dispute",
        client: "Seller and repair contractor, suburban Ohio transaction",
      },
      {
        title: "Entity and liability review of a five-building portfolio",
        client: "California multifamily investor, roughly $15M",
      },
      {
        title: "Ongoing lease negotiation across an expanding footprint",
        client: "Multi-location flooring and retail operator",
      },
    ],
  },
  {
    id: "governance",
    icon: Landmark,
    label: "Governance, Equity & Investors",
    matters: [
      {
        title: "Operating agreement restatement and buy-sell mechanism",
        client: "Multi-office brokerage with several member-owners",
      },
      {
        title: "Member exit against a mandatory arbitration clause",
        client: "Multi-entity healthcare services group",
      },
      {
        title: "Equity incentive plan, founder vesting and IP assignment",
        client: "Investor-backed operating company",
      },
    ],
  },
  {
    id: "ip",
    icon: Copyright,
    label: "Intellectual Property & Brand",
    matters: [
      {
        title: "Trademark prosecution through office action response",
        client: "Design and apparel brand",
      },
      {
        title: "Inbound and outbound licensing and distribution terms",
        client: "Consumer products and media group",
      },
    ],
  },
];

const STATS = [
  { value: "$250M+", label: "Transactions closed" },
  { value: "28", label: "Entities under one GC engagement" },
  { value: "10+", label: "Years corporate practice" },
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
      <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              Representative Matters
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-[-0.02em]">
              The Work, Not the Brochure.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Client names withheld. Structure and scale as handled.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ============================================= */}
      {/* STATS                                         */}
      {/* ============================================= */}
      <section className="py-10 md:py-14 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1 leading-snug">
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
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {MATTER_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.id} id={group.id}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                      {group.label}
                    </h2>
                  </div>

                  <div className="border-t border-slate-200">
                    {group.matters.map((matter, mi) => (
                      <div
                        key={mi}
                        className="py-4 border-b border-slate-200 md:flex md:items-baseline md:gap-6"
                      >
                        <p className="font-semibold text-slate-900 leading-snug md:flex-1">
                          {matter.title}
                        </p>
                        <p className="text-sm text-slate-500 leading-snug mt-1 md:mt-0 md:w-[46%] md:flex-shrink-0">
                          {matter.client}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* CONFIDENTIALITY NOTE                          */}
      {/* ============================================= */}
      <section className="pb-14 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
            <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              Matters are described by structure and industry only. Prior
              results do not guarantee a similar outcome. Litigation is referred
              to trial counsel.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* FINAL CTA                                     */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden text-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10">
              <Shield className="w-10 h-10 text-blue-400 mx-auto mb-5" />
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Have a deal or a structure to work through?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                Scoped on the call. Priced before any work begins.
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
                  to="/outside-general-counsel"
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
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/logo.png"
            alt="Legal Halp"
            className="h-10 brightness-0 invert opacity-80 mb-1 mx-auto"
          />
          <p className="text-sm text-slate-500 mb-5">by Joshua Halpern, Esq.</p>

          <div className="flex justify-center gap-6 mb-5 text-sm">
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              Terms
            </Link>
            <Link
              to="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/payment-policy"
              className="hover:text-blue-400 transition-colors"
            >
              Payment &amp; Refunds
            </Link>
          </div>

          <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed mb-5">
            Information on this site is general and is not legal advice. Prior
            results do not guarantee a similar outcome.
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
