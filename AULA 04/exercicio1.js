// **Exercício Fácil:**
// Escreva um programa em JavaScript que verifica se um número é positivo, negativo ou igual a zero.

let numero = Number(prompt("Digite um número:"));

if (isNaN(numero)) {
  console.log("Por favor, digite um número válido.");
} else {
  if (numero > 0) {
    console.log("O número é positivo");
  } else if (numero < 0) {
    console.log("O número é negativo");
  } else {
    console.log("O número é igual a zero");
  }
}

console.log("Fim do programa");
