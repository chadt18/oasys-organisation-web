const sectors = {
  ecommerce: {
    tab: "tab-ecommerce",
    person: "Alex",
    role: "Ecommerce / Commercial Manager",
    summary: "Revenue is ahead of the comparable day, but margin and stock cover on a fast-selling SKU need attention.",
    metrics: [
      ["Net revenue", "£16,427", "+11.9% vs comparable day", "good"],
      ["Gross margin", "51.8%", "55.9% comparable · −4.0pp", "warn"],
      ["SKU-104 stock cover", "2.5 days", "373 available ÷ 151/day", "warn"],
      ["Evidence sources", "3/3", "Refreshed for this demonstration", "neutral"]
    ],
    exceptionTitle: "Margin and stock pressure on SKU-104",
    exceptionText: "Supplier unit cost increased while the product remains a strong seller and available cover is below four days.",
    decision: "Review promotion, accept the stockout risk, or investigate expedited replenishment and revised supplier terms.",
    sources: ["transactions.csv", "costs.csv", "inventory.csv", "commercial-rule.md"],
    observed: "Unit cost £18.40 → £21.80; 373 available units; 151 average units/day.",
    calculation: "373 ÷ 151 = 2.5 days stock cover.",
    source: "Cost export + inventory snapshot + commercial transactions.",
    boundary: "Promotion is active, but this evidence does not prove it caused the stock issue.",
    workspace: {
      email: {
        eyebrow: "Related email · 08:42",
        title: "Supplier update: SKU-104 replenishment",
        body: "Northstar Supply says the next replenishment may slip by three days. An expedited option is available at an additional £0.85 per unit.",
        meta: "Related to the stock-cover exception above.",
        action: "In a higher permission level, OASYS could prepare a supplier reply for review."
      },
      calendar: {
        eyebrow: "Calendar context",
        title: "Supplier review · Today 14:00",
        body: "Existing review meeting is already scheduled. Campaign review is due before 11:00.",
        meta: "The dashboard can surface relevant commitments beside the decision.",
        action: "No meeting is created from this demonstration."
      },
      files: {
        eyebrow: "Approved evidence",
        title: "Supporting files for this exception",
        body: "inventory.csv · costs.csv · transactions.csv · supplier-review.md",
        meta: "The evidence trail stays attached to the claim.",
        action: "Select a source in a production dashboard to inspect the supporting records."
      },
      ask: {
        eyebrow: "Ask OASYS",
        title: "Ask a question about the approved evidence",
        body: "Try: “Why is SKU-104 flagged?” or “How many days of stock are left?”",
        meta: "Read-only demonstration over the current evidence set.",
        answer: "SKU-104 is flagged because available stock is 373 units and average daily demand is 151 units, giving 2.5 days of cover. Supplier unit cost also increased from £18.40 to £21.80."
      }
    }
  },
  agency: {
    tab: "tab-agency",
    person: "Priya",
    role: "Managing Director / Operations Lead",
    summary: "Client delivery is broadly on plan, but one retainer is using hours faster than expected while important deliverables remain open.",
    metrics: [
      ["Retainer used", "68%", "At mid-month", "warn"],
      ["Planned run-rate", "52%", "Expected at this point", "neutral"],
      ["Open deliverables", "4", "2 client-critical", "warn"],
      ["Evidence sources", "3/3", "Refreshed for this demonstration", "neutral"]
    ],
    exceptionTitle: "Client A retainer is running ahead of plan",
    exceptionText: "Client A has used 68% of monthly retainer hours by mid-month against a 52% planned run-rate.",
    decision: "Raise a scope discussion, reallocate capacity, approve an overage route, or consciously absorb the variance.",
    sources: ["timesheets.csv", "statement-of-work.pdf", "project-status.csv"],
    observed: "68% of monthly retainer hours used; four deliverables remain open.",
    calculation: "Observed usage is 16 percentage points above the planned mid-month run-rate.",
    source: "Timesheet export + statement of work + project status.",
    boundary: "The evidence shows delivery pressure; it does not determine whether the variance is commercially unacceptable.",
    workspace: {
      email: {
        eyebrow: "Related email · 09:15",
        title: "Client A requests an additional deliverable",
        body: "The client has asked for an extra campaign asset this week. No approved scope change is recorded in the current statement of work.",
        meta: "This may explain some of the delivery pressure, but OASYS should not assume causation without confirmation.",
        action: "At Level 3, OASYS could prepare a scope-review reply for human approval."
      },
      calendar: {
        eyebrow: "Calendar context",
        title: "Client A review · Thursday 15:30",
        body: "A scheduled review provides a natural point to address the run-rate and remaining deliverables.",
        meta: "The manager decides whether the issue should wait for that meeting.",
        action: "No calendar event is created from this demonstration."
      },
      files: {
        eyebrow: "Approved evidence",
        title: "Supporting files for this exception",
        body: "timesheets.csv · statement-of-work.pdf · project-status.csv",
        meta: "The dashboard keeps contractual context beside utilisation data.",
        action: "A production dashboard could open the relevant source record directly."
      },
      ask: {
        eyebrow: "Ask OASYS",
        title: "Ask a question about the approved evidence",
        body: "Try: “Why is Client A flagged?” or “How far ahead of plan are we?”",
        meta: "Read-only demonstration over the current evidence set.",
        answer: "Client A has used 68% of its monthly retainer by mid-month compared with a 52% planned run-rate, so utilisation is 16 percentage points ahead of plan while four deliverables remain open."
      }
    }
  },
  operations: {
    tab: "tab-operations",
    person: "Jordan",
    role: "Operations / General Manager",
    summary: "Overall throughput is on plan, but priority orders are running 47 minutes late and the queue has grown from 24 to 38 items.",
    metrics: [
      ["Priority orders", "47 min late", "Service target exceeded", "warn"],
      ["Backlog", "38 waiting", "Up from 24 earlier", "warn"],
      ["Daily throughput", "On plan", "Overall operation", "good"],
      ["Evidence sources", "3/3", "Refreshed for this demonstration", "neutral"]
    ],
    exceptionTitle: "Priority orders are running late",
    exceptionText: "Priority orders are 47 minutes beyond the agreed service target and the queue has increased from 24 to 38 items.",
    decision: "Reallocate capacity, use an alternative route, or accept the service impact.",
    sources: ["dispatch-queue.csv", "service-thresholds.md", "capacity-note.md"],
    observed: "Priority orders are 47 minutes beyond target; 38 items are waiting, up from 24 earlier.",
    calculation: "Current queue time minus agreed service threshold = +47 minutes.",
    source: "Operations export + service threshold definition + current capacity note.",
    boundary: "OASYS can show the service risk; it does not autonomously reroute work.",
    workspace: {
      email: {
        eyebrow: "Related email · 07:52",
        title: "Carrier B reports a regional delay",
        body: "Carrier B expects a 60–90 minute delay on the regional route used by several priority orders.",
        meta: "This is relevant context, but the manager still decides whether to reroute.",
        action: "At a higher permission level, OASYS could prepare the reroute request for approval."
      },
      calendar: {
        eyebrow: "Calendar context",
        title: "Dispatch review · Today 10:30",
        body: "The current service exception can be reviewed at the existing operations checkpoint.",
        meta: "OASYS can surface the commitment beside the live exception.",
        action: "No calendar event is created from this demonstration."
      },
      files: {
        eyebrow: "Approved evidence",
        title: "Supporting files for this exception",
        body: "dispatch-queue.csv · service-thresholds.md · capacity-note.md",
        meta: "Threshold definitions remain visible beside the operational metric.",
        action: "A production dashboard could open the relevant queue records."
      },
      ask: {
        eyebrow: "Ask OASYS",
        title: "Ask a question about the approved evidence",
        body: "Try: “Why are priority orders flagged?” or “How much has the queue grown?”",
        meta: "Read-only demonstration over the current evidence set.",
        answer: "Priority orders are 47 minutes beyond the agreed service target. The queue has grown from 24 to 38 items, an increase of 14, while overall daily throughput remains on plan."
      }
    }
  }
};

