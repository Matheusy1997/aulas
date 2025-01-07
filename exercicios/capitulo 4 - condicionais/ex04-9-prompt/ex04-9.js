const prompt = require("prompt-sync")(); // adiciona pacote prompt-sync

const numero = Number(prompt("Digite o Número (centena): ")); // lê o número

if (numero < 100 || numero > 1000){
    console.log("Erro... deve ser uma centena");
    return;
}

const num1 = Math.floor(numero / 100); // lê o número
const sobra = numero % 100;    // o que sobra (dezena)
const num2 = Math.floor(sobra / 10);   // obtém 2º número
const num3 = sobra % 10; // obtém 3º número

console.log(`Invertido: ${num3}${num2}${num1}`); // exibe o número invertido

console.log(num1)
console.log(num2)
console.log(num3)