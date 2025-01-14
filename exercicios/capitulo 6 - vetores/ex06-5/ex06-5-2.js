const prompt = require("prompt-sync")()
console.log("Informe os alunos. Após digite 'Fim' no nome para sair")
const alunos = [] // declara vetor

do{
    const nome = prompt("Nome: ")  // lê o nome
    if(nome == "Fim" || nome == "fim"){ // antes de ler a nota, verifica
        break //sai da repetição
    }
    const nota = Number(prompt("A nota deve ser entre 0 e 10: ")) //Lê a nota
    if(nota < 0 || nota > 10 || isNaN(nota)){ // verifica se a nota é valida
        console.log("A nota deve ser entre 0 e 10")
        continue // se não for, volta para o inicio da repetição
    }
    alunos.push({nome, nota}) // adiciona ao vetor
    console.log("Ok! Aluno(a) cadastrado(a)...")
}while(true)
console.log(alunos)
console.log(alunos.sort((a,b) => a.nota - b.nota))
console.log("Aluno ordenados")
console.log(alunos)
//console.log("-".repeat(40))// exibe 40 -
// const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0) // obtém a maior nota
// console.log(`Maior Nota: ${maior}`) // exibe a maior nota
// if(maior >= 7){ //para verificar se tem destaques na turma
//     const destaques = alunos.filter(aluno => aluno.nota == maior) //filtro
//     for(const destaque of destaques){ // percorre os alunos em destaque
//         console.log(`- ${destaque.nome}`)  // mostra os nomes (precedidos por -)
//     }
// }else{  // senão, vai exibir a mensagem
//     console.log("Não houve alunos em destaque na turma")
// }
