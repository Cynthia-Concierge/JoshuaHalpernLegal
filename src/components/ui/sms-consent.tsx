import React from "react";

interface SmsConsentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

export const SmsConsent: React.FC<SmsConsentProps> = ({ checked, onChange, error }) => {
  return (
    <div className="mt-1">
      <p className="text-xs font-semibold text-slate-700 mb-2">Legal Halp — LH Law Holdings LLC</p>
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only peer"
          />
          <div
            className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${
              checked
                ? "bg-slate-900 border-slate-900"
                : error
                ? "border-red-400 bg-red-50"
                : "border-slate-300 bg-white group-hover:border-slate-400"
            }`}
          >
            {checked && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-[11px] text-slate-500 leading-relaxed select-none">
          By submitting this form, you agree to receive SMS messages from
          Legal Halp (LH Law Holdings LLC). Messages may include case updates,
          document requests, reminders, and service notifications. Message
          frequency varies. Message and data rates may apply. Reply STOP to
          opt out or HELP for help.
        </span>
      </label>
      {error && (
        <p className="mt-1.5 ml-8 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
};
