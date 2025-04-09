const user = {
  id: 1,
  name: "Rodrigo",
  adress: {
    street: "Avenida Brasil",
    city: "Sao Paulo",
    geo: {
      latitude: 47.808,
      longitude: 17.5674,
    },
  },
  message: function () {
    console.log(`Ola, ${this.name}!`);
  },
};

// console.log(user?.adress?.street);
// user.message?.();

let content = undefined;
console.log(content ?? "Conteudo padrao");

const userNew = {
  name: "Joao",
  picture: undefined,
};

// console.log(userNew.picture ?? "Default.png");

// Funcao construtora:

function creatProduct(name) {
  const product = {};

  product.name = name;
  product.details = function () {
    console.log(`O nome do produto e: ${this.name}`);
  };

  return product;
}

// New cria um novo objeto com a mesma estrutura do construtor ou da funcao construtora
const product1 = new creatProduct("teclado");
console.log(product1.name);
product1.details();

const product2 = new creatProduct("mouse");
console.log(product2.name);
product2.details();
console.log(product1 === product2);

// Exemplos de funcoes construtoras disponiveis no proprio Javascript

let myName = new String("Rodrigo_Master");
console.log(myName);

let price = "40.6".replace(".", "");
console.log(price);

let date = new Date("2024-1-1");
console.log(date);

function Person(name) {
  this.name = name;
  this.message = function () {
    console.log(`Ola, ${this.name}`);
  };
}

const person1 = new Person("Rodrigo");
console.log(person1.name);
person1.message();
