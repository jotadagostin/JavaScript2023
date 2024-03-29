import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 1122334432);
const cliente2 = new Cliente("Alice", 1166664432);

const contaCorrenteRicardo = new contaCorrente(1001, cliente1);
numeroDeConta++;

contaCorrenteRicardo.depositar(500);
const conta2 = new contaCorrente(102, cliente2);
numeroDeConta++;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(contaCorrente.numeroDeConta);
