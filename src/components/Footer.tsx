import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="Legal Halp" className="h-10" />
        </div>
        
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link>
          <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link to="/payment-policy" className="hover:text-blue-400 transition-colors">Payment &amp; Refund Policy</Link>
        </div>

        <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
          Disclaimer: The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Information on this website may not constitute the most up-to-date legal or other information.
        </p>

        <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
          By providing your phone number, you agree to receive text messages from Legal Halp Law. Message and data rates may apply. Reply STOP to opt out.
        </p>
        
        <div className="mt-8 text-xs text-slate-700">
          © {new Date().getFullYear()} Halpern Legal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
