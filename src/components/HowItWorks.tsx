import React from 'react';
import { Plug, Target, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Plug in and relax",
      description: "Enter OAuth, API keys or local APIs - no other changes needed to link all systems.",
      icon: <Plug className="text-champagne w-7 h-7" />
    },
    {
      number: "02",
      title: "Teach your standards",
      description: "Set KPIs, tone of voice, privacy policy or any instruction you like to share. All in one interface.",
      icon: <Target className="text-champagne w-7 h-7" />
    },
    {
      number: "03",
      title: "Guests feel magic",
      description: "Agent auto handles tasks, staff get support when needed; focus on creating memories.",
      icon: <CheckCircle className="text-champagne w-7 h-7" />
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center font-playfair">
            How It Works.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-offWhite border border-champagne/15 shadow p-8 rounded-lg h-full flex flex-col">
              <div className="flex items-center justify-between w-full mb-6">
                <span className="text-5xl opacity-25 text-gray font-playfair">{step.number}</span>
                <div className="h-8 w-8 flex items-center justify-center">{step.icon}</div>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-navy/70 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
