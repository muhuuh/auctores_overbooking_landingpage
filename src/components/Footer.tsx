import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Footer = () => {

  const handleRevokeConsent = () => {
    Cookies.remove('CookieConsent');
    window.location.reload();
  };

  return (
    <footer className="section-padding-sm bg-offWhite text-navy">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-xs text-gray-700">
              <li><a href="/#features" className="hover:text-champagne transition-colors">Features</a></li>
              <li><a href="/#pricing" className="hover:text-champagne transition-colors">Pricing</a></li>
              <li><a href="/#security" className="hover:text-champagne transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-700">
              <li><a href="/privacy-policy" className="hover:text-champagne transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-champagne transition-colors">Terms of Service</a></li>
              <li><a href="/impressum" className="hover:text-champagne transition-colors">Impressum</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <p className="text-xs text-gray-700">contact@auctores.ai</p>
          </div>
          
          <div className="flex justify-end items-start">
            <h2 className="text-navy font-playfair text-lg font-bold">
              Auctores<span className="text-champagne">.ai</span>
            </h2>
          </div>
          <div className="text-xs mt-4 md:mt-0">
            <button 
              onClick={handleRevokeConsent}
              className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
            >
              Cookie Settings
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-xs text-muted">
          <p>© 2025 Auctores — built in Munich</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
