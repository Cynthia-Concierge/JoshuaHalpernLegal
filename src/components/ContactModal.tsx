import React, { useState } from 'react';
import { X, Lock, ArrowRight } from 'lucide-react';
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
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  if (!isOpen) return null;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError("");
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    setPhoneError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const businessType = (form.elements.namedItem("businessType") as HTMLSelectElement).value;
    const mainNeed = (form.elements.namedItem("mainNeed") as HTMLSelectElement).value;
    const state = (form.elements.namedItem("state") as HTMLInputElement).value.trim();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!phone || phone.length < 10) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    if (!businessType || !mainNeed || !state) {
      return;
    }

    onSubmit({
      name,
      email,
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

        <div className="p-6 md:p-8">
          <div className="mb-5">
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-2">
              Get Your Lawyer on Call
            </h3>
            <p className="text-slate-600 text-sm">
              Takes under a minute. We'll reach out within 24 hours.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="group">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400"
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
                placeholder="your@email.com"
                onChange={handleEmailChange}
                className={`w-full px-4 py-3 rounded-lg border ${
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
                className="px-4 py-3 bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400"
              />
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                What Type of Business?*
              </label>
              <select
                name="businessType"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base"
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
                <option value="Professional Services">Professional Services (Consulting, Agency)</option>
                <option value="Real Estate">Real Estate</option>
                <option value="SaaS/Tech Startup">SaaS/Tech Startup</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                What Do You Need Most?*
              </label>
              <select
                name="mainNeed"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base"
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
                placeholder="e.g. Florida"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400"
              />
            </div>

            <p className="text-slate-500 text-xs text-center">
              Once you apply, we'll reach out within 24 hours to schedule a brief intro call and see if we're the right fit.
            </p>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-600/25 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span className="tracking-wide">Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              <Lock className="w-3 h-3" />
              <span>Private. Confidential. No obligation.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
