const showMessage = () => {
  console.log("Hello jota");
};

console.log(showMessage);
showMessage();

const showMessage2 = (username, email) => {
  console.log(`HELLO, ${username}. Your email is: ${email}`);
};

showMessage2("Maria", "maria@gmail.com");

function execute(taskName, callback) {
  console.log("Executando a tarefa: ", taskName);
  callback();
}

function callback() {
  console.log("tarefa finalizada");
}

//passando para a funcao
execute("Download do arquivo...", callback);

//criando a funcao no proprio parametro
execute("upload do arquivo..", function () {
  console.log("Funcao de callback com uma funcao anonima");
});

//Utilizando ArrowFunction

execute("Excluindo arquivo... ", () => {
  console.log("Arquivo excluido");
});

execute("Salvando arquivos: ", () => console.log("Arquivo salvo"));
