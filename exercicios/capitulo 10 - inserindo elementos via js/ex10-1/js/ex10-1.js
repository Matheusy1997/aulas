const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const tarefa = frm.inTarefa.value

    const h5 = document.createElement("h5") // cria um h5
    const texto = document.createTextNode(tarefa) // cria um texto
    h5.appendChild(texto) // adiciona o texto ao h5
    dvQuadro.appendChild(h5) // adiciona o h5 ao dvQuadro

    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") // seleciona todos os h5

    if(tarefas.length == 0){
        alert("Não há tarefa para selecionar")
        return // e retornar
    }

    let aux = -1 //variável auxiliar para indicar linha selecionada

    // percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for(let i = 0; i < tarefas.length; i++){
        // se tag é da class tarefa-selecionada (está selecionada)
        if(tarefas[i].className == 'tarefa-selecionada'){
            tarefas[i].className = 'tarefa-normal' // troca para normal
            aux = i
            break
        }
    }

     // se a linha que está selecionada é a última, irá voltar para a primeira
    if(aux == tarefas.length - 1){
        aux = -1
    }

    tarefas[aux + 1].className = 'tarefa-selecionada' //muda estilo da próxima linha
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") // seleciona todos os h5

    let aux = -1
    //percorre a lista das tarefas inseridas na página (elementos h5)
    tarefas.forEach((tarefa, i) => {
        if(tarefa.className == 'tarefa-selecionada'){ //se é da classe tarefa-selecionada
            aux = i //muda o alor da variável aux
        }
    })

    if(aux == -1){ //se não há tarefa selecionada (ou se lista vazia..)
        alert("Selecione uma tarefa para removê-la...")
        return
    }

    //solicita confirmação(exibindo o conteúdo da tag h5 selecionada)
    if(confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"`)){
        dvQuadro.removeChild(tarefas[aux]) //
    }
})

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")
    if(tarefas.length == 0){
        alert("Não há tarefas para serem salvas")
        return
    }

    let dados = ""
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";"
    })

    //grava os dados em localStorage, removendo o último ;
    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    //confere se dados foram armazenados em localStorage
    if(localStorage.getItem('tarefasDia')){
        alert("Ok! Tarefas Salvas com sucesso!")
    }
})

window.addEventListener("load", () => {
    // verifica se há tarefas salvas no navegador do usuário
    if(localStorage.getItem("tarefasDia")){
        // cria um vetor com a lista de tarefas (separadas pelo split(";"))
        const dados = localStorage.getItem("tarefasDia").split(";")
        
        // percorre os dados armazenados em localStorage
        dados.forEach(dado => {
            const h5 = document.createElement("h5")  // cria o elemento HTML h5
            const texto = document.createTextNode(dado) // cria o texto
            h5.appendChild(texto) // adiciona o texto ao h5
            dvQuadro.appendChild(h5) // adiciona o h5 ao dvQuadro
        })
    }
})