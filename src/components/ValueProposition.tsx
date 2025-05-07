import React from 'react';
import { Card, CardContent } from './ui/card';
import { Command, Bot, BrainCircuit, ShieldCheck, Repeat, Lock, Lightbulb } from 'lucide-react';

const ValueProposition = () => {

    const features = [
      {
        title: 'Unified Workspace',
        description:
          'One command bar for every system. Staff type a sentence; Auctores orchestrates PMS, POS, email, and beyond.',
        icon: <Command className="text-champagne w-6 h-6" />,
      },
      {
        title: 'Proactive Service Agent',
        description:
          'The agent listens to live data and silently orchestrates and fixes hiccups before guests notice — no tickets, no drama.',
        icon: <ShieldCheck className="text-champagne w-6 h-6" />,
      },
      {
        title: 'Automated & Scheduled',
        description:
          'Schedule any workflow — hourly, daily, or on‑demand — and watch it execute across tools right on time.',
        icon: <Repeat className="text-champagne w-6 h-6" />,
      },
      {
        title: 'Intelligent Memory',
        description: 'Learns preferences and outcomes to craft ever‑more‑personal stays.',
        icon: <BrainCircuit className="text-champagne w-6 h-6" />,
      },
      {
        title: 'Privacy Sovereignty',
        description: 'Deploy on‑prem or EU AWS. Self‑host the LLM so data never leaves your walls.',
        icon: <Lock className="text-champagne w-6 h-6" />,
      },
      {
        title: 'Innovation Engine',
        description: 'New automations land continuously, so you surprise guests before competitors can copy.',
        icon: <Lightbulb className="text-champagne w-6 h-6" />,
      },
    ];

  return (
    <section id="features" className="section-padding bg-offWhite">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-navy md:text-4xl mb-4 font-playfair">
          Customer Obsession Engine.
        </h2>        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-navy/70">
          Invisible issue‑solving in the background. Instant, any‑tool commands on demand.
        </p>
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
