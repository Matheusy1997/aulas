const prompt = require("prompt-sync")()
const racao = Number(prompt("Peso da Ração(Kg): "))
const consumo = Number(prompt("Consumo Diário (gr):" ))

const duracao = Math.floor(racao * 1000 / consumo)
const resto = (racao * 1000) % consumo 

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${resto}gr`)