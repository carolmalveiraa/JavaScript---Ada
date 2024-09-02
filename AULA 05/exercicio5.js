// 5. **Exercicios Desafiador:**

//     Escreva um programa em JavaScript cria uma lista de contatos, com dados inputados pelo usuário, dados para salvar:

//     - Nome
//     - Telefone
//     - Idade
//     - Profissão

//     O usuário deve inputar dados de 5 contatos.

//     Ao final o programa deve mostrar uma lista com os contatos.

let contatos = [];

contatos.push({
  nome: "Carol",
  telefone: "9999-0000",
  idade: "23",
  profissao: "Dev",
});
contatos.push({
  nome: "Lucas",
  telefone: "8888-1111",
  idade: "30",
  profissao: "Designer",
});
contatos.push({
  nome: "Júlia",
  telefone: "7777-2222",
  idade: "28",
  profissao: "Gerente",
});
contatos.push({
  nome: "Emanuella",
  telefone: "6666-2222",
  idade: "23",
  profissao: "RH",
});
contatos.push({
  nome: "Cristina",
  telefone: "5555-2222",
  idade: "23",
  profissao: "Administração",
});

console.log("Lista de contatos:");
for (let i = 0; i < contatos.length; i++) {
  console.log(`Contato ${i + 1}:`);
  console.log(`Nome: ${contatos[i].nome}`);
  console.log(`Telefone: ${contatos[i].telefone}`);
  console.log(`Idade: ${contatos[i].idade}`);
  console.log(`Profissão: ${contatos[i].profissao}`);
  console.log();
}
