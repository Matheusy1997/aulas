const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    let dataInfracao = frm.inDataInfracao.value;
    let multa = Number(frm.inValorMulta.value);
    
    const dataIndracaoObj = new Date(dataInfracao);

    dataIndracaoObj.setDate(dataIndracaoObj.getDate() + 90)
    
    const dataLimite = dataIndracaoObj.toLocaleDateString("pt-BR")
    const valorDesconto = multa - (multa * 0.20)   


    resp1.innerText = `Data Limite: ${dataLimite}`
    resp2.innerText = `Valor com Desconto: R$ ${valorDesconto.toFixed(2)}`
    
})