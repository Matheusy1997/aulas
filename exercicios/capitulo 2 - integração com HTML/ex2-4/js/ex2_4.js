//cria uma referencia ao form e aos elementos h3 e h4 (resposta)

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");


//cria um "ouvinte de evento, acionado quanto o botão sbmit for clicado"

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value);
    const consumo = Number(frm.inConsumo.value)

    const precoPagar =  consumo * preco / 1000; //calcula valor da entrada
    
    resp1.innerText = `Promoção: ${precoPagar.toFixed(2)}`;

    e.preventDefault(); //evita envio do form
})