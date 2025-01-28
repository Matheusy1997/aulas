const prompt = require('prompt-sync')();

const numero = prompt('Digite um numero: ');

const negativoPositivo = (numero) => {
    if (numero < 0) {
        console.log('Negativo');
    } else if (numero > 0) {
        console.log('Positivo');
    }else{
        console.log('Zero');
    }
}

negativoPositivo(numero);