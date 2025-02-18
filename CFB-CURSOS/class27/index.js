// function* cores() {
//     yield 'Vermelho'
//     yield 'Verde'
//     yield 'Azul'
// }

// const itc = cores()
// console.log(itc.next().value);
// console.log(itc.next().value);
// console.log(itc.next().value);

// function* perguntas() {
//   const nome = yield "Qual seu nome?";
//   const esporte = yield "Qual seu esporte favorito?";
//   return "Seu nome e` " + nome + ", seu esporte favorito e` " + esporte;
// }

// const itp = perguntas();
// console.log(itp.next().value);
// console.log(itp.next("Bruno").value);
// console.log(itp.next("Natacao").value);

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const itc = contador();
for(let i=0; i<10;i++) {
    console.log(itc.next.value);
}
console.log(itc.next().value);
console.log(itc.next().value);

console.log(itc.next().value);
