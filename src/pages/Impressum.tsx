import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Impressum = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-24 pt-32">
      <h1 className="text-3xl font-bold text-navy mb-6">Impressum</h1>
      <div className="prose max-w-none text-navy/80 space-y-4">
        <div>
          <p className="mb-1">Information gemäß § 5 TMG</p>
          <p>
            <strong>[Company Name]</strong><br />
            [Street Address]<br />
            [Postal Code] [City]<br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Vertreten durch:</h2>
          <p>[Managing Director(s)]</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Kontakt:</h2>
          <ul className="list-none pl-0">
            <li>Telefon: [Phone]</li>
            <li>E-Mail: contact@auctores.ai</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Registereintrag:</h2>
          <ul className="list-none pl-0">
            <li>Registergericht: [Amtsgericht]</li>
            <li>Registernummer: HRB [Number]</li>
          </ul>
        </div>

        <div>
           <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Umsatzsteuer-ID:</h2>
           <p>Umsatzsteuer-Identifikationsnummer gemäß §27a UStG: DE[VAT Number]</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
          <p>
            [Name]<br />
            [Address]
          </p>
        </div>

        <div>
           <h2 className="text-xl font-semibold text-navy mt-4 mb-2">EU-Streitbeilegung:</h2>
           <p className="mb-1">
             Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
             <a
               href="https://ec.europa.eu/consumers/odr/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-champagne hover:underline ml-1"
             >
               https://ec.europa.eu/consumers/odr/
             </a>
           </p>
           <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        </div>

        <div>
           <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle:</h2>
           <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Impressum;
