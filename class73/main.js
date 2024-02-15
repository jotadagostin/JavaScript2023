//functions para strings:

let nome = new String("Bruno Santos");
let nome2 = new String("Bruno Santos");
let canal = new String("CFB Cursos");

// console.log(nome);
// console.log(typeof nome);

// console.log(nome.charAt(0));

// nome = nome.concat(canal);
// console.log(nome.concat(canal));

// console.log(nome.lastIndexOf("o"));

console.log(nome.localeCompare(nome2));
// paracomparar strings

console.log(nome.replace("B", "P"));
console.log(nome.search("Santos"));
console.log(nome.slice(3, 10));

let arr_nome = nome.split("");
console.log(arr_nome);

//substring

let parte1 = nome.substring(0, 5);
let parte2 = nome.substr(6, 5);
console.log(parte1.toUpperCase());
console.log(parte2.valueOf());

let num = 10;
console.log(typeof num);
