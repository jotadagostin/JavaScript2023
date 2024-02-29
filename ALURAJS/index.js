class Cliente {
  nome;
  cpf;
}

class contaCorrente {
  agencia;
  saldo = 0;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return valor;
    }
    this.saldo += valor;
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "1122334432";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "1166664432";

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRicardo);
