
import React from 'react';
import { Card, CardContent } from './ui/card';

const ValueProposition = () => {
  const features = [
    {
      title: "Reactive Assistance",
      description: "Ask once, our agent executes across PMS, spa, POS, and more. Staff can use all tools within a single interface, maintaining full functionality while eliminating constant switching.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
      )
    },
    {
      title: "Proactive Intelligence",
      description: "The agent listens across all systems and takes action when needed. Set detailed instructions for how guests should be served, while maintaining a continuously updated summary of actions taken.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/><path d="M16 8V5c0-1.1.9-2 2-2"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8a2 2 0 0 1 2 2v1"/><path d="M20 13v-1a2 2 0 0 0-2-2"/></svg>
      )
    }
  ];

  return (
    <section id="features" className="py-16 px-6">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-luxury mb-12 text-center">Our Value Proposition</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="luxury-card border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6 h-12 w-12 bg-luxury-light rounded-full flex items-center justify-center text-luxury">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-luxury mb-4">{feature.title}</h3>
                <p className="text-luxury-muted">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-luxury-muted italic">
            "The spider layer connects all your existing tools, creating a unified system greater than the sum of its parts."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
