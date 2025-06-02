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
      id="problem"
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
            Guests remember&nbsp;<span className="whitespace-nowrap">smiles,</span> not spreadsheets.
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base font-light text-navy/70 md:max-w-2xl lg:text-lg">
            Juggling disconnected tools steals <span className="font-semibold text-navy">42 minutes</span> per shift - enough time to turn a stay into a story.
          </p>
        </header>

        {/* Two‑column grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12">
          {/* TODAY'S REALITY */}
          <div className="flex flex-col space-y-5 sm:space-y-6 min-w-0">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy md:text-2xl">Today's reality</h3>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
            </div>
            
            <article className="relative flex flex-col flex-1 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50 min-w-0 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/40 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-5 sm:px-6 md:px-8 py-7 sm:py-8 md:py-10">
                {/* Header with icon */}
                <div className="mb-6 sm:mb-7 md:mb-8 flex items-center gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-champagne/10 flex-shrink-0">
                    <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-champagne" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-navy">The Daily Madness</h4>
                </div>
                
                {/* Pain points list */}
                <ul className="space-y-3 sm:space-y-3">

                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Chatbot promises; staff hunts the right tab and tool.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">Mid-shift handover - 20 sticky notes, zero context.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">The 9:30 AM checkout line tests nervs of guests and staff.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-champagne/60 flex-shrink-0"></div>
                    <span className="text-sm text-navy/80 leading-relaxed">3 tools, 6 copy-pastes — and one lost VIP upsell.</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          {/* IMAGINE TOMORROW */}
          <div className="flex flex-col space-y-5 sm:space-y-6 min-w-0">
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy md:text-2xl">Imagine tomorrow</h3>
              <div className="mx-auto mt-2 h-0.5 w-16 bg-gradient-to-r from-transparent via-champagne to-transparent"></div>
            </div>
            
            <article className="relative flex flex-col flex-1 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200/50 min-w-0 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
              {/* Accent border */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-navy/40 to-navy/10"></div>
              
              {/* Content */}
              <div className="px-5 sm:px-6 md:px-8 py-7 sm:py-8 md:py-10 flex flex-col flex-1">
                {/* Swiper carousel */}
                <div className="flex-1 flex flex-col w-full overflow-hidden min-w-0">
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
                        <div className="space-y-4 sm:space-y-5">
                          {/* Icon and Title on same line */}
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-champagne/10 flex-shrink-0">
                              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-champagne" />
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
        <div className="relative mx-auto mt-14 sm:mt-20 md:mt-20 max-w-3xl px-4 sm:px-0">
          <div className="animate-bounce-slow absolute left-1/2 -top-6 -translate-x-1/2 rounded-full bg-white p-1 ring-2 ring-champagne shadow-lg z-20">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne text-xl text-white">
              ✓
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-slate-50/30 to-champagne/5 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 text-center shadow-2xl ring-1 ring-champagne/20 border border-champagne/15 z-10">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(15,27,38,0.02),transparent_50%)]"></div>
            
            {/* Content */}
            <div className="relative">
              <h2 className='text-base sm:text-lg font-bold'>One command bar. Endless guest moments.</h2>
              <p className="text-sm sm:text-base f leading-relaxed text-navy mt-6">
                <span className="inline-block bg-gradient-to-r from-champagne to-champagne/80 bg-clip-text text-transparent font-bold">Auctores</span> stitches PMS, POS, email and custom tools into a single AI cockpit. Describe any outcome, nightly routine or one-off, and the agent does the rest.
              </p>
              <p className="text-sm sm:text-base f leading-relaxed text-navy mt-6">
                Most tasks wrap up in <span className="font-bold text-navy">20 seconds</span> - often before anyone even asks.
              </p>
              
              {/* Elegant divider */}
              <div className="mx-auto my-6 sm:my-7 flex items-center justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-champagne/60 to-transparent"></div>
                <div className="mx-3 h-1 w-1 rounded-full bg-champagne/40"></div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-champagne/60 to-transparent"></div>
              </div>
              
              <p className="text-sm sm:text-base font-medium leading-relaxed text-navy/70">
              Your teams win back hours; your guests remember <span className="inline-block bg-gradient-to-r from-champagne to-champagne/80 bg-clip-text text-transparent font-bold">magic.</span> 
              </p>
              
            </div>
          </div>
        </div>
        
        {/* Scroll cue */}
        <div className="mt-12 sm:mt-16 text-center">
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
