const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("pre")

const criancas = [] // declara vetor global

frm.addEventListener("submit", (e) => { // "escuta" evento submit do form
    e.preventDefault() // evita envio do form
    const nome = frm.inNome.value // obtém dados do form
    const idade = Number(frm.inIdade.value)
    criancas.push({nome,idade}) // adiciona dados ao vetor de objetos
    frm.reset() // limpa os campos do form
    frm.inNome.focus() // posiciona cursor em inNome
    frm.btListar.dispatchEvent(new Event("click")) // dispara um evento de click em btListar
})

frm.btListar.addEventListener("click", () => { // "escuta" clique em btListar
    if(criancas.length == 0){ // se vazio, exibe alerta
        alert("Não há crianças na lista")
        return
    }
    let lista = ""  // para concatenar lista de crianças
    for(const crianca of criancas){
        const {nome, idade} = crianca  // desestrutura o objeto
        lista += nome + ' - ' + idade + ' anos\n'
    }
    resp.innerText = lista // exibe a lista de crianças
})

frm.btResumir.addEventListener("click", () => { // "escuta" clique em btResumir
    if(criancas.length == 0){ // se vazio, exibe alerta
        alert("Não há crianças na lista")
        return
    }
    const copia = [...criancas] // cria uma cópia do vetor criancas
    copia.sort((a, b) => a.idade - b.idade) // ordena o vetor copia
    let resumo = ''
    let aux = copia[0].idade  // menor idade do vetor ordenado
    let nomes = [] //para inserir nomes de cada idade
    for(const crianca of copia){
        const {nome, idade} = crianca
        if(idade == aux){
            nomes.push(nome) // adiciona ao vetor nomes
        }else{  // senão, monta o resumo para cada idade
            resumo += aux + " ano(s):" + nomes.length + " criança(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" +nomes.join(", ") + ")\n\n"
            aux = idade //obtém a nova idade na ordem
            nomes = [] // limpa o vetor de nomes
            nomes.push(nome) // adiciona o primeiro da nova idade
        }
    }
    //adiciona a última criança
    resumo += aux + " ano(s):" + nomes.length + " criança(s) -"
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" +nomes.join(", ") + ")\n\n"
    resp.innerText = resumo // exibe a resposta
})