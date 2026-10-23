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
- **Two-minute audio draft:** `public-sector/audio-overview.js` provides an opt-in browser-generated speech synthesis read-aloud of an on-page transcript. Supports Listen/Restart, Pause/Resume, Stop and transcript access. No autoplay, external TTS service, MP3 or tracking. **Not a professionally voiced audio asset.** Production sign-off must account for voice consistency and user testing; a narrated media file can be added later if approved.
- **Information without overload:** main examples, work/training detail and trust are behind native `details`/summary controls. On the How it works page, the fictional planning example starts expanded, with architecture and training detail expandable. FAQs remain native expandable sections.
- **Short enquiry:** the new four-contact-field-plus-message form prepares an email from the user's typed details, with a copy fallback; the primary button says **Prepare enquiry email**, not Submit. Nothing is sent by the website and no success confirmation is shown. Work email, organisation and one challenge are required. `mailto:` still requires the visitor to press Send. Direct business address is in an optional side disclosure, not the main enquiry panel.
- **Launch blocker:** this prototype is NOT a reliable server-submitted form. Before council outreach, choose an owned form endpoint or verified form service, configure a monitored dedicated organisation alias and automatic routing, finalise accurate enquiry privacy terms, and test real submission/delivery/receipt. Do not silently publish a non-functioning enquiry route.
- **Social channels:** no social profile, platform or campaign is created by this change. Future exploration should reuse an existing verified OASYS presence and avoid implying active customers or deployed public-sector services.
- **Scope:** commercial Morning Brief remains untouched. The draft PR remains unmerged and must pass manual accessibility, mobile/audio and live domain QA before deployment.
