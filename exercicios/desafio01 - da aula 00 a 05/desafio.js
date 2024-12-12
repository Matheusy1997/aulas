/* Informações de um Lutador */
let lutador = 'Anderson Silva';
let nacionalidade = 'Brasileiro';
let idade = 49;
let peso = 88.5;
let alutra = 1.88;

document.write(`<h1>Informações</h1> <p>Lutador: ${lutador}<br>Nacionalidade: ${nacionalidade} <br> Idade: ${idade} anos <br> Peso: ${peso} Kg <br> Altura: ${alutra} m</p>`)

/*Uma frase do dia armazenada em const */

const dia = 10;
const mes = 9;
const ano = 2024
const frase = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."
const autor = "Aoron Swartz"

document.write(`<h1>Frase do Dia</h1> ${dia} / ${mes} / ${ano} <br> ${frase}<br> ${autor}`)


/* Array de MEses do Ano*/

let meses = ['Janeiro', 'Fevereiro', ' Março', 'Abril'];
let mes1 = " ";
document.write(`<h1>Array de Meses do Ano</h1>`)
for(n of meses){
    mes1 = mes1 + n + ', '
}
document.write(`<h3>Crido por loop for of</h3>`)
document.write(mes1 + '...')
document.write(`<h3>Crido por indice</h3>`)
document.write(`${meses[0]}, ${meses[1]}, ${meses[2]}, ${meses[3]}, ...`)

/* Objeto criado para mostrar no HTML */

const game = {
    jogo : 'League Of Legends - LOL',
    desenvolvido : 'Riot Games',
    ano : 2009
}

document.write(`<h1>Objeto Jogo</h1> Jogo: ${game.jogo} <br> Desenvolvido por: ${game.desenvolvido} <br> Ano do Lançamento: ${game.ano}`)