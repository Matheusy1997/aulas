const numbers = [5,4,3,2,1];


const multiplica = numbers.reduce((acumulador, num) => acumulador * num, 1);     
const multiplica2 = numbers.map(num => num * 2)

console.log(multiplica);
console.log(multiplica2);