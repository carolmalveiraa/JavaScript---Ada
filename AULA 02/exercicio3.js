// Crie laços de repetição para retornar a seguinte estrutura de numeros:
// 1
// 12
// 123
// 1234
// 12345

let piramide = "";
for (let i = 1; i <= 5; i++) {
  piramide += i;
  console.log(piramide);
}

console.log(" ");

// Agora tente criar o inverso:
// 12345
// 1234
// 123
// 12
// 1

let piramideInversa = "";
for (let i = 5; i >= 1; i--) {
  piramideInversa = "";
  for (let j = 1; j <= i; j++) {
    piramideInversa += j;
  }
  console.log(piramideInversa);
}
