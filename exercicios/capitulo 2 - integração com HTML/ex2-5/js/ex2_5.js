//cria uma referencia ao form e aos elementos h3 e h4 (resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")


//cria um "ouvinte de evento, acionado quanto o botão sbmit for clicado"

frm.addEventListener("submit", (e) => {

    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);

    const promocao = Math.floor(preco) * 2;

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${promocao}`

    e.preventDefault();
})