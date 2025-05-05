import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-24 pt-32">
      <h1 className="text-3xl font-bold text-navy mb-6">Privacy Policy</h1>
      <div className="prose max-w-none text-navy/80 space-y-6">
        <p><strong>Last updated:</strong> May 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">1. Controller</h2>
          <p>[Company Name], [Address], Email: contact@auctores.ai</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">2. Data We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contact data</strong> – name, work email, phone (when you request early access).</li>
            <li><strong>Usage data</strong> – page views, IP address (via Google Analytics 4, if consent given).</li>
            <li><strong>Communication</strong> – messages you send us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">3. Purposes & Legal Bases</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to inquiries (<em>Art. 6 (1)(b) GDPR</em> - performance of a contract or pre-contractual measures).</li>
            <li>Improve and secure our site (<em>Art. 6 (1)(f) GDPR</em> - legitimate interest).</li>
            <li>Website analytics (<em>Art. 6 (1)(a) GDPR</em> - consent via cookie banner).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">4. Recipients & Transfers</h2>
          <p>
            We use a hosting provider located in the EU. For website analytics (if you consent), data may be processed by Google LLC (USA). We rely on EU Standard Contractual Clauses and supplementary measures for such transfers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">5. Retention</h2>
          <p>
            Contact data related to inquiries is typically deleted 12 months after the last interaction, unless legal retention periods apply. Google Analytics data is retained according to Google's policies (typically 14 months).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">6. Your Rights</h2>
          <p>
            Under GDPR, you have the right to access, rectify, erase, restrict processing of, and port your personal data. You also have the right to object to processing based on legitimate interests and to withdraw consent at any time. To exercise these rights, please contact us. You also have the right to lodge a complaint with a supervisory authority.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">7. Cookies & Consent</h2>
          <p>
            Our website uses essential cookies for basic functionality. Non-essential cookies, such as those for Google Analytics 4, are only loaded if you provide explicit consent via our cookie banner. You can manage or withdraw your consent at any time through the banner settings.
          </p>
        </section>

        <section>
           <h2 className="text-xl font-semibold text-navy mt-4 mb-2">8. Contact</h2>
           <p>Questions about this policy or your data? Email us at contact@auctores.ai</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
