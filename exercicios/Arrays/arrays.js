let listaDeCompras = ['Arroz']

console.log(listaDeCompras)

listaDeCompras.push('Feijão', 'Macarrão', 'Leite')

console.log(listaDeCompras)

listaDeCompras.pop()

console.log(listaDeCompras)

listaDeCompras.unshift('Uva','Goiaba')
console.log(listaDeCompras)

listaDeCompras.shift()
console.log(listaDeCompras)

listaDeCompras.splice(1, 1)
console.log(listaDeCompras)

let lista2 = listaDeCompras.slice()
console.log(lista2)

lista2 =listaDeCompras.slice(0, 2)
console.log(lista2)

let posicaoElemento = listaDeCompras.indexOf('feijão')
console.log(posicaoElemento)