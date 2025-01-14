const numbers = [5,4,3,2,1];
const amigos = [
    {nome: "Ana", idade: 20},
    {nome: "Catia", idade: 25},
    {nome: "Bruno", idade: 17}
]


const multiplica = numbers.reduce((acumulador, num) => acumulador * num, 1);     
const multiplica2 = numbers.map(num => num * 2)
const numberCres = numbers.map(num => num).sort((a,b) => a - b)

const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0);
const todos = amigos.map(amigo => amigo.nome).sort((a,b) => b.localeCompare(a));

console.log(`Soma de idade dos amigos: ${soma}`);
console.log(`Amigos: ${todos}`);
console.log("\n")
console.log("-".repeat(40));
console.log(numbers);
console.log(multiplica);
console.log(multiplica2);
console.log(numberCres);