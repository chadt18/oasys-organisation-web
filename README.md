# OASYS Organisation Landing Page v1

Static, no-backend landing page for the OASYS Organisation design-partner validation experiment.

## Locked purpose

One active ICP: ecommerce/commercial managers.
One active offer: Level 1 — Brief (£500 setup + £149/month).
One primary CTA: book a 20-minute prototype test.
Three cockpit examples: ecommerce is the active validation focus; Agency/Services and Operations are illustrative only.

## Files

- `index.html`
- `styles.css`
- `script.js`

No framework or build step is required.

## Local preview

Open `index.html` directly in a browser, or serve the directory with any static HTTP server.

## Deploy

Recommended repository: `oasys-organisation-web` (dedicated repository; do not place this in CalmStack production).

Any static host will work:
- GitHub Pages
- Vercel
- Netlify

### GitHub Pages route

1. Create a dedicated repository.
2. Put these files at repository root.
3. Commit to `main`.
4. In GitHub repository settings, enable Pages from the `main` branch root.
5. Smoke-test desktop, mobile, keyboard navigation and sector switching.

## CTA

The current CTA uses a `mailto:` route to the established OASYS business email so no backend is required. Replace it with an approved booking URL later if desired.

## Validation freeze

Once deployed, do not add new pages, sectors, integrations or product capabilities without external validation evidence.

## Public Sector concept route (separate from active commercial ICP)

This repository also includes three **concept/discovery** pages:

- `/public-sector/` — role-specific public-service operating concept.
- `/public-sector/how-it-works/` — fictional planning consultation workflow, accountability, privacy and optional learning.
- `/public-sector/enquire/` — email-composer link with pre-filled subject/body plus progressive-enhancement clipboard fallback. No backend form.

The public-sector pages **do not represent a deployed council SaaS product**, approved procurement status, working council integrations or an interactive demo. The root page's current ecommerce validation offer, price and primary CTA are unchanged. Only a footer discovery link is proposed.

### Launch acceptance / deployment checklist

1. Check all three pages and the root footer link on desktop and mobile; keyboard and screen-reader acceptance; contrast and reflow.
2. Verify the declared domain resolves correctly, GitHub Pages is configured and HTTPS is valid. These paths should not be advertised until an actual 200 response is observed after merge.
3. Confirm the existing business mailbox receives the subject prefix `[Public Sector] OASYS discovery enquiry` and replies can be sent. A dedicated alias such as `publicsector@` must be provisioned and verified in the mail administrator separately; do not publish an invented address.
4. The enquiry uses a user-controlled `mailto:` link with prefilled body and may not work in all browsers. Direct email address, copy-email button, and copy-address/subject/body template fallback remain visible or progressively enhanced. No automatic sending occurs; no submission confirmation can be claimed. A true submit-and-confirm enquiry form requires a verified recipient, a privacy notice, safe data-handling and spam measures, and an explicitly approved form delivery processor or endpoint.
5. Set up Gmail routing or an equivalent rule for the exact `[Public Sector]` subject prefix and an accountable monitored enquiry queue. A label without an applied filter is not automatic routing.
6. Review all page claims, disclaimers, privacy boundaries, accessibility, meta descriptions, canonicals, sitemap and `robots.txt`. No real citizen data or credentials in the first contact.
7. Merge only after review. Confirm live paths and that current ecommerce interaction and primary CTA still work. Submit sitemap through the domain's existing webmaster/Search Console route when available and check indexing; `index,follow` does not guarantee visibility.
8. Monitor genuine enquiries and conversion quality before investing in a production council demo, service integrations or third-party tooling.

The current PR should remain **review-gated** until technical, email-delivery and page acceptance checks are complete. A GitHub commit or PR is not a live publication.

### 23 October peer-review changes (draft PR)

- Canonical URLs and sitemap use `https://organisation.oasys-cloud.com` from this repo's `CNAME`, **not** the reviewer example `oasys.uk`.
- All four council workflows are explicitly labelled illustrative scenarios A–D; not active deployments.
- The enquiry page uses a prefilled email link and copy-to-clipboard controls in `public-sector/enquire/copy-enquiry.js`. Buttons are hidden without JavaScript, while the plain visible email address and direct link remain functional.
- Copying uses the browser clipboard only on a secure context; on failure a selectable text field is revealed. No information is transmitted to the website.
- CSS makes interactive buttons and page navigation links at least 44px tall, enforces `[hidden]`, and retains keyboard focus styling and mobile single-column layout.
- Draft-only code review verifies intended links and metadata; manual browser, accessibility, email-delivery, Gmail filter and live HTTP tests remain required.
- The connected Gmail account contains the `OASYS Public Sector Enquiries` label, but creating a label is not the same as establishing an automatic routing/filter rule or new mailbox.


