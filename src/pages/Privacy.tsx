import { Link } from "react-router-dom";
import LegalPageLayout, { H2, H3, UL, Email, ContactBlock } from "@/components/LegalPageLayout";

const Privacy = () => {
  return (
    <LegalPageLayout title="Privacy Policy" effectiveDate="September 18, 2026">
      <p>
        This Privacy Policy explains how Legal Halp ("Legal Halp," "we," "us," or "our") collects, uses,
        shares, and protects personal information when you visit legalhalplaw.com, submit a form, book a
        call, make a payment, or otherwise interact with us (together, the "Site"). It also explains the
        choices and rights you have.
      </p>
      <p>
        Information you share with us as a client is also protected by our duty of confidentiality
        under the Ohio Rules of Professional Conduct and, where applicable, the attorney-client
        privilege. Those obligations apply in addition to this Policy.
      </p>

      <H2>1. Information We Collect</H2>
      <H3>Information you provide</H3>
      <UL>
        <li>Contact details, such as your name, email address, phone number, and business name.</li>
        <li>Details about your business and legal needs that you enter in forms, emails, texts, or during calls.</li>
        <li>Scheduling information when you book a consultation.</li>
        <li>Payment information when you pay us. Card and bank details are collected and processed by our payment processor, and we do not store full card numbers.</li>
      </UL>
      <H3>Information collected automatically</H3>
      <UL>
        <li>Device and usage data, such as IP address, browser type, device type, pages viewed, referring URL, and the date and time of your visit.</li>
        <li>Marketing attribution data, such as UTM parameters and ad click identifiers (for example, Meta's fbclid), which tell us which ad or link brought you to the Site.</li>
        <li>Cookie and pixel data, as described in Section 4.</li>
        <li>Session interaction data, such as clicks, scrolling, and mouse movement, collected by our analytics tool as described in Section 4.</li>
      </UL>
      <H3>Information from others</H3>
      <p>
        We may receive information about you from referral sources, your advisors, counterparties in a
        transaction, public records such as state business filings, and our service providers.
      </p>

      <H2>2. How We Use Information</H2>
      <UL>
        <li>To respond to your inquiry, schedule consultations, and communicate with you by email, phone, and text.</li>
        <li>To run conflict checks and evaluate whether we can take on a matter.</li>
        <li>To provide legal services, manage engagements, and process payments.</li>
        <li>To operate, secure, and improve the Site, and to understand how visitors use it.</li>
        <li>To measure and improve our advertising, including reporting conversions to advertising platforms.</li>
        <li>To comply with legal and professional obligations and to protect our rights.</li>
      </UL>

      <H2>3. How We Share Information</H2>
      <p>
        We do not sell personal information for money. We share information only as described below.
      </p>
      <UL>
        <li>
          Service providers that help us operate the practice and the Site, including website hosting
          (Vercel), our client relationship and messaging platform, scheduling (Calendly), payment
          processing (Stripe), analytics (Microsoft Clarity), and email and document tools. These providers
          may use information only to perform services for us.
        </li>
        <li>
          Advertising platforms. We use the Meta Pixel and Meta's Conversions API to measure ad
          performance. When you submit a form, book a call, or make a payment, we may send Meta
          event data along with your email address and phone number in hashed (encrypted) form so Meta
          can match the event to an ad.
        </li>
        <li>
          Professionals and counterparties involved in your matter, such as co-counsel, referral counsel,
          accountants, or opposing parties, when you direct us to or when needed to carry out the engagement.
        </li>
        <li>
          Legal and safety purposes, when required by law, court order, or professional rules, or to
          protect the rights and safety of Legal Halp, our clients, or others.
        </li>
        <li>
          Business transfers, if our practice is transferred or combined with another law practice, subject
          to the professional rules that protect client information.
        </li>
      </UL>
      <p>
        Some state privacy laws treat the use of advertising pixels as a "sale" or "sharing" of personal
        information. You can opt out of this use as described in Section 6.
      </p>

      <H2>4. Cookies, Pixels, and Analytics</H2>
      <p>We and our providers use cookies, pixels, and similar technologies:</p>
      <UL>
        <li>
          <span className="font-semibold text-slate-900">Meta Pixel.</span> Records page views and actions on
          the Site so we can measure and target our ads on Facebook and Instagram. You can manage ad
          preferences in your Meta account settings.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Microsoft Clarity.</span> Records how visitors
          interact with pages, including clicks, scrolling, and mouse movement, and produces heatmaps and
          session replays that help us improve the Site. Microsoft processes this data under its privacy
          statement.
        </li>
        <li>
          <span className="font-semibold text-slate-900">Essential storage.</span> We store marketing
          attribution data in your browser for the length of your visit so that a form you submit can be
          credited to the ad or link that brought you here.
        </li>
      </UL>
      <p>
        You can block or delete cookies through your browser settings and use browser tools or extensions
        that limit tracking. Some parts of the Site may not work as intended if you do. The Site does not
        currently respond to "Do Not Track" browser signals.
      </p>

      <H2>5. Text Messages (SMS)</H2>
      <p>
        If you provide your mobile number and opt in, we may send text messages about your inquiry,
        consultation scheduling, appointment reminders, document requests, and service updates. Message
        frequency varies. Message and data rates may apply. Reply STOP to opt out at any time, or HELP
        for help. You can also email <Email />.
      </p>
      <p className="font-medium text-slate-900">
        No mobile information will be shared with third parties or affiliates for marketing or
        promotional purposes. All of the categories of sharing described in this Policy exclude text
        messaging originator opt-in data and consent; this information will not be shared with any
        third parties.
      </p>
      <p>
        We may share mobile numbers with the messaging service providers that deliver our texts, solely
        to send the messages you requested.
      </p>

      <H2>6. Your Choices and Privacy Rights</H2>
      <p>
        Depending on where you live, you may have the right to request access to the personal
        information we hold about you, to correct it, to delete it, to receive a copy in a portable
        format, and to opt out of targeted advertising or the "sale" or "sharing" of personal information.
        We extend these requests to all visitors, regardless of where you live, subject to the
        exceptions below.
      </p>
      <p>
        To make a request, email <Email /> with "Privacy Request" in the subject line and tell us what you
        are asking for. We will verify your identity before acting on a request and will respond within
        the time required by applicable law, generally 45 days. You may use an authorized agent, and you
        may appeal a decision by replying to our response. We will not discriminate against you for
        exercising your rights.
      </p>
      <p>
        Some information cannot be deleted. We must keep client files, conflict records, trust account
        records, and billing records for the periods required by the Ohio Rules of Professional
        Conduct and other law.
      </p>
      <p>
        You can unsubscribe from marketing emails using the link in the email, and stop text messages by
        replying STOP.
      </p>

      <H2>7. Data Retention</H2>
      <p>
        We keep personal information only as long as needed for the purposes described in this Policy.
        Inquiry and marketing data is generally kept while it remains useful for responding to you and
        measuring our marketing. Client files and related records are kept for the periods required by
        professional rules, law, and our file retention policy, and then securely destroyed.
      </p>

      <H2>8. Data Security</H2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to protect personal
        information, including encrypted connections and access controls. We may use reputable
        technology tools, including AI-assisted tools, to support our work, and we select and configure
        them to protect client confidentiality. No method of transmission or storage is completely
        secure, and we cannot guarantee absolute security. Email and text messages are not fully secure
        channels, so please do not send highly sensitive information by those methods unless we have
        agreed on a secure alternative.
      </p>

      <H2>9. Children</H2>
      <p>
        The Site is intended for adults and businesses. We do not knowingly collect personal information
        from anyone under 18. If you believe a minor has provided information to us, contact us and we
        will delete it.
      </p>

      <H2>10. Third-Party Sites</H2>
      <p>
        The Site links to and embeds third-party services, such as Calendly, Stripe, and social media
        platforms. Their collection and use of information is governed by their own privacy policies.
      </p>

      <H2>11. Changes to This Policy</H2>
      <p>
        We may update this Policy from time to time. The updated version will be posted on this page with
        a new effective date. If we make material changes, we may also notify you by other means.
      </p>

      <H2>12. Contact</H2>
      <p>
        Questions about this Policy or our privacy practices can be sent to the contact below. See also our{" "}
        <Link to="/terms" className="text-blue-600 hover:text-blue-500 underline">Terms &amp; Conditions</Link>.
      </p>
      <ContactBlock />
    </LegalPageLayout>
  );
};

export default Privacy;
