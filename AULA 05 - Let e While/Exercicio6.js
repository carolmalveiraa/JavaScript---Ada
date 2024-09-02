// 6. Jogo de adivinhação:

// Precisamos criar um jogo da adivinhação, em que o usuário precisa acertar um número aleatório entre 0 e 100.

// - O usuário terá um local para digitar a resposta.
// - Se o usuário errar a resposta o programa deve responder se o numero é maior ou menos ao número informado pelo usuário.
// - Quando o usuário acertar o programa vai retornar o número de tentativas.

// exemplo:
// Adivinhe o número entre 1 e 100:
// > 50
// O número é maior que 50.
// > 75
// O número é menor que 75.
// > 65
// O número é menor que 65.
// > 60
// O número é maior que 60.
// > 62
// Parabéns! Você acertou o número em 5 tentativas


let numero = Math.floor(Math.random() * 100);
let tentativas = 0;

while (true) {
    let resposta = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    tentativas++;
    
    if (resposta === numero) {
        console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas`);
        break;
    } else if (resposta < numero) {
        console.log("O número é maior que " + resposta);
    } else {
        console.log("O número é menor que " + resposta);
    }
    }

    