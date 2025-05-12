import { Calc } from "./calc.js";

const calc = new Calc(); //instancia

console.log("4 + 6 = ", calc.sum(4, 6));
console.log("4 * 6 = ", calc.multiply(4, 6));

function multiply(a, b) {
  console.log(a, b);
}
