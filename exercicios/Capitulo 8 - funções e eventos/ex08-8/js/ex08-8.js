const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const outConvenio = document.getElementById("outConvenio")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const preco = Number(frm.inValor.value)
    if(frm.rbSim.checked){
        const num = frm.inConvenio.selectedIndex
        let convenio = frm.inConvenio.options[num].text
        resp1.innerText = `Desconto R$: ${calcularDesconto(convenio, preco).toFixed(2)} - ${tipoConvenio(convenio)}`
        resp2.innerText = "A Pagar: " + (preco - calcularDesconto(convenio, preco)).toFixed(2)
    }else{
        let convenio = ""
        resp1.innerText = `Desconto R$: ${calcularDesconto(convenio, preco).toFixed(2)} - ${tipoConvenio(convenio)}`
        resp2.innerText = "A Pagar: " + (preco - calcularDesconto(convenio, preco)).toFixed(2)
    }
})

frm.rbSim.addEventListener("click", () => {
    outConvenio.className = "exibe"
})

frm.rbNao.addEventListener("click", () => {
    outConvenio.className = "oculta"
})

const tipoConvenio = (convenio) => {
    if(convenio == "Amigo dos Animais"){
        return "Amigo dos Animais Desconto 20%"
    }else if(convenio == "Saúde Animal"){
        return "Saúde Animal Desconto 50%"
    }else{
        return "Sem Convênio Desconto 10%"
    }

}

const calcularDesconto = (convenio, preco) => {
    let desconto = 0
    if(convenio == "Amigo dos Animais"){
        return desconto = preco * 0.20
    }else if(convenio == "Saúde Animal"){
        return desconto = preco * 0.50
    }else{
        return desconto = preco * 0.10
    }
}