let currentSector = "ecommerce";
let currentWorkspace = "email";

const metrics = document.getElementById("metrics");
const personName = document.getElementById("person-name");
const decisionHeading = document.getElementById("decision-heading");
const roleLabel = document.getElementById("role-label");
const summaryText = document.getElementById("summary-text");
const exceptionTitle = document.getElementById("exception-title");
const exceptionText = document.getElementById("exception-text");
const decisionText = document.getElementById("decision-text");
const sourceList = document.getElementById("source-list");
const observed = document.getElementById("evidence-observed");
const calculation = document.getElementById("evidence-calculation");
const evidenceSource = document.getElementById("evidence-source");
const boundary = document.getElementById("evidence-boundary");
const panel = document.getElementById("sector-panel");
const workspaceContent = document.getElementById("workspace-content");

function renderMetrics(items) {
  metrics.innerHTML = items.map(([label, value, note, state]) => `
    <div class="metric metric-${state}">
      <span class="metric-state" aria-hidden="true"></span>
      <span class="metric-label">${label}</span>
      <span class="metric-value">${value}</span>
      <span class="metric-note">${note}</span>
    </div>`).join("");
}

function renderSources(items) {
  sourceList.innerHTML = items.map(item => `<span class="source-tag">${item}</span>`).join("");
}

