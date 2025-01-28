const verdadeiro = true
const falso = false

if(verdadeiro && true){
    console.log('Verdadeiro')
}

if(verdadeiro || falso){
    console.log('Verdadeiro')
}

if(!falso){
    console.log('Verdadeiro')
}

console.log("And: ", verdadeiro && falso)
console.log("OR: ", verdadeiro || falso)
console.log("NOT: ", !verdadeiro)