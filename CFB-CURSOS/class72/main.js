const nome = Symbol("nome");
const numero = Symbol("nome");
const corUniforme = Symbol("nome");

const jogador = {
  [nome]: "j1",
  [numero]: 10,
  [corUniforme]: "amarelo",
};

for (p in jogador) {
  console.log(p);
}

console.log(jogador[nome]);
console.log(jogador[numero]);
console.log(jogador[corUniforme]);
