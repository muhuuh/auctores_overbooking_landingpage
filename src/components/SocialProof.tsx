
import React from 'react';

const SocialProof = () => {
  return (
    <section className="section-padding-sm bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="h-20 w-full bg-offWhite rounded-md flex items-center justify-center border border-gray-200">
                <div className="text-gray text-xs">Premium Hotel Partner</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16">
          <p className="text-center text-muted">6 pilot properties, 1,200 rooms under management</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
