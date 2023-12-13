const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [16, 12, 10, 17, 15, 13, 11];
p_array.innerHTML = "[" + elementos_array + "]";

btnVerificar.addEventListener("click", (evt) => {
  const retorno = elementos_array.some((e, i) => {
    if (e < 18) {
      resultado.innerHTML = "Array nao conforme na posicao do " + i;
    }
    return e >= 18;
  });
  if (retorno) {
    resultado.innerHTML = "OK";
  }
});
