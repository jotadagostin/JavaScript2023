// MAP

// const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React"];

// cursos.map((el, i) => {
//   console.log("Curso: " + el + " - Posicao do curso: " + i);
// });

// let c  = cursos.map((el, i) => {
//     return
// })

// console.log(c);

// let el = document.getElementsByTagName("div");
// el = [...el];

// el.map((e, i) => {
//   e.innerHTML = "CBF CURSOS";
// });

// console.log(el);

// const elementos = document.getElementsByTagName("div");
// const valores =  Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML)
// console.log(valores);

const converterInt = (e) => parseInt(e);
let num = ["1", "2", "3", "4", "5"].map(converterInt);

console.log(num);
