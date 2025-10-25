// /components/SecuritySection.tsx  — 10-question version (5 Product + 5 Privacy/Security)
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

// Faqs are loaded from i18n

const SecuritySection = () => {
  const { t } = useTranslation();
  const productFaqs = t('security.productFaqs', { returnObjects: true }) as { question: string; answer: string }[];
  const privacyFaqs = t('security.privacyFaqs', { returnObjects: true }) as { question: string; answer: string }[];
  return (
    <section id="security" className="py-16 sm:py-20 md:py-24 bg-navy text-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center">
          {t('security.title')}
        </h2>

        <p className="text-base text-center mb-4 px-4 sm:px-0">
          {t('security.lead1')}
          {" "}
          {t('security.lead2')}
        </p>
        <p className="text-base text-center mb-8 sm:mb-10 px-4 sm:px-0">
          {t('security.lead3')}
        </p>

        {/* Group 1 — Overbooking & Product (5) */}
        <div className="bg-navyLight p-6 sm:p-8 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">{t('security.groupTitles.product')}</h3>
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
          <h3 className="text-lg font-semibold mb-4">{t('security.groupTitles.privacy')}</h3>
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
