//objetos literais

const objetos = document.getElementById("objetos");

const computador = {
  cpu: "i9",
  ram: "64gb",
  hd: "2tb",
  info: function () {
    console.log(`cpu: ${this.cpu}`);
    console.log(`ram: ${this.ram}`);
    console.log(`hd: ${this.hd}`);
  },
};

computador["monitor"] = "22pl";
console.log(computador);

const computadores = [
  {
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
  },
  {
    cpu: "i5",
    ram: "32gb",
    hd: "2tb",
  },
  {
    cpu: "i7",
    ram: "64gb",
    hd: "4tb",
  },
];

// objetos.innerHTML = JSON.stringify(computadores);
computadores.forEach((c) => {
  const div = document.createElement("div");
  div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd;
  div.setAttribute("class", "computador");
  objetos.appendChild(div);
});
