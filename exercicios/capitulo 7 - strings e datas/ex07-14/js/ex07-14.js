const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    let dataInfracao = frm.inDataInfracao.value;
    let multa = Number(frm.inValorMulta.value);
    let hoje = new Date();
    let limite = new Date();

    let partes = dataInfracao.split("-")
    limite.setDate(Number(partes[2]))
    limite.setMonth(Number(partes[1]) - 1)
    limite.setFullYear(Number(partes[0]))

    let diasAtraso = hoje - limite
    let diasAtrasoEmDias = diasAtraso / 86400000

    
    

    let dataLimite = data.toLocaleDateString("pt-BR")
    let valorDesconto = multa - (multa * 0.20)   


    resp1.innerText = `Data Limite: ${dia}/${mes}/${ano}`
    resp2.innerText = `Valor com Desconto: R$ ${valorDesconto.toFixed(2)}`
    
})