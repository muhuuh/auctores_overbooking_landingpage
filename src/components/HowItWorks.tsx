import { useState } from 'react';
import { Plug, Target, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const HowItWorks = () => {
  const [showDemo, setShowDemo] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Connect in Seconds",
      description: "Enter API keys and hit “Save”. Auctores links every system instantly. No other changes needed to link all your tools.",
      icon: <Plug className="text-champagne w-7 h-7" />
    },
    {
      number: "02",
      title: "Set the Rules",
      description: "Set goals and tone of voice, create recurring tasks and checks with a single form. All in one interface, in a few clicks.",
      icon: <Target className="text-champagne w-7 h-7" />
    },
    {
      number: "03",
      title: "Automation 24/7",
      description: "One command triggers multi‑tool workflows while background jobs watch & notify your team around the clock.",
      icon: <CheckCircle className="text-champagne w-7 h-7" />
    }
  ];

  return (
<section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* ---------- Headline ---------- */}
        <h2 className="text-center font-playfair text-2xl font-bold text-navy md:text-3xl mb-4">
          How It Works.
        </h2>
        <p className="mx-auto mb-12 max-w-4xl text-center text-base text-navy/70">
          Connect. Configure. Automate — Limitless power in under five clicks.
        </p>

        {/* ---------- Three‑step grid ---------- */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-lg border border-champagne/15 bg-offWhite p-8 shadow"
            >
              <div className="mb-6 flex w-full items-center justify-between">
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
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="max-w-4xl text-lg text-navy/70">Simple. Yet remarkably powerful.</p>
          <Button
            variant="outline"
            className="h-auto rounded-md border border-champagne bg-transparent px-8 py-4 text-base font-medium text-champagne transition-all duration-300 hover:bg-champagne/10"
            onClick={() => setShowDemo(true)}
          >
            View 2 min Demo
          </Button>
        </div>
      </div>

      {/* ---------- Demo Modal ---------- */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl">
            <button
              aria-label="Close demo"
              onClick={() => setShowDemo(false)}
              className="absolute right-4 top-4 text-navy transition hover:text-champagne focus:outline-none"
            >
              <div className="h-6 w-6" />
            </button>
            <iframe
              title="Auctores 2-minute demo video"
              src="https://player.vimeo.com/video/000000000?autoplay=1&title=0&byline=0&portrait=0"
              className="aspect-video w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
