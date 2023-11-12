// Events:

// const c1 = document.getElementById("c1");
const cursos = [...document.querySelectorAll(".curso")];

cursos.map((elemento) => {
  elemento.addEventListener("click", (evento) => {
    const elemento = evento.target;
    elemento.classList.add("destaque");
    console.log(elemento.id + " foi clicado!");
  });
});

const msg = () => {
  alert("clicou!");
};
