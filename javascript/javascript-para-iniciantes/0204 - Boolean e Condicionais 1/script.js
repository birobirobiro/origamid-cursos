var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

var nome = "10kg" + 10; //NaN

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

// Falsy
if (false);
if (0);
if (NaN);
if (null);
if (undefined);
if ("");

// Truthy
if (true);
if (1);
if (" ");
if ("joao");
if (-5);
if ({});

// Operador lógico de negação
if (!true); //false
if (!1); //false
if (!""); //true
if (!undefined); //true
if (!!" "); //true
if (!!""); //false

if (!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log("Não possui graduação");
}

// Operadores de comparação

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

// Operadores de comparação ==

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true
