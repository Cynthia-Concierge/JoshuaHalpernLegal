import React from 'react';
import { Scale } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-8">
          <Scale className="w-8 h-8 text-slate-600 mb-2" />
          <span className="text-lg font-serif text-slate-300 tracking-widest uppercase">Halpern Legal</span>
        </div>
        
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a 
            href="#" 
            className="hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="hover:text-blue-400 transition-colors"
          >
            Terms of Service
          </a>
        </div>

        <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Disclaimer: The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Information on this website may not constitute the most up-to-date legal or other information.
        </p>
        
        <div className="mt-8 text-xs text-slate-700">
          © {new Date().getFullYear()} Halpern Legal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
