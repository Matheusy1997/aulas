const frm = document.querySelector("form")
const dvMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () => {
    // gera números aleatórios, entre 1 e 5, para cada moeda
    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    //define texto alternativo das imagens(acessibilidade)
    criarMoeda(num1_00, "1_00.jpg", 'alt1_00', "moeda1-00")
    criarMoeda(num0_50, "0_50.jpg", 'alt0_50', "moeda0-50")
    criarMoeda(num0_25, "0_25.jpg", 'alt0_25', "moeda0-25")
    criarMoeda(num0_10, "0_10.jpg", 'alt0_10', "moeda0-10")
})

const criarMoeda = (num, moeda, textoAlt, classe) => {
    //cria laço de repetição para inserir várias imagens de moedas na página
    for(let i = 1; i <= num; i++){
        const novaMoeda = document.createElement("img") //cria elemento img
        novaMoeda.src = "img/" + moeda //define o atributo src
        novaMoeda.alt = textoAlt //define o atributo alt
        novaMoeda.className = classe //define o atributo class
        dvMoedas.appendChild(novaMoeda) //adiciona a novaMoeda à div
    }

    const br = document.createElement("br") //cria elemento br
    dvMoedas.appendChild(br) //adiciona o br à div
}

frm.addEventListener("submit", (event) => {
    event.preventDefault() //cancela o envio do formulário

    const soma = Number(frm.inSoma.value) //converte o valor do campo em número
    const moedas = dvMoedas.querySelectorAll("img") //seleciona todas as imagens
    let totalMoedas = 0 //inicializa a variável totalMoedas

    //percorre as tags img (em moedas) e verifica propriedades className
    for(const moeda of moedas){
        if(moeda.className == "moeda1-00"){
            totalMoedas += 1 //acumula 1 para cada moeda de 1 real
        }else if(moeda.className == "moeda0-50"){
            totalMoedas += 0.5 //acumula 0.50 para cada moeda de 50 centavos
        }else if(moeda.className == "moeda0-25"){
            totalMoedas += 0.25 //acumula 0.25 para cada moeda de 25 centavos
        }else if(moeda.className == "moeda0-10"){
            totalMoedas += 0.1 //acumula 0.10 para cada moeda de 10 centavos
        }
    }

    const div = document.createElement("div") //cria elemento div
    const h3 = document.createElement("h3") //cria elemento h3

    let mensagem

    //verifica se o valor informado é igual ao total de moedas exibido
    if(soma == totalMoedas.toFixed(2)){
        div.className = "alert alert-success" //define a classe da div
        mensagem = `Parabéns!! Você acertou!` //define a mensagem
    }else{
        div.className = "alert alert-danger" //define a classe da div
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}` //define a mensagem
    }
    const texto = document.createTextNode(mensagem) //cria um nó de texto
    h3.appendChild(texto) //adiciona o texto ao h3
    div.appendChild(h3) //adiciona o h3 à div
    dvMoedas.appendChild(div) //adiciona a div à dvMoedas

    frm.btConferir.disabled = true //desabilita o botão submit
})

frm.addEventListener("reset", () => {
    window.location.reload() //recarrega a página
})