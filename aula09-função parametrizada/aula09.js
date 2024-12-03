function add1(v){
    return valor+=v;
}

function add2(v){
    valor+=v;
}
let valor=0;
console.log("Função com ou sem return")

add2(10)
console.log(valor)
add2(5)
console.log(valor)

// console.log(add1(10))
// console.log(add1(5))

const VALOR_PADRAO=0;

function soma(n1=VALOR_PADRAO, n2=VALOR_PADRAO){
    let res = n1 + n2;
    return res;
}
console.log("Função com retorno padrao")
console.log(soma(10,15))
console.log(soma())