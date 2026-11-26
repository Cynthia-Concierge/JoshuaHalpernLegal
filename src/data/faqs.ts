// Shared FAQ content used on the homepage, /faq, and /lawyeroncall.
// Edit here and every page stays in sync.

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_FAQS: FaqItem[] = [
  {
    question: "How is this different from hiring a traditional law firm?",
    answer: "A traditional firm bills by the hour, usually asks for a large upfront retainer, and sends an invoice every time you call or email. That makes owners hesitate to ask questions until a small issue becomes an expensive one. Here, you pay one fixed monthly fee, you work with the same senior attorney on everything, and you never wonder what a quick question will cost.",
  },
  {
    question: "What does \"embedded\" actually mean?",
    answer: "It means I learn your entities, your contracts, your people, and your deals, and I stay with you month after month. You stop re-explaining your business every time something comes up. I also coordinate directly with your CPA, lenders, brokers, and the other side of a deal, so you are not stuck in the middle.",
  },
  {
    question: "What's included in my monthly fee?",
    answer: "Each plan has a defined scope, outlined in the monthly plans and confirmed in writing in your engagement letter. Within that scope, the fee stays the same whether you send me two requests or twenty. Anything outside it is flagged and quoted in writing before any work begins. You will never get a surprise invoice.",
  },
  {
    question: "What if I need more than my plan covers?",
    answer: "I tell you up front. Depending on the need, we either move you to the plan that fits or quote the project as a separate fixed fee. You approve it before anything starts.",
  },
  {
    question: "How do I reach you, and how fast will you respond?",
    answer: "Email is the main channel, because written answers are faster, clearer, and give you a record of the advice. Replies come within 2 business days on Essential and within 1 business day on Ongoing and General Counsel. Business hours are 9 to 5 Eastern on business days. Urgent, time-sensitive matters get a call, and deal deadlines are always prioritized. After-hours or weekend availability is not included, but it can be added for an additional fee if your business needs it.",
  },
  {
    question: "Will we need regular calls or meetings?",
    answer: "No. Most of the work is handled in writing, which keeps things moving and keeps your fee low. We get on a call when a matter genuinely needs one, such as an urgent issue or a live negotiation, not as a standing obligation.",
  },
  {
    question: "Is a real attorney handling my work?",
    answer: "Yes. I'm Joshua Halpern. I trained in the corporate group of a national law firm, and I personally handle the legal work for every client. My assistant helps with scheduling and administrative tasks. There are no junior associates and no call center.",
  },
  {
    question: "How do you use AI?",
    answer: "As a tool, not a replacement for judgment. AI helps with research, first drafts, and reviewing long documents faster, and that efficiency is a big part of how a fixed monthly fee is possible. Every piece of work is reviewed and approved by me before it reaches you. The strategy, the judgment calls, and the accountability are mine.",
  },
  {
    question: "Can you handle M&A and larger transactions?",
    answer: "Yes. Acquisitions, sales, buyouts, restructurings, and real estate transactions are core to the practice, and I trained in the corporate transactional group of a national law firm. On the General Counsel plan, deal work is scoped up front, including whether it sits inside the monthly fee or is quoted as a separate fixed fee, so you know the number before work starts.",
  },
  {
    question: "What happens if my business gets sued or needs to go to court?",
    answer: "I'm business and transactional counsel, and I do not appear in court. When a matter needs a litigator, arbitrator, or mediator, I bring in trusted outside counsel, brief them on your business, and stay involved as your point person. Outside counsel is engaged and billed separately under their own terms.",
  },
  {
    question: "My business isn't in Ohio. Can you still help?",
    answer: "I'm licensed to practice law in Ohio only, and I work with business owners across the country on general corporate and business matters. When a matter turns on another state's law or requires a lawyer licensed in that state, I coordinate with local counsel. Your engagement letter spells out exactly what I handle.",
  },
  {
    question: "What kinds of matters do you not take on?",
    answer: "Litigation and court appearances, criminal defense, family law and divorce, personal injury, and immigration. Highly specialized filings such as patent prosecution or SEC registration are also outside the practice. If you need one of these, I'm happy to point you in the right direction.",
  },
  {
    question: "Can I hire you for a single project instead of a monthly plan?",
    answer: "Yes. Defined projects, such as forming an entity, drafting an operating agreement, or reviewing a contract, are handled on a fixed fee that is scoped and quoted before any work begins.",
  },
  {
    question: "How does billing work?",
    answer: "Monthly plans are billed in advance by card or bank transfer. Government filing fees and other third-party costs are separate and passed through at cost. There is no upfront retainer deposit and no hourly billing.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. Plans are month-to-month and can be cancelled with 30 days notice. Clients stay because it works, not because of the fine print.",
  },
  {
    question: "What if I have a slow month?",
    answer: "You are still covered. The value of a monthly plan is having counsel who already knows your business the moment something comes up, not scrambling to find and brief a new lawyer mid-crisis.",
  },
  {
    question: "What happens after I book a consultation?",
    answer: "We have a short call about your business and what you need covered. If it is a fit, I recommend a plan and send a simple engagement letter. Nothing discussed on the call is legal advice, and no attorney-client relationship exists until that letter is signed and the first payment is made.",
  },
  {
    question: "Who keeps my documents?",
    answer: "You do. Final documents are delivered to you as the work is completed, and you should keep your own copies. I am not a long-term records custodian, so do not rely on me to store your company records after an engagement ends.",
  },
];

// The short list shown on the homepage; the full list lives on /faq.
const HOME_FAQ_QUESTIONS = [
  "How is this different from hiring a traditional law firm?",
  "What's included in my monthly fee?",
  "How do I reach you, and how fast will you respond?",
  "How do you use AI?",
  "What happens if my business gets sued or needs to go to court?",
  "Is there a long-term contract?",
];

export const HOME_FAQS: FaqItem[] = HOME_FAQ_QUESTIONS.map(
  (q) => SITE_FAQS.find((f) => f.question === q),
).filter((f): f is FaqItem => Boolean(f));
