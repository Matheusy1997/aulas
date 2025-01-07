const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o Lado A: "));
const num2 = Number(prompt("Digite o Lado B: "));
const num3 = Number(prompt("Digite o Lado C: "));

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    if (num1 == num2 && num1 == num3 && num2 == num3) {
      console.log("Triângulo Equilatero");
    } else if (
      (num1 == num2 && num2 != num3) ||
      (num1 == num3 && num2 != num1) ||
      (num2 == num3 && num2 != num1)
    ) {
      console.log("Triângulo Isoceles");
    } else if (num1 != num2 && num1 != num3 && num2 != num3) {
      console.log("Triângulo Escaleno");
    }
  } else {
    console.log("Os lados não formam um triângulo");
  }
}else{
    console.log("Erro... deve ser um número");
}
