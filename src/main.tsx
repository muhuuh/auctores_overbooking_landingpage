import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import Impressum from './pages/Impressum.tsx';
import { Toaster } from '@/components/ui/toaster'; // Assuming Toaster is global

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/impressum" element={<Impressum />} />
        {/* You might want a catch-all 404 route here */}
      </Routes>
      <Toaster /> { /* Keep Toaster outside Routes if it's global */}
    </BrowserRouter>
  </React.StrictMode>,
)
