//função anonima e atribuida a uma variavel de preferencia const
// const f =function(v1,v2){
//     return v1 +v2
// }

//função anonima usando spreed com valores rest
// const f=function(...valores){
//     let res=0
//     for(v of valores){
//         res+=v
//     }
//     return res
// }

/*
função anonima com construtor, usa do para execuções simples.
Usando uma função com construtor o Function tem que ser com F maiusculo obrigatoriamente.
É obrigatoria evelopar todo os conteudo da função com "aspas"
*/
const f=new Function("v1","v2", "return v1+v2")

console.log(f(10,5))