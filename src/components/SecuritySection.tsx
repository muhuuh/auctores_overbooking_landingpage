import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SecuritySection = () => {
  const faqs = [
    {
      question: "Where is data stored?",
       answer: "You control where your data resides. Choose between our secure, EU-based AWS data centers (with encryption at rest and in transit) or host everything, including data, on your own on-premise servers. We maintain strict data isolation between clients regardless of your choice."
    },
    {
      question: "How is PII handled?",
      answer: "Personal Identifiable Information is handled according to GDPR principles. We employ data minimization, role-based access controls, and tokenization of sensitive fields. You maintain full ownership of your guest data and can export or delete it at any time."
    },
    {
      question: "What is your SOC-2 timeline?",
       answer: "We are currently in the process of SOC-2 Type 1 certification, expected to be completed by Q3 2025. Our security practices already align with SOC-2 requirements, and we maintain a comprehensive security program overseen by our CISO."
     },
     {
       question: "How do you ensure system reliability?",
       answer: "Our infrastructure is designed for 99.9% uptime with redundancy across multiple availability zones. We maintain real-time monitoring and have established incident response protocols to address any service disruptions swiftly."
    },
    {
      question: "Can we use our own LLMs?",
      answer: "Yes. For maximum data privacy and control, you can opt to use self-hosted Large Language Models. This ensures that your sensitive data never leaves your own infrastructure during processing."
    }
  ];

  return (
    <section id="security" className="section-padding bg-navy text-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Built for enterprise-grade privacy.</h2>

        <p className="text-lg text-center mb-4">
          Auctores is engineered for privacy by design, You maintain complete control over your deployment and data. 
          Run on your own servers or our EU cloud, swap our LLM endpoints with your own self-hosted models - no problem. 
        </p>
        <p className="text-lg text-center mb-10">
          You have the final say on the level of privacy and control that best suits your needs.
        </p>
        
        <div className="bg-navyLight p-8 rounded-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray/20">
                <AccordionTrigger className="text-white font-medium text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
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
