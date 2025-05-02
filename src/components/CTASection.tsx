import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const CTASection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [property, setProperty] = useState('');
  const [pms, setPms] = useState('');
  const [willCodesign, setWillCodesign] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you!",
        description: "Check your inbox to pick a demo slot.",
        duration: 5000,
      });
      
      // Reset form
      setEmail('');
      setProperty('');
      setPms('');
      setWillCodesign(false);
    }, 1500);
  };

  return (
    <section className="section-padding bg-navy text-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the private beta.</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Founding hotels lock-in lifetime 50% pricing and direct influence on the roadmap.
        </p>
        
        <div className="bg-navyLight p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-left">
                <Label htmlFor="email" className="text-gray-300 mb-2 block">Work Email <span className="text-red-400">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="claire@ritzparis.com"
                  required
                  className="bg-navy/50 border-gray/30 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div className="text-left">
                <Label htmlFor="property" className="text-gray-300 mb-2 block">Property <span className="text-red-400">*</span></Label>
                <Input
                  id="property"
                  type="text"
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  placeholder="Ritz Paris"
                  required
                  className="bg-navy/50 border-gray/30 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div className="text-left">
                <Label htmlFor="pms" className="text-gray-300 mb-2 block">Current PMS (optional)</Label>
                <Select value={pms} onValueChange={setPms}>
                  <SelectTrigger className="bg-navy/50 border-gray/30 text-white">
                    <SelectValue placeholder="Select your PMS" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="opera">Opera</SelectItem>
                    <SelectItem value="mews">Mews</SelectItem>
                    <SelectItem value="protel">Protel</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="codesign" 
                    checked={willCodesign} 
                    onCheckedChange={(checked) => setWillCodesign(checked as boolean)} 
                    className="border-gray-500 data-[state=checked]:bg-champagne data-[state=checked]:border-champagne data-[state=checked]:text-navy"
                  />
                  <Label 
                    htmlFor="codesign" 
                    className="text-gray-300"
                  >
                    I'd like to co-design features as an alpha partner
                  </Label>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-6 bg-champagne hover:bg-champagne/90 text-black font-bold text-base"
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
