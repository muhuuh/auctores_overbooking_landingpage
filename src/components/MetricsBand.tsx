import React from 'react';

const MetricItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/70 flex-shrink-0"></div>
    <div className="text-navy/80 text-sm"><span className="font-semibold text-navy">{value}</span> {label}</div>
  </div>
);

const MetricsBand = () => {
  return (
    <section className="relative isolate bg-white py-14 sm:py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <header className="mb-8 sm:mb-10 text-center">
          <h2 className="text-center font-playfair text-2xl md:text-3xl font-bold text-navy">Why it matters — in numbers.</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Efficiency drag */}
          <div className="rounded-2xl border border-champagne/20 bg-offWhite p-6 sm:p-8 shadow">
            <h4 className="text-base font-bold text-navy mb-4">Efficiency drag</h4>
            <div className="space-y-3">
              <MetricItem value="~30%" label="of the shift is admin work." />
              <MetricItem value="Up to 50%" label="of operating costs is labor." />
              <MetricItem value="Up to 45%" label="employee turnover linked to dissatisfaction." />
            </div>
          </div>

          {/* OTA & overbooking reality */}
          <div className="rounded-2xl border border-champagne/20 bg-offWhite p-6 sm:p-8 shadow">
            <h4 className="text-base font-bold text-navy mb-4">OTA & overbooking reality</h4>
            <div className="space-y-3">
              <MetricItem value="42% vs 18%" label="cancellation rate: OTA vs direct." />
              <MetricItem value="Up to 35%" label="of on‑the‑books revenue lost to cancellations." />
              <MetricItem value="78%" label="of walked guests don’t return — guardrails matter." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsBand;


