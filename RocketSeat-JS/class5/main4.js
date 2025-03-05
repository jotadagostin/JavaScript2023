const ul = document.querySelector("ul");

ul.addEventListener("scroll", (event) => {
  if (ul.scrollTop > 100) {
    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const form = document.querySelector("form");

//const button = document.querySelector("button");
//button.addEventListener("click", (event) => {
//event.preventDefault();
//console.log("click");
//});

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Voce fez submit no form");
};
