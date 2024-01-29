// export default function getTodosCursos() {
//   return cursos;
// }

// function getCursos(i_curso) {
//   return cursos[i_curso];
// }

// export { cursos, getCursos };

class Cursos {
  static cursos = ["Javascript", "HTML", "CSS", "Python", "C#"];
  constructor() {}

  static getTodosCursos = () => {
    return this.cursos;
  };
  static getCursos = (i_cursos) => {
    return this.cursos[i_cursos];
  };
  static addCursos = (novoCurso) => {
    this.cursos.push(novoCurso);
  };
  static apagarCursos = () => {
    this.cursos = [];
  };
}

export default Cursos;
