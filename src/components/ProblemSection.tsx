
import React from 'react';

const ProblemSection = () => {
  return (
    <section id="why-spiderlayer" className="section-padding bg-offWhite">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Disconnected systems waste guest attention.</h2>
        <p className="text-xl text-muted mb-12 max-w-3xl mx-auto">
          Luxury guests expect invisible service. Yet your team toggles between Opera, SevenRooms, POS and Excel 1,100 times per shift, 
          re-typing names and missing surprise-and-delight moments.
        </p>
        
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 inline-flex flex-col items-center space-y-2">
            <span className="text-5xl md:text-6xl font-bold text-champagne font-playfair">+17%</span>
            <span className="text-muted uppercase tracking-wide text-sm">average RevPAR uplift when upsell tasks trigger automatically</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
