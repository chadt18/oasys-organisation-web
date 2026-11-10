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
