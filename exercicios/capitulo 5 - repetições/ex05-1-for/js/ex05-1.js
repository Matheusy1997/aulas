const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => { // "escuta" evento submit do form
    e.preventDefault() // evita envio do form
    const numero = Number(frm.inNumero.value)// obtém número informado

    let resposta= ""; // variável do tipo String, para concatenar a resposta

    // cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for(let i = 1; i <= 10; i++){
        // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
        // resposta = ${resposta}${numero} x${i} =${numero * i} \n
        console.log(resposta)
        
    }
      // o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
    console.log(typeof(resposta))
})