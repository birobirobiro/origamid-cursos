// Qual o resultado da seguinte expressão?

var total = 10 + (5 * 2) / 2 + 20;
console.log(total); // 35

// Crie duas expressões que retornem NaN

var seguidores = 20 + "mil";
var total = seguidores * 10;
var total2 = seguidores / 10;
console.log(total, total2);

// Somar a string '200' com o número 50 e retornar 250

var numero1 = +"200";
var numero2 = 50;
console.log(numero1 + numero2);

// Incremente o número 5 e retorne o seu valor incrementando

var x = 5;
var incremento = ++x;
console.log(incremento);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg"; // '80kg'
var peso = numero;
var pesoPorDois = peso / 2 + unidade; // NaN (Not a Number)
console.log(pesoPorDois);
