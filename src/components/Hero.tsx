import React, { useState } from 'react';
import { Button } from './ui/button';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const demoVideoSrc = "/videos/demo_auctores_v1.mp4";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-lg">
              Obsess over guests,<br />not software.
              </h1>
              <p className="text-base sm:text-lg text-white/90 max-w-lg">
              Auctores seemlessly merges every hotel tool into a single screen, letting staff finish cross-tool tasks in seconds, while 24/7 AI Agents resolve problems before guests ever feel them.              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#cta" className="w-full sm:w-auto">
                   <Button 
                     className="w-full bg-navy hover:bg-navy/80 text-white border border-champagne/30 hover:border-champagne px-6 py-3 sm:px-8 sm:py-4 h-auto rounded-md text-sm sm:text-base shadow-lg hover:shadow-champagne/10 transition-all duration-300 font-medium"
                     onClick={() => {
                       if (window.gtag) {
                         window.gtag('event', 'primary_cta_click', { 
                           'event_category': 'LandingPage_MVP', 
                           'event_label': 'Create Time for Care', 
                           'value': 1 
                         });
                       } else {
                         console.log("gtag not defined");
                       }
                     }}
                   >
                     Create Time for Care
                   </Button>
                </a>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto bg-transparent border border-champagne text-champagne hover:bg-champagne/10 px-6 py-3 sm:px-8 sm:py-4 h-auto rounded-md text-sm sm:text-base font-medium transition-all duration-300"
                  onClick={() => {
                    openModal();
                    if (window.gtag) {
                      window.gtag('event', 'demo_click', { 
                        'event_category': 'LandingPage_MVP', 
                        'event_label': 'View 1 min Demo', 
                        'value': 1 
                      });
                    } else {
                      console.log("gtag not defined");
                    }
                  }}
                >
                  View 1 min Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        videoSrc={isModalOpen ? demoVideoSrc : ""}
      />
    </>
  );
};

export default Hero;
