import { Cliente } from "./Cliente.js";

export class contaCorrente {
  agencia;
  _cliente;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this.cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  _saldo = 0;

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return valor;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    conta.cidade = "Sao Paulo";
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
