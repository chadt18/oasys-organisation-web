const sectors = {
  ecommerce: {
    tab: "tab-ecommerce",
    person: "Morgan",
    role: "Ecommerce / Commercial Manager",
    decisionOwner: "Morgan · Commercial Manager",
    summary: "Revenue is ahead of the comparable day, but margin and stock cover on a fast-selling SKU need attention.",
    plan: {title:"Today's revenue plan", plan:"£15,900", actual:"£16,427", variance:"+3.3%", state:"good", note:"Revenue is ahead of plan, but margin and stock-cover exceptions still require attention."},
    metrics: [
      ["Net revenue", "£16,427", "+11.9% vs comparable day", "good"],
      ["Gross margin", "51.8%", "55.9% comparable · −4.1pp", "warn"],
      ["SKU-104 stock cover", "2.5 days", "373 available ÷ 151/day", "warn"],
      ["Evidence sources", "3/3", "Refreshed for this demonstration", "neutral"]
    ],
    exceptionTitle: "Margin and stock pressure on SKU-104",
    exceptionText: "Supplier unit cost increased while the product remains a strong seller and available cover is below four days.",
    whyNow: "Stock cover is below the defined four-day threshold while unit cost has changed in the current trading period.",
    authority: "The commercial manager owns the promotion / replenishment decision. OASYS does not alter campaign settings or approve supplier spend.",
    decision: "Review promotion, accept the stockout risk, or investigate expedited replenishment and revised supplier terms.",
    sources: ["Shared Drive / Sales / Daily sales", "Shared Drive / Finance / Product costs", "Shared Drive / Stock / Inventory snapshot", "Commercial rule / stock-cover threshold"],
    observed: "Unit cost £18.40 → £21.80; 373 available units; 151 average units/day.",
    calculation: "373 ÷ 151 = 2.5 days stock cover.",
    source: "Daily sales + product-cost file + inventory snapshot.",
    boundary: "Promotion is active, but this evidence does not prove it caused the stock issue.",
    shortcuts: {emailLabel:"6 unread · 2 need attention", emailCount:"6", calendarLabel:"Supplier review · Today 14:00", filesLabel:"4 related items"},
    workspace: {
      email: {
        eyebrow: "Inbox · 6 unread",
        title: "Messages related to today's operating picture",
        meta: "OASYS can surface relevant messages beside the exception without turning the inbox into the dashboard.",
        next: "At Level 3, OASYS could prepare a reply for human review.",
        emails: [
          ["Northstar Supply","SKU-104 replenishment update","08:42","Next replenishment may slip by three days. Expedited supply is available at +£0.85 per unit.","attention"],
          ["Marketing","SKU-104 campaign pacing","08:10","Paid campaign remains active. Spend is within today's planned budget.","normal"],
          ["Finance","Updated product cost file","Yesterday","Latest supplier cost file has been uploaded to the Shared Drive.","normal"]
        ]
      },
      calendar: {
        eyebrow: "Next relevant calendar item",
        title: "Supplier review · Today at 14:00",
        body: "30 minutes · Procurement + Ecommerce · Teams",
        items: [
          ["10:45","Campaign review","Review SKU-104 promotion before midday"],
          ["14:00","Supplier review","Discuss replenishment delay and expedited option"],
          ["16:30","Trading check-in","End-of-day commercial review"]
        ],
        meta: "OASYS surfaces the next relevant commitment instead of making the manager search the calendar.",
        next: "The manager decides whether the current exception can wait until 14:00 or needs action sooner."
      },
      files: {
        eyebrow: "Shared Drive · Related evidence",
        title: "Files and folders linked to this decision",
        items: [
          ["folder","Commercial / Daily Trading","Daily sales and campaign performance"],
          ["sheet","Product Costs — October","Latest supplier unit costs"],
          ["sheet","Inventory Snapshot — 13 Oct","Available stock, reservations and demand"],
          ["doc","Supplier Review Notes","Current replenishment discussion and prior decisions"]
        ],
        meta: "Natural file names stay visible; provenance can still retain the underlying source ID in the audit trail.",
        next: "A production dashboard could open the relevant source directly."
      },
      ask: {
        answer: "Today's revenue is £16,427 against a £15,900 plan, so revenue is 3.3% ahead. SKU-104 is still flagged because available stock is 373 units and average daily demand is 151 units, giving 2.5 days of cover, while supplier unit cost increased from £18.40 to £21.80.",
        suggestions:["Why is SKU-104 flagged?","How many days of stock are left?","Show the related supplier email"]
      }
    }
  },
  agency: {
    tab: "tab-agency",
    person: "Priya",
    role: "Managing Director / Operations Lead",
    decisionOwner: "Priya · Managing Director / Operations Lead",
    summary: "Client delivery is broadly on plan, but one retainer is using hours faster than expected while important deliverables remain open.",
    plan: {title:"Retainer hours plan", plan:"52%", actual:"68%", variance:"+16pp", state:"warn", note:"Hours are running ahead of the planned mid-month position while four deliverables remain open."},
    metrics: [
      ["Retainer used", "68%", "At mid-month", "warn"],
      ["Planned run-rate", "52%", "Expected at this point", "neutral"],
      ["Open deliverables", "4", "2 client-critical", "warn"],
      ["Evidence sources", "3/3", "Refreshed for this demonstration", "neutral"]
    ],
    exceptionTitle: "Client A retainer is running ahead of plan",
    exceptionText: "Client A has used 68% of monthly retainer hours by mid-month against a 52% planned run-rate.",
    whyNow: "Retainer usage is materially ahead of the agreed mid-month run-rate while client-critical deliverables remain open.",
    authority: "The account / operations lead owns any scope, capacity or commercial decision. OASYS does not change scope or commit the team to an overage.",
    decision: "Raise a scope discussion, reallocate capacity, approve an overage route, or consciously absorb the variance.",
    sources: ["Shared Drive / Clients / Client A / Timesheets", "Shared Drive / Clients / Client A / Statement of Work", "Projects / Client A / Delivery status"],
    observed: "68% of monthly retainer hours used; four deliverables remain open.",
    calculation: "Observed usage is 16 percentage points above the planned mid-month run-rate.",
    source: "Timesheet export + statement of work + project status.",
    boundary: "The evidence shows delivery pressure; it does not determine whether the variance is commercially unacceptable.",
    shortcuts: {emailLabel:"4 unread · 1 needs attention", emailCount:"4", calendarLabel:"Client A review · Thu 15:30", filesLabel:"3 related items"},
    workspace: {
      email: {
        eyebrow: "Inbox · 4 unread",
        title: "Messages related to Client A",
        meta: "Relevant client communication sits beside utilisation and scope evidence.",
        next: "At Level 3, OASYS could prepare a scope-review reply for human approval.",
        emails: [
          ["Client A","Additional campaign asset","09:15","Could you add one more campaign asset this week? We would like it included in Friday's delivery.","attention"],
          ["Account Director","Client A weekly note","08:50","Client is happy with delivery quality. Scope discussion may be needed if requests continue.","normal"],
          ["Delivery Lead","Capacity update","Yesterday","Two client-critical deliverables remain scheduled for Thursday.","normal"]
        ]
      },
      calendar: {
        eyebrow: "Next relevant calendar item",
        title: "Client A review · Thursday at 15:30",
        body: "45 minutes · Client A + Account Director · Teams",
        items: [
          ["11:00","Delivery stand-up","Review today's open work"],
          ["Thu 15:30","Client A review","Discuss run-rate, scope and remaining deliverables"],
          ["Fri 09:30","Resource planning","Review next week's team capacity"]
        ],
        meta: "The dashboard links the current exception to the next decision point in the calendar.",
        next: "The manager decides whether the scope issue can wait until Thursday."
      },
      files: {
        eyebrow: "Shared Drive · Related evidence",
        title: "Files and folders linked to Client A",
        items: [
          ["folder","Clients / Client A","Current account workspace"],
          ["sheet","Retainer Hours — October","Time used against monthly allocation"],
          ["doc","Statement of Work — 2026","Agreed scope and deliverables"]
        ],
        meta: "Commercial context stays beside delivery data.",
        next: "A production dashboard could open the source record directly."
      },
      ask: {
        answer: "Client A has used 68% of its monthly retainer by mid-month compared with a 52% planned run-rate, so utilisation is 16 percentage points ahead of plan while four deliverables remain open.",
        suggestions:["Why is Client A flagged?","How far ahead of plan are we?","Show the latest client email"]
      }
    }
  },
  operations: {
    tab: "tab-operations",
    person: "Jordan",
    role: "Haulage / Distribution Manager",
    decisionOwner: "Jordan · Haulage / Distribution Manager",
    summary: "Daily dispatch throughput is on plan, but a fictional priority consignment is 47 minutes outside the service threshold and a carrier status conflicts with the delivery record.",
    plan: {title:"Priority delay threshold", plan:"30 min", actual:"77 min", variance:"+47 min", state:"warn", note:"A sample carrier status reports a 77-minute delay against the agreed 30-minute review threshold."},
    metrics: [
      ["Priority load", "47 min over", "Review threshold exceeded", "warn"],
      ["Pending delivery proof", "1 query", "Carrier and POD records differ", "warn"],
      ["Dispatch volume", "On plan", "Overall operation", "good"],
      ["Evidence sources", "3/3", "Refreshed for this demonstration", "neutral"]
    ],
    exceptionTitle: "Priority consignment and delivery record need checking",
    exceptionText: "A fictional carrier update shows a 77-minute delay against a 30-minute review threshold. A separate delivery-proof record has not yet been matched.",
    whyNow: "The agreed delay review threshold is exceeded and the carrier status differs from the dispatch evidence.",
    authority: "The authorised transport manager owns rerouting, customer communications and proof-of-delivery verification. OASYS sends nothing and changes no route.",
    decision: "Check the carrier update and original delivery record; then decide whether to contact the carrier, advise the customer or approve an alternative plan.",
    sources: ["Dispatch / Priority consignment register", "Carrier / Status update", "Delivery / Proof-of-delivery record", "Operations / Service threshold rules"],
    observed: "Invented carrier delay: 77 minutes; agreed example threshold: 30 minutes; one unmatched proof-of-delivery reference.",
    calculation: "77-minute reported delay − 30-minute review threshold = +47 minutes.",
    source: "Fictional dispatch export + carrier message + delivery-proof list + review rule.",
    boundary: "A carrier update is not proof of a failed delivery. The human checks source records and decides; no live dispatch or tracking systems are connected.",
    shortcuts: {emailLabel:"3 unread · 1 needs attention", emailCount:"3", calendarLabel:"Dispatch review · Today 10:30", filesLabel:"3 related items"},
    workspace: {
      email: {
        eyebrow: "Inbox · 3 unread",
        title: "Messages related to today's dispatch exception",
        meta: "The email is context for the exception, not proof that it caused the whole queue delay.",
        next: "At a higher permission level, OASYS could prepare the reroute request for approval.",
        emails: [
          ["Carrier B","Regional route delay","07:52","We expect a 60–90 minute delay on the regional route affecting priority consignments.","attention"],
          ["Dispatch Coordinator","Delivery reference check","07:35","POD-104 is not present in the sample delivery-proof export yet. Carrier confirmation is pending.","normal"],
          ["Customer Operations","Priority delivery watchlist","07:20","One fictional priority consignment is now above the agreed delay-review threshold.","normal"]
        ]
      },
      calendar: {
        eyebrow: "Next relevant calendar item",
        title: "Dispatch review · Today at 10:30",
        body: "20 minutes · Operations + Warehouse · Floor meeting",
        items: [
          ["09:45","Dispatch handover","Review open consignment exceptions"],
          ["10:30","Dispatch review","Review carrier evidence and decide next authorised step"],
          ["15:00","Carrier performance review","Weekly service review"]
        ],
        meta: "The next relevant action is visible without opening the calendar.",
        next: "Jordan can act now or use the 10:30 review as the decision point."
      },
      files: {
        eyebrow: "Shared Drive · Related evidence",
        title: "Files and folders linked to dispatch",
        items: [
          ["folder","Transport / Daily Dispatch","Current consignment list and handover files"],
          ["sheet","Priority Consignments — Sample","Fictional delivery status and exception flags"],
          ["doc","Carrier Service Standards — Sample","Example escalation thresholds and approvals"]
        ],
        meta: "The manager sees recognisable business files, while the audit layer retains precise source references.",
        next: "A production dashboard could open the relevant operational record."
      },
      ask: {
        answer: "The fictional carrier update reports a 77-minute delay against a 30-minute review threshold, which is 47 minutes over. A sample proof-of-delivery record also needs verifying. Neither flag proves a delivery failure; the transport manager checks the source documents and decides.",
        suggestions:["Why is the consignment flagged?","How far above threshold is the delay?","Show Carrier B's latest email"]
      }
    }
  }
};

