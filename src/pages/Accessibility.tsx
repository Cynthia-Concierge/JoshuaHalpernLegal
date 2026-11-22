import { Link } from "react-router-dom";
import LegalPageLayout, { H2, UL, Email, ContactBlock } from "@/components/LegalPageLayout";

const Accessibility = () => {
  return (
    <LegalPageLayout title="Accessibility Statement" effectiveDate="November 22, 2026">
      <p>
        LH Law Holdings LLC d/b/a Legal Halp ("Legal Halp") is committed to making legalhalplaw.com usable
        by everyone, including people with disabilities. We are working to make the Site conform to the
        Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published by the World Wide Web
        Consortium.
      </p>

      <H2>1. What We Do</H2>
      <UL>
        <li>Use semantic page structure, headings, and labeled navigation so screen readers can move through pages.</li>
        <li>Provide text alternatives for meaningful images.</li>
        <li>Label form fields and make forms usable with a keyboard.</li>
        <li>Maintain readable text sizes and color contrast, and support browser zoom.</li>
        <li>Allow videos to be paused and muted, and avoid content that flashes.</li>
        <li>Review new pages and features for accessibility as we build them.</li>
      </UL>

      <H2>2. Known Limitations</H2>
      <p>
        Accessibility is an ongoing effort, and some content may not yet fully meet our goal. In
        particular:
      </p>
      <UL>
        <li>Some short social media videos may not yet have captions or transcripts.</li>
        <li>
          Some features are provided by third parties, such as scheduling (Calendly), payments (Stripe),
          e-signature, and embedded social media. We do not control their accessibility, but we will help
          you complete any step another way.
        </li>
      </UL>

      <H2>3. Other Ways to Reach Us</H2>
      <p>
        Every service on the Site is also available without using the Site. If any page, form, document,
        or video is hard to use, you can:
      </p>
      <UL>
        <li>email us at <Email />;</li>
        <li>
          call us at{" "}
          <a href="tel:+12162232818" className="text-blue-600 hover:text-blue-500 underline">(216) 223-2818</a>.
        </li>
      </UL>
      <p>
        We will provide the information in an alternative format, help you schedule a consultation, or
        complete the process with you directly.
      </p>

      <H2>4. Feedback</H2>
      <p>
        We welcome feedback on the accessibility of the Site. Please tell us the page address, what you were
        trying to do, and the problem you encountered, along with the browser and assistive technology you
        use if you can. We aim to respond within five business days and to fix reported issues as quickly
        as reasonably possible.
      </p>

      <H2>5. Ongoing Review</H2>
      <p>
        We review this Statement and the Site periodically and update both as we make improvements. See
        also our <Link to="/terms" className="text-blue-600 hover:text-blue-500 underline">Terms &amp; Conditions</Link>.
      </p>

      <H2>6. Contact</H2>
      <ContactBlock />
    </LegalPageLayout>
  );
};

export default Accessibility;
