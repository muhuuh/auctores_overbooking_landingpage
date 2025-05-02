import React from 'react';

const Footer = () => {
  return (
    <footer className="section-padding-sm bg-offWhite text-navy">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#platform" className="hover:text-champagne transition-colors">Platform</a></li>
              <li><a href="#pricing" className="hover:text-champagne transition-colors">Pricing</a></li>
              <li><a href="#security" className="hover:text-champagne transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-champagne transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <p className="text-sm text-gray-700">Contact@auctores.ai</p>
          </div>
          
          <div className="flex justify-end items-start">
            <h2 className="text-navy font-playfair text-xl font-bold">
              Spider<span className="text-champagne">Layer</span>
            </h2>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-muted">
          <p>© 2025 Auctores — built in Munich</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