### Revised public-sector UX proposal — 23 October 2026
- **Concise first screen:** evidence-linked role-specific view, human decision authority and approved learning are communicated in one glance. Council scenarios are illustrative, not implementations.
- **Studio B narration gated:** no browser-generated speech synthesis or fake playback control. A source-only script is at `public-sector/narration/overview-v1.md`, with the approved production voice `en-GB-Studio-B`. No MP3 currently exists. Show written transcript only until approved, generated and QA-verified asset (source hash, measured duration, accessible player) is registered.
- **Information without overload:** main examples, work/training detail and trust are behind native `details`/summary controls. On the How it works page, the fictional planning example starts expanded, with architecture and training detail expandable. FAQs remain native expandable sections.
- **Short enquiry:** the four-contact-field-plus-message form includes visible plain-language guidance and prepares an email from the user's typed details, with a copy fallback; the primary button says **Prepare enquiry email**, not Submit. Nothing is sent by the website and no success confirmation is shown. Work email, organisation and one challenge are required. `mailto:` still requires the visitor to press Send. Direct business address is in an optional side disclosure, not the main enquiry panel.
- **Launch blocker:** this prototype is NOT a reliable server-submitted form. Before council outreach, choose an owned form endpoint or verified form service, configure a monitored dedicated organisation alias and automatic routing, finalise accurate enquiry privacy terms, and test real submission/delivery/receipt. Do not silently publish a non-functioning enquiry route.
- **Social channels:** no social profile, platform or campaign is created by this change. Future exploration should reuse an existing verified OASYS presence and avoid implying active customers or deployed public-sector services.
- **Scope:** commercial Morning Brief remains untouched. The draft PR remains unmerged and must pass manual accessibility, mobile/audio and live domain QA before deployment.

### Master blueprint re-alignment / user visual review — 23 October 2026
- Hero focuses on **permissioned cross-system operations, evidence, exceptions and accountable decisions**; learning is optional supporting functionality, never the headline. OASYS must justify its value beyond incumbent configuration.
- Fictional planning queue replaces abstract status tiles: 50 imported fictional records, a missing-field exception, possible duplicate, traceable source and human review; original systems remain authoritative.
- How-it-works has a clear near-top overview/back route, planning case deep link and concrete source-to-decision explanation.
- Enquiry form places short descriptions of what to share beside the fields. Secondary email fallback remains available; no actual form processing/delivery claim.
- Colour treatment uses bright cool blue, deep navy and crisp teal, not beige or low-contrast warm neutrals.
- The approved production audio voice was verified against the CalmStack narration standard: Google Cloud TTS **en-GB-Studio-B**; browser TTS removed, with no recorded/audio asset in this PR.
- Revised reviewable, self-contained V3 HTML mockup saved separately for user sign-off. It approximates the site, and is not a deployment test.


### Final sector fit and differentiation check — 23 October 2026
This public-sector discovery offering remains a subordinate route of **OASYS Organisation**, not a separate product family/site or a change to the commercial ecommerce Morning Brief ICP.

**Human first** replaces 'Role first': OASYS works alongside skilled staff, keeps professional judgement and accountability with the authorised human, makes source evidence/uncertainty visible, and respects the public organisation's control of authoritative records and an exit route. The three principles on the page are Human first, Evidence in context, and Organisation in control. In-product approved learning is optional and not the hero.
The illustrative catalogue is five scenarios: council planning, waste, procurement, future high-risk revenues and benefits, plus fictional **NHS non-clinical estates-maintenance** case handover with no patient data or clinical decisions. Do not imply NHS connections, clinical use or procurement approvals.

