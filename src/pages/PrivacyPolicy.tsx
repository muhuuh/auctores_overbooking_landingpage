import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => (
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
      <h1 className="text-3xl font-bold text-navy mb-6">Privacy Policy</h1>

      <div className="prose max-w-none text-navy/80 space-y-6">
        <div>
          <p className="text-sm text-navy/60">
            This notice explains how <strong>Auctores Technologies OÜ</strong> (“we”, “us”) handles personal data when business users use the Auctores service
            and connect third-party tools (e.g., PMS) to generate overbooking recommendations and related outputs.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">1. Controller &amp; Contact</h2>
          <p>
            <strong>Auctores Technologies OÜ</strong>
            <br />
            Registry code: <strong>17394351</strong>
            <br />
            Registered address: <strong>Address is Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551</strong>
            <br />
            Contact person: <strong>E-Residency Hub OÜ, registry code 14249878</strong>
            <br />
            Email: <a href="mailto:leo@auctores.ai" className="underline">leo@auctores.ai</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">2. Where We Act as Controller vs Processor</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Controller:</span> account/admin user data (e.g., name, email, role), authentication data, billing/contact data, and essential service logs.</li>
            <li><span className="font-medium">Processor (on your behalf):</span> operational data from connected third-party tools that is necessary to generate recommendations and outputs (as described in your contract/DPA).</li>
          </ul>
          <p className="text-sm text-navy/70">
            If required, we provide a Data Processing Addendum (DPA) under Art. 28 GDPR that describes sub-processors, security measures, and instructions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">3. Purposes &amp; Legal Bases (Art. 6 GDPR)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Provide the service &amp; connectors</span> (operate integrations; compute recommendations; deliver outputs) — Art. 6(1)(b).</li>
            <li><span className="font-medium">Security &amp; abuse prevention</span> (access control, audit logs, incident response) — Art. 6(1)(f).</li>
            <li><span className="font-medium">Support &amp; troubleshooting</span> (handle your requests, fix issues) — Art. 6(1)(b)/(f).</li>
            <li><span className="font-medium">Legal obligations</span> (e.g., accounting or retention duties, if applicable) — Art. 6(1)(c).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">4. Personal Data We Process</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Account &amp; contact data:</span> name, email, company, role, authentication identifiers.</li>
            <li><span className="font-medium">Connector data:</span> provider name, scopes/permissions granted, connection metadata, and access tokens stored encrypted.</li>
            <li><span className="font-medium">Customer content from connected tools (processor role):</span> operational records necessary to compute outputs (exact categories depend on your configuration and connected systems).</li>
            <li><span className="font-medium">Technical logs:</span> timestamps, request IDs, success/error codes, and event metadata necessary for security and reliability.</li>
          </ul>
          <p className="text-xs text-navy/60">
            Avoid sending special-category data (Art. 9 GDPR) through connectors unless strictly necessary and lawful.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">5. Security</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Encryption:</span> data is protected with encryption in transit (TLS) and encryption at rest where supported by our providers.</li>
            <li><span className="font-medium">Secrets:</span> connector secrets/tokens are stored encrypted and accessed only when necessary for authorized API calls.</li>
            <li><span className="font-medium">Access controls:</span> role-based access, least privilege, and logging/monitoring for production systems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">6. Data Location &amp; International Transfers</h2>
          <p>
            We aim to process and store data in the EU/EEA where possible. If transfers outside the EEA/UK occur, we use appropriate safeguards
            (such as Standard Contractual Clauses) and supplementary measures where required.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">7. Processors &amp; Sub-processors</h2>
          <p className="text-navy/70">
            We use service providers under GDPR-compliant processing terms. This list may be updated as the Service evolves:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Supabase</span> — Data Storage.</li>
            <li><span className="font-semibold">GCP</span> — Encryption.</li>
            <li><span className="font-semibold">Railway</span> — Website hosting.</li>
            <li><span className="font-semibold">Mailersend</span> — Email delivery.</li>

          </ul>
          <p className="text-sm text-navy/70">
            If you have a DPA with us, it may include a more formal sub-processor list and notification process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">8. Retention</h2>
          <p>
            Account data is retained for the duration of your account and as needed for legitimate business purposes and legal compliance.
            Connector credentials are stored while a connection is active and deleted upon disconnection or account deletion.
            Minimal operational logs are kept for up to 180 days for security and troubleshooting unless legal obligations require longer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">9. Your Rights</h2>
          <p>
            Depending on your situation and applicable law, you may request access, rectification, erasure, restriction, portability, or object to processing.
            You can contact us at <a href="mailto:leo@auctores.ai" className="underline">leo@auctores.ai</a>.
          </p>
          <p>
            You also have the right to lodge a complaint with a supervisory authority. In Estonia, this is the
            <strong> Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon)</strong>, and you may also complain with your local EU/EEA authority where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">10. Cookies &amp; Local Storage</h2>
          <p>
            We use essential cookies/local storage required to run the Service (e.g., session/security). If we add analytics or marketing cookies in the future,
            we will update this notice and, where required, request consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">11. Automated Decision-Making</h2>
          <p>
            The Service generates recommendations based on your configured parameters and connected systems. We do not intend to make decisions with legal or similarly
            significant effects about individuals solely by automated means within the meaning of Art. 22 GDPR.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">12. Changes</h2>
          <p>
            We may update this notice from time to time. Material changes will be reflected here and, when appropriate, communicated to account administrators.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

(PrivacyPolicy as any).withNavBar = false;

export default PrivacyPolicy;
