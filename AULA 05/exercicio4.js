// **Exercício Avançado:**
// Crie um programa em JavaScript que implemente uma calculadora básica. A função `calculadora` receberá dois números como parâmetro e um terceiro parâmetro indicando a ação a ser executada. As ações possíveis são: "somar", "subtrair", "dividir" e "multiplicar". O resultado da operação deve ser retornado pela função.
// **Exemplo de uso:** `calculadora(5, 3, "somar")` deve retornar 8.

let calculadora = (num1, num2, operacao) => {
    switch (operacao) {
        case "somar":
            return num1 + num2;
        case "subtrair":
            return num1 - num2;
        case "dividir":
            return num1 / num2;
        case "multiplicar":
            return num1 * num2;
        default:
            return "Operação inválida";
    }
}

console.log(calculadora(5, 3, "somar"));
