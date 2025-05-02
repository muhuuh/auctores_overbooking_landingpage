
import React from 'react';

const SocialProof = () => {
  return (
    <section className="py-16 px-6 bg-luxury-light">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-luxury mb-12 text-center">Built With Leading Hoteliers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Placeholder hotel images - would be replaced with actual partner logos */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="h-32 w-64 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100">
                <div className="text-luxury-muted font-medium">Premium Hotel Partner</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <blockquote className="bg-white p-8 rounded-lg shadow-md border border-gray-100 relative">
            <div className="text-5xl font-serif text-luxury-accent/20 absolute top-4 left-4">"</div>
            <p className="text-xl text-luxury-muted mb-6 relative z-10">
              SpiderLayer's intelligent agent has dramatically reduced the time our staff spends switching between systems. 
              This allows them to focus on what truly matters—delivering exceptional service to our guests.
            </p>
            <footer>
              <p className="font-medium text-luxury">Sarah Johnson</p>
              <p className="text-luxury-muted">Operations Director, Luxury Hotel Group</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
