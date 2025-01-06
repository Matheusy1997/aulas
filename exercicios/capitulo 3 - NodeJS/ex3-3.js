const prompt = require("prompt-sync")()
const salario = Number(prompt("Digite o Salario: "))
const tempoDeCasa = Number(prompt("Digite quantos anos trabalhado: "))

const quadrienio = Math.floor(tempoDeCasa / 4)
const reajuste = salario * (quadrienio / 100)
const salarioFinal = reajuste + salario

console.log(`Quadriênios trbalhado: ${quadrienio}`)
console.log(`Salario final: ${salarioFinal.toFixed(2)}`)
