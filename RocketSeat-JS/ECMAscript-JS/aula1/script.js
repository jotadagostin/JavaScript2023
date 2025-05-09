// Strict mode: ativando esse modo, os erros que eram

function showMessage() {
  personName = "Rodrigo Silva";

  console.log("Ola", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
// student.point = 10;

console.log(student.point);
