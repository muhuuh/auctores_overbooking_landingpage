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
    title: 'Inbox triage, minus the triage.',
    text: 'Every hour Auctores answers routine e-mails, flags sour sentiment, and escalates only what needs a human touch.',
    Icon: Mail,
  },
  {
    title: 'Traffic snarl? Guests stay relaxed.',
    text: 'Real‑time traffic data lets Auctores delay airport pickups, push housekeeping, and shift dinner reservations.',
    Icon: MapPin,
  },
  {
    title: 'Check-in déjà vu — by design.',
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
      id="problem"
      className="relative isolate bg-gradient-to-b from-white via-white to-slate-50 py-28 md:py-32"
    >
      {/* Decorative radial blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-0 z-0 h-96 bg-[radial-gradient(450px_240px_at_top,theme(colors.champagne/5),transparent)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Headline */}
        <header className="mb-20 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-navy lg:text-4xl">
            Guests remember&nbsp;<span className="whitespace-nowrap">smiles,</span> not spreadsheets.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light text-navy/70 md:max-w-2xl lg:text-lg">
            Your team loses <span className="font-semibold text-navy">42 minutes</span> per shift juggling disconnected tools.
          </p>
        </header>

        {/* Two‑column grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 md:items-stretch">
          {/* TODAY'S REALITY */}
          <div className="flex flex-col space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy md:text-2xl">Today's reality</h3>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
            </div>
            
            <article className="relative flex flex-col flex-1 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/50 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-8 py-10">
                {/* Header with icon */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-champagne/10">
                    <Flame className="h-6 w-6 text-champagne" />
                  </div>
                  <h4 className="text-lg font-bold text-navy">The Daily Madness</h4>
                </div>
                
                {/* Pain points list */}
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">3 apps, 6 copy-pastes — and one lost VIP upsell.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Housekeeping learns about check-outs an hour too late.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Complaints surface only after the TripAdvisor review.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">The 9:30 AM checkout line tests every smile.</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          {/* IMAGINE TOMORROW */}
          <div className="flex flex-col space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy md:text-2xl">Imagine tomorrow</h3>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
            </div>
            
            <article className="relative flex flex-col flex-1 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/50 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-8 py-10 flex flex-col flex-1">
                {/* Swiper carousel */}
                <div className="flex-1 flex flex-col">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop
                    pagination={{ 
                      clickable: true,
                      bulletClass: 'swiper-pagination-bullet',
                      bulletActiveClass: 'swiper-pagination-bullet-active'
                    }}
                    autoplay={
                      prefersReducedMotion ? false : { delay: 6000, disableOnInteraction: false }
                    }
                    className="!pb-12 w-full h-full"
                    style={{
                      '--swiper-pagination-color': '#0F1B26',
                      '--swiper-pagination-bullet-inactive-color': 'rgba(15, 27, 38, 0.3)',
                      '--swiper-pagination-bullet-inactive-opacity': '1',
                      '--swiper-pagination-bullet-size': '8px',
                      '--swiper-pagination-bullet-horizontal-gap': '4px'
                    } as React.CSSProperties}
                    aria-label="Future scenarios carousel"
                  >
                    {scenarios.map(({ Icon, title, text }, i) => (
                      <SwiperSlide key={i} className="!w-full !h-auto">
                        <div className="space-y-4">
                          {/* Icon and Title on same line */}
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-champagne/10 flex-shrink-0">
                              <Icon className="h-6 w-6 text-champagne" />
                            </div>
                            <h4 className="text-base font-bold text-navy leading-tight">{title}</h4>
                          </div>
                          
                          {/* Description */}
                          <p className="text-sm text-navy/70 leading-relaxed">{text}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* CTA Bridge */}
        <div className="relative mx-auto mt-28 max-w-3xl">
          <div className="animate-bounce-slow absolute left-1/2 -top-6 -translate-x-1/2 rounded-full bg-white p-1 ring-2 ring-champagne shadow-lg">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne text-xl text-white">
              ✓
            </span>
          </div>

          <div className="rounded-2xl bg-gradient-to-tr from-champagne/80 to-champagne/60 px-10 py-12 text-center text-white shadow-xl">
            <p className="text-lg font-medium leading-relaxed">
              <strong>Auctores</strong> unites PMS, POS, email and bespoke tools under one AI command bar. Describe the outcome once, nightly routine or one-off, and the agent does the rest.
            </p>
            <div className="mx-auto my-6 h-px w-24 bg-white/30"></div>
            <p className="text-base font-medium leading-relaxed">
              Most tasks wrap up in <span className="font-bold">20 seconds</span> - often before anyone even asks.
            </p>
          </div>
        </div>
        
        {/* Scroll cue */}
        <div className="mt-16 text-center">
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
