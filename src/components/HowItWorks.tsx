
import React from 'react';
import { Card, CardContent } from './ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect your tools",
      description: "One-click OAuth connections to your existing systems",
      icon: "🔌"
    },
    {
      number: "02",
      title: "Tell the agent your KPIs",
      description: "Set goals and detailed instructions for your intelligent assistant",
      icon: "📈"
    },
    {
      number: "03",
      title: "Watch tasks close themselves",
      description: "Monitor as your operations become more efficient and guests feel more valued",
      icon: "✅"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-6">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-luxury mb-12 text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="luxury-card border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-5xl opacity-50 text-luxury-accent">{step.number}</span>
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-luxury mb-4">{step.title}</h3>
                <p className="text-luxury-muted">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 px-6">
          <div className="bg-luxury-light rounded-lg p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600" 
                  alt="SpiderLayer dashboard example" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-luxury mb-4">Intelligent Memory That Learns</h3>
                <p className="text-luxury-muted mb-4">
                  SpiderLayer's agents remember guest preferences, past interactions, and learn from outcomes to continuously improve service quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-luxury-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Human-like memory across all systems
                  </li>
                  <li className="flex items-center text-luxury-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Goal-driven intelligence based on your KPIs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
