const prompt = require("prompt-sync")();
console.log("Programa Número Perfeitos");
console.log("-----------------------------------------------");
const numero = Number(prompt("Número: "));

let contador = 1;
let acumulador = "1";
for (let i = 2; i < numero; i++) {
  if (numero % i == 0) {
    acumulador = acumulador + ", " + i ;
    contador += i;
  }
}

console.log(`Divisores do ${numero}: ${acumulador}(soma: ${contador});`);

if (contador == numero) {
  console.log(`${numero} É um Número perfeito`);
} else {
  console.log(`${numero} Nao é um Número Perfeito`);
}
