// Strict mode: ativando esse modo, os erros que eram

function showMessage() {
  personName = "Rodrigo Silva";

  console.log("Ola", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
// student.point = 10;

console.log(student.point);

// destructuring assigment:

// const data = ["Rodrigo", "rodrigo@email.com"];

//desestruturando array:

const [username, email] = data;
console.log("Nome:", username);
console.log("Email: ", email);

const fruits = ["Qualquer coisa", "Apple", "Orange"];
const [banana] = fruits;
console.log(banana);
//ignorando o primeiro nada desestruturacao
const [_, apple] = fruits;
console.log(apple);
//ignorando o primeiro e segundo:
const [, , orange] = fruits;
console.log(orange);

//desestruturacao objetos:

const product = {
  description: "Teclado",
  price: 150,
};

const { description, price } = product;

console.log("Descricao: ", description);
console.log("Preco: ", price);

function newProduct(description, price) {
  console.log("novo produto");

  console.log("Descricao: ", description);
  console.log("Preco: ", price);
}

newProduct("Mouse", 70);

//rest params (...) permite representar um numero indefinido de arrays

function values(...rest) {
  // console.log(a);
  console.log(rest.length);

  console.log(...rest);
}

values(2, 1, 3, 4);

// Spread(espalhar):

const numbers = [1, 2, 3];
console.log(numbers);

console.log(...numbers);

const data = {
  name2: "Rodrigo",
  email2: "rodrigo@email.com",
  avatar: "j.png",
};

console.log(data);
// spread
console.log(...data);
