
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-screen pt-24 pb-16 px-6 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=2000')] bg-center bg-cover opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/60 to-navy/20"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-lg">
              Every guest feels personally known.
            </h1>
            <p className="text-xl text-white/90 max-w-lg">
              SpiderLayer unifies your PMS, CRM, spa and housekeeping systems into one intelligent workspace—so staff deliver flawless service without switching tabs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-navy hover:bg-navy/80 text-white border border-champagne/30 hover:border-champagne px-8 py-6 h-auto rounded-md text-lg shadow-lg hover:shadow-champagne/10 transition-all duration-300 font-medium"
              >
                Book a 10-min Demo
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border border-champagne text-champagne hover:bg-champagne/10 px-8 py-6 h-auto rounded-md text-lg font-medium transition-all duration-300"
              >
                Request Early Access
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-2xl animate-slide-up">
            <img 
              src="/lovable-uploads/41bb9446-1809-46c4-a361-4ea208f51172.png" 
              alt="SpiderLayer connecting hotel systems in one intelligent interface" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6 text-white">
              <p className="text-sm font-medium">SpiderLayer's unified workspace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
