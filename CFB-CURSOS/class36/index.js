// stop propagation

const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll("cursos")];

caixa1.addEventListener("click", (evento) => {
  console.log("clicou!");
  console.log(evento);
});

cursos.map((elemento) => {
  evento.stopPropagation();
});

btn_c1.addEventListener("click", () => {
  evento.stopPropagation();
});
