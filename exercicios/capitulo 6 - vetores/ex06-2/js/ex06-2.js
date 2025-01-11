const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const chances = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero == sorteado){
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    }else{
        if(erros.inclides(numero)){ // se número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        }else{
            erros.push(numero) // adiciona número ao vetor
            const numErros = erros.length // obtem tamanho do vetor
            const numChances = chances - numErros // obtem chances restantes
            // exibe nº de erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if(numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disable = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            }else{
                 // usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "Maior" : "Menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
})

frm.btNovo.addEventListener("click", () => {
    location.reload()
})
frm.inNumero.value = ""
frm.inNumero.focus()