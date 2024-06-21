// Função comum

// function upperName(name) {
//   return name.toUpperCase();
// }

// Função como variável

// const upperName = function (name) {
//   return name.toUpperCase();
// };

// Arrow function

// const upperName = (name) => {
//   return name.toUpperCase();
// };

// Omitindo return e chaves
const upperName = (name) => name.toUpperCase();

const countLetters = (word) => word.length;

console.log(countLetters("André"));

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    // sem o arrow function ele não iria funcionar
    this.menuElement.addEventListener("click", (event) =>
      event.target.classList.add(this.activeClass)
    );
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();

console.log(menu);
