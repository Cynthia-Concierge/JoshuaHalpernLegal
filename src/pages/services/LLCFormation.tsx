import React from "react";
import { Briefcase } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const LLCFormation: React.FC = () => (
  <ServicePageTemplate
    icon={Briefcase}
    title="LLC Formation"
    price="$1,000"
    subtitle="Get your business legally set up the right way, with a real attorney, not a template."
    whoItsFor="Solopreneurs, freelancers, side hustlers, and first-time business owners who want to protect their personal assets and look professional from day one."
    description="Starting a business is exciting, but without the right legal foundation, you're exposing yourself to unnecessary risk. We handle everything from the business name search to filing your Articles of Organization, drafting a custom Operating Agreement, and getting your EIN. No templates, no guesswork."
    includes={[
      "Business name search",
      "Articles of Organization filed with your state",
      "Custom Operating Agreement (not a template)",
      "Federal EIN for taxes and banking",
      "Help opening a business bank account",
      "Registered agent enrollment assistance",
      "Compliance checklist so you stay legit",
      "30-minute attorney consultation + email support",
    ]}
    whyItMatters="Without an LLC, there's no legal separation between you and your business. That means if something goes wrong (a lawsuit, a debt, a dispute) your personal savings, home, and assets are on the line. An LLC creates a legal shield. It's one of the simplest and most important things you can do as a business owner."
    stripeLink="https://buy.stripe.com/cNi9ATgqm8Mh7G19Gy3oA03"
  />
);

export default LLCFormation;
