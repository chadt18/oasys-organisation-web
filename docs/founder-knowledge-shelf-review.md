# Founder Knowledge Shelf — pull request verification guide
Date: 10 November 2026
Status: REVIEW ONLY — no customer-facing integration

## Purpose
A standalone, accessible HTML prototype in `prototypes/founder-knowledge-shelf.html`. Eight concise source-linked briefs cover product boundaries, consumer website, Morning Brief, AI flow, privacy, local-model experiment, learning content, and decisions.

## Source of truth
Google Drive Founder Field Guide: https://docs.google.com/document/d/1SRerR2K27C-7kL7iEIruLmuQXzj_ESWsBCAsmBtWy5o/edit
The original documents linked in each card remain authoritative. This is a manually curated 10 November snapshot, not live Google Drive sync.

## Test
1. Download/open the standalone HTML locally (or use GitHub preview); do not deploy from this PR.
2. Search for "privacy", "AI", "courses" and confirm filtering and empty results.
3. Choose status "Prototype"; open Morning Brief.
4. Follow each original-source link with a signed-in Drive account.
5. Keyboard-only: Tab through search, status, eight topic buttons, source links; verify focus.
6. Check mobile 320px, zoom at 200% and 400%, and a screen reader.
7. Ask an unfamiliar reviewer to explain what is live, what is proposed, and who decides within five minutes.
8. Compare each card against its source; record contradictions and stale dates.
9. Confirm no network calls originate from script itself; link-clicks intentionally open external sources.
10. Confirm the OASYS public website remains unchanged.

## Explicit exclusions
No login, backend, local/cloud AI, live data connections, automatic document updates, privileged business actions, shopping/weather/car integrations, new promises about installation time, or customer visibility.

## Next experiment
Privately compare local and restricted cloud models on the same OASYS-owned *synthetic* record pack. No NTU student records, private wellbeing history or third-party confidential data. Use fixed prompts, pre-calculated answers, 3 conflicting sources, 3 missing fields and source-citation scoring; record model version, device, latency, errors, connectivity and full test cost. Build only after the result reveals a reason.

## Future implementation gate
Product owner approves placement and source ownership; security reviewer checks permissions and links; QA owner verifies keyboard/screen reader/mobile. A separate PR would be required for dashboard integration and live Drive connection.