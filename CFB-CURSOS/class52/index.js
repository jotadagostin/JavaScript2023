// Objetos:

class Carro {
  constructor(pnome, ptipo) {
    this.nome = pnome;
    if (ptipo == 1) {
      this.tipo = "Esportivo";
      this.velmax = 300;
    } else if (ptipo == 2) {
      this.tipo = "Utilitario";
      this.velmax = 100;
    } else if (ptipo == 3) {
      this.tipo = "Passeio";
      this.velmax = 160;
    } else {
      this.tipo = "Militar";
      this.velmax = 180;
    }
  }
  getNome() {
    return this.nome;
  }
  getTipo() {
    return this.tipo;
  }
  getvelmax() {
    return this.velmax;
  }
  getInfo() {
    return [this.nome, this.tipo, this.velmax];
  }
  info() {
    console.log(`Nome: " + ${this.nome}`);
    console.log(`Tipo: " + ${this.tipo}`);
    console.log(`V.Max: " + ${this.velmax}`);
  }
}

let c1 = new Carro("Rapidao", 1);
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Bombadao", 4);
let c4 = new Carro("Carrego Tudo", 3);

c1.info();
c2.info();
c3.info();
