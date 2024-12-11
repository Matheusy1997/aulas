/* arquivo js externo*/

document.write("Olá mundo!")
console.log("Outro olá mundo")
// alert("Olá mundo com Alerta")

let mensagem = "Minhas mensagem";
let mensagem2 = 'Outra mensagem';
let meuPeso = 95.5;
let minhaAltura = 1.75;
let minhaIdade = 27;
let ehDoador = false;
let teste = null;

/* CRIAR CONSTANTES e atribuir valor */

const PI = 3.1415;
const TAXA = 0.5;

teste = "Algum conteúdo"

/* ESCREVER O CONTEUDO DE VARIAVEIS e CONSTANTES */

/* FORMA CONCATENADA */
document.write("<p> Mensagem " + mensagem + "</p>")  

/* FORMA TEMPLATE STRING */
document.write(`Mensagem2: ${mensagem2}`)

document.write("<p> Mensagem " + meuPeso + "</p>")

document.write(`Altura: ${minhaAltura} m`)

document.write("<p> Mensagem " + minhaIdade + "</p>")

document.write(`Doador? ${ehDoador}`)

document.write("<p> Mensagem " + teste + "</p>")

document.write("<p> Mensagem " + PI + "</p>")

document.write("<p> Mensagem " + TAXA + "</p>")