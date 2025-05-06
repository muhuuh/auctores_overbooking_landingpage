// components/ProblemSection.tsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CloudRain, Mail, MapPin, UserCheck } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const scenarios = [
  {
    title: 'Storm incoming? Already handled.',
    text: 'AI stages umbrellas, greets arrivals with hot cider, and emails packing tips—before the first drop falls.',
    Icon: CloudRain,
  },
  {
    title: 'Inbox triage with sentiment radar.',
    text: 'Hourly, the agent solves routine emails, flags negative tone, and escalates only what needs a human apology.',
    Icon: Mail,
  },
  {
    title: 'Traffic snarl? Guests stay relaxed.',
    text: 'Real‑time traffic data delays airport transfers, shifts cleaning, and reschedules dinner—no one calls reception.',
    Icon: MapPin,
  },
  {
    title: 'Check‑in, meet déjà vu.',
    text: 'Type a name and see: loves hibiscus spritzers, allergic to pine nuts, promotion last stay. Welcome drink: handled.',
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
      className="relative isolate py-28 md:py-32 bg-gradient-to-b from-white via-white to-slate-50"
    >
      {/* ---- Decorative radial blob (lighter) ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-0 z-0 h-96 bg-[radial-gradient(450px_240px_at_top,theme(colors.champagne/5),transparent)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* ---- Headline ---- */}
        <header className="mb-16 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-5xl lg:text-6xl font-bold tracking-tight text-navy">
            Guests remember&nbsp;<span className="whitespace-nowrap">smiles,</span> not
            spreadsheets.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg lg:text-xl text-navy/70 font-light">
            Your team loses&nbsp;
            <span className="font-semibold text-navy">42 minutes</span>&nbsp;per shift
            juggling disconnected tools.
          </p>
        </header>

        {/* ---- Two‑column grid ---- */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* ====== TODAY CARD ====== */}
          <article className="relative rounded-2xl bg-white p-8 shadow-lg/10 ring-1 ring-slate-200">
            <span className="absolute inset-y-0 left-0 w-1 rounded-tr-2xl rounded-br-2xl bg-champagne/70" />
            <h3 className="mb-5 text-lg font-semibold text-navy">Today’s reality</h3>
            <ul className="space-y-3 list-disc list-inside marker:text-champagne text-navy/80">
              <li>
                <span className="font-medium text-navy">3 apps</span>,&nbsp;
                <span className="font-medium text-navy">6 copy‑pastes</span>, one missed
                upsell per VIP.
              </li>
              <li>Housekeeping hears about check‑outs an hour late.</li>
              <li>Complaints surface only after the TripAdvisor review.</li>
            </ul>
          </article>

          {/* ====== TOMORROW CARD (with Swiper) ====== */}
          <article className="relative rounded-2xl bg-white p-8 shadow-lg/10 ring-1 ring-slate-200">
            <span className="absolute inset-y-0 left-0 w-1 rounded-tr-2xl rounded-br-2xl bg-champagne/70" />
            <h3 className="mb-5 text-lg font-semibold text-navy">Imagine tomorrow</h3>

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
                  <div className="relative flex h-full flex-col gap-4 rounded-xl bg-white/75 backdrop-blur-sm p-6 ring-1 ring-slate-200">
                    <Icon className="h-6 w-6 text-champagne" />
                    <h4 className="font-semibold text-navy">{title}</h4>
                    <p className="font-light text-navy/80">{text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </article>
        </div>

        {/* ---- CTA Bridge ---- */}
        <div className="relative mx-auto mt-24 max-w-3xl">
          <div className="absolute left-1/2 -top-6 -translate-x-1/2 rounded-full bg-white p-1 ring-2 ring-champagne animate-bounce-slow">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne text-white text-2xl">
              ✓
            </span>
          </div>

          <div className="rounded-2xl bg-gradient-to-tr from-champagne/70 to-champagne/50 px-10 py-12 text-center text-white shadow-lg/10">
            <p className="text-xl/relaxed font-medium">
              With <strong>Auctores</strong>, every request is one command, one layer, closed
              in <span className="font-semibold">25 seconds</span>. Your team gets the{' '}
              <span className="font-semibold">other&nbsp;14 minutes</span> back to surprise
              and delight.
            </p>
          </div>
        </div>

        {/* ---- Scroll cue ---- */}
        <div className="mt-14 text-center">
          <a
            href="#features"
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
