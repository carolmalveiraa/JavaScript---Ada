// **Exercício Desafiado**
// Escreva um programa em JavaScript que recebe um número de 1 a 7 e retorna o dia da semana correspondente.
// Além disso, implemente uma verificação adicional utilizando `if-else` para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado), e "Dia útil" caso contrário.

// **Exemplo de uso:** `verificarDiaSemana(3)` deve retornar "Quarta-feira, Dia útil".

// **Dica:** Utilize os valores de 1 a 7 para representar os dias da semana, sendo 1 para domingo, 2 para segunda-feira e assim por diante.

let verificarDiaSemana = (dia) => {
    switch (dia) {
        case 1:
            console.log("Domingo, Fim de semana");
            break;
        case 2:
            console.log("Segunda-feira, Dia útil");
            break;
        case 3:
            console.log("Terça-feira, Dia útil");
            break;
        case 4:
            console.log("Quarta-feira, Dia útil");
            break;
        case 5:
            console.log("Quinta-feira, Dia útil");
            break;
        case 6:
            console.log("Sexta-feira, Dia útil");
            break;
        case 7:
            console.log("Sábado, Fim de semana");
            break;
        default:
            console.log("Número inválido");
    }
}

verificarDiaSemana(3); // Terça-feira, Dia útil 