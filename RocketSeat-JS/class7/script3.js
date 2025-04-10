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
// console.log(fullName.split(" "));

// cria um Array com as letras:
// console.log(Array.from(fullName));

let usersNew = [];
//add alguem dentro da lista(final do array):
usersNew.push("Rodrigo");
usersNew.push("Joao");
usersNew.push("Marco");

//inicio da lista(array):
usersNew.unshift("Ana");

//Remover do Array(inicio):
usersNew.shift();
//remover do Array(final):
usersNew.pop();

let fruitsNew = ["apple", "watermelon", "strawberry", "lemon"];
// console.log(fruitsNew);

let position = fruitsNew.indexOf("lemon");
// console.log(position);

//remover item pela posicao do indice, 1 e o numero de itens para remover
fruitsNew.splice(position, 1);
// console.log(fruitsNew);

let myArray = [
  "Um texto",
  10,
  true,
  function () {
    console.log("Funcao dentro do array");
  },
  {
    name: "Joao",
    email: "joao@gmail.com",
  },
];

// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);

// verifica se um item existe no array:

let fruitsInEnglish = ["apple", "watermelon", "strawberry", "lemon"];
console.log(fruitsInEnglish.includes("lemon"));
