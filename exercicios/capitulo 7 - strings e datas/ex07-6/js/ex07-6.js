const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    const senha = frm.inSenha.value;  // obtém senha informada pelo usuário
    const erros = [] // vetor com erros

    //verifica se o tamanho da senha é inválido
    if(senha.length < 8 || senha.length > 15){
        erros.push("Possuir entre 8 e 15 caracteres")
    }

    // verifica se não possui números
    if(senha.match(/[0-9]/g) == null){
        erros.push("Possuir ao menos um número")
    }

    //verifica se não possui letras minúsculas
    if(!senha.match(/[a-z]/g)){
        erros.push("Possuir ao menos uma letra minúscula")
    }

    //verifica se não possui letras maiúsculas ou se possui apenas 1
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push('possuir letras maiúsculas (no mínimo, 2)')
    }

    //verifica se não possui símbolos ou "_"
    if(!senha.match(/[\W|_]/g)){
        erros.push("Possuir ao menos um símbolo")
    }

    //se vetor está vazio (significa que não foram encontrados erros)
    if(erros.length == 0){
        resp.innerText = "Ok! Senha válida"
    }else{
        resp.innerText = `Erro... A senha deve possuir ${erros.join(", ")}`
    }
})