import React, { useEffect, useState } from 'react';
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
    additionalInfo?: string;
  }) => void;
}

interface PendingSubmission {
  name: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
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
    const additionalInfo = (form.elements.namedItem("additionalInfo") as HTMLTextAreaElement).value.trim();

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!phone || phone.length < 10) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setPendingSubmission({ name, email, phone, additionalInfo });
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
              Stop Paying by the Hour.<br />
              <span className="text-emerald-600">Get Your Business Lawyer on Call.</span>
            </h3>
            <p className="text-slate-400 text-[12px] tracking-wide uppercase font-medium mt-1">
              Takes under a minute
            </p>
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

            {/* Business Info */}
            <div className="group">
              <label className="block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">
                Tell me about your business and what you need help with
              </label>
              <textarea
                name="additionalInfo"
                required
                minLength={10}
                rows={3}
                placeholder="A sentence or two about your business and your legal needs."
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 outline-none transition-all bg-white text-slate-900 text-[15px] placeholder:text-slate-300 resize-none"
              />
            </div>

            {/* CTA */}
            <div className="pt-1">
              <button
                type="submit"
                className="w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 group text-[15px] bg-slate-900 hover:bg-slate-800 text-white"
              >
                <span>Schedule My Free Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
              <Lock className="w-3 h-3" />
              <span>Protected by attorney-client privilege. No obligation.</span>
            </div>
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

              <div className="mb-6 sm:mb-7">
                <h3 className="text-[20px] sm:text-[22px] leading-tight font-bold text-slate-900 tracking-tight mb-2">
                  One quick thing before we book your call —
                </h3>
                <p className="text-emerald-600 text-[16px] sm:text-[17px] leading-snug font-semibold mt-3">
                  Legal Halp handles business law only.
                </p>
                <p className="text-slate-700 text-[14px] leading-relaxed mt-3">
                  Contracts, formations, employment, real estate, estate planning, and corporate strategy.
                </p>
                <p className="text-slate-700 text-[14px] leading-relaxed mt-3">
                  If you need help with family law, criminal defense, immigration, personal injury, or civil rights — we're not the right fit, but we hope you find the right attorney.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                <button
                  type="button"
                  onClick={handleConfirmSubmit}
                  className="w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 group text-[15px] bg-slate-900 hover:bg-slate-800 text-white"
                >
                  <span>Yes, this is a business matter — Submit</span>
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

              <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                <Lock className="w-3 h-3" />
                <span>Protected by attorney-client privilege. No obligation.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
