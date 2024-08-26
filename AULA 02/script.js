//  Dado um vetor numeros com 5 elementos, calcule a soma de todos os valores e armazene o resultado na variável soma. Utilize o índice para acessar os valores do vetor e realizar os cálculos.

//  const numeros = [10, 5, 8, 12, 3, 19, 15, 9, 11, 13];
//  let soma = 0;

//  for (let i = 0; i < numeros.length; i++) {
//    soma += numeros[i];
//  }
//  console.log(soma);

// Dado um vetor notas com 4 elementos, calcule a média aritmética de todos os valores e armazene o resultado na variável media. Utilize o índice para acessar os valores do vetor e realizar os cálculos.

// const notas = [17,28,39,96,55];
// let media = 0;

// for (let i = 0; i < notas.length; i++) {
//   media += notas[i] / 4;
// }

// console.log(media);

// Dado um vetor valores com 6 elementos, encontre o maior valor presente no vetor e armazene-o na variável maiorValor. Utilize o índice para acessar os valores do vetor e realizar as comparações com Math.max.

// const valores = [25,18,32,12,20,38];

// maiorValor = Math.max(...valores);
// console.log(maiorValor);

// const valores = [25,18,32,12,20,38];
// maiorValor = 0;

// for (let i = 0; i < valores.length; i++) {
// if (valores[i] > maiorValor) {
//     maiorValor = valores[i];
// }
// }

// console.log(maiorValor);

// Dada uma matriz matriz com 3 linhas e 3 colunas, calcule o produto de todos os valores e armazene o resultado na variável produto. Utilize o índice para acessar os valores da matriz e realizar os cálculos.

// const matriz = [
//     [2, 4, 6],
//     [3, 7, 9],
//     [5, 8, 10]
// ];

// let produto = 1;

// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         produto += matriz[i][j];
//     }
// }

// console.log(produto);

// Dada uma matriz notas com 4 linhas e 2 colunas, calcule a média aritmética de todos os valores e armazene o resultado na variável media. Utilize o índice para acessar os valores da matriz e realizar os cálculos.

// const notas = [
//   [17, 28, 11],
//   [46, 39, 44],
//   [35, 57, 44],
//   [48, 39, 88],
// ];

// let media = 0;

// for ( let i = 0; i < notas.length; i++) {
//   for (let j = 0; j < notas[i].length; j++) {
//     media += notas[i][j] / 12;
//   }
// }

// console.log(media);

// Dada uma matriz valores com 2 linhas e 4 colunas, encontre o menor valor presente na matriz e armazene-o na variável menorValor. Utilize o índice para acessar os valores da matriz e realizar as comparações com Math.min.

const valores = [
  [15, 12, 18, 10],
  [14, 9, 16, 11],
];

let menorValor = valores[0][0];

for (let i = 0; i < valores.length; i++) {
  for (let j = 0; j < valores[i].length; j++) {
    if (valores[i][j] < menorValor) {
      menorValor = valores[i][j];
    }
  }
}

menorValor = Math.min(...valores.flat());
console.log(menorValor);
