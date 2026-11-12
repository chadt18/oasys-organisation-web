import {parseNumber,marginMarkup,breakEven,percentageChange,buildTextExport} from "./calculators.mjs";
import {vatBreakdown,salaryHourlyPay,incomeTax2026,TAX_YEAR} from "./pay-tax.mjs";

const form=document.querySelector(".calculator-form");
if(form){
  const key=form.dataset.calculator;
  const fields=[...form.querySelectorAll("[data-field]")];
  const calculateButton=form.querySelector('[data-action="calculate"]');
  const downloadButton=document.querySelector("#download-results");
  const results=document.querySelector("#calculation-results");
  const chartHost=document.querySelector("#calculation-chart");
  const announcement=document.querySelector("#calculation-status");
  const error=document.querySelector("#calculation-error");
  let lastCalculation=null;
  calculateButton.disabled=false;

  function clear(){
    lastCalculation=null;
    downloadButton.disabled=true;
    results.replaceChildren();
    if(chartHost)chartHost.replaceChildren();
    announcement.textContent="";
    error.textContent="";
    fields.forEach(field=>field.removeAttribute("aria-invalid"));
  }
  form.addEventListener("input",clear);
  form.addEventListener("change",clear);
  form.addEventListener("reset",clear);

  const money=value=>new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP",minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
  const plain=value=>new Intl.NumberFormat("en-GB",{maximumFractionDigits:2}).format(value);
  const percentage=value=>value===null?"Undefined (zero denominator)":plain(value)+"%";

  function render(rows,note){
    const list=document.createElement("dl");
    list.className="result-list";
    rows.forEach(row=>{
      const pair=document.createElement("div");
      const term=document.createElement("dt");
      const value=document.createElement("dd");
      term.textContent=row.label;
      value.textContent=row.value;
      pair.append(term,value);
      list.append(pair);
    });
    const explanation=document.createElement("p");
    explanation.textContent=note;
    explanation.className="result-note";
    results.replaceChildren(list,explanation);
    announcement.textContent="Calculation complete. "+rows.map(row=>row.label+": "+row.value).join(". ")+".";
    downloadButton.disabled=false;
  }


  function drawChart(chart){
    if(!chartHost||!chart)return;
    chartHost.replaceChildren();
    if(!Number.isFinite(chart.first+chart.second)||chart.first<0||chart.second<0)return;
    const total=chart.first+chart.second;
    if(total===0)return;
    const ratio=Math.min(100,Math.max(0,100*chart.first/total));
    const figure=document.createElement("figure");
    figure.className="visual-chart";
    const caption=document.createElement("figcaption");
    caption.textContent=chart.title;
    const visual=document.createElement("div");
    visual.setAttribute("aria-hidden","true");
    if(chart.type==="pie"){
      visual.className="chart-pie";
      visual.style.background="conic-gradient(#245a75 0% "+ratio+"%,#d49a51 "+ratio+"% 100%)";
    }else{
      visual.className="chart-bar";
      const first=document.createElement("span"),second=document.createElement("span");
      first.className="chart-primary";second.className="chart-secondary";
      first.style.width=ratio+"%";second.style.width=(100-ratio)+"%";
      visual.append(first,second);
    }
    const explanation=document.createElement("p");
    explanation.textContent=chart.firstLabel+": "+money(chart.first)+" ("+plain(ratio)+"%). "+chart.secondLabel+": "+money(chart.second)+" ("+plain(100-ratio)+"%).";
    figure.append(caption,visual,explanation);
    chartHost.append(figure);
  }

  form.addEventListener("submit",event=>{
    event.preventDefault();
    clear();
    const values={};
    let active=null;
    try{
      for(const field of fields){
        active=field;
        values[field.id]=parseNumber(field.value,{allowNegative:field.dataset.allowNegative==="true"});
      }
      const entries=fields.map(field=>({label:field.dataset.label,value:String(values[field.id])}));
      let rows,note,formula,assumptions,title,path,chart=null;
      if(key==="margin"){
        const basis=document.querySelector("#vat-basis").value;
        if(!["inclusive","exclusive","unspecified"].includes(basis))throw new Error("Choose a recognised VAT basis.");
        const value=marginMarkup(values.sale,values.cost);
        rows=[
          {label:"Gross profit",value:money(value.profit)},
          {label:"Gross margin",value:percentage(value.marginPercent)},
          {label:"Markup",value:percentage(value.markupPercent)}
        ];
        const chosen={inclusive:"VAT-inclusive",exclusive:"VAT-exclusive",unspecified:"Not specified"}[basis];
        entries.push({label:"VAT basis for both inputs",value:chosen});
        note="Margin is undefined when sale price is zero; markup is undefined when cost is zero. VAT is not calculated. Input figures must use the same basis.";
        formula="Gross profit = selling price - cost. Gross margin = profit / selling price × 100. Markup = profit / cost × 100.";
        assumptions="Both price and cost use the selected VAT basis ("+chosen+"). The tool does not calculate VAT, tax, shipping, overheads or demand.";
        title="Gross Margin and Markup";path="/business-tools/gross-margin-markup/";
      }else if(key==="break-even"){
        const value=breakEven(values.fixed,values.price,values.variable);
        rows=[
          {label:"Contribution per unit",value:money(value.contribution)},
          {label:"Break-even units",value:value.units===null?"No finite viable break-even under these inputs":new Intl.NumberFormat("en-GB",{maximumFractionDigits:0}).format(value.units)}
        ];
        note=value.units===null?"The unit selling price does not exceed variable cost. Selling more units does not generate positive contribution.":"Whole units are rounded upwards so fixed costs are covered under the stated assumptions.";
        formula="Contribution per unit = unit selling price - unit variable cost. Break-even units = ceiling(fixed costs / contribution per unit) when contribution is positive.";
        assumptions="All figures use GBP, compatible VAT bases and the same accounting period. This simple model excludes tax, changing costs and sales forecasts.";
        title="Break-even Units";path="/business-tools/break-even/";
      }else if(key==="percentage"){
        const value=percentageChange(values.previous,values.current);
        rows=[
          {label:"Absolute change",value:plain(value.delta)},
          {label:"Percentage change",value:percentage(value.percentage)}
        ];
        note=value.percentage===null?"The original value is zero; percentage change is undefined. Absolute change is still shown.":value.negativeBaseline?"A negative starting value reverses the percentage direction; a positive result does not necessarily mean business improvement.":"The sign shows mathematical direction, not the reason for the change.";
        formula="Absolute change = new value - original value. Percentage change = (new - original) / original × 100 when original is non-zero.";
        assumptions="Values are comparable measures with the same units and periods. This is not a causal explanation or forecast.";
        title="Percentage Change";path="/business-tools/percentage-change/";

      }else if(key==="vat"){
        const direction=document.querySelector("#vat-direction").value;
        const rate=Number(document.querySelector("#vat-rate").value);
        const v=vatBreakdown(values["vat-amount"],rate,direction);
        entries.push({label:"Calculation",value:direction==="add"?"Add VAT":"Remove VAT"},{label:"VAT rate",value:rate+"%"});
        rows=[{label:"Net amount",value:money(v.net)},{label:"VAT amount",value:money(v.vat)},{label:"Gross amount",value:money(v.gross)}];
        note="Select the VAT rate that actually applies. Zero-rated is not the same as exempt. Values are rounded to pennies.";
        formula="Add VAT: gross = net + (net × rate). Remove VAT: net = gross / (1 + rate); VAT = gross - net.";
        assumptions="Illustrative UK VAT rate "+rate+"% chosen by visitor; rate eligibility and registration are not verified. GOV.UK VAT rates.";
        title="VAT Calculator";path="/business-tools/vat/";
        chart={type:"bar",title:"VAT breakdown of gross amount",firstLabel:"Net",secondLabel:"VAT",first:v.net,second:v.vat};
      }else if(key==="pay"){
        const mode=document.querySelector("#pay-mode").value;
        const v=salaryHourlyPay(values["pay-amount"],values["pay-hours"],values["pay-weeks"],mode);
        entries.push({label:"Input type",value:mode==="annual"?"Annual gross salary":"Hourly gross pay"});
        rows=[{label:"Annual gross pay",value:money(v.annual)},{label:"Average monthly gross pay",value:money(v.monthly)},{label:"Paid week gross pay",value:money(v.weekly)},{label:"Hourly gross rate",value:money(v.hourly)}];
        note="Gross estimates before Income Tax, NI, pensions and other deductions. Uses the paid weeks and hours you supplied.";
        formula="Annual = hourly × paid hours/week × paid weeks/year; hourly = annual / (hours × weeks); monthly = annual / 12.";
        assumptions="Not take-home pay, holiday entitlement or a minimum-wage compliance assessment.";
        title="Salary and Hourly Pay";path="/business-tools/salary-hourly-pay/";
      }else if(key==="income-tax"){
        const v=incomeTax2026(values["tax-annual"]);
        entries.push({label:"Tax year and jurisdiction",value:"2026–27 England, Wales, Northern Ireland; NOT Scotland"});
        rows=[{label:"Standard Personal Allowance",value:money(v.allowance)},{label:"Taxable employment income",value:money(v.taxable)},{label:"Estimated annual Income Tax",value:money(v.incomeTax)},{label:"Gross after Income Tax ONLY",value:money(v.afterTax)}];
        note="This is not actual take-home pay. Excludes Scotland, National Insurance, tax-code changes, pensions, loans and other income types.";
        formula="2026–27 allowance £12,570 tapering after £100,000; taxable bands: 20% first £37,700; 40% next £87,440; 45% above.";
        assumptions="Standard allowance, non-savings employment income, "+TAX_YEAR+" England/Wales/Northern Ireland. GOV.UK Income Tax rates; other deductions excluded.";
        title="Annual Income Tax Estimate";path="/business-tools/income-tax/";
        chart={type:"pie",title:"Income Tax as a share of gross income",firstLabel:"Gross after Income Tax only",secondLabel:"Income Tax",first:v.afterTax,second:v.incomeTax};
      }else throw new Error("This calculator is not available.");
      lastCalculation={title,path,inputs:entries,results:rows,formula,assumptions};
      render(rows,note);
      drawChart(chart);
    }catch(problem){
      error.textContent="Check "+(active?.dataset.label||"the figures")+": "+problem.message;
      if(active){active.setAttribute("aria-invalid","true");active.focus();}
    }
  });

  downloadButton.addEventListener("click",()=>{
    if(!lastCalculation)return;
    const text=buildTextExport({...lastCalculation,generated:new Date().toISOString()});
    const blob=new Blob([text],{type:"text/plain;charset=utf-8"});
    const url=URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.href=url;
    link.download="oasys-"+lastCalculation.path.split("/").filter(Boolean).at(-1)+"-results.txt";
    link.style.display="none";
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(()=>URL.revokeObjectURL(url),30000);
  });
}
