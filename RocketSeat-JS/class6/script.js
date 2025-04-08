const user = {
  name: "Rodrigo",
  message: function () {
    // console.log(`Hello ${user.name}`);
    console.log(`Hello ${this.name}`);
  },
};

user.message();

const product = {
  name: "teclado",
  quantity: 100,
};

console.log(product.name);

product.quantity = 90;
console.log(product.quantity);
product.name = "Mouse";
console.log(product.name);

product["quantity"] = 50;
console.log(product);
