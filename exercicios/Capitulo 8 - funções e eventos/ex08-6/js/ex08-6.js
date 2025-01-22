const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    
    resp1.innerText = `${nome}\n${retornaTracos(nome)}\n${categorizarAtleta(idade)}`
    
})

function retornaTracos(texto){
    const textoVector = texto.split(" ")

    let tracos = ""

    for(let i = 0; i < textoVector.length; i++){
        tracos += "-".repeat(textoVector[i].length) + " "
    }
    return tracos
}

function categorizarAtleta(idade){
    if(idade <= 12){
        return "Categoría: Infantil"
    }else if(idade >= 12 || idade < 18){
        return "Categoría: Juvenil"
    }else{
        return "Categoría: Adulto"    
    }
}