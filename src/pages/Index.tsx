import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
// import ValueProposition from '@/components/ValueProposition';
import MetricsBand from '@/components/MetricsBand';
import SmartOverbooking from '@/components/SmartOverbooking';
import HowItWorks from '@/components/HowItWorks';
import SecuritySection from '@/components/SecuritySection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import SafetyBand from '@/components/SafetyBand';
import MobileStickyBar from '@/components/MobileStickyBar';

// Dynamically import CookieBanner
const LazyCookieBanner = lazy(() => import('@/components/CookieBanner'));

const Index = () => {
  // Track if hero scroll event has been sent
  const [heroScrollTracked, setHeroScrollTracked] = React.useState(false);

  // Smooth scroll implementation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find the closest anchor tag
      const anchor = target.closest('a'); 
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      
      // Handle smooth scroll to top for brand link on home page
      if (href === '/' && window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // Optional: Update history without page reload if needed, but usually not for top scroll
        // history.pushState(null, '', '/'); 
        return; // Stop further processing
      }
      
      // Handle smooth scroll for internal hash links (#section)
      if (href && href.startsWith('/#') && href.length > 2 && window.location.pathname === '/') {
        e.preventDefault();
        const targetIdRaw = href.substring(2);
        const targetId = targetIdRaw.split('?')[0]; // support query params like /#features?tab=overbooking
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
          // Persist hash (with optional query) so tabs can read it
          try { window.history.replaceState(null, '', href); } catch {}
        } else {
           console.warn(`Target element not found for id: ${targetId}`);
           // Fallback or do nothing if element not found
        }
        return; // Stop further processing
      }
      
      // Allow default navigation for other links (e.g., /privacy-policy, external links, or /#hash from other pages)
    };

    document.addEventListener('click', handleLinkClick);
    
    // Initialize scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Track when user scrolls past hero section
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !heroScrollTracked) {
            // Hero section is no longer visible - user has scrolled past it
            setHeroScrollTracked(true);
            if (window.gtag) {
              window.gtag('event', 'scroll_past_hero', {
                'event_category': 'LandingPage_Engagement',
                'event_label': 'Hero Section Scrolled Past',
                'value': 1
              });
            } else {
              console.log("gtag not defined - scroll_past_hero event");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of hero is still visible
      }
    );

    // Observe the hero section (first section on the page)
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroObserver.observe(heroSection);
    }

    return () => {
      document.removeEventListener('click', handleLinkClick);
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main>
        <Hero />
        
        <section id="why-overbooking">
          <ProblemSection />
        </section>
        {/*
        <MetricsBand />
        */}
        {/* Replace legacy features grid with split tabs */}
        <SmartOverbooking />
        <SafetyBand />
        <HowItWorks />
        <SecuritySection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
      <MobileStickyBar />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <LazyCookieBanner />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;
