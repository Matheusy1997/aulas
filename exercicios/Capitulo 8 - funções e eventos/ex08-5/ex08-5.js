const prompt = require("prompt-sync")()

const vinhos = []

function titulo(texto) {
    console.log();
    console.log(texto);
    console.log("=".repeat(40));
}

//programa principal

do{
    titulo("===< Cadastro de Vinhos >===")
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3.Pesquisar por Tipo");
    console.log("4. Média de Destaques");
    console.log("5. Finalizar");
    const opcao = Number(prompt("Opção: "));
    if(opcao == 1){
        incluir()
    }else if(opcao == 2){
        listar()
    }else if(opcao == 3){
        pesquisar()
    }else if(opcao == 4){
        calcularMedia()
    }else if(opcao == 5){
        break
    }else{
        console.log("Opção inválida");
    }
}while(true)

function incluir(){
    titulo("===< Inclusão de Vinhos >===")
    const marca = prompt("Marca...: ") // lê os dados do vinho
    const tipo = prompt("Tipo...: ")
    const preco = Number(prompt("Preço R$:"))
    vinhos.push({marca, tipo, preco})
    console.log("Ok! Vinho cadastrado com sucesso");
}

function listar(){
    titulo("===< Listagem de Vinhos >===")
    console.log("Marca............... Tipo............... Preço R$: ");
    //percorre o vetor para exibir todos os vinhos

    for(const vinho of vinhos){
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(19)} ${vinho.preco.toFixed(2)}`);
    }
}

function pesquisar(){
    titulo("===< Pesquisa de Vinhos >===")
    const pesq = prompt("Tipo: ") // lê o tipo do vinho a pesquisar
    let contador = 0 // contador para verificar se existe
    console.log("Marca............... Tipo............... Preço R$: ");

    for(const vinho of vinhos){
        if(vinho.tipo.toUpperCase().includes(pesq.toUpperCase())){
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(19)} ${vinho.preco.toFixed(2)}`);
            contador++ // incrementa o contador
        }
    }

    //se percorrreu todos os vinhos e contador continuar == 0, significa que não há
    if(contador == 0){
        console.log(`Obs.: Não há vinhos cadastrados do tipo "${pesq}"`);
    }
}

function calcularMedia(){
    titulo("===< Média de Destaques do Cadastro de Vinhos >===")
    const num = vinhos.length  // obtém número de elementos do vetor
    if(num == 0){
        console.log(`Obs.: Não há vinhos cadastrados`)
        return
    }

    let total = 0 //para acumular o total

    for(const vinho of vinhos){
        total += vinho.preco
    }

    const media = total / num
 
    const vinhos2 = [...vinhos]
    vinhos2.sort((a, b) => a.preco - b.preco)   // ordena por preco

    const menor = vinhos2[0]      // menor preço é o primeiro (posição 0)
    const maior = vinhos2[num - 1] // maior preço é o último (posição num-1)

    console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)
}