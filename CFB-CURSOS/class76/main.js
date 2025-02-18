const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
  let estadoValicidacao = f_nota.validity;

  if (estadoValicidacao.valueMissing) {
    f_nota.setCustomValidity("este campo eh obrigatorio");
  }
  // f_nota.reportValidity();
  f_msg.innerHTML = f_nota.validationMessage;
  evt.preventDefault();
});
