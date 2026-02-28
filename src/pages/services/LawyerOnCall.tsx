import React from "react";
import { PhoneCall } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const LawyerOnCall: React.FC = () => (
  <ServicePageTemplate
    icon={PhoneCall}
    title="Lawyer-on-Call"
    price="From $1,500/mo"
    subtitle="Ongoing, on-demand access to a real business attorney at a flat monthly rate."
    whoItsFor="Business owners, founders, and entrepreneurs who need reliable legal support on an ongoing basis without the cost of hiring in-house counsel or paying $400+/hour every time a question comes up."
    description="The Lawyer-on-Call retainer gives you a dedicated attorney you can reach whenever you need one. Whether you need a contract reviewed, a deal negotiated, compliance guidance, or just a trusted advisor to bounce ideas off of, you get direct access at a predictable monthly cost tailored to your budget."
    includes={[
      "Monthly on-call access to a licensed attorney",
      "Contract review and drafting as needed",
      "Transaction negotiation support",
      "General corporate counsel and compliance guidance",
      "Strategic business advisory on legal matters",
      "Priority response times (within 24 hours)",
      "Rollover availability for lighter months",
    ]}
    whyItMatters="Most businesses don't need a full-time lawyer, but they do need one they can call. Without reliable legal counsel, small issues become expensive problems. A missed clause in a contract, a compliance gap, or a poorly structured deal can cost you thousands. The Lawyer-on-Call retainer gives you peace of mind and a real attorney in your corner, every month."
  />
);

export default LawyerOnCall;
