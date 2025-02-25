//ordem de precedendia: expressao com multiplos operadores

let number = 2 + 3 * 4;
console.log(number);

let number2 = (2 + 3) * 4;
console.log(number2);
console.log("-----------------------------");

//grouping operator

let total1 = 2 + 4 * 4;
console.log(total1);
let total2 = (2 + 3) * 4;
console.log(total2);

let average = (9.5 + 7 + 5) / 3;
console.log(average);

console.log("====================");
let one = 1;
let two = 2;
console.log(one != two);

// === estritamente igual a (tipo e valor)

console.log(one === "1");

let balance = 500;
let payment = 120;

console.log(balance >= payment);
