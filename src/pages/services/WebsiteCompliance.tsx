import React from "react";
import { Globe } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const WebsiteCompliance: React.FC = () => (
  <ServicePageTemplate
    icon={Globe}
    title="Website Compliance"
    price="$750"
    subtitle="Get your website legally compliant — privacy policy, terms, cookies, and accessibility handled."
    whoItsFor="E-commerce stores, SaaS companies, online service providers, and anyone collecting user data through a website or app."
    description="If you're collecting emails, processing payments, or using cookies, you need proper legal policies. We draft custom privacy policies, terms & conditions, cookie policies, and accessibility compliance documentation — all tailored to your specific business and jurisdiction."
    includes={[
      "Custom Privacy Policy (GDPR + CCPA compliant)",
      "Terms & Conditions",
      "Cookie Policy + consent implementation guidance",
      "Accessibility compliance review (WCAG 2.1)",
      "COPPA compliance (if applicable)",
      "Industry-specific disclaimers",
      "E-commerce compliance review",
      "30-minute consultation + email support",
    ]}
    whyItMatters="GDPR fines can hit €20 million. ADA lawsuits are surging. One missing privacy policy can tank your business. These aren't just legal formalities — they're the difference between running a legitimate business and being an easy target for lawsuits and fines."
    stripeLink="https://buy.stripe.com/4gM6oHca6d2x2lH6um3oA08"
  />
);

export default WebsiteCompliance;
