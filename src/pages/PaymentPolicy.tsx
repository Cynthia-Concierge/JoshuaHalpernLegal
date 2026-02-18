import { Link } from "react-router-dom";

const PaymentPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
              Payment &amp; Refund Policy
            </h1>
            <p className="text-slate-500 text-lg mb-12">
              Effective Date: May 22, 2025
            </p>

            <div className="prose prose-slate prose-lg max-w-none space-y-6 text-slate-700 leading-relaxed">
              <p>
                Legal Halp ("we," "us," or "our") is committed to transparency in how we price, bill, and handle payments for our legal services. This Payment &amp; Refund Policy outlines the terms that apply when you purchase legal services or products through our website (www.legalhalplaw.com) or through direct engagement with our firm.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                1. Flat-Fee Pricing
              </h2>
              <p>
                Legal Halp operates on a flat-fee model. The cost of each service or legal package is clearly stated on our website or provided in writing before any engagement begins. There are no hidden fees, hourly billing surprises, or retainer requirements unless explicitly agreed upon in a signed engagement agreement.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                2. Payment Methods
              </h2>
              <p>
                We accept payments via credit card, debit card, and ACH bank transfer through our secure payment processor (Stripe). All transactions are encrypted and processed in accordance with industry-standard security protocols. We do not store your full payment details on our servers.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                3. When Payment Is Due
              </h2>
              <p>
                Full payment is required before work begins unless otherwise specified in a written engagement agreement. For certain multi-phase projects, a payment schedule may be arranged at our discretion and confirmed in writing prior to commencement.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                4. Refund Policy
              </h2>
              <p>
                Because legal services require significant time, expertise, and preparation, refunds are handled as follows:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li>
                  <strong>Before work begins:</strong> If you cancel your engagement before any substantive legal work has been performed and before any documents or materials have been delivered, you may request a full refund. Refund requests must be submitted in writing to{" "}
                  <a href="mailto:assistant@legalhalp.com" className="text-blue-600 hover:text-blue-500 underline">
                    assistant@legalhalp.com
                  </a>
                  .
                </li>
                <li>
                  <strong>After work has begun:</strong> Once substantive legal work has commenced, including but not limited to research, drafting, filing, or consultation, payments are non-refundable. This applies regardless of whether final deliverables have been provided.
                </li>
                <li>
                  <strong>Digital products and templates:</strong> All sales of downloadable legal templates, guides, and digital materials are final and non-refundable once the product has been delivered or access has been granted.
                </li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                5. Scope of Services
              </h2>
              <p>
                Each flat-fee engagement covers a clearly defined scope of work as outlined in your engagement agreement. Work that falls outside the original scope may require an additional fee, which will be discussed and agreed upon in writing before any additional work is performed.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                6. Disputed Charges
              </h2>
              <p>
                If you believe a charge was made in error or have a billing concern, please contact us at{" "}
                <a href="mailto:assistant@legalhalp.com" className="text-blue-600 hover:text-blue-500 underline">
                  assistant@legalhalp.com
                </a>
                {" "}within 30 days of the transaction. We will review the matter promptly and work with you to resolve it in good faith.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                7. Late Payments
              </h2>
              <p>
                For engagements with payment schedules, payments are expected on or before the agreed-upon due dates. Legal Halp reserves the right to pause or suspend work on any matter for which payment is overdue until the outstanding balance is resolved.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We reserve the right to update or modify this Payment &amp; Refund Policy at any time. Any changes will be posted on this page with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the revised policy.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about payments, billing, or refunds, please contact{" "}
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

export default PaymentPolicy;
