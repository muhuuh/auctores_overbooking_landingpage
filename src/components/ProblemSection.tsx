// components/ProblemSection.tsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CloudRain, Mail, MapPin, UserCheck, Flame } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const scenarios = [
  {
    title: 'Storm on the radar? Guests stay dry.',
    text: 'AI tracks weather forecast and orchestrates umbrellas at the door, hot-cider greetings, packing-tip e-mails - before the first drop falls.',
    Icon: CloudRain,
  },
  {
    title: 'Inbox triage, minus the triage.',
    text: '	Every hour Auctores answers routine e-mails, flags sour sentiment, and escalates only what needs a human touch.',
    Icon: Mail,
  },
  {
    title: 'Traffic snarl? Guests stay relaxed.',
    text: 'With traffic data, Auctores delays airport transfers, pushes housekeeping, and shifts dinner reservations.',
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
        <header className="mb-16 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-navy lg:text-5xl">
            Guests remember&nbsp;<span className="whitespace-nowrap">smiles,</span> not spreadsheets.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light text-navy/70 md:max-w-2xl lg:text-xl">
            Your team loses <span className="font-semibold text-navy">42 minutes</span> per shift juggling disconnected tools.
          </p>
        </header>

        {/* Two‑column grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* TODAY */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-navy">Today's reality</h3>
            <article className="relative h-full rounded-2xl bg-white px-8 pt-8 shadow-lg/10 ring-1 ring-slate-200">
              <span className="absolute inset-y-4 left-0 w-1 rounded-l-2xl bg-champagne/70" />
              <ul className="list-inside list-disc space-y-3 text-navy/80 marker:text-champagne">
                <Flame className="text-champagne w-6 h-6" />
                <h4 className="font-semibold text-navy">The Daily Madness</h4>
                <li>3 apps, 6 copy-pastes — and one lost VIP upsell.</li>
                <li>Housekeeping learns about check-outs an hour too late.</li>
                <li>Complaints surface only after the TripAdvisor review.</li>
                <li>The 9:30 AM checkout line tests every smile.</li>
              </ul>
            </article>
          </div>

          {/* TOMORROW */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-navy">Imagine tomorrow</h3>
            <article className="relative h-full rounded-2xl bg-white px-6 py-2 shadow-lg/10 ring-1 ring-slate-200">
              <span className="absolute inset-y-4 left-0 w-1 rounded-l-2xl bg-champagne/70" />
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop
                pagination={{ clickable: true }}
                autoplay={
                  prefersReducedMotion ? false : { delay: 8000, disableOnInteraction: false }
                }
                className="!pb-12"
                aria-label="Future scenarios carousel"
              >
                {scenarios.map(({ Icon, title, text }, i) => (
                  <SwiperSlide key={i} className="!w-full">
                    <div className="relative flex h-full flex-col gap-4 rounded-xl bg-white/75 p-4 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-champagne" />
                      <h4 className="font-semibold text-navy">{title}</h4>
                      <p className="font-light text-navy/80">{text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </article>
          </div>
        </div>

        {/* CTA Bridge */}
        <div className="relative mx-auto mt-24 max-w-3xl">
          <div className="animate-bounce-slow absolute left-1/2 -top-6 -translate-x-1/2 rounded-full bg-white p-1 ring-2 ring-champagne">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne text-2xl text-white">
              ✓
            </span>
          </div>

          <div className="rounded-2xl bg-gradient-to-tr from-champagne/70 to-champagne/50 px-10 py-12 text-center text-white shadow-lg/10">
            <p className="text-xl font-medium leading-relaxed">
              With <strong>Auctores</strong>, bundle all your tools, be it PMS, POS, housekeeping, or emails, into one interface. Describe the outcome once, whether it’s a nightly routine or a one‑off request, and the agent takes it from there.
            </p>
            <br />
            <p className="text-xl font-medium leading-relaxed">
              Most tasks wrap up in <span className="font-semibold">20 seconds</span> - often before anyone even asks.
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-14 text-center">
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
