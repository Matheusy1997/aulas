const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []

frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta" // oculta select das bebidas
    frm.inPizza.className = "exibe" // exibe select das pizzas
})

frm.rbBebida.addEventListener("click", () => {
    frm.inPizza.className = "oculta" // oculta select das pizzas
    frm.inBebida.className = "exibe" // exibe select das bebidas
})

frm.inDetalhes.addEventListener("focus", () => {
    if(frm.rbPizza.checked){ // se radiobutton rbPizza estiver marcado
        const pizza = frm.inPizza.value // obtem valor do select de pizzas

        // uso do operador ternário, para indicar o número de sabores
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4

        // atributo placeholder exibe uma dica de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener("blur", () => { // quando campo perde o foco
    frm.inDetalhes.placeholder = "" //limpa a dica de preenchimento
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let produto
    if(frm.rbPizza.checked){ // se radiobutton rbPizza estiver marcado
        const num = frm.inPizza.selectedIndex // obtém nº do item selecionado
        produto = frm.inPizza.options[num].text // texto do item selecionado
    }else{
        const num = frm.inBebida.selectedIndex // obtém nº do item selecionado
        produto = frm.inBebida.options[num].text // texto do item selecionado
    }

    const detalhes = frm.inDetalhes.value //conteúdo do inDetalhes
    itens.push(produto + "(" + detalhes + ")") //adiciona ao vetor
    resp.innerText = itens.join("\n") // exibe conteúdo do vetor

    frm.reset() // limpa os campos do form
    frm.rbPizza.dispatchEvent(new Event("click")) // dispara um evento de click em rbPizza
})