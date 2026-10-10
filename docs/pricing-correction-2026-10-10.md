# Legacy pricing correction and URL migration

The owner wants outdated pricing removed on 10 October. The standard hotel offer is 7% of recovered room revenue; no recovery means no fee. Stripe checkout is a separate release planned for 11 October.

This checkout is the actual Vercel-linked repository, based on deployed main commit `2539ced1573bbfd2862fc394e5989eb68a4185a3`. The similarly named local marketing repository points to a different remote and is not used for this release.

## Changes

- Permanent old-host-only redirects: `/` → `https://www.auctores.ai/`; `/privacy-policy`, `/terms-of-service`, `/impressum` → the equivalent maintained app legal pages.
- Keep `overbooking.auctores.ai` DNS and TLS. Do not change the current www Railway host or reactivate the stale apex/www assignments on this Vercel project.
- The Apaleo guide remains available with corrected 7% pricing until its useful installation/connection instructions have a maintained equivalent destination. It must not advertise EUR 3 during that transition.
- Correct fallback/preview homepage pricing and remove the obsolete lifetime 50% discount. Existing agreements are not changed by marketing copy.
- Rewrite only real SPA routes; unknown paths can return a real host 404 instead of the homepage.
- The current landing page separately adds `#cta` compatibility; its existing `#pricing` target already works. Fragments are handled by the browser, not sent to the redirect server.

## Verification and release checklist

- [x] Exact deployed repository and commit verified against Vercel.
- [x] Public redirect destinations return successful responses; current legal pages were read.
- [x] Locked dependencies installed without install scripts; no dependency/lockfile changes.
- [x] Production Vite build passes. Existing chunk-size and browser-data warnings remain.
- [x] Source scan finds no EUR 3 / EUR 1.99 room pricing or lifetime 50% discount in the public source.
- [ ] Preview-deployment checks: host condition, status, path, query parameters, slash normalization, unknown 404 and no redirect loop. Vercel's host condition is not emulated by its local dev command.
- [ ] Publish the prepared change, then verify all listed routes and the updated guide in production.
- [ ] After a maintained guide includes Apaleo installation/OAuth steps, permanently redirect `/onboarding/apaleo` to it and fix current-site historical guide URLs.
- [ ] Request recrawling and monitor indexed URLs/search snippets; a redirect does not guarantee an unchanged rank.

No production deployment or DNS write has occurred. Rollback restores the prior Vercel configuration/deployment, not DNS deletion.
