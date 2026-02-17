import React from "react";
import { Sparkles } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const BrandProtection: React.FC = () => (
  <ServicePageTemplate
    icon={Sparkles}
    title="Brand Protection"
    price="$550"
    subtitle="Protect your brand, your content, and your intellectual property before someone else claims it."
    whoItsFor="Creators, influencers, startups, and anyone building a brand worth protecting. If you've built something people recognize, it's time to lock it down legally."
    description="Your brand is one of your most valuable assets — but without legal protection, it's just a name. We conduct trademark searches, build a protection strategy, and give you the tools to defend your brand if someone tries to copy or steal it."
    includes={[
      "Preliminary trademark search + analysis",
      "Brand protection strategy session",
      "Custom Cease & Desist template",
      "Social media + content ownership guidance",
      "Upgrade credit toward full trademark filing",
    ]}
    whyItMatters="A brand without legal protection is just a name — and names get stolen every day. Competitors can register your brand name, copycats can clone your content, and you'll have no legal recourse if you haven't protected yourself first. Lock it down before someone else does."
    stripeLink="https://buy.stripe.com/8x228rca6geJ7G105Y3oA06"
  />
);

export default BrandProtection;
