const num1 = Math.random() * 10
const num2 = Math.random() * 10
const num3 = Math.random() * 10

console.log(num1.toFixed(0), num2.toFixed(0), num3.toFixed(0))

console.log("num1 < num2 :" + (num1.toFixed(0) < num2.toFixed(0)))
console.log("num2 > num3 :" + (num2.toFixed(0) > num3.toFixed(0)))
console.log("num1 == num3 :" + (num1.toFixed(0) == num3.toFixed(0)))

