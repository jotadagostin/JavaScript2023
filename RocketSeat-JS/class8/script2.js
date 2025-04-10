// For repete ate que a condicao especificada seja Falsa

// -variavel de controle
// -condicao
// -incremento ou decremento de variavel de controle

// for (step = 0; step < 10; step++) {
//   console.log(step);
// }

//exemplo de tabuada:

// console.log(`7x0 = ${7 * 0}`);
// console.log(`7x1 = ${7 * 1}`);
// console.log(`7x2 = ${7 * 2}`);
// console.log(`7x3 = ${7 * 3}`);
// console.log(`7x4 = ${7 * 4}`);
// console.log(`7x5 = ${7 * 5}`);
// console.log(`7x6 = ${7 * 6}`);
// console.log(`7x7 = ${7 * 7}`);
// console.log(`7x8 = ${7 * 8}`);
// console.log(`7x9 = ${7 * 9}`);

// console.log(`7x10 = ${7 * 10}`);

let number = 7;

for (step = 0; step <= 10; step++) {
  console.log(`${number} x ${step} = ${number * step}`);
}

// for...in executa interacoes a partir de um objeto e percorre as propriedades:
let person = {
  name: "Rodrigo",
  surname: "Goncalvez",
  email: "email@email.com",
};

let steps = 1;

for (let property in person) {
  // if (Object.prototype.hasOwnProperty.call(object, property)) {
  //   const element = object[property];
  //   for (let property = 0; index < array.length; index++) {
  //     const element = array[index];
  //   }
  // }
  console.log(steps);

  //exibe o nome da propriedade
  console.log(property);
  //exibe o conteudo da propriedade
  console.log(person[property]);
}

// for (let student in students) {
//   // console.log(student);
// }

// for of intera sobre valores de um objeto iteravel
let students = ["Rodrigo", "Joao", "Amanda"];

for (const student of students) {
  console.log(student);
}

// break encerra e execucao da repeticao ou switch para seguir para a instrucao seguinte:

let option = 2;

switch (option) {
  case 1:
    console.log("Cadastrar");
    break;

  case 2:
    console.log("Atualizar");
    break;

  case 3:
    console.log("Remover");
    break;

  default:
    console.log("Opcao invalida");
    break;
}
//Utilizando o break para finalizar a repeticao:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue encerra(pula) a execucao das instrucoes na interacao atual e continua a execucao do loop com a proxima interacao:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
