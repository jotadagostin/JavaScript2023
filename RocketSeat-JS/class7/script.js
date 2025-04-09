let message = "Estou aprendendo os fundamentos do Javascript";

// console.log(message.length);

let password = "12345";
if (password.length < 6) {
  // console.log(" A senha deve ter ao menos 6 caracteres");
}

let value = 1234;
// console.log(String(value).length);
// length funciona somente com strings

// substituindo parte de um texto.

// console.log(message.replace("Javascript", "Metodos de texto"));

// Extraindo uma parte da string(start... end):

console.log(message.slice(6, 30));

// Extraindo uma parte da string de tras pra frente:

console.log(message.slice(-11));

let textWithSpace = "           texto de exemplo    ";
console.log(textWithSpace.length);
console.log(textWithSpace.trim().length); //remove espacos em branco no inicio e final da string
