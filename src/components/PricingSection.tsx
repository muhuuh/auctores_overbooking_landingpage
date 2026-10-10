import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Percent, Gem, MessageSquareQuote } from 'lucide-react';

const PricingSection = () => {
  const pricingPoints = [
    {
      title: "Keep 93%",
      description: "Your hotel keeps 93% of the room revenue recovered through Auctores Smart Overbooking.",
      icon: <Percent className="text-champagne w-8 h-8" />
    },
    {
      title: "You only pay if it works",
      description: "Our fee is 7% of recovered room revenue. If no revenue is recovered, you pay nothing.",
      icon: <Gem className="text-champagne w-8 h-8" />
    },
    {
      title: "Get started",
      description: "Tell us your hotel name and PMS. We will send access and setup instructions; a walkthrough is optional.",
      icon: <MessageSquareQuote className="text-champagne w-8 h-8" />
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-offWhite">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center">Pricing</h2>


        {/* Basic Overbooking Feature */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl border border-champagne/10 p-8 sm:p-10 text-center max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4">Smart Overbooking Feature</h3>
            <div className="text-3xl sm:text-4xl font-bold text-navy mb-2">You only pay if it works.</div>
            <p className="text-base text-navy/70 mb-4">Keep 93% of recovered room revenue. Auctores charges 7%. No recovery means no fee.</p>
            <a href="https://www.auctores.ai/pricing" className="text-navy underline">See current pricing details</a>
          </div>
        </div>

        {/* Founding Partners Section */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-navy mb-4 text-center">Pricing linked to recovered revenue</h3>
          <p className="text-base text-navy/80 mb-8 sm:mb-12 max-w-3xl mx-auto text-center px-4 sm:px-0">
             The fee applies to recovered room revenue, not your hotel's total revenue, forecasts or future booking pipeline.
          </p>
        </div>

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
