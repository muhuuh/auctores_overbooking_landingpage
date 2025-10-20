import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Activity, Eye, ToggleRight, Command, Repeat, Lock, MessageCircle } from 'lucide-react';

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3"><div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div><span className="text-sm text-navy/80 leading-relaxed">{children}</span></li>
);

const OverbookingAndAutomations = () => {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-offWhite">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-playfair text-2xl md:text-3xl font-bold text-navy mb-3">
          Overbooking + Automations.
        </h2>
        <h3 className="text-center text-base md:text-lg font-medium text-navy/80 mb-8">
          We are an automation platform that helps hotels optimise overbooking and handle heavy admin workload to reduce manual work and increase occupancy, profit, and guest satisfaction.
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left: Smart Overbooking Engine */}
          <Card className="border border-champagne/10 bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <Activity className="text-champagne w-6 h-6" />
                <h3 className="text-lg font-bold text-navy">Smart Overbooking Engine</h3>
              </div>
              <ul className="space-y-3">
                <Bullet>Dynamic Levels — per date & room type; learns cancel/no‑show patterns.</Bullet>
                <Bullet>Guardrails by Design — no‑walk policy, upgrade fallback, VIP/family protection.</Bullet>
                <Bullet>OTA‑Aware — different cancellation profiles handled safely.</Bullet>
                <Bullet>Live Monitoring — deviation alerts, quick nudges, full audit log.</Bullet>
              </ul>

            </CardContent>
          </Card>

          {/* Right: Admin Automations Library */}
          <Card className="border border-champagne/10 bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <MessageCircle className="text-champagne w-6 h-6" />
                <h3 className="text-lg font-bold text-navy">Admin Automations Library</h3>
              </div>
              <ul className="space-y-3">
                <Bullet>Guest Comms — confirmations, ETA reconfirm (48h), reminders, targeted upsells.</Bullet>
                <Bullet>Front Desk Ops — ID/registration prompts, late checkout/upgrade logic, folio checks.</Bullet>
                <Bullet>Back‑Office Tasks — housekeeping/maintenance routing from triggers; shift handovers.</Bullet>
                <Bullet>“Describe it” to add more — enable safely, stack as needed.</Bullet>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <span className="text-center text-base md:text-lg font-medium text-navy/80">
            Enable any task in 1 click.
          </span>
        </div>


        <div className="mt-8 text-center">
          <a href="/#cta" className="inline-flex items-center rounded-md bg-navy text-white px-6 py-3 text-sm border border-champagne/30 hover:border-champagne">
            Activate smart Overbooking & automation
          </a>
        </div>
      </div>
    </section>
  );
};

export default OverbookingAndAutomations;


