import React, { useState } from 'react';
import { X, Send, Lock, ArrowRight, ArrowLeft, CheckCircle2, Shield } from 'lucide-react';
import { PhoneInput } from './ui/phone-input';
import { FORM_SUBMIT_URL } from '@/config';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
  }) => void;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    mainNeed: "",
    state: "",
  });

  if (!isOpen) return null;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError("");
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setPhoneError("");
  };

  // Step 1: Capture name, email, phone
  const handleStep1Next = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!phone || phone.length < 10) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setEmailError("");
    setPhoneError("");

    setFormData({
      ...formData,
      name,
      email,
    });

    // Save contact to CRM immediately (captures drop-offs before step 2)
    const nameParts = name.split(' ');
    fetch(FORM_SUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: nameParts[0],
        last_name: nameParts.slice(1).join(' ') || '',
        email,
        phone,
        source: 'Website - On-Demand Counsel Audit (Step 1)',
        tags: ['website', 'started-application'],
      }),
    }).catch(() => {}); // fire-and-forget, don't block step 2

    setStep(2);
  };

  // Step 2: Qualifying questions + final submit
  const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const businessType = (form.elements.namedItem("businessType") as HTMLSelectElement).value;
    const mainNeed = (form.elements.namedItem("mainNeed") as HTMLSelectElement).value;
    const state = (form.elements.namedItem("state") as HTMLInputElement).value.trim();

    if (!businessType || !mainNeed || !state) {
      return;
    }

    onSubmit({
      name: formData.name,
      email: formData.email,
      phone,
      businessType,
      mainNeed,
      state,
    } as any);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const totalSteps = 2;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200 rounded-t-2xl overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-slate-800 via-slate-700 to-emerald-500 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        <div className="p-6 md:p-8 pt-8">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'
            }`}>
              {step > 1 ? <CheckCircle2 className="w-4 h-4" /> : '1'}
            </div>
            <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-slate-900' : 'bg-slate-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'
            }`}>
              2
            </div>
          </div>

          {/* STEP 1: Contact Info */}
          {step === 1 && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-2">
                  Get Your Lawyer on Call
                </h3>
                <p className="text-slate-600 text-sm">
                  Limited spots available. Tell us how to reach you.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleStep1Next}>
                <div className="group">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    defaultValue={formData.name}
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    defaultValue={formData.email}
                    placeholder="your@email.com"
                    onChange={handleEmailChange}
                    className={`w-full px-4 py-3.5 rounded-lg border ${
                      emailError ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-slate-700"
                    } focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400`}
                  />
                  {emailError && (
                    <p className="mt-1.5 text-xs text-red-600">{emailError}</p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">
                    Phone Number*
                  </label>
                  <PhoneInput
                    value={phone}
                    onChange={handlePhoneChange}
                    error={phoneError}
                    className="px-4 py-3.5 bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-slate-900/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group mt-4"
                >
                  <span className="tracking-wide">Next</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-3 font-medium uppercase tracking-wider">
                  <Lock className="w-3 h-3" />
                  <span>Private. Confidential. No obligation.</span>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: Qualifying Questions */}
          {step === 2 && (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-2">
                  Tell Us About Your Business
                </h3>
                <p className="text-slate-600 text-sm">
                  Three quick questions — takes 15 seconds.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleFinalSubmit}>
                <div className="group">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    What Type of Business?*
                  </label>
                  <select
                    name="businessType"
                    required
                    defaultValue={formData.businessType}
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base"
                  >
                    <option value="">Select one...</option>
                    <option value="Construction/Trades">Construction/Trades</option>
                    <option value="Creative/Media">Creative/Media (Design, Production)</option>
                    <option value="E-commerce/Retail">E-commerce/Retail</option>
                    <option value="Financial Services">Financial Services</option>
                    <option value="Food & Beverage">Food & Beverage (Restaurant, Catering)</option>
                    <option value="Healthcare/Medical">Healthcare/Medical</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Marketing/Advertising">Marketing/Advertising</option>
                    <option value="Nonprofit">Nonprofit/Social Enterprise</option>
                    <option value="Other">Other</option>
                    <option value="Professional Services">Professional Services (Consulting, Agency)</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="SaaS/Tech Startup">SaaS/Tech Startup</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    What Do You Need Most?*
                  </label>
                  <select
                    name="mainNeed"
                    required
                    defaultValue={formData.mainNeed}
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base"
                  >
                    <option value="">Select one...</option>
                    <option value="Business formation (LLC, Corp)">Business formation (LLC, Corp)</option>
                    <option value="Compliance & regulatory help">Compliance & regulatory help</option>
                    <option value="Contract review & negotiation">Contract review & negotiation</option>
                    <option value="Employment/HR legal guidance">Employment/HR legal guidance</option>
                    <option value="Estate planning (trusts, wills, power of attorney)">Estate planning (trusts, wills, power of attorney)</option>
                    <option value="General business legal advice">General business legal advice</option>
                    <option value="IP protection (trademarks, copyrights)">IP protection (trademarks, copyrights)</option>
                    <option value="M&A or fundraising prep">M&A or fundraising prep</option>
                    <option value="Ongoing general counsel">Ongoing general counsel</option>
                    <option value="Partnership/operating agreements">Partnership/operating agreements</option>
                    <option value="Strategic legal counsel">Strategic legal counsel</option>
                    <option value="Vendor/client agreement templates">Vendor/client agreement templates</option>
                    <option value="Website legal (terms, privacy policy)">Website legal (terms, privacy policy)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    What State Are You In?*
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    defaultValue={formData.state}
                    placeholder="e.g. Florida"
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400"
                  />
                </div>

                <p className="text-slate-500 text-sm text-center">
                  Once you apply, we'll reach out within 24 hours to schedule a brief intro call and see if we're the right fit.
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-[2] bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-600/25 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span className="tracking-wide">Apply</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-3 font-medium uppercase tracking-wider">
                  <Lock className="w-3 h-3" />
                  <span>Private. Confidential. No obligation.</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
