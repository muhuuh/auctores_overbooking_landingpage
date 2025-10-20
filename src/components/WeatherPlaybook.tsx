import React, { useState, useEffect } from 'react';
import { CloudSun, Users, Mail, Umbrella, ClipboardList, Slack } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Step = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-champagne/10 text-champagne mb-3">
      {icon}
    </div>
    <h4 className="text-sm font-semibold text-navy mb-1">{title}</h4>
    <p className="text-xs text-navy/70 max-w-[200px]">{desc}</p>
  </div>
);

const WeatherPlaybook = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handle = () => setPrefersReducedMotion(mq.matches);
    handle();
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  const scenarios = [
    {
      title: 'Storm on the radar? Guests stay dry.',
      text: 'AI checks the forecast, cues umbrellas at the door, schedules a hot‑cider welcome, and emails arrivals—before the first drop.',
    },
    {
      title: 'Inbox empties itself.',
      text: 'Every hour Auctores answers routine e‑mails, flags sour sentiment, and escalates only what needs a human touch.',
    },
    {
      title: 'Traffic jam? It’s handled.',
      text: 'Real‑time traffic data lets Auctores delay airport pickups, push housekeeping, and shift dinner reservations.',
    },
    {
      title: 'Personal déjà‑vu at check‑in.',
      text: 'Type a name and instant context appears: loves hibiscus spritzers, pine‑nut allergy, last‑stay upgrade. Welcome drink? Already en‑route.',
    },
  ];
  return (
    <section id="automation-recipes" className="py-16 sm:py-20 md:py-24 bg-offWhite">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-playfair text-2xl font-bold text-navy md:text-3xl mb-6">Automate Complex Workflows — No Coding Required.</h2>
        <p className="text-center text-base md:text-lg text-navy/80 mb-8">
          Example: Monitor the weather and instantly automate warnings to guests, raise tasks for staff, and keep every team ahead of the forecast.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          <Step icon={<CloudSun className="w-6 h-6" />} title="Forecast" desc="07:00 check next 24–48h for each property/city." />
          <Step icon={<Users className="w-6 h-6" />} title="Segments" desc="Query arrivals; build VIP, family, leisure groups." />
          <Step icon={<Umbrella className="w-6 h-6" />} title="Front Desk" desc="Stage umbrellas/sunscreen for arrivals." />
          <Step icon={<Mail className="w-6 h-6" />} title="Guest Comms" desc="Email/SMS/WhatsApp weather tips & welcome." />
          <Step icon={<Slack className="w-6 h-6" />} title="Ops Notify" desc="Ping bar/restaurant via Slack/Teams/POS." />
          <Step icon={<ClipboardList className="w-6 h-6" />} title="Audit" desc="Log actions; track opens/clicks and follow‑through." />
        </div>


      </div>
    </section>
  );
};

export default WeatherPlaybook;


