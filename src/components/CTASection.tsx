
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';

const CTASection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notifyAtLaunch, setNotifyAtLaunch] = useState(true);
  const [willCodesign, setWillCodesign] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request received!",
        description: willCodesign 
          ? "We'll contact you shortly to discuss partnership opportunities." 
          : "We'll notify you when SpiderLayer is ready for your property.",
        duration: 5000,
      });
      
      // Reset form
      setEmail('');
      setCompany('');
    }, 1500);
  };

  return (
    <section className="py-16 px-6 bg-luxury-dark text-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Early Access</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join leading luxury properties already enhancing their guest experience with SpiderLayer.
        </p>
        
        <div className="bg-luxury p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-left">
                <Label htmlFor="email" className="text-gray-300 mb-2 block">Work Email <span className="text-red-400">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.name@hotel.com"
                  required
                  className="bg-luxury-accent/20 border-luxury-accent/30 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className="text-left">
                <Label htmlFor="company" className="text-gray-300 mb-2 block">Property / Company Name <span className="text-red-400">*</span></Label>
                <Input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Grand Hotel Example"
                  required
                  className="bg-luxury-accent/20 border-luxury-accent/30 text-white placeholder:text-gray-400"
                />
              </div>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="notify" 
                    checked={notifyAtLaunch} 
                    onCheckedChange={(checked) => setNotifyAtLaunch(checked as boolean)} 
                  />
                  <Label htmlFor="notify" className="text-gray-300">
                    Notify me at launch and lock-in 50% founder pricing
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="codesign" 
                    checked={willCodesign} 
                    onCheckedChange={(checked) => setWillCodesign(checked as boolean)} 
                  />
                  <Label htmlFor="codesign" className="text-gray-300">
                    I'm open to co-designing features as an alpha partner
                  </Label>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-6 bg-white text-luxury hover:bg-gray-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Request Early Access"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
