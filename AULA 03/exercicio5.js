// ### 5. Procurando melhor aluno da escola

// Dada a escola a seguir, cria um algoritmo que encontre qual o aluno que teve a melhor nota do ano:

const Escola = {
  primeiroAno: [
    { nome: "Ana Clara", idade: 7, notas: [8, 9, 7, 10] },
    { nome: "Lucas Gabriel", idade: 7, notas: [7, 6, 8, 9] },
    { nome: "Mariana Silva", idade: 7, notas: [10, 9, 8, 10] },
    { nome: "João Pedro", idade: 7, notas: [6, 7, 7, 8] },
    { nome: "Isabela Costa", idade: 7, notas: [9, 8, 9, 10] },
    { nome: "Rafael Lima", idade: 7, notas: [8, 7, 7, 9] },
    { nome: "Gabriela Souza", idade: 7, notas: [7, 6, 8, 8] },
    { nome: "Miguel Alves", idade: 7, notas: [10, 9, 8, 9] },
  ],
  segundoAno: [
    { nome: "Pedro Henrique", idade: 8, notas: [6, 7, 7, 8] },
    { nome: "Julia Maria", idade: 8, notas: [9, 10, 9, 10] },
    { nome: "Rafael Augusto", idade: 8, notas: [8, 7, 8, 9] },
    { nome: "Carla Beatriz", idade: 8, notas: [7, 6, 7, 8] },
    { nome: "Fernando José", idade: 8, notas: [8, 9, 7, 9] },
    { nome: "Camila Oliveira", idade: 8, notas: [9, 10, 8, 9] },
    { nome: "Vinícius Almeida", idade: 8, notas: [7, 7, 8, 8] },
    { nome: "Sofia Santos", idade: 8, notas: [10, 9, 10, 10] },
  ],
  terceiroAno: [
    { nome: "Carla Fernanda", idade: 9, notas: [8, 9, 7, 10] },
    { nome: "Bruno Ricardo", idade: 9, notas: [7, 6, 8, 9] },
    { nome: "Fernanda Lima", idade: 9, notas: [10, 9, 8, 10] },
    { nome: "Thiago Azevedo", idade: 9, notas: [6, 7, 6, 8] },
    { nome: "Laura Melo", idade: 9, notas: [9, 8, 9, 10] },
    { nome: "Felipe Nunes", idade: 9, notas: [8, 8, 7, 9] },
    { nome: "Isabel Cristina", idade: 9, notas: [7, 6, 7, 8] },
    { nome: "Guilherme Borges", idade: 9, notas: [10, 9, 8, 9] },
  ],
  quartoAno: [
    { nome: "Tiago Matos", idade: 10, notas: [6, 7, 6, 8] },
    { nome: "Gabriela Costa", idade: 10, notas: [9, 10, 8, 10] },
    { nome: "Felipe Silva", idade: 10, notas: [8, 8, 7, 9] },
    { nome: "Larissa Campos", idade: 10, notas: [7, 6, 7, 8] },
    { nome: "Leonardo Mendes", idade: 10, notas: [9, 9, 8, 9] },
    { nome: "Bruna Ferreira", idade: 10, notas: [8, 7, 8, 8] },
    { nome: "Caio Figueira", idade: 10, notas: [7, 8, 9, 7] },
    { nome: "Daniel Rocha", idade: 10, notas: [10, 9, 10, 10] },
  ],
  quintoAno: [
    { nome: "Laura Pereira", idade: 11, notas: [10, 9, 8, 10] },
    { nome: "João Paulo", idade: 11, notas: [7, 7, 8, 9] },
    { nome: "Isabela Costa", idade: 11, notas: [9, 8, 10, 9] },
    { nome: "Mariana Lopes", idade: 11, notas: [8, 9, 7, 9] },
    { nome: "Henrique Andrade", idade: 11, notas: [7, 6, 8, 8] },
    { nome: "Letícia Barbosa", idade: 11, notas: [9, 10, 9, 10] },
    { nome: "Rafaela Martins", idade: 11, notas: [8, 7, 7, 9] },
    { nome: "Gustavo Almeida", idade: 11, notas: [10, 9, 8, 10] },
  ],
  sextoAno: [
    { nome: "Lucas Fernandes", idade: 12, notas: [6, 7, 8, 7] },
    { nome: "Sophia Rodrigues", idade: 12, notas: [10, 9, 8, 10] },
    { nome: "Miguel Souza", idade: 12, notas: [8, 8, 7, 9] },
    { nome: "Nicole Almeida", idade: 12, notas: [7, 7, 8, 9] },
    { nome: "Rafael Costa", idade: 12, notas: [9, 8, 7, 8] },
    { nome: "Mariana Oliveira", idade: 12, notas: [8, 9, 9, 10] },
    { nome: "Gabriel Santos", idade: 12, notas: [7, 6, 8, 8] },
    { nome: "Isabela Cardoso", idade: 12, notas: [10, 10, 9, 10] },
  ],
  setimoAno: [
    { nome: "Maria Clara", idade: 13, notas: [9, 9, 8, 10] },
    { nome: "Carlos Eduardo", idade: 13, notas: [7, 6, 8, 7] },
    { nome: "Fernanda Souza", idade: 13, notas: [10, 9, 9, 10] },
    { nome: "Tiago Silva", idade: 13, notas: [8, 7, 7, 8] },
    { nome: "Beatriz Santos", idade: 13, notas: [9, 10, 9, 10] },
    { nome: "João Vitor", idade: 13, notas: [7, 6, 8, 8] },
    { nome: "Eduardo Almeida", idade: 13, notas: [8, 9, 7, 9] },
    { nome: "Camila Ribeiro", idade: 13, notas: [10, 9, 8, 9] },
  ],
  oitavoAno: [
    { nome: "Amanda Silva", idade: 14, notas: [8, 8, 9, 7] },
    { nome: "Gustavo Ribeiro", idade: 14, notas: [6, 7, 8, 8] },
    { nome: "Bruna Oliveira", idade: 14, notas: [10, 9, 10, 10] },
    { nome: "Luana Costa", idade: 14, notas: [9, 8, 9, 9] },
    { nome: "Henrique Souza", idade: 14, notas: [7, 7, 8, 8] },
    { nome: "Manuela Santos", idade: 14, notas: [8, 9, 9, 10] },
    { nome: "Vinícius Costa", idade: 14, notas: [6, 6, 7, 7] },
    { nome: "Mariana Lima", idade: 14, notas: [10, 9, 10, 10] },
  ],
  nonoAno: [
    { nome: "Leonardo Rocha", idade: 15, notas: [9, 10, 8, 10] },
    { nome: "Luana Ribeiro", idade: 15, notas: [7, 7, 8, 9] },
    { nome: "Victor Silva", idade: 15, notas: [8, 8, 9, 10] },
    { nome: "Isabel Almeida", idade: 15, notas: [4, 5, 7, 1] },
    { nome: "Matheus Costa", idade: 15, notas: [9, 8, 7, 10] },
    { nome: "Julia Santos", idade: 15, notas: [8, 9, 9, 9] },
    { nome: "Thiago Oliveira", idade: 15, notas: [7, 6, 8, 7] },
    { nome: "Carolina Fernandes", idade: 15, notas: [10, 9, 8, 10] },
  ],
};

