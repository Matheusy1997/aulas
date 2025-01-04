const prompt = require("prompt-sync")() // adiciona o pacote ao programa
const veiculo = prompt("Veículo: ") //lê os dados entrada
const preco = Number(prompt("Preço R$: "))

const entrada = preco * 0.5         //calcula o valor de entrada
const parcela = (preco * 0.5) / 12 // ... e das parcelas
console.log(`Promoção> ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$:e ${parcela.toFixed(2)}`)
