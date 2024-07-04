fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((r) => r.json())
  .then((jsonBody) => {
    document.querySelector("#app").innerHTML = jsonBody[0].nome;
    console.log(jsonBody);
  });

const data = {
  id: "birobirobiro",
  nome: "João",
  email: "contaparateste@gmail.com",
  senha: "123456",
  cep: "123456",
  rua: "Rua de teste",
  numero: "230",
  bairro: "Liberdade",
  cidade: "São Paulo",
  estado: "SP",
};

fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
