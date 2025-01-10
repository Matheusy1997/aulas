const cidades = ['Pelotas', 'São Lourenço', 'Porto Alegre']

// for(let i = 0; i < cidades.length; i++){
//     console.log(cidades[i])
// }

// for of
// for(const cidade of cidades){
//     console.log(cidade)
// }

//for Each

cidades.forEach((cidade,i) => {
    console.log(`${i + 1}° Cidade: ${cidade}`)
})

console.log("-".repeat(40));
console.log(cidades.toString())
console.log(cidades.join(" - "))

//-----------------------------------------------

const numeros = [5, 10, 15, 20]

let soma = 0

numeros.forEach(num => soma += num)

console.log(`Soma dos Números: ${soma}`)