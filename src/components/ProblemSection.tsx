
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-luxury mb-6">Why This Matters</h2>
        <p className="text-xl text-luxury-muted mb-8 max-w-3xl mx-auto">
          In luxury hospitality, exceptional service demands perfect information. But your staff waste precious guest 
          interactions navigating disconnected systems, re-typing guest names, and missing revenue opportunities while 
          toggling between applications.
        </p>
        <div className="flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 inline-flex items-center space-x-4">
            <span className="text-4xl font-bold text-luxury">1,100×</span>
            <span className="text-luxury-muted">Front-desk staff switch apps per shift <br/><span className="text-sm">(internal study, 2024)</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
