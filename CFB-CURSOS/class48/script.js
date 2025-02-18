const caixa = document.querySelector("#caixa");

let cores = ["azul", "verde", "vermelho", ["claro", "escuro", "médio"]];
let cursos = ["HTML", "CSS", "Javascript", cores];

cursos.push("c++");
// inicio add
cursos.unshift("Python");
// final add
cursos.pop();
//  remove inicio
cursos.shift();
// remove final

cursos.map((elemento) => {
  let p = document.createElement("p");
  p.innerHTML = elemento;
  caixa.appendChild(p);
});
