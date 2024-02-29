import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "1122334432";

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = "1166664432";

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const const2 = new contaCorrente();
conta2.cliente = null;
conta2.cliente.nome = "Alice";
conta2.cliente.cpf = 1166664432;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log("Valor: ", valor);
console.log(conta2);
