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
          <p className="text-sm text-navy/60">Information according to §§ 5 TMG / 18 MStV. This is a pre-incorporation pilot project.</p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Provider</h2>
          <p className="text-navy/90">Valentin Hornung, Leo Dubois & Lucas Dema</p>
          <p>Operating the Auctores pilot as natural persons (pre-incorporation).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Service Address</h2>
          <p>Wilhelm-Hertz-Str. 31<br/>Germany</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Contact</h2>
          <p>Email: <a href="mailto:valentin@auctores.ai" className="underline">valentin@auctores.ai</a></p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Business Registration</h2>
          <p>No commercial register entry yet (pre-incorporation).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">VAT ID</h2>
          <p>No VAT ID available.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Content Responsibility (MStV)</h2>
          <p>No journalistic-editorial content is offered.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Dispute Resolution</h2>
          <p>
            We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board (§ 36 VSBG).
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Impressum;
