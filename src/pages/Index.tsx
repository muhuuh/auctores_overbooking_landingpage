import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ValueProposition from '@/components/ValueProposition';
import HowItWorks from '@/components/HowItWorks';
import SecuritySection from '@/components/SecuritySection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';

// Dynamically import CookieBanner
const LazyCookieBanner = lazy(() => import('@/components/CookieBanner'));

const Index = () => {
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
        const targetId = href.substring(2); // Get id after '/#'
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
          // Avoid pushState for same-page scroll to prevent potential issues
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
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main>
        <Hero />
        <section id="why-auctores">
          <ProblemSection />
        </section>
        <ValueProposition />
        <HowItWorks />
        
        
        <SecuritySection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <LazyCookieBanner />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Index;
