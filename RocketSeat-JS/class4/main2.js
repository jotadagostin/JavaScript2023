function sum(a, b) {
  let result = a + b;

  return result;
}

let response = sum(7, 7);
console.log(response);
console.log(sum(5, 6));

console.log("=======================================");

showMessage("Hello, world!");

function showMessage(message) {
  console.log(message);
  endLine();

  function endLine() {
    console.log("-------------------");
  }
}

showMessage("Tudo bem?");
