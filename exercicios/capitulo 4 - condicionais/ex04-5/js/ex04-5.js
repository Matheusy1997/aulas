const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    
    const numero = Number(frm.inNumero.value);
    const raiz = Math.sqrt(numero);

    let msg = Number.isInteger(raiz) ? `Raiz: ${raiz}` : `Não há rais exata para ${numero}`;

    resp.innerText = msg;
    console.log(resultado);
})