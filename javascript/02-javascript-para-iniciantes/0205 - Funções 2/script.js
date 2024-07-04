// Pode ou não retornar um valor

// Quando não definimos um return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(20, 1.8);
// console.log(())

// Valores retornados

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("sadmkasm"));

// Cuidado ao retornar tipos de dados diferentes na mesma função.

// Escopo
var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));

// Escopo Léxico
// Função conseguem acessar variáveis que foram criadas no contexto pai

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

// Hoisting

// Antes de executar uma função, o JS 'move' toda as funções declaradas para a memória

imc(80, 1.8); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
