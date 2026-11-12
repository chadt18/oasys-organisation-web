# OASYS Organisation — evidence, governance and dashboard boundaries (12 Nov 2026)

## Decision and scope
The `organisation.oasys-cloud.com` static site is the canonical **public OASYS Organisation** commercial/public-sector discovery and synthetic demonstration. It is not the CalmStack wellbeing platform, the founder console, a working invoice engine or a live council/NHS integration.

**Now:** let a stranger select an illustrative role, see an exception, open matching *fictional* source previews, read the calculation and human decision rights. Keep public sample records obviously invented. Current priority is demonstration clarity and independent user observation, not real integrations.

**Next (gated):** validated organisation-tenant cockpit, role-scoped evidence retrieval and real contracted onboarding after an agreed data-processing/security review. Do not portray the sample permission labels as real access control.

**Later:** export/permission lifecycle, invoiced organisational accounts in a secure owner-only admin surface, optional shared design-system components. Do not introduce an invoicing/payment product merely for visual consistency.

## Three distinct dashboards
1. **Founder dashboard (master *operational* view, not unrestricted data superuser):** product and service health; redacted/aggregated counts; customer contract status; organisation invoices (issued/due/paid/overdue), receivables and reconciliation; audit and approval queues; signed-off alerts and configurable pinned navigation. Access by privileged staff only, enforced by backend RBAC and logs. Do not expose participants' individual personal wellbeing histories.
2. **CalmStack personal dashboard:** user-owned wellbeing, check-ins, course access, personal learning. Personal information stays inside its purpose, identity boundary and retention rules.
3. **OASYS Organisation dashboard:** each tenant's approved operational data, record provenance, workflow rules, permission gates, exceptions, responsibilities and human decisions. Customer A never sees Customer B. Public Sector is a conceptual role adaptation, not an existing live tenant.

A founder tab may *navigate* to each separately authorised application or display approved service-level status. It must not import organisation private records or private CalmStack learner records by convenience. SSO/cross-app linking, if proposed, requires explicit identity, role, purpose, audit and revocation design.

## Source-to-decision contract for every real role
- `Claim`: exactly what is reported, its subject, unit, period and scope.
- `Source reference`: approved system, record ID, version, source date, last checked time and provenance.
- `Calculation`: formula, inputs, target/baseline selection and rounding; distinguish percentage changes from percentage points.
- `Confidence`: verified, stale, missing, contradicted or example-only; no silent repair of source contradictions.
- `Authority`: actor allowed to view, approve, write, correct, export and revoke; default deny when unspecified.
- `Decision`: named human owner, possible actions, consequences, evidence cited and audit record.
- `Portability`: format, data owner, exit dates, deletion/retention obligations and confirmation.

**Public-demo implementation:** clickable local HTML `details` records with invented excerpts and illustrative access labels. There are no behind-the-scenes Drive/email/API reads. The three roles are different fictional scenarios: Ecommerce SKU-104 daily trading, Agency Client A retainer, and Operations priority consignment/POD-104. Do not merge these with the separate KIT-01 August/September fixture in CalmStack's staging-only React implementation. The new editable sales/costs/units what-if remains an *independent* example and must not rewrite any evidence preview.

## Buyer trust and exit requirements
Before a customer pilot involving real records: document source ownership, data-processing agreement and processor/subprocessor inventory, approved scopes, least-privilege test accounts, access logging, retention period, source correction workflow, backups, export schema and a **rehearsed exit**. Exiting involves (1) freeze/revoke connections and user access, (2) export approved records and provenance for the customer, (3) transfer operational runbooks and decisions, (4) validate retrieval and continuation without OASYS, (5) delete or retain copies according to contract/legal basis, (6) issue auditable confirmation. Distinguish desired requirements from demonstrated capabilities. Contract duration, termination terms and any exit fees must come from the actual agreement, never invented on the landing page.

## Organisation invoice status in the founder view — future contract
Represent invoice account as a separate **organisational receivable**, not Stripe subscription revenue and not free tool usage. Fields: tenant ID, contract/order reference, invoice ID, period, gross/net/tax and currency, issue/due dates, payment terms, status, disputed/credited state, settlement date and source/reconciliation reference. Statuses: draft, issued, due, overdue, paid, disputed, void, credited. Require verified source and avoid automatically marking invoices paid based on an email. Start read-only/manual records with export; payment collection automation only after a justified, security-reviewed pilot. Separate the finance admin from wellbeing dashboards.

## Founder knowledge/pinning registry — proposal, not reported delivered
Define a curated registry of **links and knowledge objects**, each with owner, environment, canonical system/repo, purpose, audience, evidence/status, last review date, permitted users and expiry. An optional founder-only pinned-links surface can point to Organisation, CalmStack production, Founder Ops, incident queue, billing acceptance, release checks and decision records. A pin is a navigation shortcut, not a permission grant or data sync. Knowledge graph/structured retrieval is **not verified as shipped** by this document.

## Release gates
- Public demo: repository test + keyboard/desktop/mobile check + CI + GitHub Pages deployment + live HTTP/browser smoke. Avoid mistaking GitHub Pages success for a real responsive-browser test.
- Organisation real data: separate secure tenancy and RBAC, audit, contractual source authority, export and security review. **NO-GO** until passed.
- CalmStack: existing commerce/check-in release gates remain separately owned in `chadt18/CalmStackCodex`; no assumption that all payments or access work merely because public site pages return HTTP 200.
- No cross-repository production changes, secrets, Stripe LIVE mutations or auth bypass under this documentation change.

## Stop rules
Stop scope expansion when sample evidence is internally contradictory, a real person could mistake the record for their own data, a proposed permission is not enforced for actual records, calculations diverge, or a change risks existing tenant or payments security. External pilot observations should decide whether to build any deeper drilldown.
