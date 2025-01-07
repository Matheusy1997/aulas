const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    
    const numero = Number(frm.inNumero.value);

    let msg = numero % 2 == 0 ? `${numero} é Par` : `${numero} é Impar`;

    resp.innerText = msg;
})