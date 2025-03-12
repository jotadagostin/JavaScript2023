const input = document.querySelector("input");
const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();

  const value = input.value;
  const hasNumberRegex = /\d+/g;

  if (hasNumberRegex.test(value)) {
    alert("O texto contem numero, por favor digite corretamente");
  } else {
    alert("enviado!");
  }
};
