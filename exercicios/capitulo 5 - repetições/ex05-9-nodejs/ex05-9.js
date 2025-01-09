const prompt = require("prompt-sync")();

const produto = prompt("Digite o produto: ");
const numeroEtiqquetas = Number(prompt("Digite o Número de etiquetas: "));

let etiquetas = "";

for(let i = 0; i < numeroEtiqquetas; i++){
    if(i % 2 == 0){
        etiquetas = etiquetas + produto + "     ";
    }else{
        etiquetas = etiquetas + produto + "\n";
    }
}

console.log(etiquetas)