const sectors = {
  ecommerce: {
    tab: "tab-ecommerce",
    role: "Ecommerce / Commercial Manager",
    summary: "Revenue is ahead of the comparable day, but margin and stock cover on a fast-selling SKU need attention.",
    metrics: [
      ["Net revenue", "£16,427", "+11.9% vs comparable day"],
      ["Gross margin", "51.8%", "55.9% comparable · −4.0pp"],
      ["SKU-104 stock cover", "2.5 days", "373 available ÷ 151/day"],
      ["Data confidence", "3/3 current", "Core structured sources refreshed"]
    ],
    exceptionTitle: "Margin + stock pressure on SKU-104",
    exceptionText: "Supplier unit cost increased while the product remains a strong seller and available cover is below four days.",
    decision: "Review promotion, accept the stockout risk, or investigate expedited replenishment / revised supplier terms.",
    sourceList: "transactions.csv · costs.csv · inventory.csv · approved commercial rule",
    observed: "Unit cost £18.40 → £21.80; 373 available units; 151 average units/day.",
    calculation: "373 ÷ 151 = 2.5 days stock cover.",
    source: "Cost export + inventory snapshot + commercial transactions.",
    boundary: "Promotion is active, but this evidence does not prove it caused the stock issue."
  },
  agency: {
    tab: "tab-agency",
    role: "Managing Director / Operations Lead",
    summary: "Client delivery is broadly on plan, but one retainer has exceeded its agreed hours run-rate while significant deliverables remain open.",
    metrics: [
      ["Retainer hours used", "68%", "Mid-month"],
      ["Planned run-rate", "52%", "At current point in month"],
      ["Open deliverables", "4", "2 client-critical"],
      ["Data confidence", "3/3 current", "Time, SOW and project status"]
    ],
    exceptionTitle: "Retainer run-rate is ahead of plan",
    exceptionText: "Client A has used 68% of monthly retainer hours by mid-month against a 52% planned run-rate.",
    decision: "Raise a scope discussion, reallocate capacity, approve an overage route, or consciously absorb the variance.",
    sourceList: "timesheets.csv · statement-of-work.pdf · project-status.csv",
    observed: "68% of monthly retainer hours used; four deliverables remain open.",
    calculation: "Observed usage is 16 percentage points above the planned mid-month run-rate.",
    source: "Timesheet export + statement of work + project status.",
    boundary: "The evidence shows delivery pressure; it does not determine whether the variance is commercially unacceptable."
  },
  operations: {
    tab: "tab-operations",
    role: "Operations / General Manager",
    summary: "Throughput remains within daily plan overall, but one priority workflow is outside its service threshold and backlog is increasing.",
    metrics: [
      ["Priority delay", "+47 min", "Beyond agreed threshold"],
      ["Backlog", "38 items", "Up across 2 checks"],
      ["Daily throughput", "On plan", "Overall operation"],
      ["Data confidence", "3/3 current", "Queue, threshold and capacity"]
    ],
    exceptionTitle: "Priority workflow outside service threshold",
    exceptionText: "The priority dispatch queue is 47 minutes outside the agreed threshold and the backlog has increased across two consecutive checks.",
    decision: "Reallocate capacity, use an alternative route, or accept the service impact.",
    sourceList: "dispatch-queue.csv · service-thresholds.md · capacity-note.md",
    observed: "Priority workflow is 47 minutes outside threshold; backlog has increased twice.",
    calculation: "Current queue time minus agreed service threshold = +47 minutes.",
    source: "Operations export + service threshold definition + current capacity note.",
    boundary: "OASYS can show the service risk; it does not autonomously reroute work."
  }
};

const metrics = document.getElementById("metrics");
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

function renderMetrics(items) {
  metrics.innerHTML = items.map(([label, value, note]) => `
    <div class="metric">
      <span class="metric-label">${label}</span>
      <span class="metric-value">${value}</span>
      <span class="metric-note">${note}</span>
    </div>`).join("");
}

function setSector(key, focusPanel = false) {
  const data = sectors[key];
  document.querySelectorAll(".sector-tab").forEach(btn => {
    const active = btn.dataset.sector === key;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  panel.setAttribute("aria-labelledby", data.tab);
  roleLabel.textContent = data.role;
  summaryText.textContent = data.summary;
  renderMetrics(data.metrics);
  exceptionTitle.textContent = data.exceptionTitle;
  exceptionText.textContent = data.exceptionText;
  decisionText.textContent = data.decision;
  sourceList.textContent = data.sourceList;
  observed.textContent = data.observed;
  calculation.textContent = data.calculation;
  evidenceSource.textContent = data.source;
  boundary.textContent = data.boundary;
  if (focusPanel) panel.focus();
}

document.querySelectorAll(".sector-tab").forEach(btn => {
  btn.addEventListener("click", () => setSector(btn.dataset.sector));
  btn.addEventListener("keydown", e => {
    if (!["ArrowLeft","ArrowRight","Home","End"].includes(e.key)) return;
    e.preventDefault();
    const tabs = [...document.querySelectorAll(".sector-tab")];
    const current = tabs.indexOf(btn);
    let next = current;
    if (e.key === "ArrowRight") next = (current + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    tabs[next].focus();
    setSector(tabs[next].dataset.sector);
  });
});

const toggle = document.querySelector(".evidence-toggle");
const evidence = document.getElementById("evidence-detail");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.textContent = expanded ? "Show evidence" : "Hide evidence";
  evidence.hidden = expanded;
});

setSector("ecommerce");
