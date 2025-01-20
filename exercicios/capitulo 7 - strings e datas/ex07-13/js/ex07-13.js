const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    const frase = frm.inFrase.value;
    const fraseSemEspacos = frase.replace(/\s/g, "");
    const fraseInvertida = fraseSemEspacos.split("").reverse().join("");
    console.log(typeof fraseInvertida);
    if(fraseSemEspacos == fraseInvertida){
        resp.innerText = `${frase} é Palíndromo`
    }else{
        resp.innerText = `${frase} Não é palíndromo`
    }

})