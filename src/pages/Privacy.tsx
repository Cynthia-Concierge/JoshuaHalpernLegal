import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-lg mb-12">
              Effective Date: May 22, 2025
            </p>

            <div className="prose prose-slate prose-lg max-w-none space-y-6 text-slate-700 leading-relaxed">
              <p>
                Legal Halp ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (www.legalhalplaw.com).
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                1. Information We Collect
              </h2>
              <p>
                We may collect the following categories of personal information: (i) identifiers (e.g., name, email address, phone number, and IP address); (ii) internet activity (e.g., browsing history, pages visited, and other interaction data collected through cookies and analytics tools); and (iii) other information you provide (e.g., any information you voluntarily submit via contact forms or service inquiries).
              </p>

              <p>
                If you provide your phone number through our website, forms, scheduling tools, or other communication channels, you consent to receive SMS (text) messages from Legal Halp.
              </p>

              <p>These messages may include:</p>

              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Appointment confirmations and reminders</li>
                <li>Updates regarding your inquiry or services</li>
                <li>Account notifications</li>
                <li>Promotional or marketing communications (if you have opted in)</li>
              </ul>

              <p>
                Message frequency varies.<br />
                Message and data rates may apply.
              </p>

              <p>
                You may opt out of receiving SMS messages at any time by replying STOP to any message you receive from us. After you send STOP, we may send you a confirmation message to confirm that you have been unsubscribed. You will no longer receive SMS messages from us unless you opt in again.
              </p>

              <p>
                For assistance, reply HELP or contact us at{" "}
                <a href="mailto:assistant@legalhalp.com" className="text-blue-600 hover:text-blue-500 underline">
                  assistant@legalhalp.com
                </a>
                .
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">
                Mobile Information Sharing
              </h3>
              <p>
                We do not sell, rent, or share your mobile information (including phone numbers) with third parties for marketing or promotional purposes.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Mobile information will not be shared with third parties or affiliates for marketing purposes.</li>
                <li>We may share information with service providers who assist us in delivering messaging services (such as SMS platforms), but only under strict confidentiality agreements and solely for the purpose of operating our services.</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We may use your information to: (i) communicate with you and respond to inquiries; (ii) provide legal content, newsletters, or promotional materials (with your consent); (iii) improve and secure our website; and (iv) comply with applicable laws and regulations.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                3. How We Share Information
              </h2>
              <p>
                We do not sell or rent your personal information. We may share it with: (i) trusted service providers (e.g., web hosting, analytics, marketing tools) under strict confidentiality obligations; and/or (ii) legal authorities, when required by law or to protect our legal rights.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                4. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies for functionality, performance, and analytics. You can control cookie preferences via your browser settings.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                5. Your Privacy Rights (California Residents)
              </h2>
              <p>
                If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li>
                  <strong>Right to Know:</strong> You may request information about the categories and specific pieces of personal information we have collected about you.
                </li>
                <li>
                  <strong>Right to Delete:</strong> You may request that we delete the personal information we have collected from you (subject to certain exceptions).
                </li>
                <li>
                  <strong>Right to Opt Out of Sale:</strong> We do not sell your personal information, so no opt-out is necessary.
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.
                </li>
              </ul>
              <p>
                To exercise your rights, email{" "}
                <a href="mailto:assistant@legalhalp.com" className="text-blue-600 hover:text-blue-500 underline">
                  assistant@legalhalp.com
                </a>
                {" "}with "CCPA Request" in the subject line. We may need to verify your identity before responding.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                6. Data Security
              </h2>
              <p>
                We use reasonable technical and administrative measures to safeguard your data. However, no transmission over the internet is 100% secure.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                7. Children's Privacy
              </h2>
              <p>
                Our website is not intended for children under 18, and we do not knowingly collect information from minors.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                8. Third-Party Links
              </h2>
              <p>
                We may link to other websites. We are not responsible for their privacy practices and encourage you to review their privacy policies.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Policy periodically. The "Effective Date" will reflect the most recent changes. We encourage you to review this page regularly.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                10. Contact Us
              </h2>
              <p>
                For any privacy-related questions or to exercise your rights, email{" "}
                <a href="mailto:assistant@legalhalp.com" className="text-blue-600 hover:text-blue-500 underline">
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
            <img src="/logo.png" alt="Legal Halp" className="h-10 brightness-0 invert opacity-80 mb-1" />
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

export default Privacy;
