import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { supabase } from '../lib/supabaseClient';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CTASection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [pms, setPms] = useState('');
  const [willCodesign, setWillCodesign] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailFocusTracked, setEmailFocusTracked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      email,
      current_pms: pms || null,
      alpha_partner: willCodesign
    };

    const { error } = await supabase
      .from('early_access_requests')
      .insert([payload]);

    if (error) {
      console.error('Insert error:', error);
      toast({
        title: 'Submission failed',
        description: error.message,
        variant: 'destructive',
        duration: 5000,
      });
    } else {
      toast({
        title: 'Thank you!',
        description: 'We\'ve received your request - check your inbox soon.',
        duration: 5000,
      });
      // Reset form on success
      setEmail('');
      setPms('');
      setWillCodesign(false);
    }

    setIsSubmitting(false);
  };
  return (
    <section id="cta" className="py-16 sm:py-20 md:py-24 bg-navy text-white">
      <div className="container max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Secure Your Early Access.</h2>
        <p className="text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
          Early access participants lock-in <strong className="text-champagne font-semibold">lifetime 50% discount</strong> and direct influence on the roadmap. Drop your email address and we will reach out to you to set up the privileged early access.
        </p>
        
        <div className="bg-navyLight p-6 sm:p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="text-left">
                <Label htmlFor="email" className="text-gray-300 mb-2 block">Work Email <span className="text-red-400">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => {
                    if (!emailFocusTracked) {
                      setEmailFocusTracked(true);
                      if (window.gtag) {
                        window.gtag('event', 'cta_email_input_focus', {
                          'event_category': 'LandingPage_Engagement',
                          'event_label': 'CTA Email Input Clicked',
                          'value': 1
                        });
                      } else {
                        console.log("gtag not defined - cta_email_input_focus event");
                      }
                    }
                  }}
                  placeholder="claire@ritzparis.com"
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
                    <SelectItem value="apaleo">Apaleo</SelectItem>
                    <SelectItem value="mews">Mews</SelectItem>
                    <SelectItem value="couldbeds">Couldbeds</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-2 sm:pt-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="codesign" 
                    checked={willCodesign} 
                    onCheckedChange={(checked) => setWillCodesign(checked as boolean)} 
                    className="border-gray-500 data-[state=checked]:bg-champagne data-[state=checked]:border-champagne data-[state=checked]:text-navy"
                  />
                  <Label 
                    htmlFor="codesign" 
                    className="text-gray-300 text-sm flex items-center"
                  >
                    I'd like to co-design features as an alpha partner
                    <TooltipProvider>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger asChild>
                          <Info className="ml-1.5 h-4 w-4 text-gray-400 hover:text-champagne cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-navyLight border-champagne/50 text-white max-w-xs p-3">
                          <p className="text-sm">
                            Being an Alpha Partner means collaborating closely with us to finalize features and fine-tune them to precisely meet your needs. It's an opportunity for a close partnership to ensure Auctores perfectly fits your workflows, tools, and processes.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                </div>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full py-4 sm:py-6 bg-champagne hover:bg-champagne/90 text-black font-bold text-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Secure Early Access"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
