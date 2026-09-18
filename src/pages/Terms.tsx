import { Link } from "react-router-dom";
import LegalPageLayout, { H2, H3, UL, Email, ContactBlock } from "@/components/LegalPageLayout";

const Terms = () => {
  return (
    <LegalPageLayout title="Terms & Conditions" effectiveDate="September 18, 2026">
      <p>
        These Terms &amp; Conditions ("Terms") govern your access to and use of legalhalplaw.com and any
        related pages, forms, scheduling tools, and communications (together, the "Site") operated by
        Legal Halp ("Legal Halp," "we," "us," or "our"). By using the Site, you agree to these Terms,
        our <Link to="/privacy" className="text-blue-600 hover:text-blue-500 underline">Privacy Policy</Link>,
        and our <Link to="/payment-policy" className="text-blue-600 hover:text-blue-500 underline">Payment &amp; Refund Policy</Link>.
        If you do not agree, please do not use the Site.
      </p>

      <H2>1. Attorney Advertising</H2>
      <p>
        This Site may be considered attorney advertising under the rules of professional conduct that
        apply to lawyers. Descriptions of prior matters, testimonials, and client statements relate to
        specific facts and circumstances. Prior results do not guarantee a similar outcome, and every
        matter is different.
      </p>

      <H2>2. Licensure and Scope of Practice</H2>
      <p>
        Joshua Halpern is licensed to practice law in the State of Ohio only. Legal Halp provides
        corporate, transactional, and business counsel. We do not handle litigation, court appearances,
        criminal defense, family law, personal injury, or immigration matters. Where a matter requires a
        lawyer admitted in another jurisdiction, or requires litigation counsel, we may recommend that
        you engage separate counsel. Any referral is made for your convenience, and that counsel will be
        engaged directly by you.
      </p>

      <H2>3. No Attorney-Client Relationship</H2>
      <p>
        Using the Site, submitting a form, sending an email or text, booking a call, or speaking with us
        in a consultation does not create an attorney-client relationship. An attorney-client
        relationship begins only when (i) we have completed a conflict check, (ii) you and Legal Halp
        have both signed a written engagement agreement, and (iii) any initial payment required by that
        agreement has been received. The engagement agreement defines the scope of our representation
        and controls over anything on the Site.
      </p>

      <H2>4. Do Not Send Confidential Information Before Engagement</H2>
      <p>
        Until an engagement agreement is signed, please do not send us confidential or time-sensitive
        information. Information you send before we agree to represent you may not be treated as
        privileged or confidential, and it may not prevent us from representing another party in the
        same or a related matter. Do not rely on us to meet any deadline unless we have agreed in
        writing to represent you.
      </p>

      <H2>5. No Legal Advice</H2>
      <p>
        Content on the Site, including articles, videos, FAQs, pricing descriptions, and social media
        posts, is general information only. It is not legal advice and may not reflect the most current
        law or apply to your situation. Do not act or refrain from acting based on Site content without
        advice from a qualified lawyer about your specific facts.
      </p>

      <H2>6. Pricing and Services</H2>
      <p>
        Retainer pricing and service descriptions on the Site are general and may change at any time
        without notice. Your actual fee and scope of work are set in your written engagement agreement.
        Fees, billing, cancellation, and refunds are governed by your engagement agreement and our{" "}
        <Link to="/payment-policy" className="text-blue-600 hover:text-blue-500 underline">Payment &amp; Refund Policy</Link>.
      </p>

      <H2>7. Acceptable Use</H2>
      <p>You agree not to:</p>
      <UL>
        <li>use the Site for any unlawful, fraudulent, or harassing purpose;</li>
        <li>submit false information or impersonate any person or business;</li>
        <li>send spam, malware, or unsolicited commercial messages through the Site;</li>
        <li>scrape, copy, or harvest Site content or data by automated means, including to train artificial intelligence models, without our written permission;</li>
        <li>interfere with the security, integrity, or performance of the Site.</li>
      </UL>

      <H2>8. Text Message (SMS) Program</H2>
      <p>
        By providing your mobile number through a form on the Site, including by checking an SMS consent
        box where one is shown, you agree to receive text messages from Legal Halp about your inquiry,
        consultation scheduling,
        appointment reminders, document requests, and service updates. If you separately opt in to
        marketing messages, we may also send occasional updates about our services.
      </p>
      <UL>
        <li>Consent to receive text messages is not a condition of purchasing any service.</li>
        <li>Message frequency varies based on your inquiry or engagement.</li>
        <li>Message and data rates may apply.</li>
        <li>Reply <span className="font-semibold">STOP</span> to cancel at any time. You may receive one final message confirming your opt-out.</li>
        <li>Reply <span className="font-semibold">HELP</span> for help, or email <Email />.</li>
        <li>Mobile carriers are not liable for delayed or undelivered messages.</li>
        <li>You must be at least 18 years old and the account holder or authorized user of the mobile number.</li>
      </UL>
      <p>
        Text messages are not a secure channel. Please do not send confidential details, account
        numbers, or sensitive documents by text. For how we handle mobile information, see the SMS
        section of our <Link to="/privacy" className="text-blue-600 hover:text-blue-500 underline">Privacy Policy</Link>.
      </p>

      <H2>9. Intellectual Property</H2>
      <p>
        The Site and its content, including text, graphics, logos, videos, and design, are owned by or
        licensed to Legal Halp and are protected by copyright, trademark, and other laws. You may view
        and print Site content for your personal, non-commercial use. Any other use requires our prior
        written permission. Documents we prepare for clients are governed by the applicable engagement
        agreement.
      </p>

      <H2>10. Third-Party Services and Links</H2>
      <p>
        The Site uses or links to third-party services, such as scheduling, payment processing, video
        hosting, and social media platforms. Those services are governed by their own terms and privacy
        policies. We are not responsible for their content, availability, or practices.
      </p>

      <H2>11. Disclaimer of Warranties</H2>
      <p>
        The Site is provided "as is" and "as available." To the fullest extent permitted by law, we
        disclaim all warranties, express or implied, including warranties of merchantability, fitness
        for a particular purpose, accuracy, and non-infringement. We do not warrant that the Site will
        be uninterrupted, error-free, or free of harmful components.
      </p>

      <H2>12. Limitation of Liability</H2>
      <p>
        To the fullest extent permitted by law, Legal Halp will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for lost profits or data, arising
        from your use of or reliance on the Site. This section applies to your use of the Site only.
        Legal services we provide to clients are governed by the applicable engagement agreement and the
        Ohio Rules of Professional Conduct, and nothing in these Terms limits any liability that cannot
        be limited under applicable law or those rules.
      </p>

      <H2>13. Indemnification</H2>
      <p>
        You agree to indemnify and hold harmless Legal Halp and its attorneys, staff, and contractors
        from any claims, losses, and expenses, including reasonable attorneys' fees, arising from your
        misuse of the Site or your violation of these Terms.
      </p>

      <H2>14. Governing Law and Venue</H2>
      <p>
        These Terms are governed by the laws of the State of Ohio, without regard to its conflict of law
        principles. Any dispute arising from these Terms or your use of the Site will be brought
        exclusively in the state or federal courts located in Cuyahoga County, Ohio, and you consent to
        the personal jurisdiction of those courts.
      </p>

      <H2>15. General</H2>
      <H3>Changes</H3>
      <p>
        We may update these Terms from time to time. The updated version will be posted on this page
        with a new effective date. Your continued use of the Site after an update means you accept the
        revised Terms.
      </p>
      <H3>Severability and Waiver</H3>
      <p>
        If any provision of these Terms is found unenforceable, the remaining provisions remain in
        effect. Our failure to enforce any provision is not a waiver of it.
      </p>
      <H3>Entire Agreement</H3>
      <p>
        These Terms, together with our Privacy Policy and Payment &amp; Refund Policy, are the entire
        agreement between you and Legal Halp regarding your use of the Site. If you are a client, your
        engagement agreement controls in the event of any conflict.
      </p>

      <H2>16. Contact</H2>
      <p>Questions about these Terms can be sent to:</p>
      <ContactBlock />
    </LegalPageLayout>
  );
};

export default Terms;
