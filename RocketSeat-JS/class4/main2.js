function sum(a, b) {
  let result = a + b;

  return result;
}

let response = sum(7, 7);
console.log(response);
console.log(sum(5, 6));

console.log("=======================================");

showMessage("Hello, world!");

function showMessage(message) {
  console.log(message);
  endLine();

  /*Comentario para documentacao em JS
   */
  function endLine() {
    //linha para separar
    console.log("-------------------");
  }
}

showMessage("Tudo bem?");

/**
 * Authenticates the user:
 * @param {String} email usermail.
 * @param {String} password more tham 6 carachters.
 * @returns {Number} user id.
 */
function signIn(email, password) {
  return 7;
}

signIn();

//Funcao anonima(funcao que nao possui nome):

const showMessage1 = function () {
  return "Hello, new world!";
};

console.log(showMessage1());

const showMessage2 = function (message, name) {
  return message + name;
};

console.log(showMessage2("Hello, old world!"));
