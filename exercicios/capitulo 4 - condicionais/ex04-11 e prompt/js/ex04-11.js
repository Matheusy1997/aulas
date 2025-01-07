const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    
    const velocidadePermitida = Number(frm.inVelocidadePermitida.value);
    const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value);

    const diferenca = velocidadeCondutor - velocidadePermitida;
    const velocidade20 = velocidadePermitida / 5;
    const velocidade50 = velocidadePermitida / 2;
    
    if(diferenca > 6 && diferenca <= velocidade20){
        resp.innerText =  `Situação: Multa Leve`;
    }else if(diferenca > velocidade20 && diferenca <= velocidade50){
        resp.innerText =  `Situação: Multa Grave`;
    }else{
        resp.innerText =  `Situação: Sem penalidade`;
    }
    
})