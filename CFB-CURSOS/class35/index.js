const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn_transferir = document.querySelector("#btn_transferir");
const todosCursos = [...document.querySelectorAll(".curso")];


todosCursos.map((elemento) => {
  elemento.addEventListener("click", (evento) => {
    const curso = evento.target;
    curso.classList.toggle("selecionado");
  });
});

btn_transferir.addEventListener("click", () => {
  const selecionados = [...document.querySelectorAll(".selecionado")];
  const naoSelecionados = [...document.querySelector(".curso:not(.selecionado")]
  selecionados.map((elemento) => {
    caixa2.appendChild(elemento);
  });
  selecionados.map((elemento) => {
    caixa1.appendChild(elemento);
  });
});







// toggle add and remove the classlist
