const pessoa = {
  nome: "Bruno",
  canal: "CFB Cursos",
  curso: "Javascript",
  aulas: {
    aula1: "Introducao",
    aula2: "Variaveis",
    aula3: "Constantes",
  },
};

const string_pessoa = `{"nome":"Bruno","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula1":"Introducao","aula2":"Variaveis","aula3":"Constantes"}}`;
const s_json_pessoa = JSON.stringify(pessoa);
const o_json_pessoa = JSON.parse(s_json_pessoa);
console.log(pessoa);
console.log(s_json_pessoa);

// stringfy objeto em string
// parse json em objeto
