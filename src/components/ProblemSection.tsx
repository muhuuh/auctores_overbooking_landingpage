
import React from 'react';

const ProblemSection = () => {
  return (
    <section id="why-spiderlayer" className="section-padding bg-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Busywork steals the human touches that guests remember.</h2>
        <p className="text-xl text-navy/80 mb-12 max-w-3xl mx-auto">
        Luxury guests expect invisible service. They choose you for care, not convenience.  Yet staff still re‑key names, chase lost emails and juggle six dashboards, missing surprise-and-delight moments.
        </p>
        <p className="text-xl text-navy/80 mb-12 max-w-3xl mx-auto">        Auctores cuts that noise. Your team wins back the minutes that turn a stay into a story.
        </p>
        
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 inline-flex flex-col items-center space-y-2">
            <span className="text-5xl md:text-6xl font-bold text-champagne font-playfair pb-6">45 min</span>
            <span className="text-navy/70 uppercase tracking-wide text-sm">average estimated staff time recovered per shift reinvested in</span>
            <span className="text-navy/70 uppercase tracking-wide text-sm"> surprise‑and‑delight moments</span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
