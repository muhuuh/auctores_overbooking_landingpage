import React from 'react';
import { Card, CardContent } from './ui/card';
import { Command, Bot, BrainCircuit, ShieldCheck, Repeat, Lock, Lightbulb } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      title: "Unified Workspace",
      description: "A single Interface. Staff issue one command, agent executes across every system - from PMS, POS to emails.",
      icon: <Command className="text-champagne w-6 h-6" />
    },
    {
      title: "Proactive Service Agent",
      description: "Agent listens to every system and resolves issues before guests notice.",
      icon: <ShieldCheck className="text-champagne w-6 h-6" />
    },
    {
      title: "Automated & Scheduled",
      description: "Define tasks to be executed at the right moment, at any time interval. Automate across systems.",
      icon: <Repeat className="text-champagne w-6 h-6" />
    },
    {
      title: "Intelligent Memory",
      description: "Remembers preferences and outcomes to personalise future stays.",
      icon: <BrainCircuit className="text-champagne w-6 h-6" />
    },
    {
      title: "Privacy Sovereignty",
      description: "Deploy on‑prem or EU AWS. Self‑host the LLM so data never leaves your walls",
      icon: <Lock className="text-champagne w-6 h-6" />
    },
    {
      title: "Innovation Engine",
      description: "Leverage latest Tech and builds new processes. Continous innovation to delight guests.",
      icon: <Lightbulb className="text-champagne w-6 h-6" />
    }
  ];

  return (
    <section id="platform" className="section-padding bg-offWhite">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">Customer Obsession Engine.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="luxury-card border border-champagne/10 overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="mb-6 h-12 w-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-navy/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
