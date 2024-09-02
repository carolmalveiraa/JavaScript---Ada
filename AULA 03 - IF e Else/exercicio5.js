// Exercício Desafiador:
// Escreva um programa em JavaScript que verifica se um número é um palíndromo.

let numero = Number(prompt("Digite um número:"));

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    let numeroString = numero.toString();
    let numeroInvertido = numeroString.split("").reverse().join("");
    if (numeroString === numeroInvertido) {
        console.log("O número é um palíndromo");
    } else {
        console.log("O número não é um palíndromo");
    }
}
