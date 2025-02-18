// funcoes parametrizadas(valores para dentro da funcao)
const standart_value = 0 

let valor = 0

function add(v) {
    return valor+v
}
valor = add(10)
console.log(valor);

// and 

function soma(n1=standart_value, n2=standart_value) {
  let res;
  res = n1 + n2;
  return res;
}

let res_soma = soma(5, 5);
console.log(res_soma);
