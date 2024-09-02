// Exercício Intermediário:
// Escreva um programa em JavaScript que encontre e imprima todos os números primos de 1 a 100 utilizando um loop while.

let i = 2; // Iniciamos em 2, pois 1 não é considerado primo

console.log("Os números primos de 1 a 100 são:");

while (i <= 100) {
  let primo = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    console.log(i);
  }

  i++;
}
