import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  // demo/video modal removed per overbooking-first plan
  //        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=2000')] bg-center bg-cover opacity-40"></div>
  // <div className="h-full w-full bg-[url('/images/hero_concierge2.png')] bg-center bg-cover opacity-40"></div>
  return (
    <>
      <section className="relative flex items-center min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-20 xl:px-24 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="h-full w-full bg-[url('/images/bg_image.png')] bg-center bg-cover opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-navy/60 to-navy/20"></div>
        </div>
        
        <div className="max-w-7xl z-10">
          <div className="flex justify-start">
            <div className="flex flex-col space-y-8 animate-fade-in max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-lg">
                <span className="block sm:inline">Overbook smarter.</span>{' '}
                <span className="block sm:inline">Fill more rooms.</span>{' '}
                <span className="block sm:inline">No chaos.</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 max-w-lg">
                Switch on <span className="font-semibold">Smart Overbooking</span> in 2–3 clicks to stop losing revenue to last-minute cancellations and no-shows. Enable ready‑made admin automations to free staff time and lift guest satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#cta" className="w-full sm:w-auto">
                   <Button 
                     className="w-full bg-navy hover:bg-navy/80 text-white border border-champagne/30 hover:border-champagne px-6 py-3 sm:px-8 sm:py-4 h-auto rounded-md text-sm sm:text-base shadow-lg hover:shadow-champagne/10 transition-all duration-300 font-medium"
                     onClick={() => {
                       if (window.gtag) {
                        window.gtag('event', 'primary_cta_overbooking', { 
                           'event_category': 'LandingPage_MVP', 
                          'event_label': 'Activate Smart Overbooking', 
                           'value': 1 
                         });
                       } else {
                         console.log("gtag not defined");
                       }
                     }}
                   >
                    Activate Smart Overbooking
                   </Button>
                </a>
                <a href="/#features" className="w-full sm:w-auto">
                  <Button 
                    variant="outline"
                    className="w-full bg-transparent border border-champagne text-champagne hover:bg-champagne/10 px-6 py-3 sm:px-8 sm:py-4 h-auto rounded-md text-sm sm:text-base font-medium transition-all duration-300"
                  >
                    See Automations Example
                  </Button>
                </a>
              </div>


              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl pt-2">
                {[
                  { n: '35%', label: 'OTB revenue lost to cancels' },
                  { n: '42% vs 18%', label: 'OTA vs direct cancels' },
                  { n: '30%', label: 'of shift is admin work' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-full border border-champagne/40 bg-white/5 text-white/90 px-3 py-2 text-center text-xs backdrop-blur-sm transition-all hover:bg-white/10">
                    <span className="block font-semibold">{item.n}</span>
                    <span className="opacity-80">{item.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Demo modal removed */}
    </>
  );
};

export default Hero;
