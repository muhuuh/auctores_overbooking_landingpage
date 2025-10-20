// components/ProblemSection.tsx
import React from 'react';
import TrustBand from './TrustBand';

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function ProblemSection() {
  return (
    <section
      id="why-overbooking"
      className="relative isolate bg-offWhite py-28 md:py-32"
    >
      {/* Decorative radial blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-0 z-0 h-96 bg-[radial-gradient(450px_240px_at_top,theme(colors.champagne/5),transparent)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Headline */}
        <header className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-2xl sm:text-3xl font-bold tracking-tight text-navy lg:text-4xl">
          Maximize Revenue with Intelligent Overbooking
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base font-light text-navy/70 md:max-w-2xl lg:text-lg">
          Stop losing revenue to last-minute cancellations and no-shows. AI-powered overbooking maximizes occupancy while protecting against risks.
          </p>
        </header>


        {/* Two‑column grid */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          {/* Section titles - separate row */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-12 mb-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy md:text-2xl min-h-[3.5rem] flex items-center justify-center">Today's reality — The Overbooking Gap</h3>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy md:text-2xl min-h-[3.5rem] flex items-center justify-center">Imagine tomorrow — Set‑and‑Safe Overbooking</h3>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
            </div>
          </div>

          {/* Equal height cards - same row */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12">
            {/* TODAY'S REALITY */}
            <article className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 h-full">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/40 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-5 sm:px-6 md:px-8 py-7 sm:py-8 md:py-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <h4 className="text-base sm:text-lg font-bold text-navy">Today — The Overbooking Gap</h4>
                </div>

                {/* Pain points list */}
                <ul className="space-y-3 sm:space-y-3 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Late cancels & no‑shows leave rooms empty.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Static rules over/undershoot, especially across OTAs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Manual tweaks eat time; risky without guardrails.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* IMAGINE TOMORROW */}
            <article className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 h-full">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/40 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-5 sm:px-6 md:px-8 py-7 sm:py-8 md:py-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <h4 className="text-base sm:text-lg font-bold text-navy">Imagine tomorrow — Set‑and‑Safe Overbooking</h4>
                </div>

                {/* Benefits list */}
                <ul className="space-y-3 sm:space-y-3 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Dynamic Levels — per date & room type; learns cancel/no‑show patterns.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Guardrails by Design — no‑walk policy, upgrade fallback, VIP/family protection.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">OTA‑Aware — different cancellation profiles handled safely.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Live Monitoring — deviation alerts and full audit log.</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <a
            href="/#how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-navy transition hover:text-champagne"
          >
            SEE&nbsp;HOW&nbsp;IT&nbsp;WORKS
            <span className="animate-bounce">↓</span>
          </a>
        </div>

        {/* Trust/Credential Pills */}
        <div className="mt-8">
          <TrustBand />
        </div>
      </div>
    </section>
  );
}
