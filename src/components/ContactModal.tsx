import React, { useState } from 'react';
import { X, Send, Lock } from 'lucide-react';
import { PhoneInput } from './ui/phone-input';

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
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();

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

    onSubmit({ name, email, phone });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-800 via-slate-700 to-blue-500 rounded-t-2xl"></div>

        <div className="p-6 md:p-8 pt-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-2">
              Get Started
            </h3>
            <p className="text-slate-600">
              Enter your information and we'll be in touch shortly.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="group">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                required
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
              <span className="tracking-wide">Submit</span>
              <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-4 font-medium uppercase tracking-wider">
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
