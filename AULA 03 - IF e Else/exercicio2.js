// **Exercício Moderado**:
// Escreva um programa em JavaScript que verifica se um número é par ou ímpar.

let numero = Number(prompt("Digite um número:"));

if (isNaN(numero)) {
  console.log("Por favor, digite um número válido.");
} else {
  if (numero % 2 === 0) {
    console.log("O número é par");
  } else {
    console.log("O número é ímpar");
  }
}
