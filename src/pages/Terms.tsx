import { Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-500 text-lg mb-12">
              Effective Date: May 22, 2025
            </p>

            <div className="prose prose-slate prose-lg max-w-none space-y-6 text-slate-700 leading-relaxed">
              <p>
                Welcome to Legal Halp ("Legal Halp", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website located at www.legalhalplaw.com (the "Site") and any services or products offered through the Site.
              </p>

              <p>
                By accessing or using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use the Site.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                1. No Attorney-Client Relationship
              </h2>
              <p>
                Your use of this Site, including contacting Legal Halp through forms, emails, social media, or downloading materials, does not create an attorney-client relationship. An attorney-client relationship is only established after: (i) a formal engagement agreement is signed by both parties; and (ii) any required flat fee payment has been received.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                2. Legal Services Disclaimer
              </h2>
              <p>
                Information provided on this Site, including blog posts, videos, downloadable materials, and social media content, is for general informational purposes only. It is not legal advice and should not be relied upon as a substitute for speaking with a licensed attorney about your specific legal needs.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                3. Use of the Site
              </h2>
              <p>
                You agree to use the Site only for lawful purposes. You may not: (i) use the Site to transmit any unauthorized or unsolicited content or spam; (ii) copy, reproduce, or redistribute content from the Site without express written permission; (iii) attempt to interfere with the security or functionality of the Site; and (iv) misrepresent your identity or impersonate any person or entity.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                4. Fees and Payments
              </h2>
              <p>
                Legal Halp offers flat-fee legal services, which are clearly stated on the Site or in writing prior to engagement. By purchasing a legal package, you agree to the scope of services provided. Unless otherwise stated in writing, all payments are non-refundable once work begins or digital materials have been delivered.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content on this Site, including but not limited to text, videos, logos, graphics, and legal templates, is the intellectual property of Legal Halp and is protected by copyright, trademark, and other applicable laws. Unauthorized use or reproduction of this content is strictly prohibited.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                6. Third-Party Services
              </h2>
              <p>
                Our Site may link to or integrate with third-party platforms (e.g., Stripe, Wix, Calendly, Instagram). We are not responsible for the content, security, or privacy practices of these external sites. Use them at your own discretion.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Legal Halp shall not be liable for any direct, indirect, incidental, or consequential damages arising from or related to your use of the Site or reliance on any content provided herein. This includes but is not limited to loss of data, loss of profits, or claims of third parties.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Legal Halp and its attorneys, employees, and affiliates from any claims, liabilities, damages, and expenses (including reasonable attorneys' fees) arising from your use or misuse of the Site or your violation of these Terms.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                9. Jurisdiction and Governing Law
              </h2>
              <p>
                These Terms shall be governed by the laws of the State of Ohio, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the state and federal courts located in Cuyahoga County, Ohio for any dispute arising from these Terms.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                10. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact{" "}
                <a
                  href="mailto:assistant@legalhalp.com"
                  className="text-blue-600 hover:text-blue-500 underline"
                >
                  assistant@legalhalp.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-6">
            <Scale className="w-8 h-8 text-slate-600 mb-2" />
            <span className="text-lg font-serif text-slate-300 tracking-widest uppercase">
              Legal Halp
            </span>
            <p className="text-sm text-slate-500 mt-1">
              by Joshua Halpern, Esq.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/payment-policy" className="hover:text-blue-400 transition-colors">Payment &amp; Refund Policy</Link>
          </div>

          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Disclaimer: The information provided on this website does not, and is
            not intended to, constitute legal advice; instead, all information,
            content, and materials available on this site are for general
            informational purposes only.
          </p>

          <div className="text-xs text-slate-700">
            &copy; {new Date().getFullYear()} Legal Halp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
