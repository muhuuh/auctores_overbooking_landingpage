
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
      question: "Data residency",
      answer: "All data stored and processed in AWS eu-central-1."
    },
    {
      question: "Zero-retention AI",
      answer: "LLM proxy discards prompts & outputs after response."
    },
    {
      question: "SOC 2 roadmap",
      answer: "Audit underway; Type II expected Q4 2025."
    }
  ];

  return (
    <section id="security" className="section-padding bg-navy text-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Built for enterprise-grade privacy.</h2>
        
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
