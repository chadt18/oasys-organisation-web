# OASYS Knowledge Shelf — navigation review and secure index plan
Date: 10 November 2026 | Status: proposed, review-only.

## What this PR changes
- Moves topic navigation across the top.
- Reduces exposed filtering choices to Everything / Reference documents / Needs checking.
- Adds per-source expandable descriptions and original links.
- Adds five source-linked website entry points (four from the OASYS Organisation sitemap, plus CalmStack home). Live URL availability and comprehensive article/course inventory are not verified.
- Explicitly states search is **curated only**, not full-Drive content search.
- Keeps the original status labels visible inside each topic; no source has been promoted from proposed to deployed.

## Full Drive search: security-first design, not a public-site feature
Do **not** add private Drive contents, policy texts, account tokens or confidential document titles to this public repository or a public-facing client-side JSON bundle.

Proposed next build belongs behind authenticated, founder-only access within a **private** administration application:
1. Inventory OASYS, CalmStack, Organisation, Tools and Games folders from Drive, with owner-approved inclusions and exclusions. Include legacy Word/PDF documents only where reading is authorised.
2. Store a private catalogue: Google file ID, source title, type, business area, short approved description, modified time, canonical / duplicate / historical / unverified status, responsible owner, approval state, tags and URL.
3. Index content in a permission-respecting backend. Query-time authorisation must be checked; indexing alone never grants access.
4. Search both titles and approved document text, then return short excerpts with precise source pointers. Never infer the published refund policy from a filename such as FINAL.
5. Use an explicit source hierarchy: published/live customer terms and legally approved agreements outrank historical drafts, while the status must be verified with the current checkout experience.
6. Document-level preview: one-sentence meaning, purpose, audience, version, approval, caveats, original link. Explain source conflicts rather than conceal them.
7. Make an index for public website pages, courses and Learn articles, sourced from publication manifests, live routes and sitemap checks; record last verified and broken links.
8. Update on Drive change notifications or scheduled bounded scans, with logs, retry and change alerts. Never silently publish or promote unapproved text.

## Refund policy test scenario
Drive search revealed multiple similarly named legal documents, including:
- OASYS Return & Refund Policy UK Gold Standard FINAL (effective 28 Sep 2025), containing percentage-of-content tests and a placeholder support email.
- OASYS Schedule 1 Cancellation, Refund and Digital Content Terms, directing publication with the main Terms and describing express consent rather than a percentage-used rule.
- Legal Pack V2 cancellation schedule, broadly reflecting the second approach.

**No claim made about which is live.** The system must flag this conflict and demand approval/published-checkout verification. Do not quote one as authoritative to customers merely on the basis of a filename.

## NTU research and evaluation methods
The accessible 'Research Methods notes' source describes research questions, independent/dependent measures, sampling bias, confounders, ethics, clear reporting, method/results and limitations.

Apply these to a small Knowledge Shelf evaluation:
- Research question: Can a new reader locate the correct approved source and explain what it means in no more than three navigation steps?
- Compare against the previous prototype or existing Drive-only search; alternate task order where practical.
- Tasks: refund policy, organisation offer, release log, and one course.
- Record: time to accurate source, wrong-version selections, clicks, confidence versus correctness, completeness of explanation and keyboard accessibility.
- Do not treat subjective confidence or quick clicks alone as evidence of accuracy.
- Recruit a small set of diverse readers for an exploratory usability test; do not generalise results beyond tested participants.
- Include a conflict/missing-document test and record *unable to verify* as an acceptable honest outcome.

The 'Psychology at Work — Research Questions and Design' presentation file was retrieved but the accessible copy was truncated and could not be reliably parsed. Do not attribute conclusions to those slides until a complete copy is readable.

## Five operational safeguards
- Drift: dated source metadata, refresh triggers, discrepancies and an approval owner.
- AI reliability: independently verified calculations and explicit missing/contradictory evidence.
- Access creep: per-source least privilege, revocation, access log, private backend.
- Founder governance: others may research, propose and conduct routine work within agreed authority; founder retains final sign-off on business changes and releases, with documented fallback for founder unavailability rather than accidental paralysis.
- Scope creep: Stage 1 navigation; Stage 2 secure source register; Stage 3 evidence search; Stage 4 optional AI answers. No plugin marketplace, customer records, or broad live integrations in this PR.

## Acceptance checklist
- [ ] Search, two-mode filter and horizontally wrapped topics on mobile/desktop.
- [ ] Source previews can be opened by keyboard and screen reader.
- [ ] Link destinations inspected against Drive permissions and public URLs.
- [ ] All references clearly marked as checked or not checked.
- [ ] Ask a novice to find a source, understand it and open the original in <=3 clicks.
- [ ] Explicitly confirm the public repository contains no new confidential source payload.
- [ ] Founder approval before merging any business-facing application change.
