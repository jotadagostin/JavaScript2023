const adress1 = {
  street: "Av Brasil",
  number: 20,
};

//referencia na memoria, nao e uma copia
// const adress2 = adress1;
// adress2.number = 30;
// console.log(adress2);

// aqui estamos criando um novo objeto utilizando as propriedades e valores de adress1[Opcao 1]
// const adress2 = {
//   ...adress1,
// };
// adress2.number = 30;
//

const adress2 = { ...adress1, number: 30 };
console.log(adress1, adress2);

// referencia de array
const list1 = ["Apple", "Banana"];
// const list2 = list1; //nao e copia, mas referencia

// list2.push("Watermalon");
const list2 = [...list1];
list2.push("Watermalon");
console.log(list1, list2);

// Shalow coppy(copia superficial): nao pega os itens alinhados

const htmlCourse = {
  course: "HTML",
  students: [{ name: "Rodrigo", email: "rodrigo@gmail.com" }],
};

// shallow copy
// const jsCourse = {
//   ...htmlCourse,
//   course: "Javascript",
// };

//vai modificar o htmlCourse tambem porque students e uma referencia e nao uma copia
// jsCourse.students.push({ name: "Joao", email: "joao@email.com" });
// console.log(htmlCourse, jsCourse);

// deep copy(copia profunda) copia tudo
const jsCourse = {
  ...htmlCourse,
  course: "Javascript",
  students: [...htmlCourse.students, { name: "Jota", email: "jota@gmail.com" }],
};

jsCourse.students.push({ name: "tiago", email: "tiago@email.com" });
console.log(htmlCourse, jsCourse);

// shadow freezing:

const book = {
  title: "Objetos imutaveis",
  category: "Javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@gmail.com",
  },
};

//o js em si nao impoe restricoes a modificacao dos objetos:
// book.category = "HTML";
// congela o objeto e impede a modificacao
Object.freeze(book);
book.category = "CSS";
book.author.name = "Joao"; //nao impede modficicacoes profunda em bojetos alinhados
console.log(book);

//-----------------------------------------------------------------------------
const Libro = {
  title: "Objetos Imutaveis, part2",
  category: "javascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@gmail.com",
  },
};

function deepFreeze(object) {
  //obtem um array com toda as props do objeto
  const props = Reflect.ownKeys(object);

  //itera sobre toda as propriedades do objeto
  for (const prop of props) {
    //obtem o valor associado a propriedade atual
    const value = object[prop];

    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

//chama a funcao para congelar o objeto com deep Freeze(congelamento profundo)
deepFreeze(Libro);
book.category = "HTML";
console.log(Libro);

const updatedBook = {
  ...Libro,
  title: "Criando um front-end moderno com HTML",
  category: "HTML",
  type: "Programming",
};

console.log("-------------------------");
//Original intacto
console.log(Libro);
//Modificado
console.log(updatedBook);
//desestruturacao:
const { author, ...bookWithoutCategory } = Libro;
console.log(bookWithoutCategory);

//deep freezy
