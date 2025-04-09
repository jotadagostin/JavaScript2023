// Arrays

// Criando Array com construtor:

const newArray = new Array();
// console.log(newArray);
//  [] -Array
// {} -objeto

const available = new Array(10);
// console.log(available);
// console.log(available.length);

// Criar e acessar os itens do Array:

let fruits = ["Apple", "banana", "orange"];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[2]);
// console.log(fruits[7]);
// console.log(fruits[fruits.length]);

// convertendo string para array:

let fullName = "Rodrigo Goncalvez Santana";
console.log(fullName.split(" "));

// cria um Array com as letras:
console.log(Array.from(fullName));
