// Exercício Avançado:
// Escreva um programa em JavaScript que verifica se um ano é bissexto.
// Dica: um ano bissexto é divisível por 4, mas não por 100, a menos que também seja divisível por 400.

let ano = Number(prompt("Digite um ano:"));

if (isNaN(ano)) {
    console.log("Por favor, digite um ano válido.");
} else {
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        console.log("O ano é bissexto");
    } else {
        console.log("O ano não é bissexto");
    }
}