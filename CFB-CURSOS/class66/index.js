const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_prompt = document.getElementById("btn_prompt");

btn_alert.addEventListener("click", (evt) => {
  alert("Hello, how are you?");
});

btn_confirm.addEventListener("click", (evt) => {
  const ret = confirm("are you learning a lot?");
  if (ret) {
    console.log("ok button pressed");
  } else {
    console.log("button cancel pressed");
  }
});

btn_prompt.addEventListener("click", (evt) => {
  const nome = prompt("whats your name?");
  if (nome == null) {
    console.log("button cancel pressed");
  } else {
    console.log("Name typed: ", nome);
  }
});
