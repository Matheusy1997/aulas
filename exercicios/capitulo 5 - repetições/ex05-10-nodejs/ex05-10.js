const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor R$: "));
const numParcelas = Number(prompt("Quantidade de parcelas: "));
const valorParcela = Math.floor(valor / numParcelas);
const valorFinal = valorParcela + (valor % numParcelas);

for (let i = 1; i < numParcelas; i++) {
    console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
}

console.log(`${numParcelas} parcela: R$ ${valorFinal.toFixed(2)} `)
