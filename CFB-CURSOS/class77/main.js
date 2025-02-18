const f_texto = document.querySelector("#f_texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", (evt) => {});

let num = 12;
const curso = "Javascript";
window.localStorage.setItem("numero", num);
window.localStorage.setItem("curso", curso);
alert(localStorage.getItem("numero", curso));
localStorage.getItem("curso", curso);
localStorage.clear();
