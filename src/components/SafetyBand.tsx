import React from 'react';

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs rounded-full border border-champagne/40 bg-white px-3 py-2 text-navy/80">{children}</span>
);

const SafetyBand = () => {
  return (
    <section id="safety" className="py-10 sm:py-12 bg-offWhite">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
          <Chip>Configurable Overbooking target</Chip>
          <Chip>Upgrade fallback</Chip>
          <Chip>VIP/family protection</Chip>
          <Chip>Full audit log</Chip>
          <Chip>Instant off switch</Chip>
        </div>
      </div>
    </section>
  );
};

export default SafetyBand;


