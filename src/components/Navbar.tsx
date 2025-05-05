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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-navy font-playfair text-xl font-bold">
            Auctores<span className="text-champagne">.ai</span>
          </h2>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/#why-auctores" className="text-gray hover:text-champagne transition-colors text-sm font-medium">
            Why Auctores
          </a>
          <a href="/#features" className="text-gray hover:text-champagne transition-colors text-sm font-medium">
            Features
          </a>
          <a href="/#security" className="text-gray hover:text-champagne transition-colors text-sm font-medium">
            Security
          </a>
          <a href="/#pricing" className="text-gray hover:text-champagne transition-colors text-sm font-medium">
            Pricing
          </a>
          <Button 
            variant="default" 
            className="bg-navy hover:bg-navy/90 text-white rounded-md px-6 py-3 text-sm font-medium"
          >
            Early Access
          </Button>
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
