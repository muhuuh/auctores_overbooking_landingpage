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
      answer: "You have full control over where your data resides. Choose our secure, EU-based AWS servers, or host everything entirely on your own premises. We encourage full ownership and control of your data, ensuring maximum privacy and isolation by design."
    },
    {
      question: "Can we use our own LLMs?",
      answer: "Absolutely. Auctores empowers you to seamlessly integrate self-hosted Large Language Models, so sensitive data never leaves your infrastructure, ensuring ultimate privacy and compliance."
    },
    {
      question: "How is PII handled?",
      answer: "Personal Identifiable Information is protected according to GDPR standards. We implement data minimization, strict role-based access controls, and sensitive data tokenization. You're in full control, with the ability to access, export, or delete data anytime."
    },
    {
      question: "Do you store or use our data?",
      answer: "Auctores is privacy-by-design: we strongly encourage you to retain full control by hosting your data and AI models. Although we offer secure cloud storage, our core recommendation is that you own and manage your infrastructure for maximum privacy. In fact, our team is dedicated to supporting you fully in setting up and running Auctores privately and securely on your own servers."
    },
    {
      question: "How do you ensure system reliability?",
      answer: "Our infrastructure guarantees 99.9% uptime, with real-time monitoring and robust incident response protocols to swiftly address and resolve any issues."
    },
  ];

  return (
    <section id="security" className="section-padding bg-navy text-white">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Built for enterprise-grade privacy.</h2>

        <p className="text-base text-center mb-4">
        Auctores is built with privacy at its core. We actively encourage you to maintain complete control over your data and AI infrastructure.
        Run on your own servers or use our secure EU-based cloud, swap our LLM endpoints with your own self-hosted models - no problem, the choice is yours. 
        </p>
        <p className="text-base text-center mb-10">
          Our team is committed to supporting you every step of the way in achieving maximum privacy and compliance. You have the final say on the level of privacy and control that best suits your needs.
        </p>
        
        <div className="bg-navyLight p-8 rounded-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray/20">
                <AccordionTrigger className="text-white font-medium text-base py-4">
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
