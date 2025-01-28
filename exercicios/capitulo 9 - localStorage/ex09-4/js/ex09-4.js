const frm = document.querySelector("form")
const pendentes = document.querySelector("#pendentes")
const execucao = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const servico = frm.inServico.value
    cadastrarServico(servico)
    pendente()
    frm.reset()
    frm.inServico.focus()
    
})

frm.btExecutar.addEventListener("click", () => {
    executando()
    pendente()
})

const cadastrarServico = (servico) => {
    if(localStorage.getItem("servico")){
        const servicos = localStorage.getItem("servico") + ";" + servico
        localStorage.setItem("servico", servicos)
    }else{
        localStorage.setItem("servico", servico)
    }
}
 
const pendente = () => {
    if(!localStorage.getItem("servico")){
        pendentes.innerText = "0"
    }else{
        let servico = localStorage.getItem("servico").split(";")
        pendentes.innerText = servico.length
    } 
}

const executando = () => {
    let servico 
    if(!localStorage.getItem("servico")){
        alert("Nao há serviços para ser executado")
    }else{
        servico = localStorage.getItem("servico").split(";")
        execucao.innerText = servico[0]
        servico.shift()
        localStorage.removeItem("servico")
        localStorage.setItem("servico", servico.join(";"))
    }   
}

window.addEventListener("load", pendente)

