// components/ProblemSection.tsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CloudRain, Mail, MapPin, UserCheck, Flame, Sparkles } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const scenarios = [
  {
    title: 'Storm on the radar? Guests stay dry.',
    text: 'AI checks the forecast, cues umbrellas at the door, schedules a hot‑cider welcome, and emails arrivals—before the first drop.',
    Icon: CloudRain,
  },
  {
    title: 'Inbox empties itself.',
    text: 'Every hour Auctores answers routine e-mails, flags sour sentiment, and escalates only what needs a human touch.',
    Icon: Mail,
  },
  {
    title: 'Traffic jam? It’s handled.',
    text: 'Real‑time traffic data lets Auctores delay airport pickups, push housekeeping, and shift dinner reservations.',
    Icon: MapPin,
  },
  {
    title: 'Personal déjà-vu at check-in.',
    text: 'Type a name and instant context appears: loves hibiscus spritzers, pine-nut allergy, last-stay upgrade. Welcome drink? Already en-route.',
    Icon: UserCheck,
  },
];

/* -------------------------------------------------------------------------- */
/*                               HOOKS / UTILS                                */
/* -------------------------------------------------------------------------- */

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handle = () => setPrefersReducedMotion(mq.matches);
    handle();
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);
  return prefersReducedMotion;
}

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

export default function ProblemSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="why-overbooking"
      className="relative isolate bg-gradient-to-b from-white via-white to-slate-50 py-28 md:py-32"
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
            Increase occupancy & reduce manual work
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base font-light text-navy/70 md:max-w-2xl lg:text-lg">
            Late cancels & no‑shows leave rooms empty; static rules over/undershoot; manual tweaks eat time.
          </p>
        </header>


        {/* Two‑column grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12 mt-8 sm:mt-12 md:mt-16">
          {/* TODAY'S REALITY */}
          <div className="flex flex-col space-y-5 sm:space-y-6 min-w-0">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy md:text-2xl">Today's reality — The Overbooking Gap</h3>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
            </div>
            
            <article className="relative flex flex-col flex-1 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50 min-w-0 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/40 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-5 sm:px-6 md:px-8 py-7 sm:py-8 md:py-10">
                {/* Header */}
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <h4 className="text-base sm:text-lg font-bold text-navy">Today — The Overbooking Gap</h4>
                </div>

                {/* Pain points list */}
                <ul className="space-y-3 sm:space-y-3">
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
          </div>

          {/* IMAGINE TOMORROW */}
          <div className="flex flex-col space-y-5 sm:space-y-6 min-w-0">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy md:text-2xl">Imagine tomorrow — Set‑and‑Safe Overbooking</h3>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
            </div>
            
            <article className="relative flex flex-col flex-1 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50 min-w-0 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/40 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-5 sm:px-6 md:px-8 py-7 sm:py-8 md:py-10">
                <div className="space-y-3">
                  <div className="text-sm text-navy/80 leading-relaxed">Dynamic Levels — per date & room type; learns cancel/no‑show patterns.</div>
                  <div className="text-sm text-navy/80 leading-relaxed">Guardrails by Design — no‑walk policy, upgrade fallback, VIP/family protection.</div>
                  <div className="text-sm text-navy/80 leading-relaxed">OTA‑Aware — different cancellation profiles handled safely.</div>
                  <div className="text-sm text-navy/80 leading-relaxed">Live Monitoring — deviation alerts and full audit log.</div>
                </div>

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
      </div>
    </section>
  );
}
