const prompt = require('prompt-sync')();

const mediaFinal = Number(prompt('Digite a media final: '));

function situacaoAluno(mediaFinal){    
    if(mediaFinal >= 7){
        console.log('Aprovado');
    }else if(mediaFinal >= 5 || mediaFinal < 7){
        console.log('Recuperação');
    }else{
        console.log('Reprovado');
    }
}

situacaoAluno(mediaFinal);