let melhorNota = 0;
let melhorAluno = "";

for (let i = 0; i < Escola.primeiroAno.length; i++) {
    const aluno = Escola.primeiroAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }
for (let i = 0; i < Escola.segundoAno.length; i++) {
    const aluno = Escola.segundoAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }
for (let i = 0; i < Escola.terceiroAno.length; i++) {
    const aluno = Escola.terceiroAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }
for (let i = 0; i < Escola.quartoAno.length; i++) {
    const aluno = Escola.quartoAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }
for (let i = 0; i < Escola.quintoAno.length; i++) {
    const aluno = Escola.quintoAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }
for (let i = 0; i < Escola.sextoAno.length; i++) {
    const aluno = Escola.sextoAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }
for (let i = 0; i < Escola.setimoAno.length; i++) {
    const aluno = Escola.setimoAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }
for (let i = 0; i < Escola.oitavoAno.length; i++) {
    const aluno = Escola.oitavoAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }
for (let i = 0; i < Escola.nonoAno.length; i++) {
    const aluno = Escola.nonoAno[i];
    const media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    if (media > melhorNota) {
        melhorNota = media;
        melhorAluno = aluno.nome;
    }
    }

console.log(`O aluno com a melhor nota é ${melhorAluno} com a média de ${melhorNota}`);