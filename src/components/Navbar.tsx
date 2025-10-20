import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
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
          <a href="/#why-overbooking" className={cn(
            "hover:text-champagne transition-colors text-sm font-medium",
            isScrolled ? "text-gray" : "text-white/90"
          )}>
            Why Overbooking
          </a>
          <a href="/#features" className={cn(
            "hover:text-champagne transition-colors text-sm font-medium",
            isScrolled ? "text-gray" : "text-white/90"
          )}>
            Overbooking + Automations
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
          <Button variant="ghost" onClick={toggleMobileMenu} className={cn(isScrolled ? "text-navy" : "text-white")}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a 
              href="/#why-overbooking" 
              className="text-gray hover:text-champagne transition-colors text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              Why Overbooking
            </a>
            <a 
              href="/#features" 
              className="text-gray hover:text-champagne transition-colors text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              Overbooking + Automations
            </a>
            <a 
              href="/#security" 
              className="text-gray hover:text-champagne transition-colors text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              Security
            </a>
            <a 
              href="/#pricing" 
              className="text-gray hover:text-champagne transition-colors text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              Pricing
            </a>
            <a href="/#cta" onClick={toggleMobileMenu}>
              <Button 
                variant="default" 
                className="bg-navy hover:bg-navy/90 text-white rounded-md px-6 py-3 text-sm font-medium w-full"
              >
                Early Access
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
