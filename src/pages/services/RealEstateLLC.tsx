import React from "react";
import { Building2 } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const RealEstateLLC: React.FC = () => (
  <ServicePageTemplate
    icon={Building2}
    title="Real Estate LLC"
    price="$2,500"
    subtitle="Hold your rental properties in an LLC for liability protection, set up correctly from the start."
    whoItsFor="Landlords and rental property owners who want to hold real estate in an LLC for liability protection and separate their personal assets from their investment properties."
    description="If you own rental property in your personal name, you're one lawsuit away from losing everything. We set up a real estate-specific LLC, transfer the deed, handle county recording, and make sure your mortgage and tax situation is properly addressed."
    includes={[
      "Full LLC formation with real estate-specific Operating Agreement",
      "Federal EIN",
      "Deed preparation + title transfer to LLC",
      "County recording + compliance handling",
      "Mortgage due-on-sale clause review",
      "Tax ID and title verification",
      "Ownership compliance checklist",
      "30-minute consultation + email support",
    ]}
    whyItMatters="If a tenant sues you personally, they can come after your house, car, and savings. An LLC creates a legal shield between your rental property and your personal assets. It's the single most important thing a landlord can do to protect themselves."
    stripeLink="https://buy.stripe.com/dRmaEXfmi9Ql9O9g4W3oA07"
  />
);

export default RealEstateLLC;
