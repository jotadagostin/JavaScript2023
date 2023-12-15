const caixa = document.querySelector("#caixa");

let musicas = new Set(["musica 1", "musica boa", "musica10"]);

musicas.add("msuica muito legal");
musicas.add("musica1");
musicas.add("musica1");
musicas.add("musica10");
musicas.delete("musica1");
console.log(musicas);

// set nao permite entradas duplicadas, maior vantangem usando o set

musicas.forEach((el) => {
  caixa.innerHTML += el + "<br/> ";
});
