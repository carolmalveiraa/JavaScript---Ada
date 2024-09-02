// Exercício Avançado:
// Escreva um programa em JavaScript que calcule e imprima os primeiros N termos da sequência de Fibonacci, onde N é um número fornecido pelo usuário, utilizando um loop while.

let n = 10;
let i = 1;
let j = 0;
let k = 0;

console.log("Os primeiros 10 termos da sequência de Fibonacci são:");

while (n > 0) {
    console.log(k);
    k = i + j;
    i = j;
    j = k;
    n--;
    }
