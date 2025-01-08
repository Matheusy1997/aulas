const frm = document.querySelector("form"); // obtém elementos da página
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = ""; // string com a resposta a ser exibida
let numContas = 0; // inicializa contador...
let valTotal = 0; // ...e acumulador (variáveis globais)

frm.addEventListener("submit", (e) => { // "escuta" evento submit do form
    e.preventDefault(); // evita envio do form

    const descricao = frm.inConta.value; // obtém dados da conta
    const valor = Number(frm.inPagar.value);

    numContas++;  // adiciona valores ao contador e acumulador
    valTotal += valor;
    resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n"; // concatena as contas

    resp1.innerText = `${resposta}-------------------------`;
    resp2.innerText = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`;

    frm.inConta.value = ""; // limpa os campos
    frm.inPagar.value = "";
    frm.inConta.focus(); // posiciona o cursor no campo de descrição
})