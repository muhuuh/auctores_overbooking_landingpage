import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Percent, Gem, MessageSquareQuote } from 'lucide-react';

const PricingSection = () => {
  const pricingPoints = [
    {
      title: "Founding Partner Discount",
      description: "Lock in a lifetime 50% discount as an early adopter during our MVP phase.",
      icon: <Percent className="text-champagne w-8 h-8" />
    },
    {
      title: "Value-Based Pricing",
      description: "Pay only for the capabilities you need, from integrations to on-premise LLMs.",
      icon: <Gem className="text-champagne w-8 h-8" />
    },
    {
      title: "Personalized Quote",
      description: "Let's discuss your specific needs and tailor a plan. Reach out via the form below.",
      icon: <MessageSquareQuote className="text-champagne w-8 h-8" />
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-offWhite">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center">Flexible Pricing for Founding Partners.</h2>
        <p className="text-base text-navy/80 mb-8 sm:mb-12 max-w-3xl mx-auto text-center px-4 sm:px-0">
           We believe in providing maximum value through flexible pricing tailored to your specific needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pricingPoints.map((point, index) => (
            <Card key={index} className="luxury-card border border-champagne/10 overflow-hidden hover:shadow-lg transition-all duration-300 bg-white text-center">
              <CardContent className="p-6 sm:p-8 flex flex-col items-center">
                <div className="mb-4 sm:mb-6 h-12 w-12 flex items-center justify-center">
                   {point.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{point.title}</h3>
                <p className="text-sm text-navy/70">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 