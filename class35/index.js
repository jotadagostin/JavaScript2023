const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_copiar");
const todosCursos = [...document.querySelectorAll(".curso")];
const cursosSelecionados = [...document.querySelectorAll(".selecionado")];

todosCursos.map((elemento) => {
  elemento.addEventListener("click", (evento) => {
    const curso = evento.target;
    curso.classList.toggle("selecionado");
  });
});

btn.addEventListener("click", () => {
  const selecionados = [...document.querySelectorAll(".selecionado")];
  selecionados.map((elemento) => {
    caixa2.appendChild(elemento);
  });
});

cursosSelecionados.map((elemento) => {
  elemento.addEventListener("click", (evento) => {
    const curso = evento.target;
    curso.classList.remove("selecionado");
  });
});





// toggle add and remove the classlist
