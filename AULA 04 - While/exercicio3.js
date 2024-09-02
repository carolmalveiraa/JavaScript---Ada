// **Exercício Intermediário:**
// Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se é uma vogal ou uma consoante.

let alfabeto = "a";

switch (alfabeto) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vogal");
        break;
    default:
        console.log("Consoante");
    }
