const prompt = require("prompt-sync")();

console.log("Programa Repete Frutas")
console.log("-----------------------------------------------");
const fruta = prompt("Digite a fruta: ");
const quantidade = Number(prompt("Digite a quantidade: "));

let resp = "";

for(let i = 1; i < quantidade; i++){
    resp = resp + fruta + " * ";
}

console.log(resp + fruta)