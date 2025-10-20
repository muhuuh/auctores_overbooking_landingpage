import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const MobileStickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Show sticky bar after scrolling past hero
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // Approximate hero height
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMobile || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-champagne/20 p-4 shadow-lg md:hidden">
      <a href="/#cta" className="block">
        <Button className="w-full bg-navy hover:bg-navy/80 text-white border border-champagne/30 hover:border-champagne px-6 py-4 rounded-md text-base shadow-lg font-medium">
          Activate Smart Overbooking
        </Button>
      </a>
    </div>
  );
};

export default MobileStickyBar;
