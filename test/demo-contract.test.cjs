const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const test = require('node:test');
const html = fs.readFileSync('index.html','utf8');
const js = fs.readFileSync('script.js','utf8');
const css = fs.readFileSync('styles.css','utf8');

function getMatcher() {
 const start=js.indexOf('function getDemoAnswer(');
 const end=js.indexOf('function renderAsk(',start);
 assert.ok(start>=0 && end>start,'Demo matcher exists');
 return vm.runInNewContext(js.slice(start,end)+';getDemoAnswer;');
}
const getDemoAnswer=getMatcher();
const example={answer:'Fictional stock requires attention.',suggestions:['Why is SKU-104 flagged?']};

test('sample question variations work',()=>{
 assert.equal(getDemoAnswer('Why is stock flagged?',example),example.answer);
 assert.equal(getDemoAnswer('Why is SKU-104 flagged?',example),example.answer);
 assert.equal(getDemoAnswer(' What needs my attention? ',example),example.answer);
});
test('unknown requests do not receive invented evidence',()=>{
 assert.match(getDemoAnswer('What is my actual bank balance?',example),/cannot verify/);
});
test('mobile display and responsive source assets are present',()=>{
 assert.match(html,/ENTER THE DASHBOARD ROOM/);
 assert.match(html,/Every figure and message here is fictional/);
 assert.match(html,/styles\.css\?v=20261110-mobile-qa1/);
 assert.match(html,/script\.js\?v=20261110-demo-qa1/);
 assert.match(css,/@media\(max-width:760px\)/);
 assert.match(css,/prefers-reduced-motion/);
});
test('role tabs and source disclosure remain available',()=>{
 for(const role of ['ecommerce','agency','operations'])assert.ok(html.includes('data-sector="'+role+'"'));
 assert.ok(html.includes('id="evidence-detail"'));
 assert.ok(html.includes('id="workspace-panel"'));
});
test('contact and pricing preserved',()=>{
 assert.ok(html.includes('£500 setup + £149/month'));
 assert.ok(html.includes('Request a 20-minute prototype conversation'));
});


test('fictional role dashboard uses full-width mobile navigation',()=>{
 assert.match(css,/fictional role dashboard: narrow-screen full-width reflow/);
 assert.match(css,/\.dashboard-demo-section \.demo-sector-tabs\{[\s\S]*?grid-template-columns:minmax\(0,1fr\)/);
 assert.match(css,/\.dashboard-demo-section \.demo-sector-tabs \.sector-tab\{[\s\S]*?width:100%/);
 assert.match(css,/@media\(max-width:420px\)/);
});


test('fictional what-if maths is bounded and independent of supplied evidence',()=>{
 const start=js.indexOf('function calculateFictionalCommercialScenario(');
 const end=js.indexOf('const fictionalWhatIf =',start);
 assert.ok(start>=0 && end>start);
 const calc=vm.runInNewContext(js.slice(start,end)+';calculateFictionalCommercialScenario;');
 const result=calc(1200,936,120);
 assert.equal(result.profit,264);
 assert.equal(result.margin,22);
 assert.equal(result.unitPrice,10);
 assert.equal(result.unitCost,7.8);
 assert.equal(calc(100,120,10).margin,-20);
 for(const bad of [[0,50,10],[100,-1,10],[100,20,0],[100,20,1.1],[Infinity,5,10],[100,1,1000000001]]){
  assert.throws(()=>calc(...bad),/RangeError/);
 }
 assert.match(html,/id="commercial-whatif-form"/);
 assert.match(html,/id="whatif-sales"/);
 assert.match(html,/id="whatif-cost"/);
 assert.match(html,/id="whatif-units"/);
 assert.match(html,/type="reset" class="commercial-whatif-reset"/);
 assert.match(html,/These figures are invented and separate from Morgan/);
 assert.match(html,/Inputs stay in this browser session and are not sent to OASYS/);
 assert.match(js,/fictionalWhatIf\.addEventListener\("input", updateWhatIf\)/);
 assert.match(css,/@media\(max-width:700px\)\{[\s\S]*?\.commercial-whatif-fields/);
});


test('fictional role selector uses all desktop width without affecting mobile',()=>{
 assert.match(html,/class="demo-sector-row"/);
 assert.match(html,/Explore fictional roles:/);
 for(const role of ['E-commerce &amp; Retail','Professional Services','Transport &amp; Logistics']){
   assert.ok(html.includes(role),role);
 }
 assert.match(css,/@media\(min-width:761px\)/);
 assert.match(css,/\.dashboard-demo-section \.demo-sector-tabs\{[\s\S]*?grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
 assert.match(css,/\.dashboard-demo-section \.demo-sector-row>\.demo-disclaimer\{[\s\S]*?grid-column:1\/-1/);
 assert.match(css,/@media\(max-width:760px\)/);
});


test('each fictional job-function source has a local evidence preview and role access warning',()=>{
 const start=js.indexOf('const fictionalEvidenceRecords = ');
 const end=js.indexOf(';\n', start);
 assert.ok(start>0 && end>start);
 const records=JSON.parse(js.slice(start+'const fictionalEvidenceRecords = '.length,end));
 assert.deepEqual(Object.keys(records).sort(),['agency','ecommerce','operations']);
 assert.equal(records.ecommerce.length,4);
 assert.equal(records.agency.length,3);
 assert.equal(records.operations.length,4);
 for(const [role,items] of Object.entries(records)){
   for(const record of items){
     assert.equal(record.length,4,role);
     for(const field of record)assert.ok(field.trim().length>12,role);
   }
 }
 assert.match(js,/renderSources\(data\.sources,key\)/);
 assert.match(js,/<details class="fictional-source-record">/);
 assert.match(js,/No connected files/);
 assert.match(js,/not enforced access controls/);
 assert.match(css,/\.fictional-source-record>summary:focus-visible/);
 assert.match(css,/\.dashboard-demo-section \.source-tags\{grid-template-columns:minmax\(0,1fr\)/);
});
