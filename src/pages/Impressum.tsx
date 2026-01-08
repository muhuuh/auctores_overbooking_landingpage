import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const Impressum = () => (
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow container mx-auto px-4 py-8 pt-8">
      <div className="mb-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-navy-500 hover:text-champagne transition-colors duration-200 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </div>
      <h1 className="text-3xl font-bold text-navy mb-6">Impressum</h1>
      <div className="prose max-w-none text-navy/80 space-y-6">
        <div>
          <p className="text-sm text-navy/60">Legal Notice / Information according to applicable laws.</p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Company Details</h2>
          <p>
            <strong>Auctores Technologies OÜ</strong>
            <br />
            Registry code: <strong>17394351</strong>
            <br />
            Registered address: <strong>Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551</strong>
            <br />
            Contact person: <strong>E-Residency Hub OÜ, registry code 14249878</strong>
            <br />
            Email: <a href="mailto:valentin@auctores.ai" className="underline">valentin@auctores.ai</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Content Responsibility</h2>
          <p>No journalistic-editorial content is offered.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (OS), which you can find here: 
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="underline ml-1">
              https://ec.europa.eu/consumers/odr
            </a>.
            We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

(Impressum as any).withNavBar = false;

export default Impressum;
