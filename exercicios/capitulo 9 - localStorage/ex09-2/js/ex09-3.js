const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)

    if(verApostaExiste(peso)){
        alert("Alguém já apostou este peso, informe outro...")
        frm.inPeso.value = ""
        frm.inPeso.focus()
        return
    }

    if(localStorage.getItem("melanciaNome")){
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso

        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    }else{
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    }
    mostraApostas()
    frm.reset()
    frm.inNome.focus()
})

const verApostaExiste = (peso) => {
    if(localStorage.getItem("melanciaPeso")){
        const pesos = localStorage.getItem("melanciaPeso").split(';')
        return pesos.includes(peso.toString())
    }else{
        return false
    }
}

const mostraApostas = () => {
    if(!localStorage.getItem("melanciaPeso")){
        respLista.innerText = ""
        return
    }
    
    // obtém o conteúdo das variáveis salvas no localStorage, separando-as
    // em elementos de vetor a cada ocorrência do ";"
    const nomes = localStorage.getItem("melanciaNome").split(';')
    const pesos = localStorage.getItem("melanciaPeso").split(';')

    let linhas = ""  // irá acumular as linhas a serem exibidas
    for(let i = 0; i < nomes.length; i++){
        // concatena em linhas os nomes dos apostadores e suas apostas
        linhas += nomes[i] + " - " + pesos[i] + "\n"
    }
    // exibe as linhas (altera o conteúdo do elemento respLista)
    respLista.innerText = linhas
}

// chama a function quando a página é carregada, para mostrar apostas salvas
window.addEventListener("load", mostraApostas)

frm.btVencedor.addEventListener("click", () => {
    // se não há apostas armazenadas em localStorage
    if(!localStorage.getItem("melanciaPeso")){
        alert("Não há apostas cadastradas")
        return
    }

    // solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual é o peso da melancia?"))

    // se não informou, retorna
    if(pesoCorreto == 0 || isNaN(pesoCorreto)){
        return
    }

    // obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    // valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    //percorre as apostas
    for(let i = 1; i < nomes.length; i++){
        // calcula a diferença de peso do "vencedor" e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        // se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if(difAposta < difVencedor){
            vencedorNome = nomes[i]          // troca o "vencedor"
            vencedorPeso = Number(pesos[i])  // para este elemento
        }
    }

     // monta mensagem com dados do vencedor
    let mensagem = "Resultado - Peso Correto: " + pesoCorreto +  "gr"
    mensagem += "\n----------------------------------------------"
    mensagem += "\nVencedor: " + vencedorNome
    mensagem += "\nAposta: " + vencedorPeso + "gr"
    alert(mensagem)	
})

frm.btLimpar.addEventListener("click", () => {
     // solicita confirmação para excluir as apostas
    if(confirm("Confirma exclusão das apostas?")){
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostraApostas()
    }
})