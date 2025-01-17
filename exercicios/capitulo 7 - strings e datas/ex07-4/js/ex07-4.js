const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    // obtém o nome informado e retira espaços em branco do início e final da string
    const nome = frm.inNome.value.trim();
    
    if(!nome.includes("")){  // se o nome não (!) possuir espaço
        alert("Informe o nome completo")
        return
    }

    const priEspaco = nome.indexOf(' ') // posição do primeiro espaço
    const sobreNome = nome.substr(priEspaco + 1)
    const ultEspaco = nome.lastIndexOf(' ') // posição do ultimo espaço
    console.log(sobreNome);
    console.log(sobreNome.indexOf(' '));
    
    // copia nome e sobrenome usando os parâmetros do substr()
    const cracha = nome.substr(0, priEspaco)+ ' ' + sobreNome.substr(0, sobreNome.indexOf(' '))

    resp.innerText = `Cracha: ${cracha}` // exibe a resposta
})