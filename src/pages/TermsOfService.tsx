import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-24 pt-32">
      <h1 className="text-3xl font-bold text-navy mb-6">Terms of Service</h1>
      <div className="prose max-w-none text-navy/80 space-y-6">
        <p><strong>Last updated:</strong> May 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">1. Scope</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the Auctores.ai website and any beta or early-access version of our hotel-operations platform (collectively, the "Service"), operated by [Company Name]. By accessing or using the Service, you agree to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">2. Beta / Early Access Program</h2>
          <p>If you are participating in our beta or early access program:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The Service is provided "as is" and "as available" without warranties of any kind.</li>
            <li>Features may be modified or discontinued without notice.</li>
            <li>We provide no guarantees regarding uptime, support, data retention, or freedom from errors.</li>
            <li>Any feedback you provide grants us a perpetual, irrevocable, royalty-free license to use it for any purpose.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">3. Acceptable Use</h2>
          <p>You agree to use the Service only for lawful purposes and in compliance with all applicable laws, regulations, and third-party rights. You shall not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Disrupt, interfere with, or negatively affect the Service or its servers.</li>
            <li>Attempt to reverse-engineer, decompile, or discover the source code of the Service.</li>
            <li>Scan for vulnerabilities or attempt unauthorized access.</li>
            <li>Transmit any viruses, malware, or harmful code.</li>
          </ul>
          <p>You are solely responsible for the legality, accuracy, and appropriateness of any data you submit or connect to the Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">4. Intellectual Property</h2>
          <p>
            We and our licensors retain all right, title, and interest in and to the Service, including all related intellectual property rights. You retain ownership of the data you provide ("Customer Data"). You grant us a limited, worldwide, royalty-free license to access, use, process, and display Customer Data solely as necessary to provide, maintain, and improve the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Auctores shall only be liable for damages caused by intent (Vorsatz) or gross negligence (grobe Fahrlässigkeit). In cases of simple negligence (einfache Fahrlässigkeit), liability is excluded unless essential contractual obligations (Kardinalpflichten) are breached. Liability for breach of essential obligations is limited to typical, foreseeable damages.
          </p>
          <p>
            Our aggregate liability arising out of or related to these Terms or the Service will not exceed the greater of €100 EUR or the amount paid by you for the Service in the 12 months preceding the event giving rise to the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits or data loss.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">6. Governing Law & Venue</h2>
          <p>These Terms are governed by the laws of the Federal Republic of Germany, excluding its conflict of laws rules. The exclusive place of jurisdiction for all disputes arising from or in connection with these Terms shall be [City of Registered Office], Germany.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">7. Contact Information</h2>
          <p>[Company Name] – Email: contact@auctores.ai</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
