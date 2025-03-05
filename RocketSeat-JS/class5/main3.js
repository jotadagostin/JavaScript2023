const input = document.querySelector("input");

//input.setAttribute("", "");
//input.removeAttribute("");

//EVENTS:

window.addEventListener("load", () => {
  console.log("A pagina foi carregada");
});

addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.textContent);
});
