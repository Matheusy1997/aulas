/*
função anonima padrão
const soma=function(v1,v2){return v1+v2}
*/

// função no padrão arrow function
const soma=(v1,v2)=>{return v1+v2}
console.log("Função soma = " + soma(10,5))

/* 
caso a arrow function va receber apenas um parametro podemos 
ignorar os parenteses.
*/
const nome=n=>{return n}
console.log("Função nome = "+nome("Matheus"))

/*
no padrão errow function podemos ignorar o return
*/
const add=n=>n+15
console.log("Funão add = " + add(15))

/* 
caso a função seja mais complexa precisa manter a chaves{} e o return
*/

const multiplicador=(...valores)=>{
    let rest=1
    for(v of valores){
        rest*=v
    }
    return rest
}
console.log("Função multiplicador = " + multiplicador(2,25))
