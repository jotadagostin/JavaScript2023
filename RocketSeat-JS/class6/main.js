// cria um objeto vazio:

const obj = {};
console.log(obj);
console.log(typeof obj);

const user = {
  // propriedade composta
  name: {
    firstName: "Joao",
    surName: "Dagostin",
  },
  email: "jdagostin@gmail.com",
  age: 18,
  adress: {
    street: "Via Garibald",
    number: 23,
    city: "Italy",
    CAP: "16039",
  },
  message: function () {
    console.log("Hello world!");
  },
};

// acessando proprieradades e metados usando a notacao de ponto.

console.log(user.name.firstName);
user.message(); //para chamar a funcao

//notacao de colchetes:

console.log(user["email"]);
console.log(user["name"]["firstName"]);
