const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o 1º número: "));

let msg = num1 % 2 == 0 ? `${num1} é Par` : `${num1} é Impar`;

console.log(msg);