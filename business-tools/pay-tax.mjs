import {assertAmount} from "./calculators.mjs";
export const TAX_YEAR="2026–27";
export function vatBreakdown(amount,rate,mode){
  assertAmount(amount);
  if(![0,5,20].includes(rate))throw new RangeError("Select a 0%, 5% or 20% VAT rate.");
  if(!["add","remove"].includes(mode))throw new RangeError("Select add or remove VAT.");
  if(Math.abs(amount*100-Math.round(amount*100))>0.000001)throw new RangeError("VAT requires a money amount to whole pennies (two decimal places).");
  const pennies=Math.round(amount*100);
  if(mode==="add"){
    const taxPennies=Math.round(pennies*rate/100);
    return {net:pennies/100,vat:taxPennies/100,gross:(pennies+taxPennies)/100,rate};
  }
  const netPennies=Math.round(pennies*100/(100+rate));
  return {net:netPennies/100,vat:(pennies-netPennies)/100,gross:pennies/100,rate};
}
export function salaryHourlyPay(amount,hours,weeks,mode){
  assertAmount(amount);assertAmount(hours);assertAmount(weeks);
  if(hours<=0||hours>168)throw new RangeError("Paid hours per week must be more than zero and no more than 168.");
  if(weeks<=0||weeks>52)throw new RangeError("Paid weeks per year must be more than zero and no more than 52.");
  if(!["annual","hourly"].includes(mode))throw new RangeError("Select annual salary or hourly rate.");
  const annual=mode==="annual"?amount:amount*hours*weeks;
  if(!Number.isFinite(annual)||annual>1000000000)throw new RangeError("Annual amount is outside the supported range.");
  return {annual,hourly:annual/(hours*weeks),weekly:annual/weeks,monthly:annual/12};
}
export function incomeTax2026(annual){
  assertAmount(annual);
  const allowance=Math.max(0,12570-Math.max(0,annual-100000)/2);
  const taxable=Math.max(0,annual-allowance);
  const basic=Math.min(taxable,37700);
  const higher=Math.min(Math.max(0,taxable-37700),87440);
  const additional=Math.max(0,taxable-125140);
  const incomeTax=basic*.20+higher*.40+additional*.45;
  return {annual,allowance,taxable,incomeTax,afterTax:annual-incomeTax};
}
