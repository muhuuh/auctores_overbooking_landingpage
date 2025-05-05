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
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth'
            });
            history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    
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
      document.removeEventListener('click', handleHashLinkClick);
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
