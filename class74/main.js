const carro = document.getElementById("carro");
const btn_esquerda = document.getElementById("btn_esquerda");
const btn_direita = document.getElementById("btn_direita");

const init = () => {
  carro.style = "position: relative; left: 0px";
};

btn_esquerda.addEventListener("click", () => {
  carro.style.left = parseInt(carro.style.left) - 10 + "px";
});

btn_direita.addEventListener("click", () => {
  let position = parseInt(carro.style.left);
  position += 10;
  carro.style = `position: relative; left:${position}px`;
});

window.onload = init;
//window.addEventListener("load", init());
