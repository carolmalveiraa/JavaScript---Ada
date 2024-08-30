// <!-- ## Praticando com `switch/case`

// **Exercício Fácil:**
// Escreva um programa em JavaScript que recebe uma cor em inglês e retorna o seu nome em português. As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto). -->

let cor = "red";
switch (cor) {
  case "red":
    console.log("Vermelho");
    break;
  case "blue":
    console.log("Azul");
    break;
  case "green":
    console.log("Verde");
    break;
  case "yellow":
    console.log("Amarelo");
    break;
  case "black":
    console.log("Preto");
    break;
  default:
    console.log("Cor não encontrada");
}