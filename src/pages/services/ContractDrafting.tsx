import React from "react";
import { PenTool } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const ContractDrafting: React.FC = () => (
  <ServicePageTemplate
    icon={PenTool}
    title="Contract Drafting"
    price="$550"
    subtitle="Custom contracts drafted or reviewed by a real attorney — not a template generator."
    whoItsFor="Freelancers, consultants, agencies, and anyone who needs a contract drafted or reviewed to protect their business and their interests."
    description="A bad contract — or no contract at all — is one of the fastest ways to lose money, clients, or control of your own work. We draft and review service agreements, NDAs, partnership agreements, influencer deals, licensing agreements, and more. Every contract is tailored to your situation."
    includes={[
      "Custom contract drafting OR thorough review of existing contract",
      "Plain-English explanation of key terms",
      "Attorney strategy call or written summary",
      "2 rounds of revisions",
      "5-day turnaround (expedited available)",
    ]}
    whyItMatters="Handshake deals and template contracts leave you exposed. One vague clause can cost you thousands in disputes, lost IP, or unpaid invoices. A properly drafted contract sets clear expectations, protects your rights, and gives you leverage if things go sideways."
    stripeLink="https://buy.stripe.com/9B6eVd2zwbYtbWhf0S3oA05"
  />
);

export default ContractDrafting;
