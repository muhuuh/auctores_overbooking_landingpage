import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Shield, Network, BarChart3, Zap, Target } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  highlight 
}: { 
  icon: React.ComponentType<{ className?: string }>, 
  title: string, 
  description: string,
  highlight?: string 
}) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-champagne/30 bg-white">
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-champagne/10 flex items-center justify-center group-hover:bg-champagne/20 transition-colors duration-300 mx-auto mb-4">
          <Icon className="w-6 h-6 text-champagne" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-navy text-lg mb-2">{title}</h3>
          <p className="text-navy/80 leading-relaxed">{description}</p>
          {highlight && (
            <div className="mt-3 p-3 bg-champagne/5 rounded-md border-l-2 border-champagne">
              <span className="text-sm font-medium text-navy">{highlight}</span>
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

const SmartOverbooking = () => {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-4">
            Auctores Smart Overbooking
          </h2>
          <p className="text-md md:text-lg font-medium text-navy/80 max-w-3xl mx-auto">
          Activate Smart Overbooking in just a 2 minutes and a few clicks. Start recovering revenue you're already losing.          </p>
        </div>

        {/* Main description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="bg-gradient-to-r from-champagne/5 to-champagne/10 border border-champagne/20 rounded-lg p-6 shadow-sm">
              <p className="text-base text-navy font-medium">
                Our system automatically adjusts overbooking levels to match your property's real cancellation patterns, maximizing occupancy while protecting every guest's experience.
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={Target}
            title="Ready from Day 1"
            description="Starts with your existing reservation history and improves continuously."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Adaptive Levels"
            description="Adjusts overbooking thresholds per date and room type, balancing occupancy and risk automatically."
          />
          <FeatureCard
            icon={Shield}
            title="Guardrails by Design"
            description="Built-in no-walk policy with automatic upgrading fallback, and VIP/family protection to ensure guest safety."
          />
          <FeatureCard
            icon={Network}
            title="Channel‑Aware"
            description="Safely handles different cancellation behaviors across channels, rate plans, and room types."
          />
        </div>

        {/* Call to action section */}
        <div className="text-center space-y-6 flex-col">

          
          <a 
            href="/#cta" 
            className="inline-flex items-center gap-2 rounded-md bg-navy text-white px-8 py-4 text-sm font-medium border border-champagne/30 hover:border-champagne hover:bg-navy/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <BarChart3 className="w-4 h-4" />
            Activate Smart Overbooking
          </a>

          <div className="max-w-2xl mx-auto">

            <a 
              href="/#safety" 
              className="text-sm text-champagne underline underline-offset-4 hover:text-champagne/80 transition-colors"
            >
              See Safety & Guardrails
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartOverbooking;


