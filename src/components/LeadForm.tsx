import React, { useState } from 'react';
import { Send, Lock, Shield } from 'lucide-react';
import { PhoneInput } from './ui/phone-input';

interface LeadFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    question: string;
  }) => void;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

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
    const question = (formData.get("question") as string).trim();

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

    onSubmit({ name, email, phone, question });
  };

  return (
    <div className="bg-white/90 border border-slate-200 p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl relative overflow-hidden ring-1 ring-slate-900/5" id="enter-your-info-form">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-800 via-slate-700 to-blue-500"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900 font-serif">
            Ask your question now. It's free.
          </h3>
          <Shield className="w-5 h-5 text-blue-500 opacity-60" />
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="group">
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">First Name*</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your first name"
              className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400"
            />
          </div>

          <div className="group">
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">Email*</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              onChange={handleEmailChange}
              className={`w-full px-4 py-3.5 rounded-lg border ${emailError ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-slate-700"
                } focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400`}
            />
            {emailError && (
              <p className="mt-1.5 text-xs text-red-600">{emailError}</p>
            )}
          </div>

          <div className="group">
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">Phone Number*</label>
            <PhoneInput
              value={phone}
              onChange={handlePhoneChange}
              error={phoneError}
              className="px-4 py-3.5 bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400"
            />
          </div>

          <div className="group">
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide group-focus-within:text-slate-900 transition-colors">Your Question*</label>
            <textarea
              name="question"
              required
              rows={4}
              placeholder="Example: Do I need contracts for independent contractors?"
              className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:border-slate-700 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 text-base placeholder:text-slate-400 resize-none"
            />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-slate-900/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group mt-4">
            <span className="tracking-wide">Get My Answer</span>
            <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-4 font-medium uppercase tracking-wider">
            <Lock className="w-3 h-3" />
            <span>Private. Confidential. No obligation.</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
