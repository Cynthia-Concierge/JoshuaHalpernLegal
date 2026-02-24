import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Shield,
  Scale,
  DollarSign,
  Globe,
  UserCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { GHL_WEBHOOK_URL } from "@/config";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois",
  "Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
  "Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota",
  "Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington",
  "West Virginia","Wisconsin","Wyoming",
];

const INDUSTRIES = [
  "Construction / Trades","Consulting / Professional Services","E-Commerce / Retail",
  "Food & Beverage","Healthcare / Wellness","Marketing / Creative Agency",
  "Real Estate / Property Management","Technology / SaaS","Transportation / Logistics",
  "Other",
];

const ENTITY_TYPES = ["LLC", "S-Corporation", "C-Corporation", "Partnership"];

const TRUST_ITEMS = [
  { icon: Shield, label: "Secure & Confidential" },
  { icon: Scale, label: "Licensed Attorney" },
  { icon: Globe, label: "All 50 States" },
  { icon: DollarSign, label: "Clear Pricing" },
];

const labelCls = "block text-sm font-semibold text-slate-700 mb-2";
const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all";
const selectCls = `${inputCls} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10`;
const sectionCardCls =
  "bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8";
const sectionHeadCls =
  "flex items-center gap-3 mb-8";
const sectionNumberCls =
  "w-9 h-9 rounded-xl bg-slate-900 text-white text-sm font-bold flex items-center justify-center flex-shrink-0";
const sectionTitleCls = "text-lg font-bold text-slate-900";

const FormationIntake: React.FC = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const get = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value || "";

    const first_name = get("first_name");
    const last_name = get("last_name");
    const email = get("email");
    const phone = get("phone");
    const entity_type = get("entity_type");
    const state_of_formation = get("state_of_formation");
    const business_industry = get("business_industry");
    const business_description = get("business_description");
    const desired_business_name = get("desired_business_name");
    const backup_business_name = get("backup_business_name");

    const lines: string[] = [
      "--- LEAD CONTACT ---",
      `Name: ${first_name} ${last_name} | Email: ${email} | Phone: ${phone}`,
      "",
      "--- BUSINESS SETUP ---",
      `Entity: ${entity_type} | State: ${state_of_formation} | Industry: ${business_industry}`,
      `Business description: ${business_description}`,
      `Desired name: ${desired_business_name}${backup_business_name ? ` | Backup: ${backup_business_name}` : ""}`,
    ];
    const intake_summary = lines.join("\n");

    const payload = {
      first_name,
      last_name,
      email,
      phone,
      intake_summary,
      entity_type,
      state_of_formation,
      business_industry,
      business_description,
      desired_business_name,
      backup_business_name,
    };

    setSubmitError(null);
    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("GHL webhook failed", res.status, text);
        setSubmitError("We couldn't save your submission. Please try again or contact us directly.");
        setSubmitting(false);
        return;
      }

      // Fire Facebook Lead event for conversion tracking (Meta Pixel)
      if (typeof window !== "undefined" && typeof (window as Window & { fbq?: (a: string, b: string) => void }).fbq === "function") {
        (window as Window & { fbq: (a: string, b: string) => void }).fbq("track", "Lead");
      }
    } catch (err) {
      console.error("Form submit error", err);
      setSubmitError("Something went wrong. Please check your connection and try again, or contact us directly.");
      setSubmitting(false);
      return;
    }

    navigate("/formation/thank-you");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight font-serif">
              Let's Get Your Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                Formed
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 font-semibold">
              Complete this form and we'll handle the rest
            </p>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We'll collect all the information needed to form your LLC, S-Corp,
              C-Corp, or Partnership. No legal jargon, just straightforward
              questions about your business.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-300 px-5 py-2 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              Takes about 10 minutes to complete
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-b border-slate-200 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-700">
            {TRUST_ITEMS.map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <t.icon className="w-4 h-4 text-blue-500" />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Your Info */}
              <div className={sectionCardCls}>
                <div className={sectionHeadCls}>
                  <div className={sectionNumberCls}>
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h3 className={sectionTitleCls}>Your Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="first_name" className={inputCls} placeholder="First Name" required />
                  </div>
                  <div>
                    <label className={labelCls}>Last Name</label>
                    <input type="text" name="last_name" className={inputCls} placeholder="Last Name" />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" name="email" className={inputCls} placeholder="Email" required />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" name="phone" className={inputCls} placeholder="Phone" required />
                  </div>
                </div>
              </div>

              {/* SECTION 1 */}
              <div className={sectionCardCls}>
                <div className={sectionHeadCls}>
                  <div className={sectionNumberCls}>1</div>
                  <h3 className={sectionTitleCls}>Business Setup</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className={labelCls}>
                      What type of entity are we forming for you? <span className="text-red-500">*</span>
                    </label>
                    <select name="entity_type" className={selectCls} required>
                      <option value="">Select entity type</option>
                      {ENTITY_TYPES.map((e) => (
                        <option key={e} value={e}>{e}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelCls}>
                        Choose your state of formation: <span className="text-red-500">*</span>
                      </label>
                      <select name="state_of_formation" className={selectCls} required>
                        <option value="">Select a State</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>
                        What is your Business Industry? <span className="text-red-500">*</span>
                      </label>
                      <select name="business_industry" className={selectCls} required>
                        <option value="">Select your business industry</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>
                      What will your business primarily do? <span className="text-red-500">*</span>
                    </label>
                    <textarea name="business_description" className={inputCls} rows={3} placeholder="Describe your business activities" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelCls}>
                        Desired legal business name: <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="desired_business_name" className={inputCls} placeholder="e.g. Acme Holdings LLC" required />
                    </div>
                    <div>
                      <label className={labelCls}>Backup business name (optional):</label>
                      <input type="text" name="backup_business_name" className={inputCls} placeholder="In case the first name is taken" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2 pb-4">
                {submitError && (
                  <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
                    {submitError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-slate-900/30 transform hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 text-lg flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Submit Your Business Formation
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  Your information is encrypted and secure. We'll review everything and reach out within 1 business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-6">
            <img src="/logo.png" alt="Legal Halp" className="h-10 brightness-0 invert opacity-80 mb-1" />
            <p className="text-sm text-slate-500 mt-1">by Joshua Halpern, Esq.</p>
          </div>
          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/payment-policy" className="hover:text-blue-400 transition-colors">Payment &amp; Refund Policy</Link>
          </div>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Disclaimer: The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.
          </p>
          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Legal Halp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormationIntake;
