const frm = document.querySelector("form")
const resp = document.querySelector("span")
const resp2 = document.getElementById("outOrdem")

let numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if(numeros.includes(numero)){
        alert(`O número ${numero} já foi inserido`)
        frm.inNumero.value = ""
        frm.inNumero.focus()
        return
    }

    numeros.push(numero)
    frm.inNumero.value = ""
    frm.inNumero.focus()
    resp.innerText = numeros.join(", ")
})

frm.btVerificar.addEventListener("click", () => {
    if(numeros.length == 0){
        alert("Nao ha numeros cadastrados")
        return
    }else{
        const numerosOrdenadors = [...numeros].sort((a,b) => a - b)
        let acumulador = true
        numeros.forEach((numeros, i) => {
            if(numeros != numerosOrdenadors[i]) acumulador = false
        })
        if(acumulador){
            resp2.innerText = "Os números estao em ordem crescente"
        }else{
            resp2.innerText = "Atenção... Números não estão em ordem crescente"
        }
    }
    numeros = []
})