//setTimeout() executa uma funcao apos um intervalo de tempo especificado.

setTimeout(() => {
  console.log("Hello world!");
}, 1000); // tempo em milisegundos

//setInterval() executa uma funcao apos um intervalo de tempo

// let value = 10;

// const interval = setInterval(() => {
//   console.log(value);
//   //   value = value - 1;
//   value--; //short sintex

//   if (value === 0) {
//     console.log("Feliz ano novo!");
//     clearInterval(interval);
//   }
// }, 1000);

//funcao que retorna uma promisse:

function asyncFunction() {
  return new Promise((resolve, reject) => {
    //simular uma operacao assincrona.

    setTimeout(() => {
      const isSucess = true;

      if (isSucess) {
        resolve("A operacao foi concluida com sucesso");
      } else {
        reject("algo deu errado");
      }
    }, 3000); //simula uma op assync que leva 3s
  });
}

console.log("Executando funcao assinctrona: ");

// vizualizando que o retorno e uma promisse:
asyncFunction()
  .then((response) => {
    console.log("Sucesso", response);
  })
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => {
    console.log("fim da execucao");
  });
