const prompt = require("prompt-sync")() //pacote para entrada de dados
const formula = prompt("Fórmula: ") //lê a fórmula

let abre = 0
let fecha = 0

for(const simbolo of formula){
    if(simbolo == "("){
        abre++
    }else if(simbolo == ")"){
        fecha++
    }
    // se, em algum momento, o número de fecha for maior que abre...
    if(fecha > abre){
        break
    }
}

if(abre == fecha){
    console.log("Ok! Fómula correta (em ralação aos parênteses)");
}else{
    console.log("Erro... Fómula incoreta")
}

    