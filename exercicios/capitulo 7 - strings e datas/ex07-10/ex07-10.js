const prompt = require("prompt-sync")() // pacote para entrada de dados
const altura = Number(prompt("Altura da Árvore: ")) // lê o número de linhas (altura)

console.log() //dexai uma linha em branco

for(let i = 1; i <= altura; i++){
    const espacos = 30 + (altura - i) //calcula espaços do início
    console.log(" ".repeat(espacos) + "*".repeat(i*2))
}