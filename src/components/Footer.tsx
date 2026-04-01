import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-navy-dark rounded flex items-center justify-center">
              <span className="text-brand-gold font-black text-lg">H</span>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-brand-navy" style={{color: '#4A89C8'}}>LEGAL</span>
              {' '}
              <span className="text-brand-gold">HALP</span>
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8 text-sm">
          <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link>
          <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link to="/payment-policy" className="hover:text-blue-400 transition-colors">Payment &amp; Refund Policy</Link>
        </div>

        <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
          Disclaimer: The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Information on this website may not constitute the most up-to-date legal or other information.
        </p>

        <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
          By providing your phone number, you agree to receive text messages from Legal Halp. Message and data rates may apply. Reply STOP to opt out.
        </p>

        <div className="mt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} Legal Halp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
