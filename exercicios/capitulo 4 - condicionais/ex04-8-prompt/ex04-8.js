const prompt = require("prompt-sync")();

const valorCompra = Number(prompt("Digite o valor da compra R$: "));
const parcelas = Number(prompt("Digite a quantidade de parcelas: ")); 

const valorParcela = valorCompra / parcelas;

if((valorParcela > 20) && ((parcelas > 0) && (parcelas <= 6))){
    console.log(`Valor da parcelas R$: ${valorParcela.toFixed(2)} - Dividade em x${parcelas}`);
}else{
    console.log("Parcelamento indisponível, parcelamento em no minimo 1x e maximo 6x, e valor minimo por parcela de R$: 20,00");
}