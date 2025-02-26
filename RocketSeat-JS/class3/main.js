//Operarador condincional ternario:

let age = 16;

console.log(age >= 18 ? "Voce poder dirigir" : "Voce nao pode dirigir");

console.log(age < 18 ? "Voce nao pode dirigir" : "Voce pode dirigir");

console.log("=== EXEMPLOS DE FALSE ===");

//IF ELSE

let age2 = 23;

if (age2 < 18) {
  console.log("Voce nao pode dirigir");
} else {
  console.log("Voce pode dirigir");
}

// IF ELSE IF

//if (hour <= 12) {
//console.log("Bom dia");
//}
//if (hour > 18) {
//console.log("Boa noite");
//}
//if (hour > 12) {
//console.log("Boa tarde");
//}

let hour = 19;

if (hour <= 12) {
  console.log("Bom dia");
} else if (hour > 12 && hour <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
