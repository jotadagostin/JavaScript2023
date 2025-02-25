// tipos:

//tipos primitivos: string, numer, boolean, null, undefined

console.log('Uma string com "aspas duplas" dentro de uma simples');
console.log("Uma string com 'aspas simples' dentro de uma aspa dupla");

let username = "Jota";
let email = "jota@gmail.com";
console.log(username, email, "teste");

// concatenar texto

let message = "Ola, " + username + " . Voce conectou com o email: " + email;

console.log(message);

console.log();

// number
let number = 5;
console.log(number);

console.log(12.5 / 2);

// Boolen: true or false

let isLoading = true;
console.log(isLoading);

// undefined e nulll
let emptiness = null;
console.log("O valor e: ", emptiness);

// conversao de tipos: type conversation:

console.log(typeof Number("9"));

let age = 18;
console.log(typeof age.toString());
console.log(typeof String(age));
