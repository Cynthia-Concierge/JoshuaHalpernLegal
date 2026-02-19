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

interface OwnerFields {
  fullName: string;
  ownershipPct: string;
  role: string;
  ssn: string;
  dob: string;
  address: string;
}

const emptyOwner = (): OwnerFields => ({
  fullName: "",
  ownershipPct: "",
  role: "",
  ssn: "",
  dob: "",
  address: "",
});

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
const checkboxCls =
  "w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/40 mt-0.5 flex-shrink-0";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/BcV5yPPiVfG1L72P10vq/webhook-trigger/51abadf6-ec0c-4e72-b07e-4a1ea786b368";

const FormationIntake: React.FC = () => {
  const navigate = useNavigate();
  const [ownerCount, setOwnerCount] = useState(1);
  const [owners, setOwners] = useState<OwnerFields[]>([emptyOwner()]);
  const [mailingAddressSame, setMailingAddressSame] = useState("yes");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleOwnerCountChange = (val: string) => {
    const count = parseInt(val, 10) || 1;
    setOwnerCount(count);
    setOwners((prev) => {
      if (count > prev.length) {
        return [...prev, ...Array.from({ length: count - prev.length }, emptyOwner)];
      }
      return prev.slice(0, count);
    });
  };

  const updateOwner = (idx: number, field: keyof OwnerFields, val: string) => {
    setOwners((prev) => prev.map((o, i) => (i === idx ? { ...o, [field]: val } : o)));
  };

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
    const irs_responsible_party = get("irs_responsible_party");
    const management_structure = get("management_structure");
    const business_email = get("business_email");
    const business_phone = get("business_phone");
    const signature_contact = get("signature_contact");
    const business_address = get("business_address");
    const mailing_address = mailingAddressSame === "no" ? get("mailing_address") : "Same as business address";
    const registered_agent_preference = get("registered_agent_preference");
    const need_ein = get("need_ein");
    const expected_employees = get("expected_employees");
    const hiring_90_days = get("hiring_90_days");
    const pay_contractors = get("pay_contractors");

    const lines: string[] = [
      "--- BUSINESS SETUP ---",
      `Entity: ${entity_type} | State: ${state_of_formation} | Industry: ${business_industry}`,
      `Business description: ${business_description}`,
      `Desired name: ${desired_business_name}${backup_business_name ? ` | Backup: ${backup_business_name}` : ""}`,
      "",
      "--- OWNERS ---",
      ...owners.slice(0, ownerCount).map((o, i) =>
        `Owner ${i + 1}: ${o.fullName} | ${o.ownershipPct} | ${o.role} | DOB: ${o.dob} | ${o.address}`
      ),
      `IRS Responsible Party: ${irs_responsible_party} | Management: ${management_structure}`,
      "",
      "--- CONTACT & ADDRESS ---",
      `Business email: ${business_email} | Phone: ${business_phone} | Signature contact: ${signature_contact}`,
      `Business address: ${business_address} | Mailing: ${mailing_address}`,
      `Registered agent: ${registered_agent_preference}`,
      "",
      "--- EIN & EMPLOYMENT ---",
      `Need EIN: ${need_ein} | Expected employees: ${expected_employees} | Hiring in 90 days: ${hiring_90_days} | Pay contractors: ${pay_contractors}`,
      "",
      `Marketing consent: ${agreeMarketing ? "Yes" : "No"}`,
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
      owner_count: ownerCount,
      owners: owners.slice(0, ownerCount).map((o, i) => ({
        owner_number: i + 1,
        full_name: o.fullName,
        ownership_pct: o.ownershipPct,
        role: o.role,
        ssn: o.ssn,
        dob: o.dob,
        address: o.address,
      })),
      irs_responsible_party,
      management_structure,
      business_email,
      business_phone,
      signature_contact,
      business_address,
      mailing_address_same: mailingAddressSame,
      mailing_address,
      registered_agent_preference,
      need_ein,
      expected_employees,
      hiring_90_days,
      pay_contractors,
      agree_terms: agreeTerms,
      agree_marketing: agreeMarketing,
      source: "Formation Intake Form",
    };

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
    } catch {
      // Webhook fire-and-forget; navigate regardless
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

              {/* SECTION 2 */}
              <div className={sectionCardCls}>
                <div className={sectionHeadCls}>
                  <div className={sectionNumberCls}>2</div>
                  <h3 className={sectionTitleCls}>Owners & Responsible Party</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className={labelCls}>
                      How many owners/members are in this business? <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={selectCls}
                      value={ownerCount}
                      onChange={(e) => handleOwnerCountChange(e.target.value)}
                      required
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  {owners.map((owner, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 p-5 md:p-6 space-y-5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-slate-800 text-white text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <p className="text-sm font-bold text-slate-800">
                          Owner {idx + 1}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Full Legal Name</label>
                          <input
                            type="text"
                            className={inputCls}
                            placeholder="Full name"
                            value={owner.fullName}
                            onChange={(e) => updateOwner(idx, "fullName", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Ownership %</label>
                          <input
                            type="text"
                            className={inputCls}
                            placeholder="e.g. 50%"
                            value={owner.ownershipPct}
                            onChange={(e) => updateOwner(idx, "ownershipPct", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Title / Role</label>
                          <input
                            type="text"
                            className={inputCls}
                            placeholder="e.g. Managing Member"
                            value={owner.role}
                            onChange={(e) => updateOwner(idx, "role", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>SSN / ITIN</label>
                          <input
                            type="text"
                            className={inputCls}
                            placeholder="XXX-XX-XXXX"
                            value={owner.ssn}
                            onChange={(e) => updateOwner(idx, "ssn", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Date of Birth</label>
                          <input
                            type="date"
                            className={inputCls}
                            value={owner.dob}
                            onChange={(e) => updateOwner(idx, "dob", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Home Address</label>
                          <input
                            type="text"
                            className={inputCls}
                            placeholder="Full address"
                            value={owner.address}
                            onChange={(e) => updateOwner(idx, "address", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelCls}>
                        Select your IRS "Responsible Party" <span className="text-red-500">*</span>
                      </label>
                      <select name="irs_responsible_party" className={selectCls} required>
                        <option value="">Select responsible party</option>
                        {owners.map((o, i) => (
                          <option key={i} value={o.fullName || `Owner ${i + 1}`}>
                            {o.fullName || `Owner ${i + 1}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>
                        Management structure: <span className="text-red-500">*</span>
                      </label>
                      <select name="management_structure" className={selectCls} required>
                        <option value="">Select management structure</option>
                        <option value="member-managed">Member-Managed</option>
                        <option value="manager-managed">Manager-Managed</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3 */}
              <div className={sectionCardCls}>
                <div className={sectionHeadCls}>
                  <div className={sectionNumberCls}>3</div>
                  <h3 className={sectionTitleCls}>Contact Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>
                      Primary business email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" name="business_email" className={inputCls} placeholder="business@email.com" required />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Primary business phone number <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" name="business_phone" className={inputCls} placeholder="(555) 123-4567" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>
                      Who should we contact for any required signatures? <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="signature_contact" className={inputCls} placeholder="Full name" required />
                  </div>
                </div>
              </div>

              {/* SECTION 4 */}
              <div className={sectionCardCls}>
                <div className={sectionHeadCls}>
                  <div className={sectionNumberCls}>4</div>
                  <h3 className={sectionTitleCls}>Business Address</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className={labelCls}>
                      Business physical address <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="business_address" className={inputCls} placeholder="Street, City, State, ZIP" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelCls}>
                        Is your mailing address the same? <span className="text-red-500">*</span>
                      </label>
                      <select
                        className={selectCls}
                        value={mailingAddressSame}
                        onChange={(e) => setMailingAddressSame(e.target.value)}
                        required
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>
                        Registered Agent preference <span className="text-red-500">*</span>
                      </label>
                      <select name="registered_agent_preference" className={selectCls} required>
                        <option value="">Select preference</option>
                        <option value="legal-halp">Legal Halp will arrange a Registered Agent for me</option>
                        <option value="self">I will serve as my own Registered Agent</option>
                        <option value="other">I already have a Registered Agent</option>
                      </select>
                    </div>
                  </div>

                  {mailingAddressSame === "no" && (
                    <div>
                    <label className={labelCls}>Mailing address</label>
                    <input type="text" name="mailing_address" className={inputCls} placeholder="Street, City, State, ZIP" />
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION 5 */}
              <div className={sectionCardCls}>
                <div className={sectionHeadCls}>
                  <div className={sectionNumberCls}>5</div>
                  <h3 className={sectionTitleCls}>EIN Setup</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelCls}>
                      Do you need us to obtain your EIN? <span className="text-red-500">*</span>
                    </label>
                    <select name="need_ein" className={selectCls} required>
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No, I already have one</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>
                      Expected employees in next 12 months <span className="text-red-500">*</span>
                    </label>
                    <select name="expected_employees" className={selectCls} required>
                      <option value="">Select</option>
                      <option value="0">0 (just me / owners)</option>
                      <option value="1-5">1 - 5</option>
                      <option value="6-20">6 - 20</option>
                      <option value="20+">20+</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>
                      Planning to hire employees in the next 90 days? <span className="text-red-500">*</span>
                    </label>
                    <select name="hiring_90_days" className={selectCls} required>
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>
                      Will you pay contractors? <span className="text-red-500">*</span>
                    </label>
                    <select name="pay_contractors" className={selectCls} required>
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Confirmations */}
              <div className={sectionCardCls}>
                <div className={sectionHeadCls}>
                  <div className={sectionNumberCls}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className={sectionTitleCls}>Review & Confirm</h3>
                </div>
                <div className="space-y-5">
                  <label className="flex items-start gap-3 cursor-pointer bg-slate-50 rounded-xl border border-slate-100 p-4 hover:border-blue-300 transition-colors">
                    <input type="checkbox" className={checkboxCls} required />
                    <span className="text-sm text-slate-700">
                      Confirm that owner names & spellings are correct <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer bg-slate-50 rounded-xl border border-slate-100 p-4 hover:border-blue-300 transition-colors">
                    <input type="checkbox" className={checkboxCls} required />
                    <span className="text-sm text-slate-700">
                      Confirm ownership totals equal 100% <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer bg-slate-50 rounded-xl border border-slate-100 p-4 hover:border-blue-300 transition-colors">
                    <input type="checkbox" className={checkboxCls} required />
                    <span className="text-sm text-slate-700">
                      Confirm you are ready for us to file your business formation <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <div className="border-t border-slate-200 pt-5 mt-5">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className={checkboxCls}
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        required
                      />
                      <span className="text-xs text-slate-600 leading-relaxed">
                        By checking this box, I confirm that I have read and agree to the Legal Halp{" "}
                        <Link to="/privacy" className="text-blue-600 underline">Privacy Policy</Link> and{" "}
                        <Link to="/terms" className="text-blue-600 underline">Terms of Service</Link>. I understand that Legal Halp is a brand of LH LAW HOLDINGS LLC. I authorize LH LAW HOLDINGS LLC d/b/a Legal Halp ("Legal Halp") to collect, store, and process my personal and business information, including any documents I upload, for the purpose of preparing and submitting my business formation and EIN filings. I understand that Legal Halp may act as an authorized third-party designee with the IRS for EIN registration, and that I am responsible for reviewing all information I provide for accuracy. <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className={checkboxCls}
                      checked={agreeMarketing}
                      onChange={(e) => setAgreeMarketing(e.target.checked)}
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      By checking this box, I consent to receive marketing and informational communications from Legal Halp, a brand of LH LAW HOLDINGS LLC, via email and SMS, including special offers, compliance reminders, and service updates. Message frequency may vary. Message and data rates may apply. I understand that I can reply HELP for help or STOP to opt out at any time. Consent is not a condition of purchase.
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2 pb-4">
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
