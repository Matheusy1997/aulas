//cria uma referencia ao form e aos elementos h3 e h4 (resposta)

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

//cria um "ouvinte de evento, acionado quanto o botão sbmit for clicado"

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value; //obtém conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const entrada =  preco * 0.5; //calcula valor da entrada
    const parcela = (preco * 0.5) / 12; //... e das parcelas

    resp1.innerText = `Promoção: ${veiculo}`;
    resp2.innerText = `Entrada de RS: ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}`;

    e.preventDefault(); //evita envio do form
})