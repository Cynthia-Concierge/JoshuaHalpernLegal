import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LegalPageLayout, { H2, H3, UL, Email, ContactBlock } from "@/components/LegalPageLayout";

const A = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="text-blue-600 hover:text-blue-500 underline">
    {children}
  </Link>
);

const Terms = () => {
  return (
    <LegalPageLayout title="Terms & Conditions" effectiveDate="November 22, 2026">
      <p>
        These Terms &amp; Conditions ("Terms") govern your access to and use of legalhalplaw.com and any
        related pages, forms, scheduling tools, automated assistants, text messages, and other
        communications (together, the "Site") operated by LH Law Holdings LLC d/b/a Legal Halp ("Legal
        Halp," "we," "us," or "our"). By using the Site, you agree to these Terms, our{" "}
        <A to="/privacy">Privacy Policy</A>, our <A to="/payment-policy">Payment &amp; Refund Policy</A>,
        and our <A to="/accessibility">Accessibility Statement</A>. If you do not agree, do not use the
        Site.
      </p>

      <H2>1. Attorney Advertising</H2>
      <p>
        This Site is attorney advertising. The attorney responsible for its content is Joshua B. Halpern,
        Esq., LH Law Holdings LLC d/b/a Legal Halp, reachable at the contact information in Section 21.
        Legal Halp is a trade name of LH Law Holdings LLC.
      </p>
      <UL>
        <li>
          Descriptions of prior matters, transaction values, client counts, testimonials, and client
          statements relate to specific facts and circumstances. They are not a promise or prediction of
          the outcome of any other matter. Prior results do not guarantee a similar outcome.
        </li>
        <li>
          Statistics such as transaction values and numbers of clients or documents are approximate and
          cumulative over Mr. Halpern's career. They include matters handled while at prior law firms and
          matters on which he worked as part of a larger team.
        </li>
        <li>
          Testimonials reflect the individual views of the people who gave them and are not
          representative of every client's experience.
        </li>
        <li>
          No attorney at Legal Halp is certified as a specialist in any area of law by the Supreme Court
          of Ohio, any state bar, or any certifying organization. Descriptions of the types of matters we
          handle are not claims of specialization.
        </li>
      </UL>

      <H2>2. Licensure and Scope of Practice</H2>
      <p>
        Joshua B. Halpern is licensed to practice law in the State of Ohio only. He is not admitted to
        practice law in Florida or in any other state or jurisdiction, and nothing on the Site is intended
        to suggest otherwise. Legal Halp does not hold itself out as practicing the law of any
        jurisdiction where its attorneys are not admitted.
      </p>
      <p>
        Legal Halp provides business, corporate, and transactional counsel. Where a client's matter
        involves the law of another jurisdiction, we act only as permitted by Ohio Prof.Cond.R. 5.5 and
        the rules of that jurisdiction. That may include matters governed by federal law, matters
        reasonably related to our Ohio practice, or matters handled in association with lawyers licensed
        in that jurisdiction. If a matter requires a locally licensed lawyer, we will tell you, and that
        lawyer will be engaged directly by you.
      </p>
      <p>We do not handle, and the Site does not offer:</p>
      <UL>
        <li>litigation, court appearances, or arbitration hearings;</li>
        <li>criminal, family, personal injury, immigration, or bankruptcy matters;</li>
        <li>mediation, unless separately agreed in writing;</li>
        <li>preparing or recording deeds, or acting as a title, closing, or escrow agent;</li>
        <li>holding escrow or transaction funds on behalf of clients or third parties;</li>
        <li>tax return preparation, accounting, or investment, insurance, or financial advice.</li>
      </UL>

      <H2>3. No Attorney-Client Relationship</H2>
      <p>
        Using the Site, submitting a form, sending an email or text, speaking with our automated
        assistant, booking a call, or speaking with us in a consultation does not create an
        attorney-client relationship. An attorney-client relationship begins only when (i) we have
        completed a conflict check, (ii) you and Legal Halp have both signed a written engagement
        agreement, and (iii) any initial payment required by that agreement has been received. We may
        decline any matter for any lawful reason. The engagement agreement defines the scope of our
        representation and controls over anything on the Site.
      </p>

      <H2>4. Do Not Send Confidential Information Before Engagement</H2>
      <p>
        Until an engagement agreement is signed, do not send us confidential, privileged, or
        time-sensitive information. Information you send before we agree to represent you may not be
        treated as confidential and may not prevent us from representing another party in the same or a
        related matter. We are not responsible for any deadline, filing date, or statute of limitations
        unless we have agreed in a signed engagement agreement to handle that matter.
      </p>

      <H2>5. No Legal Advice</H2>
      <p>
        Content on the Site, including articles, videos, FAQs, pricing descriptions, and our social media
        posts, is general information only. It is not legal advice, may not reflect the most current law,
        and may not apply to your situation or jurisdiction. Do not act or refrain from acting based on
        Site content without advice from a lawyer licensed in your jurisdiction about your specific facts.
      </p>

      <H2>6. Automated Assistant and Technology Tools</H2>
      <p>
        Some calls, emails, chats, and texts may be answered or handled by an automated assistant that
        uses artificial intelligence to help with scheduling, intake, and general questions. The automated
        assistant is not a lawyer and does not give legal advice. Its responses may be incomplete or
        inaccurate. Nothing it says creates an attorney-client relationship, quotes a binding fee, or
        commits Legal Halp to take on a matter. Calls with our office line and automated assistant may be
        recorded and transcribed. By continuing the call or conversation, you consent to that recording.
        See our <A to="/privacy">Privacy Policy</A> for details.
      </p>

      <H2>7. Advertising Platforms and Referrals</H2>
      <p>
        We advertise through third-party platforms and may use marketing and scheduling services. Those
        are paid advertising and administrative services, not recommendations or endorsements, and no
        third party is authorized to give legal advice or make any commitment on our behalf. If we refer
        you to another lawyer or professional, the referral is a courtesy. We do not guarantee their work,
        and any division of fees with another lawyer will be disclosed to you and handled as the Ohio
        Rules of Professional Conduct require.
      </p>

      <H2>8. Pricing and Services</H2>
      <p>
        Retainer pricing and service descriptions on the Site are general and may change at any time
        without notice. They are not offers. Your actual fee and scope of work are set only in your signed
        engagement agreement. Fees, billing, cancellation, and refunds are governed by your engagement
        agreement and our <A to="/payment-policy">Payment &amp; Refund Policy</A>.
      </p>

      <H2>9. Acceptable Use</H2>
      <p>You agree not to:</p>
      <UL>
        <li>use the Site for any unlawful, fraudulent, or harassing purpose;</li>
        <li>submit false information or impersonate any person or business;</li>
        <li>send spam, malware, or unsolicited commercial messages through the Site;</li>
        <li>
          scrape, crawl, copy, or harvest Site content or data by automated means, including to train
          artificial intelligence models or to build datasets, without our written permission;
        </li>
        <li>probe, test, or interfere with the security, integrity, or performance of the Site.</li>
      </UL>

      <H2>10. Text Message (SMS) Program</H2>
      <p>
        By providing your mobile number through a form on the Site, including by checking an SMS consent
        box where one is shown, you agree to receive text messages from Legal Halp about your inquiry,
        consultation scheduling, appointment reminders, document requests, and service updates. If you
        separately opt in to marketing messages, we may also send occasional updates about our services.
      </p>
      <UL>
        <li>Consent to receive text messages is not a condition of purchasing any service.</li>
        <li>Message frequency varies based on your inquiry or engagement.</li>
        <li>Message and data rates may apply.</li>
        <li>
          Reply <span className="font-semibold">STOP</span> to cancel at any time. You may receive one
          final message confirming your opt-out.
        </li>
        <li>
          Reply <span className="font-semibold">HELP</span> for help, or email <Email />.
        </li>
        <li>Mobile carriers are not liable for delayed or undelivered messages.</li>
        <li>You must be at least 18 years old and the account holder or authorized user of the mobile number.</li>
      </UL>
      <p>
        Text messages are not a secure channel. Do not send confidential details, account numbers, or
        sensitive documents by text.
      </p>

      <H2>11. Accessibility</H2>
      <p>
        We want the Site to be usable by everyone. Our efforts and how to request help or an alternative
        format are described in our <A to="/accessibility">Accessibility Statement</A>. If you have
        trouble accessing any part of the Site, contact us and we will work with you to provide the
        information or service in another way.
      </p>

      <H2>12. Intellectual Property</H2>
      <p>
        The Site and its content, including text, graphics, logos, videos, and design, are owned by or
        licensed to Legal Halp and are protected by copyright, trademark, and other laws. You may view and
        print Site content for your personal, non-commercial use. Any other use requires our prior written
        permission. Documents we prepare for clients are governed by the applicable engagement agreement.
      </p>

      <H2>13. Third-Party Services and Links</H2>
      <p>
        The Site uses or links to third-party services, such as scheduling, payment processing, video
        hosting, e-signature, and social media platforms. Those services are governed by their own terms
        and privacy policies. We do not control and are not responsible for their content, availability,
        accessibility, or practices.
      </p>

      <H2>14. Disclaimer of Warranties</H2>
      <p>
        The Site is provided "as is" and "as available." To the fullest extent permitted by law, we
        disclaim all warranties, express or implied, including warranties of merchantability, fitness for a
        particular purpose, accuracy, and non-infringement. We do not warrant that the Site will be
        uninterrupted, error-free, or free of harmful components.
      </p>

      <H2>15. Limitation of Liability</H2>
      <p>
        To the fullest extent permitted by law, Legal Halp and its attorneys, staff, and contractors will
        not be liable for any indirect, incidental, special, consequential, or punitive damages, or for
        lost profits or data, arising from your use of or reliance on the Site. Our total liability for any
        claim arising from your use of the Site is limited to one hundred dollars ($100).
      </p>

      <H2>16. Indemnification</H2>
      <p>
        You agree to indemnify and hold harmless Legal Halp and its attorneys, staff, and contractors from
        any claims, losses, and expenses, including reasonable attorneys' fees, arising from your misuse of
        the Site or your violation of these Terms.
      </p>

      <H2>17. Notice and Opportunity to Resolve</H2>
      <p>
        Before filing any claim or complaint arising from the Site, including any claim about the Site's
        content, functionality, or accessibility, you agree to first send us written notice by email to{" "}
        <Email /> describing the issue and the relief you want, and to give us 30 days to respond and
        resolve it. Most concerns can be fixed quickly and directly.
      </p>

      <H2>18. Governing Law, Venue, and Waivers</H2>
      <p>
        These Terms and any dispute arising from your use of the Site are governed by the laws of the State
        of Ohio, without regard to its conflict of law principles. Any such dispute will be brought
        exclusively in the state or federal courts located in Cuyahoga County, Ohio, and you consent to the
        personal jurisdiction of those courts. To the fullest extent permitted by law:
      </p>
      <UL>
        <li>you and Legal Halp each waive the right to a jury trial for any dispute arising from the Site;</li>
        <li>
          any such dispute will be brought only on an individual basis, and not as a plaintiff or class
          member in any class, collective, or representative action;
        </li>
        <li>
          any claim arising from your use of the Site must be filed within one year after it arises, or it
          is permanently barred.
        </li>
      </UL>

      <H2>19. Relationship to Professional Obligations</H2>
      <p>
        Sections 14 through 18 apply to your use of the Site only. Legal services we provide to clients are
        governed by the applicable engagement agreement and the Ohio Rules of Professional Conduct.
        Nothing in these Terms limits any duty we owe a client, any liability that cannot be limited under
        applicable law or those rules, or any right to report a lawyer's conduct to a disciplinary
        authority.
      </p>

      <H2>20. General</H2>
      <H3>Changes</H3>
      <p>
        We may update these Terms from time to time. The updated version will be posted on this page with a
        new effective date. Your continued use of the Site after an update means you accept the revised
        Terms.
      </p>
      <H3>Severability and Waiver</H3>
      <p>
        If any provision of these Terms is found unenforceable, it will be enforced to the maximum extent
        permitted and the remaining provisions remain in effect. Our failure to enforce any provision is
        not a waiver of it.
      </p>
      <H3>Entire Agreement</H3>
      <p>
        These Terms, together with our Privacy Policy, Payment &amp; Refund Policy, and Accessibility
        Statement, are the entire agreement between you and Legal Halp regarding your use of the Site. If
        you are a client, your engagement agreement controls in the event of any conflict.
      </p>

      <H2>21. Contact</H2>
      <p>Questions about these Terms can be sent to:</p>
      <ContactBlock />
    </LegalPageLayout>
  );
};

export default Terms;
