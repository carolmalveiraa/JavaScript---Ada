// Exercício Moderado:
// Escreva um programa em JavaScript que calcule a soma dos números de 1 a 100 utilizando um loop while. Imprima o resultado no final.

let i = 1;
let soma = 0;

while (true) {
    soma += i;
    i++;
    if (i > 100) {
        break;
    }
}

console.log(`A soma dos números de 1 a 100 é igual à: ${soma}`);
