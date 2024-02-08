//funcao symbol

// const s1 = Symbol();
// const s2 = Symbol();
// const s3 = Symbol.for("bruno");
// const s4 = Symbol.for("canal");

// console.log(s1);
// console.log(s2);

// console.log(s3 === s4);

// console.log(typeof s1);

// console.log(Symbol.keyFor(s3));
// console.log(Symbol.keyFor(s4));
// console.log(Symbol.keyFor(s1));

class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.id = Symbol();
  }
}

let Jogadores = [
  new Jogador("j1"),
  new Jogador("j2"),
  new Jogador("j3"),
  new Jogador("j4"),
];

let s1 = Jogadores[0].id;

Jogadores = Jogadores.filter((j) => {
  return j.id != s1;
});

console.log(Jogadores);
