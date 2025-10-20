import { useState } from 'react';
import { Plug, Target, CheckCircle } from 'lucide-react';
// Demo button and VideoModal removed per plan

const HowItWorks = () => {
  // no demo modal

  const steps = [
    {
      number: "01",
      title: "Connect PMS",
      description: "Enter API keys and hit \"Save\". Link messaging, housekeeping/task, Slack/Teams, POS as desired.",
      icon: <Plug className="text-champagne w-7 h-7" />
    },
    {
      number: "02",
      title: "Set Guardrails",
      description: "Define upgrade fallback, VIP/family protection, and target occupancy — safe by design.",
      icon: <Target className="text-champagne w-7 h-7" />
    },
    {
      number: "03",
      title: "Activate Smart Overbooking",
      description: "Daily recommendations apply automatically with full visibility and control.",
      icon: <CheckCircle className="text-champagne w-7 h-7" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Headline ---------- */}
        <h2 className="text-center font-playfair text-2xl font-bold text-navy md:text-3xl mb-4">
          How It Works.
        </h2>
        <p className="mx-auto mb-8 sm:mb-12 max-w-4xl text-center text-base text-navy/70 px-4 sm:px-0">
          Connect. Set guardrails. Automate — limitless power in just a few clicks.
        </p>

        {/* ---------- Three‑step grid ---------- */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-lg border border-champagne/15 bg-offWhite p-6 sm:p-8 shadow"
            >
              <div className="mb-4 sm:mb-6 flex w-full items-center justify-between">
                <span className="font-playfair text-3xl sm:text-4xl text-gray opacity-25">{step.number}</span>
                <div className="flex h-8 w-8 items-center justify-center">{step.icon}</div>
              </div>
              <div className="mt-auto">
                <h3 className="mb-3 text-lg font-bold text-navy">{step.title}</h3>
                <p className="text-sm text-navy/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Tagline & CTA ---------- */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 text-center px-4 sm:px-0">
          <p className="max-w-4xl text-lg text-navy/70">Simple. Yet remarkably powerful.</p>
          <a href="/#automation-recipes" className="inline-flex items-center rounded-md border border-champagne text-champagne px-4 py-2 text-sm hover:bg-champagne/10">Then: Add Automations</a>
        </div>
      </div>

      {/* Demo modal removed */}
    </section>
  );
};

export default HowItWorks;
