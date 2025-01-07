const prompt = require("prompt-sync")();

const numeroPessoas = Number(prompt("Digite o Número de pessoas: "));
const numeroPeixes = Number(prompt("Digite o Número de peixes: "));

const valorPessoas = numeroPessoas * 20;
if(numeroPessoas <= numeroPeixes){
    const peixesRestantes = numeroPeixes - numeroPessoas;
    const totalPagar = valorPessoas + (peixesRestantes * 12);
    console.log(`Valor total a pagar com o excedente de peixes R$: ${totalPagar.toFixed(2)}`);
}else{
    console.log(`Valor total a pagar R$: ${valorPessoas.toFixed(2)}`);
}