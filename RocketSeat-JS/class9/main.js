// exibe a data e hora atual
console.log(new Date(2024, 6, 3)); //ano, mes e dia.
// exibe a data e hora de referencia(considera o fuso)
console.log(new Date(0));
// exibe o numero de milesegundos
console.log(new Date().getTime());

//define data(ano, mes e dia) e hora(minuto e segundo):
console.log(new Date(2024, 6, 3, 14, 30, 0));
console.log(new Date("2024-07-03T14:30:00"));

let date = new Date("2024-07-02T14:30:10");
// dia da semana contando de zero a 6 (domingo sempre 0, segunda 1, terca 2)
console.log(date.getDay());
//Dia do mes (0  a 30):
console.log(date.getDate());
// Mes:
console.log(date.getMonth() + 1);
//ano :
console.log(date.getFullYear());
//horas:
console.log(date.getHours());
// minutes:
console.log(date.getMinutes());
//segundos:
console.log(date.getSeconds());

let date2 = new Date("July 3, 2024 14:30:30");

//modificar o ano:
date2.setFullYear(2030);
//modificar o mes:
date2.setMonth(7); //mes comeca com zero
//modificar o dia:
date.setDate(10);
//modificar a hora:
date2.setHours(18);
//modificar o minuto:
date2.setMinutes(15);
//modificar os segundos;
date2.setSeconds(23);
console.log(date2);

let date3 = new Date("2024-07-02t14:30:30");
console.log(date.getDate().toString().padStart(2, "0"));

//formata o dia para 2 digitos
let day = (date3.getDate() + 1).toString().padStart(2, "0");
// console.log(day);

//formata o mes para ter 2 digitos
let month = (date3.getMonth() + 1).toString().padStart(2, "0");
// console.log(month);

let year = date3.getFullYear();
let hour = date3.getHours();
let minute = date3.getMinutes();

console.log(`${day}/${month}/${year} as ${hour}: ${minute}`);

let myDate = new Date("2024-07-02t14:30:30");
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

//data e hora formatada de acordo com a localidade:

let myNewDate = new Date("2024-07-02T14:00:00");
//exibe a data e hora no formato local:
console.log(myNewDate.toLocaleDateString("en"));
console.log(myNewDate.toLocaleTimeString("en"));

console.log("-------------------------------------------------------------");

let myNewDate2 = new Date("2024-07-02T14:00:00");
console.log(myNewDate2.toLocaleString("en"));
console.log(
  myNewDate2.toLocaleString("pt", {
    dateStyle: "medium",
  })
);

console.log(
  myNewDate2.toLocaleString("pt-br", {
    hour: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  })
);

let amount = 12.4;
console.log(
  amount.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
);
console.log("------------------------------------------------------");

//toLocaleString perminte minupar valores de data, hora e strings.

// Intl e  a API de Internacionalizacao do ECMAScript:

const currentLocale = Intl.DateTimeFormat().resolvedOptions();
console.log(currentLocale);
//exibe de acordo com a localidade:
console.log(new Intl.DateTimeFormat("pt-br").format(new Date()));
console.log(new Intl.DateTimeFormat("en-br").format(new Date()));

const topDate = new Date();
console.log(topDate.getTimezoneOffset());
console.log(topDate.getTimezoneOffset() / 60);

const dateWithTimeZone = new Date("2023-12-13T22:56:30.603+03:00");
console.log(dateWithTimeZone.toLocaleString());
