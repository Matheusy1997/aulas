const frm = document.querySelector("form");
const totalPagar = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{

    const valorPorHora = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);

    const valorTotalDeUso = Math.ceil(tempo / 15) * valorPorHora;

    totalPagar.innerText = `Valor a Pagar R$: ${valorTotalDeUso.toFixed(2)}`;

    e.preventDefault();
})