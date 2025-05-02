
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-6">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=2000')] bg-center bg-cover"></div>
      </div>
      <div className="luxury-gradient absolute inset-0 opacity-30 z-0"></div>
      
      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-luxury leading-tight">
              Your guests feel known everywhere—intelligent systems cross every platform so your staff don't have to.
            </h1>
            <p className="text-xl text-luxury-muted">
              Connect PMS, CRM, housekeeping and concierge tools into one intelligent workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-luxury hover:bg-luxury/90 text-white px-8 py-6 rounded-md text-lg">
                Request Early Access
              </Button>
              <Button variant="outline" className="border-luxury text-luxury hover:bg-luxury/5 px-8 py-6 rounded-md text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-2xl animate-slide-up">
            <img 
              src="/lovable-uploads/41bb9446-1809-46c4-a361-4ea208f51172.png" 
              alt="SpiderLayer connecting all hotel systems into one intelligent interface" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <p className="text-sm font-medium">SpiderLayer's connected interface</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
