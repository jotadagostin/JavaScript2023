const input = document.querySelector("input");

//input.setAttribute("", "");
//input.removeAttribute("");

//EVENTS:

window.addEventListener("load", () => {
  console.log("");
});

addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.textContent);
});
