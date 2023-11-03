"use scrict";

function test() {
  let myName = "Joao Paulo Dagostin";
  if (true) {
    console.log("inside the IF of teste " + myName);
  }
  console.log("inside the test: " + myName);
}

test();

console.log("outside the test: " + myName);

const myName = "Joao Paulo Dagostin"
myName = "Pedro"
console.log(myName);
// you can not change a const value like let or var