const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inCandidato.value
    const acerto = Number(frm.inAcerto.value)
    if(!isNaN(acerto)){
        candidatos.push({nome, acerto})
        frm.reset()
        frm.inCandidato.focus()
    }else{
        alert("Informe um valor numérico")
    }
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(candidatos.length == 0){
        alert("Nao ha candidatos cadastrados")
        return
    }else{
        
        let lista = ""
        for(const candidato of candidatos){
            const {nome, acerto} = candidato
            lista += `${nome} - ${acerto} acertos\n`
        }
        resp.innerText = `Lista de Candidatos\n${"-".repeat(40)}\n${lista}`
    }
})

frm.btAprovados.addEventListener("click", () => {
    if(candidatos.length == 0){
        alert("Nao ha candidatos cadastrados")
        return
    }else{
        const numeroAcertos = prompt("Número de acertos para Aprovação: ")
        if(!isNaN(numeroAcertos)){
            const aprovados = [...candidatos].filter(candidato => candidato.acerto >= numeroAcertos).sort((c1, c2) => c2.acerto - c1.acerto)
            let lista = ""
            for(const candidato of aprovados){
                const {nome, acerto} = candidato
                lista += `${nome} - ${acerto} acertos\n`
            }
            resp.innerText = `Lista de Aprovados\n${"-".repeat(40)}\n${lista}`
        }
    }
})
