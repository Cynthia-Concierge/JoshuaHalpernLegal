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
  const [formError, setFormError] = useState("");
  const [showDisqualified, setShowDisqualified] = useState(false);

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
    const additionalInfo = (form.elements.namedItem("additionalInfo") as HTMLTextAreaElement).value.trim();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!phone || phone.length < 10) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    if (mainNeed === "__disqualified__") {
      return;
    }

    if (!businessType || !mainNeed) {
      setFormError("Please complete all required fields above.");
      return;
    }
    setFormError("");

    onSubmit({
      name,
      email,
      phone,
      businessType,
      mainNeed,
      additionalInfo,
    } as any);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center px-2 py-2 sm:px-4 sm:py-4 bg-black/60 backdrop-blur-md animate-fade-in overflow-y-auto overscroll-contain"
      onClick={handleBackdropClick}
      style={{
        minHeight: '100dvh',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        className="relative w-full max-w-[390px] sm:max-w-[420px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] animate-scale-in overflow-y-auto overflow-x-hidden"
        style={{
          marginTop: 'max(8px, env(safe-area-inset-top))',
          marginBottom: 'max(8px, env(safe-area-inset-bottom))',
          maxHeight: 'calc(100dvh - max(16px, env(safe-area-inset-top)) - max(16px, env(safe-area-inset-bottom)))',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-1.5 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>

        <div className="p-4 sm:p-8 md:p-10 pb-[max(16px,env(safe-area-inset-bottom))]">
          {/* Header */}
          <div className="mb-5 sm:mb-8">
            <h3 className="text-[20px] sm:text-[22px] leading-tight font-bold text-slate-900 tracking-tight mb-2">
              Stop Paying by the Hour.<br />
              <span className="text-emerald-600">Get Your Business Lawyer on Call.</span>
            </h3>
            <p className="text-slate-400 text-[12px] tracking-wide uppercase font-medium mt-1">
              Takes under a minute
            </p>
            <div className="mt-3 border border-slate-200 rounded-lg px-4 py-3">
              <p className="text-slate-500 text-[12px] leading-relaxed">
                Legal Halp handles business and transactional matters only — formations, contracts, estate planning, real estate, and corporate strategy. We do not handle civil lawsuits, litigation, criminal, family, or personal injury cases.
              </p>
            </div>
          </div>

          <form className="space-y-3.5 sm:space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="group">
              <label className="block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 outline-none transition-all bg-white text-slate-900 text-[15px] placeholder:text-slate-300"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                onChange={handleEmailChange}
                className={`w-full px-4 py-3.5 rounded-xl border ${
                  emailError ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-slate-900"
                } focus:ring-2 focus:ring-slate-900/5 outline-none transition-all bg-white text-slate-900 text-[15px] placeholder:text-slate-300`}
              />
              {emailError && (
                <p className="mt-1.5 text-xs text-red-500">{emailError}</p>
              )}
            </div>

            {/* Phone */}
            <div className="group">
              <label className="block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">
                Best Number to Text You
              </label>
              <PhoneInput
                value={phone}
                onChange={handlePhoneChange}
                error={phoneError}
                className="px-4 py-3.5 bg-white text-slate-900 text-[15px] placeholder:text-slate-300"
              />
            </div>

            {/* Business Type */}
            <div className="group">
              <label className="block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">
                Type of Business
              </label>
              <select
                name="businessType"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 outline-none transition-all bg-white text-slate-900 text-[15px] appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_16px_center] bg-no-repeat"
              >
                <option value="" className="text-slate-400">Select one...</option>
                <option value="Auto/Dealerships">Auto / Dealerships</option>
                <option value="Cleaning/Home Services">Cleaning / Home Services</option>
                <option value="Construction/Trades">Construction / Trades</option>
                <option value="Creative/Media">Creative / Media</option>
                <option value="E-commerce/Retail">E-commerce / Retail</option>
                <option value="Education/Training">Education / Training</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Fitness/Wellness">Fitness / Wellness</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Healthcare/Medical">Healthcare / Medical</option>
                <option value="Hospitality/Hotels">Hospitality / Hotels</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Marketing/Advertising">Marketing / Advertising</option>
                <option value="Nonprofit">Nonprofit</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Real Estate">Real Estate</option>
                <option value="SaaS/Tech Startup">SaaS / Tech</option>
                <option value="Staffing/Recruiting">Staffing / Recruiting</option>
                <option value="Transportation/Logistics">Transportation / Logistics</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Main Need */}
            <div className="group">
              <label className="block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">
                What Do You Need Most?
              </label>
              <select
                name="mainNeed"
                required
                onChange={(e) => setShowDisqualified(e.target.value === "__disqualified__")}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 outline-none transition-all bg-white text-slate-900 text-[15px] appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_16px_center] bg-no-repeat"
              >
                <option value="" className="text-slate-400">Select one...</option>
                <option value="I need ongoing business counsel (monthly retainer)">I need ongoing business counsel (monthly retainer)</option>
                <option value="I have a one-time legal project (LLC, contract, estate plan, etc.)">I have a one-time legal project (e.g., LLC, contract drafting or review, estate plan, business transaction, etc.)</option>
                <option value="I have a business need but I'm not sure which service fits yet">I have a business need but I'm not sure which service fits yet</option>
                <option value="__disqualified__">I have a civil lawsuit, litigation, family, criminal, or personal injury matter</option>
              </select>
              {showDisqualified && (
                <p className="mt-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 leading-relaxed">
                  Legal Halp specializes in business law only. For civil lawsuits, litigation, family, criminal, or personal injury matters, we recommend contacting your state or local bar association's lawyer referral service.
                </p>
              )}
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">
                Anything else? <span className="text-slate-300 font-normal normal-case tracking-normal">(optional)</span>
              </label>
              <textarea
                name="additionalInfo"
                rows={2}
                placeholder="Anything you'd like us to know before our call."
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl text-[15px] focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 outline-none transition-all resize-none placeholder:text-slate-300"
              />
            </div>

            {formError && (
              <p className="text-sm text-red-500 text-center font-medium">{formError}</p>
            )}

            {/* CTA */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={showDisqualified}
                className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 group text-[15px] ${showDisqualified ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
              <Lock className="w-3 h-3" />
              <span>Protected by attorney-client privilege. No obligation.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
