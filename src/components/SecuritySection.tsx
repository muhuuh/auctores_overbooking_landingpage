// /components/SecuritySection.tsx  — 10-question version (5 Product + 5 Privacy/Security)
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productFaqs = [
  {
    question: "What exactly does Smart Overbooking optimize?",
    answer:
      "Auctores’ proprietary ML predicts same-day cancels/no-shows and recommends the optimal overbooking level per date and room type. It’s OTA-aware (different cancellation patterns by channel) and adapts to live demand."
  },
  {
    question: "How do you avoid walkouts or guest friction?",
    answer:
      "Safety by design: default no-walk policy, upgrade fallback rules, and VIP/family room protection. You can cap levels per date/room type, add buffers for events/groups, and pause with an instant off switch. All changes are logged."
  },
  {
    question: "Can I cap or override recommendations?",
    answer:
      "Yes. Set global and date/room-type caps, switch to conservative mode when needed, and apply manual overrides at any time. Overrides are respected and recorded in the audit log."
  },
  {
    question: "What happens if the model is wrong?",
    answer:
      "Guardrails prevent worst-case outcomes (e.g., walkouts). When confidence is low we default to conservative recommendations."
  },
  {
    question: "How fast is setup and when do results start?",
    answer:
      "Setup takes minutes: connect PMS, set guardrails, activate. Impact begins with the next booking wave—no PMS changes required."
  },
];

const privacyFaqs = [
  {
    question: "GDPR roles & data location — are you controller or processor and where is data stored?",
    answer:
      "We act as controller for your account/profile/authentication and essential service logs, and as processor for data accessed from connected tools (e.g., PMS) to optimize overbooking/automations. We target EU regions for processing and storage; if transfers outside the EEA/UK are unavoidable we rely on SCCs with appropriate safeguards."
  },
  {
    question: "What personal data do you process, how long do you keep it, and how can users exercise their rights?",
    answer:
      "We minimize PII: account/contact details, connector metadata and encrypted access tokens, and limited operational records from the PMS required to provide the service. Connector credentials persist while a connection is active and are deleted on disconnection or account deletion. Minimal operational logs are retained up to ~90 days for security/troubleshooting unless law requires longer. To exercise access/rectification/erasure/restriction/portability/objection, email valentin@auctores.ai."
  },
  {
    question: "How are secrets and infrastructure protected? What’s your incident approach?",
    answer:
      "User secrets are KMS-encrypted at rest and decrypted only to perform authorized API calls; database storage is encrypted with RBAC and RLS. System secrets are managed in a secrets manager with least-privilege IAM and audit logging. Transport is TLS 1.2+, infra is isolated with monitoring and access logging, and we maintain audit trails and an incident response process."
  },
  {
    question: "Do you train models on our data? Can we bring our own/self-hosted LLM?",
    answer:
      "We do not train models on your guest PII. Overbooking optimization uses our proprietary ML on operational signals; LLMs (if used) power workflows/explanations. You can bring your own/self-hosted LLM or use our EU setup."
  },

];

const SecuritySection = () => {
  return (
    <section id="security" className="py-16 sm:py-20 md:py-24 bg-navy text-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Built for enterprise-grade privacy.
        </h2>

        <p className="text-base text-center mb-4 px-4 sm:px-0">
          Auctores prioritizes privacy, encouraging you to control your data and AI.
          Host on your servers or our secure EU cloud, and use your own self-hosted LLMs — the choice is yours.
        </p>
        <p className="text-base text-center mb-8 sm:mb-10 px-4 sm:px-0">
          Our team fully supports your journey to maximum privacy and compliance, ensuring you decide the ideal level of control.
        </p>

        {/* Group 1 — Overbooking & Product (5) */}
        <div className="bg-navyLight p-6 sm:p-8 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Overbooking & Product</h3>
          <Accordion type="single" collapsible className="w-full">
            {productFaqs.map((faq, idx) => (
              <AccordionItem key={`p-${idx}`} value={`p-${idx}`} className="border-b border-gray/20">
                <AccordionTrigger className="text-white font-medium text-sm sm:text-base py-3 sm:py-4 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Group 2 — Privacy, Security & Compliance (5) */}
        <div className="bg-navyLight p-6 sm:p-8 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Privacy, Security & Compliance</h3>
          <Accordion type="single" collapsible className="w-full">
            {privacyFaqs.map((faq, idx) => (
              <AccordionItem key={`s-${idx}`} value={`s-${idx}`} className="border-b border-gray/20">
                <AccordionTrigger className="text-white font-medium text-sm sm:text-base py-3 sm:py-4 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
