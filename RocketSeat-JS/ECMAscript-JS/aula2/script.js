// metodo map chama a funcao de callback

const products = ["teclado", "mouse", "monitor"];

// percorrendo os itens do array
products.map((product) => {
  console.log(product);
});

// sintaxe reduzida
products.map((product) => console.log(product));

//utilizando o novo objeto retornado:
const formatted = products.map((product) => {
  //   return product.toUpperCase();
  return {
    id: Math.random(),
    description: product,
    price: 150,
  };
});
console.log(formatted);

// metodo filter: cria um novo array com todos os elementos que passaram na condicao:

const words = ["javascript", "HTML", "CSS", "WEB"];

// filtrando palavras que tenham mais que 3 letras
const result = words.filter((word) => word.length > 3);
console.log(result);

const productsGaming = [
  { description: "Teclado", price: 150, promotion: true },
  { description: "Mouse", price: 350, promotion: false },
  { description: "Monitor", price: 950, promotion: true },
];

//exemplo filtro produtos na promocao:
const promotion = productsGaming.filter(
  (product) => product.promotion === true
);
console.log(promotion);

// metodo findIndex(): retorna o indice do Array: quando nao encontra ele retorna -1

const values = [4, 6, 8, 12];
//obtendo o primeiro indice do elemento que o valr eh maior que quatro
const index = values.findIndex((value) => value > 4);
console.log(index);
console.log(values[index]);
console.log(values.findIndex((value) => value > 12));
