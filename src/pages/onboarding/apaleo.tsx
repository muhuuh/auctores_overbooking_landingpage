// app/onboarding-sop/page.tsx  (Next.js App Router)
// or: pages/onboarding-sop.tsx  (Pages Router)
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OnboardingSOP = () => {
  const [isDetailedSetupOpen, setIsDetailedSetupOpen] = useState(false);

  return (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-24 pt-32 max-w-5xl">
        <h1 className="text-3xl font-bold text-navy mb-6 text-center">
          Auctores + Apaleo: Integration Onboarding Guide
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* What is Auctores for */}
          <section className="bg-white rounded-lg border border-navy/10 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">What is Auctores for?</h2>
            <p className="text-navy/80 mb-4">
              Auctores is an automation platform for hotels that brings{" "}
              <strong className="text-navy">airline-style smart overbooking</strong> to hospitality.
              It keeps more rooms occupied, reduces manual work, and protects
              guest experience with safety rails you control.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy/80">
              <li>
                <strong className="text-navy">Smart Overbooking:</strong> Daily recommendations (or
                auto-apply) tuned to your property.
              </li>
              <li>
                <strong className="text-navy">Hands-off Automation:</strong> Optional automatic
                updates of overbooking buffers in Apaleo.
              </li>
              <li>
                <strong className="text-navy">Safety &amp; Control:</strong> Risk caps, advisory
                mode, audit logs, and full transparency.
              </li>
            </ul>
          </section>

          {/* Data sharing */}
          <section className="bg-white rounded-lg border border-navy/10 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">What data is shared between Apaleo and Auctores?</h2>
            <p className="text-navy/80 mb-4">
              To forecast cancellations and compute safe overbooking levels,
              Auctores reads:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy/80 mb-4">
              <li>
                <strong className="text-navy">Reservations &amp; arrivals/check-ins</strong> (per
                date &amp; room type).
              </li>
              <li>
                <strong className="text-navy">Unit/room-type &amp; property details</strong> used to
                scope recommendations.
              </li>
              <li>
                <strong className="text-navy">Cancellations &amp; no-shows</strong> patterns over
                time.
              </li>
              <li>
                <strong className="text-navy">Overbooking buffers</strong> (read/write only if you
                enable auto-apply).
              </li>
            </ul>
            <div className="bg-navy/5 rounded-md p-4 border-l-4 border-navy">
              <p className="text-navy/80">
                <strong className="text-navy">Privacy:</strong> Processing uses{" "}
                <strong className="text-navy">encrypted, anonymized</strong> operational data. No guest
                PII is required for modeling. You control permissions and can
                revoke access at any time in Apaleo.
              </p>
            </div>
          </section>

          {/* Step-by-step */}
          <section className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-lg border border-navy/20 p-6 shadow-md">
            <h2 className="text-2xl font-bold text-navy mb-4">Step-by-step onboarding (≈ 5 minutes)</h2>
            <ol className="list-decimal pl-6 space-y-3 text-navy/80">
              <li>
                <strong className="text-navy">Sign in / Create account</strong> at Auctores.
              </li>
              <li>
                Find <strong className="text-navy">Auctores Smart Overbooking</strong> in the Apaleo
                Store and click <strong className="text-navy">Connect to Apaleo</strong>.
              </li>
              <li>
                <strong className="text-navy">Connect Apaleo (OAuth).</strong> Securely authorize
                Auctores to read reservations and manage overbooking buffers (if
                enabled).
              </li>
              <li>
                <strong className="text-navy">Choose parameters (you're in control):</strong>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>
                    <strong>Timeframe</strong> to optimize (e.g., next 30–90
                    days)
                  </li>
                  <li>
                    <strong>Room categories</strong> to include
                  </li>
                  <li>
                    <strong>Overbooking strategy</strong> and{" "}
                    <strong>risk caps</strong> (hard maximums per
                    date/category)
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-navy">Pick your mode:</strong>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>
                    <strong>Advisory (Review &amp; apply):</strong> See daily
                    recommendations; you apply changes in Apaleo.
                  </li>
                  <li>
                    <strong>Auto-apply:</strong> Auctores updates the
                    overbooking buffer in Apaleo for you every day.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-navy">Click Activate.</strong> Your{" "}
                <strong className="text-navy">daily overbooking plan</strong> is generated and kept
                current.
              </li>
            </ol>

            <div className="mt-6 bg-white/60 rounded-md p-4 border border-navy/20">
              <p className="font-semibold text-navy mb-2">
                What you see after activation
              </p>
              <ul className="list-disc pl-6 space-y-1 text-navy/80">
              <li>
                Calendar view with <strong>daily recommended rooms to overbook</strong> per
                room type.
              </li>
              <li>
                <strong>Logs &amp; audit trail</strong> of recommendations and
                (if enabled) applied changes.
              </li>
              <li>
                Status, next run time, and the ability to{" "}
                <strong className="text-navy">pause/resume</strong> or switch modes anytime.
              </li>
            </ul>
            </div>
            <p className="mt-4 text-sm text-navy/70 italic">
              💡 For a more detailed step-by-step guide with URLs and validation, see the collapsible section at the bottom: "Detailed setup (with links &amp; validation)"
            </p>
          </section>

          {/* Best way to trial */}
          <section className="bg-white rounded-lg border border-navy/10 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">Best way to trial Auctores</h2>
            <ul className="list-disc pl-6 space-y-3 text-navy/80">
              <li>
                Start in <strong className="text-navy">Advisory mode</strong> (no changes written to
                Apaleo). Review daily numbers for a few days in the overview we
                provide you, which gives a clear understanding how many room are
                recommended to be overbooked, for each day in the coming weeks.
                For better understanding, leverage the visualisation of the
                overbooking recommendation over time
              </li>
              <li>
                You can adjust manually the recommendation in your PMS and track
                the success.
              </li>
              <li>
                When comfortable with the recommendation, toggle{" "}
                <strong className="text-navy">Auto-apply</strong> and set conservative{" "}
                <strong className="text-navy">risk caps</strong> to get it handled by Auctores
                "Hands-off-the-wheel". Simply review the logs to understand the
                adjustments made.
              </li>
              <li>
                Book a short onboarding walkthrough if you want help reviewing
                strategy and caps.
              </li>
            </ul>
          </section>

          {/* Results */}
          <section className="bg-white rounded-lg border border-navy/10 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">Results you can expect</h2>
            <ul className="list-disc pl-6 space-y-2 text-navy/80">
              <li>
                <strong className="text-navy">Daily recommendations</strong> for each upcoming date &amp;
                room type.
              </li>
              <li>
                <strong className="text-navy">Automatic buffer updates</strong> in Apaleo (when
                Auto-apply is on).
              </li>
              <li>
                <strong className="text-navy">Fewer empty rooms</strong> on high-risk dates;{" "}
                <strong className="text-navy">no surprises</strong> thanks to caps &amp; controls.
              </li>
            </ul>
          </section>

          {/* Supported PMS */}
          <section className="bg-white rounded-lg border border-navy/10 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">Supported PMS &amp; tools</h2>
            <ul className="list-disc pl-6 space-y-2 text-navy/80">
              <li>
                <strong className="text-navy">Live:</strong> Apaleo (this guide), <strong className="text-navy">Mews</strong>.
              </li>
              <li>
                <strong className="text-navy">Coming soon:</strong> Cloudbeds.
              </li>
              <li>
                Using a different PMS? Tell us which one—we'll evaluate
                feasibility.
              </li>
            </ul>
          </section>

          {/* Training & pricing */}
          <section className="bg-white rounded-lg border border-navy/10 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">Training, support &amp; pricing</h2>
            <ul className="list-disc pl-6 space-y-2 text-navy/80">
              <li>
                A short <strong className="text-navy">onboarding session</strong> is available on
                request (setup, strategy, and QA).
              </li>
              <li>
                <strong className="text-navy">Support:</strong> <a href="mailto:valentin@auctores.ai" className="text-navy underline hover:text-navy/70">valentin@auctores.ai</a>
              </li>
              <li>
                <strong className="text-navy">Pricing:</strong> 3€/room/month
              </li>
            </ul>
          </section>

          {/* Disconnect */}
          <section className="bg-white rounded-lg border border-navy/10 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">How do I disconnect Auctores?</h2>
            <p className="text-navy/80">
              You can disconnect the app any time from Apaleo's{" "}
              <strong className="text-navy">My Store Apps</strong> page or by contacting our team.
            </p>
          </section>

          {/* Detailed setup - Collapsible */}
          <section className="bg-navy/5 rounded-lg border border-navy/20 shadow-md">
            <button
              onClick={() => setIsDetailedSetupOpen(!isDetailedSetupOpen)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-navy/10 transition-colors rounded-lg"
            >
              <h2 className="text-2xl font-bold text-navy">Detailed setup (with links &amp; validation)</h2>
              <svg
                className={`w-6 h-6 text-navy transition-transform ${isDetailedSetupOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDetailedSetupOpen && (
            <div className="px-6 pb-6 space-y-6">
            <p className="text-navy/70 italic">
              This section gives concrete UI steps and URLs to make onboarding
              fast and clear.
            </p>

            <div className="bg-white rounded-md p-5 border border-navy/20">
              <h3 className="text-xl font-bold text-navy mb-3">Step 1: Authentication (Login / Signup)</h3>
              <p className="text-sm text-navy/70 mb-3">
                <strong className="text-navy">URL:</strong>{" "}
                <code className="bg-navy/10 px-2 py-1 rounded text-navy font-mono text-xs">/overbooking/login?scope=Apaleo</code>
              </p>

              <div className="mb-4">
                <p className="font-semibold text-navy mb-2">
                  New users (Sign up):
                </p>
                <ul className="list-disc pl-6 space-y-1 text-navy/80">
              <li>
                Enter <strong className="text-navy">Email</strong>, <strong className="text-navy">Password</strong> (min 8
                chars incl. uppercase, lowercase, number, symbol), and{" "}
                <strong className="text-navy">Confirm password</strong>. <br />
                Click <strong className="text-navy">Create account</strong> → a verification email is
                sent → verify before proceeding.
              </li>
            </ul>
              </div>

              <div>
                <p className="font-semibold text-navy mb-2">
                  Existing users (Sign in):
                </p>
                <ul className="list-disc pl-6 space-y-1 text-navy/80">
                  <li>
                    Enter <strong className="text-navy">Email</strong> and <strong className="text-navy">Password</strong>.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-md p-5 border border-navy/20">
              <h3 className="text-xl font-bold text-navy mb-3">Step 2 — Profile setup</h3>
              <p className="text-sm text-navy/70 mb-3">
                <strong className="text-navy">URL:</strong>{" "}
                <code className="bg-navy/10 px-2 py-1 rounded text-navy font-mono text-xs">/overbooking/onboarding?scope=Apaleo</code>
              </p>
              <p className="text-navy/80">
                Fill in required fields: Preferred language (EN/DE/FR/ES/IT),
                Hotel name, Address line 1, ZIP, City, Country. <br />
                Click <strong className="text-navy">Save profile</strong> → onboarding step marked
                complete → auto-redirect to the connection page.
              </p>
            </div>

            <div className="bg-white rounded-md p-5 border border-navy/20">
              <h3 className="text-xl font-bold text-navy mb-3">Step 3 — Connect your PMS (Apaleo OAuth)</h3>
              <p className="text-sm text-navy/70 mb-3">
                <strong className="text-navy">URL:</strong>{" "}
                <code className="bg-navy/10 px-2 py-1 rounded text-navy font-mono text-xs">/overbooking/connect?scope=Apaleo</code>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-navy/80">
              <li>
                <strong className="text-navy">Connect Apaleo</strong> page is pre-selected.
              </li>
              <li>
                Click <strong className="text-navy">Connect Apaleo</strong> → you're redirected to
                Apaleo's secure OAuth screen.
              </li>
              <li>
                Approve permissions for Auctores to{" "}
                <strong className="text-navy">read availability &amp; reservations</strong> and{" "}
                <strong className="text-navy">manage overbooking buffers</strong> (optional, only if
                you want auto-apply).
              </li>
              <li>
                Callback to <code className="bg-navy/10 px-1.5 py-0.5 rounded text-navy font-mono text-xs">/api/auth/Apaleo/callback</code>{" "}
                stores the OAuth token and returns you to the dashboard.
              </li>
            </ul>
            </div>

            <div className="bg-white rounded-md p-5 border border-navy/20">
              <h3 className="text-xl font-bold text-navy mb-3">Step 4 — Configure &amp; activate</h3>
              <p className="text-sm text-navy/70 mb-3">
                <strong className="text-navy">URL:</strong>{" "}
                <code className="bg-navy/10 px-2 py-1 rounded text-navy font-mono text-xs">/overbooking?scope=Apaleo</code>
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-navy/80">
              <li>
                <strong className="text-navy">Open configuration</strong> (click <strong className="text-navy">Configure</strong>).
              </li>
              <li>
                <strong className="text-navy">Schedule:</strong> choose when the engine should run:
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>
                    Hourly: every <em>X</em> hours (default <strong className="text-navy">6h</strong>)
                  </li>
                  <li>
                    Daily: specific time (default <strong className="text-navy">07:00</strong>)
                  </li>
                  <li>
                    Weekly: weekday + time (default <strong className="text-navy">Mon 07:00</strong>)
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-navy">Room types</strong> (⚠️ required): fetch from Apaleo and
                select at least one room type.
              </li>
              <li>
                <strong className="text-navy">Parameters:</strong> set timeframe, overbooking
                strategy, and <strong className="text-navy">risk caps</strong>.
              </li>
              <li>
                <strong className="text-navy">Save configuration.</strong>
              </li>
            </ol>

            <div className="bg-navy/5 rounded-md p-4 mt-4 border-l-4 border-navy">
              <p className="text-navy/80">
                Click <strong className="text-navy">Activate</strong> → success modal confirms{" "}
                <strong className="text-navy">"Your AI Overbooking Engine is live."</strong> <br />
                Message:{" "}
                <em>
                  "Our AI is processing your historical data and will begin
                  adjusting overbooking levels within ~5–10 minutes."
                </em>{" "}
                <br />
                Click <strong className="text-navy">View dashboard</strong>.
              </p>
            </div>

            <h4 className="text-lg font-semibold text-navy mt-4 mb-2">Post-activation dashboard:</h4>
            <ul className="list-disc pl-6 space-y-1 text-navy/80">
              <li>
                <strong className="text-navy">Status:</strong> Active (green) and <strong className="text-navy">Next run</strong>{" "}
                time.
              </li>
              <li>
                <strong className="text-navy">Logs:</strong> agent execution history &amp; changes.
              </li>
              <li>
                <strong className="text-navy">Controls:</strong> pause/resume, edit schedule, update
                room types/parameters.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-navy mt-4 mb-2">Monitoring &amp; controls</h4>
            <ul className="list-disc pl-6 space-y-1 text-navy/80">
              <li>Real-time status, next scheduled run, and history.</li>
              <li>
                Optional <strong className="text-navy">Advisory vs Auto-apply</strong> switch at any
                time. Audit trail of suggested and applied changes.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-navy mt-4 mb-2">Error handling &amp; validation</h4>
            <ul className="list-disc pl-6 space-y-1 text-navy/80">
              <li>
                <strong className="text-navy">"Connect PMS required"</strong> → complete Step 3.
              </li>
              <li>
                <strong className="text-navy">"Select at least one room type"</strong> → open{" "}
                <strong className="text-navy">Configuration</strong> → choose room types →{" "}
                <strong className="text-navy">Save</strong>.
              </li>
              <li>
                <strong className="text-navy">OAuth failed</strong> → retry, confirm Apaleo
                credentials/permissions.
              </li>
              <li>
                <strong className="text-navy">Email verification pending</strong> → check inbox and
                complete verification.
              </li>
            </ul>
            </div>

            <div className="bg-gradient-to-r from-navy/10 to-navy/5 rounded-md p-4 mt-4 border border-navy/30">
              <p className="text-navy font-semibold text-center">
                🚀 Ready to start? Connect Auctores to Apaleo and activate smart overbooking in minutes.
              </p>
            </div>
            </div>
            )}
          </section>
        </div>
    </main>
    <Footer />
  </div>
  );
};

export default OnboardingSOP;
