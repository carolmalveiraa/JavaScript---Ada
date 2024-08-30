// Exercício Intermediário:
// Escreva um programa em JavaScript que verifica se um número é divisível por 3 e por 5 ao mesmo tempo

// Pedir ao Prompt
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });

let numero = Number(prompt("Digite um número:"));

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("O número é divisível por 3 e por 5 ao mesmo tempo");
    } else {
        console.log("O número não é divisível por 3 e por 5 ao mesmo tempo");
    }
}
