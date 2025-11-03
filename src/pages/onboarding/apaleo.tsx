// app/onboarding-sop/page.tsx  (Next.js App Router)
// or: pages/onboarding-sop.tsx  (Pages Router)
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OnboardingSOP() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24 pt-32">
        <h1 className="text-3xl font-bold text-navy mb-6">
          Auctores + Apaleo: Integration Onboarding Guide
        </h1>

        <div className="prose prose-lg max-w-none text-navy/90 prose-headings:text-navy">
          {/* What is Auctores for */}
          <section>
            <h2>What is Auctores for?</h2>
            <p>
              Auctores is an automation platform for hotels that brings{" "}
              <strong>airline-style smart overbooking</strong> to hospitality.
              It keeps more rooms occupied, reduces manual work, and protects
              guest experience with safety rails you control.
            </p>
            <ul>
              <li>
                <strong>Smart Overbooking:</strong> Daily recommendations (or
                auto-apply) tuned to your property.
              </li>
              <li>
                <strong>Hands-off Automation:</strong> Optional automatic
                updates of overbooking buffers in Apaleo.
              </li>
              <li>
                <strong>Safety &amp; Control:</strong> Risk caps, advisory
                mode, audit logs, and full transparency.
              </li>
            </ul>
          </section>

          <hr />

          {/* Data sharing */}
          <section>
            <h2>What data is shared between Apaleo and Auctores?</h2>
            <p>
              To forecast cancellations and compute safe overbooking levels,
              Auctores reads:
            </p>
            <ul>
              <li>
                <strong>Reservations &amp; arrivals/check-ins</strong> (per
                date &amp; room type).
              </li>
              <li>
                <strong>Unit/room-type &amp; property details</strong> used to
                scope recommendations.
              </li>
              <li>
                <strong>Cancellations &amp; no-shows</strong> patterns over
                time.
              </li>
              <li>
                <strong>Overbooking buffers</strong> (read/write only if you
                enable auto-apply).
              </li>
            </ul>
            <p>
              <strong>Privacy:</strong> Processing uses{" "}
              <strong>encrypted, anonymized</strong> operational data. No guest
              PII is required for modeling. You control permissions and can
              revoke access at any time in Apaleo.
            </p>
          </section>

          <hr />

          {/* Step-by-step */}
          <section>
            <h2>Step-by-step onboarding (≈ 5 minutes)</h2>
            <ol>
              <li>
                <strong>Sign in / Create account</strong> at Auctores.
              </li>
              <li>
                Find <strong>Auctores Smart Overbooking</strong> in the Apaleo
                Store and click <strong>Connect to Apaleo</strong>.
              </li>
              <li>
                <strong>Connect Apaleo (OAuth).</strong> Securely authorize
                Auctores to read reservations and manage overbooking buffers (if
                enabled).
              </li>
              <li>
                <strong>Choose parameters (you’re in control):</strong>
                <ul>
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
                <strong>Pick your mode:</strong>
                <ul>
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
                <strong>Click Activate.</strong> Your{" "}
                <strong>daily overbooking plan</strong> is generated and kept
                current.
              </li>
            </ol>

            <p>
              <strong>What you see after activation</strong>
            </p>
            <ul>
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
                <strong>pause/resume</strong> or switch modes anytime.
              </li>
            </ul>
            <p>
              For a more detailed step-by-step guide, please see last section
              “Detailed setup (with links &amp; validation)”
            </p>
          </section>

          <hr />

          {/* Best way to trial */}
          <section>
            <h2>Best way to trial Auctores</h2>
            <ul>
              <li>
                Start in <strong>Advisory mode</strong> (no changes written to
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
                <strong>Auto-apply</strong> and set conservative{" "}
                <strong>risk caps</strong> to get it handled by Auctores
                “Hands-off-the-wheel”. Simply review the logs to understand the
                adjustments made.
              </li>
              <li>
                Book a short onboarding walkthrough if you want help reviewing
                strategy and caps.
              </li>
            </ul>
          </section>

          <hr />

          {/* Results */}
          <section>
            <h2>Results you can expect</h2>
            <ul>
              <li>
                <strong>Daily recommendations</strong> for each upcoming date &amp;
                room type.
              </li>
              <li>
                <strong>Automatic buffer updates</strong> in Apaleo (when
                Auto-apply is on).
              </li>
              <li>
                <strong>Fewer empty rooms</strong> on high-risk dates;{" "}
                <strong>no surprises</strong> thanks to caps &amp; controls.
              </li>
            </ul>
          </section>

          <hr />

          {/* Supported PMS */}
          <section>
            <h2>Supported PMS &amp; tools</h2>
            <ul>
              <li>
                <strong>Live:</strong> Apaleo (this guide), <strong>Mews</strong>.
              </li>
              <li>
                <strong>Coming soon:</strong> Cloudbeds.
              </li>
              <li>
                Using a different PMS? Tell us which one—we’ll evaluate
                feasibility.
              </li>
            </ul>
          </section>

          <hr />

          {/* Training & pricing */}
          <section>
            <h2>Training, support &amp; pricing</h2>
            <ul>
              <li>
                A short <strong>onboarding session</strong> is available on
                request (setup, strategy, and QA).
              </li>
              <li>
                <strong>Support:</strong> valentin@auctores.ai
              </li>
              <li>
                <strong>Pricing:</strong> 3€/room/month
              </li>
            </ul>
          </section>

          <hr />

          {/* Disconnect */}
          <section>
            <h2>How do I disconnect Auctores?</h2>
            <p>
              You can disconnect the app any time from Apaleo’s{" "}
              <strong>My Store Apps</strong> page or by contacting our team.
            </p>
          </section>

          <hr />

          {/* Detailed setup */}
          <section>
            <h2>Detailed setup (with links &amp; validation)</h2>
            <p>
              This section gives concrete UI steps and URLs to make onboarding
              fast and clear.
            </p>

            <h3>Step1: Authentication (Login / Signup)</h3>
            <p>
              <strong>URL:</strong>{" "}
              <span className="font-mono">`/overbooking/login?scope=Apaleo`</span>
            </p>

            <p>
              <strong>New users (Sign up):</strong>
            </p>
            <ul>
              <li>
                Enter <strong>Email</strong>, <strong>Password</strong> (min 8
                chars incl. uppercase, lowercase, number, symbol), and{" "}
                <strong>Confirm password</strong>. <br />
                Click <strong>Create account</strong> → a verification email is
                sent → verify before proceeding.
              </li>
            </ul>

            <p>
              <strong>Existing users (Sign in):</strong>
            </p>
            <ul>
              <li>
                Enter <strong>Email</strong> and <strong>Password</strong>.
              </li>
            </ul>

            <h3>Step 2 — Profile setup</h3>
            <p>
              <strong>URL:</strong>{" "}
              <span className="font-mono">`/overbooking/onboarding?scope=Apaleo`</span>
            </p>
            <p>
              Fill in required fields: Preferred language (EN/DE/FR/ES/IT),
              Hotel name, Address line 1, ZIP, City, Country. <br />
              Click <strong>Save profile</strong> → onboarding step marked
              complete → auto-redirect to the connection page.
            </p>

            <h3>Step 3 — Connect your PMS (Apaleo OAuth)</h3>
            <p>
              <strong>URL:</strong>{" "}
              <span className="font-mono">`/overbooking/connect?scope=Apaleo`</span>
            </p>
            <ul>
              <li>
                <strong>Connect Apaleo</strong> page is pre-selected.
              </li>
              <li>
                Click <strong>Connect Apaleo</strong> → you’re redirected to
                Apaleo’s secure OAuth screen.
              </li>
              <li>
                Approve permissions for Auctores to{" "}
                <strong>read availability &amp; reservations</strong> and{" "}
                <strong>manage overbooking buffers</strong> (optional, only if
                you want auto-apply).
              </li>
              <li>
                Callback to <span className="font-mono">`/api/auth/Apaleo/callback`</span>{" "}
                stores the OAuth token and returns you to the dashboard.
              </li>
            </ul>

            <h3>Step 4 — Configure &amp; activate</h3>
            <p>
              <strong>URL:</strong>{" "}
              <span className="font-mono">`/overbooking?scope=Apaleo`</span>
            </p>
            <ol>
              <li>
                <strong>Open configuration</strong> (click <strong>Configure</strong>).
              </li>
              <li>
                <strong>Schedule:</strong> choose when the engine should run:
                <ul>
                  <li>
                    Hourly: every <em>X</em> hours (default <strong>6h</strong>)
                  </li>
                  <li>
                    Daily: specific time (default <strong>07:00</strong>)
                  </li>
                  <li>
                    Weekly: weekday + time (default <strong>Mon 07:00</strong>)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Room types</strong> (⚠️ required): fetch from Apaleo and
                select at least one room type.
              </li>
              <li>
                <strong>Parameters:</strong> set timeframe, overbooking
                strategy, and <strong>risk caps</strong>.
              </li>
              <li>
                <strong>Save configuration.</strong>
              </li>
            </ol>

            <p>
              Click <strong>Activate</strong> → success modal confirms{" "}
              <strong>“Your AI Overbooking Engine is live.”</strong> <br />
              Message:{" "}
              <em>
                “Our AI is processing your historical data and will begin
                adjusting overbooking levels within ~5–10 minutes.”
              </em>{" "}
              <br />
              Click <strong>View dashboard</strong>.
            </p>

            <h4>Post-activation dashboard:</h4>
            <ul>
              <li>
                <strong>Status:</strong> Active (green) and <strong>Next run</strong>{" "}
                time.
              </li>
              <li>
                <strong>Logs:</strong> agent execution history &amp; changes.
              </li>
              <li>
                <strong>Controls:</strong> pause/resume, edit schedule, update
                room types/parameters.
              </li>
            </ul>

            <h4>Monitoring &amp; controls</h4>
            <ul>
              <li>Real-time status, next scheduled run, and history.</li>
              <li>
                Optional <strong>Advisory vs Auto-apply</strong> switch at any
                time. Audit trail of suggested and applied changes.
              </li>
            </ul>

            <h4>Error handling &amp; validation</h4>
            <ul>
              <li>
                <strong>“Connect PMS required”</strong> → complete Step 3.
              </li>
              <li>
                <strong>“Select at least one room type”</strong> → open{" "}
                <strong>Configuration</strong> → choose room types →{" "}
                <strong>Save</strong>.
              </li>
              <li>
                <strong>OAuth failed</strong> → retry, confirm Apaleo
                credentials/permissions.
              </li>
              <li>
                <strong>Email verification pending</strong> → check inbox and
                complete verification.
              </li>
            </ul>

            <hr />

            <p>
              <strong>Ready to start?</strong> Connect Auctores to Apaleo and
              activate smart overbooking in minutes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
