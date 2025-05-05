import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  //        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=2000')] bg-center bg-cover opacity-40"></div>
  // <div className="h-full w-full bg-[url('/images/hero_concierge2.png')] bg-center bg-cover opacity-40"></div>
  return (
    <section className="relative flex items-center min-h-screen pt-24 pb-16 px-6 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
<div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=2000')] bg-center bg-cover opacity-40"></div>        <div className="absolute inset-0 bg-gradient-to-br from-navy/60 to-navy/20"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-lg">
            Obsess over guests, not software.
            </h1>
            <p className="text-xl text-white/90 max-w-lg">
            Auctores turns hours of clicking into moments of care. AI Agents merge every tool—PMS, CRM, emails, housekeeping—into one layer and act before guests feel a need.            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-navy hover:bg-navy/80 text-white border border-champagne/30 hover:border-champagne px-8 py-4 h-auto rounded-md text-lg shadow-lg hover:shadow-champagne/10 transition-all duration-300 font-medium"
              >
                Create Time for Care
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border border-champagne text-champagne hover:bg-champagne/10 px-8 py-4 h-auto rounded-md text-lg font-medium transition-all duration-300"
              >
                View 2 min Demo
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
