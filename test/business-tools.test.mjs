import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {parseNumber,marginMarkup,breakEven,percentageChange,buildTextExport} from "../business-tools/calculators.mjs";
const read=path=>readFileSync(new URL(path,import.meta.url),"utf8");
const close=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-9,"Expected "+expected+"; got "+actual);
test("margin: £100/£60 and independent denominator handling",()=>{
 const m=marginMarkup(100,60);close(m.profit,40);close(m.marginPercent,40);close(m.markupPercent,66.66666666666667);
 assert.equal(marginMarkup(0,20).marginPercent,null);
 assert.equal(marginMarkup(20,0).markupPercent,null);
 close(marginMarkup(30,40).profit,-10);
});
test("break-even: whole units and exact six-decimal contribution",()=>{
 assert.equal(breakEven(1000,25,15).units,100);
 assert.equal(breakEven(1001,25,15).units,101);
 assert.equal(breakEven(1,0.3,0.2).units,10);
 assert.equal(breakEven(0,10,2).units,0);
 assert.equal(breakEven(100,10,10).units,null);
 assert.equal(breakEven(100,10,15).units,null);
});
test("percentage change handles negative, equal, zero baseline",()=>{
 close(percentageChange(100,120).percentage,20);
 close(percentageChange(100,80).percentage,-20);
 close(percentageChange(100,100).percentage,0);
 assert.equal(percentageChange(0,10).percentage,null);
 assert.equal(percentageChange(-100,-120).percentage,20);
 assert.equal(percentageChange(-100,-120).negativeBaseline,true);
});
test("parser accepts UK-friendly pasted values and rejects unsafe/ambiguous inputs",()=>{
 assert.equal(parseNumber("£1,000.25"),1000.25);
 assert.equal(parseNumber("1,001.123456"),1001.123456);
 assert.equal(parseNumber("-2",{allowNegative:true}),-2);
 for(const bad of ["","Infinity","NaN","1e4","1,00","1.000,5","1 000","1.1234567","1000000001","Infinity"]){
  assert.throws(()=>parseNumber(bad),Error,bad);
 }
 assert.throws(()=>parseNumber("-1"));
 assert.throws(()=>marginMarkup(-1,1));
});
test("text export contains inputs, formula, result and assumptions",()=>{
 const s=buildTextExport({title:"Example",path:"/business-tools/example/",generated:"2026-11-12T14:00:00.000Z",inputs:[{label:"Selling price",value:"100"}],results:[{label:"Profit",value:"£40.00"}],formula:"Sale - cost",assumptions:"No VAT calculation."});
 for(const word of ["Selling price: 100","Profit: £40.00","Sale - cost","No VAT calculation.","Calculator version:","Generated (UTC)"])assert.ok(s.includes(word),word);
});
test("four separate discoverable pages, source notice, accessible controls, no external scripts",()=>{
 const pages=[
  ["../business-tools/index.html","/business-tools/"],
  ["../business-tools/gross-margin-markup/index.html","/business-tools/gross-margin-markup/"],
  ["../business-tools/break-even/index.html","/business-tools/break-even/"],
  ["../business-tools/percentage-change/index.html","/business-tools/percentage-change/"]
 ];
 for(const [file,route] of pages){
  const html=read(file);
  assert.equal((html.match(/<h1\b/g)||[]).length,1,file);
  assert.ok(html.includes('rel="canonical" href="https://organisation.oasys-cloud.com'+route+'"'),file);
  assert.match(html,/<script type="application\/ld\+json">/);
  assert.match(html,/Your calculations stay in your browser/);
  assert.match(html,/Calculator inputs are not intentionally sent to or stored on OASYS servers/);
  assert.match(html,/Results are estimates based on your inputs and stated assumptions/);
  assert.doesNotMatch(html,/https?:\/\/(?:fonts|cdn|www\.google-analytics|googletagmanager)\./);
 }
 for(const [file] of pages.slice(1)){
  const html=read(file);
  assert.match(html,/class="calculator-form"/);
  assert.match(html,/data-action="calculate" disabled/);
  assert.match(html,/id="download-results" disabled/);
  assert.match(html,/id="calculation-status"[^>]*role="status"/);
  assert.match(html,/role="alert"/);
  assert.match(html,/<noscript>/);
  assert.doesNotMatch(html,/<input[^>]*\bname=/);
 }
});
test("sitemap and root footer link retain all existing routes",()=>{
 const sitemap=read("../sitemap.xml");
 for(const route of ["/business-tools/","/business-tools/gross-margin-markup/","/business-tools/break-even/","/business-tools/percentage-change/","/public-sector/"])assert.ok(sitemap.includes("https://organisation.oasys-cloud.com"+route));
 const homepage=read("../index.html");
 assert.match(homepage,/£500 setup \+ £149\/month/);
 assert.match(homepage,/Request a 20-minute prototype conversation/);
 assert.match(homepage,/href="\/business-tools\/">Free Business Tools<\/a>/);
});
test("downloads use on-device Blob without network or web storage",()=>{
 const code=read("../business-tools/calculator-ui.mjs");
 assert.match(code,/new Blob\(\[text\]/);
 assert.match(code,/URL\.createObjectURL/);
 for(const bad of [/\bfetch\s*\(/,/localStorage/,/sessionStorage/,/indexedDB/,/XMLHttpRequest/,/navigator\.sendBeacon/])assert.doesNotMatch(code,bad);
});
