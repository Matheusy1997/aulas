const prompt = require("prompt-sync")();

console.log("Programa Contador de Chinchilas")
console.log("-----------------------------------------------");
const  numeroChinchilas = Number(prompt("Digite o Número de chinchilas: "));
const ano = Number(prompt("Digite o Número de anos: "));

let contadoDeChinchilas = numeroChinchilas;
for(let i = 1; i <= ano; i++){
    console.log(`${i}° Ano: ${contadoDeChinchilas} Chinchilas`);
    contadoDeChinchilas *= 3;
}