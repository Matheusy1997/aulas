const frm = document.querySelector("form");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");
const inRadios = document.querySelectorAll("input");
const resp = document.querySelector("h3");

const trocarClube = () => {
  const clubes = ["Brasil", "Pelotas", "Farroupilha"];

  let selecao;

  // percorre os inRadios para verificar qual está selecionado
  for (let i = 0; i < inRadios.length; i++) {
    if (inRadios[i].checked) {
      selecao = i;
      break;
    }
  }
  if (selecao <= 2) { // se selecao <= 2, então torce por algum clube
    //define as classes de dvTitulo: row e cores do clube
    dvTitulo.className = `row cores-${clubes[selecao]}`; // modifica a cor

    //modifica a imagem de acordo com a seleção do cliente
    imClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
    imClube.className = "img-fluid"; // muda o estilo para exibir a imagem
    imClube.alt = `Simbolo do ${clubes[selecao]}`; //modifica o atributo alt da imagem

    localStorage.setItem("clube", clubes[selecao]);
  }else{
    dvTitulo.className = "row";
    imClube.className = "d-none"; // esconde a imagem
    imClube.alt = ""; // limpa texto alternativo
    localStorage.removeItem("clube") // limpa o localStorage 
  }
};

for (const inRadio of inRadios) {
  inRadio.addEventListener("change", trocarClube);
}

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    // verifica se clube foi armazenado no localStorage
    const clube = localStorage.getItem("clube"); // obtem o clube armazenado no localStorage

    if (clube == "Brasil") {
      inRadios[0].checked = true;
    } else if (clube == "Pelotas") {
      inRadios[1].checked = true;
    } else {
      inRadios[2].checked = true;
    }
    trocarClube();
  }
};

const numeroVisita = () => {
  let numeroVisita = localStorage.getItem("numeroVisita")
  if(!localStorage.getItem("numeroVisita")){
    numeroVisita = 1
    numeroVisita = localStorage.setItem("numeroVisita", numeroVisita)
    resp.innerText = `Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.`
  }else{
    numeroVisita = parseInt(numeroVisita) + 1
    localStorage.setItem("numeroVisita", numeroVisita)
    resp.innerText = `Que bom que você voltou! Esta é a sua visita de número ${parseInt(numeroVisita)} ao nosso site.`
  }
}

numeroVisita()
// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);
