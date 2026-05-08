import React, { useState } from 'react';
import { X, Lock, ArrowRight } from 'lucide-react';
import { PhoneInput } from './ui/phone-input';

interface RealEstateContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    mainNeed: string;
  }) => void;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const RealEstateContactModal: React.FC<RealEstateContactModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");
  const [showDisqualified, setShowDisqualified] = useState(false);

  if (!isOpen) return null;

  const handleEmailChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
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
    const mainNeed = (form.elements.namedItem("mainNeed") as HTMLSelectElement).value;

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!phone || phone.length < 10) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    if (mainNeed === "__disqualified__") return;

    if (!mainNeed) {
      setFormError("Please tell us what you need help with.");
      return;
    }
    setFormError("");

    onSubmit({ name, email, phone, mainNeed });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
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
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-1.5 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>

        <div className="p-4 sm:p-8 md:p-10 pb-[max(16px,env(safe-area-inset-bottom))]">
          <div className="mb-5 sm:mb-8">
            <h3 className="text-[20px] sm:text-[22px] leading-tight font-bold text-slate-900 tracking-tight mb-2">
              Real Estate Lawyer For Investors.<br />
              <span className="text-emerald-600">No Hourly Bill.</span>
            </h3>
            <p className="text-slate-400 text-[12px] tracking-wide uppercase font-medium mt-1">
              Takes under a minute
            </p>
            <div className="mt-3 border border-slate-200 rounded-lg px-4 py-3">
              <p className="text-slate-500 text-[12px] leading-relaxed">
                We work with real estate investors nationwide on closings, LLC structuring, vendor recoveries, leases & evictions, and deal structuring. We do not handle civil lawsuits at trial, criminal defense, family law, or personal injury.
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
                placeholder="you@email.com"
                onChange={handleEmailChange}
                className={`w-full px-4 py-3.5 rounded-xl border ${
                  emailError ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-slate-900"
                } focus:ring-2 focus:ring-slate-900/5 outline-none transition-all bg-white text-slate-900 text-[15px] placeholder:text-slate-300`}
              />
              {emailError && <p className="mt-1.5 text-xs text-red-500">{emailError}</p>}
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

            {/* Main Need (real-estate specific) */}
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
                <option value="Closing review (courthouse, tax sale, probate, REO)">Closing review — courthouse / tax sale / probate / REO</option>
                <option value="LLC structuring or asset protection">LLC structuring or asset protection</option>
                <option value="Vendor or property manager overcharge — recovery">Vendor or property manager is overcharging me — recovery</option>
                <option value="Lease drafting or eviction support">Lease drafting or eviction support</option>
                <option value="Deal structuring (subject-to, seller finance, JV)">Deal structuring (subject-to, seller finance, JV / partnership)</option>
                <option value="Ongoing legal counsel for my portfolio">Ongoing legal counsel for my whole portfolio</option>
                <option value="Something else (real estate)">Something else real-estate-related</option>
                <option value="__disqualified__">I have a civil lawsuit, litigation, family, criminal, or personal injury matter</option>
              </select>
              {showDisqualified && (
                <p className="mt-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 leading-relaxed">
                  Legal Halp specializes in real estate, business, and transactional law. For civil lawsuits, litigation, family, criminal, or personal injury matters, we recommend contacting your state or local bar association's lawyer referral service.
                </p>
              )}
            </div>

            {formError && (
              <p className="text-sm text-red-500 text-center font-medium">{formError}</p>
            )}

            {/* CTA */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={showDisqualified}
                className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 group text-[15px] ${
                  showDisqualified
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
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

export default RealEstateContactModal;
