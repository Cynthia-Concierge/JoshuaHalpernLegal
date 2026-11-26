import { Link } from "react-router-dom";
import LegalPageLayout, { H2, UL, Email, ContactBlock } from "@/components/LegalPageLayout";

const PaymentPolicy = () => {
  return (
    <LegalPageLayout title="Payment & Refund Policy" effectiveDate="November 22, 2026">
      <p>
        This Payment &amp; Refund Policy explains how LH Law Holdings LLC d/b/a Legal Halp ("Legal Halp,"
        "we," "us," or "our") prices, bills, and refunds legal services. Your signed engagement agreement
        sets the specific fee, scope, and payment terms for your matter. If your engagement agreement
        differs from this Policy, the engagement agreement controls. Nothing in this Policy limits any
        right you have under the Ohio Rules of Professional Conduct.
      </p>

      <H2>1. How We Charge</H2>
      <p>We do not bill by the hour. Our work is offered in two ways:</p>
      <UL>
        <li>
          <span className="font-semibold text-slate-900">Monthly plans.</span> A fixed monthly fee for
          ongoing outside general counsel services within an agreed scope. The fee is set during your
          consultation based on your company's structure and needs.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Fixed-fee project work.</span> A single fee for a
          defined project, quoted in writing before any work begins.
        </li>
      </UL>
      <p>
        Pricing shown on the Site is a general guide only and is not an offer. Your fee is the amount
        stated in your signed engagement agreement. Paying an invoice or payment link does not by itself
        create an attorney-client relationship; the signed engagement agreement does.
      </p>

      <H2>2. Scope and Additional Work</H2>
      <p>
        Each engagement covers only the scope described in your engagement agreement. If you ask for work
        outside that scope, such as a major acquisition, sale, financing, mediation, or work for a related
        person or entity, we will tell you before starting and agree on any additional fee in writing. We
        will not charge you for out-of-scope work you have not approved.
      </p>

      <H2>3. Third-Party Costs</H2>
      <p>
        Government filing fees, registered agent fees, recording fees, lien and title searches, courier
        charges, local counsel fees, and other third-party costs are not included in our fees unless your
        engagement agreement says otherwise. We will identify these costs in advance whenever possible.
      </p>

      <H2>4. Payment Methods and Timing</H2>
      <UL>
        <li>
          We accept credit cards, debit cards, and ACH bank transfers through our payment processor,
          Stripe. We may accept other methods as stated in your engagement agreement.
        </li>
        <li>Payments are processed over encrypted connections, and we do not store full card or bank account numbers.</li>
        <li>
          Fixed-fee project work is paid as stated in your engagement agreement, which may require payment
          in full or a deposit before work begins.
        </li>
        <li>
          Advance payments are handled as required by the Ohio Rules of Professional Conduct, including the
          rules governing client trust accounts.
        </li>
        <li>
          We do not accept or hold escrow, earnest money, purchase price, or other transaction funds on
          behalf of clients or third parties. Payments to Legal Halp are for our fees and approved costs
          only.
        </li>
        <li>
          If someone other than the client pays our fees, the client remains our only client, and we will
          follow the client's instructions and protect the client's confidential information as the
          professional rules require.
        </li>
      </UL>

      <H2>5. Monthly Plans: Recurring Billing and Cancellation</H2>
      <UL>
        <li>Monthly plans are billed monthly, in advance, on your billing date, starting when your engagement agreement is signed.</li>
        <li>
          If you pay by card or ACH on file, you authorize Legal Halp to charge that payment method
          automatically each month until the monthly plan is canceled.
        </li>
        <li>Monthly plans are month-to-month. There is no long-term commitment and no cancellation fee.</li>
        <li>
          You may cancel at any time by giving 30 days written notice by email to <Email />. Service
          continues, and billing applies, through the end of the notice period.
        </li>
        <li>We will give you advance written notice of any change to your monthly fee.</li>
      </UL>

      <H2>6. Refunds</H2>
      <p>Our refund practices follow the Ohio Rules of Professional Conduct.</p>
      <UL>
        <li>
          If you cancel a fixed-fee project before substantive work begins, you will receive a full refund
          of any amount paid, less any third-party costs already incurred on your behalf.
        </li>
        <li>
          Even if a fee is described as earned upon receipt or nonrefundable, you may be entitled to a
          refund of all or part of the fee if we do not complete the representation, whether because you
          end it or because we withdraw. Any refund is based on the value of the work performed up to that
          point.
        </li>
        <li>
          For monthly plans, any prepaid portion that has not been earned when the engagement ends will
          be refunded as required by the professional rules.
        </li>
        <li>
          Fees for work that has been completed and delivered are earned and are not refundable, except as
          required by law or the professional rules. Dissatisfaction with a result outside our control,
          such as a government agency's decision or a counterparty's choices, is not by itself a basis for
          a refund.
        </li>
      </UL>
      <p>
        To request a refund, email <Email /> with your name, the matter, and the reason for your request.
        We will respond within 10 business days, and approved refunds are returned to the original payment
        method.
      </p>

      <H2>7. Late or Failed Payments</H2>
      <p>
        If a payment is late or fails, we will contact you to resolve it. If a balance remains unpaid, we
        may pause non-urgent work or, after reasonable written notice, end the engagement. Any pause or
        withdrawal will be handled consistent with our professional obligations, including taking
        reasonable steps to protect your interests.
      </p>

      <H2>8. Billing Questions and Disputes</H2>
      <p>
        If you believe a charge is incorrect, email <Email /> within 60 days of the charge. We will review
        it promptly and work with you in good faith. Please contact us before disputing a charge with your
        card issuer or bank, since most issues can be resolved quickly and directly. If a charge is disputed
        with your card issuer or bank, we may pause work on the matter while the dispute is pending, and we
        may provide the processor with the engagement agreement and records needed to respond, limited to
        what is reasonably necessary. Fee disputes that cannot be resolved between us may be submitted to
        a bar association fee dispute resolution program.
      </p>

      <H2>9. Changes to This Policy</H2>
      <p>
        We may update this Policy from time to time. The updated version will be posted on this page with a
        new effective date. Changes do not affect the terms of an engagement agreement already in effect
        unless you agree in writing.
      </p>

      <H2>10. Contact</H2>
      <p>
        Questions about payments, billing, or refunds can be sent to the contact below. See also our{" "}
        <Link to="/terms" className="text-blue-600 hover:text-blue-500 underline">Terms &amp; Conditions</Link>{" "}
        and <Link to="/privacy" className="text-blue-600 hover:text-blue-500 underline">Privacy Policy</Link>.
      </p>
      <ContactBlock />
    </LegalPageLayout>
  );
};

export default PaymentPolicy;
