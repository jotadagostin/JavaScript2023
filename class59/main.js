// polimorfimos

class Carro {
  constructor(tipo, estagioTurbo) {
    this.turbo = new Turbo(estagioTurbo);
    if (tipo == 1) {
      this.velocidadeMax = 120;
      this.nome = "normal";
    } else if (tipo == 2) {
      this.velocidadeMax = 160;
      this.nome = "esportivo";
    } else if (tipo == 3) {
      this.velocidadeMax = 200;
      this.nome = "super esportivo";
    }
    this.velocidadeMax = this.turbo.potencia;
  }
  info() {
    console.log(this.nome);
    console.log(this.velocidadeMax);
    console.log(this.turbo);
    console.log("------------------");
  }
}

class Turbo {
  constructor(e) {
    if (e == 0) {
      this.potencia = 0;
    } else if (e == 1) {
      this.potencia = 50;
    } else if (e == 2) {
      this.potencia = 75;
    } else if (e == 3) {
      this.potencia = 100;
    }
  }
}

class CarroEspecial extends Carro {
  constructor(estagioTurbo) {
    super(4, estagioTurbo);
    this.tipoInfo = 1;
    this.velocidadeMax = this.turbo.potencia;
    this.nome = "Carro especial";
  }
  info() {
    if (this.tipoInfo == 1) {
      super.info();
    } else {
      console.log(`${this.nome}`);
      console.log(`${this.velocidadeMax}`);
      console.log(`${this.turbo.potencia}`);
      console.log("------------------");
    }
  }
}
const c1 = new Carro(1, 0);
const c2 = new Carro(1, 1);
const c3 = new CarroEspecial(3);

c1.info();
c2.info();
c3.info();
