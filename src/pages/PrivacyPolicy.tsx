import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-24 pt-32">
      <h1 className="text-3xl font-bold text-navy mb-6">Privacy Policy (Pilot)</h1>
      <div className="prose max-w-none text-navy/80 space-y-6">
        <div>
          <p className="text-sm text-navy/60">This notice explains how the Auctores pilot handles personal data when invited users connect third-party tools (e.g., PMS, email) to run automations. We do <span className="font-semibold">not</span> process guest documents uploaded by hotels in this pilot.</p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Controller & Contact</h2>
          <p>Valentin Hornung, Leo Dubois & Lucas Dema (Auctores – Pilot)</p>
          <p>Wilhelm-Hertz-Str. 31<br/>Germany</p>
          <p>Email: <a href="mailto:valentin@auctores.ai" className="underline">valentin@auctores.ai</a></p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Where We Act as Controller vs Processor</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Controller:</span> Your pilot account/profile, authentication data, and essential service logs.</li>
            <li><span className="font-medium">Processor (on your behalf):</span> Data accessed from connected third-party tools (e.g., PMS and email) to execute automations you configure.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Purposes & Legal Bases (Art. 6 GDPR)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Provide the service & connectors</span> (operate OAuth connections; run automations you request) — Art. 6(1)(b).</li>
            <li><span className="font-medium">Security & abuse prevention</span> (access control, audit logs, incident response) — Art. 6(1)(f).</li>
            <li><span className="font-medium">Support & troubleshooting</span> (handle your requests, fix issues) — Art. 6(1)(b)/(f).</li>
            <li><span className="font-medium">Legal obligations</span> (e.g., accounting or retention duties, if applicable) — Art. 6(1)(c).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Personal Data We Process</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Account & contact data:</span> name, email, role, authentication identifiers.</li>
            <li><span className="font-medium">Connector data:</span> provider name, scopes/permissions granted, connection metadata, and <span className="font-medium">access tokens stored encrypted</span> (KMS-encrypted; decrypted only to perform authorized API calls).</li>
            <li><span className="font-medium">Operational data from connected tools (processor role):</span> minimal records needed to execute automations (e.g., reservation IDs/status, booking metadata, message headers/IDs). We do not process guest-uploaded documents in this pilot.</li>
            <li><span className="font-medium">Technical logs:</span> timestamps, request IDs, success/error codes, and event metadata necessary for security and reliability.</li>
          </ul>
          <p className="text-xs text-navy/60">Avoid sending special-category data (Art. 9 GDPR) through connectors unless strictly necessary for your use case.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Security</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">User secrets:</span> KMS-encrypted; decrypted only for authorized API call procedures; stored in PostgreSQL with encryption at rest and protected by RBAC and RLS.</li>
            <li><span className="font-medium">System secrets:</span> managed via Google Cloud Secrets Manager with strictly scoped IAM roles and audit logging.</li>
            <li><span className="font-medium">Transport & infrastructure:</span> TLS 1.2+ in transit; services in a restricted VPC; access logged and monitored.</li>
            <li><span className="font-medium">Compliance:</span> We adhere to GDPR requirements as controller (account data) and as processor (connector data) with minimal exposure and secure processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Data Location & International Transfers</h2>
          <p>
            We aim to process and store data in EU regions (e.g., EU Supabase project; EU GCP regions). Where transfers outside the EEA/UK are unavoidable, we rely on Standard Contractual Clauses and supplementary safeguards included in our processor terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Processors</h2>
          <p className="text-navy/70">We use the following service providers under GDPR-compliant processing terms:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Supabase (EU-hosted)</span> — authentication, database, and storage with Row-Level Security (RLS) and encryption at rest; region: EU; safeguards: Encryption at rest; access controlled by RBAC; EU hosting</li>
            <li><span className="font-semibold">Google Cloud Platform (GCP)</span> — application infrastructure (compute/network), KMS key management, and Secrets Manager; region: EU regions (e.g., europe-west*); safeguards: Encryption at rest, IAM with least-privilege, audit logging; SCCs if data leave EEA/UK</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Retention</h2>
          <p>Account data are retained for the life of the pilot account. Connector credentials are stored while a connection is active and deleted upon disconnection or account deletion. Minimal operational logs are kept for up to 90 days for security and troubleshooting unless legal obligations require longer.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Your Rights</h2>
          <p>
            You can request access, rectification, erasure, restriction, portability, or object to processing by emailing <a href="mailto:valentin@auctores.ai" className="underline">valentin@auctores.ai</a>. You also have the right to lodge a complaint with a supervisory authority in the EU/EEA/UK.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Cookies & Local Storage</h2>
          <p>
            We only use essential cookies/local storage required to run the pilot (e.g., session/CSRF). No analytics, advertising, or tracking cookies are used, so a consent banner is not required at this time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Automated Decision-Making</h2>
          <p>
            Our automations act on your configured instructions. We do not make decisions with legal or similarly significant effects about individuals solely by automated means within the meaning of Art. 22 GDPR.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">Changes</h2>
          <p>
            We may update this notice as the pilot evolves. Material changes will be reflected here before they apply to you.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
