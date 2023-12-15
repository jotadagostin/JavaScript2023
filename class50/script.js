const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso", "Javascript");
mapa.set(10, "CFB Cursos");
mapa.set(1, 100);

console.log(mapa);

// has verifica se a chave esta na colecao
let pes = 10;
let res = "";
if (mapa.has(pes)) {
  res = "A chave existe na colecao: " + mapa.get(pes);
} else {
  res = "A chave NAo esta na colecao";
}
res += "<br/> O tamanho da colecao e: " + mapa.size;

caixa.innerHTML = res;

mapa.forEach((el) => {
  console.log(el);
});
