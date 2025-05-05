import React from 'react';

const ProblemSection = () => {
  return (
    <section id="why-auctores" className="section-padding bg-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-playfair">Busywork steals the human touches guests remember.</h2>
        <p className="text-lg md:text-xl text-navy/80 mb-8 max-w-3xl mx-auto">
        Luxury guests expect invisible service. They choose you for care, not convenience. Does this scenario sound familiar?
        </p>

        {/* Scenario Comparison */}
        <div className="relative bg-gray-50 rounded-lg p-4 mb-12 shadow-sm border border-navy/5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Left side - Operational Reality */}
            <div className="md:col-span-2 text-left">
              <h3 className="font-semibold text-navy mb-3 text-lg">Operational Reality</h3>
              <p className="text-navy/80">
                Front‑desk staff open 3 apps to fulfil a single VIP request, double checks housekeeping status, re‑type the guest name 5 times in total, and still miss the upsell window.
              </p>
            </div>
            
            {/* Middle arrow */}
            <div className="hidden md:flex justify-center items-center">
              <div className="text-champagne/50 text-2xl">→</div>
            </div>
            
            {/* Right side - Guest Impact */}
            <div className="md:col-span-2 text-left">
              <h3 className="font-semibold text-navy mb-3 text-lg">Guest Impact</h3>
              <p className="text-navy/80">
                Mrs Li receives her suite upgrade 15 minutes late and tweets about the wait instead of the wow‑moment.
              </p>
            </div>
          </div>
        </div>

        {/* Solution with prominent checkmark */}
        <div className=" rounded-lg p-6   border-champagne/20 relative">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-champagne text-white w-10 h-10 rounded-full flex items-center justify-center">
            <span className="text-xl">✓</span>
          </div>
          <p className="text-navy mt-2 text-lg">
            <span className="font-semibold text-navy">With Auctores:</span> One command, one layer, task closed in 25 seconds. Auctores cuts inefficiencies thanks to automated background work and unified layer for reactive tasks. Your team spends the next 14 minutes crafting delight, not data entries.
          </p>
        </div>

        
        <div className="mt-">
            <span className="block text-6xl md:text-7xl font-bold text-champagne font-playfair mb-4">45 min</span>
            <span className="block text-navy/70 uppercase tracking-widest text-xs md:text-sm font-medium">Avg. time recovered per shift / reinvested in surprise & delight</span>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
