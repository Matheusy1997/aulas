const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    if(validarNome(nome)){
        resp.innerText = `Senha inicial: ${obterSobrenome(nome)}${contarVogais(nome)}`
    }else{
        resp.innerText = `Nome inválido!`
    }
})

const validarNome = (nome) => {
    const partes = nome.split(" ")
    return partes.length >= 2
}

const obterSobrenome = (nome) => {
    const partes = nome.split(" ")
    return partes[partes.length - 1]
}

const contarVogais = (nome) => {
    const vogais = nome.match(/[aeiou]/gi)
    return numeroVogais = vogais.length < 10 ? '0' + vogais.length : vogais.length
    console.log(vogais);
}