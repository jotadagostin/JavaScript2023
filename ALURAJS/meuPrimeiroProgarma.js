console.log(`TRABALHANDO COM CONDICIONAIS`);

const listaDeDestinos = new Array("Salvador", "Sao Paulo", "Rio de Janeiro");

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Sao Paulo";

console.log("Destinos possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador > 3) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existe");
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("boa viagem");
} else {
  console.log("Desculpe, tivemos um erro");
}

for (let cont = 0; cont < 3; cont++) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
  }
}
