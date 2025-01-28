const promtp = require('prompt-sync')()

const nota1 = Number(promtp('Digite a primeira nota: '))
const nota2 = Number(promtp('Digite a segunda nota: '))

function calcularMedia(nota1, nota2){
    const media = (nota1 + nota2) / 2
    if(media >= 7){
        console.log('Aprovado ' + media.toFixed(2));
    }else{
        console.log('Reprovado ' + media.toFixed(2));
        
    }
}

calcularMedia(nota1, nota2)