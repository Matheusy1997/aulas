const frm = document.querySelector("form");
const tempo = document.querySelector("h3");
const devolver = document.querySelector("#troco");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form

    const valor = Number(frm.inValor.value);

    if ( valor.toFixed(2) >= 1.00 && valor.toFixed(2) < 1.75) {
        let troco = valor.toFixed(2) - 1.00;
        tempo.innerText = `Tempo: 30min`;
        devolver.innerText = `Troco: R$ ${troco.toFixed(2)}`; 
    }else if ( valor.toFixed(2) >= 1.75 && valor.toFixed(2) < 2.99){
        let troco = valor.toFixed(2) - 1.75;
        tempo.innerText = `Tempo: 60min`;
        devolver.innerText = `Troco: R$ ${troco.toFixed(2)}`;
    }else if( valor.toFixed(2) >= 3.00){
        let troco = valor.toFixed(2) - 3.00;
        tempo.innerText = `Tempo: 120min`;
        devolver.innerText = `Troco: R$ ${troco.toFixed(2)}`;
    } 
})