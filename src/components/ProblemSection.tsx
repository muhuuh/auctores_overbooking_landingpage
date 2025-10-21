// components/ProblemSection.tsx
import React from 'react';
import TrustBand from './TrustBand';
import { AlertTriangle, CheckCircle } from 'lucide-react';

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
          Turn Cancellations Into Revenue
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base font-light text-navy/70 md:max-w-2xl lg:text-lg">
          Optimize occupancy, minimize revenue loss, and maintain control without guesswork or risk.
          </p>
          
          {/* KPIs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-8 sm:mt-10">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">35%</div>
              <div className="text-sm text-navy/70 text-center">Revenue lost on<br />cancellation</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-champagne/30"></div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">78%</div>
              <div className="text-sm text-navy/70 text-center">walked guest<br />don't return</div>
            </div>
          </div>
        </header>


        {/* Two‑column grid */}
        <div className="mt-8 sm:mt-12 md:mt-16">

          {/* Equal height cards - same row */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12">
            {/* TODAY'S REALITY */}
            <article className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 h-full">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/40 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-5 sm:px-6 md:px-8 py-7 sm:py-8 md:py-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-8 sm:mb-7 md:mb-8">
                  <div className="flex items-center justify-center mb-3">
                    <AlertTriangle className="w-6 h-6 text-champagne/80" />
                  </div>
                  <h3 className="text-center text-xl font-bold text-navy md:text-2xl">Empty Rooms. Lost Revenue.</h3>
                </div>
                {/* Pain points list */}
                <ul className="space-y-3 sm:space-y-3 flex-1 justify-between">
                  
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Valuable rooms go empty due to last-minute cancellations and no-shows.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Up to half of OTA bookings never show, leaving revenue on the table.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Manual tweaks take time and carry risk — occupancy optimization is complex.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">No single approach works for every property.</span>
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
                <div className="mb-8 sm:mb-7 md:mb-8">
                  <div className="flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-champagne/80" />
                  </div>
                  <h3 className="text-center text-xl font-bold text-navy md:text-2xl">Advanced Overbooking, Without the Headache</h3>
                </div>

                {/* Benefits list */}
                <ul className="space-y-3 sm:space-y-3 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Mitigate and anticipate revenue loss with real time smart availability buffers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Keep the benefits of OTAs without the risk of lost bookings.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Automatically adjust overbooking thresholds — no manual work required.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Tailors overbooking to your property’s unique patterns.</span>
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
