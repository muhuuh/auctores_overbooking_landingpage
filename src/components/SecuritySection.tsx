
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
      answer: "All customer data is stored in EU-based AWS data centers with encryption at rest and in transit. We maintain strict data isolation between clients, and your data never leaves your designated region without explicit consent."
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
    }
  ];

  return (
    <section id="security" className="py-16 px-6 bg-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-luxury mb-12 text-center">Security & Privacy</h2>
        
        <div className="bg-luxury-light p-8 rounded-lg">
          <p className="text-luxury-muted mb-8 text-center">
            We understand that luxury properties handle sensitive guest information.
            Your security and compliance requirements are our priority.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-luxury font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-luxury-muted">
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
