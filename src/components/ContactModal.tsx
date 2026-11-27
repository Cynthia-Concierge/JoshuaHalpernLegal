import React, { useEffect, useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { X, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { PhoneInput } from './ui/phone-input';
import { FORM_SUBMIT_URL } from '@/config';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    businessType?: string;
    state?: string;
    additionalInfo?: string;
  }) => void;
}

interface PendingSubmission {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  state: string;
  additionalInfo: string;
}

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
  "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

const REVENUE_OPTIONS = ["Under $250K", "$250K to $1M", "$1M to $5M", "$5M+"];

const NOT_HANDLED = [
  "Lawsuits & litigation",
  "Court appearances",
  "Criminal defense",
  "Family law & divorce",
  "Personal injury",
  "Immigration",
];

const LABEL = "block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-widest";
const INPUT = "w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 outline-none transition-all bg-white text-slate-900 text-[15px] placeholder:text-slate-300";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Disclaimer = () => (
  <div className="text-center space-y-1">
    <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
      <Lock className="w-3 h-3" />
      <span>Confidential. No obligation.</span>
    </div>
    <p className="text-[10px] text-slate-400 leading-snug">
      Submitting this form does not create an attorney-client relationship.
    </p>
  </div>
);

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [revenue, setRevenue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [revenueError, setRevenueError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingSubmission, setPendingSubmission] = useState<PendingSubmission | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setShowConfirmation(false);
      setPendingSubmission(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleEmailChange = () => {
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
    const state = (form.elements.namedItem("state") as HTMLSelectElement).value;
    const additionalInfo = (form.elements.namedItem("additionalInfo") as HTMLTextAreaElement).value.trim();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // A real, complete number is required: follow-up texts cannot reach a mistyped one.
    if (!phone || !(isValidPhoneNumber(phone, 'US') || isValidPhoneNumber(phone.replace(/^\+/, ''), 'US'))) {
      setPhoneError("Please enter a valid phone number, including area code.");
      return;
    }

    if (!revenue) {
      setRevenueError("Please choose your company's annual revenue.");
      return;
    }

    setPendingSubmission({
      name,
      email,
      phone,
      businessType: `Annual revenue: ${revenue}`,
      state,
      additionalInfo,
    });
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    if (pendingSubmission) {
      onSubmit(pendingSubmission);
    }
  };

  const handleBackToForm = () => {
    setShowConfirmation(false);
  };

  const handleNotForMe = () => {
    setShowConfirmation(false);
    setPendingSubmission(null);
    onClose();
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
          {/* Form view (kept mounted while confirming so inputs persist) */}
          <div className={showConfirmation ? "hidden" : ""}>
          {/* Header */}
          <div className="mb-5 sm:mb-8">
            <h3 className="text-[20px] sm:text-[22px] leading-tight font-bold text-slate-900 tracking-tight mb-2">
              Put a General Counsel<br />
              <span className="text-blue-600">Inside Your Business.</span>
            </h3>
            <p className="text-slate-400 text-[12px] tracking-wide uppercase font-medium mt-1">
              Takes under a minute
            </p>
          </div>

          <form className="space-y-3.5 sm:space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="group">
              <label className={LABEL}>Full Name</label>
              <input type="text" name="name" required placeholder="Your full name" className={INPUT} />
            </div>

            {/* Email */}
            <div className="group">
              <label className={LABEL}>Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                onChange={handleEmailChange}
                className={`${INPUT} ${emailError ? "border-red-400 focus:border-red-400" : ""}`}
              />
              {emailError && (
                <p className="mt-1.5 text-xs text-red-500">{emailError}</p>
              )}
            </div>

            {/* Phone */}
            <div className="group">
              <label className={LABEL}>Best Number to Text You</label>
              <PhoneInput
                value={phone}
                onChange={handlePhoneChange}
                error={phoneError}
                className="px-4 py-3.5 bg-white text-slate-900 text-[15px] placeholder:text-slate-300"
              />
            </div>

            {/* State */}
            <div className="group">
              <label className={LABEL}>State Your Business Is Based In</label>
              <select name="state" required defaultValue="" className={`${INPUT} appearance-none`}>
                <option value="" disabled>Select a state</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Annual revenue */}
            <div className="group">
              <label className={LABEL}>Company Annual Revenue</label>
              <div className="grid grid-cols-2 gap-2">
                {REVENUE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => { setRevenue(option); setRevenueError(""); }}
                    className={`py-3 px-3 rounded-xl border text-[14px] font-semibold transition-all ${
                      revenue === option
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {revenueError && (
                <p className="mt-1.5 text-xs text-red-500">{revenueError}</p>
              )}
            </div>

            {/* Business Info */}
            <div className="group">
              <label className={LABEL}>Tell me about your company and what you need covered</label>
              <textarea
                name="additionalInfo"
                required
                minLength={10}
                rows={3}
                placeholder="Your business, your entities, and what's on your plate (deals, contracts, governance)."
                className={`${INPUT} resize-none`}
              />
            </div>

            {/* CTA */}
            <div className="pt-1">
              <button
                type="submit"
                className="w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 group text-[15px] bg-slate-900 hover:bg-slate-800 text-white"
              >
                <span>Request My Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <Disclaimer />
          </form>
          </div>

          {/* Confirmation view */}
          {showConfirmation && (
            <div>
              <button
                type="button"
                onClick={handleBackToForm}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-500 hover:text-slate-900 transition-colors mb-5 sm:mb-6"
                aria-label="Back to form"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <h3 className="text-[20px] sm:text-[22px] leading-tight font-bold text-slate-900 tracking-tight mb-5 text-center">
                Before we book your call
              </h3>

              {/* What we handle */}
              <div className="mb-5 text-center">
                <p className="text-slate-900 uppercase tracking-[0.15em] text-[11px] font-bold mb-2">
                  What we handle
                </p>
                <p className="text-slate-600 text-[14px] leading-relaxed">
                  Ongoing outside general counsel for your business: deals, contracts, governance, real estate, and strategy.
                </p>
              </div>

              {/* What we don't handle */}
              <div className="mb-5 text-center">
                <p className="text-slate-900 uppercase tracking-[0.15em] text-[11px] font-bold mb-2">
                  What we don't handle
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 w-fit mx-auto text-left">
                  {NOT_HANDLED.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-slate-600">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6 sm:mb-7 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-center">
                <p className="text-slate-900 uppercase tracking-[0.15em] text-[11px] font-bold mb-1">
                  Pricing
                </p>
                <p className="text-slate-700 text-[14px] leading-relaxed">
                  Monthly plans start at <span className="font-semibold text-slate-900">$2,500/mo</span>. Flat fee, no hourly billing.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                <button
                  type="button"
                  onClick={handleConfirmSubmit}
                  className="w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 group text-[15px] bg-slate-900 hover:bg-slate-800 text-white"
                >
                  <span>Yes, this is a business matter. Submit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={handleNotForMe}
                  className="w-full text-center text-slate-400 hover:text-slate-600 text-[13px] font-medium py-2 transition-colors"
                >
                  This isn't for me
                </button>
              </div>

              <div className="mt-5">
                <Disclaimer />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
