const carro = document.getElementById("carro");
const btn_esquerda = document.getElementById("btn_esquerda");
const btn_direita = document.getElementById("btn_direita");
const btn_parar = document.getElementById("btn_parar");

const init = () => {
  carro.style = "position: relative; left: 0px";
};

let anima = null;

const move = (direcao) => {
  carro.style.left = parseInt(carro.style.left) - 10 * direcao + "px";
  anima = setTimeout(move, 20, direcao);
};

btn_parar.addEventListener("click", () => {
  clearTimeout(anima);
});

btn_esquerda.addEventListener("click", () => {
  clearTimeout(anima);
  move(-1);
});

btn_direita.addEventListener("click", () => {
  clearTimeout(anima);
  move(1);
});

window.onload = init;
//window.addEventListener("load", init());
