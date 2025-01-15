const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inClube.value
    if(clubes.includes(nome)){
        alert(`O clube ${nome} ja foi cadastrado`)
        return
    }
    clubes.push(nome)
    frm.inClube.value = ""
    frm.inClube.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(clubes.length == 0){
        alert("Nao ha clubes cadastrados")
        return
    }else{
        let lista = ""
        for(const clube of clubes){
            lista += clube + "\n"
        }
        resp.innerText = lista
    }
})

frm.btTabela.addEventListener("click", () => {
    if(clubes.length == 0){
        alert("Nao ha clubes cadastrados")
        return
    }else if(clubes.length % 2 == 1){
        alert("Quantidade de clubes impar, impossivel formar a tabela")
        return
    }
    else{
        const clubesInvertidos = [...clubes].reverse()
        let lista = ""
        for(let i = 0; i < clubes.length / 2; i++){
            lista += `${clubes[i]} x ${clubesInvertidos[i]}\n`
        }
        resp.innerText = lista
    }
})

/*Grêmio x Brasil
Pelotas x Ypiranga
Juventude x Caxias
Internacional x Guarany */