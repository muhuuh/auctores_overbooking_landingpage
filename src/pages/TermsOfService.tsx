import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-24 pt-32">
      <h1 className="text-3xl font-bold text-navy mb-6">Terms of Service (Pilot)</h1>
      <div className="prose max-w-none text-navy/80 space-y-6">
        <p><strong>Last updated:</strong> 19 October 2025</p>

        <p><strong>Important:</strong> These Terms govern your use of the Auctores pilot (the "Service"). The Service is currently operated by the founders <strong>Valentin Hornung, Leo Dubois &amp; Lucas Dema</strong> as natural persons (pre-incorporation) ("we", "us", "our"). By accessing or using the Service, you agree to these Terms. This document is not legal advice.</p>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">1. Eligibility &amp; Scope</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You must be at least 18 and use the Service <strong>for business purposes</strong> (B2B). The Service is not intended for consumers.</li>
            <li>The Service enables you to connect third-party tools (e.g., PMS, email) via secure OAuth and run automations that <strong>you configure</strong>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">2. Accounts</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You are responsible for your account, safeguarding credentials, and restricting access.</li>
            <li>Provide accurate registration information and keep it up to date.</li>
            <li>Actions taken via your account are deemed authorized by you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">3. Connectors &amp; Permissions</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>By connecting a third-party tool, you instruct us to access that tool's data <strong>on your behalf</strong> with the scopes/permissions you grant.</li>
            <li><strong>Tokens &amp; secrets</strong>: Access tokens are <strong>KMS-encrypted</strong>, stored with <strong>encryption at rest</strong> in our EU PostgreSQL database (Supabase), and <strong>decrypted only</strong> to perform authorized API calls.</li>
            <li>You are responsible for your rights to use connected tools and for complying with their terms and policies.</li>
            <li>We may suspend a connector if its provider revokes access, changes APIs, or if we detect abuse or security risk.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">4. Roles under GDPR</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Controller</strong>: your account/profile data and essential service logs.</li>
            <li><strong>Processor</strong>: data accessed from connected tools and processed to execute your configured automations.</li>
          </ul>
          <p>Our Privacy Policy explains personal-data handling. If required, a Data Processing Addendum (DPA) can be provided to govern processing on your behalf (Art. 28 GDPR).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">5. Your Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Configure automations responsibly and review outputs.</li>
            <li>Avoid sending special-category data (Art. 9 GDPR) unless strictly necessary.</li>
            <li><strong>Pilot limitation:</strong> We <strong>do not</strong> process guest-uploaded documents in this pilot; avoid uploading such documents.</li>
            <li>Comply with applicable laws and third-party terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">6. Acceptable Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>No unlawful, harmful, or abusive activities (including spam or unauthorized bulk messaging).</li>
            <li>No attempts to bypass security or rate limits, reverse-engineer non-open parts, or probe without permission.</li>
            <li>No interference with or degradation of the Service or others' use.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">7. Beta / Pilot Terms</h2>
          <p>The Service is experimental and may change, break, or become unavailable without notice. No SLA or uptime commitment applies. Features may be added, removed, or throttled at our discretion.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">8. Intellectual Property</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>We own the Service, software, documentation, and our marks. You own your data.</li>
            <li>You grant us a limited, non-exclusive license to process your data solely to operate the Service, provide support, and ensure security.</li>
            <li><strong>Feedback:</strong> If you provide suggestions, you grant us a perpetual, irrevocable, royalty-free license to use them.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">9. Confidentiality</h2>
          <p>Each party may access the other's non-public information. The receiving party will protect it with reasonable care and use it only to fulfil these Terms. Usual exclusions apply (public, independently developed, lawfully received).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">10. Security</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>User secrets</strong>: KMS-encrypted; decrypted only for authorized API call procedures; stored with encryption at rest; protected by RBAC and RLS.</li>
            <li><strong>System secrets</strong>: Google Cloud Secrets Manager with least-privilege IAM and audit logging.</li>
            <li><strong>Transport &amp; infrastructure</strong>: TLS 1.2+ in transit; restricted VPC; access logged and monitored.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">11. Third-Party Services</h2>
          <p>We integrate with third-party providers (e.g., PMS, email). We do not control and are not responsible for those services, their availability, or their terms. Your use of them is governed by their terms and policies.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">12. Availability; Changes</h2>
          <p>We may modify or discontinue any part of the Service at any time. We will try to provide reasonable notice of material changes when feasible.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">13. Fees</h2>
          <p>During the pilot, the Service is provided <strong>at no charge</strong>. If we introduce paid plans in the future, we will notify you in advance and provide updated terms. Continued use after such notice may require express acceptance.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">14. Term &amp; Termination</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You may stop using the Service at any time and/or request account deletion.</li>
            <li>We may suspend or terminate access for any reason (e.g., breach, misuse, risk).</li>
            <li><strong>Effect of termination:</strong> We will disable connectors and schedule deletion of connector secrets. Minimal operational logs may be retained for up to <strong>90 days</strong> for security and troubleshooting or longer if legally required. Export any needed data before termination.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">15. Warranties &amp; Disclaimers</h2>
          <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">16. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, GOODWILL, OR DATA. OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE SHALL NOT EXCEED <strong>EUR 100</strong> OR, IF APPLICABLE, THE AMOUNTS PAID BY YOU FOR THE SERVICE IN THE <strong>12 MONTHS</strong> PRECEDING THE EVENT GIVING RISE TO LIABILITY, WHICHEVER IS GREATER.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">17. Indemnity</h2>
          <p>You will defend and indemnify us from claims arising out of (a) your use of the Service in violation of these Terms or law; (b) your data or instructions; or (c) your use of third-party services via the Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">18. Governing Law; Venue</h2>
          <p>These Terms are governed by the laws of <strong>Germany</strong>, excluding conflict-of-law rules. The exclusive venue for disputes is the competent courts in <strong>Munich, Germany</strong>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">19. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. If we make material changes, we will provide reasonable notice (e.g., in-app or email). Your continued use after the effective date constitutes acceptance.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">20. Contact</h2>
          <p><strong>Auctores (Pilot)</strong><br/>Valentin Hornung, Leo Dubois &amp; Lucas Dema<br/>Wilhelm-Hertz-Str. 31, Germany<br/>Email: <a href="mailto:valentin@auctores.ai">valentin@auctores.ai</a></p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
