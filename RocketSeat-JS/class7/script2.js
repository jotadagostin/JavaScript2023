const creditCard = "1234567812344928";
console.log(creditCard.length);

// pega os 4 ultimos digitos
const lastDigits = creditCard.slice(-4);
console.log(lastDigits);

// preenche a string do inicio
const maskedNumber = lastDigits.padStart(creditCard.length, "x");
console.log(maskedNumber);

//preenche a string no final:
const number = "123";
console.log(number.padEnd(10, "#"));

let text = "Estudar, Aprender, Praticar";
let separete = text.split("");
console.log(separete);
let message = "Estou aprendendo Javascript";
console.log(message.split("en"));
let joined = separete.join();
console.log(joined);

// Encontrando um conteudo no texto:

let message2 = "Estou estudando os fundamentos de Javascript";
console.log(message2.indexOf("Javascript"));
// quando nao encontra retorna -1 :) javascript eh case sensitive... :(

// Verifica se existe a palavra string.
console.log(message2.includes("Javascript"));
console.log(message2.includes("Estou estudando os fundamentos"));
