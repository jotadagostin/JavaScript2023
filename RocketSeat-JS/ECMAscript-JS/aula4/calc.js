export class Calc {
  sum(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
} //quando coloca uma function dentro da classe nao precisa da palavra function

//default export = e a funcao padrao fornecida pelo modulo
// function sum(a, b) {
//   return a + b;
// }

//name export = cada metodo e importado pelo seu proprio nome de exportacao
// function multiply(a, b) {
//   return a * b;
// }
