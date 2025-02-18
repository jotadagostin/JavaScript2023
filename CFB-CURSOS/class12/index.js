// Spread Operator: broke the Array and spred

// const player1 = { nome: "bruno", energia: 100, vidas: 3 , magia: 150};
// const player2 = { nome: "pedro", energia: 110, vidas: 5 , velocidade: 190};
// const player3 = { ...player1, ...player2 };
// // let n1 = [10, 20, 30];
// // let n2 = [20, 30, 40, 50];
// // let n3 = [...n1,...n2]

// // console.log("n1: " + n1);
// // console.log("n2: " + n2);
// // console.log("n3: " + n3);
// console.log(player3);

// const soma = (v1, v2, v3) => {
//   return v1 + v2 + v3;
// };

// let valores = [1,5,4]
// console.log(soma(...valores));

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(element => {
    element.innerHTML="curso"
});
console.log(objs1);
console.log(objs2);
