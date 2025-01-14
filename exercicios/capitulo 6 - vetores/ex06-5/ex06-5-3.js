const pessoas = [
    {nome: "Joaquim", idade: 20},
    {nome: "Maria", idade: 22},
    {nome: "Pedro", idade: 18},
    {nome: "Joana", idade: 21},
    {nome: "Carol", idade: 21},
    {nome: "joice", idade: 33},
    {nome: "Carlos", idade: 42}
]

const dobrarIdade = pessoas.map((pessoa) => {
    return {...pessoa, idade: pessoa.idade * 2}
})

const ordenarPessoas = [...pessoas]

ordenarPessoas.sort((a, b) => {
    if(a.idade !== b.idade){
        return a.idade - b.idade
    }else{
        return a.nome.localeCompare(b.nome)
    }
})
console.log(pessoas)
console.log(dobrarIdade)
console.log(ordenarPessoas)