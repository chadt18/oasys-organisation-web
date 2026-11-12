import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {vatBreakdown,salaryHourlyPay,incomeTax2026,TAX_YEAR} from "../business-tools/pay-tax.mjs";
const read=path=>readFileSync(new URL(path,import.meta.url),"utf8");
const close=(a,b)=>assert.ok(Math.abs(a-b)<0.000001,"Expected "+b+", received "+a);
test("VAT: standard, reduced, zero, reverse and invalid decimal inputs",()=>{
 assert.deepEqual(vatBreakdown(100,20,"add"),{net:100,vat:20,gross:120,rate:20});
 assert.deepEqual(vatBreakdown(120,20,"remove"),{net:100,vat:20,gross:120,rate:20});
 assert.deepEqual(vatBreakdown(105,5,"remove"),{net:100,vat:5,gross:105,rate:5});
 assert.deepEqual(vatBreakdown(10,0,"add"),{net:10,vat:0,gross:10,rate:0});
 assert.throws(()=>vatBreakdown(10.001,20,"add"));
 assert.throws(()=>vatBreakdown(100,17.5,"add"));
});
test("gross salary conversion and boundary checks",()=>{
 close(salaryHourlyPay(52000,40,52,"annual").hourly,25);
 close(salaryHourlyPay(15,40,46,"hourly").annual,27600);
 close(salaryHourlyPay(15,40,46,"hourly").weekly,600);
 assert.throws(()=>salaryHourlyPay(15,0,52,"hourly"));
 assert.throws(()=>salaryHourlyPay(15,40,53,"hourly"));
});
test("2026–27 employment Income Tax incl. personal allowance taper",()=>{
 assert.equal(TAX_YEAR,"2026–27");
 close(incomeTax2026(12570).incomeTax,0);
 close(incomeTax2026(40000).incomeTax,5486);
 close(incomeTax2026(50270).incomeTax,7540);
 close(incomeTax2026(100000).incomeTax,27432);
 close(incomeTax2026(110000).allowance,7570);
 close(incomeTax2026(110000).incomeTax,33432);
 close(incomeTax2026(125140).incomeTax,42516);
 close(incomeTax2026(150000).incomeTax,53703);
});
test("six clear launch cards, local forms, metadata and charts",()=>{
 const hub=read("../business-tools/index.html");
 assert.equal((hub.match(/class="card tool-card"/g)||[]).length,6);
 assert.equal((hub.match(/class="tool-button"/g)||[]).length,6);
 for(const slug of ["vat","salary-hourly-pay","income-tax"]){
  const page=read("../business-tools/"+slug+"/index.html");
  assert.equal((page.match(/<h1\b/g)||[]).length,1);
  assert.ok(page.includes('rel="canonical" href="https://organisation.oasys-cloud.com/business-tools/'+slug+'/"'));
  assert.ok(page.includes('id="download-results" disabled'));
  assert.ok(page.includes('role="status"'));
  assert.ok(page.includes('<noscript>'));
  assert.ok(page.includes('Your calculations stay in your browser'));
  assert.doesNotMatch(page,/<input[^>]*\bname=/);
  assert.ok(read("../sitemap.xml").includes("/business-tools/"+slug+"/"));
 }
 const ui=read("../business-tools/calculator-ui.mjs");
 assert.match(ui,/drawChart\(chart\)/);
 for(const x of [/\bfetch\s*\(/,/localStorage/,/sessionStorage/,/XMLHttpRequest/,/indexedDB/,/navigator\.sendBeacon/])assert.doesNotMatch(ui,x);
 assert.match(read("../business-tools/tools.css"),/\.tool-card \.tool-button/);
});
