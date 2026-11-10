# OASYS Organisation role-knowledge clarity update — 10 November 2026

## Decision
Refine the **existing** OASYS Organisation homepage, not add another product, service, route or navigation hierarchy. One active ICP remains a Commercial/Ecommerce Manager. Level 1 working design-partner offer remains £500 setup + £149/month. The existing fictional dashboard and design-partner enquiry stay in place.

## Public copy changes
- Hero: "See what matters. Understand why. Decide what comes next."
- Human-control line: "Technology that helps. Humans who decide. Evidence you can check."
- Add "Roles & knowledge" anchor within the single homepage.
- Present the Commercial/Ecommerce Manager as **current synthetic validation focus**.
- Present Business/General Manager and Service/Operations Lead as **illustrative adaptations**, not shipped products.
- Show three role components: decisions, relevant source knowledge, and accountabilities.
- Expandable plain-English explanation of future Knowledge Shelf: browse source, check date and approval, optionally ask, and preserve human expertise.
- Update trust section to distinguish verified information, needs checking and cannot verify.
- Change Level 1 label "Available now" to "Prototype focus", consistent with no live customer connectors proven.
- Keep core CTA, pricing, privacy promises and public-sector pages unchanged.

## Verified source hierarchy for Knowledge Shelf
For any policy answer, compare:
1. Current **observed live** customer-facing legal page and checkout flow (requires real HTTP/browser check).
2. Source code and dated release manifest for the deployed version, if established.
3. Approved canonical source document (effective date and owner).
4. Older drafts as historical context, not customer policy.

**Specific cancellation-policy example:** In the inspected `chadt18/CalmStackCodex` source:
- `src/pages/FinalPublicPolishPages.tsx` exposes a Legal Hub entry "Cancellation and refunds".
- `src/App.tsx` declares `/legal/:documentId`.
- `src/pages/LegalDocumentPage.tsx` loads `src/data/legalPack.generated.json`.
- The `cancellation` record contains "Schedule 1: Cancellation, Refund and Digital Content Access Terms" and current consent/rights language matching the Drive Schedule 1's structure.
- **This is a source-code match, not an independently verified live response.** The web check on 10 November 2026 did not obtain an HTTP-rendered response for `https://calmstack.uk/legal/cancellation`, so do not claim public/live freshness until browser, deployed SHA and checkout review confirm it.

The Knowledge Shelf's "latest" resolver must record: source type; public URL; canonical Drive ID; version/effective date; source last modified; indexed timestamp; last live verified time; approval owner; and conflicts/lineage. The newest modified file is not necessarily customer-authoritative. Public "Get Help" source should point to exact legal route; public pages outrank draft copies **only after live verification**. If published code and canonical documents disagree, flag the discrepancy.

## Additional roles/skills hypothesis — intentionally parked
Role model: purpose, recurring decisions, information sources, domain concepts, procedures, role owner, review date, and approved changes. An organisation can reuse a common template and adapt it to its industry, while retaining human-defined permission limits.
The learning/skills continuity opportunity is research-only. Not approved for hiring rankings, monitoring individual learning behaviour, or exposing wellbeing records. Test real manager demand and task outcomes first.

## Accessibility acceptance
Use OASYS existing accessibility statement and site blueprint: semantic section headings, predictable anchor navigation, keyboard access, visible focus, colour-independent status, plain English, sufficient contrast and responsive reflow. The new optional details element must work with keyboard/assistive technology. Keep summaries and originals available without AI. Target WCAG 2.2 AA; do not claim certified compliance based solely on CSS or this PR.

## Review and release gate
- [ ] Inspect desktop and narrow mobile navigation / reflow.
- [ ] Verify role cards and native details summary keyboard focus.
- [ ] Check contrast, accessible link labels and headings.
- [ ] Confirm scripts and existing fictional sector switcher still work.
- [ ] Confirm contact enquiry and £500/£149 commercial details untouched.
- [ ] Confirm no real company/customer data was introduced.
- [ ] Confirm live HTTPS response and canonical URLs after approved merge.
- [ ] Submit/check `sitemap.xml` via existing Search Console workflow *only after* deploying and verifying live pages; since no new URL exists, the existing sitemap remains appropriate. Use URL Inspection to request recrawl of the homepage if available; indexing is not guaranteed.
- [ ] Founder signs off before merge or deployment.

## Supporting documents
- OASYS Organisation MVP Prototype Specification (13 Oct): https://docs.google.com/document/d/13KwlwJQe8gXNws1yNGd63g6HCxmreCAv7wKRvGsHN1Y/edit
- External Proposition v0.2: https://docs.google.com/document/d/1xySeFtD4XxRH7QkACbhSnnyqZMhc9l8nDAD3XhigHqU/edit
- Landing Page UX/SEO Blueprint v1.1: https://docs.google.com/document/d/1zIqYaZKnI-xpp76QUT55FHuH6mpgRH7_5JLzpiVVlGc/edit
- Accessible Role Knowledge and Source Freshness Blueprint: https://docs.google.com/document/d/138eW12PMG99tglesP1oBhxKf_rzhN__Ihaj7tAANKOQ/edit
- OASYS Accessibility Statement: https://docs.google.com/document/d/1Cb-jb_6ZkXYg3dbKe957VF8rB4bEl2fv/edit
