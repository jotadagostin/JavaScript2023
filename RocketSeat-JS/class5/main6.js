const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;

  const regex = /\D+/g;
  if (regex.test(value)) {
    alert("Padrao ok, encontrado");
  }
  //const value = input.value.replace(Regex, "");
  //console.log(value);
});
//
