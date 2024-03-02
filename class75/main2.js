let numeros = [10, 20, 30, 40];

let [a, b, c, d] = numeros(
  ({ a, b, c, d } = { a: "verde", b: "amarelo", c: "roxo", d: "branco" })
);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
