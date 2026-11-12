import {parseNumber,marginMarkup,breakEven,percentageChange,buildTextExport} from "./calculators.mjs";

const form=document.querySelector(".calculator-form");
if(form){
  const key=form.dataset.calculator;
  const fields=[...form.querySelectorAll("[data-field]")];
  const calculateButton=form.querySelector('[data-action="calculate"]');
  const downloadButton=document.querySelector("#download-results");
  const results=document.querySelector("#calculation-results");
  const announcement=document.querySelector("#calculation-status");
  const error=document.querySelector("#calculation-error");
  let lastCalculation=null;
  calculateButton.disabled=false;

  function clear(){
    lastCalculation=null;
    downloadButton.disabled=true;
    results.replaceChildren();
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
      let rows,note,formula,assumptions,title,path;
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
      }else throw new Error("This calculator is not available.");
      lastCalculation={title,path,inputs:entries,results:rows,formula,assumptions};
      render(rows,note);
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
