
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Plug, Target, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect your tools",
      description: "One-click OAuth links all systems.",
      icon: <Plug className="text-champagne w-6 h-6" />
    },
    {
      number: "02",
      title: "Tell the agent your KPIs",
      description: "Set goals and detailed rules.",
      icon: <Target className="text-champagne w-6 h-6" />
    },
    {
      number: "03",
      title: "Watch tasks close themselves",
      description: "Operations run quietly in the background.",
      icon: <CheckCircle className="text-champagne w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="luxury-card border border-champagne/10 overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-5xl opacity-30 text-gray font-playfair">{step.number}</span>
                  <div className="h-10 w-10">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-navy/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
