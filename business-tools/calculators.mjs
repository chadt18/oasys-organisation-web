// OASYS Free Business Tools: deterministic, local-only numeric formulas.
// Keep these functions independent of the DOM, network and browser storage.
const VERSION="0.1.0";
const LIMIT=1000000000;
const SCALE=1000000;
export {VERSION};
export function parseNumber(raw, options={}) {
  const allowNegative=options.allowNegative===true;
  if(typeof raw!=="string" || !raw.trim())throw new Error("Enter a number. Example: 1,000.50.");
  const cleaned=raw.trim().replace(/^[£$€]\s*/,"").trim();
  if(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,6})?$/.test(cleaned))throw new Error("Use digits, optional comma thousands, and a full stop for decimals (up to six places).");
  const parsed=Number(cleaned.replace(/,/g,""));
  if(!Number.isFinite(parsed)||Math.abs(parsed)>LIMIT)throw new Error("The number must be no greater than 1,000,000,000 in magnitude.");
  if(!allowNegative && parsed<0)throw new Error("Use zero or a positive amount.");
  return parsed;
}
export function assertAmount(value, allowNegative=false){
  if(typeof value!=="number" || !Number.isFinite(value) || Math.abs(value)>LIMIT || (!allowNegative && value<0)) throw new RangeError("Invalid or out-of-range amount.");
}
export function marginMarkup(sale,cost){
  assertAmount(sale);assertAmount(cost);
  const profit=sale-cost;
  return {profit,marginPercent:sale===0?null:profit/sale*100,markupPercent:cost===0?null:profit/cost*100};
}
export function breakEven(fixedCost,unitPrice,unitVariableCost){
  assertAmount(fixedCost);assertAmount(unitPrice);assertAmount(unitVariableCost);
  const fixed=BigInt(Math.round(fixedCost*SCALE));
  const unit=BigInt(Math.round(unitPrice*SCALE))-BigInt(Math.round(unitVariableCost*SCALE));
  if(unit<=0n)return {contribution:unitPrice-unitVariableCost,units:null};
  const result=(fixed+unit-1n)/unit;
  if(result>BigInt(Number.MAX_SAFE_INTEGER))throw new RangeError("Break-even units exceed the supported range.");
  return {contribution:unitPrice-unitVariableCost,units:Number(result)};
}
export function percentageChange(previous,current){
  assertAmount(previous,true);assertAmount(current,true);
  const delta=current-previous;
  return {delta,percentage:previous===0?null:delta/previous*100,negativeBaseline:previous<0};
}
export function buildTextExport(record){
  const lines=["OASYS Organisation — Free Business Tools",
    "Calculator: "+record.title,
    "Calculator version: "+VERSION,
    "Generated (UTC): "+record.generated,
    "",
    "Inputs"];
  for(const input of record.inputs)lines.push(input.label+": "+input.value);
  lines.push("","Results");
  for(const result of record.results)lines.push(result.label+": "+result.value);
  lines.push("","Formula",record.formula,"","Assumptions and limitations",record.assumptions,"",
    "These results depend on entered values and assumptions. Check before important business decisions.",
    "Source: https://organisation.oasys-cloud.com"+record.path);
  return lines.join("\n")+"\n";
}
