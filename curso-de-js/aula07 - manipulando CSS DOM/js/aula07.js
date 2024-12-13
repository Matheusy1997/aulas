/* Arquivo JS aula 07 DOM + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 07 Manipular CSS'
//titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
/* o metodo setAttribute serve para configurar um atributo ele tem 2 parametros o primeiro parametro e o nome do atributo que sera configurado e o segundo e o valor que sera definido para esse parametro */
imagem.setAttribute('src', 'imagens/pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
//document.querySelector('h1').style.color = "red";
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/