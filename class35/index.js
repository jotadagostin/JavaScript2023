const caixa1 = document.getElementById("#caixa1");
const caixa2 = document.getElementById("#caixa2");
const btn = document.getElementById("#btn_copiar");
const todosCursos = [...document.querySelectorAll("curso")];

todosCursos.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const curso = evento.target
    })
})