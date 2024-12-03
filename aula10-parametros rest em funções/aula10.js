//...valores => parâmetros rest usando o spreed
function soma(...valores){
    let tam=valores.length
    let res=0
    //loop for tradicional
    // for(let i=0; i<tam;i++){
    //     res+=valores[i]
    // }

    //loop FOR OF
    for(n of valores){
        res+=n
    }
    return res
}

console.log(soma(10,5,2,15,8))