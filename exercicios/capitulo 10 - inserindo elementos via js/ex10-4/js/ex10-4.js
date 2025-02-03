const frm = document.querySelector("form") //seleciona o formulário
const divVelas = document.querySelector("#divVelas") //seleciona a div

frm.addEventListener("submit", (event) => { //adiciona evento de submit ao formulário
    event.preventDefault() //cancela o envio do formulário
    const velas = document.querySelectorAll("img") //seleciona todas as imagens
    if(velas != null){ //se existem velas
        velas.forEach(vela => vela.remove()) //remove todas as velas    
    }
    const idade = frm.inIdade.value //converte o valor do campo em número
    criarVela(idade) //chama a função criarVela passando a idade
    frm.reset() //limpa o formulário
    frm.inIdade.focus() //coloca o foco no campo inIdade
    
})

const criarVela = (numero) => {
    if(Number(numero) < 1 || Number(numero) > 120){
        alert("Idade inválida. Digite um Número entre 1 e 120") //exibe mensagem de alerta
        return
    }
    
    for(let i = 0; i < numero.length; i++){
        const digito = numero.charAt(i) //obtém o dígito na posição i
        const img = document.createElement("img") //cria elemento img
        img.src = `img/num${digito}.png` //define o atributo src
        divVelas.appendChild(img) //adiciona a img à div
    }
}

frm.btNovasVelas.addEventListener("click", () => { //adiciona evento de click ao botão
    const velas = document.querySelectorAll("img") //seleciona todas as imagens
    velas.forEach(vela => vela.remove()) //remove todas as velas
    frm.inIdade.focus() //coloca o foco no campo inIdade    
})