**Competitive reality as at 23 Oct 2026 (supplier/product claims, not independent comparison trials):**
- Civica local-government/case management already offers configurable case flows, integrated data, automation, and shorter onboarding: https://www.civica.com/en-gb/sector-pages/local-government/ and https://www.civica.com/en-gb/product-pages/case-management-software/
- Granicus govService already offers forms, case-management, connected staff and workflow automation: https://granicus.com/uk/product/govservice/
- Microsoft Power Platform already offers process automation and process insights; benchmark it against an authority's existing licensing/configuration: https://learn.microsoft.com/en-us/power-automate/faqs-copilot-in-process-mining
- NHS Federated Data Platform already connects systems and supports care coordination/waiting lists/discharge, supplies trust-level data control, and funds deployment/training. This is a particularly strong NHS incumbent: https://www.england.nhs.uk/digitaltechnology/nhs-federated-data-platform/nhs-fdp-explained/ and https://www.england.nhs.uk/digitaltechnology/nhs-federated-data-platform/support-for-nhs-staff/

**Differentiation is a hypothesis**: combine an actual person's tasks, source provenance, rule/uncertainty explanation, bounded decisions, auditable handback, exit and optional approved in-flow guidance into the smallest necessary coordinating interface. Do not claim that any individual element is unique, or that cost/time savings or government compliance have been demonstrated. Compare configuration of the incumbent, a Power Platform option and OASYS total cost before recommending a pilot.

**NHS diligence gate**: start only with non-clinical administrative discovery. For any NHS connection, address controller/legal access, DPIA where required, NHS information governance, DSPT where applicable, interoperability, security and staff involvement. Determine whether DTAC, DCB0129/0160, medical device requirements or clinical-safety review apply to the specific proposed use (not every non-clinical tool triggers identical requirements). No patient-record connections or clinical triage in the static demonstration. Reference https://digital.nhs.uk/services/digital-technology-assessment-criteria-dtac and https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/review-of-digital-clinical-safety-standards-dcb0129-and-dcb0160

**Release status**: PR stays draft and unmerged until enquiry route, privacy/accessible QA, asset/narration gate if sound is to be advertised, and post-merge live URL checks are properly handled. The canonical family domain remains organisation.oasys-cloud.com.

### 24 October 2026 — parent Organisation routes, no separate gateway
The homepage remains the existing commercial/ecommerce Morning Brief. A small, visible **OASYS Organisation offerings** chooser at the top lets visitors select:
- **Business & commercial** — current validated Morning Brief offer, anchored to the existing homepage.
- **Public Sector** — separately marked early-stage concept at `/public-sector/`, with councils, non-clinical NHS and public organisations as discovery audiences.

Every sector page now has an explicit **Business & commercial** return route as well as the OASYS Organisation logo home link. The sector's three existing routes, privacy boundaries, pricing (none), human-first proposition and mailto-assisted enquiry are unchanged. No fourth sector homepage, product sub-brand, redirect or additional hosting has been created. The main site's commercial CTA, demo, page title, canonical URL and ecommerce offer are preserved.

The `utm_source=chatgpt.com` query string sometimes seen when opening a link through ChatGPT is a referral parameter, not a new page or an instruction to publish a ChatGPT page. Use the clean canonical URLs in outreach. Static checks on the feature branch include accessibility-target contrast and responsive route layout, but browser/deployment verification is still necessary after merging.


### Unified Organisation header, telephone and narrated overview sources — 24 October 2026

- All four public-facing pages now use the same **OASYS Organisation** header pattern: brand, clickable contact telephone **0115 975 6077** (`tel:+441159756077`), and a two-choice switch, **Business & commercial** / **Public Sector**. The selected offering is clearly marked. Each section retains only its own relevant contextual links and enquiry action.
- Business & commercial links: **How it works / Dashboard / Levels / Trust / Book a prototype test**. Public Sector links: **How it works / Examples / Trust / Discuss a workflow**. This is shared navigation, not a product merge or independent hosting change.
- The prior homepage-only offering selector was removed. `offering-nav.css` supplies mobile-responsive navigation and contrast/focus styling across all pages. CSS version query parameters avoid stale styles.
- Commercial ~two-minute explanatory script at `narration/commercial-overview-v1.md`; public-sector counterpart remains `public-sector/narration/overview-v1.md`. Both specify **Google Cloud en-GB-Studio-B** and need editorial lock, synthesis, verifiable MP3, listening QA, duration and transcript sync before playback controls go live.
- **No prerecorded audio has been generated or uploaded by this repo update.** Website shows accessible text and clear not-yet-available audio status, without a nonfunctional Play control.
- Existing commercial Morning Brief pricing, design-partner CTA and synthetic dashboard remain unchanged; the public-sector concept retains its discovery-only boundaries and email-assisted enquiry.
