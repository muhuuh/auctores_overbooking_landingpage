import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const TermsOfService = () => (
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
      <h1 className="text-3xl font-bold text-navy mb-6">Terms of Service</h1>

      <div className="prose max-w-none text-navy/80 space-y-6">
        <p>
          <strong>Last updated:</strong> 22 December 2025
        </p>

        <p>
          <strong>Important:</strong> These Terms govern your use of the Auctores service (the “Service”).
          The Service is operated by <strong>Auctores Technologies OÜ</strong> (“we”, “us”, “our”).
          By accessing or using the Service, you agree to these Terms. <em>This document is not legal advice.</em>
        </p>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">1. Company Details</h2>
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
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">2. Eligibility &amp; Scope (B2B Only)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You must be at least 18 and use the Service <strong>solely for business purposes</strong> (B2B). The Service is not intended for consumers.</li>
            <li>The Service enables you to connect third-party tools (e.g., PMS) via secure integrations to generate overbooking recommendations and related automation outputs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">3. Accounts</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You are responsible for your account and for safeguarding credentials and access.</li>
            <li>Provide accurate registration information and keep it up to date.</li>
            <li>Actions taken via your account are deemed authorized by you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">4. Connectors &amp; Permissions</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>By connecting a third-party tool, you instruct us to access that tool’s data <strong>on your behalf</strong> with the permissions you grant.</li>
            <li>
              <strong>Tokens &amp; secrets</strong>: Connector tokens/secrets are stored encrypted and are decrypted only when needed to perform authorized API calls.
            </li>
            <li>You are responsible for your rights to use connected tools and for complying with their terms and policies.</li>
            <li>We may suspend a connector if its provider revokes access, changes APIs, or if we detect abuse or a security risk.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">5. Data Protection (GDPR Roles)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Controller:</strong> account/admin user data and essential service logs.</li>
            <li><strong>Processor (on your behalf):</strong> operational data accessed from connected tools to produce recommendations and outputs for you.</li>
          </ul>
          <p>
            Our Privacy Policy explains how we handle personal data. If required, a Data Processing Addendum (DPA) can be provided under Art. 28 GDPR.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">6. Your Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Configure parameters responsibly and <strong>review outputs</strong>. The Service provides <strong>recommendations and automation support</strong>;
              you remain solely responsible for operational decisions and outcomes (e.g., walkouts, compensations, re-accommodation).
            </li>
            <li>
              Do not provide special-category data (Art. 9 GDPR) unless strictly necessary and lawful.
            </li>
            <li>
              <strong>Guest data:</strong> Only connect and share the data that is necessary for the Service. If your connected systems contain guest personal data,
              you are responsible for ensuring you have a lawful basis and appropriate notices/permissions to share it with us as your processor.
            </li>
            <li>Comply with applicable laws and third-party terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">7. Acceptable Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>No unlawful, harmful, or abusive activities (including spam or unauthorized bulk messaging).</li>
            <li>No attempts to bypass security or rate limits, reverse engineer non-open parts, or probe without permission.</li>
            <li>No interference with or degradation of the Service or others’ use.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">8. Beta Features; Changes</h2>
          <p>
            The Service may include beta or experimental features and may change over time. We may modify, suspend, or discontinue any part of the Service.
            We will try to provide reasonable notice of material changes when feasible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">9. Output &amp; Non-Reliance</h2>
          <p>
            Outputs are generated from your inputs and connected systems and may be inaccurate or incomplete. The Service does not replace professional judgment.
            You are solely responsible for verifying outputs before acting on them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">10. Intellectual Property</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>We own the Service, software, documentation, and our marks. You own your data.</li>
            <li>You grant us a limited, non-exclusive license to process your data solely to operate the Service, provide support, and ensure security.</li>
            <li><strong>Feedback:</strong> If you provide suggestions, you grant us a perpetual, irrevocable, royalty-free license to use them.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">11. Confidentiality</h2>
          <p>
            Each party may access the other’s non-public information. The receiving party will protect it with reasonable care and use it only to fulfil these Terms.
            Usual exclusions apply (public, independently developed, lawfully received).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">12. Third-Party Services</h2>
          <p>
            We integrate with third-party providers (e.g., PMS). We do not control and are not responsible for those services, their availability, or their terms.
            Your use of them is governed by their terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">13. Fees</h2>
          <p>
            Fees (if any) and payment terms will be described in an order form, subscription plan, or other written agreement.
            If we introduce or change paid plans, we will notify you and, where required, ask you to accept updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">14. Term &amp; Termination</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You may stop using the Service at any time and/or request account deletion.</li>
            <li>We may suspend or terminate access if you breach these Terms, misuse the Service, or create security/legal risk.</li>
            <li>
              <strong>Effect of termination:</strong> We will disable connectors and delete (or schedule deletion of) connector secrets and customer data in accordance with our Privacy Policy and/or DPA.
              Minimal logs may be retained for security and troubleshooting for up to 180 days unless legally required to retain longer.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">15. Warranties &amp; Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
            INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">16. Limitation of Liability (B2B)</h2>
          <p>
          To the maximum extent permitted by law, Auctores Technologies OÜ will not be liable for any indirect, incidental, special, consequential, exemplary or punitive damages, or any loss of profits, revenue, goodwill, or data.

          Our aggregate liability for all claims relating to the Service will not exceed the fees paid by you for the Service in the 12 months preceding the event giving rise to the claim.

          Nothing in these Terms limits or excludes liability that cannot be limited or excluded under applicable law (including, without limitation, liability for willful misconduct or gross negligence, and liability for death or personal injury caused by negligence).

          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">17. Indemnity</h2>
          <p>
            You will defend and indemnify us from claims arising out of (a) your use of the Service in violation of these Terms or law;
            (b) your data or instructions; or (c) your use of third-party services via the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">18. Force Majeure</h2>
          <p>
            We are not liable for delays or failures caused by events beyond our reasonable control (e.g., outages at providers, acts of God, labor disputes,
            war, government action).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">19. Governing Law; Venue</h2>
          <p>
            These Terms are governed by the laws of the <strong>Republic of Estonia</strong>, excluding conflict-of-law rules.
            Unless mandatory law provides otherwise, the exclusive venue for disputes is the competent court in <strong>Harju County, Estonia (Tallinn)</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">20. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. If we make material changes, we will provide reasonable notice (e.g., in-app or email).
            Continued use after the effective date constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">21. Miscellaneous</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Severability:</strong> If any provision is unenforceable, the remainder remains in effect.</li>
            <li><strong>Entire Agreement:</strong> These Terms are the entire agreement regarding the Service and supersede prior discussions.</li>
            <li><strong>No Assignment:</strong> You may not assign without our prior written consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy mt-4 mb-2">22. Contact</h2>
          <p>
            <strong>Auctores Technologies OÜ</strong>
            <br />
            Registered address: <strong>Address is Harju maakond, Tallinn, Kesklinna linnaosa, Ahtri tn 12, 15551</strong>
            <br />
            Contact person: <strong>E-Residency Hub OÜ, registry code 14249878</strong>
            <br />
            Email: <a href="mailto:leo@auctores.ai" className="underline">leo@auctores.ai</a>
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

(TermsOfService as any).withNavBar = false;

export default TermsOfService;