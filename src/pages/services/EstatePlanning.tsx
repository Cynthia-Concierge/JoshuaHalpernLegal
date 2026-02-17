import React from "react";
import { Shield } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const EstatePlanning: React.FC = () => (
  <ServicePageTemplate
    icon={Shield}
    title="Estate Planning"
    price="$1,750"
    subtitle="Protect your family, avoid probate, and ensure your wishes are followed — without spending $5,000+."
    whoItsFor="Individuals and families who want to protect their assets, plan for the unexpected, and make sure their loved ones are taken care of — without the complexity and cost of traditional estate lawyers."
    description="Estate planning isn't just for the wealthy. If you have assets, a family, or a business, you need a plan. We draft everything from revocable living trusts to powers of attorney and healthcare directives — so your family is protected and your wishes are honored."
    includes={[
      "Revocable Living Trust",
      "Pour-Over Will",
      "Durable Power of Attorney",
      "Healthcare Directive + HIPAA Authorization",
      "Asset transfer instructions",
      "1-hour attorney consultation",
    ]}
    whyItMatters="Wills go through probate — a public, expensive, months-long court process. A trust bypasses all of that. Your family gets assets faster, privately, and without lawyers eating into your estate. Every day you wait is a day your family is unprotected."
    stripeLink="https://buy.stripe.com/bJefZh3DA2nTbWhf0S3oA04"
  />
);

export default EstatePlanning;
