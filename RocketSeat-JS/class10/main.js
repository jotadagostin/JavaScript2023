class Person {
  constructor(name) {
    console.log("Ola: ", name);
  }
}

const person = new Person("Rodrigo");

class Product {
  constructor(name) {
    this.name = name;
  }
}

const product = new Product("Teclado");
console.log(product.name);

const product2 = new Product("Mouse");
console.log(product2.name);

// acesssar metodos na classe

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sendEmail() {
    console.log(
      "Email enviado para: ",
      this.name,
      "Para o endereco: ",
      this.email
    );
  }
}

const user = new User("Rodrigo", "rodrigo@email.com");
user.sendEmail();

// metodo estatico:

class Usuario {
  static showMessage(message) {
    console.log(message);
  }
}

// const usuario = new Usuario();
// usuario.showMessage();

Usuario.showMessage("Essa eh uma mensagem");

// heranca(extend): herdando propriedades e classes

class Animal {
  constructor(name) {
    this.name = name;
  }
  //metodo:
  makeNoise() {
    console.log("Algum som generico do animal");
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log("WOF WOF");
  }
}
class Cat extends Animal {
  makeNoise() {
    console.log("Miau Miau");
  }

  run() {
    console.log("Correndo...");
  }
}

const dog = new Dog("Belu");
console.log(dog.name);

dog.makeNoise();
const cat = new Cat("Mel");
console.log(cat.name);

cat.makeNoise();
cat.run();

const adress = {
  city: "Sao Paulo",
  country: "Brasil",
};

console.log(adress); //prototype objeto

const userProt = ["Joao", "Maria,", "Pedro"];
console.log(userProt); //prototype array
