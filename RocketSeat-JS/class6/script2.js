const user = {
  id: 1,
  name: "Rodrigo",
  adress: {
    street: "Avenida Brasil",
    city: "Sao Paulo",
    geo: {
      latitude: 47.808,
      longitude: 17.5674,
    },
  },
  message: function () {
    console.log(`Ola, ${this.name}!`);
  },
};

console.log(user?.adress?.street);
user.message?.();
