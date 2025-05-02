
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Command, Bot, BrainCircuit } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      title: "Reactive Workspace",
      description: "Staff issue one command, agent executes across PMS, spa, POS.",
      icon: <Command className="text-champagne" />
    },
    {
      title: "Proactive Service Radar",
      description: "Agent listens to every system and resolves issues before guests notice.",
      icon: <Bot className="text-champagne" />
    },
    {
      title: "Intelligent Memory",
      description: "Remembers preferences and outcomes to personalise future stays.",
      icon: <BrainCircuit className="text-champagne" />
    }
  ];

  return (
    <section id="platform" className="section-padding bg-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">Platform Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="luxury-card border-0 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-6 h-12 w-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
