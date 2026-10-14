const sectors = {
  ecommerce: {
    tab: "tab-ecommerce",
    person: "Alex",
    role: "Ecommerce / Commercial Manager",
    summary: "Revenue is ahead of the comparable day, but margin and stock cover on a fast-selling SKU need attention.",
    plan: {title:"Today's revenue plan", plan:"£15,900", actual:"£16,427", variance:"+3.3%", state:"good", note:"Revenue is ahead of plan, but margin and stock-cover exceptions still require attention."},
    metrics: [
      ["Net revenue", "£16,427", "+11.9% vs comparable day", "good"],
      ["Gross margin", "51.8%", "55.9% comparable · −4.0pp", "warn"],
      ["SKU-104 stock cover", "2.5 days", "373 available ÷ 151/day", "warn"],
      ["Evidence sources", "3/3", "Refreshed for this demonstration", "neutral"]
    ],
    exceptionTitle: "Margin and stock pressure on SKU-104",
    exceptionText: "Supplier unit cost increased while the product remains a strong seller and available cover is below four days.",
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
    role: "Operations / General Manager",
    summary: "Overall throughput is on plan, but priority orders are running 47 minutes late and the queue has grown from 24 to 38 items.",
    plan: {title:"Priority service target", plan:"≤ 30 min", actual:"77 min", variance:"+47 min", state:"warn", note:"Overall throughput is on plan, but priority work is outside the organisation's agreed service threshold."},
    metrics: [
      ["Priority orders", "47 min late", "Service target exceeded", "warn"],
      ["Backlog", "38 waiting", "Up from 24 earlier", "warn"],
      ["Daily throughput", "On plan", "Overall operation", "good"],
      ["Evidence sources", "3/3", "Refreshed for this demonstration", "neutral"]
    ],
    exceptionTitle: "Priority orders are running late",
    exceptionText: "Priority orders are 47 minutes beyond the agreed service target and the queue has increased from 24 to 38 items.",
    decision: "Reallocate capacity, use an alternative route, or accept the service impact.",
    sources: ["Shared Drive / Operations / Dispatch queue", "Shared Drive / Operations / Service standards", "Shared Drive / Operations / Capacity plan"],
    observed: "Priority orders are 47 minutes beyond target; 38 items are waiting, up from 24 earlier.",
    calculation: "Current queue time minus agreed service threshold = +47 minutes.",
    source: "Dispatch queue + service threshold + current capacity plan.",
    boundary: "OASYS can show the service risk; it does not autonomously reroute work.",
    shortcuts: {emailLabel:"3 unread · 1 needs attention", emailCount:"3", calendarLabel:"Dispatch review · Today 10:30", filesLabel:"3 related items"},
    workspace: {
      email: {
        eyebrow: "Inbox · 3 unread",
        title: "Messages related to today's dispatch exception",
        meta: "The email is context for the exception, not proof that it caused the whole queue delay.",
        next: "At a higher permission level, OASYS could prepare the reroute request for approval.",
        emails: [
          ["Carrier B","Regional route delay","07:52","We expect a 60–90 minute delay on the regional route affecting priority consignments.","attention"],
          ["Warehouse Lead","Morning capacity","07:35","Two staff have moved to priority picking until the backlog falls below 20.","normal"],
          ["Customer Operations","Priority order watchlist","07:20","Four priority customers are currently inside the escalation window.","normal"]
        ]
      },
      calendar: {
        eyebrow: "Next relevant calendar item",
        title: "Dispatch review · Today at 10:30",
        body: "20 minutes · Operations + Warehouse · Floor meeting",
        items: [
          ["09:45","Warehouse handover","Review staffing and picking queues"],
          ["10:30","Dispatch review","Decide whether to reroute priority orders"],
          ["15:00","Carrier performance review","Weekly service review"]
        ],
        meta: "The next relevant action is visible without opening the calendar.",
        next: "Jordan can act now or use the 10:30 review as the decision point."
      },
      files: {
        eyebrow: "Shared Drive · Related evidence",
        title: "Files and folders linked to dispatch",
        items: [
          ["folder","Operations / Daily Dispatch","Current queue and handover files"],
          ["sheet","Priority Orders — Today","Live priority-order watchlist"],
          ["doc","Carrier Service Standards","Agreed thresholds and escalation rules"]
        ],
        meta: "The manager sees recognisable business files, while the audit layer retains precise source references.",
        next: "A production dashboard could open the relevant operational record."
      },
      ask: {
        answer: "The agreed priority-service target is 30 minutes or less. Current delay is 77 minutes, so priority work is 47 minutes outside target. The queue has also grown from 24 to 38 items while overall daily throughput remains on plan.",
        suggestions:["Why are priority orders flagged?","How much has the queue grown?","Show Carrier B's latest email"]
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
const decisionText = document.getElementById("decision-text");
const sourceList = document.getElementById("source-list");
const observed = document.getElementById("evidence-observed");
const calculation = document.getElementById("evidence-calculation");
const evidenceSource = document.getElementById("evidence-source");
const boundary = document.getElementById("evidence-boundary");
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
function renderAsk(query="", answerNow=false){
  const item = sectors[currentSector].workspace.ask;
  workspaceContent.innerHTML = `
    <p class="workspace-eyebrow">Ask OASYS</p>
    <h4>Find something without opening another system.</h4>
    <form id="ask-demo-form" class="ask-demo-form">
      <label for="ask-demo-input">Ask about the approved evidence</label>
      <div><input id="ask-demo-input" type="text" value="${escapeHtml(query)}" placeholder="Why is this flagged?"><button type="submit">Ask</button></div>
    </form>
    <div class="ask-suggestions">${item.suggestions.map(s => `<button type="button" data-question="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div>
    <div id="ask-demo-answer" class="ask-demo-answer" ${answerNow ? "" : "hidden"}>${answerNow ? escapeHtml(item.answer) : ""}</div>
    <div class="workspace-next">Answers stay grounded in the approved evidence shown in this demonstration.</div>`;
  const form=document.getElementById("ask-demo-form");
  const input=document.getElementById("ask-demo-input");
  const answer=document.getElementById("ask-demo-answer");
  form.addEventListener("submit", e => {
    e.preventDefault();
    answer.textContent=item.answer;
    answer.hidden=false;
  });
  document.querySelectorAll(".ask-suggestions button").forEach(btn => btn.addEventListener("click", () => {
    input.value=btn.dataset.question;
    answer.textContent=item.answer;
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
  currentWorkspace=key;
  document.querySelectorAll(".workspace-action").forEach(btn => {
    const active=btn.dataset.workspace===key;
    btn.classList.toggle("is-active",active);
    btn.setAttribute("aria-selected",String(active));
  });
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
  });
  panel.setAttribute("aria-labelledby",data.tab);
  personName.textContent=data.person;
  decisionHeading.textContent=data.person+", this needs your attention";
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
  decisionText.textContent=data.decision;
  renderSources(data.sources);
  observed.textContent=data.observed;
  calculation.textContent=data.calculation;
  evidenceSource.textContent=data.source;
  boundary.textContent=data.boundary;
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
document.querySelectorAll(".workspace-action").forEach(btn => btn.addEventListener("click",()=>setWorkspace(btn.dataset.workspace)));

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
  document.getElementById("workspace-panel").scrollIntoView({behavior:"smooth",block:"center"});
  setTimeout(()=>document.getElementById("ask-demo-input")?.focus(),450);
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
