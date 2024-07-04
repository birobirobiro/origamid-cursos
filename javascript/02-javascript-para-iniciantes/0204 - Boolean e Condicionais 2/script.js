// OPERADOR ˆ&&
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; //Cão
5 - 5 && 5 + 5; // 0
"Gato" && false; //false
5 >= 5 && 3 < 6; //true

// Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos. Quando encontra primeiro false ele já retorna o valor (false)

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", console.log(condicional));
} else {
  console.log("Falso");
}

// OPERADOR OU
true || true; //true
true || false; //true
false || true; //true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; //10
"Gato" || false; //Gato
5 >= 5 || 3 < 6; //true

// Retorna o primeiro valor true que encontrar

var condicional2 = 5 - 5 || (5 + 5 && 10 - 2);
console.log(condicional2);

// Switch

var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Fecha os olhos.");
}
