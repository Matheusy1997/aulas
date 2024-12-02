/*
aqui usamos duas funções arrow para fazer duas funções trabalharem 
juntas uma dentro da outra,
*/
const soma=(...valores)=>{
/*aqui a função somar tem acesso aos valores da variavel soma,
passando eles para a variavel val de somar.
*/ 
    const somar=val=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10,5,15,25))