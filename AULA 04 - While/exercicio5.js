// **Exercício Desafiado**
// Escreva um programa em JavaScript que recebe um número de 1 a 7 e retorna o dia da semana correspondente.
// Além disso, implemente uma verificação adicional utilizando `if-else` para retornar "Fim de semana" caso o número seja 1 ou 7 (domingo ou sábado), e "Dia útil" caso contrário.

// **Exemplo de uso:** `verificarDiaSemana(3)` deve retornar "Quarta-feira, Dia útil".

// **Dica:** Utilize os valores de 1 a 7 para representar os dias da semana, sendo 1 para domingo, 2 para segunda-feira e assim por diante.
let verificarDiaSemana = (dia) => {
  let diaSemana;
  switch (dia) {
    case 1:
      diaSemana = "Domingo";
      break;
    case 2:
      diaSemana = "Segunda-feira";
      break;
    case 3:
      diaSemana = "Terça-feira";
      break;
    case 4:
      diaSemana = "Quarta-feira";
      break;
    case 5:
      diaSemana = "Quinta-feira";
      break;
    case 6:
      diaSemana = "Sexta-feira";
      break;
    case 7:
      diaSemana = "Sábado";
      break;
    default:
      return "Número inválido";
  }

  if (dia === 1 || dia === 7) {
    return `${diaSemana}, Fim de semana`;
  } else {
    return `${diaSemana}, Dia útil`;
  }
};

// Exemplo de uso
console.log(verificarDiaSemana(7));