let currentSector = "ecommerce";
let currentWorkspace = "email";

const metrics = document.getElementById("metrics");
const planTitle = document.getElementById("plan-title");
const planValue = document.getElementById("plan-value");
const actualValue = document.getElementById("actual-value");
const varianceValue = document.getElementById("variance-value");
const planNote = document.getElementById("plan-note");
const varianceChip = document.querySelector(".variance-chip");
const personName = document.getElementById("person-name");
const decisionHeading = document.getElementById("decision-heading");
const roleLabel = document.getElementById("role-label");
const summaryText = document.getElementById("summary-text");
const exceptionTitle = document.getElementById("exception-title");
const exceptionText = document.getElementById("exception-text");
const whyNow = document.getElementById("why-now");
const decisionText = document.getElementById("decision-text");
const decisionOwner = document.getElementById("decision-owner");
const sourceList = document.getElementById("source-list");
const observed = document.getElementById("evidence-observed");
const calculation = document.getElementById("evidence-calculation");
const evidenceSource = document.getElementById("evidence-source");
const boundary = document.getElementById("evidence-boundary");
const authority = document.getElementById("evidence-authority");
const panel = document.getElementById("sector-panel");
const workspaceContent = document.getElementById("workspace-content");
const emailActionLabel = document.getElementById("email-action-label");
const emailCountBadge = document.getElementById("email-count-badge");
const calendarActionLabel = document.getElementById("calendar-action-label");
const filesActionLabel = document.getElementById("files-action-label");

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function renderMetrics(items) {
  metrics.innerHTML = items.map(([label, value, note, state]) => `
    <div class="metric metric-${state}">
      <span class="metric-state" aria-hidden="true"></span>
      <span class="metric-label">${escapeHtml(label)}</span>
      <span class="metric-value">${escapeHtml(value)}</span>
      <span class="metric-note">${escapeHtml(note)}</span>
    </div>`).join("");
}
function renderSources(items) {
  sourceList.innerHTML = items.map(item => `<span class="source-tag">${escapeHtml(item)}</span>`).join("");
}
function renderEmails(item){
  return `<p class="workspace-eyebrow">${escapeHtml(item.eyebrow)}</p>
    <h4>${escapeHtml(item.title)}</h4>
    <div class="email-list">
      ${item.emails.map(([sender,subject,time,snippet,state]) => `
        <article class="email-row ${state === "attention" ? "needs-attention" : ""}">
          <div class="email-row-top"><strong>${escapeHtml(sender)}</strong><time>${escapeHtml(time)}</time></div>
          <b>${escapeHtml(subject)}</b>
          <p>${escapeHtml(snippet)}</p>
        </article>`).join("")}
    </div>
    <div class="workspace-meta">${escapeHtml(item.meta)}</div>
    <div class="workspace-next">${escapeHtml(item.next)}</div>`;
}
function renderCalendar(item){
  return `<p class="workspace-eyebrow">${escapeHtml(item.eyebrow)}</p>
    <h4>${escapeHtml(item.title)}</h4>
    <p>${escapeHtml(item.body)}</p>
    <div class="calendar-list">
      ${item.items.map(([time,title,note]) => `
        <div class="calendar-row"><time>${escapeHtml(time)}</time><span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(note)}</small></span></div>`).join("")}
    </div>
    <div class="workspace-meta">${escapeHtml(item.meta)}</div>
    <div class="workspace-next">${escapeHtml(item.next)}</div>`;
}
function renderFiles(item){
  const icon = type => type === "folder" ? "▰" : type === "sheet" ? "▦" : "▤";
  return `<p class="workspace-eyebrow">${escapeHtml(item.eyebrow)}</p>
    <h4>${escapeHtml(item.title)}</h4>
    <div class="file-list">
      ${item.items.map(([type,name,note]) => `
        <div class="file-row"><span class="file-icon">${icon(type)}</span><span><strong>${escapeHtml(name)}</strong><small>${escapeHtml(note)}</small></span></div>`).join("")}
    </div>
    <div class="workspace-meta">${escapeHtml(item.meta)}</div>
    <div class="workspace-next">${escapeHtml(item.next)}</div>`;
}
function getDemoAnswer(question, item){
  const text=String(question||"").trim().toLowerCase().replace(/[?!.]+$/,"").replace(/\s+/g," ");
  const recognised=item.suggestions.some(s=>s.toLowerCase().replace(/[?!.]+$/,"")===text);
  const general=["what needs my attention","why is this flagged","what changed","show evidence","why is stock flagged","why is the stock flagged"].includes(text);
  if(recognised||general) return item.answer;
  return "I cannot verify that from this fictional demonstration. Try one of the sample questions below; no live organisation files or AI search are connected.";
}
function renderAsk(query="", answerNow=false){
  const item = sectors[currentSector].workspace.ask;
  workspaceContent.innerHTML = `
    <p class="workspace-eyebrow">Sample question · prewritten response</p>
    <h4>Explore how an evidence-backed answer could look.</h4>
    <form id="ask-demo-form" class="ask-demo-form">
      <label for="ask-demo-input">Ask about the approved evidence</label>
      <div><input id="ask-demo-input" type="text" value="${escapeHtml(query)}" placeholder="Why is this flagged?"><button type="submit">Ask</button></div>
    </form>
    <div class="ask-suggestions">${item.suggestions.map(s => `<button type="button" data-question="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div>
    <div id="ask-demo-answer" class="ask-demo-answer" ${answerNow ? "" : "hidden"}>${answerNow ? escapeHtml(getDemoAnswer(query,item)) : ""}</div>
    <div class="workspace-next">This is an illustrative, prewritten response for the sample role, not a live search or an answer about your systems.</div>`;
  const form=document.getElementById("ask-demo-form");
  const input=document.getElementById("ask-demo-input");
  const answer=document.getElementById("ask-demo-answer");
  form.addEventListener("submit", e => {
    e.preventDefault();
    answer.textContent=getDemoAnswer(input.value,item);
    answer.hidden=false;
  });
  document.querySelectorAll(".ask-suggestions button").forEach(btn => btn.addEventListener("click", () => {
    input.value=btn.dataset.question;
    answer.textContent=getDemoAnswer(btn.dataset.question,item);
    answer.hidden=false;
  }));
}
function renderWorkspace(){
  const item=sectors[currentSector].workspace[currentWorkspace];
  if(currentWorkspace==="email") workspaceContent.innerHTML=renderEmails(item);
  if(currentWorkspace==="calendar") workspaceContent.innerHTML=renderCalendar(item);
  if(currentWorkspace==="files") workspaceContent.innerHTML=renderFiles(item);
}
function setWorkspace(key, focusPanel=false){
  if(!["email","calendar","files"].includes(key)) return;
  currentWorkspace=key;
  document.querySelectorAll(".workspace-action").forEach(btn => {
    const active=btn.dataset.workspace===key;
    btn.classList.toggle("is-active",active);
    btn.setAttribute("aria-selected",String(active));
    btn.tabIndex=active?0:-1;
  });
  document.getElementById("workspace-panel").setAttribute("aria-label",key==="email"?"Fictional inbox":key==="calendar"?"Fictional calendar":"Fictional files");
  renderWorkspace();
  if(focusPanel) document.getElementById("workspace-panel").focus();
}
function updateShortcuts(data){
  emailActionLabel.textContent=data.shortcuts.emailLabel;
  emailCountBadge.textContent=data.shortcuts.emailCount;
  calendarActionLabel.textContent=data.shortcuts.calendarLabel;
  filesActionLabel.textContent=data.shortcuts.filesLabel;
}
function setSector(key, focusPanel=false){
  currentSector=key;
  const data=sectors[key];
  document.querySelectorAll(".sector-tab").forEach(btn => {
    const active=btn.dataset.sector===key;
    btn.classList.toggle("is-active",active);
    btn.setAttribute("aria-selected",String(active));
    btn.tabIndex=active?0:-1;
  });
  panel.setAttribute("aria-labelledby",data.tab);
  personName.textContent=data.person;
  decisionHeading.textContent="Decision for "+data.person;
  roleLabel.textContent=data.role;
  summaryText.textContent=data.summary;
  planTitle.textContent=data.plan.title;
  planValue.textContent=data.plan.plan;
  actualValue.textContent=data.plan.actual;
  varianceValue.textContent=data.plan.variance;
  planNote.textContent=data.plan.note;
  varianceChip.classList.toggle("variance-good", data.plan.state==="good");
  varianceChip.classList.toggle("variance-warn", data.plan.state==="warn");
  renderMetrics(data.metrics);
  exceptionTitle.textContent=data.exceptionTitle;
  exceptionText.textContent=data.exceptionText;
  whyNow.innerHTML="<strong>Why now:</strong> "+escapeHtml(data.whyNow);
  decisionText.textContent=data.decision;
  decisionOwner.textContent=data.decisionOwner;
  renderSources(data.sources);
  observed.textContent=data.observed;
  calculation.textContent=data.calculation;
  evidenceSource.textContent=data.source;
  boundary.textContent=data.boundary;
  authority.textContent=data.authority;
  updateShortcuts(data);
  setWorkspace(currentWorkspace==="ask" ? "email" : currentWorkspace);
  if(focusPanel) panel.focus();
}
document.querySelectorAll(".sector-tab").forEach(btn => {
  btn.addEventListener("click",()=>setSector(btn.dataset.sector));
  btn.addEventListener("keydown",e=>{
    if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key)) return;
    e.preventDefault();
    const tabs=[...document.querySelectorAll(".sector-tab")];
    const current=tabs.indexOf(btn);
    let next=current;
    if(e.key==="ArrowRight") next=(current+1)%tabs.length;
    if(e.key==="ArrowLeft") next=(current-1+tabs.length)%tabs.length;
    if(e.key==="Home") next=0;
    if(e.key==="End") next=tabs.length-1;
    tabs[next].focus();
    setSector(tabs[next].dataset.sector);
  });
});
document.querySelectorAll(".workspace-action").forEach(btn => {
  btn.addEventListener("click",()=>setWorkspace(btn.dataset.workspace));
  btn.addEventListener("keydown", e=>{
    if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)) return;
    e.preventDefault();
    const tabs=[...document.querySelectorAll(".workspace-action")];
    const at=tabs.indexOf(btn);
    const next=e.key==="Home"?0:e.key==="End"?tabs.length-1:
      (at+(e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:1)+tabs.length)%tabs.length;
    setWorkspace(tabs[next].dataset.workspace);
    tabs[next].focus();
  });
});

const toggle=document.querySelector(".evidence-toggle");
const evidence=document.getElementById("evidence-detail");
toggle.addEventListener("click",()=>{
  const expanded=toggle.getAttribute("aria-expanded")==="true";
  toggle.setAttribute("aria-expanded",String(!expanded));
  toggle.querySelector(".toggle-label").textContent=expanded?"Show evidence":"Hide evidence";
  toggle.classList.toggle("is-on",!expanded);
  evidence.hidden=expanded;
});

document.getElementById("header-ask-form").addEventListener("submit",e=>{
  e.preventDefault();
  const input=document.getElementById("header-ask-input");
  const query=input.value.trim() || "What needs my attention?";
  currentWorkspace="ask";
  document.querySelectorAll(".workspace-action").forEach(btn=>{
    btn.classList.remove("is-active");
    btn.setAttribute("aria-selected","false");
  });
  renderAsk(query,true);
  document.querySelector(".workspace-zone").closest("details")?.setAttribute("open", "");
  document.getElementById("workspace-panel").scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});
  document.getElementById("ask-demo-input")?.focus({preventScroll:true});
});

document.getElementById("demo-home").addEventListener("click",()=>{
  currentWorkspace="email";
  setSector("ecommerce");
  setWorkspace("email");
  document.getElementById("header-ask-input").value="";
  if(!evidence.hidden){
    toggle.setAttribute("aria-expanded","false");
    toggle.querySelector(".toggle-label").textContent="Show evidence";
    toggle.classList.remove("is-on");
    evidence.hidden=true;
  }
  document.getElementById("demo").scrollIntoView({behavior:"smooth",block:"start"});
});

setSector("ecommerce");
setWorkspace("email");

/* Responsive view: keep the mobile overview short and desktop details visible. */
const mobileDashboard = window.matchMedia("(max-width: 700px)");
const dashboardGroups = [...document.querySelectorAll(".dashboard-group")];
function setDashboardLayout(e) {
  dashboardGroups.forEach(group => {
    group.open = e.matches ? group.dataset.mobileOpen === "true" : true;
  });
}
setDashboardLayout(mobileDashboard);
if (typeof mobileDashboard.addEventListener === "function") {
  mobileDashboard.addEventListener("change", setDashboardLayout);
} else if (typeof mobileDashboard.addListener === "function") {
  mobileDashboard.addListener(setDashboardLayout);
}


/* Independent, local-only synthetic financial explorer.
   Never modifies sector fixtures, displayed evidence or other workspaces. */
function calculateFictionalCommercialScenario(sales, costs, units) {
  if (![sales, costs, units].every(Number.isFinite) ||
      sales <= 0 || sales > 1e9 || costs < 0 || costs > 1e9 ||
      !Number.isSafeInteger(units) || units <= 0 || units > 1e9) {
    throw new RangeError("Enter positive sales and whole units, and non-negative costs (maximum £1 billion).");
  }
  return {
    profit: sales - costs,
    margin: (sales - costs) / sales * 100,
    unitPrice: sales / units,
    unitCost: costs / units
  };
}
const fictionalWhatIf = document.getElementById("commercial-whatif-form");
if (fictionalWhatIf) {
  const salesField = document.getElementById("whatif-sales");
  const costsField = document.getElementById("whatif-cost");
  const unitsField = document.getElementById("whatif-units");
  const resultPanel = document.getElementById("commercial-whatif-results");
  const error = document.getElementById("commercial-whatif-error");
  const pounds = value => new Intl.NumberFormat("en-GB", {
    style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2
  }).format(value);
  function updateWhatIf() {
    try {
      // Avoid Number("") silently converting an empty input to zero.
      if ([salesField, costsField, unitsField].some(field => field.value.trim() === "")) {
        throw new RangeError("Enter all three values to calculate.");
      }
      const result = calculateFictionalCommercialScenario(
        Number(salesField.value), Number(costsField.value), Number(unitsField.value)
      );
      document.getElementById("whatif-profit").textContent = pounds(result.profit);
      document.getElementById("whatif-margin").textContent = result.margin.toFixed(1) + "%";
      document.getElementById("whatif-price").textContent = pounds(result.unitPrice);
      document.getElementById("whatif-unit-cost").textContent = pounds(result.unitCost);
      error.textContent = "";
      error.hidden = true;
      resultPanel.hidden = false;
    } catch (cause) {
      resultPanel.hidden = true;
      error.textContent = cause.message;
      error.hidden = false;
    }
  }
  fictionalWhatIf.addEventListener("input", updateWhatIf);
  fictionalWhatIf.addEventListener("submit", event => event.preventDefault());
  fictionalWhatIf.addEventListener("reset", () => {
    // Native reset completes after this event.
    queueMicrotask(updateWhatIf);
  });
  updateWhatIf();
}
