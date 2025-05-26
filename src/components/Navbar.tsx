import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      "px-6 md:px-12 lg:px-20 xl:px-24",
      isScrolled ? "bg-white shadow-md" : "bg-white/10 backdrop-blur-sm"
    )}>
      <div className="w-full flex justify-between items-center">
        <a href="/" className="flex items-center">
          <h2 className={cn(
            "font-playfair text-2xl font-bold transition-colors",
            isScrolled ? "text-navy" : "text-white"
          )}>
            Auctores<span className="text-champagne">.ai</span>
          </h2>
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/#why-auctores" className={cn(
            "hover:text-champagne transition-colors text-sm font-medium",
            isScrolled ? "text-gray" : "text-white/90"
          )}>
            Why Auctores
          </a>
          <a href="/#features" className={cn(
            "hover:text-champagne transition-colors text-sm font-medium",
            isScrolled ? "text-gray" : "text-white/90"
          )}>
            Features
          </a>
          <a href="/#security" className={cn(
            "hover:text-champagne transition-colors text-sm font-medium",
            isScrolled ? "text-gray" : "text-white/90"
          )}>
            Security
          </a>
          <a href="/#pricing" className={cn(
            "hover:text-champagne transition-colors text-sm font-medium",
            isScrolled ? "text-gray" : "text-white/90"
          )}>
            Pricing
          </a>
          <a href="/#cta">
            <Button 
              variant="default" 
              className="bg-navy hover:bg-navy/90 text-white rounded-md px-6 py-3 text-sm font-medium"
            >
              Early Access
            </Button>
          </a>
        </div>
        <div className="md:hidden">
          <Button variant="ghost">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
