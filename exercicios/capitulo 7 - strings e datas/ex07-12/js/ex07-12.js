const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    const mensagem = frm.inMensagem.value;
    let letraPar = ""
    let letraIpar = ""
    for(let i = 1; i <= mensagem.length; i++){
        if(i % 2 == 0){
            letraPar = letraPar + mensagem.charAt(i -1)
        }else{
            letraIpar = letraIpar + mensagem.charAt(i - 1)
        }
    }
    console.log(letraPar, letraIpar)
    resp.innerText = `${letraPar}${letraIpar}`
})

frm.btDescriptografar.addEventListener("click", () => {
    const mensagem = frm.inMensagem.value;
    resp.innerText = mensagem

})