function renderWorkspace() {
  const item = sectors[currentSector].workspace[currentWorkspace];
  const ask = currentWorkspace === "ask";
  workspaceContent.innerHTML = `
    <p class="workspace-eyebrow">${item.eyebrow}</p>
    <h4>${item.title}</h4>
    <p>${item.body}</p>
    ${ask ? '<form id="ask-demo-form" class="ask-demo-form"><label for="ask-demo-input">Ask the demonstration</label><div><input id="ask-demo-input" type="text" placeholder="Why is this flagged?"><button type="submit">Ask</button></div></form><div id="ask-demo-answer" class="ask-demo-answer" hidden></div>' : ''}
    <div class="workspace-meta">${item.meta}</div>
    <div class="workspace-next">${ask ? "Answers stay grounded in the approved evidence shown in this demo." : item.action}</div>
  `;
  if (ask) {
    const form = document.getElementById("ask-demo-form");
    const answer = document.getElementById("ask-demo-answer");
    form.addEventListener("submit", event => {
      event.preventDefault();
      answer.textContent = item.answer;
      answer.hidden = false;
    });
  }
}

function setWorkspace(key, focusPanel = false) {
  currentWorkspace = key;
  document.querySelectorAll(".workspace-action").forEach(btn => {
    const active = btn.dataset.workspace === key;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  renderWorkspace();
  if (focusPanel) document.getElementById("workspace-panel").focus();
}

function setSector(key, focusPanel = false) {
  currentSector = key;
  const data = sectors[key];
  document.querySelectorAll(".sector-tab").forEach(btn => {
    const active = btn.dataset.sector === key;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  panel.setAttribute("aria-labelledby", data.tab);
  personName.textContent = data.person;
  decisionHeading.textContent = data.person + ", this needs your attention";
  roleLabel.textContent = data.role;
  summaryText.textContent = data.summary;
  renderMetrics(data.metrics);
  exceptionTitle.textContent = data.exceptionTitle;
  exceptionText.textContent = data.exceptionText;
  decisionText.textContent = data.decision;
  renderSources(data.sources);
  observed.textContent = data.observed;
  calculation.textContent = data.calculation;
  evidenceSource.textContent = data.source;
  boundary.textContent = data.boundary;
  setWorkspace(currentWorkspace);
  if (focusPanel) panel.focus();
}

document.querySelectorAll(".sector-tab").forEach(btn => {
  btn.addEventListener("click", () => setSector(btn.dataset.sector));
  btn.addEventListener("keydown", event => {
    if (!["ArrowLeft","ArrowRight","Home","End"].includes(event.key)) return;
    event.preventDefault();
    const tabs = [...document.querySelectorAll(".sector-tab")];
    const current = tabs.indexOf(btn);
    let next = current;
    if (event.key === "ArrowRight") next = (current + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    tabs[next].focus();
    setSector(tabs[next].dataset.sector);
  });
});

document.querySelectorAll(".workspace-action").forEach(btn => {
  btn.addEventListener("click", () => setWorkspace(btn.dataset.workspace));
});

const toggle = document.querySelector(".evidence-toggle");
const evidence = document.getElementById("evidence-detail");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.querySelector(".toggle-label").textContent = expanded ? "Show evidence" : "Hide evidence";
  toggle.classList.toggle("is-on", !expanded);
  evidence.hidden = expanded;
});

document.getElementById("demo-home").addEventListener("click", () => {
  setSector("ecommerce");
  setWorkspace("email");
  if (!evidence.hidden) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".toggle-label").textContent = "Show evidence";
    toggle.classList.remove("is-on");
    evidence.hidden = true;
  }
  document.getElementById("demo").scrollIntoView({behavior:"smooth", block:"start"});
});

setSector("ecommerce");
setWorkspace("email");
