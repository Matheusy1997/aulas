const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const item = frm.inProduto.value
    if(conferirLista(item)){
        alert("Produto ja cadastrado")
        frm.inProduto.value = ""
        frm.inProduto.focus()
        return
    }

    if(localStorage.getItem("lista")){
        const lista = localStorage.getItem("lista") + ";" + item
        localStorage.setItem("lista", lista)
    }else{
        localStorage.setItem("lista", item)
    }
    mostraLista()
    frm.reset()
    frm.inProduto.focus()
})

const conferirLista = (item) => {
    if(localStorage.getItem("lista")){
        const lista = localStorage.getItem("lista").split(';')
        return lista.includes(item)
    }else{
        return false
    }
}

const mostraLista = () => {
    if(!localStorage.getItem("lista")){
        respLista.innerText = ""
        return
    }
    
    const lista = localStorage.getItem("lista").split(';')
    let resp = "Produtos Adicionados:\n" + "-----------------------\n"
    for(const item of lista){
        resp += item + "\n"
    }
    respLista.innerText = resp
}

frm.btLimpar.addEventListener("click", () => {
    localStorage.removeItem("lista")
    mostraLista()
})

window.addEventListener("load", mostraLista)